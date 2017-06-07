require("source-map-support").install();
/******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};
/******/
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/
/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId])
/******/ 			return installedModules[moduleId].exports;
/******/
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			i: moduleId,
/******/ 			l: false,
/******/ 			exports: {}
/******/ 		};
/******/
/******/ 		// Execute the module function
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/
/******/ 		// Flag the module as loaded
/******/ 		module.l = true;
/******/
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/
/******/
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;
/******/
/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;
/******/
/******/ 	// identity function for calling harmony imports with the correct context
/******/ 	__webpack_require__.i = function(value) { return value; };
/******/
/******/ 	// define getter function for harmony exports
/******/ 	__webpack_require__.d = function(exports, name, getter) {
/******/ 		if(!__webpack_require__.o(exports, name)) {
/******/ 			Object.defineProperty(exports, name, {
/******/ 				configurable: false,
/******/ 				enumerable: true,
/******/ 				get: getter
/******/ 			});
/******/ 		}
/******/ 	};
/******/
/******/ 	// getDefaultExport function for compatibility with non-harmony modules
/******/ 	__webpack_require__.n = function(module) {
/******/ 		var getter = module && module.__esModule ?
/******/ 			function getDefault() { return module['default']; } :
/******/ 			function getModuleExports() { return module; };
/******/ 		__webpack_require__.d(getter, 'a', getter);
/******/ 		return getter;
/******/ 	};
/******/
/******/ 	// Object.prototype.hasOwnProperty.call
/******/ 	__webpack_require__.o = function(object, property) { return Object.prototype.hasOwnProperty.call(object, property); };
/******/
/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "./";
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = 102);
/******/ })
/************************************************************************/
/******/ ({

/***/ 0:
/***/ (function(module, exports) {

module.exports = require("immutable");

/***/ }),

/***/ 1:
/***/ (function(module, exports) {

module.exports = require("path");

/***/ }),

/***/ 102:
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var _getIterator2 = __webpack_require__(2);

var _getIterator3 = _interopRequireDefault(_getIterator2);

var _assign = __webpack_require__(17);

var _assign2 = _interopRequireDefault(_assign);

var _from = __webpack_require__(50);

var _from2 = _interopRequireDefault(_from);

var _toConsumableArray2 = __webpack_require__(14);

var _toConsumableArray3 = _interopRequireDefault(_toConsumableArray2);

var _slicedToArray2 = __webpack_require__(7);

var _slicedToArray3 = _interopRequireDefault(_slicedToArray2);

var _map = __webpack_require__(13);

var _map2 = _interopRequireDefault(_map);

var _ref5;

var _async = __webpack_require__(49);

var nodeAsync = _interopRequireWildcard(_async);

var _request = __webpack_require__(54);

var _request2 = _interopRequireDefault(_request);

var _path = __webpack_require__(1);

var path = _interopRequireWildcard(_path);

var _fs = __webpack_require__(3);

var fs = _interopRequireWildcard(_fs);

var _log4js = __webpack_require__(53);

var log4js = _interopRequireWildcard(_log4js);

var _csv = __webpack_require__(52);

var csv = _interopRequireWildcard(_csv);

var _treesToCsvFile = __webpack_require__(12);

var _data = __webpack_require__(4);

var POE = _interopRequireWildcard(_data);

var _PassiveTreeUrl = __webpack_require__(47);

var TreeUrl = _interopRequireWildcard(_PassiveTreeUrl);

function _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; } else { var newObj = {}; if (obj != null) { for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) newObj[key] = obj[key]; } } newObj.default = obj; return newObj; } }

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var tree_ident = POE.current_tree;
var outFilename = function outFilename(root, now) {
  return (0, _treesToCsvFile.filename)(root, now, tree_ident);
};

// create some lookup tables for leagues, classes etc
var leagues = new _map2.default();
var _iteratorNormalCompletion = true;
var _didIteratorError = false;
var _iteratorError = undefined;

try {
  for (var _iterator = (0, _getIterator3.default)(POE.leagues), _step; !(_iteratorNormalCompletion = (_step = _iterator.next()).done); _iteratorNormalCompletion = true) {
    var _ref = _step.value;

    var _ref2 = (0, _slicedToArray3.default)(_ref, 2);

    var league_id = _ref2[0];
    var league = _ref2[1];

    if (league.active) {
      leagues.set(league.name, league_id);
    }
  }
} catch (err) {
  _didIteratorError = true;
  _iteratorError = err;
} finally {
  try {
    if (!_iteratorNormalCompletion && _iterator.return) {
      _iterator.return();
    }
  } finally {
    if (_didIteratorError) {
      throw _iteratorError;
    }
  }
}

var classes = new _map2.default();
var _iteratorNormalCompletion2 = true;
var _didIteratorError2 = false;
var _iteratorError2 = undefined;

try {
  for (var _iterator2 = (0, _getIterator3.default)(POE.classes), _step2; !(_iteratorNormalCompletion2 = (_step2 = _iterator2.next()).done); _iteratorNormalCompletion2 = true) {
    var _ref3 = _step2.value;

    var _ref4 = (0, _slicedToArray3.default)(_ref3, 2);

    var class_id = _ref4[0];
    var klass = _ref4[1];

    classes.set(klass.name, (0, _assign2.default)({
      id: class_id
    }, klass));
  }

  // passive fetches = |leagues| * total
} catch (err) {
  _didIteratorError2 = true;
  _iteratorError2 = err;
} finally {
  try {
    if (!_iteratorNormalCompletion2 && _iterator2.return) {
      _iterator2.return();
    }
  } finally {
    if (_didIteratorError2) {
      throw _iteratorError2;
    }
  }
}

var _process$argv$slice = process.argv.slice(2),
    _process$argv$slice2 = (0, _slicedToArray3.default)(_process$argv$slice, 4),
    total = _process$argv$slice2[0],
    async_limit = _process$argv$slice2[1],
    ladder_limit = _process$argv$slice2[2],
    api_rate_limit = _process$argv$slice2[3];
// boundaries set by ggg api


total = Math.min(15000, Math.max(1, total || 0));
ladder_limit = Math.min(200, Math.max(1, ladder_limit || 200));
// number of simultaneous async calls
async_limit = Math.min(Number.POSITIVE_INFINITY, Math.max(1, async_limit || 500));
// number of maximum calls to ggg api (this should be small
api_rate_limit = Math.min(Number.POSITIVE_INFINITY, Math.max(1, api_rate_limit || 5));

// cut of remainder
total -= total % ladder_limit;

var start = Date.now();

var root_path = __dirname;
var data_path = path.join(root_path, '/get_trees');

var log_filename = path.join(root_path, 'log/get_trees_log');

log4js.configure({
  appenders: [{ type: 'console' }, { type: 'file', filename: log_filename }]
});

var logger = log4js.getLogger();
logger.setLevel('INFO');

/**
 * generates the url for the ggg ladder api
 * see https://www.pathofexile.com/developer/docs/api-resource-ladders
 *
 * @param {string} league
 * @param {number} offset
 * @param {number} limit
 * @return {string}
 */
var ladderApi = function ladderApi(league, offset, limit) {
  return 'http://api.pathofexile.com/ladders/' + league + '?offset=' + offset + '&limit=' + limit + '&track=true';
};

/**
 * partial inverse to ladderApi
 * @param {number} api_url
 * @return {string}
 */
var ladderApiToLeague = function ladderApiToLeague(api_url) {
  return decodeURIComponent(api_url.match(/http:\/\/api.pathofexile.com\/ladders\/([^?]+)\?.*/)[1]);
};

/**
 * generates the url to display all used passives
 *
 * @param {string} character
 * @param {string} account
 * @return {string}
 */
var passivesApi = function passivesApi(character, account) {
  return 'https://www.pathofexile.com/character-window/get-passive-skills?character=' + character + '&accountName=' + account;
};

/**
 * creates an object which maps the json data generated in this script
 * to a non nested map
 *
 * @param {Object} data
 * @return {{id, last_active: (*|number), league: (string|*),
 * xp: *, class: (*|string), dead: *,
 * nodes: (*|Array|nodes|ny|Map), challenges: *}}
 */
var csvTransform = function csvTransform(data) {
  if (data.character === undefined || data.account === undefined) {
    return {};
  }

  var klass = classes.get(data.character.class);

  var tree_url = TreeUrl.encode(POE.trees.get(POE.current_tree).version, klass.character_class, klass.ascendancy, data.nodes || []);

  return {
    id: data.character.id,
    last_active: data.last_active,
    league: leagues.get(data.league),
    xp: data.character.experience,
    class: klass.id,
    dead: data.dead,
    // on 10k passives we are saving around 2MB by encoding the nodes
    // (4.8MB down to 2.6MB)
    nodes: tree_url,
    challenges: data.account.challenges.total
  };
};

/**
 * checks if the new_entry was active since old_entry
 *
 * @param {Object} old_entry_csv
 * @param {Object} new_entry_api
 * @return {boolean}
 */
var ladderActive = function ladderActive(old_entry_csv, new_entry_api) {
  if (!old_entry_csv) {
    return true;
  }

  var new_entry_csv = csvTransform(new_entry_api);

  return old_entry_csv.xp != new_entry_csv.xp || old_entry_csv.dead != new_entry_csv.dead;
};

var runtime = function () {
  logger.info('started task with ' + ('--total=' + total + ' ') + ('--limit=' + ladder_limit + ' ') + ('--async_limit=' + async_limit + ' ') + ('--api_rate_limit=' + api_rate_limit));

  return function () {
    return Date.now() - start;
  };
}();

var out_filename = outFilename(data_path, start);

// get the last out
var latest = path.join(data_path, fs.readdirSync(data_path).reduce(function (latest, file) {
  if ((0, _treesToCsvFile.ctimeOutFile)(latest) < (0, _treesToCsvFile.ctimeOutFile)(file)) {
    return file;
  }
  return latest;
}, outFilename(data_path, Number.NEGATIVE_INFINITY)));

logger.info('fetching total of ' + total + ' in chunks of ' + async_limit);

// apparently there can exist name collisions with accounts
// so the get-passive-skills prob only returns the current character
// while the ladders api may return deleted chars
// this means that we will assign new passives to deleted chars
// if another one was created
// character id => ladder entry
var entries = new _map2.default();

// passives_url => character id
var passives_urls_characters = new _map2.default();

// w/o array.fill it results in empty values
// create the ladder urls for each league and flatten it into one array
var ladder_urls = (_ref5 = []).concat.apply(_ref5, (0, _toConsumableArray3.default)((0, _from2.default)(leagues.keys()).map(function (league) {
  return new Array(total / ladder_limit).fill(0).map(function (_, offset) {
    return ladderApi(league, offset * ladder_limit, ladder_limit);
  });
})));

logger.info('fetching total of ' + ladder_urls.length + (' ladders over ' + leagues.size + ' leagues'));

fs.exists(latest, function (exists) {
  var old_trees = new _map2.default();

  if (exists) {
    fs.createReadStream(latest).pipe(csv.parse({
      delimiter: ',',
      columns: true
    }, function (e, data) {
      if (!e) {
        old_trees = new _map2.default(data.map(function (entry) {
          return [entry.id, entry];
        }));
      }

      oldTreesComplete(old_trees);
    }));
  } else {
    oldTreesComplete(old_trees);
  }
});

var ladderComplete = function ladderComplete(results, old_trees) {
  var _ref6;

  logger.info('finished ladder fetch after ' + runtime() + 'ms');

  // flattened passive urls
  var passives_urls = (_ref6 = []).concat.apply(_ref6, (0, _toConsumableArray3.default)(results.map(function (l) {
    // parse the body and map on every entry its passives url
    var body = JSON.parse(l.body);

    var league = ladderApiToLeague(l.request.href);

    if (!body.entries) {
      logger.warn('no entries', l.request.href, body);
      return false;
    }

    return body.entries.map(function (e) {
      var passive_url = passivesApi(e['character'].name, e['account'].name);
      var id = e['character'].id;
      var old_entry = old_trees.get(id);

      // save the entry
      entries.set(id, (0, _assign2.default)(e, {
        league: league,
        last_active: ladderActive(old_entry, e) ? start : old_entry.last_active
      }));
      // and a reverse mapping so we can get the entry via url
      passives_urls_characters.set(passive_url, e['character'].id);

      return passive_url;
    });
  }))).filter(function (u) {
    return u;
  });

  // logger.info(passives_urls)

  logger.info('fetching ' + passives_urls.length + ' passives');

  // progress bar
  var progress = 0; // number of urls fetched
  var in_steps = passives_urls.length / 10 | 0; // every ~10%

  nodeAsync.mapLimit(passives_urls, async_limit, function (url, callback) {
    // just a wrapper that updates the progress
    (0, _request2.default)(url, null, function (err, transformed) {
      progress++;

      if (progress % in_steps == 0) {
        logger.info('finished' + ((100 * progress / passives_urls.length).toFixed(2) + '%'));
      }

      if (err) {
        logger.warn(err);
      }
      callback(null, transformed);
    }).on('error', function (e) {
      return logger.warn(e);
    });
  }, function (err, results) {
    if (err) {
      logger.warn(err);
    } else {
      passivesComplete(results);
    }
  });
};

var passivesComplete = function passivesComplete(results) {
  logger.info('finished passive fetch after ' + runtime() + 'ms' + ('(' + runtime() / results.length + 'ms/passive)'));

  var trees = [];

  var _iteratorNormalCompletion3 = true;
  var _didIteratorError3 = false;
  var _iteratorError3 = undefined;

  try {
    for (var _iterator3 = (0, _getIterator3.default)(results), _step3; !(_iteratorNormalCompletion3 = (_step3 = _iterator3.next()).done); _iteratorNormalCompletion3 = true) {
      var result = _step3.value;

      if (!result) continue;
      var passive_url = result.request.href;
      var passives = undefined;

      try {
        passives = JSON.parse(result.body);
      } catch (e) {
        logger.warn('bad request for ' + passive_url);
        continue;
      }

      if (passives) {
        var nodes = passives['hashes'];

        var entry = entries.get(passives_urls_characters.get(passive_url));

        // logger.debug(passive_url, entry)

        trees.push((0, _assign2.default)({
          nodes: nodes
        }, entry));
      } else {
        // FIXME first breach result returns false but browser is ok
        logger.debug(passive_url);
      }
    }
  } catch (err) {
    _didIteratorError3 = true;
    _iteratorError3 = err;
  } finally {
    try {
      if (!_iteratorNormalCompletion3 && _iterator3.return) {
        _iterator3.return();
      }
    } finally {
      if (_didIteratorError3) {
        throw _iteratorError3;
      }
    }
  }

  taskComplete(trees);
};

var taskComplete = function taskComplete(trees) {
  logger.info('finished task in ' + (runtime() / 1000).toFixed(2) + 's');

  csv.transform(trees, csvTransform).pipe(csv.stringify({
    header: true
  })).pipe(fs.createWriteStream(out_filename));
};

var oldTreesComplete = function oldTreesComplete(old_trees) {
  // ggg has a rate ladder_limit so fuck me right
  nodeAsync.mapLimit(ladder_urls, api_rate_limit, _request2.default, function (e, results) {
    if (e) {
      logger.warn(e);
    } else {
      ladderComplete(results, old_trees);
    }
  });
};

/***/ }),

/***/ 12:
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.filename = filename;
exports.fileProps = fileProps;
exports.ctimeOutFile = ctimeOutFile;

var _path = __webpack_require__(1);

var path = _interopRequireWildcard(_path);

function _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; } else { var newObj = {}; if (obj != null) { for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) newObj[key] = obj[key]; } } newObj.default = obj; return newObj; } }

/**
 * generates the filename for the csv output
 * @param {string} root
 * @param {number} now
 * @param {string} tree_ident
 * @return {*}
 */
function filename(root, now, tree_ident) {
  // adjust gitignore accordingly
  return path.join(root, now + '_' + tree_ident + '_get_trees.csv');
};

/**
 * @param {string} filename
 * @return {Object} reverse of outFilename
 */
function fileProps() {
  var filename = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : '';

  var match = new RegExp('^([^_]+)_([^_]+)_get_trees.csv$').exec(path.basename(filename));

  if (match === null) {
    return undefined;
  } else {
    return {
      ctime: +match[1],
      tree_ident: match[2]
    };
  }
};

/**
 * extracts the creation date from a filename which
 * should be a js Date at the start of the basename
 * @param {string} filename
 * @return {number}
 */
function ctimeOutFile(filename) {
  var props = fileProps(filename);

  if (props === undefined) {
    return Number.NEGATIVE_INFINITY;
  } else {
    return props.ctime;
  }
};

/***/ }),

/***/ 13:
/***/ (function(module, exports) {

module.exports = require("babel-runtime/core-js/map");

/***/ }),

/***/ 14:
/***/ (function(module, exports) {

module.exports = require("babel-runtime/helpers/toConsumableArray");

/***/ }),

/***/ 17:
/***/ (function(module, exports) {

module.exports = require("babel-runtime/core-js/object/assign");

/***/ }),

/***/ 2:
/***/ (function(module, exports) {

module.exports = require("babel-runtime/core-js/get-iterator");

/***/ }),

/***/ 3:
/***/ (function(module, exports) {

module.exports = require("fs");

/***/ }),

/***/ 4:
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var Map = __webpack_require__(0).Map;

/* eslint max-len: ["error", 120]*/
/**
 *
 */
module.exports = {
  // Map<string, LeagueProps>
  leagues: Map([['1', { name: 'Breach', active: false, permanent: false }], ['2', { name: 'Hardcore Breach', active: false, permanent: false }], ['3', { name: 'Legacy', active: true, permanent: false }], ['4', { name: 'Hardcore Legacy', active: true, permanent: false }], ['5', { name: 'Standard', active: false, permanent: false }], ['6', { name: 'SSF Legacy', active: true, permanent: false }], ['7', { name: 'SSF HC Legacy', active: true, permanent: false }]]),
  // Map<string, ClassProps>
  classes: Map([
  // name, parent is the parent class for ascendancies ie
  // character_class, ascendancy is used for url generation
  ['1', { name: 'Marauder', parent: null, character_class: 1, ascendancy: 0 }], ['2', { name: 'Templar', parent: null, character_class: 5, ascendancy: 0 }], ['3', { name: 'Witch', parent: null, character_class: 3, ascendancy: 0 }], ['4', { name: 'Shadow', parent: null, character_class: 6, ascendancy: 0 }], ['5', { name: 'Ranger', parent: null, character_class: 2, ascendancy: 0 }], ['6', { name: 'Duelist', parent: null, character_class: 4, ascendancy: 0 }], ['7', { name: 'Scion', parent: null, character_class: 7, ascendancy: 0 }], ['8', { name: 'Berserker', parent: 1, character_class: 1, ascendancy: 2 }], ['9', { name: 'Chieftain', parent: 1, character_class: 1, ascendancy: 3 }], ['10', { name: 'Juggernaut', parent: 1, character_class: 1, ascendancy: 1 }], ['11', { name: 'Inquisitor', parent: 2, character_class: 5, ascendancy: 1 }], ['12', { name: 'Guardian', parent: 2, character_class: 5, ascendancy: 3 }], ['13', { name: 'Hierophant', parent: 2, character_class: 5, ascendancy: 2 }], ['14', { name: 'Necromancer', parent: 3, character_class: 3, ascendancy: 3 }], ['15', { name: 'Occultist', parent: 3, character_class: 3, ascendancy: 1 }], ['16', { name: 'Elementalist', parent: 3, character_class: 3, ascendancy: 2 }], ['17', { name: 'Assassin', parent: 4, character_class: 6, ascendancy: 1 }], ['18', { name: 'Saboteur', parent: 4, character_class: 6, ascendancy: 3 }], ['19', { name: 'Trickster', parent: 4, character_class: 6, ascendancy: 2 }], ['20', { name: 'Deadeye', parent: 5, character_class: 2, ascendancy: 2 }], ['21', { name: 'Raider', parent: 5, character_class: 2, ascendancy: 1 }], ['22', { name: 'Pathfinder', parent: 5, character_class: 2, ascendancy: 3 }], ['23', { name: 'Slayer', parent: 6, character_class: 4, ascendancy: 1 }], ['24', { name: 'Gladiator', parent: 6, character_class: 4, ascendancy: 2 }], ['25', { name: 'Champion', parent: 6, character_class: 4, ascendancy: 3 }], ['26', { name: 'Ascendant', parent: 7, character_class: 7, ascendancy: 1 }]]),
  trees: Map([
  // dont use underscores in the ident or adjust regexp that rely on format
  ['250', { name: '2.5.0 Breach', version: 4 }], ['260', { name: '2.6.0 Legacy', version: 4 }]]),
  current_tree: '260'
};

/***/ }),

/***/ 47:
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var _getIterator2 = __webpack_require__(2);

var _getIterator3 = _interopRequireDefault(_getIterator2);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

/* eslint new-cap: off */
var Buffer = __webpack_require__(92).Buffer;

module.exports = {
  /**
   *
   * @param {string} str the encoded string from an url
   * @return {{version: *, starting_class: *, ascendancy: *,
   * fullscreen: number, nodes: Array}}
   */
  decode: function decode(str) {
    // deduced from loadHistoryUrl
    var buf = Buffer(str.replace(/-/g, '+').replace(/_/g, '/'), 'base64');

    var i = 0;

    var version = buf.readInt32BE(i);
    i += 4;

    var starting_class = buf.readInt8(i);
    i += 1;

    var ascendancy = buf.readInt8(i);
    i += 1;

    var fullscreen = 0;
    // source says > 0, PoESkillTree > 3
    // we will adjust our offset before we start looping
    if (version > 0) {
      fullscreen = buf.readInt8(i);
      i += 1;
    }

    var nodes = [];

    // see version comment
    for (i -= (buf.length - i) % 2; i < buf.length; i += 2) {
      nodes.push(buf.readUInt16BE(i));
    }

    return {
      version: version,
      starting_class: starting_class,
      ascendancy: ascendancy,
      fullscreen: fullscreen,
      nodes: nodes
    };
  },
  /**
   * computes string for usage in tree planers
   *
   * @param {number} version
   * @param {number} starting_class
   * @param {number} ascendancy
   * @param {number[]} nodes
   * @param {number} fullscreen
   * @return {string}
   */
  encode: function encode(version, starting_class, ascendancy, nodes) {
    var fullscreen = arguments.length > 4 && arguments[4] !== undefined ? arguments[4] : 0;

    var size = nodes.length * 2 + 6 + (version > 0 ? 1 : 0);
    var i = 0;

    var buf = new Buffer(size);

    buf.writeInt32BE(version, i);
    i += 4;

    buf.writeInt8(starting_class, i);
    i += 1;

    buf.writeInt8(ascendancy, i);
    i += 1;

    if (version > 0) {
      buf.writeInt8(fullscreen, i);
      i += 1;
    }

    var _iteratorNormalCompletion = true;
    var _didIteratorError = false;
    var _iteratorError = undefined;

    try {
      for (var _iterator = (0, _getIterator3.default)(nodes), _step; !(_iteratorNormalCompletion = (_step = _iterator.next()).done); _iteratorNormalCompletion = true) {
        var node = _step.value;

        buf.writeUInt16BE(node, i);

        i += 2;
      }
    } catch (err) {
      _didIteratorError = true;
      _iteratorError = err;
    } finally {
      try {
        if (!_iteratorNormalCompletion && _iterator.return) {
          _iterator.return();
        }
      } finally {
        if (_didIteratorError) {
          throw _iteratorError;
        }
      }
    }

    return buf.toString('base64').replace(/\+/g, '-').replace(/\//g, '_');
  }
};

/***/ }),

/***/ 49:
/***/ (function(module, exports) {

module.exports = require("async");

/***/ }),

/***/ 50:
/***/ (function(module, exports) {

module.exports = require("babel-runtime/core-js/array/from");

/***/ }),

/***/ 52:
/***/ (function(module, exports) {

module.exports = require("csv");

/***/ }),

/***/ 53:
/***/ (function(module, exports) {

module.exports = require("log4js");

/***/ }),

/***/ 54:
/***/ (function(module, exports) {

module.exports = require("request");

/***/ }),

/***/ 7:
/***/ (function(module, exports) {

module.exports = require("babel-runtime/helpers/slicedToArray");

/***/ }),

/***/ 92:
/***/ (function(module, exports) {

module.exports = require("buffer/");

/***/ })

/******/ });
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vd2VicGFjay9ib290c3RyYXAgMGFjMTM5Nzg3NWZkMjMyMjVlN2QiLCJ3ZWJwYWNrOi8vL2V4dGVybmFsIFwiaW1tdXRhYmxlXCI/MWQyMCIsIndlYnBhY2s6Ly8vZXh0ZXJuYWwgXCJwYXRoXCI/NWIyYSIsIndlYnBhY2s6Ly8vLi9zcmMvc2NyaXB0cy9nZXRfdHJlZXMuanMiLCJ3ZWJwYWNrOi8vLy4vc3JjL3NjcmlwdHMvbGliL3RyZWVzVG9Dc3ZGaWxlLmpzP2U0NDMiLCJ3ZWJwYWNrOi8vL2V4dGVybmFsIFwiYmFiZWwtcnVudGltZS9jb3JlLWpzL21hcFwiP2FlZTAiLCJ3ZWJwYWNrOi8vL2V4dGVybmFsIFwiYmFiZWwtcnVudGltZS9oZWxwZXJzL3RvQ29uc3VtYWJsZUFycmF5XCI/NTlmMiIsIndlYnBhY2s6Ly8vZXh0ZXJuYWwgXCJiYWJlbC1ydW50aW1lL2NvcmUtanMvb2JqZWN0L2Fzc2lnblwiP2RlYzQiLCJ3ZWJwYWNrOi8vL2V4dGVybmFsIFwiYmFiZWwtcnVudGltZS9jb3JlLWpzL2dldC1pdGVyYXRvclwiPzU1YTMiLCJ3ZWJwYWNrOi8vL2V4dGVybmFsIFwiZnNcIiIsIndlYnBhY2s6Ly8vLi9zcmMvcG9lL2RhdGEuanM/MjllYiIsIndlYnBhY2s6Ly8vLi9zcmMvcG9lL1Bhc3NpdmVUcmVlVXJsLmpzIiwid2VicGFjazovLy9leHRlcm5hbCBcImFzeW5jXCIiLCJ3ZWJwYWNrOi8vL2V4dGVybmFsIFwiYmFiZWwtcnVudGltZS9jb3JlLWpzL2FycmF5L2Zyb21cIiIsIndlYnBhY2s6Ly8vZXh0ZXJuYWwgXCJjc3ZcIiIsIndlYnBhY2s6Ly8vZXh0ZXJuYWwgXCJsb2c0anNcIiIsIndlYnBhY2s6Ly8vZXh0ZXJuYWwgXCJyZXF1ZXN0XCIiLCJ3ZWJwYWNrOi8vL2V4dGVybmFsIFwiYmFiZWwtcnVudGltZS9oZWxwZXJzL3NsaWNlZFRvQXJyYXlcIj8zNWM0Iiwid2VicGFjazovLy9leHRlcm5hbCBcImJ1ZmZlci9cIiJdLCJuYW1lcyI6WyJub2RlQXN5bmMiLCJwYXRoIiwiZnMiLCJsb2c0anMiLCJjc3YiLCJQT0UiLCJUcmVlVXJsIiwidHJlZV9pZGVudCIsImN1cnJlbnRfdHJlZSIsIm91dEZpbGVuYW1lIiwicm9vdCIsIm5vdyIsImxlYWd1ZXMiLCJsZWFndWVfaWQiLCJsZWFndWUiLCJhY3RpdmUiLCJzZXQiLCJuYW1lIiwiY2xhc3NlcyIsImNsYXNzX2lkIiwia2xhc3MiLCJpZCIsInByb2Nlc3MiLCJhcmd2Iiwic2xpY2UiLCJ0b3RhbCIsImFzeW5jX2xpbWl0IiwibGFkZGVyX2xpbWl0IiwiYXBpX3JhdGVfbGltaXQiLCJNYXRoIiwibWluIiwibWF4IiwiTnVtYmVyIiwiUE9TSVRJVkVfSU5GSU5JVFkiLCJzdGFydCIsIkRhdGUiLCJyb290X3BhdGgiLCJfX2Rpcm5hbWUiLCJkYXRhX3BhdGgiLCJqb2luIiwibG9nX2ZpbGVuYW1lIiwiY29uZmlndXJlIiwiYXBwZW5kZXJzIiwidHlwZSIsImZpbGVuYW1lIiwibG9nZ2VyIiwiZ2V0TG9nZ2VyIiwic2V0TGV2ZWwiLCJsYWRkZXJBcGkiLCJvZmZzZXQiLCJsaW1pdCIsImxhZGRlckFwaVRvTGVhZ3VlIiwiYXBpX3VybCIsImRlY29kZVVSSUNvbXBvbmVudCIsIm1hdGNoIiwicGFzc2l2ZXNBcGkiLCJjaGFyYWN0ZXIiLCJhY2NvdW50IiwiY3N2VHJhbnNmb3JtIiwiZGF0YSIsInVuZGVmaW5lZCIsImdldCIsImNsYXNzIiwidHJlZV91cmwiLCJlbmNvZGUiLCJ0cmVlcyIsInZlcnNpb24iLCJjaGFyYWN0ZXJfY2xhc3MiLCJhc2NlbmRhbmN5Iiwibm9kZXMiLCJsYXN0X2FjdGl2ZSIsInhwIiwiZXhwZXJpZW5jZSIsImRlYWQiLCJjaGFsbGVuZ2VzIiwibGFkZGVyQWN0aXZlIiwib2xkX2VudHJ5X2NzdiIsIm5ld19lbnRyeV9hcGkiLCJuZXdfZW50cnlfY3N2IiwicnVudGltZSIsImluZm8iLCJvdXRfZmlsZW5hbWUiLCJsYXRlc3QiLCJyZWFkZGlyU3luYyIsInJlZHVjZSIsImZpbGUiLCJORUdBVElWRV9JTkZJTklUWSIsImVudHJpZXMiLCJwYXNzaXZlc191cmxzX2NoYXJhY3RlcnMiLCJsYWRkZXJfdXJscyIsImNvbmNhdCIsImtleXMiLCJtYXAiLCJBcnJheSIsImZpbGwiLCJfIiwibGVuZ3RoIiwic2l6ZSIsImV4aXN0cyIsIm9sZF90cmVlcyIsImNyZWF0ZVJlYWRTdHJlYW0iLCJwaXBlIiwicGFyc2UiLCJkZWxpbWl0ZXIiLCJjb2x1bW5zIiwiZSIsImVudHJ5Iiwib2xkVHJlZXNDb21wbGV0ZSIsImxhZGRlckNvbXBsZXRlIiwicmVzdWx0cyIsInBhc3NpdmVzX3VybHMiLCJsIiwiYm9keSIsIkpTT04iLCJyZXF1ZXN0IiwiaHJlZiIsIndhcm4iLCJwYXNzaXZlX3VybCIsIm9sZF9lbnRyeSIsImZpbHRlciIsInUiLCJwcm9ncmVzcyIsImluX3N0ZXBzIiwibWFwTGltaXQiLCJ1cmwiLCJjYWxsYmFjayIsImVyciIsInRyYW5zZm9ybWVkIiwidG9GaXhlZCIsIm9uIiwicGFzc2l2ZXNDb21wbGV0ZSIsInJlc3VsdCIsInBhc3NpdmVzIiwicHVzaCIsImRlYnVnIiwidGFza0NvbXBsZXRlIiwidHJhbnNmb3JtIiwic3RyaW5naWZ5IiwiaGVhZGVyIiwiY3JlYXRlV3JpdGVTdHJlYW0iLCJmaWxlUHJvcHMiLCJjdGltZU91dEZpbGUiLCJSZWdFeHAiLCJleGVjIiwiYmFzZW5hbWUiLCJjdGltZSIsInByb3BzIiwiTWFwIiwicmVxdWlyZSIsIm1vZHVsZSIsImV4cG9ydHMiLCJwZXJtYW5lbnQiLCJwYXJlbnQiLCJCdWZmZXIiLCJkZWNvZGUiLCJzdHIiLCJidWYiLCJyZXBsYWNlIiwiaSIsInJlYWRJbnQzMkJFIiwic3RhcnRpbmdfY2xhc3MiLCJyZWFkSW50OCIsImZ1bGxzY3JlZW4iLCJyZWFkVUludDE2QkUiLCJ3cml0ZUludDMyQkUiLCJ3cml0ZUludDgiLCJub2RlIiwid3JpdGVVSW50MTZCRSIsInRvU3RyaW5nIl0sIm1hcHBpbmdzIjoi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dF90cmVlcy5qcyIsInNvdXJjZXNDb250ZW50IjpbIiBcdC8vIFRoZSBtb2R1bGUgY2FjaGVcbiBcdHZhciBpbnN0YWxsZWRNb2R1bGVzID0ge307XG5cbiBcdC8vIFRoZSByZXF1aXJlIGZ1bmN0aW9uXG4gXHRmdW5jdGlvbiBfX3dlYnBhY2tfcmVxdWlyZV9fKG1vZHVsZUlkKSB7XG5cbiBcdFx0Ly8gQ2hlY2sgaWYgbW9kdWxlIGlzIGluIGNhY2hlXG4gXHRcdGlmKGluc3RhbGxlZE1vZHVsZXNbbW9kdWxlSWRdKVxuIFx0XHRcdHJldHVybiBpbnN0YWxsZWRNb2R1bGVzW21vZHVsZUlkXS5leHBvcnRzO1xuXG4gXHRcdC8vIENyZWF0ZSBhIG5ldyBtb2R1bGUgKGFuZCBwdXQgaXQgaW50byB0aGUgY2FjaGUpXG4gXHRcdHZhciBtb2R1bGUgPSBpbnN0YWxsZWRNb2R1bGVzW21vZHVsZUlkXSA9IHtcbiBcdFx0XHRpOiBtb2R1bGVJZCxcbiBcdFx0XHRsOiBmYWxzZSxcbiBcdFx0XHRleHBvcnRzOiB7fVxuIFx0XHR9O1xuXG4gXHRcdC8vIEV4ZWN1dGUgdGhlIG1vZHVsZSBmdW5jdGlvblxuIFx0XHRtb2R1bGVzW21vZHVsZUlkXS5jYWxsKG1vZHVsZS5leHBvcnRzLCBtb2R1bGUsIG1vZHVsZS5leHBvcnRzLCBfX3dlYnBhY2tfcmVxdWlyZV9fKTtcblxuIFx0XHQvLyBGbGFnIHRoZSBtb2R1bGUgYXMgbG9hZGVkXG4gXHRcdG1vZHVsZS5sID0gdHJ1ZTtcblxuIFx0XHQvLyBSZXR1cm4gdGhlIGV4cG9ydHMgb2YgdGhlIG1vZHVsZVxuIFx0XHRyZXR1cm4gbW9kdWxlLmV4cG9ydHM7XG4gXHR9XG5cblxuIFx0Ly8gZXhwb3NlIHRoZSBtb2R1bGVzIG9iamVjdCAoX193ZWJwYWNrX21vZHVsZXNfXylcbiBcdF9fd2VicGFja19yZXF1aXJlX18ubSA9IG1vZHVsZXM7XG5cbiBcdC8vIGV4cG9zZSB0aGUgbW9kdWxlIGNhY2hlXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLmMgPSBpbnN0YWxsZWRNb2R1bGVzO1xuXG4gXHQvLyBpZGVudGl0eSBmdW5jdGlvbiBmb3IgY2FsbGluZyBoYXJtb255IGltcG9ydHMgd2l0aCB0aGUgY29ycmVjdCBjb250ZXh0XG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLmkgPSBmdW5jdGlvbih2YWx1ZSkgeyByZXR1cm4gdmFsdWU7IH07XG5cbiBcdC8vIGRlZmluZSBnZXR0ZXIgZnVuY3Rpb24gZm9yIGhhcm1vbnkgZXhwb3J0c1xuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5kID0gZnVuY3Rpb24oZXhwb3J0cywgbmFtZSwgZ2V0dGVyKSB7XG4gXHRcdGlmKCFfX3dlYnBhY2tfcmVxdWlyZV9fLm8oZXhwb3J0cywgbmFtZSkpIHtcbiBcdFx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgbmFtZSwge1xuIFx0XHRcdFx0Y29uZmlndXJhYmxlOiBmYWxzZSxcbiBcdFx0XHRcdGVudW1lcmFibGU6IHRydWUsXG4gXHRcdFx0XHRnZXQ6IGdldHRlclxuIFx0XHRcdH0pO1xuIFx0XHR9XG4gXHR9O1xuXG4gXHQvLyBnZXREZWZhdWx0RXhwb3J0IGZ1bmN0aW9uIGZvciBjb21wYXRpYmlsaXR5IHdpdGggbm9uLWhhcm1vbnkgbW9kdWxlc1xuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5uID0gZnVuY3Rpb24obW9kdWxlKSB7XG4gXHRcdHZhciBnZXR0ZXIgPSBtb2R1bGUgJiYgbW9kdWxlLl9fZXNNb2R1bGUgP1xuIFx0XHRcdGZ1bmN0aW9uIGdldERlZmF1bHQoKSB7IHJldHVybiBtb2R1bGVbJ2RlZmF1bHQnXTsgfSA6XG4gXHRcdFx0ZnVuY3Rpb24gZ2V0TW9kdWxlRXhwb3J0cygpIHsgcmV0dXJuIG1vZHVsZTsgfTtcbiBcdFx0X193ZWJwYWNrX3JlcXVpcmVfXy5kKGdldHRlciwgJ2EnLCBnZXR0ZXIpO1xuIFx0XHRyZXR1cm4gZ2V0dGVyO1xuIFx0fTtcblxuIFx0Ly8gT2JqZWN0LnByb3RvdHlwZS5oYXNPd25Qcm9wZXJ0eS5jYWxsXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLm8gPSBmdW5jdGlvbihvYmplY3QsIHByb3BlcnR5KSB7IHJldHVybiBPYmplY3QucHJvdG90eXBlLmhhc093blByb3BlcnR5LmNhbGwob2JqZWN0LCBwcm9wZXJ0eSk7IH07XG5cbiBcdC8vIF9fd2VicGFja19wdWJsaWNfcGF0aF9fXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLnAgPSBcIi4vXCI7XG5cbiBcdC8vIExvYWQgZW50cnkgbW9kdWxlIGFuZCByZXR1cm4gZXhwb3J0c1xuIFx0cmV0dXJuIF9fd2VicGFja19yZXF1aXJlX18oX193ZWJwYWNrX3JlcXVpcmVfXy5zID0gMTAyKTtcblxuXG5cbi8vIFdFQlBBQ0sgRk9PVEVSIC8vXG4vLyB3ZWJwYWNrL2Jvb3RzdHJhcCAwYWMxMzk3ODc1ZmQyMzIyNWU3ZCIsIm1vZHVsZS5leHBvcnRzID0gcmVxdWlyZShcImltbXV0YWJsZVwiKTtcblxuXG4vLy8vLy8vLy8vLy8vLy8vLy9cbi8vIFdFQlBBQ0sgRk9PVEVSXG4vLyBleHRlcm5hbCBcImltbXV0YWJsZVwiXG4vLyBtb2R1bGUgaWQgPSAwXG4vLyBtb2R1bGUgY2h1bmtzID0gMCAxIDIiLCJtb2R1bGUuZXhwb3J0cyA9IHJlcXVpcmUoXCJwYXRoXCIpO1xuXG5cbi8vLy8vLy8vLy8vLy8vLy8vL1xuLy8gV0VCUEFDSyBGT09URVJcbi8vIGV4dGVybmFsIFwicGF0aFwiXG4vLyBtb2R1bGUgaWQgPSAxXG4vLyBtb2R1bGUgY2h1bmtzID0gMCAxIDIgMyA0IiwiaW1wb3J0ICogYXMgbm9kZUFzeW5jIGZyb20gJ2FzeW5jJztcbmltcG9ydCB7IGRlZmF1bHQgYXMgcmVxdWVzdCB9IGZyb20gJ3JlcXVlc3QnO1xuaW1wb3J0ICogYXMgcGF0aCBmcm9tICdwYXRoJztcbmltcG9ydCAqIGFzIGZzIGZyb20gJ2ZzJztcbmltcG9ydCAqIGFzIGxvZzRqcyBmcm9tICdsb2c0anMnO1xuaW1wb3J0ICogYXMgY3N2IGZyb20gJ2Nzdic7XG5cbmltcG9ydCB7IGN0aW1lT3V0RmlsZSwgZmlsZW5hbWUgfSBmcm9tICcuL2xpYi90cmVlc1RvQ3N2RmlsZSc7XG5cbmltcG9ydCAqIGFzIFBPRSBmcm9tICcuLi9wb2UvZGF0YS5qcyc7XG5pbXBvcnQgKiBhcyBUcmVlVXJsIGZyb20gJy4uL3BvZS9QYXNzaXZlVHJlZVVybCc7XG5cbmNvbnN0IHRyZWVfaWRlbnQgPSBQT0UuY3VycmVudF90cmVlO1xuY29uc3Qgb3V0RmlsZW5hbWUgPSAocm9vdCwgbm93KSA9PiBmaWxlbmFtZShyb290LCBub3csIHRyZWVfaWRlbnQpO1xuXG4vLyBjcmVhdGUgc29tZSBsb29rdXAgdGFibGVzIGZvciBsZWFndWVzLCBjbGFzc2VzIGV0Y1xuY29uc3QgbGVhZ3VlcyA9IG5ldyBNYXAoKTtcbmZvciAobGV0IFtsZWFndWVfaWQsIGxlYWd1ZV0gb2YgUE9FLmxlYWd1ZXMpIHtcbiAgaWYgKGxlYWd1ZS5hY3RpdmUpIHtcbiAgICBsZWFndWVzLnNldChsZWFndWUubmFtZSwgbGVhZ3VlX2lkKTtcbiAgfVxufVxuY29uc3QgY2xhc3NlcyA9IG5ldyBNYXAoKTtcbmZvciAobGV0IFtjbGFzc19pZCwga2xhc3NdIG9mIFBPRS5jbGFzc2VzKSB7XG4gIGNsYXNzZXMuc2V0KGtsYXNzLm5hbWUsIE9iamVjdC5hc3NpZ24oe1xuICAgIGlkOiBjbGFzc19pZCxcbiAgfSwga2xhc3MpKTtcbn1cblxuLy8gcGFzc2l2ZSBmZXRjaGVzID0gfGxlYWd1ZXN8ICogdG90YWxcbmxldCBbdG90YWwsIGFzeW5jX2xpbWl0LCBsYWRkZXJfbGltaXQsIGFwaV9yYXRlX2xpbWl0XSA9IHByb2Nlc3MuYXJndi5zbGljZSgyKTtcbi8vIGJvdW5kYXJpZXMgc2V0IGJ5IGdnZyBhcGlcbnRvdGFsID0gTWF0aC5taW4oMTUwMDAsIE1hdGgubWF4KDEsIHRvdGFsIHx8IDApKTtcbmxhZGRlcl9saW1pdCA9IE1hdGgubWluKDIwMCwgTWF0aC5tYXgoMSwgbGFkZGVyX2xpbWl0IHx8IDIwMCkpO1xuLy8gbnVtYmVyIG9mIHNpbXVsdGFuZW91cyBhc3luYyBjYWxsc1xuYXN5bmNfbGltaXRcbiAgPSBNYXRoLm1pbihOdW1iZXIuUE9TSVRJVkVfSU5GSU5JVFksIE1hdGgubWF4KDEsIGFzeW5jX2xpbWl0IHx8IDUwMCkpO1xuLy8gbnVtYmVyIG9mIG1heGltdW0gY2FsbHMgdG8gZ2dnIGFwaSAodGhpcyBzaG91bGQgYmUgc21hbGxcbmFwaV9yYXRlX2xpbWl0XG4gID0gTWF0aC5taW4oTnVtYmVyLlBPU0lUSVZFX0lORklOSVRZLCBNYXRoLm1heCgxLCBhcGlfcmF0ZV9saW1pdCB8fCA1KSk7XG5cbi8vIGN1dCBvZiByZW1haW5kZXJcbnRvdGFsIC09IHRvdGFsICUgbGFkZGVyX2xpbWl0O1xuXG5jb25zdCBzdGFydCA9IERhdGUubm93KCk7XG5cbmNvbnN0IHJvb3RfcGF0aCA9IF9fZGlybmFtZTtcbmNvbnN0IGRhdGFfcGF0aCA9IHBhdGguam9pbihyb290X3BhdGgsICcvZ2V0X3RyZWVzJyk7XG5cbmNvbnN0IGxvZ19maWxlbmFtZSA9IHBhdGguam9pbihyb290X3BhdGgsIGBsb2cvZ2V0X3RyZWVzX2xvZ2ApO1xuXG5sb2c0anMuY29uZmlndXJlKHtcbiAgYXBwZW5kZXJzOiBbXG4gICAgeyB0eXBlOiAnY29uc29sZScgfSxcbiAgICB7IHR5cGU6ICdmaWxlJywgZmlsZW5hbWU6IGxvZ19maWxlbmFtZSB9LFxuICBdLFxufSk7XG5cbmNvbnN0IGxvZ2dlciA9IGxvZzRqcy5nZXRMb2dnZXIoKTtcbmxvZ2dlci5zZXRMZXZlbCgnSU5GTycpO1xuXG4vKipcbiAqIGdlbmVyYXRlcyB0aGUgdXJsIGZvciB0aGUgZ2dnIGxhZGRlciBhcGlcbiAqIHNlZSBodHRwczovL3d3dy5wYXRob2ZleGlsZS5jb20vZGV2ZWxvcGVyL2RvY3MvYXBpLXJlc291cmNlLWxhZGRlcnNcbiAqXG4gKiBAcGFyYW0ge3N0cmluZ30gbGVhZ3VlXG4gKiBAcGFyYW0ge251bWJlcn0gb2Zmc2V0XG4gKiBAcGFyYW0ge251bWJlcn0gbGltaXRcbiAqIEByZXR1cm4ge3N0cmluZ31cbiAqL1xuY29uc3QgbGFkZGVyQXBpID0gKGxlYWd1ZSwgb2Zmc2V0LCBsaW1pdCkgPT4ge1xuICByZXR1cm4gYGh0dHA6Ly9hcGkucGF0aG9mZXhpbGUuY29tL2xhZGRlcnMvJHtsZWFndWV9P29mZnNldD0ke29mZnNldH0mbGltaXQ9JHtsaW1pdH0mdHJhY2s9dHJ1ZWA7XG59O1xuXG5cbi8qKlxuICogcGFydGlhbCBpbnZlcnNlIHRvIGxhZGRlckFwaVxuICogQHBhcmFtIHtudW1iZXJ9IGFwaV91cmxcbiAqIEByZXR1cm4ge3N0cmluZ31cbiAqL1xuY29uc3QgbGFkZGVyQXBpVG9MZWFndWUgPSAoYXBpX3VybCkgPT4ge1xuICByZXR1cm4gZGVjb2RlVVJJQ29tcG9uZW50KFxuICAgIGFwaV91cmwubWF0Y2goXG4gICAgICAvaHR0cDpcXC9cXC9hcGkucGF0aG9mZXhpbGUuY29tXFwvbGFkZGVyc1xcLyhbXj9dKylcXD8uKi8pWzFdKTtcbn07XG5cbi8qKlxuICogZ2VuZXJhdGVzIHRoZSB1cmwgdG8gZGlzcGxheSBhbGwgdXNlZCBwYXNzaXZlc1xuICpcbiAqIEBwYXJhbSB7c3RyaW5nfSBjaGFyYWN0ZXJcbiAqIEBwYXJhbSB7c3RyaW5nfSBhY2NvdW50XG4gKiBAcmV0dXJuIHtzdHJpbmd9XG4gKi9cbmNvbnN0IHBhc3NpdmVzQXBpID0gKGNoYXJhY3RlciwgYWNjb3VudCkgPT4ge1xuICByZXR1cm4gYGh0dHBzOi8vd3d3LnBhdGhvZmV4aWxlLmNvbS9jaGFyYWN0ZXItd2luZG93L2dldC1wYXNzaXZlLXNraWxscz9jaGFyYWN0ZXI9JHtjaGFyYWN0ZXJ9JmFjY291bnROYW1lPSR7YWNjb3VudH1gO1xufTtcblxuLyoqXG4gKiBjcmVhdGVzIGFuIG9iamVjdCB3aGljaCBtYXBzIHRoZSBqc29uIGRhdGEgZ2VuZXJhdGVkIGluIHRoaXMgc2NyaXB0XG4gKiB0byBhIG5vbiBuZXN0ZWQgbWFwXG4gKlxuICogQHBhcmFtIHtPYmplY3R9IGRhdGFcbiAqIEByZXR1cm4ge3tpZCwgbGFzdF9hY3RpdmU6ICgqfG51bWJlciksIGxlYWd1ZTogKHN0cmluZ3wqKSxcbiAqIHhwOiAqLCBjbGFzczogKCp8c3RyaW5nKSwgZGVhZDogKixcbiAqIG5vZGVzOiAoKnxBcnJheXxub2Rlc3xueXxNYXApLCBjaGFsbGVuZ2VzOiAqfX1cbiAqL1xuY29uc3QgY3N2VHJhbnNmb3JtID0gKGRhdGEpID0+IHtcbiAgaWYgKGRhdGEuY2hhcmFjdGVyID09PSB1bmRlZmluZWQgfHwgZGF0YS5hY2NvdW50ID09PSB1bmRlZmluZWQpIHtcbiAgICByZXR1cm4ge307XG4gIH1cblxuICBjb25zdCBrbGFzcyA9IGNsYXNzZXMuZ2V0KGRhdGEuY2hhcmFjdGVyLmNsYXNzKTtcblxuICBjb25zdCB0cmVlX3VybCA9IFRyZWVVcmwuZW5jb2RlKFxuICAgIFBPRS50cmVlcy5nZXQoUE9FLmN1cnJlbnRfdHJlZSkudmVyc2lvbixcbiAgICBrbGFzcy5jaGFyYWN0ZXJfY2xhc3MsXG4gICAga2xhc3MuYXNjZW5kYW5jeSxcbiAgICBkYXRhLm5vZGVzIHx8IFtdXG4gICk7XG5cbiAgcmV0dXJuIHtcbiAgICBpZDogZGF0YS5jaGFyYWN0ZXIuaWQsXG4gICAgbGFzdF9hY3RpdmU6IGRhdGEubGFzdF9hY3RpdmUsXG4gICAgbGVhZ3VlOiBsZWFndWVzLmdldChkYXRhLmxlYWd1ZSksXG4gICAgeHA6IGRhdGEuY2hhcmFjdGVyLmV4cGVyaWVuY2UsXG4gICAgY2xhc3M6IGtsYXNzLmlkLFxuICAgIGRlYWQ6IGRhdGEuZGVhZCxcbiAgICAvLyBvbiAxMGsgcGFzc2l2ZXMgd2UgYXJlIHNhdmluZyBhcm91bmQgMk1CIGJ5IGVuY29kaW5nIHRoZSBub2Rlc1xuICAgIC8vICg0LjhNQiBkb3duIHRvIDIuNk1CKVxuICAgIG5vZGVzOiB0cmVlX3VybCxcbiAgICBjaGFsbGVuZ2VzOiBkYXRhLmFjY291bnQuY2hhbGxlbmdlcy50b3RhbCxcbiAgfTtcbn07XG5cbi8qKlxuICogY2hlY2tzIGlmIHRoZSBuZXdfZW50cnkgd2FzIGFjdGl2ZSBzaW5jZSBvbGRfZW50cnlcbiAqXG4gKiBAcGFyYW0ge09iamVjdH0gb2xkX2VudHJ5X2NzdlxuICogQHBhcmFtIHtPYmplY3R9IG5ld19lbnRyeV9hcGlcbiAqIEByZXR1cm4ge2Jvb2xlYW59XG4gKi9cbmNvbnN0IGxhZGRlckFjdGl2ZSA9IChvbGRfZW50cnlfY3N2LCBuZXdfZW50cnlfYXBpKSA9PiB7XG4gIGlmICghb2xkX2VudHJ5X2Nzdikge1xuICAgIHJldHVybiB0cnVlO1xuICB9XG5cbiAgY29uc3QgbmV3X2VudHJ5X2NzdiA9IGNzdlRyYW5zZm9ybShuZXdfZW50cnlfYXBpKTtcblxuICByZXR1cm4gb2xkX2VudHJ5X2Nzdi54cCAhPSBuZXdfZW50cnlfY3N2LnhwXG4gICAgfHwgb2xkX2VudHJ5X2Nzdi5kZWFkICE9IG5ld19lbnRyeV9jc3YuZGVhZDtcbn07XG5cbmNvbnN0IHJ1bnRpbWUgPSAoKCkgPT4ge1xuICBsb2dnZXIuaW5mbyhgc3RhcnRlZCB0YXNrIHdpdGggYFxuICAgICsgYC0tdG90YWw9JHt0b3RhbH0gYFxuICAgICsgYC0tbGltaXQ9JHtsYWRkZXJfbGltaXR9IGBcbiAgICArIGAtLWFzeW5jX2xpbWl0PSR7YXN5bmNfbGltaXR9IGBcbiAgICArIGAtLWFwaV9yYXRlX2xpbWl0PSR7YXBpX3JhdGVfbGltaXR9YCk7XG5cbiAgcmV0dXJuICgpID0+IERhdGUubm93KCkgLSBzdGFydDtcbn0pKCk7XG5cbmNvbnN0IG91dF9maWxlbmFtZSA9IG91dEZpbGVuYW1lKGRhdGFfcGF0aCwgc3RhcnQpO1xuXG4vLyBnZXQgdGhlIGxhc3Qgb3V0XG5jb25zdCBsYXRlc3QgPSBwYXRoLmpvaW4oZGF0YV9wYXRoLFxuICBmcy5yZWFkZGlyU3luYyhkYXRhX3BhdGgpLnJlZHVjZSgobGF0ZXN0LCBmaWxlKSA9PiB7XG4gICAgaWYgKGN0aW1lT3V0RmlsZShsYXRlc3QpIDwgY3RpbWVPdXRGaWxlKGZpbGUpKSB7XG4gICAgICByZXR1cm4gZmlsZTtcbiAgICB9XG4gICAgcmV0dXJuIGxhdGVzdDtcbiAgfSwgb3V0RmlsZW5hbWUoZGF0YV9wYXRoLCBOdW1iZXIuTkVHQVRJVkVfSU5GSU5JVFkpKSk7XG5cbmxvZ2dlci5pbmZvKGBmZXRjaGluZyB0b3RhbCBvZiAke3RvdGFsfSBpbiBjaHVua3Mgb2YgJHthc3luY19saW1pdH1gKTtcblxuLy8gYXBwYXJlbnRseSB0aGVyZSBjYW4gZXhpc3QgbmFtZSBjb2xsaXNpb25zIHdpdGggYWNjb3VudHNcbi8vIHNvIHRoZSBnZXQtcGFzc2l2ZS1za2lsbHMgcHJvYiBvbmx5IHJldHVybnMgdGhlIGN1cnJlbnQgY2hhcmFjdGVyXG4vLyB3aGlsZSB0aGUgbGFkZGVycyBhcGkgbWF5IHJldHVybiBkZWxldGVkIGNoYXJzXG4vLyB0aGlzIG1lYW5zIHRoYXQgd2Ugd2lsbCBhc3NpZ24gbmV3IHBhc3NpdmVzIHRvIGRlbGV0ZWQgY2hhcnNcbi8vIGlmIGFub3RoZXIgb25lIHdhcyBjcmVhdGVkXG4vLyBjaGFyYWN0ZXIgaWQgPT4gbGFkZGVyIGVudHJ5XG5sZXQgZW50cmllcyA9IG5ldyBNYXAoKTtcblxuLy8gcGFzc2l2ZXNfdXJsID0+IGNoYXJhY3RlciBpZFxubGV0IHBhc3NpdmVzX3VybHNfY2hhcmFjdGVycyA9IG5ldyBNYXAoKTtcblxuLy8gdy9vIGFycmF5LmZpbGwgaXQgcmVzdWx0cyBpbiBlbXB0eSB2YWx1ZXNcbi8vIGNyZWF0ZSB0aGUgbGFkZGVyIHVybHMgZm9yIGVhY2ggbGVhZ3VlIGFuZCBmbGF0dGVuIGl0IGludG8gb25lIGFycmF5XG5jb25zdCBsYWRkZXJfdXJsc1xuICA9IFtdLmNvbmNhdCguLi5BcnJheS5mcm9tKGxlYWd1ZXMua2V5cygpKS5tYXAoKGxlYWd1ZSkgPT5cbiAgICBuZXcgQXJyYXkodG90YWwgLyBsYWRkZXJfbGltaXQpLmZpbGwoMClcbiAgICAgIC5tYXAoKF8sIG9mZnNldCkgPT5cbiAgICAgICAgbGFkZGVyQXBpKGxlYWd1ZSwgb2Zmc2V0ICogbGFkZGVyX2xpbWl0LCBsYWRkZXJfbGltaXQpKVxuICApKTtcblxubG9nZ2VyLmluZm8oXG4gIGBmZXRjaGluZyB0b3RhbCBvZiAke2xhZGRlcl91cmxzLmxlbmd0aH1gXG4gICsgYCBsYWRkZXJzIG92ZXIgJHtsZWFndWVzLnNpemV9IGxlYWd1ZXNgXG4pO1xuXG5mcy5leGlzdHMobGF0ZXN0LCAoZXhpc3RzKSA9PiB7XG4gIGxldCBvbGRfdHJlZXMgPSBuZXcgTWFwKCk7XG5cbiAgaWYgKGV4aXN0cykge1xuICAgIGZzLmNyZWF0ZVJlYWRTdHJlYW0obGF0ZXN0KS5waXBlKGNzdi5wYXJzZSh7XG4gICAgICBkZWxpbWl0ZXI6ICcsJyxcbiAgICAgIGNvbHVtbnM6IHRydWUsXG4gICAgfSwgKGUsIGRhdGEpID0+IHtcbiAgICAgIGlmICghZSkge1xuICAgICAgICBvbGRfdHJlZXMgPSBuZXcgTWFwKGRhdGEubWFwKChlbnRyeSkgPT4ge1xuICAgICAgICAgIHJldHVybiBbZW50cnkuaWQsIGVudHJ5XTtcbiAgICAgICAgfSkpO1xuICAgICAgfVxuXG4gICAgICBvbGRUcmVlc0NvbXBsZXRlKG9sZF90cmVlcyk7XG4gICAgfSkpO1xuICB9IGVsc2Uge1xuICAgIG9sZFRyZWVzQ29tcGxldGUob2xkX3RyZWVzKTtcbiAgfVxufSk7XG5cbmNvbnN0IGxhZGRlckNvbXBsZXRlID0gKHJlc3VsdHMsIG9sZF90cmVlcykgPT4ge1xuICBsb2dnZXIuaW5mbyhgZmluaXNoZWQgbGFkZGVyIGZldGNoIGFmdGVyICR7cnVudGltZSgpfW1zYCk7XG5cbiAgLy8gZmxhdHRlbmVkIHBhc3NpdmUgdXJsc1xuICBjb25zdCBwYXNzaXZlc191cmxzID0gW10uY29uY2F0KC4uLnJlc3VsdHMubWFwKChsKSA9PiB7XG4gICAgLy8gcGFyc2UgdGhlIGJvZHkgYW5kIG1hcCBvbiBldmVyeSBlbnRyeSBpdHMgcGFzc2l2ZXMgdXJsXG4gICAgY29uc3QgYm9keSA9IEpTT04ucGFyc2UobC5ib2R5KTtcblxuICAgIGNvbnN0IGxlYWd1ZSA9IGxhZGRlckFwaVRvTGVhZ3VlKGwucmVxdWVzdC5ocmVmKTtcblxuICAgIGlmICghYm9keS5lbnRyaWVzKSB7XG4gICAgICBsb2dnZXIud2Fybignbm8gZW50cmllcycsIGwucmVxdWVzdC5ocmVmLCBib2R5KTtcbiAgICAgIHJldHVybiBmYWxzZTtcbiAgICB9XG5cbiAgICByZXR1cm4gYm9keS5lbnRyaWVzLm1hcCgoZSkgPT4ge1xuICAgICAgY29uc3QgcGFzc2l2ZV91cmxcbiAgICAgICAgPSBwYXNzaXZlc0FwaShlWydjaGFyYWN0ZXInXS5uYW1lLCBlWydhY2NvdW50J10ubmFtZSk7XG4gICAgICBjb25zdCBpZCA9IGVbJ2NoYXJhY3RlciddLmlkO1xuICAgICAgY29uc3Qgb2xkX2VudHJ5ID0gb2xkX3RyZWVzLmdldChpZCk7XG5cbiAgICAgIC8vIHNhdmUgdGhlIGVudHJ5XG4gICAgICBlbnRyaWVzLnNldChpZCwgT2JqZWN0LmFzc2lnbihlLCB7XG4gICAgICAgIGxlYWd1ZTogbGVhZ3VlLFxuICAgICAgICBsYXN0X2FjdGl2ZTpcbiAgICAgICAgbGFkZGVyQWN0aXZlKG9sZF9lbnRyeSwgZSkgPyBzdGFydCA6IG9sZF9lbnRyeS5sYXN0X2FjdGl2ZSxcbiAgICAgIH0pKTtcbiAgICAgIC8vIGFuZCBhIHJldmVyc2UgbWFwcGluZyBzbyB3ZSBjYW4gZ2V0IHRoZSBlbnRyeSB2aWEgdXJsXG4gICAgICBwYXNzaXZlc191cmxzX2NoYXJhY3RlcnMuc2V0KHBhc3NpdmVfdXJsLCBlWydjaGFyYWN0ZXInXS5pZCk7XG5cbiAgICAgIHJldHVybiBwYXNzaXZlX3VybDtcbiAgICB9KTtcbiAgfSkpLmZpbHRlcigodSkgPT4gdSk7XG5cbiAgLy8gbG9nZ2VyLmluZm8ocGFzc2l2ZXNfdXJscylcblxuICBsb2dnZXIuaW5mbyhgZmV0Y2hpbmcgJHtwYXNzaXZlc191cmxzLmxlbmd0aH0gcGFzc2l2ZXNgKTtcblxuICAvLyBwcm9ncmVzcyBiYXJcbiAgbGV0IHByb2dyZXNzID0gMDsgLy8gbnVtYmVyIG9mIHVybHMgZmV0Y2hlZFxuICBjb25zdCBpbl9zdGVwcyA9IHBhc3NpdmVzX3VybHMubGVuZ3RoIC8gMTAgfCAwOyAvLyBldmVyeSB+MTAlXG5cbiAgbm9kZUFzeW5jLm1hcExpbWl0KHBhc3NpdmVzX3VybHMsIGFzeW5jX2xpbWl0LCAodXJsLCBjYWxsYmFjaykgPT4ge1xuICAgIC8vIGp1c3QgYSB3cmFwcGVyIHRoYXQgdXBkYXRlcyB0aGUgcHJvZ3Jlc3NcbiAgICByZXF1ZXN0KHVybCwgbnVsbCwgKGVyciwgdHJhbnNmb3JtZWQpID0+IHtcbiAgICAgIHByb2dyZXNzKys7XG5cbiAgICAgIGlmIChwcm9ncmVzcyAlIGluX3N0ZXBzID09IDApIHtcbiAgICAgICAgbG9nZ2VyLmluZm8oXG4gICAgICAgICAgYGZpbmlzaGVkYFxuICAgICAgICAgICsgYCR7KDEwMCAqIHByb2dyZXNzIC8gcGFzc2l2ZXNfdXJscy5sZW5ndGgpLnRvRml4ZWQoMil9JWApO1xuICAgICAgfVxuXG4gICAgICBpZiAoZXJyKSB7XG4gICAgICAgIGxvZ2dlci53YXJuKGVycik7XG4gICAgICB9XG4gICAgICBjYWxsYmFjayhudWxsLCB0cmFuc2Zvcm1lZCk7XG4gICAgfSkub24oJ2Vycm9yJywgKGUpID0+IGxvZ2dlci53YXJuKGUpKTtcbiAgfSwgKGVyciwgcmVzdWx0cykgPT4ge1xuICAgIGlmIChlcnIpIHtcbiAgICAgIGxvZ2dlci53YXJuKGVycik7XG4gICAgfSBlbHNlIHtcbiAgICAgIHBhc3NpdmVzQ29tcGxldGUocmVzdWx0cyk7XG4gICAgfVxuICB9KTtcbn07XG5cbmNvbnN0IHBhc3NpdmVzQ29tcGxldGUgPSAocmVzdWx0cykgPT4ge1xuICBsb2dnZXIuaW5mbyhcbiAgICBgZmluaXNoZWQgcGFzc2l2ZSBmZXRjaCBhZnRlciAke3J1bnRpbWUoKX1tc2BcbiAgICArIGAoJHtydW50aW1lKCkgLyByZXN1bHRzLmxlbmd0aH1tcy9wYXNzaXZlKWApO1xuXG4gIGxldCB0cmVlcyA9IFtdO1xuXG4gIGZvciAobGV0IHJlc3VsdCBvZiByZXN1bHRzKSB7XG4gICAgaWYgKCFyZXN1bHQpIGNvbnRpbnVlO1xuICAgIGNvbnN0IHBhc3NpdmVfdXJsID0gcmVzdWx0LnJlcXVlc3QuaHJlZjtcbiAgICBsZXQgcGFzc2l2ZXMgPSB1bmRlZmluZWQ7XG5cbiAgICB0cnkge1xuICAgICAgcGFzc2l2ZXMgPSBKU09OLnBhcnNlKHJlc3VsdC5ib2R5KTtcbiAgICB9IGNhdGNoIChlKSB7XG4gICAgICBsb2dnZXIud2FybihgYmFkIHJlcXVlc3QgZm9yICR7cGFzc2l2ZV91cmx9YCk7XG4gICAgICBjb250aW51ZTtcbiAgICB9XG5cblxuICAgIGlmIChwYXNzaXZlcykge1xuICAgICAgY29uc3Qgbm9kZXMgPSBwYXNzaXZlc1snaGFzaGVzJ107XG5cbiAgICAgIGNvbnN0IGVudHJ5XG4gICAgICAgID0gZW50cmllcy5nZXQocGFzc2l2ZXNfdXJsc19jaGFyYWN0ZXJzLmdldChwYXNzaXZlX3VybCkpO1xuXG4gICAgICAvLyBsb2dnZXIuZGVidWcocGFzc2l2ZV91cmwsIGVudHJ5KVxuXG4gICAgICB0cmVlcy5wdXNoKE9iamVjdC5hc3NpZ24oe1xuICAgICAgICBub2Rlczogbm9kZXMsXG4gICAgICB9LCBlbnRyeSkpO1xuICAgIH0gZWxzZSB7XG4gICAgICAvLyBGSVhNRSBmaXJzdCBicmVhY2ggcmVzdWx0IHJldHVybnMgZmFsc2UgYnV0IGJyb3dzZXIgaXMgb2tcbiAgICAgIGxvZ2dlci5kZWJ1ZyhwYXNzaXZlX3VybCk7XG4gICAgfVxuICB9XG5cbiAgdGFza0NvbXBsZXRlKHRyZWVzKTtcbn07XG5cbmNvbnN0IHRhc2tDb21wbGV0ZSA9ICh0cmVlcykgPT4ge1xuICBsb2dnZXIuaW5mbyhgZmluaXNoZWQgdGFzayBpbiAkeyhydW50aW1lKCkgLyAxMDAwKS50b0ZpeGVkKDIpfXNgKTtcblxuICBjc3YudHJhbnNmb3JtKHRyZWVzLCBjc3ZUcmFuc2Zvcm0pLnBpcGUoY3N2LnN0cmluZ2lmeSh7XG4gICAgaGVhZGVyOiB0cnVlLFxuICB9KSkucGlwZShmcy5jcmVhdGVXcml0ZVN0cmVhbShvdXRfZmlsZW5hbWUpKTtcbn07XG5cbmNvbnN0IG9sZFRyZWVzQ29tcGxldGUgPSAob2xkX3RyZWVzKSA9PiB7XG4gIC8vIGdnZyBoYXMgYSByYXRlIGxhZGRlcl9saW1pdCBzbyBmdWNrIG1lIHJpZ2h0XG4gIG5vZGVBc3luYy5tYXBMaW1pdChsYWRkZXJfdXJscywgYXBpX3JhdGVfbGltaXQsIHJlcXVlc3QsIChlLCByZXN1bHRzKSA9PiB7XG4gICAgaWYgKGUpIHtcbiAgICAgIGxvZ2dlci53YXJuKGUpO1xuICAgIH0gZWxzZSB7XG4gICAgICBsYWRkZXJDb21wbGV0ZShyZXN1bHRzLCBvbGRfdHJlZXMpO1xuICAgIH1cbiAgfSk7XG59O1xuXG5cblxuLy8gV0VCUEFDSyBGT09URVIgLy9cbi8vIC4vc3JjL3NjcmlwdHMvZ2V0X3RyZWVzLmpzIiwiaW1wb3J0ICogYXMgcGF0aCBmcm9tICdwYXRoJztcblxuLyoqXG4gKiBnZW5lcmF0ZXMgdGhlIGZpbGVuYW1lIGZvciB0aGUgY3N2IG91dHB1dFxuICogQHBhcmFtIHtzdHJpbmd9IHJvb3RcbiAqIEBwYXJhbSB7bnVtYmVyfSBub3dcbiAqIEBwYXJhbSB7c3RyaW5nfSB0cmVlX2lkZW50XG4gKiBAcmV0dXJuIHsqfVxuICovXG5leHBvcnQgZnVuY3Rpb24gZmlsZW5hbWUocm9vdCwgbm93LCB0cmVlX2lkZW50KSB7XG4gIC8vIGFkanVzdCBnaXRpZ25vcmUgYWNjb3JkaW5nbHlcbiAgcmV0dXJuIHBhdGguam9pbihyb290LCBgJHtub3d9XyR7dHJlZV9pZGVudH1fZ2V0X3RyZWVzLmNzdmApO1xufTtcblxuLyoqXG4gKiBAcGFyYW0ge3N0cmluZ30gZmlsZW5hbWVcbiAqIEByZXR1cm4ge09iamVjdH0gcmV2ZXJzZSBvZiBvdXRGaWxlbmFtZVxuICovXG5leHBvcnQgZnVuY3Rpb24gZmlsZVByb3BzKGZpbGVuYW1lPScnKSB7XG4gIGNvbnN0IG1hdGNoID0gbmV3IFJlZ0V4cChgXihbXl9dKylfKFteX10rKV9nZXRfdHJlZXNcXC5jc3YkYClcbiAgICAuZXhlYyhwYXRoLmJhc2VuYW1lKGZpbGVuYW1lKSk7XG5cbiAgaWYgKG1hdGNoID09PSBudWxsKSB7XG4gICAgcmV0dXJuIHVuZGVmaW5lZDtcbiAgfSBlbHNlIHtcbiAgICByZXR1cm4ge1xuICAgICAgY3RpbWU6ICttYXRjaFsxXSxcbiAgICAgIHRyZWVfaWRlbnQ6IG1hdGNoWzJdLFxuICAgIH07XG4gIH1cbn07XG5cbi8qKlxuICogZXh0cmFjdHMgdGhlIGNyZWF0aW9uIGRhdGUgZnJvbSBhIGZpbGVuYW1lIHdoaWNoXG4gKiBzaG91bGQgYmUgYSBqcyBEYXRlIGF0IHRoZSBzdGFydCBvZiB0aGUgYmFzZW5hbWVcbiAqIEBwYXJhbSB7c3RyaW5nfSBmaWxlbmFtZVxuICogQHJldHVybiB7bnVtYmVyfVxuICovXG5leHBvcnQgZnVuY3Rpb24gY3RpbWVPdXRGaWxlKGZpbGVuYW1lKSB7XG4gIGNvbnN0IHByb3BzID0gZmlsZVByb3BzKGZpbGVuYW1lKTtcblxuICBpZiAocHJvcHMgPT09IHVuZGVmaW5lZCkge1xuICAgIHJldHVybiBOdW1iZXIuTkVHQVRJVkVfSU5GSU5JVFk7XG4gIH0gZWxzZSB7XG4gICAgcmV0dXJuIHByb3BzLmN0aW1lO1xuICB9XG59O1xuXG5cblxuLy8gV0VCUEFDSyBGT09URVIgLy9cbi8vIC4vc3JjL3NjcmlwdHMvbGliL3RyZWVzVG9Dc3ZGaWxlLmpzIiwibW9kdWxlLmV4cG9ydHMgPSByZXF1aXJlKFwiYmFiZWwtcnVudGltZS9jb3JlLWpzL21hcFwiKTtcblxuXG4vLy8vLy8vLy8vLy8vLy8vLy9cbi8vIFdFQlBBQ0sgRk9PVEVSXG4vLyBleHRlcm5hbCBcImJhYmVsLXJ1bnRpbWUvY29yZS1qcy9tYXBcIlxuLy8gbW9kdWxlIGlkID0gMTNcbi8vIG1vZHVsZSBjaHVua3MgPSAwIDEiLCJtb2R1bGUuZXhwb3J0cyA9IHJlcXVpcmUoXCJiYWJlbC1ydW50aW1lL2hlbHBlcnMvdG9Db25zdW1hYmxlQXJyYXlcIik7XG5cblxuLy8vLy8vLy8vLy8vLy8vLy8vXG4vLyBXRUJQQUNLIEZPT1RFUlxuLy8gZXh0ZXJuYWwgXCJiYWJlbC1ydW50aW1lL2hlbHBlcnMvdG9Db25zdW1hYmxlQXJyYXlcIlxuLy8gbW9kdWxlIGlkID0gMTRcbi8vIG1vZHVsZSBjaHVua3MgPSAwIDEiLCJtb2R1bGUuZXhwb3J0cyA9IHJlcXVpcmUoXCJiYWJlbC1ydW50aW1lL2NvcmUtanMvb2JqZWN0L2Fzc2lnblwiKTtcblxuXG4vLy8vLy8vLy8vLy8vLy8vLy9cbi8vIFdFQlBBQ0sgRk9PVEVSXG4vLyBleHRlcm5hbCBcImJhYmVsLXJ1bnRpbWUvY29yZS1qcy9vYmplY3QvYXNzaWduXCJcbi8vIG1vZHVsZSBpZCA9IDE3XG4vLyBtb2R1bGUgY2h1bmtzID0gMCAxIiwibW9kdWxlLmV4cG9ydHMgPSByZXF1aXJlKFwiYmFiZWwtcnVudGltZS9jb3JlLWpzL2dldC1pdGVyYXRvclwiKTtcblxuXG4vLy8vLy8vLy8vLy8vLy8vLy9cbi8vIFdFQlBBQ0sgRk9PVEVSXG4vLyBleHRlcm5hbCBcImJhYmVsLXJ1bnRpbWUvY29yZS1qcy9nZXQtaXRlcmF0b3JcIlxuLy8gbW9kdWxlIGlkID0gMlxuLy8gbW9kdWxlIGNodW5rcyA9IDAgMSAyIDMiLCJtb2R1bGUuZXhwb3J0cyA9IHJlcXVpcmUoXCJmc1wiKTtcblxuXG4vLy8vLy8vLy8vLy8vLy8vLy9cbi8vIFdFQlBBQ0sgRk9PVEVSXG4vLyBleHRlcm5hbCBcImZzXCJcbi8vIG1vZHVsZSBpZCA9IDNcbi8vIG1vZHVsZSBjaHVua3MgPSAxIDIgMyA0IiwiY29uc3QgTWFwID0gcmVxdWlyZSgnaW1tdXRhYmxlJykuTWFwO1xuXG4vKiBlc2xpbnQgbWF4LWxlbjogW1wiZXJyb3JcIiwgMTIwXSovXG4vKipcbiAqXG4gKi9cbm1vZHVsZS5leHBvcnRzID0ge1xuICAvLyBNYXA8c3RyaW5nLCBMZWFndWVQcm9wcz5cbiAgbGVhZ3VlczogTWFwKFtcbiAgICBbJzEnLCB7IG5hbWU6ICdCcmVhY2gnLCBhY3RpdmU6IGZhbHNlLCBwZXJtYW5lbnQ6IGZhbHNlIH1dLFxuICAgIFsnMicsIHsgbmFtZTogJ0hhcmRjb3JlIEJyZWFjaCcsIGFjdGl2ZTogZmFsc2UsIHBlcm1hbmVudDogZmFsc2UgfV0sXG4gICAgWyczJywgeyBuYW1lOiAnTGVnYWN5JywgYWN0aXZlOiB0cnVlLCBwZXJtYW5lbnQ6IGZhbHNlIH1dLFxuICAgIFsnNCcsIHsgbmFtZTogJ0hhcmRjb3JlIExlZ2FjeScsIGFjdGl2ZTogdHJ1ZSwgcGVybWFuZW50OiBmYWxzZSB9XSxcbiAgICBbJzUnLCB7IG5hbWU6ICdTdGFuZGFyZCcsIGFjdGl2ZTogZmFsc2UsIHBlcm1hbmVudDogZmFsc2UgfV0sXG4gICAgWyc2JywgeyBuYW1lOiAnU1NGIExlZ2FjeScsIGFjdGl2ZTogdHJ1ZSwgcGVybWFuZW50OiBmYWxzZSB9XSxcbiAgICBbJzcnLCB7IG5hbWU6ICdTU0YgSEMgTGVnYWN5JywgYWN0aXZlOiB0cnVlLCBwZXJtYW5lbnQ6IGZhbHNlIH1dLFxuICBdKSxcbiAgLy8gTWFwPHN0cmluZywgQ2xhc3NQcm9wcz5cbiAgY2xhc3NlczogTWFwKFtcbiAgICAvLyBuYW1lLCBwYXJlbnQgaXMgdGhlIHBhcmVudCBjbGFzcyBmb3IgYXNjZW5kYW5jaWVzIGllXG4gICAgLy8gY2hhcmFjdGVyX2NsYXNzLCBhc2NlbmRhbmN5IGlzIHVzZWQgZm9yIHVybCBnZW5lcmF0aW9uXG4gICAgWycxJywgeyBuYW1lOiAnTWFyYXVkZXInLCBwYXJlbnQ6IG51bGwsIGNoYXJhY3Rlcl9jbGFzczogMSwgYXNjZW5kYW5jeTogMCB9XSxcbiAgICBbJzInLCB7IG5hbWU6ICdUZW1wbGFyJywgcGFyZW50OiBudWxsLCBjaGFyYWN0ZXJfY2xhc3M6IDUsIGFzY2VuZGFuY3k6IDAgfV0sXG4gICAgWyczJywgeyBuYW1lOiAnV2l0Y2gnLCBwYXJlbnQ6IG51bGwsIGNoYXJhY3Rlcl9jbGFzczogMywgYXNjZW5kYW5jeTogMCB9XSxcbiAgICBbJzQnLCB7IG5hbWU6ICdTaGFkb3cnLCBwYXJlbnQ6IG51bGwsIGNoYXJhY3Rlcl9jbGFzczogNiwgYXNjZW5kYW5jeTogMCB9XSxcbiAgICBbJzUnLCB7IG5hbWU6ICdSYW5nZXInLCBwYXJlbnQ6IG51bGwsIGNoYXJhY3Rlcl9jbGFzczogMiwgYXNjZW5kYW5jeTogMCB9XSxcbiAgICBbJzYnLCB7IG5hbWU6ICdEdWVsaXN0JywgcGFyZW50OiBudWxsLCBjaGFyYWN0ZXJfY2xhc3M6IDQsIGFzY2VuZGFuY3k6IDAgfV0sXG4gICAgWyc3JywgeyBuYW1lOiAnU2Npb24nLCBwYXJlbnQ6IG51bGwsIGNoYXJhY3Rlcl9jbGFzczogNywgYXNjZW5kYW5jeTogMCB9XSxcbiAgICBbJzgnLCB7IG5hbWU6ICdCZXJzZXJrZXInLCBwYXJlbnQ6IDEsIGNoYXJhY3Rlcl9jbGFzczogMSwgYXNjZW5kYW5jeTogMiB9XSxcbiAgICBbJzknLCB7IG5hbWU6ICdDaGllZnRhaW4nLCBwYXJlbnQ6IDEsIGNoYXJhY3Rlcl9jbGFzczogMSwgYXNjZW5kYW5jeTogMyB9XSxcbiAgICBbJzEwJywgeyBuYW1lOiAnSnVnZ2VybmF1dCcsIHBhcmVudDogMSwgY2hhcmFjdGVyX2NsYXNzOiAxLCBhc2NlbmRhbmN5OiAxIH1dLFxuICAgIFsnMTEnLCB7IG5hbWU6ICdJbnF1aXNpdG9yJywgcGFyZW50OiAyLCBjaGFyYWN0ZXJfY2xhc3M6IDUsIGFzY2VuZGFuY3k6IDEgfV0sXG4gICAgWycxMicsIHsgbmFtZTogJ0d1YXJkaWFuJywgcGFyZW50OiAyLCBjaGFyYWN0ZXJfY2xhc3M6IDUsIGFzY2VuZGFuY3k6IDMgfV0sXG4gICAgWycxMycsIHsgbmFtZTogJ0hpZXJvcGhhbnQnLCBwYXJlbnQ6IDIsIGNoYXJhY3Rlcl9jbGFzczogNSwgYXNjZW5kYW5jeTogMiB9XSxcbiAgICBbJzE0JywgeyBuYW1lOiAnTmVjcm9tYW5jZXInLCBwYXJlbnQ6IDMsIGNoYXJhY3Rlcl9jbGFzczogMywgYXNjZW5kYW5jeTogMyB9XSxcbiAgICBbJzE1JywgeyBuYW1lOiAnT2NjdWx0aXN0JywgcGFyZW50OiAzLCBjaGFyYWN0ZXJfY2xhc3M6IDMsIGFzY2VuZGFuY3k6IDEgfV0sXG4gICAgWycxNicsIHsgbmFtZTogJ0VsZW1lbnRhbGlzdCcsIHBhcmVudDogMywgY2hhcmFjdGVyX2NsYXNzOiAzLCBhc2NlbmRhbmN5OiAyIH1dLFxuICAgIFsnMTcnLCB7IG5hbWU6ICdBc3Nhc3NpbicsIHBhcmVudDogNCwgY2hhcmFjdGVyX2NsYXNzOiA2LCBhc2NlbmRhbmN5OiAxIH1dLFxuICAgIFsnMTgnLCB7IG5hbWU6ICdTYWJvdGV1cicsIHBhcmVudDogNCwgY2hhcmFjdGVyX2NsYXNzOiA2LCBhc2NlbmRhbmN5OiAzIH1dLFxuICAgIFsnMTknLCB7IG5hbWU6ICdUcmlja3N0ZXInLCBwYXJlbnQ6IDQsIGNoYXJhY3Rlcl9jbGFzczogNiwgYXNjZW5kYW5jeTogMiB9XSxcbiAgICBbJzIwJywgeyBuYW1lOiAnRGVhZGV5ZScsIHBhcmVudDogNSwgY2hhcmFjdGVyX2NsYXNzOiAyLCBhc2NlbmRhbmN5OiAyIH1dLFxuICAgIFsnMjEnLCB7IG5hbWU6ICdSYWlkZXInLCBwYXJlbnQ6IDUsIGNoYXJhY3Rlcl9jbGFzczogMiwgYXNjZW5kYW5jeTogMSB9XSxcbiAgICBbJzIyJywgeyBuYW1lOiAnUGF0aGZpbmRlcicsIHBhcmVudDogNSwgY2hhcmFjdGVyX2NsYXNzOiAyLCBhc2NlbmRhbmN5OiAzIH1dLFxuICAgIFsnMjMnLCB7IG5hbWU6ICdTbGF5ZXInLCBwYXJlbnQ6IDYsIGNoYXJhY3Rlcl9jbGFzczogNCwgYXNjZW5kYW5jeTogMSB9XSxcbiAgICBbJzI0JywgeyBuYW1lOiAnR2xhZGlhdG9yJywgcGFyZW50OiA2LCBjaGFyYWN0ZXJfY2xhc3M6IDQsIGFzY2VuZGFuY3k6IDIgfV0sXG4gICAgWycyNScsIHsgbmFtZTogJ0NoYW1waW9uJywgcGFyZW50OiA2LCBjaGFyYWN0ZXJfY2xhc3M6IDQsIGFzY2VuZGFuY3k6IDMgfV0sXG4gICAgWycyNicsIHsgbmFtZTogJ0FzY2VuZGFudCcsIHBhcmVudDogNywgY2hhcmFjdGVyX2NsYXNzOiA3LCBhc2NlbmRhbmN5OiAxIH1dLFxuICBdKSxcbiAgdHJlZXM6IE1hcChbXG4gICAgLy8gZG9udCB1c2UgdW5kZXJzY29yZXMgaW4gdGhlIGlkZW50IG9yIGFkanVzdCByZWdleHAgdGhhdCByZWx5IG9uIGZvcm1hdFxuICAgIFsnMjUwJywgeyBuYW1lOiAnMi41LjAgQnJlYWNoJywgdmVyc2lvbjogNCB9XSxcbiAgICBbJzI2MCcsIHsgbmFtZTogJzIuNi4wIExlZ2FjeScsIHZlcnNpb246IDQgfV0sXG4gIF0pLFxuICBjdXJyZW50X3RyZWU6ICcyNjAnLFxufTtcblxuXG5cbi8vIFdFQlBBQ0sgRk9PVEVSIC8vXG4vLyAuL3NyYy9wb2UvZGF0YS5qcyIsIi8qIGVzbGludCBuZXctY2FwOiBvZmYgKi9cbmNvbnN0IEJ1ZmZlciA9IHJlcXVpcmUoJ2J1ZmZlci8nKS5CdWZmZXI7XG5cbm1vZHVsZS5leHBvcnRzID0ge1xuICAvKipcbiAgICpcbiAgICogQHBhcmFtIHtzdHJpbmd9IHN0ciB0aGUgZW5jb2RlZCBzdHJpbmcgZnJvbSBhbiB1cmxcbiAgICogQHJldHVybiB7e3ZlcnNpb246ICosIHN0YXJ0aW5nX2NsYXNzOiAqLCBhc2NlbmRhbmN5OiAqLFxuICAgKiBmdWxsc2NyZWVuOiBudW1iZXIsIG5vZGVzOiBBcnJheX19XG4gICAqL1xuICBkZWNvZGU6IGZ1bmN0aW9uKHN0cikge1xuICAgIC8vIGRlZHVjZWQgZnJvbSBsb2FkSGlzdG9yeVVybFxuICAgIGNvbnN0IGJ1ZiA9IEJ1ZmZlcihzdHIucmVwbGFjZSgvLS9nLCAnKycpLnJlcGxhY2UoL18vZywgJy8nKSwgJ2Jhc2U2NCcpO1xuXG4gICAgbGV0IGkgPSAwO1xuXG4gICAgY29uc3QgdmVyc2lvbiA9IGJ1Zi5yZWFkSW50MzJCRShpKTtcbiAgICBpICs9IDQ7XG5cbiAgICBjb25zdCBzdGFydGluZ19jbGFzcyA9IGJ1Zi5yZWFkSW50OChpKTtcbiAgICBpICs9IDE7XG5cbiAgICBjb25zdCBhc2NlbmRhbmN5ID0gYnVmLnJlYWRJbnQ4KGkpO1xuICAgIGkgKz0gMTtcblxuICAgIGxldCBmdWxsc2NyZWVuID0gMDtcbiAgICAvLyBzb3VyY2Ugc2F5cyA+IDAsIFBvRVNraWxsVHJlZSA+IDNcbiAgICAvLyB3ZSB3aWxsIGFkanVzdCBvdXIgb2Zmc2V0IGJlZm9yZSB3ZSBzdGFydCBsb29waW5nXG4gICAgaWYgKHZlcnNpb24gPiAwKSB7XG4gICAgICBmdWxsc2NyZWVuID0gYnVmLnJlYWRJbnQ4KGkpO1xuICAgICAgaSArPSAxO1xuICAgIH1cblxuICAgIGNvbnN0IG5vZGVzID0gW107XG5cbiAgICAvLyBzZWUgdmVyc2lvbiBjb21tZW50XG4gICAgZm9yIChpIC09IChidWYubGVuZ3RoIC0gaSkgJSAyOyBpIDwgYnVmLmxlbmd0aDsgaSArPSAyKSB7XG4gICAgICBub2Rlcy5wdXNoKGJ1Zi5yZWFkVUludDE2QkUoaSkpO1xuICAgIH1cblxuICAgIHJldHVybiB7XG4gICAgICB2ZXJzaW9uOiB2ZXJzaW9uLFxuICAgICAgc3RhcnRpbmdfY2xhc3M6IHN0YXJ0aW5nX2NsYXNzLFxuICAgICAgYXNjZW5kYW5jeTogYXNjZW5kYW5jeSxcbiAgICAgIGZ1bGxzY3JlZW46IGZ1bGxzY3JlZW4sXG4gICAgICBub2Rlczogbm9kZXMsXG4gICAgfTtcbiAgfSxcbiAgLyoqXG4gICAqIGNvbXB1dGVzIHN0cmluZyBmb3IgdXNhZ2UgaW4gdHJlZSBwbGFuZXJzXG4gICAqXG4gICAqIEBwYXJhbSB7bnVtYmVyfSB2ZXJzaW9uXG4gICAqIEBwYXJhbSB7bnVtYmVyfSBzdGFydGluZ19jbGFzc1xuICAgKiBAcGFyYW0ge251bWJlcn0gYXNjZW5kYW5jeVxuICAgKiBAcGFyYW0ge251bWJlcltdfSBub2Rlc1xuICAgKiBAcGFyYW0ge251bWJlcn0gZnVsbHNjcmVlblxuICAgKiBAcmV0dXJuIHtzdHJpbmd9XG4gICAqL1xuICBlbmNvZGU6IGZ1bmN0aW9uKHZlcnNpb24sIHN0YXJ0aW5nX2NsYXNzLCBhc2NlbmRhbmN5LCBub2RlcyxcbiAgICBmdWxsc2NyZWVuID0gMCkge1xuICAgIGNvbnN0IHNpemUgPSBub2Rlcy5sZW5ndGggKiAyICsgNiArICh2ZXJzaW9uID4gMCA/IDEgOiAwKTtcbiAgICBsZXQgaSA9IDA7XG5cbiAgICBjb25zdCBidWYgPSBuZXcgQnVmZmVyKHNpemUpO1xuXG4gICAgYnVmLndyaXRlSW50MzJCRSh2ZXJzaW9uLCBpKTtcbiAgICBpICs9IDQ7XG5cbiAgICBidWYud3JpdGVJbnQ4KHN0YXJ0aW5nX2NsYXNzLCBpKTtcbiAgICBpICs9IDE7XG5cbiAgICBidWYud3JpdGVJbnQ4KGFzY2VuZGFuY3ksIGkpO1xuICAgIGkgKz0gMTtcblxuICAgIGlmICh2ZXJzaW9uID4gMCkge1xuICAgICAgYnVmLndyaXRlSW50OChmdWxsc2NyZWVuLCBpKTtcbiAgICAgIGkgKz0gMTtcbiAgICB9XG5cbiAgICBmb3IgKGxldCBub2RlIG9mIG5vZGVzKSB7XG4gICAgICBidWYud3JpdGVVSW50MTZCRShub2RlLCBpKTtcblxuICAgICAgaSArPSAyO1xuICAgIH1cblxuICAgIHJldHVybiBidWYudG9TdHJpbmcoJ2Jhc2U2NCcpLnJlcGxhY2UoL1xcKy9nLCAnLScpLnJlcGxhY2UoL1xcLy9nLCAnXycpO1xuICB9LFxufTtcblxuXG5cbi8vIFdFQlBBQ0sgRk9PVEVSIC8vXG4vLyAuL3NyYy9wb2UvUGFzc2l2ZVRyZWVVcmwuanMiLCJtb2R1bGUuZXhwb3J0cyA9IHJlcXVpcmUoXCJhc3luY1wiKTtcblxuXG4vLy8vLy8vLy8vLy8vLy8vLy9cbi8vIFdFQlBBQ0sgRk9PVEVSXG4vLyBleHRlcm5hbCBcImFzeW5jXCJcbi8vIG1vZHVsZSBpZCA9IDQ5XG4vLyBtb2R1bGUgY2h1bmtzID0gMSIsIm1vZHVsZS5leHBvcnRzID0gcmVxdWlyZShcImJhYmVsLXJ1bnRpbWUvY29yZS1qcy9hcnJheS9mcm9tXCIpO1xuXG5cbi8vLy8vLy8vLy8vLy8vLy8vL1xuLy8gV0VCUEFDSyBGT09URVJcbi8vIGV4dGVybmFsIFwiYmFiZWwtcnVudGltZS9jb3JlLWpzL2FycmF5L2Zyb21cIlxuLy8gbW9kdWxlIGlkID0gNTBcbi8vIG1vZHVsZSBjaHVua3MgPSAxIiwibW9kdWxlLmV4cG9ydHMgPSByZXF1aXJlKFwiY3N2XCIpO1xuXG5cbi8vLy8vLy8vLy8vLy8vLy8vL1xuLy8gV0VCUEFDSyBGT09URVJcbi8vIGV4dGVybmFsIFwiY3N2XCJcbi8vIG1vZHVsZSBpZCA9IDUyXG4vLyBtb2R1bGUgY2h1bmtzID0gMSIsIm1vZHVsZS5leHBvcnRzID0gcmVxdWlyZShcImxvZzRqc1wiKTtcblxuXG4vLy8vLy8vLy8vLy8vLy8vLy9cbi8vIFdFQlBBQ0sgRk9PVEVSXG4vLyBleHRlcm5hbCBcImxvZzRqc1wiXG4vLyBtb2R1bGUgaWQgPSA1M1xuLy8gbW9kdWxlIGNodW5rcyA9IDEiLCJtb2R1bGUuZXhwb3J0cyA9IHJlcXVpcmUoXCJyZXF1ZXN0XCIpO1xuXG5cbi8vLy8vLy8vLy8vLy8vLy8vL1xuLy8gV0VCUEFDSyBGT09URVJcbi8vIGV4dGVybmFsIFwicmVxdWVzdFwiXG4vLyBtb2R1bGUgaWQgPSA1NFxuLy8gbW9kdWxlIGNodW5rcyA9IDEiLCJtb2R1bGUuZXhwb3J0cyA9IHJlcXVpcmUoXCJiYWJlbC1ydW50aW1lL2hlbHBlcnMvc2xpY2VkVG9BcnJheVwiKTtcblxuXG4vLy8vLy8vLy8vLy8vLy8vLy9cbi8vIFdFQlBBQ0sgRk9PVEVSXG4vLyBleHRlcm5hbCBcImJhYmVsLXJ1bnRpbWUvaGVscGVycy9zbGljZWRUb0FycmF5XCJcbi8vIG1vZHVsZSBpZCA9IDdcbi8vIG1vZHVsZSBjaHVua3MgPSAwIDEgNCIsIm1vZHVsZS5leHBvcnRzID0gcmVxdWlyZShcImJ1ZmZlci9cIik7XG5cblxuLy8vLy8vLy8vLy8vLy8vLy8vXG4vLyBXRUJQQUNLIEZPT1RFUlxuLy8gZXh0ZXJuYWwgXCJidWZmZXIvXCJcbi8vIG1vZHVsZSBpZCA9IDkyXG4vLyBtb2R1bGUgY2h1bmtzID0gMSJdLCJzb3VyY2VSb290IjoiIn0=