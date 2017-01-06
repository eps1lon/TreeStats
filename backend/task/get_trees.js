const nodeAsync = require('async')
const request = require('request')

var fs = require('fs')
var json2csv = require('json2csv')

// ladder
// what we want per fetch
const limit = 200
// what we want at max
const total = 2*limit

const start = Date.now()

const log_filename = __dirname + `/out/get_trees_log` // ${start}_
const out_filename = __dirname + `/out/get_trees.csv` // ${start}_

const ladderApi = (league, offset, limit) =>
    `http://api.pathofexile.com/ladders/${league}?offset=${offset}&limit=${limit}&track=true`

const passivesApi = (character, account) =>
    `https://www.pathofexile.com/character-window/get-passive-skills?character=${character}&accountName=${account}`

// list of lines that should be included in the report_log
var report_log = []

const runtime = (function () {
    report_log.push("started task at " + start)

    return function () {
        return Date.now() - start
    }
})()

// apparently there can exist name collisions with accounts
// so the get-passive-skills prob only returns the current character
// while the ladders api may return deleted chars
// this means that we will assign new passives to deleted chars if another one was created
// character id => ladder entry
var characters = new Map()

// passives_url => character id
var passives_urls_characters = new Map()

// w/o array.fill it results in empty values
var ladder_urls = new Array(total / limit).fill(0).map((_, offset) => ladderApi("Breach", offset * limit, limit))
report_log.push(`fetching ${ladder_urls.length} ladders`)

var ladderComplete = function (results) {
    report_log.push(`finished ladder fetch after ${runtime()}ms`)

    // flattened passive urls
    var passives_urls = [].concat(...results.map(l => {
        // parse the body and map on every entry its passives url
        var body = JSON.parse(l.body)

        if (l.statusCode == 404 || !body.entries) {
            console.warn("no entries", l.request.href)
            return false
        }

        return body.entries.map(e => {
            var passive_url = passivesApi(e.character.name, e.account.name)

            // save the entry
            characters.set(e.character.id, e)
            // and a reverse mapping so we can get the entry via url
            passives_urls_characters.set(passive_url, e.character.id)

            return passive_url
        })
    })).filter(u => u)

    //console.log(passives_urls)

    report_log.push(`fetching ${passives_urls.length} passives`)

    nodeAsync.map(passives_urls, request, (e, results) => {
        if (e) throw e
        passivesComplete(results)
    })
}

var passivesComplete = function (results) {
    report_log.push(`finished passive fetch after ${runtime()}ms`)

    var trees = []

    for (var result of results) {
        var passives = JSON.parse(result.body)

        if (passives) {
            var nodes = passives.hashes

            var passive_url = result.request.href

            var entry = characters.get(passives_urls_characters.get(passive_url))

            //console.log(passive_url, entry)

            trees.push({
                entry: entry,
                nodes: nodes
            })
        } else {
            // FIXME first breach result returns false but browser is ok
            report_log.push(result.request.href)
        }
    }

    taskComplete(trees)
}

var taskComplete = function (trees) {
    const fields = [
        "entry.account.name",
        "entry.character.name",
        "entry.character.level",
        "entry.character.class",
        "entry.dead",
        "nodes",
        "entry.account.challenges.total",
    ]

    const csv = json2csv({data: trees, fields: fields})

    fs.writeFile(out_filename, csv, function(err) {
        if (err) throw err;
        console.log('csv saved');
    });

    fs.writeFile(log_filename, report_log.join("\n"), function(err) {
        if (err) throw err;
        console.log('log saved');
    });
}

nodeAsync.map(ladder_urls, request, (e, results) => {
    if (e) {
        throw(e)
    }

    ladderComplete(results)
})