//noinspection JSUnresolvedFunction
const nodeAsync = require('async');
//noinspection JSUnresolvedFunction
const request = require('request');

//noinspection JSUnresolvedFunction
const fs = require('fs');
//noinspection JSUnresolvedFunction
const json2csv = require('json2csv');
//noinspection JSUnresolvedFunction
const log4js = require('log4js')

// ladder
// leagues to consider
const leagues = ["Breach", "Hardcore Breach"];

// passive fetches = |leagues| * total
//noinspection JSUnresolvedVariable
let [total, async_limit, limit] = process.argv.slice(2);
// boundaries set by ggg api
total = Math.min(15000, Math.max(1, total || 0));
limit = Math.min(200, Math.max(1, limit || 200));
// number of simultaneous async calls to ggg servers
async_limit = Math.min(Number.POSITIVE_INFINITY, Math.max(1, async_limit || 500));

// cut of remainder
total -= total % limit;

const start = Date.now();

//noinspection JSUnresolvedVariable
const log_filename = __dirname + `/out/get_trees_log`; // ${start}_
//noinspection JSUnresolvedVariable
const out_filename = __dirname + `/out/get_trees.csv`; // ${start}_


log4js.configure({
    appenders: [
        { type: 'console' },
        { type: 'file', filename: log_filename }
    ]
});

const logger = log4js.getLogger()
logger.setLevel('INFO');

/**
 * generates the url for the ggg ladder api
 * see https://www.pathofexile.com/developer/docs/api-resource-ladders
 *
 * @param league
 * @param offset
 * @param limit
 * @returns {string}
 */
const ladderApi = function (league, offset, limit) {
    return `http://api.pathofexile.com/ladders/${league}?offset=${offset}&limit=${limit}&track=true`
};


/**
 * partial inverse to ladderApi
 * @param api_url
 * @returns {string}
 */
const ladderApiToLeague = function (api_url) {
    return decodeURIComponent(api_url.match(/http:\/\/api.pathofexile.com\/ladders\/([^?]+)\?.*/)[1])
};

/**
 * generates the url to display all used passives
 *
 * @param character
 * @param account
 * @returns {string}
 */
const passivesApi = function (character, account) {
    return `https://www.pathofexile.com/character-window/get-passive-skills?character=${character}&accountName=${account}`
};

const runtime = (function () {
    logger.info(`started task with --total=${total} --limit=${limit} --async_limit=${async_limit}`);

    return function () {
        return Date.now() - start
    }
})();

logger.info(`fetching total of ${total} in chunks of ${limit}`);

// apparently there can exist name collisions with accounts
// so the get-passive-skills prob only returns the current character
// while the ladders api may return deleted chars
// this means that we will assign new passives to deleted chars if another one was created
// character id => ladder entry
let entries = new Map();

// passives_url => character id
let passives_urls_characters = new Map();

// w/o array.fill it results in empty values
// create the ladder urls for each league and flatten it into one array
const ladder_urls
    = [].concat(...leagues.map(league =>
    new Array(total / limit).fill(0).map((_, offset) => ladderApi(league, offset * limit, limit))));

logger.info(`fetching total of ${ladder_urls.length} ladders over ${leagues.length} leagues`);

const ladderComplete = function (results) {
    logger.info(`finished ladder fetch after ${runtime()}ms`);

    // flattened passive urls
    const passives_urls = [].concat(...results.map(l => {
        // parse the body and map on every entry its passives url
        const body = JSON.parse(l.body);

        const league = ladderApiToLeague(l.request.href);

        if (!body.entries) {
            console.warn("no entries", l.request.href, body);
            return false
        }

        return body.entries.map(e => {
            const passive_url = passivesApi(e['character'].name, e['account'].name);

            // save the entry
            entries.set(e['character'].id, Object.assign(e, {league: league}));
            // and a reverse mapping so we can get the entry via url
            passives_urls_characters.set(passive_url, e['character'].id);

            return passive_url
        })
    })).filter(u => u);

    //console.log(passives_urls)

    logger.info(`fetching ${passives_urls.length} passives`);

    nodeAsync.mapLimit(passives_urls, async_limit, request, (e, results) => {
        if (e) {
            logger.error(e)
        } else {
            passivesComplete(results)
        }
    })
};

const passivesComplete = function (results) {
    logger.info(`finished passive fetch after ${runtime()}ms (${runtime() / results.length}ms/passive)`);

    let trees = [];

    for (let result of results) {
        const passives = JSON.parse(result.body);

        if (passives) {
            const nodes = passives['hashes'];

            const passive_url = result.request.href;

            const entry = entries.get(passives_urls_characters.get(passive_url));

            //logger.debug(passive_url, entry)

            trees.push({
                entry: entry,
                nodes: nodes
            })
        } else {
            // FIXME first breach result returns false but browser is ok
            logger.debug(result.request.href)
        }
    }

    taskComplete(trees)
};

const taskComplete = function (trees) {
    const fields = [
        "entry.account.name",
        "entry.character.name",
        "entry.league",
        "entry.character.level",
        "entry.character.class",
        "entry.dead",
        "nodes",
        "entry.account.challenges.total",
    ];

    const csv = json2csv({data: trees, fields: fields});

    //noinspection JSUnresolvedFunction
    fs.writeFile(out_filename, csv, function (e) {
        if (e) {
            logger.error(e);
        } else {
            logger.info("csv saved")
        }
    });
};

// ggg has a rate limit so fuck me right
nodeAsync.mapLimit(ladder_urls, 3, request, (e, results) => {
    if (e) {
        logger.error(e);
    } else {
        ladderComplete(results);
    }
});