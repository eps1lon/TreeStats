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
/******/ 	__webpack_require__.p = "";
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = 26);
/******/ })
/************************************************************************/
/******/ ([
/* 0 */
/***/ (function(module, exports) {

module.exports = require("path");

/***/ }),
/* 1 */
/***/ (function(module, exports) {

module.exports = require("fs");

/***/ }),
/* 2 */
/***/ (function(module, exports) {

module.exports = require("babel-runtime/core-js/get-iterator");

/***/ }),
/* 3 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var Map = __webpack_require__(6).Map;

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
/* 4 */,
/* 5 */
/***/ (function(module, exports) {

module.exports = require("babel-runtime/helpers/slicedToArray");

/***/ }),
/* 6 */
/***/ (function(module, exports) {

module.exports = require("immutable");

/***/ }),
/* 7 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var _getIterator2 = __webpack_require__(2);

var _getIterator3 = _interopRequireDefault(_getIterator2);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

/* eslint new-cap: off */
var Buffer = __webpack_require__(24).Buffer;

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
/* 8 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.filename = filename;
exports.fileProps = fileProps;
exports.ctimeOutFile = ctimeOutFile;

var _path = __webpack_require__(0);

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
/* 9 */,
/* 10 */
/***/ (function(module, exports) {

module.exports = require("async");

/***/ }),
/* 11 */
/***/ (function(module, exports) {

module.exports = require("babel-runtime/core-js/array/from");

/***/ }),
/* 12 */
/***/ (function(module, exports) {

module.exports = require("babel-runtime/core-js/map");

/***/ }),
/* 13 */
/***/ (function(module, exports) {

module.exports = require("babel-runtime/core-js/object/assign");

/***/ }),
/* 14 */,
/* 15 */,
/* 16 */
/***/ (function(module, exports) {

module.exports = require("babel-runtime/helpers/toConsumableArray");

/***/ }),
/* 17 */,
/* 18 */,
/* 19 */
/***/ (function(module, exports) {

module.exports = require("csv");

/***/ }),
/* 20 */
/***/ (function(module, exports) {

module.exports = require("log4js");

/***/ }),
/* 21 */
/***/ (function(module, exports) {

module.exports = require("request");

/***/ }),
/* 22 */,
/* 23 */,
/* 24 */
/***/ (function(module, exports) {

module.exports = require("buffer/");

/***/ }),
/* 25 */,
/* 26 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var _getIterator2 = __webpack_require__(2);

var _getIterator3 = _interopRequireDefault(_getIterator2);

var _assign = __webpack_require__(13);

var _assign2 = _interopRequireDefault(_assign);

var _from = __webpack_require__(11);

var _from2 = _interopRequireDefault(_from);

var _toConsumableArray2 = __webpack_require__(16);

var _toConsumableArray3 = _interopRequireDefault(_toConsumableArray2);

var _slicedToArray2 = __webpack_require__(5);

var _slicedToArray3 = _interopRequireDefault(_slicedToArray2);

var _map = __webpack_require__(12);

var _map2 = _interopRequireDefault(_map);

var _ref5;

var _async = __webpack_require__(10);

var nodeAsync = _interopRequireWildcard(_async);

var _request = __webpack_require__(21);

var _request2 = _interopRequireDefault(_request);

var _path = __webpack_require__(0);

var path = _interopRequireWildcard(_path);

var _fs = __webpack_require__(1);

var fs = _interopRequireWildcard(_fs);

var _log4js = __webpack_require__(20);

var log4js = _interopRequireWildcard(_log4js);

var _csv = __webpack_require__(19);

var csv = _interopRequireWildcard(_csv);

var _treesToCsvFile = __webpack_require__(8);

var _data = __webpack_require__(3);

var POE = _interopRequireWildcard(_data);

var _PassiveTreeUrl = __webpack_require__(7);

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

/***/ })
/******/ ]);
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vd2VicGFjay9ib290c3RyYXAgNzFiNWVjZDJlZmJmZDg5NzQ4MjUiLCJ3ZWJwYWNrOi8vL2V4dGVybmFsIFwicGF0aFwiIiwid2VicGFjazovLy9leHRlcm5hbCBcImZzXCIiLCJ3ZWJwYWNrOi8vL2V4dGVybmFsIFwiYmFiZWwtcnVudGltZS9jb3JlLWpzL2dldC1pdGVyYXRvclwiIiwid2VicGFjazovLy8uL3NyYy9wb2UvZGF0YS5qcyIsIndlYnBhY2s6Ly8vZXh0ZXJuYWwgXCJiYWJlbC1ydW50aW1lL2hlbHBlcnMvc2xpY2VkVG9BcnJheVwiIiwid2VicGFjazovLy9leHRlcm5hbCBcImltbXV0YWJsZVwiIiwid2VicGFjazovLy8uL3NyYy9wb2UvUGFzc2l2ZVRyZWVVcmwuanMiLCJ3ZWJwYWNrOi8vLy4vc3JjL3NjcmlwdHMvbGliL3RyZWVzVG9Dc3ZGaWxlLmpzIiwid2VicGFjazovLy9leHRlcm5hbCBcImFzeW5jXCIiLCJ3ZWJwYWNrOi8vL2V4dGVybmFsIFwiYmFiZWwtcnVudGltZS9jb3JlLWpzL2FycmF5L2Zyb21cIiIsIndlYnBhY2s6Ly8vZXh0ZXJuYWwgXCJiYWJlbC1ydW50aW1lL2NvcmUtanMvbWFwXCIiLCJ3ZWJwYWNrOi8vL2V4dGVybmFsIFwiYmFiZWwtcnVudGltZS9jb3JlLWpzL29iamVjdC9hc3NpZ25cIiIsIndlYnBhY2s6Ly8vZXh0ZXJuYWwgXCJiYWJlbC1ydW50aW1lL2hlbHBlcnMvdG9Db25zdW1hYmxlQXJyYXlcIiIsIndlYnBhY2s6Ly8vZXh0ZXJuYWwgXCJjc3ZcIiIsIndlYnBhY2s6Ly8vZXh0ZXJuYWwgXCJsb2c0anNcIiIsIndlYnBhY2s6Ly8vZXh0ZXJuYWwgXCJyZXF1ZXN0XCIiLCJ3ZWJwYWNrOi8vL2V4dGVybmFsIFwiYnVmZmVyL1wiIiwid2VicGFjazovLy8uL3NyYy9zY3JpcHRzL2dldF90cmVlcy5qcyJdLCJuYW1lcyI6WyJNYXAiLCJyZXF1aXJlIiwibW9kdWxlIiwiZXhwb3J0cyIsImxlYWd1ZXMiLCJuYW1lIiwiYWN0aXZlIiwicGVybWFuZW50IiwiY2xhc3NlcyIsInBhcmVudCIsImNoYXJhY3Rlcl9jbGFzcyIsImFzY2VuZGFuY3kiLCJ0cmVlcyIsInZlcnNpb24iLCJjdXJyZW50X3RyZWUiLCJCdWZmZXIiLCJkZWNvZGUiLCJzdHIiLCJidWYiLCJyZXBsYWNlIiwiaSIsInJlYWRJbnQzMkJFIiwic3RhcnRpbmdfY2xhc3MiLCJyZWFkSW50OCIsImZ1bGxzY3JlZW4iLCJub2RlcyIsImxlbmd0aCIsInB1c2giLCJyZWFkVUludDE2QkUiLCJlbmNvZGUiLCJzaXplIiwid3JpdGVJbnQzMkJFIiwid3JpdGVJbnQ4Iiwibm9kZSIsIndyaXRlVUludDE2QkUiLCJ0b1N0cmluZyIsImZpbGVuYW1lIiwiZmlsZVByb3BzIiwiY3RpbWVPdXRGaWxlIiwicGF0aCIsInJvb3QiLCJub3ciLCJ0cmVlX2lkZW50Iiwiam9pbiIsIm1hdGNoIiwiUmVnRXhwIiwiZXhlYyIsImJhc2VuYW1lIiwidW5kZWZpbmVkIiwiY3RpbWUiLCJwcm9wcyIsIk51bWJlciIsIk5FR0FUSVZFX0lORklOSVRZIiwibm9kZUFzeW5jIiwiZnMiLCJsb2c0anMiLCJjc3YiLCJQT0UiLCJUcmVlVXJsIiwib3V0RmlsZW5hbWUiLCJsZWFndWVfaWQiLCJsZWFndWUiLCJzZXQiLCJjbGFzc19pZCIsImtsYXNzIiwiaWQiLCJwcm9jZXNzIiwiYXJndiIsInNsaWNlIiwidG90YWwiLCJhc3luY19saW1pdCIsImxhZGRlcl9saW1pdCIsImFwaV9yYXRlX2xpbWl0IiwiTWF0aCIsIm1pbiIsIm1heCIsIlBPU0lUSVZFX0lORklOSVRZIiwic3RhcnQiLCJEYXRlIiwicm9vdF9wYXRoIiwiX19kaXJuYW1lIiwiZGF0YV9wYXRoIiwibG9nX2ZpbGVuYW1lIiwiY29uZmlndXJlIiwiYXBwZW5kZXJzIiwidHlwZSIsImxvZ2dlciIsImdldExvZ2dlciIsInNldExldmVsIiwibGFkZGVyQXBpIiwib2Zmc2V0IiwibGltaXQiLCJsYWRkZXJBcGlUb0xlYWd1ZSIsImFwaV91cmwiLCJkZWNvZGVVUklDb21wb25lbnQiLCJwYXNzaXZlc0FwaSIsImNoYXJhY3RlciIsImFjY291bnQiLCJjc3ZUcmFuc2Zvcm0iLCJkYXRhIiwiZ2V0IiwiY2xhc3MiLCJ0cmVlX3VybCIsImxhc3RfYWN0aXZlIiwieHAiLCJleHBlcmllbmNlIiwiZGVhZCIsImNoYWxsZW5nZXMiLCJsYWRkZXJBY3RpdmUiLCJvbGRfZW50cnlfY3N2IiwibmV3X2VudHJ5X2FwaSIsIm5ld19lbnRyeV9jc3YiLCJydW50aW1lIiwiaW5mbyIsIm91dF9maWxlbmFtZSIsImxhdGVzdCIsInJlYWRkaXJTeW5jIiwicmVkdWNlIiwiZmlsZSIsImVudHJpZXMiLCJwYXNzaXZlc191cmxzX2NoYXJhY3RlcnMiLCJsYWRkZXJfdXJscyIsImNvbmNhdCIsImtleXMiLCJtYXAiLCJBcnJheSIsImZpbGwiLCJfIiwiZXhpc3RzIiwib2xkX3RyZWVzIiwiY3JlYXRlUmVhZFN0cmVhbSIsInBpcGUiLCJwYXJzZSIsImRlbGltaXRlciIsImNvbHVtbnMiLCJlIiwiZW50cnkiLCJvbGRUcmVlc0NvbXBsZXRlIiwibGFkZGVyQ29tcGxldGUiLCJyZXN1bHRzIiwicGFzc2l2ZXNfdXJscyIsImwiLCJib2R5IiwiSlNPTiIsInJlcXVlc3QiLCJocmVmIiwid2FybiIsInBhc3NpdmVfdXJsIiwib2xkX2VudHJ5IiwiZmlsdGVyIiwidSIsInByb2dyZXNzIiwiaW5fc3RlcHMiLCJtYXBMaW1pdCIsInVybCIsImNhbGxiYWNrIiwiZXJyIiwidHJhbnNmb3JtZWQiLCJ0b0ZpeGVkIiwib24iLCJwYXNzaXZlc0NvbXBsZXRlIiwicmVzdWx0IiwicGFzc2l2ZXMiLCJkZWJ1ZyIsInRhc2tDb21wbGV0ZSIsInRyYW5zZm9ybSIsInN0cmluZ2lmeSIsImhlYWRlciIsImNyZWF0ZVdyaXRlU3RyZWFtIl0sIm1hcHBpbmdzIjoiO0FBQUE7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtB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QUNBbEQsZUFBTzZFLEtBQVAsQ0FBYWhCLFdBQWI7QUFDRDtBQUNGO0FBbkNtQztBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBOztBQXFDcENpQixlQUFheEosS0FBYjtBQUNELENBdENEOztBQXdDQSxJQUFNd0osZUFBZSxTQUFmQSxZQUFlLENBQUN4SixLQUFELEVBQVc7QUFDOUIwRSxTQUFPMkIsSUFBUCx1QkFBZ0MsQ0FBQ0QsWUFBWSxJQUFiLEVBQW1COEMsT0FBbkIsQ0FBMkIsQ0FBM0IsQ0FBaEM7O0FBRUF0RyxNQUFJNkcsU0FBSixDQUFjekosS0FBZCxFQUFxQnNGLFlBQXJCLEVBQW1DaUMsSUFBbkMsQ0FBd0MzRSxJQUFJOEcsU0FBSixDQUFjO0FBQ3BEQyxZQUFRO0FBRDRDLEdBQWQsQ0FBeEMsRUFFSXBDLElBRkosQ0FFUzdFLEdBQUdrSCxpQkFBSCxDQUFxQnRELFlBQXJCLENBRlQ7QUFHRCxDQU5EOztBQVFBLElBQU11QixtQkFBbUIsU0FBbkJBLGdCQUFtQixDQUFDUixTQUFELEVBQWU7QUFDdEM7QUFDQTVFLFlBQVVvRyxRQUFWLENBQW1CaEMsV0FBbkIsRUFBZ0NqRCxjQUFoQyxxQkFBeUQsVUFBQytELENBQUQsRUFBSUksT0FBSixFQUFnQjtBQUN2RSxRQUFJSixDQUFKLEVBQU87QUFDTGpELGFBQU80RCxJQUFQLENBQVlYLENBQVo7QUFDRCxLQUZELE1BRU87QUFDTEcscUJBQWVDLE9BQWYsRUFBd0JWLFNBQXhCO0FBQ0Q7QUFDRixHQU5EO0FBT0QsQ0FURCxDIiwiZmlsZSI6ImdldF90cmVlcy5qcyIsInNvdXJjZXNDb250ZW50IjpbIiBcdC8vIFRoZSBtb2R1bGUgY2FjaGVcbiBcdHZhciBpbnN0YWxsZWRNb2R1bGVzID0ge307XG5cbiBcdC8vIFRoZSByZXF1aXJlIGZ1bmN0aW9uXG4gXHRmdW5jdGlvbiBfX3dlYnBhY2tfcmVxdWlyZV9fKG1vZHVsZUlkKSB7XG5cbiBcdFx0Ly8gQ2hlY2sgaWYgbW9kdWxlIGlzIGluIGNhY2hlXG4gXHRcdGlmKGluc3RhbGxlZE1vZHVsZXNbbW9kdWxlSWRdKVxuIFx0XHRcdHJldHVybiBpbnN0YWxsZWRNb2R1bGVzW21vZHVsZUlkXS5leHBvcnRzO1xuXG4gXHRcdC8vIENyZWF0ZSBhIG5ldyBtb2R1bGUgKGFuZCBwdXQgaXQgaW50byB0aGUgY2FjaGUpXG4gXHRcdHZhciBtb2R1bGUgPSBpbnN0YWxsZWRNb2R1bGVzW21vZHVsZUlkXSA9IHtcbiBcdFx0XHRpOiBtb2R1bGVJZCxcbiBcdFx0XHRsOiBmYWxzZSxcbiBcdFx0XHRleHBvcnRzOiB7fVxuIFx0XHR9O1xuXG4gXHRcdC8vIEV4ZWN1dGUgdGhlIG1vZHVsZSBmdW5jdGlvblxuIFx0XHRtb2R1bGVzW21vZHVsZUlkXS5jYWxsKG1vZHVsZS5leHBvcnRzLCBtb2R1bGUsIG1vZHVsZS5leHBvcnRzLCBfX3dlYnBhY2tfcmVxdWlyZV9fKTtcblxuIFx0XHQvLyBGbGFnIHRoZSBtb2R1bGUgYXMgbG9hZGVkXG4gXHRcdG1vZHVsZS5sID0gdHJ1ZTtcblxuIFx0XHQvLyBSZXR1cm4gdGhlIGV4cG9ydHMgb2YgdGhlIG1vZHVsZVxuIFx0XHRyZXR1cm4gbW9kdWxlLmV4cG9ydHM7XG4gXHR9XG5cblxuIFx0Ly8gZXhwb3NlIHRoZSBtb2R1bGVzIG9iamVjdCAoX193ZWJwYWNrX21vZHVsZXNfXylcbiBcdF9fd2VicGFja19yZXF1aXJlX18ubSA9IG1vZHVsZXM7XG5cbiBcdC8vIGV4cG9zZSB0aGUgbW9kdWxlIGNhY2hlXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLmMgPSBpbnN0YWxsZWRNb2R1bGVzO1xuXG4gXHQvLyBpZGVudGl0eSBmdW5jdGlvbiBmb3IgY2FsbGluZyBoYXJtb255IGltcG9ydHMgd2l0aCB0aGUgY29ycmVjdCBjb250ZXh0XG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLmkgPSBmdW5jdGlvbih2YWx1ZSkgeyByZXR1cm4gdmFsdWU7IH07XG5cbiBcdC8vIGRlZmluZSBnZXR0ZXIgZnVuY3Rpb24gZm9yIGhhcm1vbnkgZXhwb3J0c1xuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5kID0gZnVuY3Rpb24oZXhwb3J0cywgbmFtZSwgZ2V0dGVyKSB7XG4gXHRcdGlmKCFfX3dlYnBhY2tfcmVxdWlyZV9fLm8oZXhwb3J0cywgbmFtZSkpIHtcbiBcdFx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgbmFtZSwge1xuIFx0XHRcdFx0Y29uZmlndXJhYmxlOiBmYWxzZSxcbiBcdFx0XHRcdGVudW1lcmFibGU6IHRydWUsXG4gXHRcdFx0XHRnZXQ6IGdldHRlclxuIFx0XHRcdH0pO1xuIFx0XHR9XG4gXHR9O1xuXG4gXHQvLyBnZXREZWZhdWx0RXhwb3J0IGZ1bmN0aW9uIGZvciBjb21wYXRpYmlsaXR5IHdpdGggbm9uLWhhcm1vbnkgbW9kdWxlc1xuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5uID0gZnVuY3Rpb24obW9kdWxlKSB7XG4gXHRcdHZhciBnZXR0ZXIgPSBtb2R1bGUgJiYgbW9kdWxlLl9fZXNNb2R1bGUgP1xuIFx0XHRcdGZ1bmN0aW9uIGdldERlZmF1bHQoKSB7IHJldHVybiBtb2R1bGVbJ2RlZmF1bHQnXTsgfSA6XG4gXHRcdFx0ZnVuY3Rpb24gZ2V0TW9kdWxlRXhwb3J0cygpIHsgcmV0dXJuIG1vZHVsZTsgfTtcbiBcdFx0X193ZWJwYWNrX3JlcXVpcmVfXy5kKGdldHRlciwgJ2EnLCBnZXR0ZXIpO1xuIFx0XHRyZXR1cm4gZ2V0dGVyO1xuIFx0fTtcblxuIFx0Ly8gT2JqZWN0LnByb3RvdHlwZS5oYXNPd25Qcm9wZXJ0eS5jYWxsXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLm8gPSBmdW5jdGlvbihvYmplY3QsIHByb3BlcnR5KSB7IHJldHVybiBPYmplY3QucHJvdG90eXBlLmhhc093blByb3BlcnR5LmNhbGwob2JqZWN0LCBwcm9wZXJ0eSk7IH07XG5cbiBcdC8vIF9fd2VicGFja19wdWJsaWNfcGF0aF9fXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLnAgPSBcIlwiO1xuXG4gXHQvLyBMb2FkIGVudHJ5IG1vZHVsZSBhbmQgcmV0dXJuIGV4cG9ydHNcbiBcdHJldHVybiBfX3dlYnBhY2tfcmVxdWlyZV9fKF9fd2VicGFja19yZXF1aXJlX18ucyA9IDI2KTtcblxuXG5cbi8vIFdFQlBBQ0sgRk9PVEVSIC8vXG4vLyB3ZWJwYWNrL2Jvb3RzdHJhcCA3MWI1ZWNkMmVmYmZkODk3NDgyNSIsIm1vZHVsZS5leHBvcnRzID0gcmVxdWlyZShcInBhdGhcIik7XG5cblxuLy8vLy8vLy8vLy8vLy8vLy8vXG4vLyBXRUJQQUNLIEZPT1RFUlxuLy8gZXh0ZXJuYWwgXCJwYXRoXCJcbi8vIG1vZHVsZSBpZCA9IDBcbi8vIG1vZHVsZSBjaHVua3MgPSAwIDEgMiAzIiwibW9kdWxlLmV4cG9ydHMgPSByZXF1aXJlKFwiZnNcIik7XG5cblxuLy8vLy8vLy8vLy8vLy8vLy8vXG4vLyBXRUJQQUNLIEZPT1RFUlxuLy8gZXh0ZXJuYWwgXCJmc1wiXG4vLyBtb2R1bGUgaWQgPSAxXG4vLyBtb2R1bGUgY2h1bmtzID0gMCAxIDIgMyIsIm1vZHVsZS5leHBvcnRzID0gcmVxdWlyZShcImJhYmVsLXJ1bnRpbWUvY29yZS1qcy9nZXQtaXRlcmF0b3JcIik7XG5cblxuLy8vLy8vLy8vLy8vLy8vLy8vXG4vLyBXRUJQQUNLIEZPT1RFUlxuLy8gZXh0ZXJuYWwgXCJiYWJlbC1ydW50aW1lL2NvcmUtanMvZ2V0LWl0ZXJhdG9yXCJcbi8vIG1vZHVsZSBpZCA9IDJcbi8vIG1vZHVsZSBjaHVua3MgPSAwIDEgMiIsImNvbnN0IE1hcCA9IHJlcXVpcmUoJ2ltbXV0YWJsZScpLk1hcDtcblxuLyogZXNsaW50IG1heC1sZW46IFtcImVycm9yXCIsIDEyMF0qL1xuLyoqXG4gKlxuICovXG5tb2R1bGUuZXhwb3J0cyA9IHtcbiAgLy8gTWFwPHN0cmluZywgTGVhZ3VlUHJvcHM+XG4gIGxlYWd1ZXM6IE1hcChbXG4gICAgWycxJywgeyBuYW1lOiAnQnJlYWNoJywgYWN0aXZlOiBmYWxzZSwgcGVybWFuZW50OiBmYWxzZSB9XSxcbiAgICBbJzInLCB7IG5hbWU6ICdIYXJkY29yZSBCcmVhY2gnLCBhY3RpdmU6IGZhbHNlLCBwZXJtYW5lbnQ6IGZhbHNlIH1dLFxuICAgIFsnMycsIHsgbmFtZTogJ0xlZ2FjeScsIGFjdGl2ZTogdHJ1ZSwgcGVybWFuZW50OiBmYWxzZSB9XSxcbiAgICBbJzQnLCB7IG5hbWU6ICdIYXJkY29yZSBMZWdhY3knLCBhY3RpdmU6IHRydWUsIHBlcm1hbmVudDogZmFsc2UgfV0sXG4gICAgWyc1JywgeyBuYW1lOiAnU3RhbmRhcmQnLCBhY3RpdmU6IGZhbHNlLCBwZXJtYW5lbnQ6IGZhbHNlIH1dLFxuICAgIFsnNicsIHsgbmFtZTogJ1NTRiBMZWdhY3knLCBhY3RpdmU6IHRydWUsIHBlcm1hbmVudDogZmFsc2UgfV0sXG4gICAgWyc3JywgeyBuYW1lOiAnU1NGIEhDIExlZ2FjeScsIGFjdGl2ZTogdHJ1ZSwgcGVybWFuZW50OiBmYWxzZSB9XSxcbiAgXSksXG4gIC8vIE1hcDxzdHJpbmcsIENsYXNzUHJvcHM+XG4gIGNsYXNzZXM6IE1hcChbXG4gICAgLy8gbmFtZSwgcGFyZW50IGlzIHRoZSBwYXJlbnQgY2xhc3MgZm9yIGFzY2VuZGFuY2llcyBpZVxuICAgIC8vIGNoYXJhY3Rlcl9jbGFzcywgYXNjZW5kYW5jeSBpcyB1c2VkIGZvciB1cmwgZ2VuZXJhdGlvblxuICAgIFsnMScsIHsgbmFtZTogJ01hcmF1ZGVyJywgcGFyZW50OiBudWxsLCBjaGFyYWN0ZXJfY2xhc3M6IDEsIGFzY2VuZGFuY3k6IDAgfV0sXG4gICAgWycyJywgeyBuYW1lOiAnVGVtcGxhcicsIHBhcmVudDogbnVsbCwgY2hhcmFjdGVyX2NsYXNzOiA1LCBhc2NlbmRhbmN5OiAwIH1dLFxuICAgIFsnMycsIHsgbmFtZTogJ1dpdGNoJywgcGFyZW50OiBudWxsLCBjaGFyYWN0ZXJfY2xhc3M6IDMsIGFzY2VuZGFuY3k6IDAgfV0sXG4gICAgWyc0JywgeyBuYW1lOiAnU2hhZG93JywgcGFyZW50OiBudWxsLCBjaGFyYWN0ZXJfY2xhc3M6IDYsIGFzY2VuZGFuY3k6IDAgfV0sXG4gICAgWyc1JywgeyBuYW1lOiAnUmFuZ2VyJywgcGFyZW50OiBudWxsLCBjaGFyYWN0ZXJfY2xhc3M6IDIsIGFzY2VuZGFuY3k6IDAgfV0sXG4gICAgWyc2JywgeyBuYW1lOiAnRHVlbGlzdCcsIHBhcmVudDogbnVsbCwgY2hhcmFjdGVyX2NsYXNzOiA0LCBhc2NlbmRhbmN5OiAwIH1dLFxuICAgIFsnNycsIHsgbmFtZTogJ1NjaW9uJywgcGFyZW50OiBudWxsLCBjaGFyYWN0ZXJfY2xhc3M6IDcsIGFzY2VuZGFuY3k6IDAgfV0sXG4gICAgWyc4JywgeyBuYW1lOiAnQmVyc2Vya2VyJywgcGFyZW50OiAxLCBjaGFyYWN0ZXJfY2xhc3M6IDEsIGFzY2VuZGFuY3k6IDIgfV0sXG4gICAgWyc5JywgeyBuYW1lOiAnQ2hpZWZ0YWluJywgcGFyZW50OiAxLCBjaGFyYWN0ZXJfY2xhc3M6IDEsIGFzY2VuZGFuY3k6IDMgfV0sXG4gICAgWycxMCcsIHsgbmFtZTogJ0p1Z2dlcm5hdXQnLCBwYXJlbnQ6IDEsIGNoYXJhY3Rlcl9jbGFzczogMSwgYXNjZW5kYW5jeTogMSB9XSxcbiAgICBbJzExJywgeyBuYW1lOiAnSW5xdWlzaXRvcicsIHBhcmVudDogMiwgY2hhcmFjdGVyX2NsYXNzOiA1LCBhc2NlbmRhbmN5OiAxIH1dLFxuICAgIFsnMTInLCB7IG5hbWU6ICdHdWFyZGlhbicsIHBhcmVudDogMiwgY2hhcmFjdGVyX2NsYXNzOiA1LCBhc2NlbmRhbmN5OiAzIH1dLFxuICAgIFsnMTMnLCB7IG5hbWU6ICdIaWVyb3BoYW50JywgcGFyZW50OiAyLCBjaGFyYWN0ZXJfY2xhc3M6IDUsIGFzY2VuZGFuY3k6IDIgfV0sXG4gICAgWycxNCcsIHsgbmFtZTogJ05lY3JvbWFuY2VyJywgcGFyZW50OiAzLCBjaGFyYWN0ZXJfY2xhc3M6IDMsIGFzY2VuZGFuY3k6IDMgfV0sXG4gICAgWycxNScsIHsgbmFtZTogJ09jY3VsdGlzdCcsIHBhcmVudDogMywgY2hhcmFjdGVyX2NsYXNzOiAzLCBhc2NlbmRhbmN5OiAxIH1dLFxuICAgIFsnMTYnLCB7IG5hbWU6ICdFbGVtZW50YWxpc3QnLCBwYXJlbnQ6IDMsIGNoYXJhY3Rlcl9jbGFzczogMywgYXNjZW5kYW5jeTogMiB9XSxcbiAgICBbJzE3JywgeyBuYW1lOiAnQXNzYXNzaW4nLCBwYXJlbnQ6IDQsIGNoYXJhY3Rlcl9jbGFzczogNiwgYXNjZW5kYW5jeTogMSB9XSxcbiAgICBbJzE4JywgeyBuYW1lOiAnU2Fib3RldXInLCBwYXJlbnQ6IDQsIGNoYXJhY3Rlcl9jbGFzczogNiwgYXNjZW5kYW5jeTogMyB9XSxcbiAgICBbJzE5JywgeyBuYW1lOiAnVHJpY2tzdGVyJywgcGFyZW50OiA0LCBjaGFyYWN0ZXJfY2xhc3M6IDYsIGFzY2VuZGFuY3k6IDIgfV0sXG4gICAgWycyMCcsIHsgbmFtZTogJ0RlYWRleWUnLCBwYXJlbnQ6IDUsIGNoYXJhY3Rlcl9jbGFzczogMiwgYXNjZW5kYW5jeTogMiB9XSxcbiAgICBbJzIxJywgeyBuYW1lOiAnUmFpZGVyJywgcGFyZW50OiA1LCBjaGFyYWN0ZXJfY2xhc3M6IDIsIGFzY2VuZGFuY3k6IDEgfV0sXG4gICAgWycyMicsIHsgbmFtZTogJ1BhdGhmaW5kZXInLCBwYXJlbnQ6IDUsIGNoYXJhY3Rlcl9jbGFzczogMiwgYXNjZW5kYW5jeTogMyB9XSxcbiAgICBbJzIzJywgeyBuYW1lOiAnU2xheWVyJywgcGFyZW50OiA2LCBjaGFyYWN0ZXJfY2xhc3M6IDQsIGFzY2VuZGFuY3k6IDEgfV0sXG4gICAgWycyNCcsIHsgbmFtZTogJ0dsYWRpYXRvcicsIHBhcmVudDogNiwgY2hhcmFjdGVyX2NsYXNzOiA0LCBhc2NlbmRhbmN5OiAyIH1dLFxuICAgIFsnMjUnLCB7IG5hbWU6ICdDaGFtcGlvbicsIHBhcmVudDogNiwgY2hhcmFjdGVyX2NsYXNzOiA0LCBhc2NlbmRhbmN5OiAzIH1dLFxuICAgIFsnMjYnLCB7IG5hbWU6ICdBc2NlbmRhbnQnLCBwYXJlbnQ6IDcsIGNoYXJhY3Rlcl9jbGFzczogNywgYXNjZW5kYW5jeTogMSB9XSxcbiAgXSksXG4gIHRyZWVzOiBNYXAoW1xuICAgIC8vIGRvbnQgdXNlIHVuZGVyc2NvcmVzIGluIHRoZSBpZGVudCBvciBhZGp1c3QgcmVnZXhwIHRoYXQgcmVseSBvbiBmb3JtYXRcbiAgICBbJzI1MCcsIHsgbmFtZTogJzIuNS4wIEJyZWFjaCcsIHZlcnNpb246IDQgfV0sXG4gICAgWycyNjAnLCB7IG5hbWU6ICcyLjYuMCBMZWdhY3knLCB2ZXJzaW9uOiA0IH1dLFxuICBdKSxcbiAgY3VycmVudF90cmVlOiAnMjYwJyxcbn07XG5cblxuXG4vLyBXRUJQQUNLIEZPT1RFUiAvL1xuLy8gLi9zcmMvcG9lL2RhdGEuanMiLCJtb2R1bGUuZXhwb3J0cyA9IHJlcXVpcmUoXCJiYWJlbC1ydW50aW1lL2hlbHBlcnMvc2xpY2VkVG9BcnJheVwiKTtcblxuXG4vLy8vLy8vLy8vLy8vLy8vLy9cbi8vIFdFQlBBQ0sgRk9PVEVSXG4vLyBleHRlcm5hbCBcImJhYmVsLXJ1bnRpbWUvaGVscGVycy9zbGljZWRUb0FycmF5XCJcbi8vIG1vZHVsZSBpZCA9IDVcbi8vIG1vZHVsZSBjaHVua3MgPSAwIDMiLCJtb2R1bGUuZXhwb3J0cyA9IHJlcXVpcmUoXCJpbW11dGFibGVcIik7XG5cblxuLy8vLy8vLy8vLy8vLy8vLy8vXG4vLyBXRUJQQUNLIEZPT1RFUlxuLy8gZXh0ZXJuYWwgXCJpbW11dGFibGVcIlxuLy8gbW9kdWxlIGlkID0gNlxuLy8gbW9kdWxlIGNodW5rcyA9IDAgMSIsIi8qIGVzbGludCBuZXctY2FwOiBvZmYgKi9cbmNvbnN0IEJ1ZmZlciA9IHJlcXVpcmUoJ2J1ZmZlci8nKS5CdWZmZXI7XG5cbm1vZHVsZS5leHBvcnRzID0ge1xuICAvKipcbiAgICpcbiAgICogQHBhcmFtIHtzdHJpbmd9IHN0ciB0aGUgZW5jb2RlZCBzdHJpbmcgZnJvbSBhbiB1cmxcbiAgICogQHJldHVybiB7e3ZlcnNpb246ICosIHN0YXJ0aW5nX2NsYXNzOiAqLCBhc2NlbmRhbmN5OiAqLFxuICAgKiBmdWxsc2NyZWVuOiBudW1iZXIsIG5vZGVzOiBBcnJheX19XG4gICAqL1xuICBkZWNvZGU6IGZ1bmN0aW9uKHN0cikge1xuICAgIC8vIGRlZHVjZWQgZnJvbSBsb2FkSGlzdG9yeVVybFxuICAgIGNvbnN0IGJ1ZiA9IEJ1ZmZlcihzdHIucmVwbGFjZSgvLS9nLCAnKycpLnJlcGxhY2UoL18vZywgJy8nKSwgJ2Jhc2U2NCcpO1xuXG4gICAgbGV0IGkgPSAwO1xuXG4gICAgY29uc3QgdmVyc2lvbiA9IGJ1Zi5yZWFkSW50MzJCRShpKTtcbiAgICBpICs9IDQ7XG5cbiAgICBjb25zdCBzdGFydGluZ19jbGFzcyA9IGJ1Zi5yZWFkSW50OChpKTtcbiAgICBpICs9IDE7XG5cbiAgICBjb25zdCBhc2NlbmRhbmN5ID0gYnVmLnJlYWRJbnQ4KGkpO1xuICAgIGkgKz0gMTtcblxuICAgIGxldCBmdWxsc2NyZWVuID0gMDtcbiAgICAvLyBzb3VyY2Ugc2F5cyA+IDAsIFBvRVNraWxsVHJlZSA+IDNcbiAgICAvLyB3ZSB3aWxsIGFkanVzdCBvdXIgb2Zmc2V0IGJlZm9yZSB3ZSBzdGFydCBsb29waW5nXG4gICAgaWYgKHZlcnNpb24gPiAwKSB7XG4gICAgICBmdWxsc2NyZWVuID0gYnVmLnJlYWRJbnQ4KGkpO1xuICAgICAgaSArPSAxO1xuICAgIH1cblxuICAgIGNvbnN0IG5vZGVzID0gW107XG5cbiAgICAvLyBzZWUgdmVyc2lvbiBjb21tZW50XG4gICAgZm9yIChpIC09IChidWYubGVuZ3RoIC0gaSkgJSAyOyBpIDwgYnVmLmxlbmd0aDsgaSArPSAyKSB7XG4gICAgICBub2Rlcy5wdXNoKGJ1Zi5yZWFkVUludDE2QkUoaSkpO1xuICAgIH1cblxuICAgIHJldHVybiB7XG4gICAgICB2ZXJzaW9uOiB2ZXJzaW9uLFxuICAgICAgc3RhcnRpbmdfY2xhc3M6IHN0YXJ0aW5nX2NsYXNzLFxuICAgICAgYXNjZW5kYW5jeTogYXNjZW5kYW5jeSxcbiAgICAgIGZ1bGxzY3JlZW46IGZ1bGxzY3JlZW4sXG4gICAgICBub2Rlczogbm9kZXMsXG4gICAgfTtcbiAgfSxcbiAgLyoqXG4gICAqIGNvbXB1dGVzIHN0cmluZyBmb3IgdXNhZ2UgaW4gdHJlZSBwbGFuZXJzXG4gICAqXG4gICAqIEBwYXJhbSB7bnVtYmVyfSB2ZXJzaW9uXG4gICAqIEBwYXJhbSB7bnVtYmVyfSBzdGFydGluZ19jbGFzc1xuICAgKiBAcGFyYW0ge251bWJlcn0gYXNjZW5kYW5jeVxuICAgKiBAcGFyYW0ge251bWJlcltdfSBub2Rlc1xuICAgKiBAcGFyYW0ge251bWJlcn0gZnVsbHNjcmVlblxuICAgKiBAcmV0dXJuIHtzdHJpbmd9XG4gICAqL1xuICBlbmNvZGU6IGZ1bmN0aW9uKHZlcnNpb24sIHN0YXJ0aW5nX2NsYXNzLCBhc2NlbmRhbmN5LCBub2RlcyxcbiAgICBmdWxsc2NyZWVuID0gMCkge1xuICAgIGNvbnN0IHNpemUgPSBub2Rlcy5sZW5ndGggKiAyICsgNiArICh2ZXJzaW9uID4gMCA/IDEgOiAwKTtcbiAgICBsZXQgaSA9IDA7XG5cbiAgICBjb25zdCBidWYgPSBuZXcgQnVmZmVyKHNpemUpO1xuXG4gICAgYnVmLndyaXRlSW50MzJCRSh2ZXJzaW9uLCBpKTtcbiAgICBpICs9IDQ7XG5cbiAgICBidWYud3JpdGVJbnQ4KHN0YXJ0aW5nX2NsYXNzLCBpKTtcbiAgICBpICs9IDE7XG5cbiAgICBidWYud3JpdGVJbnQ4KGFzY2VuZGFuY3ksIGkpO1xuICAgIGkgKz0gMTtcblxuICAgIGlmICh2ZXJzaW9uID4gMCkge1xuICAgICAgYnVmLndyaXRlSW50OChmdWxsc2NyZWVuLCBpKTtcbiAgICAgIGkgKz0gMTtcbiAgICB9XG5cbiAgICBmb3IgKGxldCBub2RlIG9mIG5vZGVzKSB7XG4gICAgICBidWYud3JpdGVVSW50MTZCRShub2RlLCBpKTtcblxuICAgICAgaSArPSAyO1xuICAgIH1cblxuICAgIHJldHVybiBidWYudG9TdHJpbmcoJ2Jhc2U2NCcpLnJlcGxhY2UoL1xcKy9nLCAnLScpLnJlcGxhY2UoL1xcLy9nLCAnXycpO1xuICB9LFxufTtcblxuXG5cbi8vIFdFQlBBQ0sgRk9PVEVSIC8vXG4vLyAuL3NyYy9wb2UvUGFzc2l2ZVRyZWVVcmwuanMiLCJpbXBvcnQgKiBhcyBwYXRoIGZyb20gJ3BhdGgnO1xuXG4vKipcbiAqIGdlbmVyYXRlcyB0aGUgZmlsZW5hbWUgZm9yIHRoZSBjc3Ygb3V0cHV0XG4gKiBAcGFyYW0ge3N0cmluZ30gcm9vdFxuICogQHBhcmFtIHtudW1iZXJ9IG5vd1xuICogQHBhcmFtIHtzdHJpbmd9IHRyZWVfaWRlbnRcbiAqIEByZXR1cm4geyp9XG4gKi9cbmV4cG9ydCBmdW5jdGlvbiBmaWxlbmFtZShyb290LCBub3csIHRyZWVfaWRlbnQpIHtcbiAgLy8gYWRqdXN0IGdpdGlnbm9yZSBhY2NvcmRpbmdseVxuICByZXR1cm4gcGF0aC5qb2luKHJvb3QsIGAke25vd31fJHt0cmVlX2lkZW50fV9nZXRfdHJlZXMuY3N2YCk7XG59O1xuXG4vKipcbiAqIEBwYXJhbSB7c3RyaW5nfSBmaWxlbmFtZVxuICogQHJldHVybiB7T2JqZWN0fSByZXZlcnNlIG9mIG91dEZpbGVuYW1lXG4gKi9cbmV4cG9ydCBmdW5jdGlvbiBmaWxlUHJvcHMoZmlsZW5hbWU9JycpIHtcbiAgY29uc3QgbWF0Y2ggPSBuZXcgUmVnRXhwKGBeKFteX10rKV8oW15fXSspX2dldF90cmVlc1xcLmNzdiRgKVxuICAgIC5leGVjKHBhdGguYmFzZW5hbWUoZmlsZW5hbWUpKTtcblxuICBpZiAobWF0Y2ggPT09IG51bGwpIHtcbiAgICByZXR1cm4gdW5kZWZpbmVkO1xuICB9IGVsc2Uge1xuICAgIHJldHVybiB7XG4gICAgICBjdGltZTogK21hdGNoWzFdLFxuICAgICAgdHJlZV9pZGVudDogbWF0Y2hbMl0sXG4gICAgfTtcbiAgfVxufTtcblxuLyoqXG4gKiBleHRyYWN0cyB0aGUgY3JlYXRpb24gZGF0ZSBmcm9tIGEgZmlsZW5hbWUgd2hpY2hcbiAqIHNob3VsZCBiZSBhIGpzIERhdGUgYXQgdGhlIHN0YXJ0IG9mIHRoZSBiYXNlbmFtZVxuICogQHBhcmFtIHtzdHJpbmd9IGZpbGVuYW1lXG4gKiBAcmV0dXJuIHtudW1iZXJ9XG4gKi9cbmV4cG9ydCBmdW5jdGlvbiBjdGltZU91dEZpbGUoZmlsZW5hbWUpIHtcbiAgY29uc3QgcHJvcHMgPSBmaWxlUHJvcHMoZmlsZW5hbWUpO1xuXG4gIGlmIChwcm9wcyA9PT0gdW5kZWZpbmVkKSB7XG4gICAgcmV0dXJuIE51bWJlci5ORUdBVElWRV9JTkZJTklUWTtcbiAgfSBlbHNlIHtcbiAgICByZXR1cm4gcHJvcHMuY3RpbWU7XG4gIH1cbn07XG5cblxuXG4vLyBXRUJQQUNLIEZPT1RFUiAvL1xuLy8gLi9zcmMvc2NyaXB0cy9saWIvdHJlZXNUb0NzdkZpbGUuanMiLCJtb2R1bGUuZXhwb3J0cyA9IHJlcXVpcmUoXCJhc3luY1wiKTtcblxuXG4vLy8vLy8vLy8vLy8vLy8vLy9cbi8vIFdFQlBBQ0sgRk9PVEVSXG4vLyBleHRlcm5hbCBcImFzeW5jXCJcbi8vIG1vZHVsZSBpZCA9IDEwXG4vLyBtb2R1bGUgY2h1bmtzID0gMCIsIm1vZHVsZS5leHBvcnRzID0gcmVxdWlyZShcImJhYmVsLXJ1bnRpbWUvY29yZS1qcy9hcnJheS9mcm9tXCIpO1xuXG5cbi8vLy8vLy8vLy8vLy8vLy8vL1xuLy8gV0VCUEFDSyBGT09URVJcbi8vIGV4dGVybmFsIFwiYmFiZWwtcnVudGltZS9jb3JlLWpzL2FycmF5L2Zyb21cIlxuLy8gbW9kdWxlIGlkID0gMTFcbi8vIG1vZHVsZSBjaHVua3MgPSAwIiwibW9kdWxlLmV4cG9ydHMgPSByZXF1aXJlKFwiYmFiZWwtcnVudGltZS9jb3JlLWpzL21hcFwiKTtcblxuXG4vLy8vLy8vLy8vLy8vLy8vLy9cbi8vIFdFQlBBQ0sgRk9PVEVSXG4vLyBleHRlcm5hbCBcImJhYmVsLXJ1bnRpbWUvY29yZS1qcy9tYXBcIlxuLy8gbW9kdWxlIGlkID0gMTJcbi8vIG1vZHVsZSBjaHVua3MgPSAwIiwibW9kdWxlLmV4cG9ydHMgPSByZXF1aXJlKFwiYmFiZWwtcnVudGltZS9jb3JlLWpzL29iamVjdC9hc3NpZ25cIik7XG5cblxuLy8vLy8vLy8vLy8vLy8vLy8vXG4vLyBXRUJQQUNLIEZPT1RFUlxuLy8gZXh0ZXJuYWwgXCJiYWJlbC1ydW50aW1lL2NvcmUtanMvb2JqZWN0L2Fzc2lnblwiXG4vLyBtb2R1bGUgaWQgPSAxM1xuLy8gbW9kdWxlIGNodW5rcyA9IDAiLCJtb2R1bGUuZXhwb3J0cyA9IHJlcXVpcmUoXCJiYWJlbC1ydW50aW1lL2hlbHBlcnMvdG9Db25zdW1hYmxlQXJyYXlcIik7XG5cblxuLy8vLy8vLy8vLy8vLy8vLy8vXG4vLyBXRUJQQUNLIEZPT1RFUlxuLy8gZXh0ZXJuYWwgXCJiYWJlbC1ydW50aW1lL2hlbHBlcnMvdG9Db25zdW1hYmxlQXJyYXlcIlxuLy8gbW9kdWxlIGlkID0gMTZcbi8vIG1vZHVsZSBjaHVua3MgPSAwIiwibW9kdWxlLmV4cG9ydHMgPSByZXF1aXJlKFwiY3N2XCIpO1xuXG5cbi8vLy8vLy8vLy8vLy8vLy8vL1xuLy8gV0VCUEFDSyBGT09URVJcbi8vIGV4dGVybmFsIFwiY3N2XCJcbi8vIG1vZHVsZSBpZCA9IDE5XG4vLyBtb2R1bGUgY2h1bmtzID0gMCIsIm1vZHVsZS5leHBvcnRzID0gcmVxdWlyZShcImxvZzRqc1wiKTtcblxuXG4vLy8vLy8vLy8vLy8vLy8vLy9cbi8vIFdFQlBBQ0sgRk9PVEVSXG4vLyBleHRlcm5hbCBcImxvZzRqc1wiXG4vLyBtb2R1bGUgaWQgPSAyMFxuLy8gbW9kdWxlIGNodW5rcyA9IDAiLCJtb2R1bGUuZXhwb3J0cyA9IHJlcXVpcmUoXCJyZXF1ZXN0XCIpO1xuXG5cbi8vLy8vLy8vLy8vLy8vLy8vL1xuLy8gV0VCUEFDSyBGT09URVJcbi8vIGV4dGVybmFsIFwicmVxdWVzdFwiXG4vLyBtb2R1bGUgaWQgPSAyMVxuLy8gbW9kdWxlIGNodW5rcyA9IDAiLCJtb2R1bGUuZXhwb3J0cyA9IHJlcXVpcmUoXCJidWZmZXIvXCIpO1xuXG5cbi8vLy8vLy8vLy8vLy8vLy8vL1xuLy8gV0VCUEFDSyBGT09URVJcbi8vIGV4dGVybmFsIFwiYnVmZmVyL1wiXG4vLyBtb2R1bGUgaWQgPSAyNFxuLy8gbW9kdWxlIGNodW5rcyA9IDAiLCJpbXBvcnQgKiBhcyBub2RlQXN5bmMgZnJvbSAnYXN5bmMnO1xuaW1wb3J0IHsgZGVmYXVsdCBhcyByZXF1ZXN0IH0gZnJvbSAncmVxdWVzdCc7XG5pbXBvcnQgKiBhcyBwYXRoIGZyb20gJ3BhdGgnO1xuaW1wb3J0ICogYXMgZnMgZnJvbSAnZnMnO1xuaW1wb3J0ICogYXMgbG9nNGpzIGZyb20gJ2xvZzRqcyc7XG5pbXBvcnQgKiBhcyBjc3YgZnJvbSAnY3N2JztcblxuaW1wb3J0IHsgY3RpbWVPdXRGaWxlLCBmaWxlbmFtZSB9IGZyb20gJy4vbGliL3RyZWVzVG9Dc3ZGaWxlJztcblxuaW1wb3J0ICogYXMgUE9FIGZyb20gJy4uL3BvZS9kYXRhLmpzJztcbmltcG9ydCAqIGFzIFRyZWVVcmwgZnJvbSAnLi4vcG9lL1Bhc3NpdmVUcmVlVXJsJztcblxuY29uc3QgdHJlZV9pZGVudCA9IFBPRS5jdXJyZW50X3RyZWU7XG5jb25zdCBvdXRGaWxlbmFtZSA9IChyb290LCBub3cpID0+IGZpbGVuYW1lKHJvb3QsIG5vdywgdHJlZV9pZGVudCk7XG5cbi8vIGNyZWF0ZSBzb21lIGxvb2t1cCB0YWJsZXMgZm9yIGxlYWd1ZXMsIGNsYXNzZXMgZXRjXG5jb25zdCBsZWFndWVzID0gbmV3IE1hcCgpO1xuZm9yIChsZXQgW2xlYWd1ZV9pZCwgbGVhZ3VlXSBvZiBQT0UubGVhZ3Vlcykge1xuICBpZiAobGVhZ3VlLmFjdGl2ZSkge1xuICAgIGxlYWd1ZXMuc2V0KGxlYWd1ZS5uYW1lLCBsZWFndWVfaWQpO1xuICB9XG59XG5jb25zdCBjbGFzc2VzID0gbmV3IE1hcCgpO1xuZm9yIChsZXQgW2NsYXNzX2lkLCBrbGFzc10gb2YgUE9FLmNsYXNzZXMpIHtcbiAgY2xhc3Nlcy5zZXQoa2xhc3MubmFtZSwgT2JqZWN0LmFzc2lnbih7XG4gICAgaWQ6IGNsYXNzX2lkLFxuICB9LCBrbGFzcykpO1xufVxuXG4vLyBwYXNzaXZlIGZldGNoZXMgPSB8bGVhZ3Vlc3wgKiB0b3RhbFxubGV0IFt0b3RhbCwgYXN5bmNfbGltaXQsIGxhZGRlcl9saW1pdCwgYXBpX3JhdGVfbGltaXRdID0gcHJvY2Vzcy5hcmd2LnNsaWNlKDIpO1xuLy8gYm91bmRhcmllcyBzZXQgYnkgZ2dnIGFwaVxudG90YWwgPSBNYXRoLm1pbigxNTAwMCwgTWF0aC5tYXgoMSwgdG90YWwgfHwgMCkpO1xubGFkZGVyX2xpbWl0ID0gTWF0aC5taW4oMjAwLCBNYXRoLm1heCgxLCBsYWRkZXJfbGltaXQgfHwgMjAwKSk7XG4vLyBudW1iZXIgb2Ygc2ltdWx0YW5lb3VzIGFzeW5jIGNhbGxzXG5hc3luY19saW1pdFxuICA9IE1hdGgubWluKE51bWJlci5QT1NJVElWRV9JTkZJTklUWSwgTWF0aC5tYXgoMSwgYXN5bmNfbGltaXQgfHwgNTAwKSk7XG4vLyBudW1iZXIgb2YgbWF4aW11bSBjYWxscyB0byBnZ2cgYXBpICh0aGlzIHNob3VsZCBiZSBzbWFsbFxuYXBpX3JhdGVfbGltaXRcbiAgPSBNYXRoLm1pbihOdW1iZXIuUE9TSVRJVkVfSU5GSU5JVFksIE1hdGgubWF4KDEsIGFwaV9yYXRlX2xpbWl0IHx8IDUpKTtcblxuLy8gY3V0IG9mIHJlbWFpbmRlclxudG90YWwgLT0gdG90YWwgJSBsYWRkZXJfbGltaXQ7XG5cbmNvbnN0IHN0YXJ0ID0gRGF0ZS5ub3coKTtcblxuY29uc3Qgcm9vdF9wYXRoID0gX19kaXJuYW1lO1xuY29uc3QgZGF0YV9wYXRoID0gcGF0aC5qb2luKHJvb3RfcGF0aCwgJy9nZXRfdHJlZXMnKTtcblxuY29uc3QgbG9nX2ZpbGVuYW1lID0gcGF0aC5qb2luKHJvb3RfcGF0aCwgYGxvZy9nZXRfdHJlZXNfbG9nYCk7XG5cbmxvZzRqcy5jb25maWd1cmUoe1xuICBhcHBlbmRlcnM6IFtcbiAgICB7IHR5cGU6ICdjb25zb2xlJyB9LFxuICAgIHsgdHlwZTogJ2ZpbGUnLCBmaWxlbmFtZTogbG9nX2ZpbGVuYW1lIH0sXG4gIF0sXG59KTtcblxuY29uc3QgbG9nZ2VyID0gbG9nNGpzLmdldExvZ2dlcigpO1xubG9nZ2VyLnNldExldmVsKCdJTkZPJyk7XG5cbi8qKlxuICogZ2VuZXJhdGVzIHRoZSB1cmwgZm9yIHRoZSBnZ2cgbGFkZGVyIGFwaVxuICogc2VlIGh0dHBzOi8vd3d3LnBhdGhvZmV4aWxlLmNvbS9kZXZlbG9wZXIvZG9jcy9hcGktcmVzb3VyY2UtbGFkZGVyc1xuICpcbiAqIEBwYXJhbSB7c3RyaW5nfSBsZWFndWVcbiAqIEBwYXJhbSB7bnVtYmVyfSBvZmZzZXRcbiAqIEBwYXJhbSB7bnVtYmVyfSBsaW1pdFxuICogQHJldHVybiB7c3RyaW5nfVxuICovXG5jb25zdCBsYWRkZXJBcGkgPSAobGVhZ3VlLCBvZmZzZXQsIGxpbWl0KSA9PiB7XG4gIHJldHVybiBgaHR0cDovL2FwaS5wYXRob2ZleGlsZS5jb20vbGFkZGVycy8ke2xlYWd1ZX0/b2Zmc2V0PSR7b2Zmc2V0fSZsaW1pdD0ke2xpbWl0fSZ0cmFjaz10cnVlYDtcbn07XG5cblxuLyoqXG4gKiBwYXJ0aWFsIGludmVyc2UgdG8gbGFkZGVyQXBpXG4gKiBAcGFyYW0ge251bWJlcn0gYXBpX3VybFxuICogQHJldHVybiB7c3RyaW5nfVxuICovXG5jb25zdCBsYWRkZXJBcGlUb0xlYWd1ZSA9IChhcGlfdXJsKSA9PiB7XG4gIHJldHVybiBkZWNvZGVVUklDb21wb25lbnQoXG4gICAgYXBpX3VybC5tYXRjaChcbiAgICAgIC9odHRwOlxcL1xcL2FwaS5wYXRob2ZleGlsZS5jb21cXC9sYWRkZXJzXFwvKFteP10rKVxcPy4qLylbMV0pO1xufTtcblxuLyoqXG4gKiBnZW5lcmF0ZXMgdGhlIHVybCB0byBkaXNwbGF5IGFsbCB1c2VkIHBhc3NpdmVzXG4gKlxuICogQHBhcmFtIHtzdHJpbmd9IGNoYXJhY3RlclxuICogQHBhcmFtIHtzdHJpbmd9IGFjY291bnRcbiAqIEByZXR1cm4ge3N0cmluZ31cbiAqL1xuY29uc3QgcGFzc2l2ZXNBcGkgPSAoY2hhcmFjdGVyLCBhY2NvdW50KSA9PiB7XG4gIHJldHVybiBgaHR0cHM6Ly93d3cucGF0aG9mZXhpbGUuY29tL2NoYXJhY3Rlci13aW5kb3cvZ2V0LXBhc3NpdmUtc2tpbGxzP2NoYXJhY3Rlcj0ke2NoYXJhY3Rlcn0mYWNjb3VudE5hbWU9JHthY2NvdW50fWA7XG59O1xuXG4vKipcbiAqIGNyZWF0ZXMgYW4gb2JqZWN0IHdoaWNoIG1hcHMgdGhlIGpzb24gZGF0YSBnZW5lcmF0ZWQgaW4gdGhpcyBzY3JpcHRcbiAqIHRvIGEgbm9uIG5lc3RlZCBtYXBcbiAqXG4gKiBAcGFyYW0ge09iamVjdH0gZGF0YVxuICogQHJldHVybiB7e2lkLCBsYXN0X2FjdGl2ZTogKCp8bnVtYmVyKSwgbGVhZ3VlOiAoc3RyaW5nfCopLFxuICogeHA6ICosIGNsYXNzOiAoKnxzdHJpbmcpLCBkZWFkOiAqLFxuICogbm9kZXM6ICgqfEFycmF5fG5vZGVzfG55fE1hcCksIGNoYWxsZW5nZXM6ICp9fVxuICovXG5jb25zdCBjc3ZUcmFuc2Zvcm0gPSAoZGF0YSkgPT4ge1xuICBpZiAoZGF0YS5jaGFyYWN0ZXIgPT09IHVuZGVmaW5lZCB8fCBkYXRhLmFjY291bnQgPT09IHVuZGVmaW5lZCkge1xuICAgIHJldHVybiB7fTtcbiAgfVxuXG4gIGNvbnN0IGtsYXNzID0gY2xhc3Nlcy5nZXQoZGF0YS5jaGFyYWN0ZXIuY2xhc3MpO1xuXG4gIGNvbnN0IHRyZWVfdXJsID0gVHJlZVVybC5lbmNvZGUoXG4gICAgUE9FLnRyZWVzLmdldChQT0UuY3VycmVudF90cmVlKS52ZXJzaW9uLFxuICAgIGtsYXNzLmNoYXJhY3Rlcl9jbGFzcyxcbiAgICBrbGFzcy5hc2NlbmRhbmN5LFxuICAgIGRhdGEubm9kZXMgfHwgW11cbiAgKTtcblxuICByZXR1cm4ge1xuICAgIGlkOiBkYXRhLmNoYXJhY3Rlci5pZCxcbiAgICBsYXN0X2FjdGl2ZTogZGF0YS5sYXN0X2FjdGl2ZSxcbiAgICBsZWFndWU6IGxlYWd1ZXMuZ2V0KGRhdGEubGVhZ3VlKSxcbiAgICB4cDogZGF0YS5jaGFyYWN0ZXIuZXhwZXJpZW5jZSxcbiAgICBjbGFzczoga2xhc3MuaWQsXG4gICAgZGVhZDogZGF0YS5kZWFkLFxuICAgIC8vIG9uIDEwayBwYXNzaXZlcyB3ZSBhcmUgc2F2aW5nIGFyb3VuZCAyTUIgYnkgZW5jb2RpbmcgdGhlIG5vZGVzXG4gICAgLy8gKDQuOE1CIGRvd24gdG8gMi42TUIpXG4gICAgbm9kZXM6IHRyZWVfdXJsLFxuICAgIGNoYWxsZW5nZXM6IGRhdGEuYWNjb3VudC5jaGFsbGVuZ2VzLnRvdGFsLFxuICB9O1xufTtcblxuLyoqXG4gKiBjaGVja3MgaWYgdGhlIG5ld19lbnRyeSB3YXMgYWN0aXZlIHNpbmNlIG9sZF9lbnRyeVxuICpcbiAqIEBwYXJhbSB7T2JqZWN0fSBvbGRfZW50cnlfY3N2XG4gKiBAcGFyYW0ge09iamVjdH0gbmV3X2VudHJ5X2FwaVxuICogQHJldHVybiB7Ym9vbGVhbn1cbiAqL1xuY29uc3QgbGFkZGVyQWN0aXZlID0gKG9sZF9lbnRyeV9jc3YsIG5ld19lbnRyeV9hcGkpID0+IHtcbiAgaWYgKCFvbGRfZW50cnlfY3N2KSB7XG4gICAgcmV0dXJuIHRydWU7XG4gIH1cblxuICBjb25zdCBuZXdfZW50cnlfY3N2ID0gY3N2VHJhbnNmb3JtKG5ld19lbnRyeV9hcGkpO1xuXG4gIHJldHVybiBvbGRfZW50cnlfY3N2LnhwICE9IG5ld19lbnRyeV9jc3YueHBcbiAgICB8fCBvbGRfZW50cnlfY3N2LmRlYWQgIT0gbmV3X2VudHJ5X2Nzdi5kZWFkO1xufTtcblxuY29uc3QgcnVudGltZSA9ICgoKSA9PiB7XG4gIGxvZ2dlci5pbmZvKGBzdGFydGVkIHRhc2sgd2l0aCBgXG4gICAgKyBgLS10b3RhbD0ke3RvdGFsfSBgXG4gICAgKyBgLS1saW1pdD0ke2xhZGRlcl9saW1pdH0gYFxuICAgICsgYC0tYXN5bmNfbGltaXQ9JHthc3luY19saW1pdH0gYFxuICAgICsgYC0tYXBpX3JhdGVfbGltaXQ9JHthcGlfcmF0ZV9saW1pdH1gKTtcblxuICByZXR1cm4gKCkgPT4gRGF0ZS5ub3coKSAtIHN0YXJ0O1xufSkoKTtcblxuY29uc3Qgb3V0X2ZpbGVuYW1lID0gb3V0RmlsZW5hbWUoZGF0YV9wYXRoLCBzdGFydCk7XG5cbi8vIGdldCB0aGUgbGFzdCBvdXRcbmNvbnN0IGxhdGVzdCA9IHBhdGguam9pbihkYXRhX3BhdGgsXG4gIGZzLnJlYWRkaXJTeW5jKGRhdGFfcGF0aCkucmVkdWNlKChsYXRlc3QsIGZpbGUpID0+IHtcbiAgICBpZiAoY3RpbWVPdXRGaWxlKGxhdGVzdCkgPCBjdGltZU91dEZpbGUoZmlsZSkpIHtcbiAgICAgIHJldHVybiBmaWxlO1xuICAgIH1cbiAgICByZXR1cm4gbGF0ZXN0O1xuICB9LCBvdXRGaWxlbmFtZShkYXRhX3BhdGgsIE51bWJlci5ORUdBVElWRV9JTkZJTklUWSkpKTtcblxubG9nZ2VyLmluZm8oYGZldGNoaW5nIHRvdGFsIG9mICR7dG90YWx9IGluIGNodW5rcyBvZiAke2FzeW5jX2xpbWl0fWApO1xuXG4vLyBhcHBhcmVudGx5IHRoZXJlIGNhbiBleGlzdCBuYW1lIGNvbGxpc2lvbnMgd2l0aCBhY2NvdW50c1xuLy8gc28gdGhlIGdldC1wYXNzaXZlLXNraWxscyBwcm9iIG9ubHkgcmV0dXJucyB0aGUgY3VycmVudCBjaGFyYWN0ZXJcbi8vIHdoaWxlIHRoZSBsYWRkZXJzIGFwaSBtYXkgcmV0dXJuIGRlbGV0ZWQgY2hhcnNcbi8vIHRoaXMgbWVhbnMgdGhhdCB3ZSB3aWxsIGFzc2lnbiBuZXcgcGFzc2l2ZXMgdG8gZGVsZXRlZCBjaGFyc1xuLy8gaWYgYW5vdGhlciBvbmUgd2FzIGNyZWF0ZWRcbi8vIGNoYXJhY3RlciBpZCA9PiBsYWRkZXIgZW50cnlcbmxldCBlbnRyaWVzID0gbmV3IE1hcCgpO1xuXG4vLyBwYXNzaXZlc191cmwgPT4gY2hhcmFjdGVyIGlkXG5sZXQgcGFzc2l2ZXNfdXJsc19jaGFyYWN0ZXJzID0gbmV3IE1hcCgpO1xuXG4vLyB3L28gYXJyYXkuZmlsbCBpdCByZXN1bHRzIGluIGVtcHR5IHZhbHVlc1xuLy8gY3JlYXRlIHRoZSBsYWRkZXIgdXJscyBmb3IgZWFjaCBsZWFndWUgYW5kIGZsYXR0ZW4gaXQgaW50byBvbmUgYXJyYXlcbmNvbnN0IGxhZGRlcl91cmxzXG4gID0gW10uY29uY2F0KC4uLkFycmF5LmZyb20obGVhZ3Vlcy5rZXlzKCkpLm1hcCgobGVhZ3VlKSA9PlxuICAgIG5ldyBBcnJheSh0b3RhbCAvIGxhZGRlcl9saW1pdCkuZmlsbCgwKVxuICAgICAgLm1hcCgoXywgb2Zmc2V0KSA9PlxuICAgICAgICBsYWRkZXJBcGkobGVhZ3VlLCBvZmZzZXQgKiBsYWRkZXJfbGltaXQsIGxhZGRlcl9saW1pdCkpXG4gICkpO1xuXG5sb2dnZXIuaW5mbyhcbiAgYGZldGNoaW5nIHRvdGFsIG9mICR7bGFkZGVyX3VybHMubGVuZ3RofWBcbiAgKyBgIGxhZGRlcnMgb3ZlciAke2xlYWd1ZXMuc2l6ZX0gbGVhZ3Vlc2Bcbik7XG5cbmZzLmV4aXN0cyhsYXRlc3QsIChleGlzdHMpID0+IHtcbiAgbGV0IG9sZF90cmVlcyA9IG5ldyBNYXAoKTtcblxuICBpZiAoZXhpc3RzKSB7XG4gICAgZnMuY3JlYXRlUmVhZFN0cmVhbShsYXRlc3QpLnBpcGUoY3N2LnBhcnNlKHtcbiAgICAgIGRlbGltaXRlcjogJywnLFxuICAgICAgY29sdW1uczogdHJ1ZSxcbiAgICB9LCAoZSwgZGF0YSkgPT4ge1xuICAgICAgaWYgKCFlKSB7XG4gICAgICAgIG9sZF90cmVlcyA9IG5ldyBNYXAoZGF0YS5tYXAoKGVudHJ5KSA9PiB7XG4gICAgICAgICAgcmV0dXJuIFtlbnRyeS5pZCwgZW50cnldO1xuICAgICAgICB9KSk7XG4gICAgICB9XG5cbiAgICAgIG9sZFRyZWVzQ29tcGxldGUob2xkX3RyZWVzKTtcbiAgICB9KSk7XG4gIH0gZWxzZSB7XG4gICAgb2xkVHJlZXNDb21wbGV0ZShvbGRfdHJlZXMpO1xuICB9XG59KTtcblxuY29uc3QgbGFkZGVyQ29tcGxldGUgPSAocmVzdWx0cywgb2xkX3RyZWVzKSA9PiB7XG4gIGxvZ2dlci5pbmZvKGBmaW5pc2hlZCBsYWRkZXIgZmV0Y2ggYWZ0ZXIgJHtydW50aW1lKCl9bXNgKTtcblxuICAvLyBmbGF0dGVuZWQgcGFzc2l2ZSB1cmxzXG4gIGNvbnN0IHBhc3NpdmVzX3VybHMgPSBbXS5jb25jYXQoLi4ucmVzdWx0cy5tYXAoKGwpID0+IHtcbiAgICAvLyBwYXJzZSB0aGUgYm9keSBhbmQgbWFwIG9uIGV2ZXJ5IGVudHJ5IGl0cyBwYXNzaXZlcyB1cmxcbiAgICBjb25zdCBib2R5ID0gSlNPTi5wYXJzZShsLmJvZHkpO1xuXG4gICAgY29uc3QgbGVhZ3VlID0gbGFkZGVyQXBpVG9MZWFndWUobC5yZXF1ZXN0LmhyZWYpO1xuXG4gICAgaWYgKCFib2R5LmVudHJpZXMpIHtcbiAgICAgIGxvZ2dlci53YXJuKCdubyBlbnRyaWVzJywgbC5yZXF1ZXN0LmhyZWYsIGJvZHkpO1xuICAgICAgcmV0dXJuIGZhbHNlO1xuICAgIH1cblxuICAgIHJldHVybiBib2R5LmVudHJpZXMubWFwKChlKSA9PiB7XG4gICAgICBjb25zdCBwYXNzaXZlX3VybFxuICAgICAgICA9IHBhc3NpdmVzQXBpKGVbJ2NoYXJhY3RlciddLm5hbWUsIGVbJ2FjY291bnQnXS5uYW1lKTtcbiAgICAgIGNvbnN0IGlkID0gZVsnY2hhcmFjdGVyJ10uaWQ7XG4gICAgICBjb25zdCBvbGRfZW50cnkgPSBvbGRfdHJlZXMuZ2V0KGlkKTtcblxuICAgICAgLy8gc2F2ZSB0aGUgZW50cnlcbiAgICAgIGVudHJpZXMuc2V0KGlkLCBPYmplY3QuYXNzaWduKGUsIHtcbiAgICAgICAgbGVhZ3VlOiBsZWFndWUsXG4gICAgICAgIGxhc3RfYWN0aXZlOlxuICAgICAgICBsYWRkZXJBY3RpdmUob2xkX2VudHJ5LCBlKSA/IHN0YXJ0IDogb2xkX2VudHJ5Lmxhc3RfYWN0aXZlLFxuICAgICAgfSkpO1xuICAgICAgLy8gYW5kIGEgcmV2ZXJzZSBtYXBwaW5nIHNvIHdlIGNhbiBnZXQgdGhlIGVudHJ5IHZpYSB1cmxcbiAgICAgIHBhc3NpdmVzX3VybHNfY2hhcmFjdGVycy5zZXQocGFzc2l2ZV91cmwsIGVbJ2NoYXJhY3RlciddLmlkKTtcblxuICAgICAgcmV0dXJuIHBhc3NpdmVfdXJsO1xuICAgIH0pO1xuICB9KSkuZmlsdGVyKCh1KSA9PiB1KTtcblxuICAvLyBsb2dnZXIuaW5mbyhwYXNzaXZlc191cmxzKVxuXG4gIGxvZ2dlci5pbmZvKGBmZXRjaGluZyAke3Bhc3NpdmVzX3VybHMubGVuZ3RofSBwYXNzaXZlc2ApO1xuXG4gIC8vIHByb2dyZXNzIGJhclxuICBsZXQgcHJvZ3Jlc3MgPSAwOyAvLyBudW1iZXIgb2YgdXJscyBmZXRjaGVkXG4gIGNvbnN0IGluX3N0ZXBzID0gcGFzc2l2ZXNfdXJscy5sZW5ndGggLyAxMCB8IDA7IC8vIGV2ZXJ5IH4xMCVcblxuICBub2RlQXN5bmMubWFwTGltaXQocGFzc2l2ZXNfdXJscywgYXN5bmNfbGltaXQsICh1cmwsIGNhbGxiYWNrKSA9PiB7XG4gICAgLy8ganVzdCBhIHdyYXBwZXIgdGhhdCB1cGRhdGVzIHRoZSBwcm9ncmVzc1xuICAgIHJlcXVlc3QodXJsLCBudWxsLCAoZXJyLCB0cmFuc2Zvcm1lZCkgPT4ge1xuICAgICAgcHJvZ3Jlc3MrKztcblxuICAgICAgaWYgKHByb2dyZXNzICUgaW5fc3RlcHMgPT0gMCkge1xuICAgICAgICBsb2dnZXIuaW5mbyhcbiAgICAgICAgICBgZmluaXNoZWRgXG4gICAgICAgICAgKyBgJHsoMTAwICogcHJvZ3Jlc3MgLyBwYXNzaXZlc191cmxzLmxlbmd0aCkudG9GaXhlZCgyKX0lYCk7XG4gICAgICB9XG5cbiAgICAgIGlmIChlcnIpIHtcbiAgICAgICAgbG9nZ2VyLndhcm4oZXJyKTtcbiAgICAgIH1cbiAgICAgIGNhbGxiYWNrKG51bGwsIHRyYW5zZm9ybWVkKTtcbiAgICB9KS5vbignZXJyb3InLCAoZSkgPT4gbG9nZ2VyLndhcm4oZSkpO1xuICB9LCAoZXJyLCByZXN1bHRzKSA9PiB7XG4gICAgaWYgKGVycikge1xuICAgICAgbG9nZ2VyLndhcm4oZXJyKTtcbiAgICB9IGVsc2Uge1xuICAgICAgcGFzc2l2ZXNDb21wbGV0ZShyZXN1bHRzKTtcbiAgICB9XG4gIH0pO1xufTtcblxuY29uc3QgcGFzc2l2ZXNDb21wbGV0ZSA9IChyZXN1bHRzKSA9PiB7XG4gIGxvZ2dlci5pbmZvKFxuICAgIGBmaW5pc2hlZCBwYXNzaXZlIGZldGNoIGFmdGVyICR7cnVudGltZSgpfW1zYFxuICAgICsgYCgke3J1bnRpbWUoKSAvIHJlc3VsdHMubGVuZ3RofW1zL3Bhc3NpdmUpYCk7XG5cbiAgbGV0IHRyZWVzID0gW107XG5cbiAgZm9yIChsZXQgcmVzdWx0IG9mIHJlc3VsdHMpIHtcbiAgICBpZiAoIXJlc3VsdCkgY29udGludWU7XG4gICAgY29uc3QgcGFzc2l2ZV91cmwgPSByZXN1bHQucmVxdWVzdC5ocmVmO1xuICAgIGxldCBwYXNzaXZlcyA9IHVuZGVmaW5lZDtcblxuICAgIHRyeSB7XG4gICAgICBwYXNzaXZlcyA9IEpTT04ucGFyc2UocmVzdWx0LmJvZHkpO1xuICAgIH0gY2F0Y2ggKGUpIHtcbiAgICAgIGxvZ2dlci53YXJuKGBiYWQgcmVxdWVzdCBmb3IgJHtwYXNzaXZlX3VybH1gKTtcbiAgICAgIGNvbnRpbnVlO1xuICAgIH1cblxuXG4gICAgaWYgKHBhc3NpdmVzKSB7XG4gICAgICBjb25zdCBub2RlcyA9IHBhc3NpdmVzWydoYXNoZXMnXTtcblxuICAgICAgY29uc3QgZW50cnlcbiAgICAgICAgPSBlbnRyaWVzLmdldChwYXNzaXZlc191cmxzX2NoYXJhY3RlcnMuZ2V0KHBhc3NpdmVfdXJsKSk7XG5cbiAgICAgIC8vIGxvZ2dlci5kZWJ1ZyhwYXNzaXZlX3VybCwgZW50cnkpXG5cbiAgICAgIHRyZWVzLnB1c2goT2JqZWN0LmFzc2lnbih7XG4gICAgICAgIG5vZGVzOiBub2RlcyxcbiAgICAgIH0sIGVudHJ5KSk7XG4gICAgfSBlbHNlIHtcbiAgICAgIC8vIEZJWE1FIGZpcnN0IGJyZWFjaCByZXN1bHQgcmV0dXJucyBmYWxzZSBidXQgYnJvd3NlciBpcyBva1xuICAgICAgbG9nZ2VyLmRlYnVnKHBhc3NpdmVfdXJsKTtcbiAgICB9XG4gIH1cblxuICB0YXNrQ29tcGxldGUodHJlZXMpO1xufTtcblxuY29uc3QgdGFza0NvbXBsZXRlID0gKHRyZWVzKSA9PiB7XG4gIGxvZ2dlci5pbmZvKGBmaW5pc2hlZCB0YXNrIGluICR7KHJ1bnRpbWUoKSAvIDEwMDApLnRvRml4ZWQoMil9c2ApO1xuXG4gIGNzdi50cmFuc2Zvcm0odHJlZXMsIGNzdlRyYW5zZm9ybSkucGlwZShjc3Yuc3RyaW5naWZ5KHtcbiAgICBoZWFkZXI6IHRydWUsXG4gIH0pKS5waXBlKGZzLmNyZWF0ZVdyaXRlU3RyZWFtKG91dF9maWxlbmFtZSkpO1xufTtcblxuY29uc3Qgb2xkVHJlZXNDb21wbGV0ZSA9IChvbGRfdHJlZXMpID0+IHtcbiAgLy8gZ2dnIGhhcyBhIHJhdGUgbGFkZGVyX2xpbWl0IHNvIGZ1Y2sgbWUgcmlnaHRcbiAgbm9kZUFzeW5jLm1hcExpbWl0KGxhZGRlcl91cmxzLCBhcGlfcmF0ZV9saW1pdCwgcmVxdWVzdCwgKGUsIHJlc3VsdHMpID0+IHtcbiAgICBpZiAoZSkge1xuICAgICAgbG9nZ2VyLndhcm4oZSk7XG4gICAgfSBlbHNlIHtcbiAgICAgIGxhZGRlckNvbXBsZXRlKHJlc3VsdHMsIG9sZF90cmVlcyk7XG4gICAgfVxuICB9KTtcbn07XG5cblxuXG4vLyBXRUJQQUNLIEZPT1RFUiAvL1xuLy8gLi9zcmMvc2NyaXB0cy9nZXRfdHJlZXMuanMiXSwic291cmNlUm9vdCI6IiJ9