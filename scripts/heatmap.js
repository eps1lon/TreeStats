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
/******/ 	return __webpack_require__(__webpack_require__.s = 103);
/******/ })
/************************************************************************/
/******/ ([
/* 0 */
/***/ (function(module, exports) {

module.exports = require("immutable");

/***/ }),
/* 1 */
/***/ (function(module, exports) {

module.exports = require("path");

/***/ }),
/* 2 */
/***/ (function(module, exports) {

module.exports = require("babel-runtime/core-js/get-iterator");

/***/ }),
/* 3 */,
/* 4 */
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
/* 5 */
/***/ (function(module, exports) {

module.exports = require("babel-runtime/core-js/promise");

/***/ }),
/* 6 */
/***/ (function(module, exports) {

module.exports = require("babel-runtime/core-js/json/stringify");

/***/ }),
/* 7 */
/***/ (function(module, exports) {

module.exports = require("babel-runtime/helpers/slicedToArray");

/***/ }),
/* 8 */
/***/ (function(module, exports) {

module.exports = require("babel-runtime/helpers/asyncToGenerator");

/***/ }),
/* 9 */
/***/ (function(module, exports) {

module.exports = require("babel-runtime/regenerator");

/***/ }),
/* 10 */
/***/ (function(module, exports) {

module.exports = require("babel-runtime/helpers/classCallCheck");

/***/ }),
/* 11 */
/***/ (function(module, exports) {

module.exports = require("babel-runtime/helpers/createClass");

/***/ }),
/* 12 */
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
/* 13 */
/***/ (function(module, exports) {

module.exports = require("babel-runtime/core-js/map");

/***/ }),
/* 14 */
/***/ (function(module, exports) {

module.exports = require("babel-runtime/helpers/toConsumableArray");

/***/ }),
/* 15 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.SELECT_ROWS = exports.UPDATE_ROWS = exports.SELECT_ANY = undefined;

var _promise = __webpack_require__(5);

var _promise2 = _interopRequireDefault(_promise);

exports.updateRows = updateRows;

var _forms = __webpack_require__(30);

var _data = __webpack_require__(29);

var _data2 = __webpack_require__(24);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var SELECT_ANY = exports.SELECT_ANY = 'ROWS/SELECT_ANY';

// action types
var UPDATE_ROWS = exports.UPDATE_ROWS = 'ROWS/UPDATE';
var SELECT_ROWS = exports.SELECT_ROWS = 'ROWS/SELECT';

/**
 * promises exec of a data cursor with the data filter applied
 * @param {Nedb} db
 * @param {Object} data_filter
 * @param {number} db_ctime the time the table was created
 * @return {Promise} the {Object[]} rows
 */
function selectRows(db, data_filter) {
  var db_ctime = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : 0;

  var league = data_filter.get('league');
  var klass = data_filter.get('klass');

  var filter = {
    // db uses old last_active values
    // therefor db_ctime >= last_active
    last_active: {
      $gte: db_ctime - (0, _forms.activeForSeconds)(data_filter) * 1000
    }
  };

  if (league != SELECT_ANY) {
    filter.league = +league;
  }

  if (klass != SELECT_ANY) {
    filter.class = +klass;
  }

  return new _promise2.default(function (fulfill) {
    db.find(filter).sort({ xp: -1 }).limit(+data_filter.limit).skip(+data_filter.offset).exec(function (e, rows) {
      if (e) reject(e);else fulfill(rows);
    });
  });
};

/**
 * updates the rows from the current store and data_filter state
 * @return {function} redux-thunk
 */
function updateRows() {
  return function (dispatch, getState) {
    var state = getState();
    var db = state.get('db');
    var data_filter = state.get('data_filter');
    var db_ctime = (0, _data.ctime)((0, _data2.activeSource)(state.get('data')));

    dispatch({
      type: SELECT_ROWS
    });

    return selectRows(db.get('db'), data_filter, db_ctime).then(function (rows) {
      dispatch({
        type: UPDATE_ROWS,
        payload: { rows: rows }
      });
    });
  };
};

/***/ }),
/* 16 */
/***/ (function(module, exports) {

module.exports = require("rxjs/add/operator/map");

/***/ }),
/* 17 */
/***/ (function(module, exports) {

module.exports = require("babel-runtime/core-js/object/assign");

/***/ }),
/* 18 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.SET_ACTIVE = exports.SET_SOURCES = exports.FETCH_SOURCES_FROM_JSON = undefined;

var _map = __webpack_require__(13);

var _map2 = _interopRequireDefault(_map);

exports.fetchSourcesFromJson = fetchSourcesFromJson;
exports.setSources = setSources;
exports.setSourcesArray = setSourcesArray;
exports.setActive = setActive;
exports.getSourceByKey = getSourceByKey;

var _db = __webpack_require__(19);

var _url = __webpack_require__(23);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var FETCH_SOURCES_FROM_JSON = exports.FETCH_SOURCES_FROM_JSON = 'SOURCES/FROM_JSON';
var SET_SOURCES = exports.SET_SOURCES = 'SOURCES/SET';
var SET_ACTIVE = exports.SET_ACTIVE = 'SOURCES/ACTIVATE';

/**
 * thunk to generate sources from json file
 *
 * @param {string} filename
 * @return {function} thunk
 */
function fetchSourcesFromJson(filename) {
  return {
    type: FETCH_SOURCES_FROM_JSON,
    payload: (0, _url.publicPath)(filename)
  };
};

/**
 * action-creator to set sources
 *
 * @param {Map} sources
 * @return {Object} action
 */
function setSources(sources) {
  return {
    type: SET_SOURCES,
    payload: { sources: sources }
  };
}

/**
 * setSources with a map from array (i => value)
 * @param {Array} sources
 * @return {Object} action
 */
function setSourcesArray(sources) {
  return setSources(new _map2.default(sources.map(function (source, i) {
    return [i + '', source];
  })));
};

/**
 * sets the active data source and triggers the insert of the rows
 * of the source
 * @param {string} active key in data.sources map
 * @return {thunk}
 */
function setActive(active) {
  return function (dispatch, getState) {
    dispatch({
      type: SET_ACTIVE,
      payload: { active: active }
    });

    var source = getSourceByKey(getState(), active);

    dispatch((0, _db.insertRows)(source.rows));
  };
}

/**
 * selects the source by the given key
 * @param {Map} state redux state
 * @param {Any} key
 * @return {AbstractDataSource}
 */
function getSourceByKey(state, key) {
  return state.getIn(['data', 'sources', key]);
};

/***/ }),
/* 19 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.SET_DB = exports.INSERT_ROWS = exports.AWAITING_ROWS = undefined;

var _promise = __webpack_require__(5);

var _promise2 = _interopRequireDefault(_promise);

exports.insertRows = insertRows;

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var Nedb = __webpack_require__(41);

var AWAITING_ROWS = exports.AWAITING_ROWS = 'DB/AWAITING_ROWS'; // step 1
var INSERT_ROWS = exports.INSERT_ROWS = 'DB/INSERT'; // step 2
var SET_DB = exports.SET_DB = 'DB/SET'; // step 3

/**
 * creates a new db and inserts the rows
 * @param {Promise} rows json representing a table
 * @return {Promise} the {Nedb}
 */
function insertRows(rows) {
  return function (dispatch) {
    dispatch({ type: AWAITING_ROWS });

    return rows.then(function (rows) {
      return new _promise2.default(function (fulfill, reject) {
        var db = new Nedb();

        dispatch({
          type: INSERT_ROWS
        });

        db.insert(rows, function (e) {
          if (e) reject(e);else fulfill(db);
        });
      });
    }).then(function (db) {
      return dispatch({
        type: SET_DB,
        payload: { db: db }
      });
    });
  };
}

/***/ }),
/* 20 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.calculateHeatmapFromState = exports.HEATMAP_RELEVANT_CONF = exports.DATA_URL_CHANGE = exports.EXTREMA_CHANGE = exports.SET = exports.CALCULATE = undefined;
exports.calculateHeatmap = calculateHeatmap;
exports.extremaChange = extremaChange;
exports.dataURLChange = dataURLChange;

var _PassiveTreeConf = __webpack_require__(83);

var _PassiveTreeConf2 = _interopRequireDefault(_PassiveTreeConf);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var HeatmapWorker = __webpack_require__(86);
var worker = new HeatmapWorker();

var CALCULATE = exports.CALCULATE = 'HEATMAP/CALCULATE_DATA';
var SET = exports.SET = 'HEATMAP/SET_DATA';
var EXTREMA_CHANGE = exports.EXTREMA_CHANGE = 'HEATMAP/EXTREMA_CHANGE';
var DATA_URL_CHANGE = exports.DATA_URL_CHANGE = 'HEATMAP/DATA_URL_CHANGE';

// rrf form models that are relevant to the heatmap calculation
// in calculateHeatmap()
var HEATMAP_RELEVANT_CONF = exports.HEATMAP_RELEVANT_CONF = ['passive_tree_conf.group_orbits', 'passive_tree_conf.start', 'passive_tree_conf.scionPathOf', 'passive_tree_conf.ascendancy', 'passive_tree_conf.mastery'];

/**
 * @param {Immutable.Map} state redux state tree
 * @return {Object} @see {calculateHeatmap}
 */
var calculateHeatmapFromState = exports.calculateHeatmapFromState = function calculateHeatmapFromState(state) {
  var rows = state.getIn(['rows', 'rows']);
  var passive_tree_conf = state.get('passive_tree_conf');
  var passive_tree = state.get('passive_tree');

  var conf = new _PassiveTreeConf2.default(passive_tree_conf.toJS());

  return calculateHeatmap(rows, conf, passive_tree);
};

/**
 * action creator for the calculation of the heatmap
 * @param {List} rows
 * @param {PassiveTreeConf} conf
 * @param {PassiveTree} passive_tree
 * @return {Object} action
 */
function calculateHeatmap(rows, conf, passive_tree) {
  return function (dispatch) {
    // signal start of calculation
    dispatch({ type: CALCULATE });

    // stop old calculation
    worker.terminate();
    worker = new HeatmapWorker();

    // give msg handle the dispatch function
    worker.onmessage = onWorkerMessage(dispatch);

    // start calculation
    // web workers can only receive strings to we need to
    // give the message serializeable types
    worker.postMessage({
      rows: rows.toJS(),
      conf: conf.toSerializeable(),
      passive_tree: passive_tree.toSerializeable()
    });
  };
};

/**
 * @param {Function} dispatch
 * @return {Function} event listener for worker.onmessage
 */
function onWorkerMessage(dispatch) {
  return function (message) {
    dispatch({
      type: SET,
      payload: message.data
    });
  };
}

/**
 * action creator for extrema change
 *
 * @param {Object} data see
 * https://www.patrick-wied.at/static/heatmapjs/docs.html#h337-create #onExtremaChange
 * @return {Object}
 */
function extremaChange(data) {
  return {
    type: EXTREMA_CHANGE,
    payload: {
      legend: data
    }
  };
};

/**
 *
 * @param {string} data_url
 * @return {Object} action
 */
function dataURLChange(data_url) {
  return {
    type: DATA_URL_CHANGE,
    payload: { data_url: data_url }
  };
};

/***/ }),
/* 21 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.fetchTree = fetchTree;
exports.newTree = newTree;
var FETCH_TREE = exports.FETCH_TREE = 'PASSIVE_TREE/FETCH';
var NEW_TREE = exports.NEW_TREE = 'PASSIVE_TREE/NEW';

/**
 * @param {string} id
 * @return {Object} action
 */
function fetchTree(id) {
  return {
    type: FETCH_TREE,
    payload: { id: id }
  };
};

/**
 * @param {Object} data valid tree json see poe wiki
 * @param {any} id
 * @return {Object} action
 */
function newTree(data, id) {
  return {
    type: NEW_TREE,
    payload: { data: data.passiveSkillTreeData, id: id }
  };
};

/***/ }),
/* 22 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.zoomed = zoomed;
exports.resetZoom = resetZoom;
exports.commandExecuted = commandExecuted;
var ZOOMED = exports.ZOOMED = 'ZOOM/ZOOMED';
var RESET_ZOOM = exports.RESET_ZOOM = 'ZOOM/RESET';
var COMMAND_EXECUTED = exports.COMMAND_EXECUTED = 'ZOOM/COMMAND_EXECUTED';

/**
 * action creator if the user zoomed
 * @param {d3-transform} transform
 * @return {Object} action
 */
function zoomed(transform) {
  return {
    type: ZOOMED,
    payload: { transform: transform }
  };
};

/**
 * action creator to reset the zoom
 * @return {Object} action
 */
function resetZoom() {
  return {
    type: RESET_ZOOM
  };
};

/**
 * action creator when a command was executed on zhe zoomable
 * @return {Object} action
 */
function commandExecuted() {
  return {
    type: COMMAND_EXECUTED
  };
};

/***/ }),
/* 23 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.publicPath = undefined;

var _path = __webpack_require__(1);

// TODO publicPath from webpack config or vice versa
var publicPath = exports.publicPath = function publicPath(path) {
  return (0, _path.join)('/', path);
};

/***/ }),
/* 24 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.defaultSource = undefined;
exports.activeSource = activeSource;
exports.dataSourceProps = dataSourceProps;
exports.dataSourceHuman = dataSourceHuman;

var _path = __webpack_require__(1);

var _path2 = _interopRequireDefault(_path);

var _data = __webpack_require__(4);

var _data2 = _interopRequireDefault(_data);

var _CsvDataSource = __webpack_require__(33);

var _CsvDataSource2 = _interopRequireDefault(_CsvDataSource);

var _treesToCsvFile = __webpack_require__(12);

var _routing = __webpack_require__(31);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var defaultSource = exports.defaultSource = function defaultSource(state) {
  return (0, _routing.getLocation)(state).getIn(['query', 'source']) || state.getIn(['data', 'sources']).keySeq().first();
};

/**
 * returns currently active source
 * @param {Map} state data state
 * @return {DataSource}
 */
function activeSource(state) {
  return state.get('sources').get(state.get('active'));
}

/**
 * @param {DataSource?} source
 * @return {Object | undefined}
 */
function dataSourceProps(source) {
  if (source instanceof _CsvDataSource2.default) {
    var filename = _path2.default.basename(source.filename);
    var file_props = (0, _treesToCsvFile.fileProps)(filename);

    if (file_props !== undefined) {
      var date = new Date(file_props.ctime);
      var tree = _data2.default.trees.get(file_props.tree_ident);

      if (date && tree) {
        return { date: date, tree: tree };
      }
    }
  }

  return undefined;
};

/**
 *
 * @param {DataSource?} source
 * @return {String}
 */
function dataSourceHuman(source) {
  var props = dataSourceProps(source);

  if (props !== undefined) {
    return [props.date.toLocaleDateString(), props.tree.name].join(' - ');
  } else if (source instanceof _CsvDataSource2.default) {
    var filename = _path2.default.basename(source.filename);

    return filename;
  } else {
    return source.toString();
  }
};

/***/ }),
/* 25 */
/***/ (function(module, exports) {

module.exports = require("react-router-redux");

/***/ }),
/* 26 */
/***/ (function(module, exports) {

module.exports = require("redux");

/***/ }),
/* 27 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.SHOW_TOOLTIP = undefined;
exports.showTooltip = showTooltip;

var _immutable = __webpack_require__(0);

var _immutable2 = _interopRequireDefault(_immutable);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var SHOW_TOOLTIP = exports.SHOW_TOOLTIP = 'TOOLTIP/SHOW';

/**
 * creates relevant tt info
 * @param {number} x pos on heatmap
 * @param {number} y
 * @param {number} node_id the hovered node_id
 * @param {Event} event dom event
 * @return {Object} an action
 */
function showTooltip(x, y, node_id, event) {
  return {
    type: SHOW_TOOLTIP,
    payload: { x: x, y: y, node_id: node_id, event: _immutable2.default.fromJS(event) }
  };
};

/***/ }),
/* 28 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
/**
 * various helper for react-redux-form
 */

/**
 * @param {Object} action redux action
 * @param {string} model name of the form
 * @return {boolean} true if the given action was fired by a rrf change action
 *                   on the given form model
 */
var formModelChanged = exports.formModelChanged = function formModelChanged(action, model) {
  return action.type === 'rrf/change' && action.model.startsWith(model + '.');
};

/***/ }),
/* 29 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.ctime = ctime;

var _immutable = __webpack_require__(0);

var _data = __webpack_require__(18);

var _treesToCsvFile = __webpack_require__(12);

/**
 * @param {AbstractDataSource} data_source
 * @return {number} -inf on undefined source
 */
function ctime(data_source) {
  if (data_source) {
    return (0, _treesToCsvFile.ctimeOutFile)(data_source.filename);
  } else {
    return Number.NEGATIVE_INFINITY;
  }
} /* eslint new-cap: off */


var initial = (0, _immutable.Map)({
  active: undefined,
  sources: (0, _immutable.OrderedMap)(),
  loading: false
});

var data = function data() {
  var state = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : initial;
  var action = arguments[1];

  switch (action.type) {
    case _data.FETCH_SOURCES_FROM_JSON:
      return state.withMutations(function (state) {
        state.set('active', undefined);
        state.set('sources', (0, _immutable.OrderedMap)());
        state.set('loading', true);
      });
    case _data.SET_SOURCES:
      return state.withMutations(function (state) {
        state.set('active', undefined);
        state.set('sources', (0, _immutable.OrderedMap)(action.payload.sources));
        state.set('loading', false);
      });
    case _data.SET_ACTIVE:
      return state.set('active', action.payload.active);
    default:
      return state;
  }
};

exports.default = data;

/***/ }),
/* 30 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.initial_tree_conf = exports.initial_heatmap_conf = exports.initial_filter = undefined;

var _typeof2 = __webpack_require__(39);

var _typeof3 = _interopRequireDefault(_typeof2);

exports.activeForSeconds = activeForSeconds;
exports.slugify = slugify;

var _immutable = __webpack_require__(0);

var _rows = __webpack_require__(15);

var _map = __webpack_require__(63);

var _routes = __webpack_require__(64);

var _poe = __webpack_require__(76);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var default_initial_filter = (0, _immutable.Map)({
  league: _rows.SELECT_ANY,
  klass: _rows.SELECT_ANY,
  last_active: 7,
  last_active_base: 60 * 60 * 24, // days as default
  limit: 15000,
  offset: 0
});

var createInitialFilter = function createInitialFilter() {
  // this prob super bad practice but i dont of any way
  // to inject react-router params into react-redux-form
  return default_initial_filter.withMutations(function (filter) {
    if ((typeof window === 'undefined' ? 'undefined' : (0, _typeof3.default)(window)) === 'object' && window.location) {
      var pathname = window.location.pathname;
      var params = (0, _routes.pathnameToAppParams)(pathname);

      // controlled merge instead of spread
      filter.set('league', (0, _poe.leagueFromName)(params.league, filter.get('league')));
    }
  });
};

var initial_filter = exports.initial_filter = createInitialFilter();

/**
 * @param {Map} form
 * @return {number} the value in seconds
 */
function activeForSeconds(form) {
  return form.get('last_active') * form.get('last_active_base');
}

// https://www.patrick-wied.at/static/heatmapjs/docs.html#h337-create
var initial_heatmap_conf = exports.initial_heatmap_conf = (0, _immutable.Map)({
  blur: 85,
  min_opacity: 5,
  max_opacity: 55,
  radius: 40
});

var initial_tree_conf = exports.initial_tree_conf = (0, _immutable.Map)({
  group_orbits: false,
  start: false,
  scionPathOf: false,
  ascendancy: true,
  mastery: false,
  node_scale: 1.7
});

/**
 * object for react-redux-form/immutable createForms
 * it returns an empty object if we use immutable types
 * @type {Object}
 */
var forms = {
  data_filter: initial_filter,
  heatmap_conf: initial_heatmap_conf,
  passive_tree_conf: initial_tree_conf
};

/**
 * @param {Map} form a form defined in this file
 * @return {string} slugified string of the form
 */
function slugify(form) {
  return (0, _map.slugify)(form.map(function (value) {
    return value === _rows.SELECT_ANY ? 'any' : value;
  }));
}

exports.default = forms;

/***/ }),
/* 31 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
var getLocation = exports.getLocation = function getLocation(state) {
  return state.getIn(['routing', 'locationBeforeTransitions']);
};

/***/ }),
/* 32 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.verbose_actions = undefined;

var _reduxLogger = __webpack_require__(97);

var _reduxLogger2 = _interopRequireDefault(_reduxLogger);

var _zoom = __webpack_require__(22);

var _tooltip = __webpack_require__(27);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var verbose_actions = exports.verbose_actions = [_zoom.ZOOMED, _tooltip.SHOW_TOOLTIP];

var logger = (0, _reduxLogger2.default)({
  // collapse all
  collapsed: true,
  // TOOLTIPs fire on mousemove
  predicate: function predicate(getState, action) {
    return !verbose_actions.includes(action.type);
  }
});

exports.default = logger;

/***/ }),
/* 33 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _promise = __webpack_require__(5);

var _promise2 = _interopRequireDefault(_promise);

var _getPrototypeOf = __webpack_require__(88);

var _getPrototypeOf2 = _interopRequireDefault(_getPrototypeOf);

var _classCallCheck2 = __webpack_require__(10);

var _classCallCheck3 = _interopRequireDefault(_classCallCheck2);

var _createClass2 = __webpack_require__(11);

var _createClass3 = _interopRequireDefault(_createClass2);

var _possibleConstructorReturn2 = __webpack_require__(91);

var _possibleConstructorReturn3 = _interopRequireDefault(_possibleConstructorReturn2);

var _inherits2 = __webpack_require__(90);

var _inherits3 = _interopRequireDefault(_inherits2);

var _csvParse = __webpack_require__(93);

var _csvParse2 = _interopRequireDefault(_csvParse);

var _AbstractDataSource2 = __webpack_require__(81);

var _AbstractDataSource3 = _interopRequireDefault(_AbstractDataSource2);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

/**
 * an AbstractDataSource implementation for csv
 */
var CsvDataSource = function (_AbstractDataSource) {
  (0, _inherits3.default)(CsvDataSource, _AbstractDataSource);

  /**
   * @param {string} filename
   */
  function CsvDataSource(filename) {
    (0, _classCallCheck3.default)(this, CsvDataSource);

    var _this = (0, _possibleConstructorReturn3.default)(this, (CsvDataSource.__proto__ || (0, _getPrototypeOf2.default)(CsvDataSource)).call(this));

    _this._body = null;
    _this._rows = null;


    _this.filename = filename;
    return _this;
  }

  /**
   * fetches the text body for csv parse
   * @param {string} filename
   * @return {Promise}
   */


  (0, _createClass3.default)(CsvDataSource, [{
    key: 'body',


    /**
     * gets body for the data source
     * and inits fetching if neccessary
     * @return  {Promise}
     */
    value: function body() {
      if (this._body === null) {
        this._body = CsvDataSource.fetch(this.filename);
      }

      return this._body;
    }

    /**
     * gets rows for the data source
     * and inits the parsing (and fetching) if neccessary
     * @return  {Promise}
     */

  }, {
    key: 'rows',
    get: function get() {
      if (this._rows === null) {
        this._rows = this.body().then(function (body) {
          return CsvDataSource.parse(body);
        });
      }

      return this._rows;
    }

    /**
     * TODO thats more a concern of the get_trees.js task
     * @return {Any} the PassiveTree identifier associated to this DataSource
     */

  }, {
    key: 'tree_ident',
    get: function get() {
      var match = this.filename.match(/\d+_([^_]+)_.*\.csv$/);

      if (match === null) {
        return undefined;
      }

      return match[1];
    }
  }], [{
    key: 'fetch',
    value: function (_fetch) {
      function fetch(_x) {
        return _fetch.apply(this, arguments);
      }

      fetch.toString = function () {
        return _fetch.toString();
      };

      return fetch;
    }(function (filename) {
      return fetch(filename).then(function (response) {
        return response.text();
      });
    })

    /**
     * parses a csv response into rows
     * @param {string} body
     * @return {Promise}
     */

  }, {
    key: 'parse',
    value: function parse(body) {
      return new _promise2.default(function (fulfill, reject) {
        (0, _csvParse2.default)(body, {
          auto_parse: true,
          columns: true,
          delimiter: ','
        }, function (e, rows) {
          if (e) reject(e);
          fulfill(rows);
        });
      });
    }
  }]);
  return CsvDataSource;
}(_AbstractDataSource3.default);

;

exports.default = CsvDataSource;

/***/ }),
/* 34 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.jsonFactory = exports.CSV_SOURCE = undefined;

var _regenerator = __webpack_require__(9);

var _regenerator2 = _interopRequireDefault(_regenerator);

var _asyncToGenerator2 = __webpack_require__(8);

var _asyncToGenerator3 = _interopRequireDefault(_asyncToGenerator2);

/**
 * @param {string} filename to json (array of objects for #dataSource)
 * @return {Promise}
 */
var jsonFactory = exports.jsonFactory = function () {
  var _ref = (0, _asyncToGenerator3.default)(_regenerator2.default.mark(function _callee(filename) {
    return _regenerator2.default.wrap(function _callee$(_context) {
      while (1) {
        switch (_context.prev = _context.next) {
          case 0:
            return _context.abrupt('return', fetch(filename).then(function (response) {
              return response.json();
            }).then(function (sources) {
              return sources.map(dataSource);
            }));

          case 1:
          case 'end':
            return _context.stop();
        }
      }
    }, _callee, this);
  }));

  return function jsonFactory(_x) {
    return _ref.apply(this, arguments);
  };
}();

exports.guessType = guessType;
exports.label = label;
exports.default = dataSource;

var _path = __webpack_require__(1);

var _CsvDataSource = __webpack_require__(33);

var _CsvDataSource2 = _interopRequireDefault(_CsvDataSource);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var CSV_SOURCE = exports.CSV_SOURCE = 'CSV_SOURCE';

/**
 * first try .type
 * then try file extension
 *
 * @param {Object} data_source
 * @return {string} the implementation  for data_source
 */
function guessType(data_source) {
  if (data_source.type) return data_source.type;

  if (data_source.filename) {
    var extension = data_source.filename.match(/\.([a-z]+)$/i) || [];

    switch (extension[1].toLowerCase()) {
      case 'csv':
        return CSV_SOURCE;
    }
  }

  return undefined;
};

/**
 * @param {AbstractDataSource} data_source
 * @return {string} a label for the given source
 */
function label(data_source) {
  if (data_source === undefined) {
    return 'undefined';
  } else if (data_source.filename) {
    // TODO extension support
    return (0, _path.basename)(data_source.filename, '.csv');
  } else {
    return 'generic-source';
  }
}

/**
 * @param {Object} data_source
 * @return {AbstractDataSource}
 */
function dataSource(data_source) {
  var type = guessType(data_source);

  switch (type) {
    case CSV_SOURCE:
      return new _CsvDataSource2.default(data_source.filename);
    default:
      throw new Error('no implementation for ' + type + ' found');
  }
};;

/***/ }),
/* 35 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var _freeze = __webpack_require__(87);

var _freeze2 = _interopRequireDefault(_freeze);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

/**
 * const relevant to PoeNode
 *
 * main goal was to PoeNode = require('PoeNode.js'); node = new PoeNode();
 * types = PoeNode.types
 * but there is no such thing as static getter
 */
module.exports = (0, _freeze2.default)({
  orbit_radii: [0, 82, 162, 335, 493],
  skills_per_orbit: [1, 6, 12, 12, 40],
  /**
   * special node types
   * @type {[*]}
   */
  types: ['keystone', 'mastery', 'notable', 'start', 'ascendancy', 'jewel_socket'],
  /**
   * sprite sizes of the types
   * @type {}
   */
  sizes: {
    'keystone': 53,
    'mastery': 99,
    'notable': 38,
    'start': 40,
    'ascendancy': 27,
    'jewel_socket': 40,
    'normal': 27
  }
});

/***/ }),
/* 36 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var _getIterator2 = __webpack_require__(2);

var _getIterator3 = _interopRequireDefault(_getIterator2);

var _toConsumableArray2 = __webpack_require__(14);

var _toConsumableArray3 = _interopRequireDefault(_toConsumableArray2);

var _entries = __webpack_require__(37);

var _entries2 = _interopRequireDefault(_entries);

var _map = __webpack_require__(13);

var _map2 = _interopRequireDefault(_map);

var _classCallCheck2 = __webpack_require__(10);

var _classCallCheck3 = _interopRequireDefault(_classCallCheck2);

var _createClass2 = __webpack_require__(11);

var _createClass3 = _interopRequireDefault(_createClass2);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var PassiveNodeInstance = __webpack_require__(82);
var PassiveNode = __webpack_require__(35);

module.exports = function () {
  /**
   * @constructor
   * @param {Object} tree_data
   * @param {any} id a unique id
   */
  function PassiveTree(tree_data, id) {
    (0, _classCallCheck3.default)(this, PassiveTree);

    this.data = tree_data;
    this.id = id;

    this.groups = PassiveTree.initGroups(this.data);
    this.nodes = PassiveTree.initNodes(this.data);
    this.edges = PassiveTree.initEdges(this);

    /*
     * although we get min/max coords they don't include the ascendancy
     * so we do its ourselves
     * could do it via nodes but if we use the groups with the orbits
     * we get a nice padding that could still be not enough
     * if we draw the nodes to big
     */
    this.dimensions = PassiveTree.calcDimension(this);
  }

  /**
   * checks if the edge between these nodes is Path of X to X edge
   *
   * @param {PassiveNode} source
   * @param {PassiveNode} target
   * @return {boolean}
   */


  (0, _createClass3.default)(PassiveTree, [{
    key: 'xScaled',


    /**
     * scales the given x in this tree to the matching x on a new container
     * with a different width assuming top left is 0,0
     *
     * @param {number} x
     * @param {number} new_width
     * @return {number}
     */
    value: function xScaled(x, new_width) {
      return (x - this.dimensions[0]) * new_width / this.width;
    }

    /**
     * see this.xScaled
     *
     * @param {number} y
     * @param {number} new_height
     * @return {number}
     */

  }, {
    key: 'yScaled',
    value: function yScaled(y, new_height) {
      return (y - this.dimensions[1]) * new_height / this.height;
    }

    /**
     * @param {PassiveTree} other
     * @return {boolean}
     */

  }, {
    key: 'equals',
    value: function equals(other) {
      return this.id === other.id;
    }

    /**
     * creates a serializeable js type
     * @return {Object}
     */

  }, {
    key: 'toSerializeable',
    value: function toSerializeable() {
      return {
        id: this.id,
        data: this.data
      };
    }

    /**
     * factory from #toSerializeable
     * @param {Object} serializeable
     * @return {PassiveTree}
     */

  }, {
    key: 'viewbox',


    /**
     * svg viewbox
     * @return {[*]}
     */
    get: function get() {
      return [this.dimensions[0], this.dimensions[1], this.width, this.height];
    }

    /**
     * calculates the width of the tree
     */

  }, {
    key: 'width',
    get: function get() {
      return this.dimensions[2] - this.dimensions[0];
    }

    /**
     * calculates the height of the tree
     */

  }, {
    key: 'height',
    get: function get() {
      return this.dimensions[3] - this.dimensions[1];
    }
  }], [{
    key: 'scionPathOfEdge',
    value: function scionPathOfEdge(source, target) {
      return source.ascendancy != target.ascendancy;
    }

    /**
     * map instead of object for ease of use
     * @param {Object} tree_data ggg tree json
     * @return {Map}
     */

  }, {
    key: 'initGroups',
    value: function initGroups(tree_data) {
      return new _map2.default((0, _entries2.default)(tree_data.groups));
    }

    /**
     * map instead of object for ease of use
     * @param {Object} tree_data ggg tree json
     * @return {Map}
     */

  }, {
    key: 'initNodes',
    value: function initNodes(tree_data) {
      return new _map2.default(tree_data.nodes.map(function (n) {
        // [key, value]
        return [n.id, new PassiveNodeInstance(n, tree_data.groups)];
      }));
    }

    /**
     * map instead of object for ease of use
     * @param {PassiveTree} passive_tree
     * @return {[source_node, target_node][]} array of [source, target] pairs
     */

  }, {
    key: 'initEdges',
    value: function initEdges(passive_tree) {
      var edges = [];

      passive_tree.nodes.forEach(function (node) {
        node.adjacent.forEach(function (adj_id) {
          edges.push([node, passive_tree.nodes.get(adj_id)]);
        });
      });

      return edges;
    }

    /**
     * calculate dimensions of the tree
     * @param {PassiveTree} passive_tree
     * @return {number[]} [min_x, min_y, max_x, max_y]
     */

  }, {
    key: 'calcDimension',
    value: function calcDimension(passive_tree) {
      var dimensions = [Number.POSITIVE_INFINITY, // min_x
      Number.POSITIVE_INFINITY, // min_y
      Number.NEGATIVE_INFINITY, // max_x
      Number.NEGATIVE_INFINITY];

      var max_radius = Math.max.apply(Math, (0, _toConsumableArray3.default)(PassiveNode.orbit_radii));

      var _iteratorNormalCompletion = true;
      var _didIteratorError = false;
      var _iteratorError = undefined;

      try {
        for (var _iterator = (0, _getIterator3.default)(passive_tree.groups.values()), _step; !(_iteratorNormalCompletion = (_step = _iterator.next()).done); _iteratorNormalCompletion = true) {
          var group = _step.value;

          dimensions = [Math.min(group.x - max_radius, dimensions[0]), Math.min(group.y - max_radius, dimensions[1]), Math.max(group.x + max_radius, dimensions[2]), Math.max(group.y + max_radius, dimensions[3])];
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

      ;

      return dimensions;
    }
  }, {
    key: 'fromSerializeable',
    value: function fromSerializeable(serializeable) {
      return new PassiveTree(serializeable.data, serializeable.id);
    }
  }]);
  return PassiveTree;
}();

/***/ }),
/* 37 */
/***/ (function(module, exports) {

module.exports = require("babel-runtime/core-js/object/entries");

/***/ }),
/* 38 */
/***/ (function(module, exports) {

module.exports = require("babel-runtime/helpers/extends");

/***/ }),
/* 39 */
/***/ (function(module, exports) {

module.exports = require("babel-runtime/helpers/typeof");

/***/ }),
/* 40 */
/***/ (function(module, exports) {

module.exports = require("d3-zoom");

/***/ }),
/* 41 */
/***/ (function(module, exports) {

module.exports = require("nedb");

/***/ }),
/* 42 */
/***/ (function(module, exports) {

module.exports = require("redux-observable");

/***/ }),
/* 43 */
/***/ (function(module, exports) {

module.exports = require("rxjs/add/operator/filter");

/***/ }),
/* 44 */
/***/ (function(module, exports) {

module.exports = require("rxjs/add/operator/mergeMap");

/***/ }),
/* 45 */
/***/ (function(module, exports) {

module.exports = require("rxjs/observable/dom/ajax");

/***/ }),
/* 46 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _redux = __webpack_require__(26);

var _reducers = __webpack_require__(68);

var _reducers2 = _interopRequireDefault(_reducers);

var _preload = __webpack_require__(79);

var _preload2 = _interopRequireDefault(_preload);

var _enhancer = __webpack_require__(77);

var _enhancer2 = _interopRequireDefault(_enhancer);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var store = (0, _redux.createStore)(_reducers2.default, _preload2.default, _enhancer2.default);

exports.default = store;

/***/ }),
/* 47 */,
/* 48 */,
/* 49 */,
/* 50 */,
/* 51 */,
/* 52 */,
/* 53 */,
/* 54 */,
/* 55 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.activate = activate;
var ACTIVATE = exports.ACTIVATE = 'NAV_TABS/ACTIVATE';

/**
 * action creator to activate a specific child in a nav tab
 *
 * @param {string} tab_key key of the NavTab component
 * @param {string} key key of a child of NavTab
 * @return {Object}
 */
function activate(tab_key, key) {
  return {
    type: ACTIVATE,
    payload: { tab_key: tab_key, key: key }
  };
};

/***/ }),
/* 56 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
var RESET_ZOOM = exports.RESET_ZOOM = 'ZOOMABLE/RESET';

/***/ }),
/* 57 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.sourceInLocation = exports.setSourcesIndex = exports.getSourcesIndex = undefined;

var _extends2 = __webpack_require__(38);

var _extends3 = _interopRequireDefault(_extends2);

var _ajax = __webpack_require__(45);

__webpack_require__(44);

__webpack_require__(16);

var _reactRouterRedux = __webpack_require__(25);

var _data = __webpack_require__(18);

var _url = __webpack_require__(23);

var _data2 = __webpack_require__(24);

var _routing = __webpack_require__(31);

var _factory = __webpack_require__(34);

var _factory2 = _interopRequireDefault(_factory);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var getSourcesIndex = exports.getSourcesIndex = function getSourcesIndex(action$) {
  return action$.ofType(_data.FETCH_SOURCES_FROM_JSON).mergeMap(function (action) {
    return _ajax.ajax.getJSON(action.payload).map(function (sources) {
      return (0, _data.setSourcesArray)(sources.map(function (source) {
        source.filename = (0, _url.publicPath)(source.filename);
        return (0, _factory2.default)(source);
      }));
    });
  });
};

var setSourcesIndex = exports.setSourcesIndex = function setSourcesIndex(action$, store) {
  return action$.ofType(_data.SET_SOURCES).map(function () {
    return (0, _data.setActive)((0, _data2.defaultSource)(store.getState()));
  });
};

var sourceInLocation = exports.sourceInLocation = function sourceInLocation(action$, store) {
  return action$.ofType(_data.SET_ACTIVE).map(function (_ref) {
    var active = _ref.payload.active;
    return (0, _reactRouterRedux.push)((0, _extends3.default)({}, (0, _routing.getLocation)(store.getState()).toJS(), {
      query: {
        source: active
      }
    }));
  });
};

/***/ }),
/* 58 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.heatmapCache = undefined;

__webpack_require__(43);

__webpack_require__(16);

__webpack_require__(100);

var _passive_tree = __webpack_require__(21);

var _rows = __webpack_require__(15);

var _heatmap = __webpack_require__(20);

var _rrf = __webpack_require__(28);

// calculateHeatmap when rows change
// or any for the calculation relevant conf in a rrf model
// TODO
// currently racing with fetchTree. every UPDATE_ROWS before NEW_TREE
// doesnt have an effect. thinking about something like
// filter(...).bufferUntilThenDontBufferAnymore(action$.ofType(NEW_TREE)).map...
var heatmapCache = exports.heatmapCache = function heatmapCache(action$, store) {
  return action$.ofType(_passive_tree.NEW_TREE).switchMap(function () {
    return action$.filter(function (action) {
      return action.type === _rows.UPDATE_ROWS || (0, _rrf.formModelChanged)(action, 'passive_tree_conf') && _heatmap.HEATMAP_RELEVANT_CONF.includes(action.model);
    });
  }, function () {
    return (0, _heatmap.calculateHeatmapFromState)(store.getState());
  });
};

/***/ }),
/* 59 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _reduxObservable = __webpack_require__(42);

var _data = __webpack_require__(57);

var _heatmap = __webpack_require__(58);

var _passive_tree = __webpack_require__(60);

var _rows = __webpack_require__(61);

var _zoom = __webpack_require__(62);

var root_epic = (0, _reduxObservable.combineEpics)(_data.getSourcesIndex, _data.setSourcesIndex, _rows.cacheRows, _heatmap.heatmapCache, _passive_tree.fetchTree, _passive_tree.matchTreeToData, _zoom.syncZoom);

exports.default = root_epic;

/***/ }),
/* 60 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.matchTreeToData = exports.fetchTree = exports.treeJsonUrl = undefined;

var _ajax = __webpack_require__(45);

__webpack_require__(44);

__webpack_require__(16);

var _data = __webpack_require__(18);

var _passive_tree = __webpack_require__(21);

var _url = __webpack_require__(23);

var poe = __webpack_require__(4);

var treeJsonUrl = exports.treeJsonUrl = function treeJsonUrl(id) {
  return (0, _url.publicPath)('trees/' + id + '.json');
};

var fetchTree = exports.fetchTree = function fetchTree(action$, store) {
  return action$.ofType(_passive_tree.FETCH_TREE).filter(function (action) {
    var old_id = store.getState().get('passive_tree').id;
    var new_id = action.payload.id;

    // only fetch a new one if either we currently have the initial tree
    // or if we got a new fetchable tree
    return old_id === undefined || old_id !== new_id && new_id !== undefined;
  }).mergeMap(function (action) {
    var tree_id = action.payload.id || poe.current_tree;
    return _ajax.ajax.getJSON(treeJsonUrl(tree_id)).map(function (tree_data) {
      return (0, _passive_tree.newTree)(tree_data, tree_id);
    });
  });
};

var matchTreeToData = exports.matchTreeToData = function matchTreeToData(action$, store) {
  return action$.ofType(_data.SET_ACTIVE).map(function (action) {
    var source = (0, _data.getSourceByKey)(store.getState(), action.payload.active);
    return (0, _passive_tree.fetchTree)(source.tree_ident);
  });
};

/***/ }),
/* 61 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.cacheRows = undefined;

__webpack_require__(43);

__webpack_require__(99);

var _db = __webpack_require__(19);

var _rows = __webpack_require__(15);

var _rrf = __webpack_require__(28);

/*
 * rows are derived from the db and the data_filter
 * TODO throttle change events
 */
var cacheRows = exports.cacheRows = function cacheRows(action$) {
  return action$.filter(function (action) {
    return action.type == _db.SET_DB || (0, _rrf.formModelChanged)(action, 'data_filter');
  }).mapTo((0, _rows.updateRows)());
};

/***/ }),
/* 62 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.syncZoom = undefined;

__webpack_require__(16);

var _zoom = __webpack_require__(22);

var _heatmap = __webpack_require__(20);

var syncZoom = exports.syncZoom = function syncZoom(action$) {
  return action$.ofType(_heatmap.CALCULATE).map(function () {
    return (0, _zoom.resetZoom)();
  });
};

/***/ }),
/* 63 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.slugify = slugify;
/**
 * @param {Immutable.Map} map
 * @return {string} slugified string of the map
 */
function slugify(map) {
  return map.entrySeq().map(function (entry) {
    return entry.join('-');
  }).join('-');
};

/***/ }),
/* 64 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
var pathnameToAppParams = exports.pathnameToAppParams = function pathnameToAppParams(pathname) {
  var params = {};
  var match = pathname.match(/\/(league\/([^\/]+))?/);

  if (match) {
    if (match[2]) {
      params.league = decodeURI(match[2]);
    }
  }

  return params;
};

// are the only helpers rly only jsx expressions for components?
var appPath = exports.appPath = function appPath(league) {
  var url = '/';

  if (league) {
    url += 'league/' + league.name;
  }

  return url;
};

/***/ }),
/* 65 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _immutable = __webpack_require__(0);

var initial = (0, _immutable.Map)({
  dimensions: (0, _immutable.Map)({
    width: 1900,
    height: 1550
  })
});

var app = function app() {
  return initial;
};

exports.default = app;

/***/ }),
/* 66 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.STATE = undefined;

var _immutable = __webpack_require__(0);

var _db = __webpack_require__(19);

var Nedb = __webpack_require__(41);

// states of the db
var STATE = exports.STATE = {
  EMPTY: 'DB/EMPTY',
  AWAITING_ROWS: _db.AWAITING_ROWS,
  INSERT_ROWS: _db.INSERT_ROWS,
  READY: 'DB/READY'
};

var initial = (0, _immutable.Map)({
  db: new Nedb(),
  state: STATE.EMPTY
});

var db = function db() {
  var state = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : initial;
  var action = arguments[1];

  switch (action.type) {
    case _db.AWAITING_ROWS:
      return state.set('state', STATE.AWAITING_ROWS);
    case _db.INSERT_ROWS:
      return state.set('state', STATE.INSERT_ROWS);
    case _db.SET_DB:
      return state.withMutations(function (state) {
        state.set('db', action.payload.db);
        state.set('state', STATE.READY);
      });
    default:
      return state;
  };
};

exports.default = db;

/***/ }),
/* 67 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.STATE = undefined;

var _immutable = __webpack_require__(0);

var _immutable2 = _interopRequireDefault(_immutable);

var _heatmap = __webpack_require__(20);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var STATE = exports.STATE = {
  CALCULATING: 'CALCULATING',
  READY: 'READY'
};

var initial = (0, _immutable.Map)({
  data: (0, _immutable.List)(),
  data_url: undefined,
  max: 0,
  hash: null,
  instance: null,
  legend: (0, _immutable.Map)({
    min: 0,
    max: 0,
    gradient: (0, _immutable.Map)()
  }),
  state: STATE.READY
});

var heatmap = function heatmap() {
  var state = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : initial;
  var action = arguments[1];

  switch (action.type) {
    case _heatmap.SET:
      return state.withMutations(function (state) {
        state.set('max', action.payload.max);
        state.set('data', (0, _immutable.List)(action.payload.data));
        state.set('hash', action.payload.hash);
        state.set('state', STATE.READY);
      });
    case _heatmap.CALCULATE:
      return state.set('state', STATE.CALCULATING);
    case _heatmap.EXTREMA_CHANGE:
      return state.set('legend', _immutable2.default.fromJS(action.payload.legend));
    case _heatmap.DATA_URL_CHANGE:
      return state.set('data_url', action.payload.data_url);
    default:
      return state;
  }
};

exports.default = heatmap;

/***/ }),
/* 68 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.getRunningTasks = undefined;

var _extends2 = __webpack_require__(38);

var _extends3 = _interopRequireDefault(_extends2);

var _slicedToArray2 = __webpack_require__(7);

var _slicedToArray3 = _interopRequireDefault(_slicedToArray2);

exports.heatmapLabel = heatmapLabel;

var _reduxImmutable = __webpack_require__(96);

var _immutable = __webpack_require__(94);

var _factory = __webpack_require__(34);

var _data = __webpack_require__(24);

var _app = __webpack_require__(65);

var _app2 = _interopRequireDefault(_app);

var _forms = __webpack_require__(30);

var _forms2 = _interopRequireDefault(_forms);

var _passive_tree = __webpack_require__(70);

var _passive_tree2 = _interopRequireDefault(_passive_tree);

var _data2 = __webpack_require__(29);

var _data3 = _interopRequireDefault(_data2);

var _db = __webpack_require__(66);

var _db2 = _interopRequireDefault(_db);

var _nav_tabs = __webpack_require__(69);

var _nav_tabs2 = _interopRequireDefault(_nav_tabs);

var _poe = __webpack_require__(71);

var _poe2 = _interopRequireDefault(_poe);

var _routing = __webpack_require__(72);

var _routing2 = _interopRequireDefault(_routing);

var _rows = __webpack_require__(73);

var _rows2 = _interopRequireDefault(_rows);

var _heatmap = __webpack_require__(67);

var _heatmap2 = _interopRequireDefault(_heatmap);

var _tooltip = __webpack_require__(74);

var _tooltip2 = _interopRequireDefault(_tooltip);

var _zoom = __webpack_require__(75);

var _zoom2 = _interopRequireDefault(_zoom);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

/**
 * @param {List} task_state returnval from {getTaskState}
 * @return {string[]} array of string representations of all tasks
 */
var getRunningTasks = exports.getRunningTasks = function getRunningTasks(task_state) {
  return task_state.filter(function (_ref) {
    var _ref2 = (0, _slicedToArray3.default)(_ref, 2),
        running = _ref2[1];

    return running;
  }).map(function (_ref3) {
    var _ref4 = (0, _slicedToArray3.default)(_ref3, 1),
        task = _ref4[0];

    return task;
  });
};

/**
 * generates a meaningful filename for the current heatmap
 * @param {ReduxState} state
 * @return {string}
 */
function heatmapLabel(state) {
  return [(0, _factory.label)((0, _data.activeSource)(state.get('data'))), (0, _forms.slugify)(state.get('data_filter'))].join('-');
}

var treeStatsApp = (0, _reduxImmutable.combineReducers)((0, _extends3.default)({
  app: _app2.default,
  db: _db2.default, // redux (dev tools and state-invariant have problems with Nedb it seems
  rows: _rows2.default,
  heatmap: _heatmap2.default,
  nav_tabs: _nav_tabs2.default,
  passive_tree: _passive_tree2.default,
  poe: _poe2.default,
  tooltip: _tooltip2.default,
  zoom: _zoom2.default,
  data: _data3.default,
  routing: _routing2.default
}, (0, _immutable.createForms)(_forms2.default)));

exports.default = treeStatsApp;

/***/ }),
/* 69 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = nav_tabs;

var _immutable = __webpack_require__(0);

var _nav_tabs = __webpack_require__(55);

var initial = (0, _immutable.Map)();

/**
 * @param {Object} state
 * @param {Object} action creator
 * @return {Object} new state
 */
function nav_tabs() {
  var state = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : initial;
  var action = arguments[1];

  switch (action.type) {
    case _nav_tabs.ACTIVATE:
      return state.set(action.payload.tab_key, action.payload.key);
    default:
      return state;
  }
}

/***/ }),
/* 70 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _PassiveTree = __webpack_require__(36);

var _PassiveTree2 = _interopRequireDefault(_PassiveTree);

var _passive_tree = __webpack_require__(21);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var initial_state = new _PassiveTree2.default({
  nodes: [],
  groups: []
});

var passive_tree = function passive_tree() {
  var state = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : initial_state;
  var action = arguments[1];

  switch (action.type) {
    case _passive_tree.NEW_TREE:
      return new _PassiveTree2.default(action.payload.data, action.payload.id);
    default:
      return state;
  }
};

exports.default = passive_tree;

/***/ }),
/* 71 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _immutable = __webpack_require__(0);

var POE = __webpack_require__(4);

var initial = (0, _immutable.Map)({
  classes: (0, _immutable.Map)(POE.classes),
  leagues: (0, _immutable.Map)(POE.leagues)
});

var poe = function poe() {
  var state = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : initial;
  var action = arguments[1];

  return state;
};

exports.default = poe;

/***/ }),
/* 72 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _reactRouterRedux = __webpack_require__(25);

var _immutable = __webpack_require__(0);

var initial = (0, _immutable.Map)({
  locationBeforeTransitions: null
});

var routing = function routing() {
  var state = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : initial;
  var action = arguments[1];

  switch (action.type) {
    case _reactRouterRedux.LOCATION_CHANGE:
      return state.merge({
        locationBeforeTransitions: action.payload
      });
    default:
      return state;
  }
};

exports.default = routing;

/***/ }),
/* 73 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _immutable = __webpack_require__(0);

var _rows = __webpack_require__(15);

var initial = (0, _immutable.Map)({
  rows: (0, _immutable.List)(),
  selecting: false
});

var rows = function rows() {
  var state = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : initial;
  var action = arguments[1];

  switch (action.type) {
    case _rows.UPDATE_ROWS:
      return state.withMutations(function (state) {
        state.set('rows', (0, _immutable.List)(action.payload.rows));
        state.set('selecting', false);
      });
    case _rows.SELECT_ROWS:
      return state.set('selecting', true);
    default:
      return state;
  };
};

exports.default = rows;

/***/ }),
/* 74 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _immutable = __webpack_require__(0);

var _tooltip = __webpack_require__(27);

var initial = (0, _immutable.Map)({
  x: 0,
  y: 0,
  node_id: undefined,
  event: (0, _immutable.Map)()
});

var tooltip = function tooltip() {
  var state = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : initial;
  var action = arguments[1];

  switch (action.type) {
    case _tooltip.SHOW_TOOLTIP:
      var _action$payload = action.payload,
          x = _action$payload.x,
          y = _action$payload.y,
          node_id = _action$payload.node_id,
          event = _action$payload.event;

      return state.withMutations(function (state) {
        state.set('x', x);
        state.set('y', y);
        state.set('node_id', node_id);
        state.set('event', (0, _immutable.Map)(event));
      });
    default:
      return state;
  }
};

exports.default = tooltip;

/***/ }),
/* 75 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _d3Zoom = __webpack_require__(40);

var _immutable = __webpack_require__(0);

var _d3_util = __webpack_require__(80);

var _zoom = __webpack_require__(22);

var _Zoomable = __webpack_require__(56);

var initial = (0, _immutable.Map)({
  transform: (0, _d3_util.transformToImmutable)(_d3Zoom.zoomIdentity),
  command: undefined
});

var zoom = function zoom() {
  var state = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : initial;
  var action = arguments[1];

  switch (action.type) {
    case _zoom.ZOOMED:
      return state.set('transform', (0, _d3_util.transformToImmutable)(action.payload.transform));
    case _zoom.RESET_ZOOM:
      return state.withMutations(function (state) {
        state.set('command', _Zoomable.RESET_ZOOM);
        state.set('transform', (0, _d3_util.transformToImmutable)(_d3Zoom.zoomIdentity));
      });
    case _zoom.COMMAND_EXECUTED:
      return state.set('command', undefined);
    default:
      return state;
  }
};

exports.default = zoom;

/***/ }),
/* 76 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
var POE = __webpack_require__(4);

var leagueFromName = exports.leagueFromName = function leagueFromName(league_name, not_set_value) {
  var key = POE.leagues.findKey(function (league) {
    return league.name === league_name;
  });

  if (key === undefined) {
    return not_set_value;
  } else {
    return key;
  }
};

/***/ }),
/* 77 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _typeof2 = __webpack_require__(39);

var _typeof3 = _interopRequireDefault(_typeof2);

var _redux = __webpack_require__(26);

var _logger = __webpack_require__(32);

var _middleware = __webpack_require__(78);

var _middleware2 = _interopRequireDefault(_middleware);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

// @see {https://github.com/zalmoxisus/redux-devtools-extension}
var composeEnhancers = (typeof window === 'undefined' ? 'undefined' : (0, _typeof3.default)(window)) === 'object' && window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ ? window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__({
  // Specify extension’s options
  actionsBlacklist: _logger.verbose_actions
}) : _redux.compose;

var enhancer = composeEnhancers(_middleware2.default);

exports.default = enhancer;

/***/ }),
/* 78 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _redux = __webpack_require__(26);

var _reduxThunk = __webpack_require__(98);

var _reduxThunk2 = _interopRequireDefault(_reduxThunk);

var _reduxObservable = __webpack_require__(42);

var _reactRouter = __webpack_require__(95);

var _reactRouterRedux = __webpack_require__(25);

var _logger = __webpack_require__(32);

var _logger2 = _interopRequireDefault(_logger);

var _epics = __webpack_require__(59);

var _epics2 = _interopRequireDefault(_epics);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var epic_middleware = (0, _reduxObservable.createEpicMiddleware)(_epics2.default);

var middlewares = [_reduxThunk2.default, epic_middleware, (0, _reactRouterRedux.routerMiddleware)(_reactRouter.browserHistory)];

if (process.env.NODE_ENV !== 'production') {
  middlewares.push(_logger2.default);
}

var middleware = _redux.applyMiddleware.apply(undefined, middlewares);

exports.default = middleware;

/***/ }),
/* 79 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _immutable = __webpack_require__(0);

var preload = (0, _immutable.Map)({
  nav_tabs: (0, _immutable.Map)({
    conf: 'data_filter' })
});

exports.default = preload;

/***/ }),
/* 80 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.transformEqual = transformEqual;
exports.browserTransform = browserTransform;
exports.transformToImmutable = transformToImmutable;
exports.immutableToTransform = immutableToTransform;

var _immutable = __webpack_require__(0);

var _d3Zoom = __webpack_require__(40);

/**
 * @param {d3-transform} t1
 * @param {d3-transform} t2
 * @return {boolean} if the applied transformation is equal
 */
function transformEqual(t1, t2) {
  return t1.x === t2.x && t1.y === t2.y && t1.k === t2.k;
};

/**
 * supports zoom transformation for html elements
 *
 * @param {d3-transform} transform
 * @return {string} the div style attr for transform
 */
function browserTransform(transform) {
  var translation = 'translate(' + (transform.x | 0) + 'px' + (', ' + (transform.y | 0) + 'px)');
  var scale = 'scale(' + transform.k + ')';

  return [translation, scale].join(' ');
};

/**
 * @param {d3Transform} transform
 * @return {Map} immutable map with relevant props for d3Transform creation
 */
function transformToImmutable(transform) {
  return (0, _immutable.Map)(transform);
};

/**
 * @param {Map} map
 * @return {d3Transform}
 */
function immutableToTransform(map) {
  return _d3Zoom.zoomIdentity.scale(map.get('k')).translate(map.get('x'), map.get('y'));
};

/***/ }),
/* 81 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _promise = __webpack_require__(5);

var _promise2 = _interopRequireDefault(_promise);

var _classCallCheck2 = __webpack_require__(10);

var _classCallCheck3 = _interopRequireDefault(_classCallCheck2);

var _createClass2 = __webpack_require__(11);

var _createClass3 = _interopRequireDefault(_createClass2);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

/**
 * a source for nedb
 */
var AbstractDataSource = function () {
  function AbstractDataSource() {
    (0, _classCallCheck3.default)(this, AbstractDataSource);
  }

  (0, _createClass3.default)(AbstractDataSource, [{
    key: 'rows',

    /**
     * get the rows of the source in a Promise
     * @return {Promise}
     */
    value: function rows() {
      return new _promise2.default(function (fulfill, reject) {
        reject('rows not implemented');
      });
    }

    /**
     * @return {Any} the PassiveTree identifier associated to this DataSource
     */

  }, {
    key: 'tree_ident',
    get: function get() {
      return undefined;
    }
  }]);
  return AbstractDataSource;
}();

;

exports.default = AbstractDataSource;

/***/ }),
/* 82 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var _assign = __webpack_require__(17);

var _assign2 = _interopRequireDefault(_assign);

var _entries = __webpack_require__(37);

var _entries2 = _interopRequireDefault(_entries);

var _keys = __webpack_require__(89);

var _keys2 = _interopRequireDefault(_keys);

var _toConsumableArray2 = __webpack_require__(14);

var _toConsumableArray3 = _interopRequireDefault(_toConsumableArray2);

var _classCallCheck2 = __webpack_require__(10);

var _classCallCheck3 = _interopRequireDefault(_classCallCheck2);

var _createClass2 = __webpack_require__(11);

var _createClass3 = _interopRequireDefault(_createClass2);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var self = __webpack_require__(35);
var tau = 2 * Math.PI;

module.exports = function () {
  /**
   * @constructor
   * @param {Object} props from the ggg passive skill tree data
   * @param {Object} groups all groups from the ggg passive skill tree data
   */
  function _class(props, groups) {
    (0, _classCallCheck3.default)(this, _class);

    this.props = props;
    this.group = groups[this.group_id];
  }

  /**
   * @return {string} name of the node
   */


  (0, _createClass3.default)(_class, [{
    key: 'name',
    get: function get() {
      return this.props.dn;
    }

    /**
     * @return {string} unique id of the node
     */

  }, {
    key: 'id',
    get: function get() {
      return this.props.id;
    }

    /**
     * @return {number} orbit index
     */

  }, {
    key: 'orbit',
    get: function get() {
      return this.props.o;
    }

    /**
     * @return {boolean} if the node is a keystone
     */

  }, {
    key: 'keystone',
    get: function get() {
      return this.props.ks;
    }

    /**
     * @return {boolean} if the node is a mastery
     */

  }, {
    key: 'mastery',
    get: function get() {
      return this.props.m;
    }

    /**
     * @return {boolean} if the node is a notable
     */

  }, {
    key: 'notable',
    get: function get() {
      return this.props.not;
    }

    /**
     * @return {boolean} if the node is a keystone
     */

  }, {
    key: 'ascendancy',
    get: function get() {
      return !!this.props.ascendancyName;
    }

    /**
     * @return {boolean} if the node is a jewel socket
     */

  }, {
    key: 'jewel_socket',
    get: function get() {
      return this.props.isJewelSocket;
    }

    /**
     * @return {boolean} if the node is a class start node
     */

  }, {
    key: 'start',
    get: function get() {
      return this.props.spc.length > 0;
    }

    /**
     * @return {string} the starting class
     */

  }, {
    key: 'startingClass',
    get: function get() {
      if (this.start) {
        // ucfirst
        return this.name[0].toUpperCase() + this.name.slice(1).toLowerCase();
      }
      return undefined;
    }

    /**
     * @return {number[]} adjacent node ids
     */

  }, {
    key: 'adjacent',
    get: function get() {
      return this.props.out;
    }

    /**
     * normal node if not any special type
     *
     * @return {boolean}
     */

  }, {
    key: 'normal',
    get: function get() {
      var _this = this;

      return !self.types.some(function (t) {
        return _this[t];
      });
    }

    /**
     * although they should be mutually exclusive
     * the data has flags for each of this type
     * it should only return arrays with one element
     *
     * @return {string[]}
     */

  }, {
    key: 'types',
    get: function get() {
      var _this2 = this;

      // getters for the types
      return [].concat((0, _toConsumableArray3.default)(self.types), ['normal']).filter(function (t) {
        return _this2[t];
      });
    }

    /**
     * @return {string[]} stats descriptions
     */

  }, {
    key: 'stats',
    get: function get() {
      return this.props.sd;
    }

    /**
     * @return {number}
     */

  }, {
    key: 'group_id',
    get: function get() {
      return this.props.g;
    }

    /**
     * @scalable
     * @return {number} radius relative to group
     */

  }, {
    key: 'radius',
    get: function get() {
      return self.orbit_radii[this.orbit];
    }

    /**
     * @scalable
     * @return {number} size of the biggest asset
     */

  }, {
    key: 'size',
    get: function get() {
      var _this3 = this;

      return self.sizes[(0, _keys2.default)(self.sizes).filter(function (t) {
        return _this3[t];
      })[0]];
    }

    /**
     * calculates the radiant angle at which the node is located in its orbit
     *
     * consider a clock
     * the oidx starts at 0:00 and moves clockwise
     * angles in math increases counter clockwise starting at 3:00
     * we need to adjust the angle accordingly
     *
     * @return {number}
     */

  }, {
    key: 'angle',
    get: function get() {
      return (tau * (1 - this.props.oidx / self.skills_per_orbit[this.props.o]) + tau / 4) % tau;
    }

    /**
     * the angle if counted clockwise
     */

  }, {
    key: 'angle_clockwise',
    get: function get() {
      return (tau * this.props.oidx / self.skills_per_orbit[this.props.o] - tau / 4) % tau;
    }

    /**
     * @scalable
     * @return {number} cartesian x
     */

  }, {
    key: 'x',
    get: function get() {
      return this.group.x + this.radius * Math.cos(this.angle);
    }

    /**
     * @scalable
     * @return {number} cartesian y
     */

  }, {
    key: 'y',
    get: function get() {
      return this.group.y - this.radius * Math.sin(this.angle);
    }

    /**
     * @return {string}
     */

  }, {
    key: 'inspect',
    get: function get() {
      return (0, _entries2.default)((0, _assign2.default)({
        angle: this.angle,
        x: this.x,
        y: this.y,
        g: (0, _entries2.default)(this.group).join('\n')
      }, this.props)).map(function (e) {
        return e[0] + ': ' + e[1];
      }).join('\n');
    }
  }]);
  return _class;
}();

/***/ }),
/* 83 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _stringify = __webpack_require__(6);

var _stringify2 = _interopRequireDefault(_stringify);

var _classCallCheck2 = __webpack_require__(10);

var _classCallCheck3 = _interopRequireDefault(_classCallCheck2);

var _createClass2 = __webpack_require__(11);

var _createClass3 = _interopRequireDefault(_createClass2);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var PoeTree = __webpack_require__(36);

/**
 * view helper class that determines if various elements of
 * the given tree are visible under a conf Object
 */

var PassiveTreeConf = function () {
  /**
   * @param {Object} conf_props
   * @param {boolean} conf_props.group_orbits display group_orbits?
   * @param {boolean} conf_props.start display start nodes?
   * @param {boolean} conf_props.scionPathOf display ScionPathOfX edge?
   * @param {boolean} conf_props.ascendancy display ascendancy nodes?
   * @param {boolean} conf_props.mastery display mastery nodes?
   * @param {boolean} conf_props.node_scale scale for {PassiveNode#size}
   */
  function PassiveTreeConf(conf_props) {
    (0, _classCallCheck3.default)(this, PassiveTreeConf);

    this.props = conf_props;
  }

  /**
   * @return {number}
   */


  (0, _createClass3.default)(PassiveTreeConf, [{
    key: 'isVisibleNode',


    /**
     * @param {PassiveNode} node
     * @return {boolean}
     */
    value: function isVisibleNode(node) {
      var conf = this.props;

      return (conf.mastery || !node.mastery) && (conf.start || !node.start) && (conf.ascendancy || !node.ascendancy);
    }

    /**
     * @param {PassiveNode} source
     * @param {PassiveNode} target
     * @return {boolean}
     */

  }, {
    key: 'isVisibleEdge',
    value: function isVisibleEdge(source, target) {
      var conf = this.props;

      // no start node connection
      return (conf.start || !source.start && !target.start) && (
      // no scion path of x edges
      conf.scionPathOf || !PoeTree.scionPathOfEdge(source, target))
      // no ascendancy edges
      && (conf.ascendancy || !source.ascendancy);
    }
  }, {
    key: 'isVisibleGroup',


    /**
     * @param {Object} group
     * @return {boolean}
     */
    value: function isVisibleGroup(group) {
      return this.props.group_orbits;
    }
  }, {
    key: 'equals',


    /**
     * @param {PassiveTreeConf} other
     * @return {boolean}
     */
    value: function equals(other) {
      return (0, _stringify2.default)(this.props) === (0, _stringify2.default)(other.props);
    }

    /**
     * creates a serializeable js type
     * @return {Object}
     */

  }, {
    key: 'toSerializeable',
    value: function toSerializeable() {
      return {
        props: this.props
      };
    }

    /**
     * factory from #toSerializeable
     * @param {Object} serializeable
     * @return {PassiveTreeConf}
     */

  }, {
    key: 'node_scale',
    get: function get() {
      return +this.props.node_scale;
    }
  }], [{
    key: 'fromSerializeable',
    value: function fromSerializeable(serializeable) {
      return new PassiveTreeConf(serializeable.props);
    }
  }]);
  return PassiveTreeConf;
}();

exports.default = PassiveTreeConf;

/***/ }),
/* 84 */,
/* 85 */,
/* 86 */
/***/ (function(module, exports, __webpack_require__) {

module.exports = function() {
	return new Worker(__webpack_require__.p + "deb2b3a4106f19f8f553.worker.js");
};

/***/ }),
/* 87 */
/***/ (function(module, exports) {

module.exports = require("babel-runtime/core-js/object/freeze");

/***/ }),
/* 88 */
/***/ (function(module, exports) {

module.exports = require("babel-runtime/core-js/object/get-prototype-of");

/***/ }),
/* 89 */
/***/ (function(module, exports) {

module.exports = require("babel-runtime/core-js/object/keys");

/***/ }),
/* 90 */
/***/ (function(module, exports) {

module.exports = require("babel-runtime/helpers/inherits");

/***/ }),
/* 91 */
/***/ (function(module, exports) {

module.exports = require("babel-runtime/helpers/possibleConstructorReturn");

/***/ }),
/* 92 */,
/* 93 */
/***/ (function(module, exports) {

module.exports = require("csv-parse");

/***/ }),
/* 94 */
/***/ (function(module, exports) {

module.exports = require("react-redux-form/immutable");

/***/ }),
/* 95 */
/***/ (function(module, exports) {

module.exports = require("react-router");

/***/ }),
/* 96 */
/***/ (function(module, exports) {

module.exports = require("redux-immutable");

/***/ }),
/* 97 */
/***/ (function(module, exports) {

module.exports = require("redux-logger");

/***/ }),
/* 98 */
/***/ (function(module, exports) {

module.exports = require("redux-thunk");

/***/ }),
/* 99 */
/***/ (function(module, exports) {

module.exports = require("rxjs/add/operator/mapTo");

/***/ }),
/* 100 */
/***/ (function(module, exports) {

module.exports = require("rxjs/add/operator/switchMap");

/***/ }),
/* 101 */,
/* 102 */,
/* 103 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var _regenerator = __webpack_require__(9);

var _regenerator2 = _interopRequireDefault(_regenerator);

var _asyncToGenerator2 = __webpack_require__(8);

var _asyncToGenerator3 = _interopRequireDefault(_asyncToGenerator2);

var _promise = __webpack_require__(5);

var _promise2 = _interopRequireDefault(_promise);

var _store = __webpack_require__(46);

var _store2 = _interopRequireDefault(_store);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var done = new _promise2.default(function (fulfill, reject) {
  _store2.default.subscribe(function () {
    console.log(_store2.default.getState().toJS());
  });
});

(0, _asyncToGenerator3.default)(_regenerator2.default.mark(function _callee() {
  return _regenerator2.default.wrap(function _callee$(_context) {
    while (1) {
      switch (_context.prev = _context.next) {
        case 0:
          _context.next = 2;
          return done;

        case 2:
        case 'end':
          return _context.stop();
      }
    }
  }, _callee, undefined);
}))();

/***/ })
/******/ ]);
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vd2VicGFjay9ib290c3RyYXAgYjBjNWNhOTQyZWI5ZTA0YTgzNmQiLCJ3ZWJwYWNrOi8vL2V4dGVybmFsIFwiaW1tdXRhYmxlXCIiLCJ3ZWJwYWNrOi8vL2V4dGVybmFsIFwicGF0aFwiIiwid2VicGFjazovLy9leHRlcm5hbCBcImJhYmVsLXJ1bnRpbWUvY29yZS1qcy9nZXQtaXRlcmF0b3JcIiIsIndlYnBhY2s6Ly8vLi9zcmMvcG9lL2RhdGEuanMiLCJ3ZWJwYWNrOi8vL2V4dGVybmFsIFwiYmFiZWwtcnVudGltZS9jb3JlLWpzL3Byb21pc2VcIiIsIndlYnBhY2s6Ly8vZXh0ZXJuYWwgXCJiYWJlbC1ydW50aW1lL2NvcmUtanMvanNvbi9zdHJpbmdpZnlcIiIsIndlYnBhY2s6Ly8vZXh0ZXJuYWwgXCJiYWJlbC1ydW50aW1lL2hlbHBlcnMvc2xpY2VkVG9BcnJheVwiIiwid2VicGFjazovLy9leHRlcm5hbCBcImJhYmVsLXJ1bnRpbWUvaGVscGVycy9hc3luY1RvR2VuZXJhdG9yXCIiLCJ3ZWJwYWNrOi8vL2V4dGVybmFsIFwiYmFiZWwtcnVudGltZS9yZWdlbmVyYXRvclwiIiwid2VicGFjazovLy9leHRlcm5hbCBcImJhYmVsLXJ1bnRpbWUvaGVscGVycy9jbGFzc0NhbGxDaGVja1wiIiwid2VicGFjazovLy9leHRlcm5hbCBcImJhYmVsLXJ1bnRpbWUvaGVscGVycy9jcmVhdGVDbGFzc1wiIiwid2VicGFjazovLy8uL3NyYy9zY3JpcHRzL2xpYi90cmVlc1RvQ3N2RmlsZS5qcyIsIndlYnBhY2s6Ly8vZXh0ZXJuYWwgXCJiYWJlbC1ydW50aW1lL2NvcmUtanMvbWFwXCIiLCJ3ZWJwYWNrOi8vL2V4dGVybmFsIFwiYmFiZWwtcnVudGltZS9oZWxwZXJzL3RvQ29uc3VtYWJsZUFycmF5XCIiLCJ3ZWJwYWNrOi8vLy4vc3JjL2Jyb3dzZXIvYWN0aW9ucy9yb3dzLmpzIiwid2VicGFjazovLy9leHRlcm5hbCBcInJ4anMvYWRkL29wZXJhdG9yL21hcFwiIiwid2VicGFjazovLy9leHRlcm5hbCBcImJhYmVsLXJ1bnRpbWUvY29yZS1qcy9vYmplY3QvYXNzaWduXCIiLCJ3ZWJwYWNrOi8vLy4vc3JjL2Jyb3dzZXIvYWN0aW9ucy9kYXRhLmpzIiwid2VicGFjazovLy8uL3NyYy9icm93c2VyL2FjdGlvbnMvZGIuanMiLCJ3ZWJwYWNrOi8vLy4vc3JjL2Jyb3dzZXIvYWN0aW9ucy9oZWF0bWFwLmpzIiwid2VicGFjazovLy8uL3NyYy9icm93c2VyL2FjdGlvbnMvcGFzc2l2ZV90cmVlLmpzIiwid2VicGFjazovLy8uL3NyYy9icm93c2VyL2FjdGlvbnMvem9vbS5qcyIsIndlYnBhY2s6Ly8vLi9zcmMvYnJvd3Nlci9oZWxwZXJzL3VybC5qcyIsIndlYnBhY2s6Ly8vLi9zcmMvYnJvd3Nlci9zZWxlY3RvcnMvZGF0YS5qcyIsIndlYnBhY2s6Ly8vZXh0ZXJuYWwgXCJyZWFjdC1yb3V0ZXItcmVkdXhcIiIsIndlYnBhY2s6Ly8vZXh0ZXJuYWwgXCJyZWR1eFwiIiwid2VicGFjazovLy8uL3NyYy9icm93c2VyL2FjdGlvbnMvdG9vbHRpcC5qcyIsIndlYnBhY2s6Ly8vLi9zcmMvYnJvd3Nlci9oZWxwZXJzL3JyZi5qcyIsIndlYnBhY2s6Ly8vLi9zcmMvYnJvd3Nlci9yZWR1Y2Vycy9kYXRhLmpzIiwid2VicGFjazovLy8uL3NyYy9icm93c2VyL3JlZHVjZXJzL2Zvcm1zLmpzIiwid2VicGFjazovLy8uL3NyYy9icm93c2VyL3NlbGVjdG9ycy9yb3V0aW5nLmpzIiwid2VicGFjazovLy8uL3NyYy9icm93c2VyL3N0b3JlL2xvZ2dlci5qcyIsIndlYnBhY2s6Ly8vLi9zcmMvZGF0YV9zb3VyY2VzL0NzdkRhdGFTb3VyY2UuanMiLCJ3ZWJwYWNrOi8vLy4vc3JjL2RhdGFfc291cmNlcy9mYWN0b3J5LmpzIiwid2VicGFjazovLy8uL3NyYy9wb2UvUGFzc2l2ZU5vZGVDb25zdC5qcyIsIndlYnBhY2s6Ly8vLi9zcmMvcG9lL1Bhc3NpdmVUcmVlLmpzIiwid2VicGFjazovLy9leHRlcm5hbCBcImJhYmVsLXJ1bnRpbWUvY29yZS1qcy9vYmplY3QvZW50cmllc1wiIiwid2VicGFjazovLy9leHRlcm5hbCBcImJhYmVsLXJ1bnRpbWUvaGVscGVycy9leHRlbmRzXCIiLCJ3ZWJwYWNrOi8vL2V4dGVybmFsIFwiYmFiZWwtcnVudGltZS9oZWxwZXJzL3R5cGVvZlwiIiwid2VicGFjazovLy9leHRlcm5hbCBcImQzLXpvb21cIiIsIndlYnBhY2s6Ly8vZXh0ZXJuYWwgXCJuZWRiXCIiLCJ3ZWJwYWNrOi8vL2V4dGVybmFsIFwicmVkdXgtb2JzZXJ2YWJsZVwiIiwid2VicGFjazovLy9leHRlcm5hbCBcInJ4anMvYWRkL29wZXJhdG9yL2ZpbHRlclwiIiwid2VicGFjazovLy9leHRlcm5hbCBcInJ4anMvYWRkL29wZXJhdG9yL21lcmdlTWFwXCIiLCJ3ZWJwYWNrOi8vL2V4dGVybmFsIFwicnhqcy9vYnNlcnZhYmxlL2RvbS9hamF4XCIiLCJ3ZWJwYWNrOi8vLy4vc3JjL2Jyb3dzZXIvc3RvcmUvc3RvcmUuanMiLCJ3ZWJwYWNrOi8vLy4vc3JjL2Jyb3dzZXIvYWN0aW9ucy9uYXZfdGFicy5qcyIsIndlYnBhY2s6Ly8vLi9zcmMvYnJvd3Nlci9jb21wb25lbnRzL1pvb21hYmxlLmNvbnN0YW50cy5qcyIsIndlYnBhY2s6Ly8vLi9zcmMvYnJvd3Nlci9lcGljcy9kYXRhLmpzIiwid2VicGFjazovLy8uL3NyYy9icm93c2VyL2VwaWNzL2hlYXRtYXAuanMiLCJ3ZWJwYWNrOi8vLy4vc3JjL2Jyb3dzZXIvZXBpY3MvaW5kZXguanMiLCJ3ZWJwYWNrOi8vLy4vc3JjL2Jyb3dzZXIvZXBpY3MvcGFzc2l2ZV90cmVlLmpzIiwid2VicGFjazovLy8uL3NyYy9icm93c2VyL2VwaWNzL3Jvd3MuanMiLCJ3ZWJwYWNrOi8vLy4vc3JjL2Jyb3dzZXIvZXBpY3Mvem9vbS5qcyIsIndlYnBhY2s6Ly8vLi9zcmMvYnJvd3Nlci9oZWxwZXJzL21hcC5qcyIsIndlYnBhY2s6Ly8vLi9zcmMvYnJvd3Nlci9oZWxwZXJzL3JvdXRlcy5qcyIsIndlYnBhY2s6Ly8vLi9zcmMvYnJvd3Nlci9yZWR1Y2Vycy9hcHAuanMiLCJ3ZWJwYWNrOi8vLy4vc3JjL2Jyb3dzZXIvcmVkdWNlcnMvZGIuanMiLCJ3ZWJwYWNrOi8vLy4vc3JjL2Jyb3dzZXIvcmVkdWNlcnMvaGVhdG1hcC5qcyIsIndlYnBhY2s6Ly8vLi9zcmMvYnJvd3Nlci9yZWR1Y2Vycy9pbmRleC5qcyIsIndlYnBhY2s6Ly8vLi9zcmMvYnJvd3Nlci9yZWR1Y2Vycy9uYXZfdGFicy5qcyIsIndlYnBhY2s6Ly8vLi9zcmMvYnJvd3Nlci9yZWR1Y2Vycy9wYXNzaXZlX3RyZWUuanMiLCJ3ZWJwYWNrOi8vLy4vc3JjL2Jyb3dzZXIvcmVkdWNlcnMvcG9lLmpzIiwid2VicGFjazovLy8uL3NyYy9icm93c2VyL3JlZHVjZXJzL3JvdXRpbmcuanMiLCJ3ZWJwYWNrOi8vLy4vc3JjL2Jyb3dzZXIvcmVkdWNlcnMvcm93cy5qcyIsIndlYnBhY2s6Ly8vLi9zcmMvYnJvd3Nlci9yZWR1Y2Vycy90b29sdGlwLmpzIiwid2VicGFjazovLy8uL3NyYy9icm93c2VyL3JlZHVjZXJzL3pvb20uanMiLCJ3ZWJwYWNrOi8vLy4vc3JjL2Jyb3dzZXIvc2VsZWN0b3JzL3BvZS5qcyIsIndlYnBhY2s6Ly8vLi9zcmMvYnJvd3Nlci9zdG9yZS9lbmhhbmNlci5qcyIsIndlYnBhY2s6Ly8vLi9zcmMvYnJvd3Nlci9zdG9yZS9taWRkbGV3YXJlLmpzIiwid2VicGFjazovLy8uL3NyYy9icm93c2VyL3N0b3JlL3ByZWxvYWQuanMiLCJ3ZWJwYWNrOi8vLy4vc3JjL2QzX3V0aWwuanMiLCJ3ZWJwYWNrOi8vLy4vc3JjL2RhdGFfc291cmNlcy9BYnN0cmFjdERhdGFTb3VyY2UuanMiLCJ3ZWJwYWNrOi8vLy4vc3JjL3BvZS9QYXNzaXZlTm9kZS5qcyIsIndlYnBhY2s6Ly8vLi9zcmMvcG9lL1Bhc3NpdmVUcmVlQ29uZi5qcyIsIndlYnBhY2s6Ly8vLi9zcmMvYnJvd3Nlci93b3JrZXJzL2hlYXRtYXAuanMiLCJ3ZWJwYWNrOi8vL2V4dGVybmFsIFwiYmFiZWwtcnVudGltZS9jb3JlLWpzL29iamVjdC9mcmVlemVcIiIsIndlYnBhY2s6Ly8vZXh0ZXJuYWwgXCJiYWJlbC1ydW50aW1lL2NvcmUtanMvb2JqZWN0L2dldC1wcm90b3R5cGUtb2ZcIiIsIndlYnBhY2s6Ly8vZXh0ZXJuYWwgXCJiYWJlbC1ydW50aW1lL2NvcmUtanMvb2JqZWN0L2tleXNcIiIsIndlYnBhY2s6Ly8vZXh0ZXJuYWwgXCJiYWJlbC1ydW50aW1lL2hlbHBlcnMvaW5oZXJpdHNcIiIsIndlYnBhY2s6Ly8vZXh0ZXJuYWwgXCJiYWJlbC1ydW50aW1lL2hlbHBlcnMvcG9zc2libGVDb25zdHJ1Y3RvclJldHVyblwiIiwid2VicGFjazovLy9leHRlcm5hbCBcImNzdi1wYXJzZVwiIiwid2VicGFjazovLy9leHRlcm5hbCBcInJlYWN0LXJlZHV4LWZvcm0vaW1tdXRhYmxlXCIiLCJ3ZWJwYWNrOi8vL2V4dGVybmFsIFwicmVhY3Qtcm91dGVyXCIiLCJ3ZWJwYWNrOi8vL2V4dGVybmFsIFwicmVkdXgtaW1tdXRhYmxlXCIiLCJ3ZWJwYWNrOi8vL2V4dGVybmFsIFwicmVkdXgtbG9nZ2VyXCIiLCJ3ZWJwYWNrOi8vL2V4dGVybmFsIFwicmVkdXgtdGh1bmtcIiIsIndlYnBhY2s6Ly8vZXh0ZXJuYWwgXCJyeGpzL2FkZC9vcGVyYXRvci9tYXBUb1wiIiwid2VicGFjazovLy9leHRlcm5hbCBcInJ4anMvYWRkL29wZXJhdG9yL3N3aXRjaE1hcFwiIiwid2VicGFjazovLy8uL3NyYy9zY3JpcHRzL2hlYXRtYXAuanMiXSwibmFtZXMiOlsiTWFwIiwicmVxdWlyZSIsIm1vZHVsZSIsImV4cG9ydHMiLCJsZWFndWVzIiwibmFtZSIsImFjdGl2ZSIsInBlcm1hbmVudCIsImNsYXNzZXMiLCJwYXJlbnQiLCJjaGFyYWN0ZXJfY2xhc3MiLCJhc2NlbmRhbmN5IiwidHJlZXMiLCJ2ZXJzaW9uIiwiY3VycmVudF90cmVlIiwiZmlsZW5hbWUiLCJmaWxlUHJvcHMiLCJjdGltZU91dEZpbGUiLCJwYXRoIiwicm9vdCIsIm5vdyIsInRyZWVfaWRlbnQiLCJqb2luIiwibWF0Y2giLCJSZWdFeHAiLCJleGVjIiwiYmFzZW5hbWUiLCJ1bmRlZmluZWQiLCJjdGltZSIsInByb3BzIiwiTnVtYmVyIiwiTkVHQVRJVkVfSU5GSU5JVFkiLCJ1cGRhdGVSb3dzIiwiU0VMRUNUX0FOWSIsIlVQREFURV9ST1dTIiwiU0VMRUNUX1JPV1MiLCJzZWxlY3RSb3dzIiwiZGIiLCJkYXRhX2ZpbHRlciIsImRiX2N0aW1lIiwibGVhZ3VlIiwiZ2V0Iiwia2xhc3MiLCJmaWx0ZXIiLCJsYXN0X2FjdGl2ZSIsIiRndGUiLCJjbGFzcyIsImZ1bGZpbGwiLCJmaW5kIiwic29ydCIsInhwIiwibGltaXQiLCJza2lwIiwib2Zmc2V0IiwiZSIsInJvd3MiLCJyZWplY3QiLCJkaXNwYXRjaCIsImdldFN0YXRlIiwic3RhdGUiLCJ0eXBlIiwidGhlbiIsInBheWxvYWQiLCJmZXRjaFNvdXJjZXNGcm9tSnNvbiIsInNldFNvdXJjZXMiLCJzZXRTb3VyY2VzQXJyYXkiLCJzZXRBY3RpdmUiLCJnZXRTb3VyY2VCeUtleSIsIkZFVENIX1NPVVJDRVNfRlJPTV9KU09OIiwiU0VUX1NPVVJDRVMiLCJTRVRfQUNUSVZFIiwic291cmNlcyIsIm1hcCIsInNvdXJjZSIsImkiLCJrZXkiLCJnZXRJbiIsImluc2VydFJvd3MiLCJOZWRiIiwiQVdBSVRJTkdfUk9XUyIsIklOU0VSVF9ST1dTIiwiU0VUX0RCIiwiaW5zZXJ0IiwiY2FsY3VsYXRlSGVhdG1hcCIsImV4dHJlbWFDaGFuZ2UiLCJkYXRhVVJMQ2hhbmdlIiwiSGVhdG1hcFdvcmtlciIsIndvcmtlciIsIkNBTENVTEFURSIsIlNFVCIsIkVYVFJFTUFfQ0hBTkdFIiwiREFUQV9VUkxfQ0hBTkdFIiwiSEVBVE1BUF9SRUxFVkFOVF9DT05GIiwiY2FsY3VsYXRlSGVhdG1hcEZyb21TdGF0ZSIsInBhc3NpdmVfdHJlZV9jb25mIiwicGFzc2l2ZV90cmVlIiwiY29uZiIsInRvSlMiLCJ0ZXJtaW5hdGUiLCJvbm1lc3NhZ2UiLCJvbldvcmtlck1lc3NhZ2UiLCJwb3N0TWVzc2FnZSIsInRvU2VyaWFsaXplYWJsZSIsIm1lc3NhZ2UiLCJkYXRhIiwibGVnZW5kIiwiZGF0YV91cmwiLCJmZXRjaFRyZWUiLCJuZXdUcmVlIiwiRkVUQ0hfVFJFRSIsIk5FV19UUkVFIiwiaWQiLCJwYXNzaXZlU2tpbGxUcmVlRGF0YSIsInpvb21lZCIsInJlc2V0Wm9vbSIsImNvbW1hbmRFeGVjdXRlZCIsIlpPT01FRCIsIlJFU0VUX1pPT00iLCJDT01NQU5EX0VYRUNVVEVEIiwidHJhbnNmb3JtIiwicHVibGljUGF0aCIsImFjdGl2ZVNvdXJjZSIsImRhdGFTb3VyY2VQcm9wcyIsImRhdGFTb3VyY2VIdW1hbiIsImRlZmF1bHRTb3VyY2UiLCJrZXlTZXEiLCJmaXJzdCIsImZpbGVfcHJvcHMiLCJkYXRlIiwiRGF0ZSIsInRyZWUiLCJ0b0xvY2FsZURhdGVTdHJpbmciLCJ0b1N0cmluZyIsInNob3dUb29sdGlwIiwiU0hPV19UT09MVElQIiwieCIsInkiLCJub2RlX2lkIiwiZXZlbnQiLCJmcm9tSlMiLCJmb3JtTW9kZWxDaGFuZ2VkIiwiYWN0aW9uIiwibW9kZWwiLCJzdGFydHNXaXRoIiwiZGF0YV9zb3VyY2UiLCJpbml0aWFsIiwibG9hZGluZyIsIndpdGhNdXRhdGlvbnMiLCJzZXQiLCJhY3RpdmVGb3JTZWNvbmRzIiwic2x1Z2lmeSIsImRlZmF1bHRfaW5pdGlhbF9maWx0ZXIiLCJsYXN0X2FjdGl2ZV9iYXNlIiwiY3JlYXRlSW5pdGlhbEZpbHRlciIsIndpbmRvdyIsImxvY2F0aW9uIiwicGF0aG5hbWUiLCJwYXJhbXMiLCJpbml0aWFsX2ZpbHRlciIsImZvcm0iLCJpbml0aWFsX2hlYXRtYXBfY29uZiIsImJsdXIiLCJtaW5fb3BhY2l0eSIsIm1heF9vcGFjaXR5IiwicmFkaXVzIiwiaW5pdGlhbF90cmVlX2NvbmYiLCJncm91cF9vcmJpdHMiLCJzdGFydCIsInNjaW9uUGF0aE9mIiwibWFzdGVyeSIsIm5vZGVfc2NhbGUiLCJmb3JtcyIsImhlYXRtYXBfY29uZiIsInZhbHVlIiwiZ2V0TG9jYXRpb24iLCJ2ZXJib3NlX2FjdGlvbnMiLCJsb2dnZXIiLCJjb2xsYXBzZWQiLCJwcmVkaWNhdGUiLCJpbmNsdWRlcyIsIkNzdkRhdGFTb3VyY2UiLCJfYm9keSIsIl9yb3dzIiwiZmV0Y2giLCJib2R5IiwicGFyc2UiLCJyZXNwb25zZSIsInRleHQiLCJhdXRvX3BhcnNlIiwiY29sdW1ucyIsImRlbGltaXRlciIsImpzb24iLCJkYXRhU291cmNlIiwianNvbkZhY3RvcnkiLCJndWVzc1R5cGUiLCJsYWJlbCIsIkNTVl9TT1VSQ0UiLCJleHRlbnNpb24iLCJ0b0xvd2VyQ2FzZSIsIkVycm9yIiwib3JiaXRfcmFkaWkiLCJza2lsbHNfcGVyX29yYml0IiwidHlwZXMiLCJzaXplcyIsIlBhc3NpdmVOb2RlSW5zdGFuY2UiLCJQYXNzaXZlTm9kZSIsInRyZWVfZGF0YSIsImdyb3VwcyIsIlBhc3NpdmVUcmVlIiwiaW5pdEdyb3VwcyIsIm5vZGVzIiwiaW5pdE5vZGVzIiwiZWRnZXMiLCJpbml0RWRnZXMiLCJkaW1lbnNpb25zIiwiY2FsY0RpbWVuc2lvbiIsIm5ld193aWR0aCIsIndpZHRoIiwibmV3X2hlaWdodCIsImhlaWdodCIsIm90aGVyIiwidGFyZ2V0IiwibiIsImZvckVhY2giLCJub2RlIiwiYWRqYWNlbnQiLCJhZGpfaWQiLCJwdXNoIiwiUE9TSVRJVkVfSU5GSU5JVFkiLCJtYXhfcmFkaXVzIiwiTWF0aCIsIm1heCIsInZhbHVlcyIsImdyb3VwIiwibWluIiwic2VyaWFsaXplYWJsZSIsInN0b3JlIiwiYWN0aXZhdGUiLCJBQ1RJVkFURSIsInRhYl9rZXkiLCJnZXRTb3VyY2VzSW5kZXgiLCJhY3Rpb24kIiwib2ZUeXBlIiwibWVyZ2VNYXAiLCJnZXRKU09OIiwic2V0U291cmNlc0luZGV4Iiwic291cmNlSW5Mb2NhdGlvbiIsInF1ZXJ5IiwiaGVhdG1hcENhY2hlIiwic3dpdGNoTWFwIiwicm9vdF9lcGljIiwicG9lIiwidHJlZUpzb25VcmwiLCJvbGRfaWQiLCJuZXdfaWQiLCJ0cmVlX2lkIiwibWF0Y2hUcmVlVG9EYXRhIiwiY2FjaGVSb3dzIiwibWFwVG8iLCJzeW5jWm9vbSIsImVudHJ5U2VxIiwiZW50cnkiLCJwYXRobmFtZVRvQXBwUGFyYW1zIiwiZGVjb2RlVVJJIiwiYXBwUGF0aCIsInVybCIsImFwcCIsIlNUQVRFIiwiRU1QVFkiLCJSRUFEWSIsIkNBTENVTEFUSU5HIiwiaGFzaCIsImluc3RhbmNlIiwiZ3JhZGllbnQiLCJoZWF0bWFwIiwiaGVhdG1hcExhYmVsIiwiZ2V0UnVubmluZ1Rhc2tzIiwidGFza19zdGF0ZSIsInJ1bm5pbmciLCJ0YXNrIiwidHJlZVN0YXRzQXBwIiwibmF2X3RhYnMiLCJ0b29sdGlwIiwiem9vbSIsInJvdXRpbmciLCJpbml0aWFsX3N0YXRlIiwiUE9FIiwibG9jYXRpb25CZWZvcmVUcmFuc2l0aW9ucyIsIm1lcmdlIiwic2VsZWN0aW5nIiwiY29tbWFuZCIsImxlYWd1ZUZyb21OYW1lIiwibGVhZ3VlX25hbWUiLCJub3Rfc2V0X3ZhbHVlIiwiZmluZEtleSIsImNvbXBvc2VFbmhhbmNlcnMiLCJfX1JFRFVYX0RFVlRPT0xTX0VYVEVOU0lPTl9DT01QT1NFX18iLCJhY3Rpb25zQmxhY2tsaXN0IiwiZW5oYW5jZXIiLCJlcGljX21pZGRsZXdhcmUiLCJtaWRkbGV3YXJlcyIsInByb2Nlc3MiLCJlbnYiLCJOT0RFX0VOViIsIm1pZGRsZXdhcmUiLCJwcmVsb2FkIiwidHJhbnNmb3JtRXF1YWwiLCJicm93c2VyVHJhbnNmb3JtIiwidHJhbnNmb3JtVG9JbW11dGFibGUiLCJpbW11dGFibGVUb1RyYW5zZm9ybSIsInQxIiwidDIiLCJrIiwidHJhbnNsYXRpb24iLCJzY2FsZSIsInRyYW5zbGF0ZSIsIkFic3RyYWN0RGF0YVNvdXJjZSIsInNlbGYiLCJ0YXUiLCJQSSIsImdyb3VwX2lkIiwiZG4iLCJvIiwia3MiLCJtIiwibm90IiwiYXNjZW5kYW5jeU5hbWUiLCJpc0pld2VsU29ja2V0Iiwic3BjIiwibGVuZ3RoIiwidG9VcHBlckNhc2UiLCJzbGljZSIsIm91dCIsInNvbWUiLCJ0Iiwic2QiLCJnIiwib3JiaXQiLCJvaWR4IiwiY29zIiwiYW5nbGUiLCJzaW4iLCJQb2VUcmVlIiwiUGFzc2l2ZVRyZWVDb25mIiwiY29uZl9wcm9wcyIsInNjaW9uUGF0aE9mRWRnZSIsImRvbmUiLCJzdWJzY3JpYmUiLCJjb25zb2xlIiwibG9nIl0sIm1hcHBpbmdzIjoiOztBQUFBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7OztBQUdBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBLG1EQUEyQyxjQUFjOztBQUV6RDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLGFBQUs7QUFDTDtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBLG1DQUEyQiwwQkFBMEIsRUFBRTtBQUN2RCx5Q0FBaUMsZUFBZTtBQUNoRDtBQUNBO0FBQ0E7O0FBRUE7QUFDQSw4REFBc0QsK0RBQStEOztBQUVySDtBQUNBOztBQUVBO0FBQ0E7Ozs7Ozs7QUNoRUEsc0M7Ozs7OztBQ0FBLGlDOzs7Ozs7QUNBQSwrRDs7Ozs7Ozs7OztBQ0FBLElBQU1BLE1BQU0sbUJBQUFDLENBQVEsQ0FBUixFQUFxQkQsR0FBakM7O0FBRUE7QUFDQTs7O0FBR0FFLE9BQU9DLE9BQVAsR0FBaUI7QUFDZjtBQUNBQyxXQUFTSixJQUFJLENBQ1gsQ0FBQyxHQUFELEVBQU0sRUFBRUssTUFBTSxRQUFSLEVBQWtCQyxRQUFRLEtBQTFCLEVBQWlDQyxXQUFXLEtBQTVDLEVBQU4sQ0FEVyxFQUVYLENBQUMsR0FBRCxFQUFNLEVBQUVGLE1BQU0saUJBQVIsRUFBMkJDLFFBQVEsS0FBbkMsRUFBMENDLFdBQVcsS0FB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QUFLQSxLQUFMLENBQVc2SSxVQUFuQjtBQUNEOzs7c0NBNkR3QmlFLGEsRUFBZTtBQUN0QyxhQUFPLElBQUk0RyxlQUFKLENBQW9CNUcsY0FBYzlNLEtBQWxDLENBQVA7QUFDRDs7Ozs7a0JBR1kwVCxlOzs7Ozs7OztBQzNGZjtBQUNBO0FBQ0EsRTs7Ozs7O0FDRkEsZ0U7Ozs7OztBQ0FBLDBFOzs7Ozs7QUNBQSw4RDs7Ozs7O0FDQUEsMkQ7Ozs7OztBQ0FBLDRFOzs7Ozs7O0FDQUEsc0M7Ozs7OztBQ0FBLHVEOzs7Ozs7QUNBQSx5Qzs7Ozs7O0FDQUEsNEM7Ozs7OztBQ0FBLHlDOzs7Ozs7QUNBQSx3Qzs7Ozs7O0FDQUEsb0Q7Ozs7OztBQ0FBLHdEOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQ0FBOzs7Ozs7QUFFQSxJQUFNRyxPQUFPLHNCQUFZLFVBQUMzUyxPQUFELEVBQVVTLE1BQVYsRUFBcUI7QUFDNUMsa0JBQU1tUyxTQUFOLENBQWdCLFlBQU07QUFDcEJDLFlBQVFDLEdBQVIsQ0FBWSxnQkFBTW5TLFFBQU4sR0FBaUJ1QyxJQUFqQixFQUFaO0FBQ0QsR0FGRDtBQUdELENBSlksQ0FBYjs7QUFNQSwyREFBQztBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxpQkFDT3lQLElBRFA7O0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsQ0FBRCxLIiwiZmlsZSI6ImhlYXRtYXAuanMiLCJzb3VyY2VzQ29udGVudCI6WyIgXHQvLyBUaGUgbW9kdWxlIGNhY2hlXG4gXHR2YXIgaW5zdGFsbGVkTW9kdWxlcyA9IHt9O1xuXG4gXHQvLyBUaGUgcmVxdWlyZSBmdW5jdGlvblxuIFx0ZnVuY3Rpb24gX193ZWJwYWNrX3JlcXVpcmVfXyhtb2R1bGVJZCkge1xuXG4gXHRcdC8vIENoZWNrIGlmIG1vZHVsZSBpcyBpbiBjYWNoZVxuIFx0XHRpZihpbnN0YWxsZWRNb2R1bGVzW21vZHVsZUlkXSlcbiBcdFx0XHRyZXR1cm4gaW5zdGFsbGVkTW9kdWxlc1ttb2R1bGVJZF0uZXhwb3J0cztcblxuIFx0XHQvLyBDcmVhdGUgYSBuZXcgbW9kdWxlIChhbmQgcHV0IGl0IGludG8gdGhlIGNhY2hlKVxuIFx0XHR2YXIgbW9kdWxlID0gaW5zdGFsbGVkTW9kdWxlc1ttb2R1bGVJZF0gPSB7XG4gXHRcdFx0aTogbW9kdWxlSWQsXG4gXHRcdFx0bDogZmFsc2UsXG4gXHRcdFx0ZXhwb3J0czoge31cbiBcdFx0fTtcblxuIFx0XHQvLyBFeGVjdXRlIHRoZSBtb2R1bGUgZnVuY3Rpb25cbiBcdFx0bW9kdWxlc1ttb2R1bGVJZF0uY2FsbChtb2R1bGUuZXhwb3J0cywgbW9kdWxlLCBtb2R1bGUuZXhwb3J0cywgX193ZWJwYWNrX3JlcXVpcmVfXyk7XG5cbiBcdFx0Ly8gRmxhZyB0aGUgbW9kdWxlIGFzIGxvYWRlZFxuIFx0XHRtb2R1bGUubCA9IHRydWU7XG5cbiBcdFx0Ly8gUmV0dXJuIHRoZSBleHBvcnRzIG9mIHRoZSBtb2R1bGVcbiBcdFx0cmV0dXJuIG1vZHVsZS5leHBvcnRzO1xuIFx0fVxuXG5cbiBcdC8vIGV4cG9zZSB0aGUgbW9kdWxlcyBvYmplY3QgKF9fd2VicGFja19tb2R1bGVzX18pXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLm0gPSBtb2R1bGVzO1xuXG4gXHQvLyBleHBvc2UgdGhlIG1vZHVsZSBjYWNoZVxuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5jID0gaW5zdGFsbGVkTW9kdWxlcztcblxuIFx0Ly8gaWRlbnRpdHkgZnVuY3Rpb24gZm9yIGNhbGxpbmcgaGFybW9ueSBpbXBvcnRzIHdpdGggdGhlIGNvcnJlY3QgY29udGV4dFxuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5pID0gZnVuY3Rpb24odmFsdWUpIHsgcmV0dXJuIHZhbHVlOyB9O1xuXG4gXHQvLyBkZWZpbmUgZ2V0dGVyIGZ1bmN0aW9uIGZvciBoYXJtb255IGV4cG9ydHNcbiBcdF9fd2VicGFja19yZXF1aXJlX18uZCA9IGZ1bmN0aW9uKGV4cG9ydHMsIG5hbWUsIGdldHRlcikge1xuIFx0XHRpZighX193ZWJwYWNrX3JlcXVpcmVfXy5vKGV4cG9ydHMsIG5hbWUpKSB7XG4gXHRcdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIG5hbWUsIHtcbiBcdFx0XHRcdGNvbmZpZ3VyYWJsZTogZmFsc2UsXG4gXHRcdFx0XHRlbnVtZXJhYmxlOiB0cnVlLFxuIFx0XHRcdFx0Z2V0OiBnZXR0ZXJcbiBcdFx0XHR9KTtcbiBcdFx0fVxuIFx0fTtcblxuIFx0Ly8gZ2V0RGVmYXVsdEV4cG9ydCBmdW5jdGlvbiBmb3IgY29tcGF0aWJpbGl0eSB3aXRoIG5vbi1oYXJtb255IG1vZHVsZXNcbiBcdF9fd2VicGFja19yZXF1aXJlX18ubiA9IGZ1bmN0aW9uKG1vZHVsZSkge1xuIFx0XHR2YXIgZ2V0dGVyID0gbW9kdWxlICYmIG1vZHVsZS5fX2VzTW9kdWxlID9cbiBcdFx0XHRmdW5jdGlvbiBnZXREZWZhdWx0KCkgeyByZXR1cm4gbW9kdWxlWydkZWZhdWx0J107IH0gOlxuIFx0XHRcdGZ1bmN0aW9uIGdldE1vZHVsZUV4cG9ydHMoKSB7IHJldHVybiBtb2R1bGU7IH07XG4gXHRcdF9fd2VicGFja19yZXF1aXJlX18uZChnZXR0ZXIsICdhJywgZ2V0dGVyKTtcbiBcdFx0cmV0dXJuIGdldHRlcjtcbiBcdH07XG5cbiBcdC8vIE9iamVjdC5wcm90b3R5cGUuaGFzT3duUHJvcGVydHkuY2FsbFxuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5vID0gZnVuY3Rpb24ob2JqZWN0LCBwcm9wZXJ0eSkgeyByZXR1cm4gT2JqZWN0LnByb3RvdHlwZS5oYXNPd25Qcm9wZXJ0eS5jYWxsKG9iamVjdCwgcHJvcGVydHkpOyB9O1xuXG4gXHQvLyBfX3dlYnBhY2tfcHVibGljX3BhdGhfX1xuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5wID0gXCIuL1wiO1xuXG4gXHQvLyBMb2FkIGVudHJ5IG1vZHVsZSBhbmQgcmV0dXJuIGV4cG9ydHNcbiBcdHJldHVybiBfX3dlYnBhY2tfcmVxdWlyZV9fKF9fd2VicGFja19yZXF1aXJlX18ucyA9IDEwMyk7XG5cblxuXG4vLyBXRUJQQUNLIEZPT1RFUiAvL1xuLy8gd2VicGFjay9ib290c3RyYXAgYjBjNWNhOTQyZWI5ZTA0YTgzNmQiLCJtb2R1bGUuZXhwb3J0cyA9IHJlcXVpcmUoXCJpbW11dGFibGVcIik7XG5cblxuLy8vLy8vLy8vLy8vLy8vLy8vXG4vLyBXRUJQQUNLIEZPT1RFUlxuLy8gZXh0ZXJuYWwgXCJpbW11dGFibGVcIlxuLy8gbW9kdWxlIGlkID0gMFxuLy8gbW9kdWxlIGNodW5rcyA9IDAgMSAyIiwibW9kdWxlLmV4cG9ydHMgPSByZXF1aXJlKFwicGF0aFwiKTtcblxuXG4vLy8vLy8vLy8vLy8vLy8vLy9cbi8vIFdFQlBBQ0sgRk9PVEVSXG4vLyBleHRlcm5hbCBcInBhdGhcIlxuLy8gbW9kdWxlIGlkID0gMVxuLy8gbW9kdWxlIGNodW5rcyA9IDAgMSAyIDMgNCIsIm1vZHVsZS5leHBvcnRzID0gcmVxdWlyZShcImJhYmVsLXJ1bnRpbWUvY29yZS1qcy9nZXQtaXRlcmF0b3JcIik7XG5cblxuLy8vLy8vLy8vLy8vLy8vLy8vXG4vLyBXRUJQQUNLIEZPT1RFUlxuLy8gZXh0ZXJuYWwgXCJiYWJlbC1ydW50aW1lL2NvcmUtanMvZ2V0LWl0ZXJhdG9yXCJcbi8vIG1vZHVsZSBpZCA9IDJcbi8vIG1vZHVsZSBjaHVua3MgPSAwIDEgMiAzIiwiY29uc3QgTWFwID0gcmVxdWlyZSgnaW1tdXRhYmxlJykuTWFwO1xuXG4vKiBlc2xpbnQgbWF4LWxlbjogW1wiZXJyb3JcIiwgMTIwXSovXG4vKipcbiAqXG4gKi9cbm1vZHVsZS5leHBvcnRzID0ge1xuICAvLyBNYXA8c3RyaW5nLCBMZWFndWVQcm9wcz5cbiAgbGVhZ3VlczogTWFwKFtcbiAgICBbJzEnLCB7IG5hbWU6ICdCcmVhY2gnLCBhY3RpdmU6IGZhbHNlLCBwZXJtYW5lbnQ6IGZhbHNlIH1dLFxuICAgIFsnMicsIHsgbmFtZTogJ0hhcmRjb3JlIEJyZWFjaCcsIGFjdGl2ZTogZmFsc2UsIHBlcm1hbmVudDogZmFsc2UgfV0sXG4gICAgWyczJywgeyBuYW1lOiAnTGVnYWN5JywgYWN0aXZlOiB0cnVlLCBwZXJtYW5lbnQ6IGZhbHNlIH1dLFxuICAgIFsnNCcsIHsgbmFtZTogJ0hhcmRjb3JlIExlZ2FjeScsIGFjdGl2ZTogdHJ1ZSwgcGVybWFuZW50OiBmYWxzZSB9XSxcbiAgICBbJzUnLCB7IG5hbWU6ICdTdGFuZGFyZCcsIGFjdGl2ZTogZmFsc2UsIHBlcm1hbmVudDogZmFsc2UgfV0sXG4gICAgWyc2JywgeyBuYW1lOiAnU1NGIExlZ2FjeScsIGFjdGl2ZTogdHJ1ZSwgcGVybWFuZW50OiBmYWxzZSB9XSxcbiAgICBbJzcnLCB7IG5hbWU6ICdTU0YgSEMgTGVnYWN5JywgYWN0aXZlOiB0cnVlLCBwZXJtYW5lbnQ6IGZhbHNlIH1dLFxuICBdKSxcbiAgLy8gTWFwPHN0cmluZywgQ2xhc3NQcm9wcz5cbiAgY2xhc3NlczogTWFwKFtcbiAgICAvLyBuYW1lLCBwYXJlbnQgaXMgdGhlIHBhcmVudCBjbGFzcyBmb3IgYXNjZW5kYW5jaWVzIGllXG4gICAgLy8gY2hhcmFjdGVyX2NsYXNzLCBhc2NlbmRhbmN5IGlzIHVzZWQgZm9yIHVybCBnZW5lcmF0aW9uXG4gICAgWycxJywgeyBuYW1lOiAnTWFyYXVkZXInLCBwYXJlbnQ6IG51bGwsIGNoYXJhY3Rlcl9jbGFzczogMSwgYXNjZW5kYW5jeTogMCB9XSxcbiAgICBbJzInLCB7IG5hbWU6ICdUZW1wbGFyJywgcGFyZW50OiBudWxsLCBjaGFyYWN0ZXJfY2xhc3M6IDUsIGFzY2VuZGFuY3k6IDAgfV0sXG4gICAgWyczJywgeyBuYW1lOiAnV2l0Y2gnLCBwYXJlbnQ6IG51bGwsIGNoYXJhY3Rlcl9jbGFzczogMywgYXNjZW5kYW5jeTogMCB9XSxcbiAgICBbJzQnLCB7IG5hbWU6ICdTaGFkb3cnLCBwYXJlbnQ6IG51bGwsIGNoYXJhY3Rlcl9jbGFzczogNiwgYXNjZW5kYW5jeTogMCB9XSxcbiAgICBbJzUnLCB7IG5hbWU6ICdSYW5nZXInLCBwYXJlbnQ6IG51bGwsIGNoYXJhY3Rlcl9jbGFzczogMiwgYXNjZW5kYW5jeTogMCB9XSxcbiAgICBbJzYnLCB7IG5hbWU6ICdEdWVsaXN0JywgcGFyZW50OiBudWxsLCBjaGFyYWN0ZXJfY2xhc3M6IDQsIGFzY2VuZGFuY3k6IDAgfV0sXG4gICAgWyc3JywgeyBuYW1lOiAnU2Npb24nLCBwYXJlbnQ6IG51bGwsIGNoYXJhY3Rlcl9jbGFzczogNywgYXNjZW5kYW5jeTogMCB9XSxcbiAgICBbJzgnLCB7IG5hbWU6ICdCZXJzZXJrZXInLCBwYXJlbnQ6IDEsIGNoYXJhY3Rlcl9jbGFzczogMSwgYXNjZW5kYW5jeTogMiB9XSxcbiAgICBbJzknLCB7IG5hbWU6ICdDaGllZnRhaW4nLCBwYXJlbnQ6IDEsIGNoYXJhY3Rlcl9jbGFzczogMSwgYXNjZW5kYW5jeTogMyB9XSxcbiAgICBbJzEwJywgeyBuYW1lOiAnSnVnZ2VybmF1dCcsIHBhcmVudDogMSwgY2hhcmFjdGVyX2NsYXNzOiAxLCBhc2NlbmRhbmN5OiAxIH1dLFxuICAgIFsnMTEnLCB7IG5hbWU6ICdJbnF1aXNpdG9yJywgcGFyZW50OiAyLCBjaGFyYWN0ZXJfY2xhc3M6IDUsIGFzY2VuZGFuY3k6IDEgfV0sXG4gICAgWycxMicsIHsgbmFtZTogJ0d1YXJkaWFuJywgcGFyZW50OiAyLCBjaGFyYWN0ZXJfY2xhc3M6IDUsIGFzY2VuZGFuY3k6IDMgfV0sXG4gICAgWycxMycsIHsgbmFtZTogJ0hpZXJvcGhhbnQnLCBwYXJlbnQ6IDIsIGNoYXJhY3Rlcl9jbGFzczogNSwgYXNjZW5kYW5jeTogMiB9XSxcbiAgICBbJzE0JywgeyBuYW1lOiAnTmVjcm9tYW5jZXInLCBwYXJlbnQ6IDMsIGNoYXJhY3Rlcl9jbGFzczogMywgYXNjZW5kYW5jeTogMyB9XSxcbiAgICBbJzE1JywgeyBuYW1lOiAnT2NjdWx0aXN0JywgcGFyZW50OiAzLCBjaGFyYWN0ZXJfY2xhc3M6IDMsIGFzY2VuZGFuY3k6IDEgfV0sXG4gICAgWycxNicsIHsgbmFtZTogJ0VsZW1lbnRhbGlzdCcsIHBhcmVudDogMywgY2hhcmFjdGVyX2NsYXNzOiAzLCBhc2NlbmRhbmN5OiAyIH1dLFxuICAgIFsnMTcnLCB7IG5hbWU6ICdBc3Nhc3NpbicsIHBhcmVudDogNCwgY2hhcmFjdGVyX2NsYXNzOiA2LCBhc2NlbmRhbmN5OiAxIH1dLFxuICAgIFsnMTgnLCB7IG5hbWU6ICdTYWJvdGV1cicsIHBhcmVudDogNCwgY2hhcmFjdGVyX2NsYXNzOiA2LCBhc2NlbmRhbmN5OiAzIH1dLFxuICAgIFsnMTknLCB7IG5hbWU6ICdUcmlja3N0ZXInLCBwYXJlbnQ6IDQsIGNoYXJhY3Rlcl9jbGFzczogNiwgYXNjZW5kYW5jeTogMiB9XSxcbiAgICBbJzIwJywgeyBuYW1lOiAnRGVhZGV5ZScsIHBhcmVudDogNSwgY2hhcmFjdGVyX2NsYXNzOiAyLCBhc2NlbmRhbmN5OiAyIH1dLFxuICAgIFsnMjEnLCB7IG5hbWU6ICdSYWlkZXInLCBwYXJlbnQ6IDUsIGNoYXJhY3Rlcl9jbGFzczogMiwgYXNjZW5kYW5jeTogMSB9XSxcbiAgICBbJzIyJywgeyBuYW1lOiAnUGF0aGZpbmRlcicsIHBhcmVudDogNSwgY2hhcmFjdGVyX2NsYXNzOiAyLCBhc2NlbmRhbmN5OiAzIH1dLFxuICAgIFsnMjMnLCB7IG5hbWU6ICdTbGF5ZXInLCBwYXJlbnQ6IDYsIGNoYXJhY3Rlcl9jbGFzczogNCwgYXNjZW5kYW5jeTogMSB9XSxcbiAgICBbJzI0JywgeyBuYW1lOiAnR2xhZGlhdG9yJywgcGFyZW50OiA2LCBjaGFyYWN0ZXJfY2xhc3M6IDQsIGFzY2VuZGFuY3k6IDIgfV0sXG4gICAgWycyNScsIHsgbmFtZTogJ0NoYW1waW9uJywgcGFyZW50OiA2LCBjaGFyYWN0ZXJfY2xhc3M6IDQsIGFzY2VuZGFuY3k6IDMgfV0sXG4gICAgWycyNicsIHsgbmFtZTogJ0FzY2VuZGFudCcsIHBhcmVudDogNywgY2hhcmFjdGVyX2NsYXNzOiA3LCBhc2NlbmRhbmN5OiAxIH1dLFxuICBdKSxcbiAgdHJlZXM6IE1hcChbXG4gICAgLy8gZG9udCB1c2UgdW5kZXJzY29yZXMgaW4gdGhlIGlkZW50IG9yIGFkanVzdCByZWdleHAgdGhhdCByZWx5IG9uIGZvcm1hdFxuICAgIFsnMjUwJywgeyBuYW1lOiAnMi41LjAgQnJlYWNoJywgdmVyc2lvbjogNCB9XSxcbiAgICBbJzI2MCcsIHsgbmFtZTogJzIuNi4wIExlZ2FjeScsIHZlcnNpb246IDQgfV0sXG4gIF0pLFxuICBjdXJyZW50X3RyZWU6ICcyNjAnLFxufTtcblxuXG5cbi8vIFdFQlBBQ0sgRk9PVEVSIC8vXG4vLyAuL3NyYy9wb2UvZGF0YS5qcyIsIm1vZHVsZS5leHBvcnRzID0gcmVxdWlyZShcImJhYmVsLXJ1bnRpbWUvY29yZS1qcy9wcm9taXNlXCIpO1xuXG5cbi8vLy8vLy8vLy8vLy8vLy8vL1xuLy8gV0VCUEFDSyBGT09URVJcbi8vIGV4dGVybmFsIFwiYmFiZWwtcnVudGltZS9jb3JlLWpzL3Byb21pc2VcIlxuLy8gbW9kdWxlIGlkID0gNVxuLy8gbW9kdWxlIGNodW5rcyA9IDAgMyIsIm1vZHVsZS5leHBvcnRzID0gcmVxdWlyZShcImJhYmVsLXJ1bnRpbWUvY29yZS1qcy9qc29uL3N0cmluZ2lmeVwiKTtcblxuXG4vLy8vLy8vLy8vLy8vLy8vLy9cbi8vIFdFQlBBQ0sgRk9PVEVSXG4vLyBleHRlcm5hbCBcImJhYmVsLXJ1bnRpbWUvY29yZS1qcy9qc29uL3N0cmluZ2lmeVwiXG4vLyBtb2R1bGUgaWQgPSA2XG4vLyBtb2R1bGUgY2h1bmtzID0gMCAyIDQiLCJtb2R1bGUuZXhwb3J0cyA9IHJlcXVpcmUoXCJiYWJlbC1ydW50aW1lL2hlbHBlcnMvc2xpY2VkVG9BcnJheVwiKTtcblxuXG4vLy8vLy8vLy8vLy8vLy8vLy9cbi8vIFdFQlBBQ0sgRk9PVEVSXG4vLyBleHRlcm5hbCBcImJhYmVsLXJ1bnRpbWUvaGVscGVycy9zbGljZWRUb0FycmF5XCJcbi8vIG1vZHVsZSBpZCA9IDdcbi8vIG1vZHVsZSBjaHVua3MgPSAwIDEgNCIsIm1vZHVsZS5leHBvcnRzID0gcmVxdWlyZShcImJhYmVsLXJ1bnRpbWUvaGVscGVycy9hc3luY1RvR2VuZXJhdG9yXCIpO1xuXG5cbi8vLy8vLy8vLy8vLy8vLy8vL1xuLy8gV0VCUEFDSyBGT09URVJcbi8vIGV4dGVybmFsIFwiYmFiZWwtcnVudGltZS9oZWxwZXJzL2FzeW5jVG9HZW5lcmF0b3JcIlxuLy8gbW9kdWxlIGlkID0gOFxuLy8gbW9kdWxlIGNodW5rcyA9IDAgMyIsIm1vZHVsZS5leHBvcnRzID0gcmVxdWlyZShcImJhYmVsLXJ1bnRpbWUvcmVnZW5lcmF0b3JcIik7XG5cblxuLy8vLy8vLy8vLy8vLy8vLy8vXG4vLyBXRUJQQUNLIEZPT1RFUlxuLy8gZXh0ZXJuYWwgXCJiYWJlbC1ydW50aW1lL3JlZ2VuZXJhdG9yXCJcbi8vIG1vZHVsZSBpZCA9IDlcbi8vIG1vZHVsZSBjaHVua3MgPSAwIDMiLCJtb2R1bGUuZXhwb3J0cyA9IHJlcXVpcmUoXCJiYWJlbC1ydW50aW1lL2hlbHBlcnMvY2xhc3NDYWxsQ2hlY2tcIik7XG5cblxuLy8vLy8vLy8vLy8vLy8vLy8vXG4vLyBXRUJQQUNLIEZPT1RFUlxuLy8gZXh0ZXJuYWwgXCJiYWJlbC1ydW50aW1lL2hlbHBlcnMvY2xhc3NDYWxsQ2hlY2tcIlxuLy8gbW9kdWxlIGlkID0gMTBcbi8vIG1vZHVsZSBjaHVua3MgPSAwIiwibW9kdWxlLmV4cG9ydHMgPSByZXF1aXJlKFwiYmFiZWwtcnVudGltZS9oZWxwZXJzL2NyZWF0ZUNsYXNzXCIpO1xuXG5cbi8vLy8vLy8vLy8vLy8vLy8vL1xuLy8gV0VCUEFDSyBGT09URVJcbi8vIGV4dGVybmFsIFwiYmFiZWwtcnVudGltZS9oZWxwZXJzL2NyZWF0ZUNsYXNzXCJcbi8vIG1vZHVsZSBpZCA9IDExXG4vLyBtb2R1bGUgY2h1bmtzID0gMCIsImltcG9ydCAqIGFzIHBhdGggZnJvbSAncGF0aCc7XG5cbi8qKlxuICogZ2VuZXJhdGVzIHRoZSBmaWxlbmFtZSBmb3IgdGhlIGNzdiBvdXRwdXRcbiAqIEBwYXJhbSB7c3RyaW5nfSByb290XG4gKiBAcGFyYW0ge251bWJlcn0gbm93XG4gKiBAcGFyYW0ge3N0cmluZ30gdHJlZV9pZGVudFxuICogQHJldHVybiB7Kn1cbiAqL1xuZXhwb3J0IGZ1bmN0aW9uIGZpbGVuYW1lKHJvb3QsIG5vdywgdHJlZV9pZGVudCkge1xuICAvLyBhZGp1c3QgZ2l0aWdub3JlIGFjY29yZGluZ2x5XG4gIHJldHVybiBwYXRoLmpvaW4ocm9vdCwgYCR7bm93fV8ke3RyZWVfaWRlbnR9X2dldF90cmVlcy5jc3ZgKTtcbn07XG5cbi8qKlxuICogQHBhcmFtIHtzdHJpbmd9IGZpbGVuYW1lXG4gKiBAcmV0dXJuIHtPYmplY3R9IHJldmVyc2Ugb2Ygb3V0RmlsZW5hbWVcbiAqL1xuZXhwb3J0IGZ1bmN0aW9uIGZpbGVQcm9wcyhmaWxlbmFtZT0nJykge1xuICBjb25zdCBtYXRjaCA9IG5ldyBSZWdFeHAoYF4oW15fXSspXyhbXl9dKylfZ2V0X3RyZWVzXFwuY3N2JGApXG4gICAgLmV4ZWMocGF0aC5iYXNlbmFtZShmaWxlbmFtZSkpO1xuXG4gIGlmIChtYXRjaCA9PT0gbnVsbCkge1xuICAgIHJldHVybiB1bmRlZmluZWQ7XG4gIH0gZWxzZSB7XG4gICAgcmV0dXJuIHtcbiAgICAgIGN0aW1lOiArbWF0Y2hbMV0sXG4gICAgICB0cmVlX2lkZW50OiBtYXRjaFsyXSxcbiAgICB9O1xuICB9XG59O1xuXG4vKipcbiAqIGV4dHJhY3RzIHRoZSBjcmVhdGlvbiBkYXRlIGZyb20gYSBmaWxlbmFtZSB3aGljaFxuICogc2hvdWxkIGJlIGEganMgRGF0ZSBhdCB0aGUgc3RhcnQgb2YgdGhlIGJhc2VuYW1lXG4gKiBAcGFyYW0ge3N0cmluZ30gZmlsZW5hbWVcbiAqIEByZXR1cm4ge251bWJlcn1cbiAqL1xuZXhwb3J0IGZ1bmN0aW9uIGN0aW1lT3V0RmlsZShmaWxlbmFtZSkge1xuICBjb25zdCBwcm9wcyA9IGZpbGVQcm9wcyhmaWxlbmFtZSk7XG5cbiAgaWYgKHByb3BzID09PSB1bmRlZmluZWQpIHtcbiAgICByZXR1cm4gTnVtYmVyLk5FR0FUSVZFX0lORklOSVRZO1xuICB9IGVsc2Uge1xuICAgIHJldHVybiBwcm9wcy5jdGltZTtcbiAgfVxufTtcblxuXG5cbi8vIFdFQlBBQ0sgRk9PVEVSIC8vXG4vLyAuL3NyYy9zY3JpcHRzL2xpYi90cmVlc1RvQ3N2RmlsZS5qcyIsIm1vZHVsZS5leHBvcnRzID0gcmVxdWlyZShcImJhYmVsLXJ1bnRpbWUvY29yZS1qcy9tYXBcIik7XG5cblxuLy8vLy8vLy8vLy8vLy8vLy8vXG4vLyBXRUJQQUNLIEZPT1RFUlxuLy8gZXh0ZXJuYWwgXCJiYWJlbC1ydW50aW1lL2NvcmUtanMvbWFwXCJcbi8vIG1vZHVsZSBpZCA9IDEzXG4vLyBtb2R1bGUgY2h1bmtzID0gMCAxIiwibW9kdWxlLmV4cG9ydHMgPSByZXF1aXJlKFwiYmFiZWwtcnVudGltZS9oZWxwZXJzL3RvQ29uc3VtYWJsZUFycmF5XCIpO1xuXG5cbi8vLy8vLy8vLy8vLy8vLy8vL1xuLy8gV0VCUEFDSyBGT09URVJcbi8vIGV4dGVybmFsIFwiYmFiZWwtcnVudGltZS9oZWxwZXJzL3RvQ29uc3VtYWJsZUFycmF5XCJcbi8vIG1vZHVsZSBpZCA9IDE0XG4vLyBtb2R1bGUgY2h1bmtzID0gMCAxIiwiaW1wb3J0IHsgYWN0aXZlRm9yU2Vjb25kcyB9IGZyb20gJy4uL3JlZHVjZXJzL2Zvcm1zJztcbmltcG9ydCB7IGN0aW1lIH0gZnJvbSAnLi4vcmVkdWNlcnMvZGF0YSc7XG5pbXBvcnQgeyBhY3RpdmVTb3VyY2UgfSBmcm9tICcuLi9zZWxlY3RvcnMvZGF0YSc7XG5cbmV4cG9ydCBjb25zdCBTRUxFQ1RfQU5ZID0gJ1JPV1MvU0VMRUNUX0FOWSc7XG5cbi8vIGFjdGlvbiB0eXBlc1xuZXhwb3J0IGNvbnN0IFVQREFURV9ST1dTID0gJ1JPV1MvVVBEQVRFJztcbmV4cG9ydCBjb25zdCBTRUxFQ1RfUk9XUyA9ICdST1dTL1NFTEVDVCc7XG5cbi8qKlxuICogcHJvbWlzZXMgZXhlYyBvZiBhIGRhdGEgY3Vyc29yIHdpdGggdGhlIGRhdGEgZmlsdGVyIGFwcGxpZWRcbiAqIEBwYXJhbSB7TmVkYn0gZGJcbiAqIEBwYXJhbSB7T2JqZWN0fSBkYXRhX2ZpbHRlclxuICogQHBhcmFtIHtudW1iZXJ9IGRiX2N0aW1lIHRoZSB0aW1lIHRoZSB0YWJsZSB3YXMgY3JlYXRlZFxuICogQHJldHVybiB7UHJvbWlzZX0gdGhlIHtPYmplY3RbXX0gcm93c1xuICovXG5mdW5jdGlvbiBzZWxlY3RSb3dzKGRiLCBkYXRhX2ZpbHRlciwgZGJfY3RpbWU9MCkge1xuICBjb25zdCBsZWFndWUgPSBkYXRhX2ZpbHRlci5nZXQoJ2xlYWd1ZScpO1xuICBjb25zdCBrbGFzcyA9IGRhdGFfZmlsdGVyLmdldCgna2xhc3MnKTtcblxuICBjb25zdCBmaWx0ZXIgPSB7XG4gICAgLy8gZGIgdXNlcyBvbGQgbGFzdF9hY3RpdmUgdmFsdWVzXG4gICAgLy8gdGhlcmVmb3IgZGJfY3RpbWUgPj0gbGFzdF9hY3RpdmVcbiAgICBsYXN0X2FjdGl2ZToge1xuICAgICAgJGd0ZTogZGJfY3RpbWUgLSBhY3RpdmVGb3JTZWNvbmRzKGRhdGFfZmlsdGVyKSAqIDEwMDAsXG4gICAgfSxcbiAgfTtcblxuICBpZiAobGVhZ3VlICE9IFNFTEVDVF9BTlkpIHtcbiAgICBmaWx0ZXIubGVhZ3VlID0gK2xlYWd1ZTtcbiAgfVxuXG4gIGlmIChrbGFzcyAhPSBTRUxFQ1RfQU5ZKSB7XG4gICAgZmlsdGVyLmNsYXNzID0gK2tsYXNzO1xuICB9XG5cbiAgcmV0dXJuIG5ldyBQcm9taXNlKChmdWxmaWxsKSA9PiB7XG4gICAgZGIuZmluZChmaWx0ZXIpXG4gICAgICAuc29ydCh7IHhwOiAtMSB9KVxuICAgICAgLmxpbWl0KCtkYXRhX2ZpbHRlci5saW1pdClcbiAgICAgIC5za2lwKCtkYXRhX2ZpbHRlci5vZmZzZXQpXG4gICAgICAuZXhlYygoZSwgcm93cykgPT4ge1xuICAgICAgICBpZiAoZSkgcmVqZWN0KGUpO1xuICAgICAgICBlbHNlIGZ1bGZpbGwocm93cyk7XG4gICAgICB9KTtcbiAgfSk7XG59O1xuXG4vKipcbiAqIHVwZGF0ZXMgdGhlIHJvd3MgZnJvbSB0aGUgY3VycmVudCBzdG9yZSBhbmQgZGF0YV9maWx0ZXIgc3RhdGVcbiAqIEByZXR1cm4ge2Z1bmN0aW9ufSByZWR1eC10aHVua1xuICovXG5leHBvcnQgZnVuY3Rpb24gdXBkYXRlUm93cygpIHtcbiAgcmV0dXJuIChkaXNwYXRjaCwgZ2V0U3RhdGUpID0+IHtcbiAgICBjb25zdCBzdGF0ZSA9IGdldFN0YXRlKCk7XG4gICAgY29uc3QgZGIgPSBzdGF0ZS5nZXQoJ2RiJyk7XG4gICAgY29uc3QgZGF0YV9maWx0ZXIgPSBzdGF0ZS5nZXQoJ2RhdGFfZmlsdGVyJyk7XG4gICAgY29uc3QgZGJfY3RpbWUgPSBjdGltZShhY3RpdmVTb3VyY2Uoc3RhdGUuZ2V0KCdkYXRhJykpKTtcblxuICAgIGRpc3BhdGNoKHtcbiAgICAgIHR5cGU6IFNFTEVDVF9ST1dTLFxuICAgIH0pO1xuXG4gICAgcmV0dXJuIHNlbGVjdFJvd3MoZGIuZ2V0KCdkYicpLCBkYXRhX2ZpbHRlciwgZGJfY3RpbWUpLnRoZW4oKHJvd3MpID0+IHtcbiAgICAgIGRpc3BhdGNoKHtcbiAgICAgICAgdHlwZTogVVBEQVRFX1JPV1MsXG4gICAgICAgIHBheWxvYWQ6IHsgcm93cyB9LFxuICAgICAgfSk7XG4gICAgfSk7XG4gIH07XG59O1xuXG5cblxuLy8gV0VCUEFDSyBGT09URVIgLy9cbi8vIC4vc3JjL2Jyb3dzZXIvYWN0aW9ucy9yb3dzLmpzIiwibW9kdWxlLmV4cG9ydHMgPSByZXF1aXJlKFwicnhqcy9hZGQvb3BlcmF0b3IvbWFwXCIpO1xuXG5cbi8vLy8vLy8vLy8vLy8vLy8vL1xuLy8gV0VCUEFDSyBGT09URVJcbi8vIGV4dGVybmFsIFwicnhqcy9hZGQvb3BlcmF0b3IvbWFwXCJcbi8vIG1vZHVsZSBpZCA9IDE2XG4vLyBtb2R1bGUgY2h1bmtzID0gMCIsIm1vZHVsZS5leHBvcnRzID0gcmVxdWlyZShcImJhYmVsLXJ1bnRpbWUvY29yZS1qcy9vYmplY3QvYXNzaWduXCIpO1xuXG5cbi8vLy8vLy8vLy8vLy8vLy8vL1xuLy8gV0VCUEFDSyBGT09URVJcbi8vIGV4dGVybmFsIFwiYmFiZWwtcnVudGltZS9jb3JlLWpzL29iamVjdC9hc3NpZ25cIlxuLy8gbW9kdWxlIGlkID0gMTdcbi8vIG1vZHVsZSBjaHVua3MgPSAwIDEiLCJpbXBvcnQgeyBpbnNlcnRSb3dzIH0gZnJvbSAnLi9kYic7XG5pbXBvcnQgeyBwdWJsaWNQYXRoIH0gZnJvbSAnLi4vaGVscGVycy91cmwnO1xuXG5leHBvcnQgY29uc3QgRkVUQ0hfU09VUkNFU19GUk9NX0pTT04gPSAnU09VUkNFUy9GUk9NX0pTT04nO1xuZXhwb3J0IGNvbnN0IFNFVF9TT1VSQ0VTID0gJ1NPVVJDRVMvU0VUJztcbmV4cG9ydCBjb25zdCBTRVRfQUNUSVZFID0gJ1NPVVJDRVMvQUNUSVZBVEUnO1xuXG4vKipcbiAqIHRodW5rIHRvIGdlbmVyYXRlIHNvdXJjZXMgZnJvbSBqc29uIGZpbGVcbiAqXG4gKiBAcGFyYW0ge3N0cmluZ30gZmlsZW5hbWVcbiAqIEByZXR1cm4ge2Z1bmN0aW9ufSB0aHVua1xuICovXG5leHBvcnQgZnVuY3Rpb24gZmV0Y2hTb3VyY2VzRnJvbUpzb24oZmlsZW5hbWUpIHtcbiAgcmV0dXJuIHtcbiAgICB0eXBlOiBGRVRDSF9TT1VSQ0VTX0ZST01fSlNPTixcbiAgICBwYXlsb2FkOiBwdWJsaWNQYXRoKGZpbGVuYW1lKSxcbiAgfTtcbn07XG5cbi8qKlxuICogYWN0aW9uLWNyZWF0b3IgdG8gc2V0IHNvdXJjZXNcbiAqXG4gKiBAcGFyYW0ge01hcH0gc291cmNlc1xuICogQHJldHVybiB7T2JqZWN0fSBhY3Rpb25cbiAqL1xuZXhwb3J0IGZ1bmN0aW9uIHNldFNvdXJjZXMoc291cmNlcykge1xuICByZXR1cm4ge1xuICAgIHR5cGU6IFNFVF9TT1VSQ0VTLFxuICAgIHBheWxvYWQ6IHsgc291cmNlcyB9LFxuICB9O1xufVxuXG4vKipcbiAqIHNldFNvdXJjZXMgd2l0aCBhIG1hcCBmcm9tIGFycmF5IChpID0+IHZhbHVlKVxuICogQHBhcmFtIHtBcnJheX0gc291cmNlc1xuICogQHJldHVybiB7T2JqZWN0fSBhY3Rpb25cbiAqL1xuZXhwb3J0IGZ1bmN0aW9uIHNldFNvdXJjZXNBcnJheShzb3VyY2VzKSB7XG4gIHJldHVybiBzZXRTb3VyY2VzKG5ldyBNYXAoc291cmNlcy5tYXAoKHNvdXJjZSwgaSkgPT4gW2kgKyAnJywgc291cmNlXSkpKTtcbn07XG5cbi8qKlxuICogc2V0cyB0aGUgYWN0aXZlIGRhdGEgc291cmNlIGFuZCB0cmlnZ2VycyB0aGUgaW5zZXJ0IG9mIHRoZSByb3dzXG4gKiBvZiB0aGUgc291cmNlXG4gKiBAcGFyYW0ge3N0cmluZ30gYWN0aXZlIGtleSBpbiBkYXRhLnNvdXJjZXMgbWFwXG4gKiBAcmV0dXJuIHt0aHVua31cbiAqL1xuZXhwb3J0IGZ1bmN0aW9uIHNldEFjdGl2ZShhY3RpdmUpIHtcbiAgcmV0dXJuIChkaXNwYXRjaCwgZ2V0U3RhdGUpID0+IHtcbiAgICBkaXNwYXRjaCh7XG4gICAgICB0eXBlOiBTRVRfQUNUSVZFLFxuICAgICAgcGF5bG9hZDogeyBhY3RpdmUgfSxcbiAgICB9KTtcblxuICAgIGNvbnN0IHNvdXJjZSA9IGdldFNvdXJjZUJ5S2V5KGdldFN0YXRlKCksIGFjdGl2ZSk7XG5cbiAgICBkaXNwYXRjaChpbnNlcnRSb3dzKHNvdXJjZS5yb3dzKSk7XG4gIH07XG59XG5cbi8qKlxuICogc2VsZWN0cyB0aGUgc291cmNlIGJ5IHRoZSBnaXZlbiBrZXlcbiAqIEBwYXJhbSB7TWFwfSBzdGF0ZSByZWR1eCBzdGF0ZVxuICogQHBhcmFtIHtBbnl9IGtleVxuICogQHJldHVybiB7QWJzdHJhY3REYXRhU291cmNlfVxuICovXG5leHBvcnQgZnVuY3Rpb24gZ2V0U291cmNlQnlLZXkoc3RhdGUsIGtleSkge1xuICByZXR1cm4gc3RhdGUuZ2V0SW4oWydkYXRhJywgJ3NvdXJjZXMnLCBrZXldKTtcbn07XG5cblxuXG4vLyBXRUJQQUNLIEZPT1RFUiAvL1xuLy8gLi9zcmMvYnJvd3Nlci9hY3Rpb25zL2RhdGEuanMiLCJjb25zdCBOZWRiID0gcmVxdWlyZSgnbmVkYicpO1xuXG5leHBvcnQgY29uc3QgQVdBSVRJTkdfUk9XUyA9ICdEQi9BV0FJVElOR19ST1dTJzsgLy8gc3RlcCAxXG5leHBvcnQgY29uc3QgSU5TRVJUX1JPV1MgPSAnREIvSU5TRVJUJzsgLy8gc3RlcCAyXG5leHBvcnQgY29uc3QgU0VUX0RCID0gJ0RCL1NFVCc7IC8vIHN0ZXAgM1xuXG4vKipcbiAqIGNyZWF0ZXMgYSBuZXcgZGIgYW5kIGluc2VydHMgdGhlIHJvd3NcbiAqIEBwYXJhbSB7UHJvbWlzZX0gcm93cyBqc29uIHJlcHJlc2VudGluZyBhIHRhYmxlXG4gKiBAcmV0dXJuIHtQcm9taXNlfSB0aGUge05lZGJ9XG4gKi9cbmV4cG9ydCBmdW5jdGlvbiBpbnNlcnRSb3dzKHJvd3MpIHtcbiAgcmV0dXJuIChkaXNwYXRjaCkgPT4ge1xuICAgIGRpc3BhdGNoKHsgdHlwZTogQVdBSVRJTkdfUk9XUyB9KTtcblxuICAgIHJldHVybiByb3dzLnRoZW4oKHJvd3MpID0+IHtcbiAgICAgIHJldHVybiBuZXcgUHJvbWlzZSgoZnVsZmlsbCwgcmVqZWN0KSA9PiB7XG4gICAgICAgIGNvbnN0IGRiID0gbmV3IE5lZGIoKTtcblxuICAgICAgICBkaXNwYXRjaCh7XG4gICAgICAgICAgdHlwZTogSU5TRVJUX1JPV1MsXG4gICAgICAgIH0pO1xuXG4gICAgICAgIGRiLmluc2VydChyb3dzLCAoZSkgPT4ge1xuICAgICAgICAgIGlmIChlKSByZWplY3QoZSk7XG4gICAgICAgICAgZWxzZSBmdWxmaWxsKGRiKTtcbiAgICAgICAgfSk7XG4gICAgICB9KTtcbiAgICB9KS50aGVuKChkYikgPT4ge1xuICAgICAgcmV0dXJuIGRpc3BhdGNoKHtcbiAgICAgICAgdHlwZTogU0VUX0RCLFxuICAgICAgICBwYXlsb2FkOiB7IGRiIH0sXG4gICAgICB9KTtcbiAgICB9KTtcbiAgfTtcbn1cblxuXG5cbi8vIFdFQlBBQ0sgRk9PVEVSIC8vXG4vLyAuL3NyYy9icm93c2VyL2FjdGlvbnMvZGIuanMiLCJpbXBvcnQgUGFzc2l2ZVRyZWVjb25mIGZyb20gJy4uLy4uL3BvZS9QYXNzaXZlVHJlZUNvbmYnO1xuXG5jb25zdCBIZWF0bWFwV29ya2VyID0gcmVxdWlyZSgnd29ya2VyLWxvYWRlciEuLi93b3JrZXJzL2hlYXRtYXAuanMnKTtcbmxldCB3b3JrZXIgPSBuZXcgSGVhdG1hcFdvcmtlcigpO1xuXG5leHBvcnQgY29uc3QgQ0FMQ1VMQVRFID0gJ0hFQVRNQVAvQ0FMQ1VMQVRFX0RBVEEnO1xuZXhwb3J0IGNvbnN0IFNFVCA9ICdIRUFUTUFQL1NFVF9EQVRBJztcbmV4cG9ydCBjb25zdCBFWFRSRU1BX0NIQU5HRSA9ICdIRUFUTUFQL0VYVFJFTUFfQ0hBTkdFJztcbmV4cG9ydCBjb25zdCBEQVRBX1VSTF9DSEFOR0UgPSAnSEVBVE1BUC9EQVRBX1VSTF9DSEFOR0UnO1xuXG4vLyBycmYgZm9ybSBtb2RlbHMgdGhhdCBhcmUgcmVsZXZhbnQgdG8gdGhlIGhlYXRtYXAgY2FsY3VsYXRpb25cbi8vIGluIGNhbGN1bGF0ZUhlYXRtYXAoKVxuZXhwb3J0IGNvbnN0IEhFQVRNQVBfUkVMRVZBTlRfQ09ORiA9IFtcbiAgJ3Bhc3NpdmVfdHJlZV9jb25mLmdyb3VwX29yYml0cycsXG4gICdwYXNzaXZlX3RyZWVfY29uZi5zdGFydCcsXG4gICdwYXNzaXZlX3RyZWVfY29uZi5zY2lvblBhdGhPZicsXG4gICdwYXNzaXZlX3RyZWVfY29uZi5hc2NlbmRhbmN5JyxcbiAgJ3Bhc3NpdmVfdHJlZV9jb25mLm1hc3RlcnknLFxuXTtcblxuLyoqXG4gKiBAcGFyYW0ge0ltbXV0YWJsZS5NYXB9IHN0YXRlIHJlZHV4IHN0YXRlIHRyZWVcbiAqIEByZXR1cm4ge09iamVjdH0gQHNlZSB7Y2FsY3VsYXRlSGVhdG1hcH1cbiAqL1xuZXhwb3J0IGNvbnN0IGNhbGN1bGF0ZUhlYXRtYXBGcm9tU3RhdGUgPSAoc3RhdGUpID0+IHtcbiAgY29uc3Qgcm93cyA9IHN0YXRlLmdldEluKFsncm93cycsICdyb3dzJ10pO1xuICBjb25zdCBwYXNzaXZlX3RyZWVfY29uZiA9IHN0YXRlLmdldCgncGFzc2l2ZV90cmVlX2NvbmYnKTtcbiAgY29uc3QgcGFzc2l2ZV90cmVlID0gc3RhdGUuZ2V0KCdwYXNzaXZlX3RyZWUnKTtcblxuICBjb25zdCBjb25mID0gbmV3IFBhc3NpdmVUcmVlY29uZihwYXNzaXZlX3RyZWVfY29uZi50b0pTKCkpO1xuXG4gIHJldHVybiBjYWxjdWxhdGVIZWF0bWFwKHJvd3MsIGNvbmYsIHBhc3NpdmVfdHJlZSk7XG59O1xuXG4vKipcbiAqIGFjdGlvbiBjcmVhdG9yIGZvciB0aGUgY2FsY3VsYXRpb24gb2YgdGhlIGhlYXRtYXBcbiAqIEBwYXJhbSB7TGlzdH0gcm93c1xuICogQHBhcmFtIHtQYXNzaXZlVHJlZUNvbmZ9IGNvbmZcbiAqIEBwYXJhbSB7UGFzc2l2ZVRyZWV9IHBhc3NpdmVfdHJlZVxuICogQHJldHVybiB7T2JqZWN0fSBhY3Rpb25cbiAqL1xuZXhwb3J0IGZ1bmN0aW9uIGNhbGN1bGF0ZUhlYXRtYXAocm93cywgY29uZiwgcGFzc2l2ZV90cmVlKSB7XG4gIHJldHVybiAoZGlzcGF0Y2gpID0+IHtcbiAgICAvLyBzaWduYWwgc3RhcnQgb2YgY2FsY3VsYXRpb25cbiAgICBkaXNwYXRjaCh7IHR5cGU6IENBTENVTEFURSB9KTtcblxuICAgIC8vIHN0b3Agb2xkIGNhbGN1bGF0aW9uXG4gICAgd29ya2VyLnRlcm1pbmF0ZSgpO1xuICAgIHdvcmtlciA9IG5ldyBIZWF0bWFwV29ya2VyKCk7XG5cbiAgICAvLyBnaXZlIG1zZyBoYW5kbGUgdGhlIGRpc3BhdGNoIGZ1bmN0aW9uXG4gICAgd29ya2VyLm9ubWVzc2FnZSA9IG9uV29ya2VyTWVzc2FnZShkaXNwYXRjaCk7XG5cbiAgICAvLyBzdGFydCBjYWxjdWxhdGlvblxuICAgIC8vIHdlYiB3b3JrZXJzIGNhbiBvbmx5IHJlY2VpdmUgc3RyaW5ncyB0byB3ZSBuZWVkIHRvXG4gICAgLy8gZ2l2ZSB0aGUgbWVzc2FnZSBzZXJpYWxpemVhYmxlIHR5cGVzXG4gICAgd29ya2VyLnBvc3RNZXNzYWdlKHtcbiAgICAgIHJvd3M6IHJvd3MudG9KUygpLFxuICAgICAgY29uZjogY29uZi50b1NlcmlhbGl6ZWFibGUoKSxcbiAgICAgIHBhc3NpdmVfdHJlZTogcGFzc2l2ZV90cmVlLnRvU2VyaWFsaXplYWJsZSgpLFxuICAgIH0pO1xuICB9O1xufTtcblxuLyoqXG4gKiBAcGFyYW0ge0Z1bmN0aW9ufSBkaXNwYXRjaFxuICogQHJldHVybiB7RnVuY3Rpb259IGV2ZW50IGxpc3RlbmVyIGZvciB3b3JrZXIub25tZXNzYWdlXG4gKi9cbmZ1bmN0aW9uIG9uV29ya2VyTWVzc2FnZShkaXNwYXRjaCkge1xuICByZXR1cm4gKG1lc3NhZ2UpID0+IHtcbiAgICBkaXNwYXRjaCh7XG4gICAgICB0eXBlOiBTRVQsXG4gICAgICBwYXlsb2FkOiBtZXNzYWdlLmRhdGEsXG4gICAgfSk7XG4gIH07XG59XG5cbi8qKlxuICogYWN0aW9uIGNyZWF0b3IgZm9yIGV4dHJlbWEgY2hhbmdlXG4gKlxuICogQHBhcmFtIHtPYmplY3R9IGRhdGEgc2VlXG4gKiBodHRwczovL3d3dy5wYXRyaWNrLXdpZWQuYXQvc3RhdGljL2hlYXRtYXBqcy9kb2NzLmh0bWwjaDMzNy1jcmVhdGUgI29uRXh0cmVtYUNoYW5nZVxuICogQHJldHVybiB7T2JqZWN0fVxuICovXG5leHBvcnQgZnVuY3Rpb24gZXh0cmVtYUNoYW5nZShkYXRhKSB7XG4gIHJldHVybiB7XG4gICAgdHlwZTogRVhUUkVNQV9DSEFOR0UsXG4gICAgcGF5bG9hZDoge1xuICAgICAgbGVnZW5kOiBkYXRhLFxuICAgIH0sXG4gIH07XG59O1xuXG4vKipcbiAqXG4gKiBAcGFyYW0ge3N0cmluZ30gZGF0YV91cmxcbiAqIEByZXR1cm4ge09iamVjdH0gYWN0aW9uXG4gKi9cbmV4cG9ydCBmdW5jdGlvbiBkYXRhVVJMQ2hhbmdlKGRhdGFfdXJsKSB7XG4gIHJldHVybiB7XG4gICAgdHlwZTogREFUQV9VUkxfQ0hBTkdFLFxuICAgIHBheWxvYWQ6IHsgZGF0YV91cmwgfSxcbiAgfTtcbn07XG5cblxuXG4vLyBXRUJQQUNLIEZPT1RFUiAvL1xuLy8gLi9zcmMvYnJvd3Nlci9hY3Rpb25zL2hlYXRtYXAuanMiLCJleHBvcnQgY29uc3QgRkVUQ0hfVFJFRSA9ICdQQVNTSVZFX1RSRUUvRkVUQ0gnO1xuZXhwb3J0IGNvbnN0IE5FV19UUkVFID0gJ1BBU1NJVkVfVFJFRS9ORVcnO1xuXG4vKipcbiAqIEBwYXJhbSB7c3RyaW5nfSBpZFxuICogQHJldHVybiB7T2JqZWN0fSBhY3Rpb25cbiAqL1xuZXhwb3J0IGZ1bmN0aW9uIGZldGNoVHJlZShpZCkge1xuICByZXR1cm4ge1xuICAgIHR5cGU6IEZFVENIX1RSRUUsXG4gICAgcGF5bG9hZDogeyBpZCB9LFxuICB9O1xufTtcblxuLyoqXG4gKiBAcGFyYW0ge09iamVjdH0gZGF0YSB2YWxpZCB0cmVlIGpzb24gc2VlIHBvZSB3aWtpXG4gKiBAcGFyYW0ge2FueX0gaWRcbiAqIEByZXR1cm4ge09iamVjdH0gYWN0aW9uXG4gKi9cbmV4cG9ydCBmdW5jdGlvbiBuZXdUcmVlKGRhdGEsIGlkKSB7XG4gIHJldHVybiB7XG4gICAgdHlwZTogTkVXX1RSRUUsXG4gICAgcGF5bG9hZDogeyBkYXRhOiBkYXRhLnBhc3NpdmVTa2lsbFRyZWVEYXRhLCBpZCB9LFxuICB9O1xufTtcblxuXG5cbi8vIFdFQlBBQ0sgRk9PVEVSIC8vXG4vLyAuL3NyYy9icm93c2VyL2FjdGlvbnMvcGFzc2l2ZV90cmVlLmpzIiwiZXhwb3J0IGNvbnN0IFpPT01FRCA9ICdaT09NL1pPT01FRCc7XG5leHBvcnQgY29uc3QgUkVTRVRfWk9PTSA9ICdaT09NL1JFU0VUJztcbmV4cG9ydCBjb25zdCBDT01NQU5EX0VYRUNVVEVEID0gJ1pPT00vQ09NTUFORF9FWEVDVVRFRCc7XG5cbi8qKlxuICogYWN0aW9uIGNyZWF0b3IgaWYgdGhlIHVzZXIgem9vbWVkXG4gKiBAcGFyYW0ge2QzLXRyYW5zZm9ybX0gdHJhbnNmb3JtXG4gKiBAcmV0dXJuIHtPYmplY3R9IGFjdGlvblxuICovXG5leHBvcnQgZnVuY3Rpb24gem9vbWVkKHRyYW5zZm9ybSkge1xuICByZXR1cm4ge1xuICAgIHR5cGU6IFpPT01FRCxcbiAgICBwYXlsb2FkOiB7IHRyYW5zZm9ybSB9LFxuICB9O1xufTtcblxuLyoqXG4gKiBhY3Rpb24gY3JlYXRvciB0byByZXNldCB0aGUgem9vbVxuICogQHJldHVybiB7T2JqZWN0fSBhY3Rpb25cbiAqL1xuZXhwb3J0IGZ1bmN0aW9uIHJlc2V0Wm9vbSgpIHtcbiAgcmV0dXJuIHtcbiAgICB0eXBlOiBSRVNFVF9aT09NLFxuICB9O1xufTtcblxuLyoqXG4gKiBhY3Rpb24gY3JlYXRvciB3aGVuIGEgY29tbWFuZCB3YXMgZXhlY3V0ZWQgb24gemhlIHpvb21hYmxlXG4gKiBAcmV0dXJuIHtPYmplY3R9IGFjdGlvblxuICovXG5leHBvcnQgZnVuY3Rpb24gY29tbWFuZEV4ZWN1dGVkKCkge1xuICByZXR1cm4ge1xuICAgIHR5cGU6IENPTU1BTkRfRVhFQ1VURUQsXG4gIH07XG59O1xuXG5cblxuLy8gV0VCUEFDSyBGT09URVIgLy9cbi8vIC4vc3JjL2Jyb3dzZXIvYWN0aW9ucy96b29tLmpzIiwiaW1wb3J0IHsgam9pbiB9IGZyb20gJ3BhdGgnO1xuXG4vLyBUT0RPIHB1YmxpY1BhdGggZnJvbSB3ZWJwYWNrIGNvbmZpZyBvciB2aWNlIHZlcnNhXG5leHBvcnQgY29uc3QgcHVibGljUGF0aCA9IChwYXRoKSA9PiBqb2luKCcvJywgcGF0aCk7XG5cblxuXG4vLyBXRUJQQUNLIEZPT1RFUiAvL1xuLy8gLi9zcmMvYnJvd3Nlci9oZWxwZXJzL3VybC5qcyIsImltcG9ydCBwYXRoIGZyb20gJ3BhdGgnO1xuXG5pbXBvcnQgUE9FIGZyb20gJy4uLy4uL3BvZS9kYXRhJztcbmltcG9ydCBDc3ZEYXRhU291cmNlIGZyb20gJy4uLy4uL2RhdGFfc291cmNlcy9Dc3ZEYXRhU291cmNlJztcbmltcG9ydCB7IGZpbGVQcm9wcyB9IGZyb20gJy4uLy4uL3NjcmlwdHMvbGliL3RyZWVzVG9Dc3ZGaWxlJztcblxuaW1wb3J0IHsgZ2V0TG9jYXRpb24gfSBmcm9tICcuL3JvdXRpbmcnO1xuXG5leHBvcnQgY29uc3QgZGVmYXVsdFNvdXJjZSA9IChzdGF0ZSkgPT4ge1xuICByZXR1cm4gZ2V0TG9jYXRpb24oc3RhdGUpLmdldEluKFsncXVlcnknLCAnc291cmNlJ10pXG4gIHx8IHN0YXRlLmdldEluKFsnZGF0YScsICdzb3VyY2VzJ10pLmtleVNlcSgpLmZpcnN0KCk7XG59O1xuXG4vKipcbiAqIHJldHVybnMgY3VycmVudGx5IGFjdGl2ZSBzb3VyY2VcbiAqIEBwYXJhbSB7TWFwfSBzdGF0ZSBkYXRhIHN0YXRlXG4gKiBAcmV0dXJuIHtEYXRhU291cmNlfVxuICovXG5leHBvcnQgZnVuY3Rpb24gYWN0aXZlU291cmNlKHN0YXRlKSB7XG4gIHJldHVybiBzdGF0ZS5nZXQoJ3NvdXJjZXMnKS5nZXQoc3RhdGUuZ2V0KCdhY3RpdmUnKSk7XG59XG5cbi8qKlxuICogQHBhcmFtIHtEYXRhU291cmNlP30gc291cmNlXG4gKiBAcmV0dXJuIHtPYmplY3QgfCB1bmRlZmluZWR9XG4gKi9cbmV4cG9ydCBmdW5jdGlvbiBkYXRhU291cmNlUHJvcHMoc291cmNlKSB7XG4gIGlmIChzb3VyY2UgaW5zdGFuY2VvZiBDc3ZEYXRhU291cmNlKSB7XG4gICAgY29uc3QgZmlsZW5hbWUgPSBwYXRoLmJhc2VuYW1lKHNvdXJjZS5maWxlbmFtZSk7XG4gICAgY29uc3QgZmlsZV9wcm9wcyA9IGZpbGVQcm9wcyhmaWxlbmFtZSk7XG5cbiAgICBpZiAoZmlsZV9wcm9wcyAhPT0gdW5kZWZpbmVkKSB7XG4gICAgICBjb25zdCBkYXRlID0gbmV3IERhdGUoZmlsZV9wcm9wcy5jdGltZSk7XG4gICAgICBjb25zdCB0cmVlID0gUE9FLnRyZWVzLmdldChmaWxlX3Byb3BzLnRyZWVfaWRlbnQpO1xuXG4gICAgICBpZiAoZGF0ZSAmJiB0cmVlKSB7XG4gICAgICAgIHJldHVybiB7IGRhdGUsIHRyZWUgfTtcbiAgICAgIH1cbiAgICB9XG4gIH1cblxuICByZXR1cm4gdW5kZWZpbmVkO1xufTtcblxuLyoqXG4gKlxuICogQHBhcmFtIHtEYXRhU291cmNlP30gc291cmNlXG4gKiBAcmV0dXJuIHtTdHJpbmd9XG4gKi9cbmV4cG9ydCBmdW5jdGlvbiBkYXRhU291cmNlSHVtYW4oc291cmNlKSB7XG4gIGNvbnN0IHByb3BzID0gZGF0YVNvdXJjZVByb3BzKHNvdXJjZSk7XG5cbiAgaWYgKHByb3BzICE9PSB1bmRlZmluZWQpIHtcbiAgICByZXR1cm4gW1xuICAgICAgcHJvcHMuZGF0ZS50b0xvY2FsZURhdGVTdHJpbmcoKSxcbiAgICAgIHByb3BzLnRyZWUubmFtZSxcbiAgICBdLmpvaW4oJyAtICcpO1xuICB9IGVsc2UgaWYgKHNvdXJjZSBpbnN0YW5jZW9mIENzdkRhdGFTb3VyY2UpIHtcbiAgICBjb25zdCBmaWxlbmFtZSA9IHBhdGguYmFzZW5hbWUoc291cmNlLmZpbGVuYW1lKTtcblxuICAgIHJldHVybiBmaWxlbmFtZTtcbiAgfSBlbHNlIHtcbiAgICByZXR1cm4gc291cmNlLnRvU3RyaW5nKCk7XG4gIH1cbn07XG5cblxuXG4vLyBXRUJQQUNLIEZPT1RFUiAvL1xuLy8gLi9zcmMvYnJvd3Nlci9zZWxlY3RvcnMvZGF0YS5qcyIsIm1vZHVsZS5leHBvcnRzID0gcmVxdWlyZShcInJlYWN0LXJvdXRlci1yZWR1eFwiKTtcblxuXG4vLy8vLy8vLy8vLy8vLy8vLy9cbi8vIFdFQlBBQ0sgRk9PVEVSXG4vLyBleHRlcm5hbCBcInJlYWN0LXJvdXRlci1yZWR1eFwiXG4vLyBtb2R1bGUgaWQgPSAyNVxuLy8gbW9kdWxlIGNodW5rcyA9IDAiLCJtb2R1bGUuZXhwb3J0cyA9IHJlcXVpcmUoXCJyZWR1eFwiKTtcblxuXG4vLy8vLy8vLy8vLy8vLy8vLy9cbi8vIFdFQlBBQ0sgRk9PVEVSXG4vLyBleHRlcm5hbCBcInJlZHV4XCJcbi8vIG1vZHVsZSBpZCA9IDI2XG4vLyBtb2R1bGUgY2h1bmtzID0gMCIsImltcG9ydCBJbW11dGFibGUgZnJvbSAnaW1tdXRhYmxlJztcbmV4cG9ydCBjb25zdCBTSE9XX1RPT0xUSVAgPSAnVE9PTFRJUC9TSE9XJztcblxuLyoqXG4gKiBjcmVhdGVzIHJlbGV2YW50IHR0IGluZm9cbiAqIEBwYXJhbSB7bnVtYmVyfSB4IHBvcyBvbiBoZWF0bWFwXG4gKiBAcGFyYW0ge251bWJlcn0geVxuICogQHBhcmFtIHtudW1iZXJ9IG5vZGVfaWQgdGhlIGhvdmVyZWQgbm9kZV9pZFxuICogQHBhcmFtIHtFdmVudH0gZXZlbnQgZG9tIGV2ZW50XG4gKiBAcmV0dXJuIHtPYmplY3R9IGFuIGFjdGlvblxuICovXG5leHBvcnQgZnVuY3Rpb24gc2hvd1Rvb2x0aXAoeCwgeSwgbm9kZV9pZCwgZXZlbnQpIHtcbiAgcmV0dXJuIHtcbiAgICB0eXBlOiBTSE9XX1RPT0xUSVAsXG4gICAgcGF5bG9hZDogeyB4LCB5LCBub2RlX2lkLCBldmVudDogSW1tdXRhYmxlLmZyb21KUyhldmVudCkgfSxcbiAgfTtcbn07XG5cblxuXG4vLyBXRUJQQUNLIEZPT1RFUiAvL1xuLy8gLi9zcmMvYnJvd3Nlci9hY3Rpb25zL3Rvb2x0aXAuanMiLCIvKipcbiAqIHZhcmlvdXMgaGVscGVyIGZvciByZWFjdC1yZWR1eC1mb3JtXG4gKi9cblxuLyoqXG4gKiBAcGFyYW0ge09iamVjdH0gYWN0aW9uIHJlZHV4IGFjdGlvblxuICogQHBhcmFtIHtzdHJpbmd9IG1vZGVsIG5hbWUgb2YgdGhlIGZvcm1cbiAqIEByZXR1cm4ge2Jvb2xlYW59IHRydWUgaWYgdGhlIGdpdmVuIGFjdGlvbiB3YXMgZmlyZWQgYnkgYSBycmYgY2hhbmdlIGFjdGlvblxuICogICAgICAgICAgICAgICAgICAgb24gdGhlIGdpdmVuIGZvcm0gbW9kZWxcbiAqL1xuZXhwb3J0IGNvbnN0IGZvcm1Nb2RlbENoYW5nZWQgPSAoYWN0aW9uLCBtb2RlbCkgPT4ge1xuICByZXR1cm4gYWN0aW9uLnR5cGUgPT09ICdycmYvY2hhbmdlJ1xuICAgICYmIGFjdGlvbi5tb2RlbC5zdGFydHNXaXRoKGAke21vZGVsfS5gKTtcbn07XG5cblxuXG4vLyBXRUJQQUNLIEZPT1RFUiAvL1xuLy8gLi9zcmMvYnJvd3Nlci9oZWxwZXJzL3JyZi5qcyIsIi8qIGVzbGludCBuZXctY2FwOiBvZmYgKi9cbmltcG9ydCB7IE1hcCwgT3JkZXJlZE1hcCB9IGZyb20gJ2ltbXV0YWJsZSc7XG5cbmltcG9ydCB7XG4gIEZFVENIX1NPVVJDRVNfRlJPTV9KU09OLFxuICBTRVRfU09VUkNFUyxcbiAgU0VUX0FDVElWRSxcbn0gZnJvbSAnLi4vYWN0aW9ucy9kYXRhJztcbmltcG9ydCB7IGN0aW1lT3V0RmlsZSB9IGZyb20gJy4uLy4uL3NjcmlwdHMvbGliL3RyZWVzVG9Dc3ZGaWxlJztcblxuLyoqXG4gKiBAcGFyYW0ge0Fic3RyYWN0RGF0YVNvdXJjZX0gZGF0YV9zb3VyY2VcbiAqIEByZXR1cm4ge251bWJlcn0gLWluZiBvbiB1bmRlZmluZWQgc291cmNlXG4gKi9cbmV4cG9ydCBmdW5jdGlvbiBjdGltZShkYXRhX3NvdXJjZSkge1xuICBpZiAoZGF0YV9zb3VyY2UpIHtcbiAgICByZXR1cm4gY3RpbWVPdXRGaWxlKGRhdGFfc291cmNlLmZpbGVuYW1lKTtcbiAgfSBlbHNlIHtcbiAgICByZXR1cm4gTnVtYmVyLk5FR0FUSVZFX0lORklOSVRZO1xuICB9XG59XG5cbmNvbnN0IGluaXRpYWwgPSBNYXAoe1xuICBhY3RpdmU6IHVuZGVmaW5lZCxcbiAgc291cmNlczogT3JkZXJlZE1hcCgpLFxuICBsb2FkaW5nOiBmYWxzZSxcbn0pO1xuXG5jb25zdCBkYXRhID0gKHN0YXRlID0gaW5pdGlhbCwgYWN0aW9uKSA9PiB7XG4gIHN3aXRjaCAoYWN0aW9uLnR5cGUpIHtcbiAgICBjYXNlIEZFVENIX1NPVVJDRVNfRlJPTV9KU09OOlxuICAgICAgcmV0dXJuIHN0YXRlLndpdGhNdXRhdGlvbnMoKHN0YXRlKSA9PiB7XG4gICAgICAgIHN0YXRlLnNldCgnYWN0aXZlJywgdW5kZWZpbmVkKTtcbiAgICAgICAgc3RhdGUuc2V0KCdzb3VyY2VzJywgT3JkZXJlZE1hcCgpKTtcbiAgICAgICAgc3RhdGUuc2V0KCdsb2FkaW5nJywgdHJ1ZSk7XG4gICAgICB9KTtcbiAgICBjYXNlIFNFVF9TT1VSQ0VTOlxuICAgICAgcmV0dXJuIHN0YXRlLndpdGhNdXRhdGlvbnMoKHN0YXRlKSA9PiB7XG4gICAgICAgIHN0YXRlLnNldCgnYWN0aXZlJywgdW5kZWZpbmVkKTtcbiAgICAgICAgc3RhdGUuc2V0KCdzb3VyY2VzJywgT3JkZXJlZE1hcChhY3Rpb24ucGF5bG9hZC5zb3VyY2VzKSk7XG4gICAgICAgIHN0YXRlLnNldCgnbG9hZGluZycsIGZhbHNlKTtcbiAgICAgIH0pO1xuICAgIGNhc2UgU0VUX0FDVElWRTpcbiAgICAgIHJldHVybiBzdGF0ZS5zZXQoJ2FjdGl2ZScsIGFjdGlvbi5wYXlsb2FkLmFjdGl2ZSk7XG4gICAgZGVmYXVsdDpcbiAgICAgIHJldHVybiBzdGF0ZTtcbiAgfVxufTtcblxuZXhwb3J0IGRlZmF1bHQgZGF0YTtcblxuXG5cbi8vIFdFQlBBQ0sgRk9PVEVSIC8vXG4vLyAuL3NyYy9icm93c2VyL3JlZHVjZXJzL2RhdGEuanMiLCJpbXBvcnQgeyBNYXAgfSBmcm9tICdpbW11dGFibGUnO1xuXG5pbXBvcnQgeyBTRUxFQ1RfQU5ZIH0gZnJvbSAnLi4vYWN0aW9ucy9yb3dzJztcbmltcG9ydCB7IHNsdWdpZnkgYXMgc2x1Z2lmeU1hcCB9IGZyb20gJy4uL2hlbHBlcnMvbWFwJztcbmltcG9ydCB7IHBhdGhuYW1lVG9BcHBQYXJhbXMgfSBmcm9tICcuLi9oZWxwZXJzL3JvdXRlcyc7XG5pbXBvcnQgeyBsZWFndWVGcm9tTmFtZSB9IGZyb20gJy4uL3NlbGVjdG9ycy9wb2UnO1xuXG5jb25zdCBkZWZhdWx0X2luaXRpYWxfZmlsdGVyID0gTWFwKHtcbiAgbGVhZ3VlOiBTRUxFQ1RfQU5ZLFxuICBrbGFzczogU0VMRUNUX0FOWSxcbiAgbGFzdF9hY3RpdmU6IDcsXG4gIGxhc3RfYWN0aXZlX2Jhc2U6IDYwKjYwKjI0LCAvLyBkYXlzIGFzIGRlZmF1bHRcbiAgbGltaXQ6IDE1MDAwLFxuICBvZmZzZXQ6IDAsXG59KTtcblxuY29uc3QgY3JlYXRlSW5pdGlhbEZpbHRlciA9ICgpID0+IHtcbiAgLy8gdGhpcyBwcm9iIHN1cGVyIGJhZCBwcmFjdGljZSBidXQgaSBkb250IG9mIGFueSB3YXlcbiAgLy8gdG8gaW5qZWN0IHJlYWN0LXJvdXRlciBwYXJhbXMgaW50byByZWFjdC1yZWR1eC1mb3JtXG4gIHJldHVybiBkZWZhdWx0X2luaXRpYWxfZmlsdGVyLndpdGhNdXRhdGlvbnMoKGZpbHRlcikgPT4ge1xuICAgIGlmICh0eXBlb2Ygd2luZG93ID09PSAnb2JqZWN0JyAmJiB3aW5kb3cubG9jYXRpb24pIHtcbiAgICAgIGNvbnN0IHBhdGhuYW1lID0gd2luZG93LmxvY2F0aW9uLnBhdGhuYW1lO1xuICAgICAgY29uc3QgcGFyYW1zID0gcGF0aG5hbWVUb0FwcFBhcmFtcyhwYXRobmFtZSk7XG5cbiAgICAgIC8vIGNvbnRyb2xsZWQgbWVyZ2UgaW5zdGVhZCBvZiBzcHJlYWRcbiAgICAgIGZpbHRlci5zZXQoJ2xlYWd1ZScsIGxlYWd1ZUZyb21OYW1lKHBhcmFtcy5sZWFndWUsIGZpbHRlci5nZXQoJ2xlYWd1ZScpKSk7XG4gICAgfVxuICB9KTtcbn07XG5cbmV4cG9ydCBjb25zdCBpbml0aWFsX2ZpbHRlciA9IGNyZWF0ZUluaXRpYWxGaWx0ZXIoKTtcblxuLyoqXG4gKiBAcGFyYW0ge01hcH0gZm9ybVxuICogQHJldHVybiB7bnVtYmVyfSB0aGUgdmFsdWUgaW4gc2Vjb25kc1xuICovXG5leHBvcnQgZnVuY3Rpb24gYWN0aXZlRm9yU2Vjb25kcyhmb3JtKSB7XG4gIHJldHVybiBmb3JtLmdldCgnbGFzdF9hY3RpdmUnKSAqIGZvcm0uZ2V0KCdsYXN0X2FjdGl2ZV9iYXNlJyk7XG59XG5cbi8vIGh0dHBzOi8vd3d3LnBhdHJpY2std2llZC5hdC9zdGF0aWMvaGVhdG1hcGpzL2RvY3MuaHRtbCNoMzM3LWNyZWF0ZVxuZXhwb3J0IGNvbnN0IGluaXRpYWxfaGVhdG1hcF9jb25mID0gTWFwKHtcbiAgYmx1cjogODUsXG4gIG1pbl9vcGFjaXR5OiA1LFxuICBtYXhfb3BhY2l0eTogNTUsXG4gIHJhZGl1czogNDAsXG59KTtcblxuZXhwb3J0IGNvbnN0IGluaXRpYWxfdHJlZV9jb25mID0gTWFwKHtcbiAgZ3JvdXBfb3JiaXRzOiBmYWxzZSxcbiAgc3RhcnQ6IGZhbHNlLFxuICBzY2lvblBhdGhPZjogZmFsc2UsXG4gIGFzY2VuZGFuY3k6IHRydWUsXG4gIG1hc3Rlcnk6IGZhbHNlLFxuICBub2RlX3NjYWxlOiAxLjcsXG59KTtcblxuLyoqXG4gKiBvYmplY3QgZm9yIHJlYWN0LXJlZHV4LWZvcm0vaW1tdXRhYmxlIGNyZWF0ZUZvcm1zXG4gKiBpdCByZXR1cm5zIGFuIGVtcHR5IG9iamVjdCBpZiB3ZSB1c2UgaW1tdXRhYmxlIHR5cGVzXG4gKiBAdHlwZSB7T2JqZWN0fVxuICovXG5jb25zdCBmb3JtcyA9IHtcbiAgZGF0YV9maWx0ZXI6IGluaXRpYWxfZmlsdGVyLFxuICBoZWF0bWFwX2NvbmY6IGluaXRpYWxfaGVhdG1hcF9jb25mLFxuICBwYXNzaXZlX3RyZWVfY29uZjogaW5pdGlhbF90cmVlX2NvbmYsXG59O1xuXG4vKipcbiAqIEBwYXJhbSB7TWFwfSBmb3JtIGEgZm9ybSBkZWZpbmVkIGluIHRoaXMgZmlsZVxuICogQHJldHVybiB7c3RyaW5nfSBzbHVnaWZpZWQgc3RyaW5nIG9mIHRoZSBmb3JtXG4gKi9cbmV4cG9ydCBmdW5jdGlvbiBzbHVnaWZ5KGZvcm0pIHtcbiAgcmV0dXJuIHNsdWdpZnlNYXAoZm9ybS5tYXAoKHZhbHVlKSA9PiB2YWx1ZSA9PT0gU0VMRUNUX0FOWSA/ICdhbnknIDogdmFsdWUpKTtcbn1cblxuZXhwb3J0IGRlZmF1bHQgZm9ybXM7XG5cblxuXG4vLyBXRUJQQUNLIEZPT1RFUiAvL1xuLy8gLi9zcmMvYnJvd3Nlci9yZWR1Y2Vycy9mb3Jtcy5qcyIsImV4cG9ydCBjb25zdCBnZXRMb2NhdGlvbiA9IChzdGF0ZSkgPT5cbiAgc3RhdGUuZ2V0SW4oWydyb3V0aW5nJywgJ2xvY2F0aW9uQmVmb3JlVHJhbnNpdGlvbnMnXSk7XG5cblxuXG4vLyBXRUJQQUNLIEZPT1RFUiAvL1xuLy8gLi9zcmMvYnJvd3Nlci9zZWxlY3RvcnMvcm91dGluZy5qcyIsImltcG9ydCBjcmVhdGVMb2dnZXIgZnJvbSAncmVkdXgtbG9nZ2VyJztcblxuaW1wb3J0IHsgWk9PTUVEIH0gZnJvbSAnLi4vYWN0aW9ucy96b29tJztcbmltcG9ydCB7IFNIT1dfVE9PTFRJUCB9IGZyb20gJy4uL2FjdGlvbnMvdG9vbHRpcCc7XG5cbmV4cG9ydCBjb25zdCB2ZXJib3NlX2FjdGlvbnMgPSBbXG4gIFpPT01FRCxcbiAgU0hPV19UT09MVElQLFxuXTtcblxuY29uc3QgbG9nZ2VyID0gY3JlYXRlTG9nZ2VyKHtcbiAgLy8gY29sbGFwc2UgYWxsXG4gIGNvbGxhcHNlZDogdHJ1ZSxcbiAgLy8gVE9PTFRJUHMgZmlyZSBvbiBtb3VzZW1vdmVcbiAgcHJlZGljYXRlOiAoZ2V0U3RhdGUsIGFjdGlvbikgPT4gIXZlcmJvc2VfYWN0aW9ucy5pbmNsdWRlcyhhY3Rpb24udHlwZSksXG59KTtcblxuZXhwb3J0IGRlZmF1bHQgbG9nZ2VyO1xuXG5cblxuLy8gV0VCUEFDSyBGT09URVIgLy9cbi8vIC4vc3JjL2Jyb3dzZXIvc3RvcmUvbG9nZ2VyLmpzIiwiaW1wb3J0IGNzdlBhcnNlIGZyb20gJ2Nzdi1wYXJzZSc7XG5pbXBvcnQgQWJzdHJhY3REYXRhU291cmNlIGZyb20gJy4vQWJzdHJhY3REYXRhU291cmNlJztcblxuLyoqXG4gKiBhbiBBYnN0cmFjdERhdGFTb3VyY2UgaW1wbGVtZW50YXRpb24gZm9yIGNzdlxuICovXG5jbGFzcyBDc3ZEYXRhU291cmNlIGV4dGVuZHMgQWJzdHJhY3REYXRhU291cmNlIHtcbiAgX2JvZHkgPSBudWxsO1xuICBfcm93cyA9IG51bGw7XG5cbiAgLyoqXG4gICAqIEBwYXJhbSB7c3RyaW5nfSBmaWxlbmFtZVxuICAgKi9cbiAgY29uc3RydWN0b3IoZmlsZW5hbWUpIHtcbiAgICBzdXBlcigpO1xuXG4gICAgdGhpcy5maWxlbmFtZSA9IGZpbGVuYW1lO1xuICB9XG5cbiAgLyoqXG4gICAqIGZldGNoZXMgdGhlIHRleHQgYm9keSBmb3IgY3N2IHBhcnNlXG4gICAqIEBwYXJhbSB7c3RyaW5nfSBmaWxlbmFtZVxuICAgKiBAcmV0dXJuIHtQcm9taXNlfVxuICAgKi9cbiAgc3RhdGljIGZldGNoKGZpbGVuYW1lKSB7XG4gICAgcmV0dXJuIGZldGNoKGZpbGVuYW1lKVxuICAgICAgICAgICAgLnRoZW4oKHJlc3BvbnNlKSA9PiByZXNwb25zZS50ZXh0KCkpO1xuICB9XG5cbiAgLyoqXG4gICAqIHBhcnNlcyBhIGNzdiByZXNwb25zZSBpbnRvIHJvd3NcbiAgICogQHBhcmFtIHtzdHJpbmd9IGJvZHlcbiAgICogQHJldHVybiB7UHJvbWlzZX1cbiAgICovXG4gIHN0YXRpYyBwYXJzZShib2R5KSB7XG4gICAgcmV0dXJuIG5ldyBQcm9taXNlKChmdWxmaWxsLCByZWplY3QpID0+IHtcbiAgICAgIGNzdlBhcnNlKGJvZHksIHtcbiAgICAgICAgYXV0b19wYXJzZTogdHJ1ZSxcbiAgICAgICAgY29sdW1uczogdHJ1ZSxcbiAgICAgICAgZGVsaW1pdGVyOiAnLCcsXG4gICAgICB9LCAoZSwgcm93cykgPT4ge1xuICAgICAgICBpZiAoZSkgcmVqZWN0KGUpO1xuICAgICAgICBmdWxmaWxsKHJvd3MpO1xuICAgICAgfSk7XG4gICAgfSk7XG4gIH1cblxuICAvKipcbiAgICogZ2V0cyBib2R5IGZvciB0aGUgZGF0YSBzb3VyY2VcbiAgICogYW5kIGluaXRzIGZldGNoaW5nIGlmIG5lY2Nlc3NhcnlcbiAgICogQHJldHVybiAge1Byb21pc2V9XG4gICAqL1xuICBib2R5KCkge1xuICAgIGlmICh0aGlzLl9ib2R5ID09PSBudWxsKSB7XG4gICAgICB0aGlzLl9ib2R5ID0gQ3N2RGF0YVNvdXJjZS5mZXRjaCh0aGlzLmZpbGVuYW1lKTtcbiAgICB9XG5cbiAgICByZXR1cm4gdGhpcy5fYm9keTtcbiAgfVxuXG4gIC8qKlxuICAgKiBnZXRzIHJvd3MgZm9yIHRoZSBkYXRhIHNvdXJjZVxuICAgKiBhbmQgaW5pdHMgdGhlIHBhcnNpbmcgKGFuZCBmZXRjaGluZykgaWYgbmVjY2Vzc2FyeVxuICAgKiBAcmV0dXJuICB7UHJvbWlzZX1cbiAgICovXG4gIGdldCByb3dzKCkge1xuICAgIGlmICh0aGlzLl9yb3dzID09PSBudWxsKSB7XG4gICAgICB0aGlzLl9yb3dzID0gdGhpcy5ib2R5KCkudGhlbigoYm9keSkgPT4ge1xuICAgICAgICByZXR1cm4gQ3N2RGF0YVNvdXJjZS5wYXJzZShib2R5KTtcbiAgICAgIH0pO1xuICAgIH1cblxuICAgIHJldHVybiB0aGlzLl9yb3dzO1xuICB9XG5cbiAgLyoqXG4gICAqIFRPRE8gdGhhdHMgbW9yZSBhIGNvbmNlcm4gb2YgdGhlIGdldF90cmVlcy5qcyB0YXNrXG4gICAqIEByZXR1cm4ge0FueX0gdGhlIFBhc3NpdmVUcmVlIGlkZW50aWZpZXIgYXNzb2NpYXRlZCB0byB0aGlzIERhdGFTb3VyY2VcbiAgICovXG4gIGdldCB0cmVlX2lkZW50KCkge1xuICAgIGNvbnN0IG1hdGNoID0gdGhpcy5maWxlbmFtZS5tYXRjaCgvXFxkK18oW15fXSspXy4qXFwuY3N2JC8pO1xuXG4gICAgaWYgKG1hdGNoID09PSBudWxsKSB7XG4gICAgICByZXR1cm4gdW5kZWZpbmVkO1xuICAgIH1cblxuICAgIHJldHVybiBtYXRjaFsxXTtcbiAgfVxufTtcblxuZXhwb3J0IGRlZmF1bHQgQ3N2RGF0YVNvdXJjZTtcblxuXG5cbi8vIFdFQlBBQ0sgRk9PVEVSIC8vXG4vLyAuL3NyYy9kYXRhX3NvdXJjZXMvQ3N2RGF0YVNvdXJjZS5qcyIsImltcG9ydCB7IGJhc2VuYW1lIH0gZnJvbSAncGF0aCc7XG5cbmltcG9ydCBDc3ZEYXRhU291cmNlIGZyb20gJy4vQ3N2RGF0YVNvdXJjZSc7XG5cbmV4cG9ydCBjb25zdCBDU1ZfU09VUkNFID0gJ0NTVl9TT1VSQ0UnO1xuXG4vKipcbiAqIGZpcnN0IHRyeSAudHlwZVxuICogdGhlbiB0cnkgZmlsZSBleHRlbnNpb25cbiAqXG4gKiBAcGFyYW0ge09iamVjdH0gZGF0YV9zb3VyY2VcbiAqIEByZXR1cm4ge3N0cmluZ30gdGhlIGltcGxlbWVudGF0aW9uICBmb3IgZGF0YV9zb3VyY2VcbiAqL1xuZXhwb3J0IGZ1bmN0aW9uIGd1ZXNzVHlwZShkYXRhX3NvdXJjZSkge1xuICBpZiAoZGF0YV9zb3VyY2UudHlwZSkgcmV0dXJuIGRhdGFfc291cmNlLnR5cGU7XG5cbiAgaWYgKGRhdGFfc291cmNlLmZpbGVuYW1lKSB7XG4gICAgY29uc3QgZXh0ZW5zaW9uID0gZGF0YV9zb3VyY2UuZmlsZW5hbWUubWF0Y2goL1xcLihbYS16XSspJC9pKSB8fCBbXTtcblxuICAgIHN3aXRjaCAoZXh0ZW5zaW9uWzFdLnRvTG93ZXJDYXNlKCkpIHtcbiAgICBjYXNlICdjc3YnOlxuICAgICAgcmV0dXJuIENTVl9TT1VSQ0U7XG4gICAgfVxuICB9XG5cbiAgcmV0dXJuIHVuZGVmaW5lZDtcbn07XG5cbi8qKlxuICogQHBhcmFtIHtBYnN0cmFjdERhdGFTb3VyY2V9IGRhdGFfc291cmNlXG4gKiBAcmV0dXJuIHtzdHJpbmd9IGEgbGFiZWwgZm9yIHRoZSBnaXZlbiBzb3VyY2VcbiAqL1xuZXhwb3J0IGZ1bmN0aW9uIGxhYmVsKGRhdGFfc291cmNlKSB7XG4gIGlmIChkYXRhX3NvdXJjZSA9PT0gdW5kZWZpbmVkKSB7XG4gICAgcmV0dXJuICd1bmRlZmluZWQnO1xuICB9IGVsc2UgaWYgKGRhdGFfc291cmNlLmZpbGVuYW1lKSB7XG4gICAgLy8gVE9ETyBleHRlbnNpb24gc3VwcG9ydFxuICAgIHJldHVybiBiYXNlbmFtZShkYXRhX3NvdXJjZS5maWxlbmFtZSwgJy5jc3YnKTtcbiAgfSBlbHNlIHtcbiAgICByZXR1cm4gJ2dlbmVyaWMtc291cmNlJztcbiAgfVxufVxuXG4vKipcbiAqIEBwYXJhbSB7T2JqZWN0fSBkYXRhX3NvdXJjZVxuICogQHJldHVybiB7QWJzdHJhY3REYXRhU291cmNlfVxuICovXG5leHBvcnQgZGVmYXVsdCBmdW5jdGlvbiBkYXRhU291cmNlKGRhdGFfc291cmNlKSB7XG4gIGNvbnN0IHR5cGUgPSBndWVzc1R5cGUoZGF0YV9zb3VyY2UpO1xuXG4gIHN3aXRjaCAodHlwZSkge1xuICBjYXNlIENTVl9TT1VSQ0U6XG4gICAgcmV0dXJuIG5ldyBDc3ZEYXRhU291cmNlKGRhdGFfc291cmNlLmZpbGVuYW1lKTtcbiAgZGVmYXVsdDpcbiAgICB0aHJvdyBuZXcgRXJyb3IoYG5vIGltcGxlbWVudGF0aW9uIGZvciAke3R5cGV9IGZvdW5kYCk7XG4gIH1cbn07XG5cbi8qKlxuICogQHBhcmFtIHtzdHJpbmd9IGZpbGVuYW1lIHRvIGpzb24gKGFycmF5IG9mIG9iamVjdHMgZm9yICNkYXRhU291cmNlKVxuICogQHJldHVybiB7UHJvbWlzZX1cbiAqL1xuZXhwb3J0IGFzeW5jIGZ1bmN0aW9uIGpzb25GYWN0b3J5KGZpbGVuYW1lKSB7XG4gIHJldHVybiBmZXRjaChmaWxlbmFtZSlcbiAgICAudGhlbigocmVzcG9uc2UpID0+IHJlc3BvbnNlLmpzb24oKSlcbiAgICAudGhlbigoc291cmNlcykgPT4gc291cmNlcy5tYXAoZGF0YVNvdXJjZSkpO1xufTtcblxuXG5cbi8vIFdFQlBBQ0sgRk9PVEVSIC8vXG4vLyAuL3NyYy9kYXRhX3NvdXJjZXMvZmFjdG9yeS5qcyIsIi8qKlxuICogY29uc3QgcmVsZXZhbnQgdG8gUG9lTm9kZVxuICpcbiAqIG1haW4gZ29hbCB3YXMgdG8gUG9lTm9kZSA9IHJlcXVpcmUoJ1BvZU5vZGUuanMnKTsgbm9kZSA9IG5ldyBQb2VOb2RlKCk7XG4gKiB0eXBlcyA9IFBvZU5vZGUudHlwZXNcbiAqIGJ1dCB0aGVyZSBpcyBubyBzdWNoIHRoaW5nIGFzIHN0YXRpYyBnZXR0ZXJcbiAqL1xubW9kdWxlLmV4cG9ydHMgPSBPYmplY3QuZnJlZXplKHtcbiAgb3JiaXRfcmFkaWk6IFswLCA4MiwgMTYyLCAzMzUsIDQ5M10sXG4gIHNraWxsc19wZXJfb3JiaXQ6IFsxLCA2LCAxMiwgMTIsIDQwXSxcbiAgLyoqXG4gICAqIHNwZWNpYWwgbm9kZSB0eXBlc1xuICAgKiBAdHlwZSB7WypdfVxuICAgKi9cbiAgdHlwZXM6IFtcbiAgICAna2V5c3RvbmUnLFxuICAgICdtYXN0ZXJ5JyxcbiAgICAnbm90YWJsZScsXG4gICAgJ3N0YXJ0JyxcbiAgICAnYXNjZW5kYW5jeScsXG4gICAgJ2pld2VsX3NvY2tldCcsXG4gIF0sXG4gIC8qKlxuICAgKiBzcHJpdGUgc2l6ZXMgb2YgdGhlIHR5cGVzXG4gICAqIEB0eXBlIHt9XG4gICAqL1xuICBzaXplczoge1xuICAgICdrZXlzdG9uZSc6IDUzLFxuICAgICdtYXN0ZXJ5JzogOTksXG4gICAgJ25vdGFibGUnOiAzOCxcbiAgICAnc3RhcnQnOiA0MCxcbiAgICAnYXNjZW5kYW5jeSc6IDI3LFxuICAgICdqZXdlbF9zb2NrZXQnOiA0MCxcbiAgICAnbm9ybWFsJzogMjcsXG4gIH0sXG59KTtcblxuXG5cbi8vIFdFQlBBQ0sgRk9PVEVSIC8vXG4vLyAuL3NyYy9wb2UvUGFzc2l2ZU5vZGVDb25zdC5qcyIsImNvbnN0IFBhc3NpdmVOb2RlSW5zdGFuY2UgPSByZXF1aXJlKCcuL1Bhc3NpdmVOb2RlJyk7XG5jb25zdCBQYXNzaXZlTm9kZSA9IHJlcXVpcmUoJy4vUGFzc2l2ZU5vZGVDb25zdCcpO1xuXG5tb2R1bGUuZXhwb3J0cyA9IGNsYXNzIFBhc3NpdmVUcmVlIHtcbiAgLyoqXG4gICAqIEBjb25zdHJ1Y3RvclxuICAgKiBAcGFyYW0ge09iamVjdH0gdHJlZV9kYXRhXG4gICAqIEBwYXJhbSB7YW55fSBpZCBhIHVuaXF1ZSBpZFxuICAgKi9cbiAgY29uc3RydWN0b3IodHJlZV9kYXRhLCBpZCkge1xuICAgIHRoaXMuZGF0YSA9IHRyZWVfZGF0YTtcbiAgICB0aGlzLmlkID0gaWQ7XG5cbiAgICB0aGlzLmdyb3VwcyA9IFBhc3NpdmVUcmVlLmluaXRHcm91cHModGhpcy5kYXRhKTtcbiAgICB0aGlzLm5vZGVzID0gUGFzc2l2ZVRyZWUuaW5pdE5vZGVzKHRoaXMuZGF0YSk7XG4gICAgdGhpcy5lZGdlcyA9IFBhc3NpdmVUcmVlLmluaXRFZGdlcyh0aGlzKTtcblxuICAgIC8qXG4gICAgICogYWx0aG91Z2ggd2UgZ2V0IG1pbi9tYXggY29vcmRzIHRoZXkgZG9uJ3QgaW5jbHVkZSB0aGUgYXNjZW5kYW5jeVxuICAgICAqIHNvIHdlIGRvIGl0cyBvdXJzZWx2ZXNcbiAgICAgKiBjb3VsZCBkbyBpdCB2aWEgbm9kZXMgYnV0IGlmIHdlIHVzZSB0aGUgZ3JvdXBzIHdpdGggdGhlIG9yYml0c1xuICAgICAqIHdlIGdldCBhIG5pY2UgcGFkZGluZyB0aGF0IGNvdWxkIHN0aWxsIGJlIG5vdCBlbm91Z2hcbiAgICAgKiBpZiB3ZSBkcmF3IHRoZSBub2RlcyB0byBiaWdcbiAgICAgKi9cbiAgICB0aGlzLmRpbWVuc2lvbnMgPSBQYXNzaXZlVHJlZS5jYWxjRGltZW5zaW9uKHRoaXMpO1xuICB9XG5cbiAgLyoqXG4gICAqIGNoZWNrcyBpZiB0aGUgZWRnZSBiZXR3ZWVuIHRoZXNlIG5vZGVzIGlzIFBhdGggb2YgWCB0byBYIGVkZ2VcbiAgICpcbiAgICogQHBhcmFtIHtQYXNzaXZlTm9kZX0gc291cmNlXG4gICAqIEBwYXJhbSB7UGFzc2l2ZU5vZGV9IHRhcmdldFxuICAgKiBAcmV0dXJuIHtib29sZWFufVxuICAgKi9cbiAgc3RhdGljIHNjaW9uUGF0aE9mRWRnZShzb3VyY2UsIHRhcmdldCkge1xuICAgIHJldHVybiBzb3VyY2UuYXNjZW5kYW5jeSAhPSB0YXJnZXQuYXNjZW5kYW5jeTtcbiAgfVxuXG4gIC8qKlxuICAgKiBtYXAgaW5zdGVhZCBvZiBvYmplY3QgZm9yIGVhc2Ugb2YgdXNlXG4gICAqIEBwYXJhbSB7T2JqZWN0fSB0cmVlX2RhdGEgZ2dnIHRyZWUganNvblxuICAgKiBAcmV0dXJuIHtNYXB9XG4gICAqL1xuICBzdGF0aWMgaW5pdEdyb3Vwcyh0cmVlX2RhdGEpIHtcbiAgICByZXR1cm4gbmV3IE1hcChPYmplY3QuZW50cmllcyh0cmVlX2RhdGEuZ3JvdXBzKSk7XG4gIH1cblxuICAvKipcbiAgICogbWFwIGluc3RlYWQgb2Ygb2JqZWN0IGZvciBlYXNlIG9mIHVzZVxuICAgKiBAcGFyYW0ge09iamVjdH0gdHJlZV9kYXRhIGdnZyB0cmVlIGpzb25cbiAgICogQHJldHVybiB7TWFwfVxuICAgKi9cbiAgc3RhdGljIGluaXROb2Rlcyh0cmVlX2RhdGEpIHtcbiAgICByZXR1cm4gbmV3IE1hcCh0cmVlX2RhdGEubm9kZXMubWFwKChuKSA9PiB7XG4gICAgICAvLyBba2V5LCB2YWx1ZV1cbiAgICAgIHJldHVybiBbbi5pZCwgbmV3IFBhc3NpdmVOb2RlSW5zdGFuY2UobiwgdHJlZV9kYXRhLmdyb3VwcyldO1xuICAgIH0pKTtcbiAgfVxuXG4gIC8qKlxuICAgKiBtYXAgaW5zdGVhZCBvZiBvYmplY3QgZm9yIGVhc2Ugb2YgdXNlXG4gICAqIEBwYXJhbSB7UGFzc2l2ZVRyZWV9IHBhc3NpdmVfdHJlZVxuICAgKiBAcmV0dXJuIHtbc291cmNlX25vZGUsIHRhcmdldF9ub2RlXVtdfSBhcnJheSBvZiBbc291cmNlLCB0YXJnZXRdIHBhaXJzXG4gICAqL1xuICBzdGF0aWMgaW5pdEVkZ2VzKHBhc3NpdmVfdHJlZSkge1xuICAgIGNvbnN0IGVkZ2VzID0gW107XG5cbiAgICBwYXNzaXZlX3RyZWUubm9kZXMuZm9yRWFjaCgobm9kZSkgPT4ge1xuICAgICAgbm9kZS5hZGphY2VudC5mb3JFYWNoKChhZGpfaWQpID0+IHtcbiAgICAgICAgZWRnZXMucHVzaChbbm9kZSwgcGFzc2l2ZV90cmVlLm5vZGVzLmdldChhZGpfaWQpXSk7XG4gICAgICB9KTtcbiAgICB9KTtcblxuICAgIHJldHVybiBlZGdlcztcbiAgfVxuXG4gIC8qKlxuICAgKiBjYWxjdWxhdGUgZGltZW5zaW9ucyBvZiB0aGUgdHJlZVxuICAgKiBAcGFyYW0ge1Bhc3NpdmVUcmVlfSBwYXNzaXZlX3RyZWVcbiAgICogQHJldHVybiB7bnVtYmVyW119IFttaW5feCwgbWluX3ksIG1heF94LCBtYXhfeV1cbiAgICovXG4gIHN0YXRpYyBjYWxjRGltZW5zaW9uKHBhc3NpdmVfdHJlZSkge1xuICAgIGxldCBkaW1lbnNpb25zID0gW1xuICAgICAgTnVtYmVyLlBPU0lUSVZFX0lORklOSVRZLCAvLyBtaW5feFxuICAgICAgTnVtYmVyLlBPU0lUSVZFX0lORklOSVRZLCAvLyBtaW5feVxuICAgICAgTnVtYmVyLk5FR0FUSVZFX0lORklOSVRZLCAvLyBtYXhfeFxuICAgICAgTnVtYmVyLk5FR0FUSVZFX0lORklOSVRZLCAgLy8gbWF4X3lcbiAgICBdO1xuXG4gICAgY29uc3QgbWF4X3JhZGl1cyA9IE1hdGgubWF4KC4uLlBhc3NpdmVOb2RlLm9yYml0X3JhZGlpKTtcblxuICAgIGZvciAoY29uc3QgZ3JvdXAgb2YgcGFzc2l2ZV90cmVlLmdyb3Vwcy52YWx1ZXMoKSkge1xuICAgICAgZGltZW5zaW9ucyA9IFtcbiAgICAgICAgTWF0aC5taW4oZ3JvdXAueCAtIG1heF9yYWRpdXMsIGRpbWVuc2lvbnNbMF0pLFxuICAgICAgICBNYXRoLm1pbihncm91cC55IC0gbWF4X3JhZGl1cywgZGltZW5zaW9uc1sxXSksXG4gICAgICAgIE1hdGgubWF4KGdyb3VwLnggKyBtYXhfcmFkaXVzLCBkaW1lbnNpb25zWzJdKSxcbiAgICAgICAgTWF0aC5tYXgoZ3JvdXAueSArIG1heF9yYWRpdXMsIGRpbWVuc2lvbnNbM10pLFxuICAgICAgXTtcbiAgICB9O1xuXG4gICAgcmV0dXJuIGRpbWVuc2lvbnM7XG4gIH1cblxuICAvKipcbiAgICogc3ZnIHZpZXdib3hcbiAgICogQHJldHVybiB7WypdfVxuICAgKi9cbiAgZ2V0IHZpZXdib3goKSB7XG4gICAgcmV0dXJuIFtcbiAgICAgIHRoaXMuZGltZW5zaW9uc1swXSxcbiAgICAgIHRoaXMuZGltZW5zaW9uc1sxXSxcbiAgICAgIHRoaXMud2lkdGgsXG4gICAgICB0aGlzLmhlaWdodCxcbiAgICBdO1xuICB9XG5cbiAgLyoqXG4gICAqIGNhbGN1bGF0ZXMgdGhlIHdpZHRoIG9mIHRoZSB0cmVlXG4gICAqL1xuICBnZXQgd2lkdGgoKSB7XG4gICAgcmV0dXJuIHRoaXMuZGltZW5zaW9uc1syXSAtIHRoaXMuZGltZW5zaW9uc1swXTtcbiAgfVxuXG4gIC8qKlxuICAgKiBjYWxjdWxhdGVzIHRoZSBoZWlnaHQgb2YgdGhlIHRyZWVcbiAgICovXG4gIGdldCBoZWlnaHQoKSB7XG4gICAgcmV0dXJuIHRoaXMuZGltZW5zaW9uc1szXSAtIHRoaXMuZGltZW5zaW9uc1sxXTtcbiAgfVxuXG4gIC8qKlxuICAgKiBzY2FsZXMgdGhlIGdpdmVuIHggaW4gdGhpcyB0cmVlIHRvIHRoZSBtYXRjaGluZyB4IG9uIGEgbmV3IGNvbnRhaW5lclxuICAgKiB3aXRoIGEgZGlmZmVyZW50IHdpZHRoIGFzc3VtaW5nIHRvcCBsZWZ0IGlzIDAsMFxuICAgKlxuICAgKiBAcGFyYW0ge251bWJlcn0geFxuICAgKiBAcGFyYW0ge251bWJlcn0gbmV3X3dpZHRoXG4gICAqIEByZXR1cm4ge251bWJlcn1cbiAgICovXG4gIHhTY2FsZWQoeCwgbmV3X3dpZHRoKSB7XG4gICAgcmV0dXJuICh4IC0gdGhpcy5kaW1lbnNpb25zWzBdKSAqIG5ld193aWR0aCAvIHRoaXMud2lkdGg7XG4gIH1cblxuICAvKipcbiAgICogc2VlIHRoaXMueFNjYWxlZFxuICAgKlxuICAgKiBAcGFyYW0ge251bWJlcn0geVxuICAgKiBAcGFyYW0ge251bWJlcn0gbmV3X2hlaWdodFxuICAgKiBAcmV0dXJuIHtudW1iZXJ9XG4gICAqL1xuICB5U2NhbGVkKHksIG5ld19oZWlnaHQpIHtcbiAgICByZXR1cm4gKHkgLSB0aGlzLmRpbWVuc2lvbnNbMV0pICogbmV3X2hlaWdodCAvIHRoaXMuaGVpZ2h0O1xuICB9XG5cbiAgLyoqXG4gICAqIEBwYXJhbSB7UGFzc2l2ZVRyZWV9IG90aGVyXG4gICAqIEByZXR1cm4ge2Jvb2xlYW59XG4gICAqL1xuICBlcXVhbHMob3RoZXIpIHtcbiAgICByZXR1cm4gdGhpcy5pZCA9PT0gb3RoZXIuaWQ7XG4gIH1cblxuICAvKipcbiAgICogY3JlYXRlcyBhIHNlcmlhbGl6ZWFibGUganMgdHlwZVxuICAgKiBAcmV0dXJuIHtPYmplY3R9XG4gICAqL1xuICB0b1NlcmlhbGl6ZWFibGUoKSB7XG4gICAgcmV0dXJuIHtcbiAgICAgIGlkOiB0aGlzLmlkLFxuICAgICAgZGF0YTogdGhpcy5kYXRhLFxuICAgIH07XG4gIH1cblxuICAvKipcbiAgICogZmFjdG9yeSBmcm9tICN0b1NlcmlhbGl6ZWFibGVcbiAgICogQHBhcmFtIHtPYmplY3R9IHNlcmlhbGl6ZWFibGVcbiAgICogQHJldHVybiB7UGFzc2l2ZVRyZWV9XG4gICAqL1xuICBzdGF0aWMgZnJvbVNlcmlhbGl6ZWFibGUoc2VyaWFsaXplYWJsZSkge1xuICAgIHJldHVybiBuZXcgUGFzc2l2ZVRyZWUoc2VyaWFsaXplYWJsZS5kYXRhLCBzZXJpYWxpemVhYmxlLmlkKTtcbiAgfVxufTtcblxuXG5cbi8vIFdFQlBBQ0sgRk9PVEVSIC8vXG4vLyAuL3NyYy9wb2UvUGFzc2l2ZVRyZWUuanMiLCJtb2R1bGUuZXhwb3J0cyA9IHJlcXVpcmUoXCJiYWJlbC1ydW50aW1lL2NvcmUtanMvb2JqZWN0L2VudHJpZXNcIik7XG5cblxuLy8vLy8vLy8vLy8vLy8vLy8vXG4vLyBXRUJQQUNLIEZPT1RFUlxuLy8gZXh0ZXJuYWwgXCJiYWJlbC1ydW50aW1lL2NvcmUtanMvb2JqZWN0L2VudHJpZXNcIlxuLy8gbW9kdWxlIGlkID0gMzdcbi8vIG1vZHVsZSBjaHVua3MgPSAwIiwibW9kdWxlLmV4cG9ydHMgPSByZXF1aXJlKFwiYmFiZWwtcnVudGltZS9oZWxwZXJzL2V4dGVuZHNcIik7XG5cblxuLy8vLy8vLy8vLy8vLy8vLy8vXG4vLyBXRUJQQUNLIEZPT1RFUlxuLy8gZXh0ZXJuYWwgXCJiYWJlbC1ydW50aW1lL2hlbHBlcnMvZXh0ZW5kc1wiXG4vLyBtb2R1bGUgaWQgPSAzOFxuLy8gbW9kdWxlIGNodW5rcyA9IDAiLCJtb2R1bGUuZXhwb3J0cyA9IHJlcXVpcmUoXCJiYWJlbC1ydW50aW1lL2hlbHBlcnMvdHlwZW9mXCIpO1xuXG5cbi8vLy8vLy8vLy8vLy8vLy8vL1xuLy8gV0VCUEFDSyBGT09URVJcbi8vIGV4dGVybmFsIFwiYmFiZWwtcnVudGltZS9oZWxwZXJzL3R5cGVvZlwiXG4vLyBtb2R1bGUgaWQgPSAzOVxuLy8gbW9kdWxlIGNodW5rcyA9IDAiLCJtb2R1bGUuZXhwb3J0cyA9IHJlcXVpcmUoXCJkMy16b29tXCIpO1xuXG5cbi8vLy8vLy8vLy8vLy8vLy8vL1xuLy8gV0VCUEFDSyBGT09URVJcbi8vIGV4dGVybmFsIFwiZDMtem9vbVwiXG4vLyBtb2R1bGUgaWQgPSA0MFxuLy8gbW9kdWxlIGNodW5rcyA9IDAiLCJtb2R1bGUuZXhwb3J0cyA9IHJlcXVpcmUoXCJuZWRiXCIpO1xuXG5cbi8vLy8vLy8vLy8vLy8vLy8vL1xuLy8gV0VCUEFDSyBGT09URVJcbi8vIGV4dGVybmFsIFwibmVkYlwiXG4vLyBtb2R1bGUgaWQgPSA0MVxuLy8gbW9kdWxlIGNodW5rcyA9IDAiLCJtb2R1bGUuZXhwb3J0cyA9IHJlcXVpcmUoXCJyZWR1eC1vYnNlcnZhYmxlXCIpO1xuXG5cbi8vLy8vLy8vLy8vLy8vLy8vL1xuLy8gV0VCUEFDSyBGT09URVJcbi8vIGV4dGVybmFsIFwicmVkdXgtb2JzZXJ2YWJsZVwiXG4vLyBtb2R1bGUgaWQgPSA0MlxuLy8gbW9kdWxlIGNodW5rcyA9IDAiLCJtb2R1bGUuZXhwb3J0cyA9IHJlcXVpcmUoXCJyeGpzL2FkZC9vcGVyYXRvci9maWx0ZXJcIik7XG5cblxuLy8vLy8vLy8vLy8vLy8vLy8vXG4vLyBXRUJQQUNLIEZPT1RFUlxuLy8gZXh0ZXJuYWwgXCJyeGpzL2FkZC9vcGVyYXRvci9maWx0ZXJcIlxuLy8gbW9kdWxlIGlkID0gNDNcbi8vIG1vZHVsZSBjaHVua3MgPSAwIiwibW9kdWxlLmV4cG9ydHMgPSByZXF1aXJlKFwicnhqcy9hZGQvb3BlcmF0b3IvbWVyZ2VNYXBcIik7XG5cblxuLy8vLy8vLy8vLy8vLy8vLy8vXG4vLyBXRUJQQUNLIEZPT1RFUlxuLy8gZXh0ZXJuYWwgXCJyeGpzL2FkZC9vcGVyYXRvci9tZXJnZU1hcFwiXG4vLyBtb2R1bGUgaWQgPSA0NFxuLy8gbW9kdWxlIGNodW5rcyA9IDAiLCJtb2R1bGUuZXhwb3J0cyA9IHJlcXVpcmUoXCJyeGpzL29ic2VydmFibGUvZG9tL2FqYXhcIik7XG5cblxuLy8vLy8vLy8vLy8vLy8vLy8vXG4vLyBXRUJQQUNLIEZPT1RFUlxuLy8gZXh0ZXJuYWwgXCJyeGpzL29ic2VydmFibGUvZG9tL2FqYXhcIlxuLy8gbW9kdWxlIGlkID0gNDVcbi8vIG1vZHVsZSBjaHVua3MgPSAwIiwiaW1wb3J0IHsgY3JlYXRlU3RvcmUgfSBmcm9tICdyZWR1eCc7XG5cbmltcG9ydCB0cmVlU3RhdHNBcHAgZnJvbSAnLi4vcmVkdWNlcnMnO1xuaW1wb3J0IHByZWxvYWQgZnJvbSAnLi9wcmVsb2FkJztcbmltcG9ydCBlbmhhbmNlciBmcm9tICcuL2VuaGFuY2VyJztcblxuY29uc3Qgc3RvcmUgPSBjcmVhdGVTdG9yZShcbiAgdHJlZVN0YXRzQXBwLFxuICBwcmVsb2FkLFxuICBlbmhhbmNlcixcbik7XG5cbmV4cG9ydCBkZWZhdWx0IHN0b3JlO1xuXG5cblxuLy8gV0VCUEFDSyBGT09URVIgLy9cbi8vIC4vc3JjL2Jyb3dzZXIvc3RvcmUvc3RvcmUuanMiLCJleHBvcnQgY29uc3QgQUNUSVZBVEUgPSAnTkFWX1RBQlMvQUNUSVZBVEUnO1xuXG4vKipcbiAqIGFjdGlvbiBjcmVhdG9yIHRvIGFjdGl2YXRlIGEgc3BlY2lmaWMgY2hpbGQgaW4gYSBuYXYgdGFiXG4gKlxuICogQHBhcmFtIHtzdHJpbmd9IHRhYl9rZXkga2V5IG9mIHRoZSBOYXZUYWIgY29tcG9uZW50XG4gKiBAcGFyYW0ge3N0cmluZ30ga2V5IGtleSBvZiBhIGNoaWxkIG9mIE5hdlRhYlxuICogQHJldHVybiB7T2JqZWN0fVxuICovXG5leHBvcnQgZnVuY3Rpb24gYWN0aXZhdGUodGFiX2tleSwga2V5KSB7XG4gIHJldHVybiB7XG4gICAgdHlwZTogQUNUSVZBVEUsXG4gICAgcGF5bG9hZDogeyB0YWJfa2V5LCBrZXkgfSxcbiAgfTtcbn07XG5cblxuXG4vLyBXRUJQQUNLIEZPT1RFUiAvL1xuLy8gLi9zcmMvYnJvd3Nlci9hY3Rpb25zL25hdl90YWJzLmpzIiwiZXhwb3J0IGNvbnN0IFJFU0VUX1pPT00gPSAnWk9PTUFCTEUvUkVTRVQnO1xuXG5cblxuLy8gV0VCUEFDSyBGT09URVIgLy9cbi8vIC4vc3JjL2Jyb3dzZXIvY29tcG9uZW50cy9ab29tYWJsZS5jb25zdGFudHMuanMiLCJpbXBvcnQgeyBhamF4IH0gZnJvbSAncnhqcy9vYnNlcnZhYmxlL2RvbS9hamF4JztcbmltcG9ydCAncnhqcy9hZGQvb3BlcmF0b3IvbWVyZ2VNYXAnO1xuaW1wb3J0ICdyeGpzL2FkZC9vcGVyYXRvci9tYXAnO1xuXG5pbXBvcnQgeyBwdXNoIH0gZnJvbSAncmVhY3Qtcm91dGVyLXJlZHV4JztcblxuaW1wb3J0IHtcbiAgRkVUQ0hfU09VUkNFU19GUk9NX0pTT04sXG4gIFNFVF9BQ1RJVkUsXG4gIFNFVF9TT1VSQ0VTLFxuICBzZXRBY3RpdmUsXG4gIHNldFNvdXJjZXNBcnJheSxcbn0gZnJvbSAnLi4vYWN0aW9ucy9kYXRhJztcbmltcG9ydCB7IHB1YmxpY1BhdGggfSBmcm9tICcuLi9oZWxwZXJzL3VybCc7XG5pbXBvcnQgeyBkZWZhdWx0U291cmNlIH0gZnJvbSAnLi4vc2VsZWN0b3JzL2RhdGEnO1xuaW1wb3J0IHsgZ2V0TG9jYXRpb24gfSBmcm9tICcuLi9zZWxlY3RvcnMvcm91dGluZyc7XG5pbXBvcnQgZGF0YVNvdXJjZSBmcm9tICcuLi8uLi9kYXRhX3NvdXJjZXMvZmFjdG9yeSc7XG5cbmV4cG9ydCBjb25zdCBnZXRTb3VyY2VzSW5kZXggPSAoYWN0aW9uJCkgPT4ge1xuICByZXR1cm4gYWN0aW9uJC5vZlR5cGUoRkVUQ0hfU09VUkNFU19GUk9NX0pTT04pXG4gICAgLm1lcmdlTWFwKChhY3Rpb24pID0+IHtcbiAgICAgIHJldHVybiBhamF4LmdldEpTT04oYWN0aW9uLnBheWxvYWQpXG4gICAgICAgIC5tYXAoKHNvdXJjZXMpID0+IHNldFNvdXJjZXNBcnJheShzb3VyY2VzLm1hcCgoc291cmNlKSA9PiB7XG4gICAgICAgICAgc291cmNlLmZpbGVuYW1lID0gcHVibGljUGF0aChzb3VyY2UuZmlsZW5hbWUpO1xuICAgICAgICAgIHJldHVybiBkYXRhU291cmNlKHNvdXJjZSk7XG4gICAgICAgIH0pKSk7XG4gICAgfSk7XG59O1xuXG5leHBvcnQgY29uc3Qgc2V0U291cmNlc0luZGV4ID0gKGFjdGlvbiQsIHN0b3JlKSA9PiB7XG4gIHJldHVybiBhY3Rpb24kLm9mVHlwZShTRVRfU09VUkNFUylcbiAgICAubWFwKCgpID0+IHNldEFjdGl2ZShkZWZhdWx0U291cmNlKHN0b3JlLmdldFN0YXRlKCkpKSk7XG59O1xuXG5leHBvcnQgY29uc3Qgc291cmNlSW5Mb2NhdGlvbiA9IChhY3Rpb24kLCBzdG9yZSkgPT4ge1xuICByZXR1cm4gYWN0aW9uJFxuICAgIC5vZlR5cGUoU0VUX0FDVElWRSlcbiAgICAubWFwKCh7IHBheWxvYWQ6IHsgYWN0aXZlIH0gfSkgPT4gcHVzaCh7XG4gICAgICAuLi5nZXRMb2NhdGlvbihzdG9yZS5nZXRTdGF0ZSgpKS50b0pTKCksXG4gICAgICBxdWVyeToge1xuICAgICAgICBzb3VyY2U6IGFjdGl2ZSxcbiAgICAgIH0sXG4gICAgfSkpO1xufTtcblxuXG5cbi8vIFdFQlBBQ0sgRk9PVEVSIC8vXG4vLyAuL3NyYy9icm93c2VyL2VwaWNzL2RhdGEuanMiLCJpbXBvcnQgJ3J4anMvYWRkL29wZXJhdG9yL2ZpbHRlcic7XG5pbXBvcnQgJ3J4anMvYWRkL29wZXJhdG9yL21hcCc7XG5pbXBvcnQgJ3J4anMvYWRkL29wZXJhdG9yL3N3aXRjaE1hcCc7XG5cbmltcG9ydCB7IE5FV19UUkVFIH0gZnJvbSAnLi4vYWN0aW9ucy9wYXNzaXZlX3RyZWUnO1xuaW1wb3J0IHsgVVBEQVRFX1JPV1MgfSBmcm9tICcuLi9hY3Rpb25zL3Jvd3MnO1xuaW1wb3J0IHtcbiAgY2FsY3VsYXRlSGVhdG1hcEZyb21TdGF0ZSxcbiAgSEVBVE1BUF9SRUxFVkFOVF9DT05GLFxufSBmcm9tICcuLi9hY3Rpb25zL2hlYXRtYXAnO1xuaW1wb3J0IHsgZm9ybU1vZGVsQ2hhbmdlZCB9IGZyb20gJy4uL2hlbHBlcnMvcnJmJztcblxuLy8gY2FsY3VsYXRlSGVhdG1hcCB3aGVuIHJvd3MgY2hhbmdlXG4vLyBvciBhbnkgZm9yIHRoZSBjYWxjdWxhdGlvbiByZWxldmFudCBjb25mIGluIGEgcnJmIG1vZGVsXG4vLyBUT0RPXG4vLyBjdXJyZW50bHkgcmFjaW5nIHdpdGggZmV0Y2hUcmVlLiBldmVyeSBVUERBVEVfUk9XUyBiZWZvcmUgTkVXX1RSRUVcbi8vIGRvZXNudCBoYXZlIGFuIGVmZmVjdC4gdGhpbmtpbmcgYWJvdXQgc29tZXRoaW5nIGxpa2Vcbi8vIGZpbHRlciguLi4pLmJ1ZmZlclVudGlsVGhlbkRvbnRCdWZmZXJBbnltb3JlKGFjdGlvbiQub2ZUeXBlKE5FV19UUkVFKSkubWFwLi4uXG5leHBvcnQgY29uc3QgaGVhdG1hcENhY2hlID0gKGFjdGlvbiQsIHN0b3JlKSA9PiB7XG4gIHJldHVybiBhY3Rpb24kLm9mVHlwZShORVdfVFJFRSlcbiAgICAuc3dpdGNoTWFwKFxuICAgICAgKCkgPT4gYWN0aW9uJC5maWx0ZXIoKGFjdGlvbikgPT4ge1xuICAgICAgICByZXR1cm4gYWN0aW9uLnR5cGUgPT09IFVQREFURV9ST1dTXG4gICAgICAgICAgfHwgKGZvcm1Nb2RlbENoYW5nZWQoYWN0aW9uLCAncGFzc2l2ZV90cmVlX2NvbmYnKVxuICAgICAgICAgICAgICAmJiBIRUFUTUFQX1JFTEVWQU5UX0NPTkYuaW5jbHVkZXMoYWN0aW9uLm1vZGVsKSk7XG4gICAgICB9KSxcbiAgICAgICgpID0+IGNhbGN1bGF0ZUhlYXRtYXBGcm9tU3RhdGUoc3RvcmUuZ2V0U3RhdGUoKSksXG4gICAgKTtcbn07XG5cblxuXG4vLyBXRUJQQUNLIEZPT1RFUiAvL1xuLy8gLi9zcmMvYnJvd3Nlci9lcGljcy9oZWF0bWFwLmpzIiwiaW1wb3J0IHsgY29tYmluZUVwaWNzIH0gZnJvbSAncmVkdXgtb2JzZXJ2YWJsZSc7XG5cbmltcG9ydCB7IGdldFNvdXJjZXNJbmRleCwgc2V0U291cmNlc0luZGV4IH0gZnJvbSAnLi9kYXRhJztcbmltcG9ydCB7IGhlYXRtYXBDYWNoZSB9IGZyb20gJy4vaGVhdG1hcCc7XG5pbXBvcnQgeyBmZXRjaFRyZWUsIG1hdGNoVHJlZVRvRGF0YSB9IGZyb20gJy4vcGFzc2l2ZV90cmVlJztcbmltcG9ydCB7IGNhY2hlUm93cyB9IGZyb20gJy4vcm93cyc7XG5pbXBvcnQgeyBzeW5jWm9vbSB9IGZyb20gJy4vem9vbSc7XG5cbmNvbnN0IHJvb3RfZXBpYyA9IGNvbWJpbmVFcGljcyhcbiAgZ2V0U291cmNlc0luZGV4LFxuICBzZXRTb3VyY2VzSW5kZXgsXG4gIGNhY2hlUm93cyxcbiAgaGVhdG1hcENhY2hlLFxuICBmZXRjaFRyZWUsXG4gIG1hdGNoVHJlZVRvRGF0YSxcbiAgc3luY1pvb20sXG4gIC8vIFRPRE8gZGlzYWJsZWQgcm91dGluZyBkaXNwbGF5XG4gIC8vIHNvdXJjZUluTG9jYXRpb24sXG4pO1xuXG5leHBvcnQgZGVmYXVsdCByb290X2VwaWM7XG5cblxuXG4vLyBXRUJQQUNLIEZPT1RFUiAvL1xuLy8gLi9zcmMvYnJvd3Nlci9lcGljcy9pbmRleC5qcyIsImltcG9ydCB7IGFqYXggfSBmcm9tICdyeGpzL29ic2VydmFibGUvZG9tL2FqYXgnO1xuaW1wb3J0ICdyeGpzL2FkZC9vcGVyYXRvci9tZXJnZU1hcCc7XG5pbXBvcnQgJ3J4anMvYWRkL29wZXJhdG9yL21hcCc7XG5cbmltcG9ydCB7IFNFVF9BQ1RJVkUsIGdldFNvdXJjZUJ5S2V5IH0gZnJvbSAnLi4vYWN0aW9ucy9kYXRhJztcbmltcG9ydCB7XG4gIEZFVENIX1RSRUUsXG4gIG5ld1RyZWUsXG4gIGZldGNoVHJlZSBhcyBmZXRjaFRyZWVBY3Rpb24sXG59IGZyb20gJy4uL2FjdGlvbnMvcGFzc2l2ZV90cmVlJztcbmltcG9ydCB7IHB1YmxpY1BhdGggfSBmcm9tICcuLi9oZWxwZXJzL3VybCc7XG5cbmNvbnN0IHBvZSA9IHJlcXVpcmUoJy4uLy4uL3BvZS9kYXRhJyk7XG5cbmV4cG9ydCBjb25zdCB0cmVlSnNvblVybCA9IChpZCkgPT4ge1xuICByZXR1cm4gcHVibGljUGF0aChgdHJlZXMvJHtpZH0uanNvbmApO1xufTtcblxuZXhwb3J0IGNvbnN0IGZldGNoVHJlZSA9IChhY3Rpb24kLCBzdG9yZSkgPT4ge1xuICByZXR1cm4gYWN0aW9uJFxuICAgIC5vZlR5cGUoRkVUQ0hfVFJFRSlcbiAgICAuZmlsdGVyKChhY3Rpb24pID0+IHtcbiAgICAgIGNvbnN0IG9sZF9pZCA9IHN0b3JlLmdldFN0YXRlKCkuZ2V0KCdwYXNzaXZlX3RyZWUnKS5pZDtcbiAgICAgIGNvbnN0IG5ld19pZCA9IGFjdGlvbi5wYXlsb2FkLmlkO1xuXG4gICAgICAvLyBvbmx5IGZldGNoIGEgbmV3IG9uZSBpZiBlaXRoZXIgd2UgY3VycmVudGx5IGhhdmUgdGhlIGluaXRpYWwgdHJlZVxuICAgICAgLy8gb3IgaWYgd2UgZ290IGEgbmV3IGZldGNoYWJsZSB0cmVlXG4gICAgICByZXR1cm4gb2xkX2lkID09PSB1bmRlZmluZWRcbiAgICAgICAgfHwgKG9sZF9pZCAhPT0gbmV3X2lkICYmIG5ld19pZCAhPT0gdW5kZWZpbmVkKTtcbiAgICB9KVxuICAgIC5tZXJnZU1hcCgoYWN0aW9uKSA9PiB7XG4gICAgICBjb25zdCB0cmVlX2lkID0gYWN0aW9uLnBheWxvYWQuaWQgfHwgcG9lLmN1cnJlbnRfdHJlZTtcbiAgICAgIHJldHVybiBhamF4LmdldEpTT04odHJlZUpzb25VcmwodHJlZV9pZCkpXG4gICAgICAgIC5tYXAoKHRyZWVfZGF0YSkgPT4gbmV3VHJlZSh0cmVlX2RhdGEsIHRyZWVfaWQpKTtcbiAgICB9KTtcbn07XG5cbmV4cG9ydCBjb25zdCBtYXRjaFRyZWVUb0RhdGEgPSAoYWN0aW9uJCwgc3RvcmUpID0+IHtcbiAgcmV0dXJuIGFjdGlvbiRcbiAgICAub2ZUeXBlKFNFVF9BQ1RJVkUpXG4gICAgLm1hcCgoYWN0aW9uKSA9PiB7XG4gICAgICBjb25zdCBzb3VyY2UgPSBnZXRTb3VyY2VCeUtleShzdG9yZS5nZXRTdGF0ZSgpLCBhY3Rpb24ucGF5bG9hZC5hY3RpdmUpO1xuICAgICAgcmV0dXJuIGZldGNoVHJlZUFjdGlvbihzb3VyY2UudHJlZV9pZGVudCk7XG4gICAgfSk7XG59O1xuXG5cblxuLy8gV0VCUEFDSyBGT09URVIgLy9cbi8vIC4vc3JjL2Jyb3dzZXIvZXBpY3MvcGFzc2l2ZV90cmVlLmpzIiwiaW1wb3J0ICdyeGpzL2FkZC9vcGVyYXRvci9maWx0ZXInO1xuaW1wb3J0ICdyeGpzL2FkZC9vcGVyYXRvci9tYXBUbyc7XG5cbmltcG9ydCB7IFNFVF9EQiB9IGZyb20gJy4uL2FjdGlvbnMvZGInO1xuaW1wb3J0IHsgdXBkYXRlUm93cyB9IGZyb20gJy4uL2FjdGlvbnMvcm93cyc7XG5pbXBvcnQgeyBmb3JtTW9kZWxDaGFuZ2VkIH0gZnJvbSAnLi4vaGVscGVycy9ycmYnO1xuXG4vKlxuICogcm93cyBhcmUgZGVyaXZlZCBmcm9tIHRoZSBkYiBhbmQgdGhlIGRhdGFfZmlsdGVyXG4gKiBUT0RPIHRocm90dGxlIGNoYW5nZSBldmVudHNcbiAqL1xuZXhwb3J0IGNvbnN0IGNhY2hlUm93cyA9IChhY3Rpb24kKSA9PiB7XG4gIHJldHVybiBhY3Rpb24kLmZpbHRlcigoYWN0aW9uKSA9PiB7XG4gICAgcmV0dXJuIGFjdGlvbi50eXBlID09IFNFVF9EQlxuICAgICAgfHwgZm9ybU1vZGVsQ2hhbmdlZChhY3Rpb24sICdkYXRhX2ZpbHRlcicpO1xuICB9KS5tYXBUbyh1cGRhdGVSb3dzKCkpO1xufTtcblxuXG5cbi8vIFdFQlBBQ0sgRk9PVEVSIC8vXG4vLyAuL3NyYy9icm93c2VyL2VwaWNzL3Jvd3MuanMiLCJpbXBvcnQgJ3J4anMvYWRkL29wZXJhdG9yL21hcCc7XG5cbmltcG9ydCB7IHJlc2V0Wm9vbSB9IGZyb20gJy4uL2FjdGlvbnMvem9vbSc7XG5pbXBvcnQgeyBDQUxDVUxBVEUgfSBmcm9tICcuLi9hY3Rpb25zL2hlYXRtYXAnO1xuXG5leHBvcnQgY29uc3Qgc3luY1pvb20gPSAoYWN0aW9uJCkgPT4ge1xuICByZXR1cm4gYWN0aW9uJC5vZlR5cGUoQ0FMQ1VMQVRFKS5tYXAoKCkgPT4gcmVzZXRab29tKCkpO1xufTtcblxuXG5cbi8vIFdFQlBBQ0sgRk9PVEVSIC8vXG4vLyAuL3NyYy9icm93c2VyL2VwaWNzL3pvb20uanMiLCIvKipcbiAqIEBwYXJhbSB7SW1tdXRhYmxlLk1hcH0gbWFwXG4gKiBAcmV0dXJuIHtzdHJpbmd9IHNsdWdpZmllZCBzdHJpbmcgb2YgdGhlIG1hcFxuICovXG5leHBvcnQgZnVuY3Rpb24gc2x1Z2lmeShtYXApIHtcbiAgcmV0dXJuIG1hcC5lbnRyeVNlcSgpLm1hcCgoZW50cnkpID0+IGVudHJ5LmpvaW4oJy0nKSkuam9pbignLScpO1xufTtcblxuXG5cbi8vIFdFQlBBQ0sgRk9PVEVSIC8vXG4vLyAuL3NyYy9icm93c2VyL2hlbHBlcnMvbWFwLmpzIiwiZXhwb3J0IGNvbnN0IHBhdGhuYW1lVG9BcHBQYXJhbXMgPSAocGF0aG5hbWUpID0+IHtcbiAgY29uc3QgcGFyYW1zID0ge307XG4gIGNvbnN0IG1hdGNoID0gcGF0aG5hbWUubWF0Y2goL1xcLyhsZWFndWVcXC8oW15cXC9dKykpPy8pO1xuXG4gIGlmIChtYXRjaCkge1xuICAgIGlmIChtYXRjaFsyXSkge1xuICAgICAgcGFyYW1zLmxlYWd1ZSA9IGRlY29kZVVSSShtYXRjaFsyXSk7XG4gICAgfVxuICB9XG5cbiAgcmV0dXJuIHBhcmFtcztcbn07XG5cbi8vIGFyZSB0aGUgb25seSBoZWxwZXJzIHJseSBvbmx5IGpzeCBleHByZXNzaW9ucyBmb3IgY29tcG9uZW50cz9cbmV4cG9ydCBjb25zdCBhcHBQYXRoID0gKGxlYWd1ZSkgPT4ge1xuICBsZXQgdXJsID0gJy8nO1xuXG4gIGlmIChsZWFndWUpIHtcbiAgICB1cmwgKz0gYGxlYWd1ZS8ke2xlYWd1ZS5uYW1lfWA7XG4gIH1cblxuICByZXR1cm4gdXJsO1xufTtcblxuXG5cbi8vIFdFQlBBQ0sgRk9PVEVSIC8vXG4vLyAuL3NyYy9icm93c2VyL2hlbHBlcnMvcm91dGVzLmpzIiwiaW1wb3J0IHsgTWFwIH0gZnJvbSAnaW1tdXRhYmxlJztcblxuY29uc3QgaW5pdGlhbCA9IE1hcCh7XG4gIGRpbWVuc2lvbnM6IE1hcCh7XG4gICAgd2lkdGg6IDE5MDAsXG4gICAgaGVpZ2h0OiAxNTUwLFxuICB9KSxcbn0pO1xuXG5jb25zdCBhcHAgPSAoKSA9PiB7XG4gIHJldHVybiBpbml0aWFsO1xufTtcblxuZXhwb3J0IGRlZmF1bHQgYXBwO1xuXG5cblxuLy8gV0VCUEFDSyBGT09URVIgLy9cbi8vIC4vc3JjL2Jyb3dzZXIvcmVkdWNlcnMvYXBwLmpzIiwiaW1wb3J0IHsgTWFwIH0gZnJvbSAnaW1tdXRhYmxlJztcbmNvbnN0IE5lZGIgPSByZXF1aXJlKCduZWRiJyk7XG5cbmltcG9ydCB7IEFXQUlUSU5HX1JPV1MsIElOU0VSVF9ST1dTLCBTRVRfREIgfSBmcm9tICcuLi9hY3Rpb25zL2RiJztcblxuLy8gc3RhdGVzIG9mIHRoZSBkYlxuZXhwb3J0IGNvbnN0IFNUQVRFID0ge1xuICBFTVBUWTogJ0RCL0VNUFRZJyxcbiAgQVdBSVRJTkdfUk9XUyxcbiAgSU5TRVJUX1JPV1MsXG4gIFJFQURZOiAnREIvUkVBRFknLFxufTtcblxuY29uc3QgaW5pdGlhbCA9IE1hcCh7XG4gIGRiOiBuZXcgTmVkYigpLFxuICBzdGF0ZTogU1RBVEUuRU1QVFksXG59KTtcblxuY29uc3QgZGIgPSAoc3RhdGUgPSBpbml0aWFsLCBhY3Rpb24pID0+IHtcbiAgc3dpdGNoIChhY3Rpb24udHlwZSkge1xuICAgIGNhc2UgQVdBSVRJTkdfUk9XUzpcbiAgICAgIHJldHVybiBzdGF0ZS5zZXQoJ3N0YXRlJywgU1RBVEUuQVdBSVRJTkdfUk9XUyk7XG4gICAgY2FzZSBJTlNFUlRfUk9XUzpcbiAgICAgIHJldHVybiBzdGF0ZS5zZXQoJ3N0YXRlJywgU1RBVEUuSU5TRVJUX1JPV1MpO1xuICAgIGNhc2UgU0VUX0RCOlxuICAgICAgcmV0dXJuIHN0YXRlLndpdGhNdXRhdGlvbnMoKHN0YXRlKSA9PiB7XG4gICAgICAgIHN0YXRlLnNldCgnZGInLCBhY3Rpb24ucGF5bG9hZC5kYik7XG4gICAgICAgIHN0YXRlLnNldCgnc3RhdGUnLCBTVEFURS5SRUFEWSk7XG4gICAgICB9KTtcbiAgICBkZWZhdWx0OlxuICAgICAgcmV0dXJuIHN0YXRlO1xuICB9O1xufTtcblxuZXhwb3J0IGRlZmF1bHQgZGI7XG5cblxuXG4vLyBXRUJQQUNLIEZPT1RFUiAvL1xuLy8gLi9zcmMvYnJvd3Nlci9yZWR1Y2Vycy9kYi5qcyIsImltcG9ydCBJbW11dGFibGUsIHsgTGlzdCwgTWFwIH0gZnJvbSAnaW1tdXRhYmxlJztcblxuaW1wb3J0IHtcbiAgQ0FMQ1VMQVRFLFxuICBTRVQsXG4gIEVYVFJFTUFfQ0hBTkdFLFxuICBEQVRBX1VSTF9DSEFOR0UsXG59IGZyb20gJy4uL2FjdGlvbnMvaGVhdG1hcCc7XG5cbmV4cG9ydCBjb25zdCBTVEFURSA9IHtcbiAgQ0FMQ1VMQVRJTkc6ICdDQUxDVUxBVElORycsXG4gIFJFQURZOiAnUkVBRFknLFxufTtcblxuY29uc3QgaW5pdGlhbCA9IE1hcCh7XG4gIGRhdGE6IExpc3QoKSxcbiAgZGF0YV91cmw6IHVuZGVmaW5lZCxcbiAgbWF4OiAwLFxuICBoYXNoOiBudWxsLFxuICBpbnN0YW5jZTogbnVsbCxcbiAgbGVnZW5kOiBNYXAoe1xuICAgIG1pbjogMCxcbiAgICBtYXg6IDAsXG4gICAgZ3JhZGllbnQ6IE1hcCgpLFxuICB9KSxcbiAgc3RhdGU6IFNUQVRFLlJFQURZLFxufSk7XG5cbmNvbnN0IGhlYXRtYXAgPSAoc3RhdGUgPSBpbml0aWFsLCBhY3Rpb24pID0+IHtcbiAgc3dpdGNoIChhY3Rpb24udHlwZSkge1xuICAgIGNhc2UgU0VUOlxuICAgICAgcmV0dXJuIHN0YXRlLndpdGhNdXRhdGlvbnMoKHN0YXRlKSA9PiB7XG4gICAgICAgIHN0YXRlLnNldCgnbWF4JywgYWN0aW9uLnBheWxvYWQubWF4KTtcbiAgICAgICAgc3RhdGUuc2V0KCdkYXRhJywgTGlzdChhY3Rpb24ucGF5bG9hZC5kYXRhKSk7XG4gICAgICAgIHN0YXRlLnNldCgnaGFzaCcsIGFjdGlvbi5wYXlsb2FkLmhhc2gpO1xuICAgICAgICBzdGF0ZS5zZXQoJ3N0YXRlJywgU1RBVEUuUkVBRFkpO1xuICAgICAgfSk7XG4gICAgY2FzZSBDQUxDVUxBVEU6XG4gICAgICByZXR1cm4gc3RhdGUuc2V0KCdzdGF0ZScsIFNUQVRFLkNBTENVTEFUSU5HKTtcbiAgICBjYXNlIEVYVFJFTUFfQ0hBTkdFOlxuICAgICAgcmV0dXJuIHN0YXRlLnNldCgnbGVnZW5kJywgSW1tdXRhYmxlLmZyb21KUyhhY3Rpb24ucGF5bG9hZC5sZWdlbmQpKTtcbiAgICBjYXNlIERBVEFfVVJMX0NIQU5HRTpcbiAgICAgIHJldHVybiBzdGF0ZS5zZXQoJ2RhdGFfdXJsJywgYWN0aW9uLnBheWxvYWQuZGF0YV91cmwpO1xuICAgIGRlZmF1bHQ6XG4gICAgICByZXR1cm4gc3RhdGU7XG4gIH1cbn07XG5cbmV4cG9ydCBkZWZhdWx0IGhlYXRtYXA7XG5cblxuXG4vLyBXRUJQQUNLIEZPT1RFUiAvL1xuLy8gLi9zcmMvYnJvd3Nlci9yZWR1Y2Vycy9oZWF0bWFwLmpzIiwiaW1wb3J0IHsgY29tYmluZVJlZHVjZXJzIH0gZnJvbSAncmVkdXgtaW1tdXRhYmxlJztcbmltcG9ydCB7IGNyZWF0ZUZvcm1zIH0gZnJvbSAncmVhY3QtcmVkdXgtZm9ybS9pbW11dGFibGUnO1xuXG5pbXBvcnQgeyBsYWJlbCBhcyBkYXRhU291cmNlTGFiZWwgfSBmcm9tICcuLi8uLi9kYXRhX3NvdXJjZXMvZmFjdG9yeSc7XG5pbXBvcnQgeyBhY3RpdmVTb3VyY2UgfSBmcm9tICcuLi9zZWxlY3RvcnMvZGF0YSc7XG5cbmltcG9ydCBhcHAgZnJvbSAnLi9hcHAuanMnO1xuaW1wb3J0IGZvcm1zLCB7IHNsdWdpZnkgYXMgc2x1Z2lmeUZvcm0gfSBmcm9tICcuL2Zvcm1zLmpzJztcbmltcG9ydCBwYXNzaXZlX3RyZWUgZnJvbSAnLi9wYXNzaXZlX3RyZWUuanMnO1xuaW1wb3J0IGRhdGEgZnJvbSAnLi9kYXRhLmpzJztcbmltcG9ydCBkYiBmcm9tICcuL2RiLmpzJztcbmltcG9ydCBuYXZfdGFicyBmcm9tICcuL25hdl90YWJzLmpzJztcbmltcG9ydCBwb2UgZnJvbSAnLi9wb2UuanMnO1xuaW1wb3J0IHJvdXRpbmcgZnJvbSAnLi9yb3V0aW5nJztcbmltcG9ydCByb3dzIGZyb20gJy4vcm93cy5qcyc7XG5pbXBvcnQgaGVhdG1hcCBmcm9tICcuL2hlYXRtYXAuanMnO1xuaW1wb3J0IHRvb2x0aXAgZnJvbSAnLi90b29sdGlwLmpzJztcbmltcG9ydCB6b29tIGZyb20gJy4vem9vbS5qcyc7XG5cbi8qKlxuICogQHBhcmFtIHtMaXN0fSB0YXNrX3N0YXRlIHJldHVybnZhbCBmcm9tIHtnZXRUYXNrU3RhdGV9XG4gKiBAcmV0dXJuIHtzdHJpbmdbXX0gYXJyYXkgb2Ygc3RyaW5nIHJlcHJlc2VudGF0aW9ucyBvZiBhbGwgdGFza3NcbiAqL1xuZXhwb3J0IGNvbnN0IGdldFJ1bm5pbmdUYXNrcyA9ICh0YXNrX3N0YXRlKSA9PiB7XG4gIHJldHVybiB0YXNrX3N0YXRlXG4gICAgLmZpbHRlcigoWywgcnVubmluZ10pID0+IHJ1bm5pbmcpXG4gICAgLm1hcCgoW3Rhc2tdKSA9PiB0YXNrKTtcbn07XG5cbi8qKlxuICogZ2VuZXJhdGVzIGEgbWVhbmluZ2Z1bCBmaWxlbmFtZSBmb3IgdGhlIGN1cnJlbnQgaGVhdG1hcFxuICogQHBhcmFtIHtSZWR1eFN0YXRlfSBzdGF0ZVxuICogQHJldHVybiB7c3RyaW5nfVxuICovXG5leHBvcnQgZnVuY3Rpb24gaGVhdG1hcExhYmVsKHN0YXRlKSB7XG4gIHJldHVybiBbXG4gICAgZGF0YVNvdXJjZUxhYmVsKGFjdGl2ZVNvdXJjZShzdGF0ZS5nZXQoJ2RhdGEnKSkpLFxuICAgIHNsdWdpZnlGb3JtKHN0YXRlLmdldCgnZGF0YV9maWx0ZXInKSksXG4gIF0uam9pbignLScpO1xufVxuXG5jb25zdCB0cmVlU3RhdHNBcHAgPSBjb21iaW5lUmVkdWNlcnMoe1xuICBhcHAsXG4gIGRiLCAvLyByZWR1eCAoZGV2IHRvb2xzIGFuZCBzdGF0ZS1pbnZhcmlhbnQgaGF2ZSBwcm9ibGVtcyB3aXRoIE5lZGIgaXQgc2VlbXNcbiAgcm93cyxcbiAgaGVhdG1hcCxcbiAgbmF2X3RhYnMsXG4gIHBhc3NpdmVfdHJlZSxcbiAgcG9lLFxuICB0b29sdGlwLFxuICB6b29tLFxuICBkYXRhLFxuICByb3V0aW5nLFxuICAuLi5jcmVhdGVGb3Jtcyhmb3JtcyksXG59KTtcblxuZXhwb3J0IGRlZmF1bHQgdHJlZVN0YXRzQXBwO1xuXG5cblxuLy8gV0VCUEFDSyBGT09URVIgLy9cbi8vIC4vc3JjL2Jyb3dzZXIvcmVkdWNlcnMvaW5kZXguanMiLCJpbXBvcnQgeyBNYXAgfSBmcm9tICdpbW11dGFibGUnO1xuaW1wb3J0IHsgQUNUSVZBVEUgfSBmcm9tICcuLi9hY3Rpb25zL25hdl90YWJzJztcblxuY29uc3QgaW5pdGlhbCA9IE1hcCgpO1xuXG4vKipcbiAqIEBwYXJhbSB7T2JqZWN0fSBzdGF0ZVxuICogQHBhcmFtIHtPYmplY3R9IGFjdGlvbiBjcmVhdG9yXG4gKiBAcmV0dXJuIHtPYmplY3R9IG5ldyBzdGF0ZVxuICovXG5leHBvcnQgZGVmYXVsdCBmdW5jdGlvbiBuYXZfdGFicyhzdGF0ZSA9IGluaXRpYWwsIGFjdGlvbikge1xuICBzd2l0Y2ggKGFjdGlvbi50eXBlKSB7XG4gICAgY2FzZSBBQ1RJVkFURTpcbiAgICAgIHJldHVybiBzdGF0ZS5zZXQoYWN0aW9uLnBheWxvYWQudGFiX2tleSwgYWN0aW9uLnBheWxvYWQua2V5KTtcbiAgICBkZWZhdWx0OlxuICAgICAgcmV0dXJuIHN0YXRlO1xuICB9XG59XG5cblxuXG4vLyBXRUJQQUNLIEZPT1RFUiAvL1xuLy8gLi9zcmMvYnJvd3Nlci9yZWR1Y2Vycy9uYXZfdGFicy5qcyIsImltcG9ydCBQYXNzaXZlVHJlZSBmcm9tICcuLi8uLi9wb2UvUGFzc2l2ZVRyZWUnO1xuXG5pbXBvcnQgeyBORVdfVFJFRSB9IGZyb20gJy4uL2FjdGlvbnMvcGFzc2l2ZV90cmVlJztcblxuY29uc3QgaW5pdGlhbF9zdGF0ZSA9IG5ldyBQYXNzaXZlVHJlZSh7XG4gICAgbm9kZXM6IFtdLFxuICAgIGdyb3VwczogW10sXG59KTtcblxuY29uc3QgcGFzc2l2ZV90cmVlID0gKHN0YXRlID0gaW5pdGlhbF9zdGF0ZSwgYWN0aW9uKSA9PiB7XG4gIHN3aXRjaCAoYWN0aW9uLnR5cGUpIHtcbiAgICBjYXNlIE5FV19UUkVFOlxuICAgICAgcmV0dXJuIG5ldyBQYXNzaXZlVHJlZShhY3Rpb24ucGF5bG9hZC5kYXRhLCBhY3Rpb24ucGF5bG9hZC5pZCk7XG4gICAgZGVmYXVsdDpcbiAgICAgIHJldHVybiBzdGF0ZTtcbiAgfVxufTtcblxuZXhwb3J0IGRlZmF1bHQgcGFzc2l2ZV90cmVlO1xuXG5cblxuLy8gV0VCUEFDSyBGT09URVIgLy9cbi8vIC4vc3JjL2Jyb3dzZXIvcmVkdWNlcnMvcGFzc2l2ZV90cmVlLmpzIiwiaW1wb3J0IHsgTWFwIH0gZnJvbSAnaW1tdXRhYmxlJztcbmNvbnN0IFBPRSA9IHJlcXVpcmUoJy4uLy4uL3BvZS9kYXRhJyk7XG5cbmNvbnN0IGluaXRpYWwgPSBNYXAoe1xuICBjbGFzc2VzOiBNYXAoUE9FLmNsYXNzZXMpLFxuICBsZWFndWVzOiBNYXAoUE9FLmxlYWd1ZXMpLFxufSk7XG5cbmNvbnN0IHBvZSA9IChzdGF0ZSA9IGluaXRpYWwsIGFjdGlvbikgPT4ge1xuICByZXR1cm4gc3RhdGU7XG59O1xuXG5leHBvcnQgZGVmYXVsdCBwb2U7XG5cblxuXG4vLyBXRUJQQUNLIEZPT1RFUiAvL1xuLy8gLi9zcmMvYnJvd3Nlci9yZWR1Y2Vycy9wb2UuanMiLCJpbXBvcnQgeyBMT0NBVElPTl9DSEFOR0UgfSBmcm9tICdyZWFjdC1yb3V0ZXItcmVkdXgnO1xuaW1wb3J0IHsgTWFwIH0gZnJvbSAnaW1tdXRhYmxlJztcblxuY29uc3QgaW5pdGlhbCA9IE1hcCh7XG4gIGxvY2F0aW9uQmVmb3JlVHJhbnNpdGlvbnM6IG51bGwsXG59KTtcblxuY29uc3Qgcm91dGluZyA9IChzdGF0ZSA9IGluaXRpYWwsIGFjdGlvbikgPT4ge1xuICBzd2l0Y2ggKGFjdGlvbi50eXBlKSB7XG4gIGNhc2UgTE9DQVRJT05fQ0hBTkdFOlxuICAgIHJldHVybiBzdGF0ZS5tZXJnZSh7XG4gICAgICBsb2NhdGlvbkJlZm9yZVRyYW5zaXRpb25zOiBhY3Rpb24ucGF5bG9hZCxcbiAgICB9KTtcbiAgZGVmYXVsdDpcbiAgICByZXR1cm4gc3RhdGU7XG4gIH1cbn07XG5cbmV4cG9ydCBkZWZhdWx0IHJvdXRpbmc7XG5cblxuXG4vLyBXRUJQQUNLIEZPT1RFUiAvL1xuLy8gLi9zcmMvYnJvd3Nlci9yZWR1Y2Vycy9yb3V0aW5nLmpzIiwiaW1wb3J0IHsgTGlzdCwgTWFwIH0gZnJvbSAnaW1tdXRhYmxlJztcbmltcG9ydCB7IFNFTEVDVF9ST1dTLCBVUERBVEVfUk9XUyB9IGZyb20gJy4uL2FjdGlvbnMvcm93cyc7XG5cbmNvbnN0IGluaXRpYWwgPSBNYXAoe1xuICByb3dzOiBMaXN0KCksXG4gIHNlbGVjdGluZzogZmFsc2UsXG59KTtcblxuY29uc3Qgcm93cyA9IChzdGF0ZSA9IGluaXRpYWwsIGFjdGlvbikgPT4ge1xuICBzd2l0Y2ggKGFjdGlvbi50eXBlKSB7XG4gICAgY2FzZSBVUERBVEVfUk9XUzpcbiAgICAgIHJldHVybiBzdGF0ZS53aXRoTXV0YXRpb25zKChzdGF0ZSkgPT4ge1xuICAgICAgICBzdGF0ZS5zZXQoJ3Jvd3MnLCBMaXN0KGFjdGlvbi5wYXlsb2FkLnJvd3MpKTtcbiAgICAgICAgc3RhdGUuc2V0KCdzZWxlY3RpbmcnLCBmYWxzZSk7XG4gICAgICB9KTtcbiAgICBjYXNlIFNFTEVDVF9ST1dTOlxuICAgICAgcmV0dXJuIHN0YXRlLnNldCgnc2VsZWN0aW5nJywgdHJ1ZSk7XG4gICAgZGVmYXVsdDpcbiAgICAgIHJldHVybiBzdGF0ZTtcbiAgfTtcbn07XG5cbmV4cG9ydCBkZWZhdWx0IHJvd3M7XG5cblxuXG4vLyBXRUJQQUNLIEZPT1RFUiAvL1xuLy8gLi9zcmMvYnJvd3Nlci9yZWR1Y2Vycy9yb3dzLmpzIiwiaW1wb3J0IHsgTWFwIH0gZnJvbSAnaW1tdXRhYmxlJztcbmltcG9ydCB7IFNIT1dfVE9PTFRJUCB9IGZyb20gJy4uL2FjdGlvbnMvdG9vbHRpcCc7XG5cbmNvbnN0IGluaXRpYWwgPSBNYXAoe1xuICB4OiAwLFxuICB5OiAwLFxuICBub2RlX2lkOiB1bmRlZmluZWQsXG4gIGV2ZW50OiBNYXAoKSxcbn0pO1xuXG5jb25zdCB0b29sdGlwID0gKHN0YXRlID0gaW5pdGlhbCwgYWN0aW9uKSA9PiB7XG4gIHN3aXRjaCAoYWN0aW9uLnR5cGUpIHtcbiAgICBjYXNlIFNIT1dfVE9PTFRJUDpcbiAgICAgIGNvbnN0IHsgeCwgeSwgbm9kZV9pZCwgZXZlbnQgfSA9IGFjdGlvbi5wYXlsb2FkO1xuICAgICAgcmV0dXJuIHN0YXRlLndpdGhNdXRhdGlvbnMoKHN0YXRlKSA9PiB7XG4gICAgICAgIHN0YXRlLnNldCgneCcsIHgpO1xuICAgICAgICBzdGF0ZS5zZXQoJ3knLCB5KTtcbiAgICAgICAgc3RhdGUuc2V0KCdub2RlX2lkJywgbm9kZV9pZCk7XG4gICAgICAgIHN0YXRlLnNldCgnZXZlbnQnLCBNYXAoZXZlbnQpKTtcbiAgICAgIH0pO1xuICAgIGRlZmF1bHQ6XG4gICAgICByZXR1cm4gc3RhdGU7XG4gIH1cbn07XG5cbmV4cG9ydCBkZWZhdWx0IHRvb2x0aXA7XG5cblxuXG4vLyBXRUJQQUNLIEZPT1RFUiAvL1xuLy8gLi9zcmMvYnJvd3Nlci9yZWR1Y2Vycy90b29sdGlwLmpzIiwiaW1wb3J0IHsgem9vbUlkZW50aXR5IH0gZnJvbSAnZDMtem9vbSc7XG5pbXBvcnQgeyBNYXAgfSBmcm9tICdpbW11dGFibGUnO1xuXG5pbXBvcnQgeyB0cmFuc2Zvcm1Ub0ltbXV0YWJsZSB9IGZyb20gJy4uLy4uL2QzX3V0aWwnO1xuaW1wb3J0IHsgWk9PTUVELCBSRVNFVF9aT09NLCBDT01NQU5EX0VYRUNVVEVEIH0gZnJvbSAnLi4vYWN0aW9ucy96b29tJztcbmltcG9ydCB7XG4gIFJFU0VUX1pPT00gYXMgQ09NTUFORF9SRVNFVF9aT09NLFxufSBmcm9tICcuLi9jb21wb25lbnRzL1pvb21hYmxlLmNvbnN0YW50cyc7XG5cbmNvbnN0IGluaXRpYWwgPSBNYXAoe1xuICB0cmFuc2Zvcm06IHRyYW5zZm9ybVRvSW1tdXRhYmxlKHpvb21JZGVudGl0eSksXG4gIGNvbW1hbmQ6IHVuZGVmaW5lZCxcbn0pO1xuXG5jb25zdCB6b29tID0gKHN0YXRlID0gaW5pdGlhbCwgYWN0aW9uKSA9PiB7XG4gIHN3aXRjaCAoYWN0aW9uLnR5cGUpIHtcbiAgICBjYXNlIFpPT01FRDpcbiAgICAgIHJldHVybiBzdGF0ZS5zZXQoXG4gICAgICAgICd0cmFuc2Zvcm0nLFxuICAgICAgICB0cmFuc2Zvcm1Ub0ltbXV0YWJsZShhY3Rpb24ucGF5bG9hZC50cmFuc2Zvcm0pLFxuICAgICAgKTtcbiAgICBjYXNlIFJFU0VUX1pPT006XG4gICAgICByZXR1cm4gc3RhdGUud2l0aE11dGF0aW9ucygoc3RhdGUpID0+IHtcbiAgICAgICAgc3RhdGUuc2V0KCdjb21tYW5kJywgQ09NTUFORF9SRVNFVF9aT09NKTtcbiAgICAgICAgc3RhdGUuc2V0KCd0cmFuc2Zvcm0nLCB0cmFuc2Zvcm1Ub0ltbXV0YWJsZSh6b29tSWRlbnRpdHkpKTtcbiAgICAgIH0pO1xuICAgIGNhc2UgQ09NTUFORF9FWEVDVVRFRDpcbiAgICAgIHJldHVybiBzdGF0ZS5zZXQoJ2NvbW1hbmQnLCB1bmRlZmluZWQpO1xuICAgIGRlZmF1bHQ6XG4gICAgICByZXR1cm4gc3RhdGU7XG4gIH1cbn07XG5cbmV4cG9ydCBkZWZhdWx0IHpvb207XG5cblxuXG4vLyBXRUJQQUNLIEZPT1RFUiAvL1xuLy8gLi9zcmMvYnJvd3Nlci9yZWR1Y2Vycy96b29tLmpzIiwiY29uc3QgUE9FID0gcmVxdWlyZSgnLi4vLi4vcG9lL2RhdGEnKTtcblxuZXhwb3J0IGNvbnN0IGxlYWd1ZUZyb21OYW1lID0gKGxlYWd1ZV9uYW1lLCBub3Rfc2V0X3ZhbHVlKSA9PiB7XG4gIGNvbnN0IGtleSA9IFBPRS5sZWFndWVzLmZpbmRLZXkoKGxlYWd1ZSkgPT4ge1xuICAgIHJldHVybiBsZWFndWUubmFtZSA9PT0gbGVhZ3VlX25hbWU7XG4gIH0pO1xuXG4gIGlmIChrZXkgPT09IHVuZGVmaW5lZCkge1xuICAgIHJldHVybiBub3Rfc2V0X3ZhbHVlO1xuICB9IGVsc2Uge1xuICAgIHJldHVybiBrZXk7XG4gIH1cbn07XG5cblxuXG4vLyBXRUJQQUNLIEZPT1RFUiAvL1xuLy8gLi9zcmMvYnJvd3Nlci9zZWxlY3RvcnMvcG9lLmpzIiwiaW1wb3J0IHsgY29tcG9zZSB9IGZyb20gJ3JlZHV4JztcblxuaW1wb3J0IHsgdmVyYm9zZV9hY3Rpb25zIH0gZnJvbSAnLi9sb2dnZXInO1xuaW1wb3J0IG1pZGRsZXdhcmUgZnJvbSAnLi9taWRkbGV3YXJlJztcblxuLy8gQHNlZSB7aHR0cHM6Ly9naXRodWIuY29tL3phbG1veGlzdXMvcmVkdXgtZGV2dG9vbHMtZXh0ZW5zaW9ufVxuY29uc3QgY29tcG9zZUVuaGFuY2VycyA9XG4gIHR5cGVvZiB3aW5kb3cgPT09ICdvYmplY3QnICYmXG4gIHdpbmRvdy5fX1JFRFVYX0RFVlRPT0xTX0VYVEVOU0lPTl9DT01QT1NFX18gP1xuICAgIHdpbmRvdy5fX1JFRFVYX0RFVlRPT0xTX0VYVEVOU0lPTl9DT01QT1NFX18oe1xuICAgICAgLy8gU3BlY2lmeSBleHRlbnNpb27igJlzIG9wdGlvbnNcbiAgICAgIGFjdGlvbnNCbGFja2xpc3Q6IHZlcmJvc2VfYWN0aW9ucyxcbiAgICB9KSA6IGNvbXBvc2U7XG5cbmNvbnN0IGVuaGFuY2VyID0gY29tcG9zZUVuaGFuY2VycyhcbiAgbWlkZGxld2FyZSxcbiAgLy8gYWRkaXRpb25hbCBlbmhhbmNlclxuKTtcblxuZXhwb3J0IGRlZmF1bHQgZW5oYW5jZXI7XG5cblxuXG4vLyBXRUJQQUNLIEZPT1RFUiAvL1xuLy8gLi9zcmMvYnJvd3Nlci9zdG9yZS9lbmhhbmNlci5qcyIsImltcG9ydCB7IGFwcGx5TWlkZGxld2FyZSB9IGZyb20gJ3JlZHV4JztcbmltcG9ydCB0aHVua01pZGRsZXdhcmUgZnJvbSAncmVkdXgtdGh1bmsnO1xuaW1wb3J0IHsgY3JlYXRlRXBpY01pZGRsZXdhcmUgfSBmcm9tICdyZWR1eC1vYnNlcnZhYmxlJztcbmltcG9ydCB7IGJyb3dzZXJIaXN0b3J5IH0gZnJvbSAncmVhY3Qtcm91dGVyJztcbmltcG9ydCB7IHJvdXRlck1pZGRsZXdhcmUgfSBmcm9tICdyZWFjdC1yb3V0ZXItcmVkdXgnO1xuXG5pbXBvcnQgbG9nZ2VyIGZyb20gJy4vbG9nZ2VyJztcbmltcG9ydCByb290X2VwaWMgZnJvbSAnLi4vZXBpY3MnO1xuXG5jb25zdCBlcGljX21pZGRsZXdhcmUgPSBjcmVhdGVFcGljTWlkZGxld2FyZShyb290X2VwaWMpO1xuXG5jb25zdCBtaWRkbGV3YXJlcyA9IFtcbiAgdGh1bmtNaWRkbGV3YXJlLFxuICBlcGljX21pZGRsZXdhcmUsXG4gIHJvdXRlck1pZGRsZXdhcmUoYnJvd3Nlckhpc3RvcnkpLFxuXTtcblxuaWYgKHByb2Nlc3MuZW52Lk5PREVfRU5WICE9PSBgcHJvZHVjdGlvbmApIHtcbiAgbWlkZGxld2FyZXMucHVzaChsb2dnZXIpO1xufVxuXG5jb25zdCBtaWRkbGV3YXJlID0gYXBwbHlNaWRkbGV3YXJlKC4uLm1pZGRsZXdhcmVzKTtcblxuZXhwb3J0IGRlZmF1bHQgbWlkZGxld2FyZTtcblxuXG5cbi8vIFdFQlBBQ0sgRk9PVEVSIC8vXG4vLyAuL3NyYy9icm93c2VyL3N0b3JlL21pZGRsZXdhcmUuanMiLCJpbXBvcnQgeyBNYXAgfSBmcm9tICdpbW11dGFibGUnO1xuXG5jb25zdCBwcmVsb2FkID0gTWFwKHtcbiAgbmF2X3RhYnM6IE1hcCh7XG4gICAgY29uZjogJ2RhdGFfZmlsdGVyJywgLy8gc2hvdyBkYXRhIHNvdXJjZSBpbml0aWFsbHlcbiAgfSksXG59KTtcblxuZXhwb3J0IGRlZmF1bHQgcHJlbG9hZDtcblxuXG5cbi8vIFdFQlBBQ0sgRk9PVEVSIC8vXG4vLyAuL3NyYy9icm93c2VyL3N0b3JlL3ByZWxvYWQuanMiLCJpbXBvcnQgeyBNYXAgfSBmcm9tICdpbW11dGFibGUnO1xuaW1wb3J0IHsgem9vbUlkZW50aXR5IH0gZnJvbSAnZDMtem9vbSc7XG5cbi8qKlxuICogQHBhcmFtIHtkMy10cmFuc2Zvcm19IHQxXG4gKiBAcGFyYW0ge2QzLXRyYW5zZm9ybX0gdDJcbiAqIEByZXR1cm4ge2Jvb2xlYW59IGlmIHRoZSBhcHBsaWVkIHRyYW5zZm9ybWF0aW9uIGlzIGVxdWFsXG4gKi9cbmV4cG9ydCBmdW5jdGlvbiB0cmFuc2Zvcm1FcXVhbCh0MSwgdDIpIHtcbiAgcmV0dXJuIHQxLnggPT09IHQyLnhcbiAgICAmJiB0MS55ID09PSB0Mi55XG4gICAgJiYgdDEuayA9PT0gdDIuaztcbn07XG5cbi8qKlxuICogc3VwcG9ydHMgem9vbSB0cmFuc2Zvcm1hdGlvbiBmb3IgaHRtbCBlbGVtZW50c1xuICpcbiAqIEBwYXJhbSB7ZDMtdHJhbnNmb3JtfSB0cmFuc2Zvcm1cbiAqIEByZXR1cm4ge3N0cmluZ30gdGhlIGRpdiBzdHlsZSBhdHRyIGZvciB0cmFuc2Zvcm1cbiAqL1xuZXhwb3J0IGZ1bmN0aW9uIGJyb3dzZXJUcmFuc2Zvcm0odHJhbnNmb3JtKSB7XG4gIGNvbnN0IHRyYW5zbGF0aW9uID0gYHRyYW5zbGF0ZSgke3RyYW5zZm9ybS54IHwgMH1weGBcbiAgICAgICAgICAgICAgICAgICAgKyBgLCAke3RyYW5zZm9ybS55IHwgMH1weClgO1xuICBjb25zdCBzY2FsZSA9IGBzY2FsZSgke3RyYW5zZm9ybS5rfSlgO1xuXG4gIHJldHVybiBbdHJhbnNsYXRpb24sIHNjYWxlXS5qb2luKCcgJyk7XG59O1xuXG4vKipcbiAqIEBwYXJhbSB7ZDNUcmFuc2Zvcm19IHRyYW5zZm9ybVxuICogQHJldHVybiB7TWFwfSBpbW11dGFibGUgbWFwIHdpdGggcmVsZXZhbnQgcHJvcHMgZm9yIGQzVHJhbnNmb3JtIGNyZWF0aW9uXG4gKi9cbmV4cG9ydCBmdW5jdGlvbiB0cmFuc2Zvcm1Ub0ltbXV0YWJsZSh0cmFuc2Zvcm0pIHtcbiAgcmV0dXJuIE1hcCh0cmFuc2Zvcm0pO1xufTtcblxuLyoqXG4gKiBAcGFyYW0ge01hcH0gbWFwXG4gKiBAcmV0dXJuIHtkM1RyYW5zZm9ybX1cbiAqL1xuZXhwb3J0IGZ1bmN0aW9uIGltbXV0YWJsZVRvVHJhbnNmb3JtKG1hcCkge1xuICByZXR1cm4gem9vbUlkZW50aXR5XG4gICAgLnNjYWxlKG1hcC5nZXQoJ2snKSlcbiAgICAudHJhbnNsYXRlKG1hcC5nZXQoJ3gnKSwgbWFwLmdldCgneScpKTtcbn07XG5cblxuXG4vLyBXRUJQQUNLIEZPT1RFUiAvL1xuLy8gLi9zcmMvZDNfdXRpbC5qcyIsIi8qKlxuICogYSBzb3VyY2UgZm9yIG5lZGJcbiAqL1xuY2xhc3MgQWJzdHJhY3REYXRhU291cmNlIHtcbiAgLyoqXG4gICAqIGdldCB0aGUgcm93cyBvZiB0aGUgc291cmNlIGluIGEgUHJvbWlzZVxuICAgKiBAcmV0dXJuIHtQcm9taXNlfVxuICAgKi9cbiAgcm93cygpIHtcbiAgICByZXR1cm4gbmV3IFByb21pc2UoKGZ1bGZpbGwsIHJlamVjdCkgPT4ge1xuICAgICAgcmVqZWN0KCdyb3dzIG5vdCBpbXBsZW1lbnRlZCcpO1xuICAgIH0pO1xuICB9XG5cbiAgLyoqXG4gICAqIEByZXR1cm4ge0FueX0gdGhlIFBhc3NpdmVUcmVlIGlkZW50aWZpZXIgYXNzb2NpYXRlZCB0byB0aGlzIERhdGFTb3VyY2VcbiAgICovXG4gIGdldCB0cmVlX2lkZW50KCkge1xuICAgIHJldHVybiB1bmRlZmluZWQ7XG4gIH1cbn07XG5cbmV4cG9ydCBkZWZhdWx0IEFic3RyYWN0RGF0YVNvdXJjZTtcblxuXG5cbi8vIFdFQlBBQ0sgRk9PVEVSIC8vXG4vLyAuL3NyYy9kYXRhX3NvdXJjZXMvQWJzdHJhY3REYXRhU291cmNlLmpzIiwiY29uc3Qgc2VsZiA9IHJlcXVpcmUoJy4vUGFzc2l2ZU5vZGVDb25zdCcpO1xuY29uc3QgdGF1ID0gMiAqIE1hdGguUEk7XG5cbm1vZHVsZS5leHBvcnRzID0gY2xhc3Mge1xuICAvKipcbiAgICogQGNvbnN0cnVjdG9yXG4gICAqIEBwYXJhbSB7T2JqZWN0fSBwcm9wcyBmcm9tIHRoZSBnZ2cgcGFzc2l2ZSBza2lsbCB0cmVlIGRhdGFcbiAgICogQHBhcmFtIHtPYmplY3R9IGdyb3VwcyBhbGwgZ3JvdXBzIGZyb20gdGhlIGdnZyBwYXNzaXZlIHNraWxsIHRyZWUgZGF0YVxuICAgKi9cbiAgY29uc3RydWN0b3IocHJvcHMsIGdyb3Vwcykge1xuICAgIHRoaXMucHJvcHMgPSBwcm9wcztcbiAgICB0aGlzLmdyb3VwID0gZ3JvdXBzW3RoaXMuZ3JvdXBfaWRdO1xuICB9XG5cbiAgLyoqXG4gICAqIEByZXR1cm4ge3N0cmluZ30gbmFtZSBvZiB0aGUgbm9kZVxuICAgKi9cbiAgZ2V0IG5hbWUoKSB7XG4gICAgcmV0dXJuIHRoaXMucHJvcHMuZG47XG4gIH1cblxuICAvKipcbiAgICogQHJldHVybiB7c3RyaW5nfSB1bmlxdWUgaWQgb2YgdGhlIG5vZGVcbiAgICovXG4gIGdldCBpZCgpIHtcbiAgICByZXR1cm4gdGhpcy5wcm9wcy5pZDtcbiAgfVxuXG4gIC8qKlxuICAgKiBAcmV0dXJuIHtudW1iZXJ9IG9yYml0IGluZGV4XG4gICAqL1xuICBnZXQgb3JiaXQoKSB7XG4gICAgcmV0dXJuIHRoaXMucHJvcHMubztcbiAgfVxuXG4gIC8qKlxuICAgKiBAcmV0dXJuIHtib29sZWFufSBpZiB0aGUgbm9kZSBpcyBhIGtleXN0b25lXG4gICAqL1xuICBnZXQga2V5c3RvbmUoKSB7XG4gICAgcmV0dXJuIHRoaXMucHJvcHMua3M7XG4gIH1cblxuICAvKipcbiAgICogQHJldHVybiB7Ym9vbGVhbn0gaWYgdGhlIG5vZGUgaXMgYSBtYXN0ZXJ5XG4gICAqL1xuICBnZXQgbWFzdGVyeSgpIHtcbiAgICByZXR1cm4gdGhpcy5wcm9wcy5tO1xuICB9XG5cbiAgLyoqXG4gICAqIEByZXR1cm4ge2Jvb2xlYW59IGlmIHRoZSBub2RlIGlzIGEgbm90YWJsZVxuICAgKi9cbiAgZ2V0IG5vdGFibGUoKSB7XG4gICAgcmV0dXJuIHRoaXMucHJvcHMubm90O1xuICB9XG5cbiAgLyoqXG4gICAqIEByZXR1cm4ge2Jvb2xlYW59IGlmIHRoZSBub2RlIGlzIGEga2V5c3RvbmVcbiAgICovXG4gIGdldCBhc2NlbmRhbmN5KCkge1xuICAgIHJldHVybiAhIXRoaXMucHJvcHMuYXNjZW5kYW5jeU5hbWU7XG4gIH1cblxuICAvKipcbiAgICogQHJldHVybiB7Ym9vbGVhbn0gaWYgdGhlIG5vZGUgaXMgYSBqZXdlbCBzb2NrZXRcbiAgICovXG4gIGdldCBqZXdlbF9zb2NrZXQoKSB7XG4gICAgcmV0dXJuIHRoaXMucHJvcHMuaXNKZXdlbFNvY2tldDtcbiAgfVxuXG4gIC8qKlxuICAgKiBAcmV0dXJuIHtib29sZWFufSBpZiB0aGUgbm9kZSBpcyBhIGNsYXNzIHN0YXJ0IG5vZGVcbiAgICovXG4gIGdldCBzdGFydCgpIHtcbiAgICByZXR1cm4gdGhpcy5wcm9wcy5zcGMubGVuZ3RoID4gMDtcbiAgfVxuXG4gIC8qKlxuICAgKiBAcmV0dXJuIHtzdHJpbmd9IHRoZSBzdGFydGluZyBjbGFzc1xuICAgKi9cbiAgZ2V0IHN0YXJ0aW5nQ2xhc3MoKSB7XG4gICAgaWYgKHRoaXMuc3RhcnQpIHtcbiAgICAgIC8vIHVjZmlyc3RcbiAgICAgIHJldHVybiB0aGlzLm5hbWVbMF0udG9VcHBlckNhc2UoKSArIHRoaXMubmFtZS5zbGljZSgxKS50b0xvd2VyQ2FzZSgpO1xuICAgIH1cbiAgICByZXR1cm4gdW5kZWZpbmVkO1xuICB9XG5cbiAgLyoqXG4gICAqIEByZXR1cm4ge251bWJlcltdfSBhZGphY2VudCBub2RlIGlkc1xuICAgKi9cbiAgZ2V0IGFkamFjZW50KCkge1xuICAgIHJldHVybiB0aGlzLnByb3BzLm91dDtcbiAgfVxuXG4gIC8qKlxuICAgKiBub3JtYWwgbm9kZSBpZiBub3QgYW55IHNwZWNpYWwgdHlwZVxuICAgKlxuICAgKiBAcmV0dXJuIHtib29sZWFufVxuICAgKi9cbiAgZ2V0IG5vcm1hbCgpIHtcbiAgICByZXR1cm4gIXNlbGYudHlwZXMuc29tZSgodCkgPT4gdGhpc1t0XSk7XG4gIH1cblxuICAvKipcbiAgICogYWx0aG91Z2ggdGhleSBzaG91bGQgYmUgbXV0dWFsbHkgZXhjbHVzaXZlXG4gICAqIHRoZSBkYXRhIGhhcyBmbGFncyBmb3IgZWFjaCBvZiB0aGlzIHR5cGVcbiAgICogaXQgc2hvdWxkIG9ubHkgcmV0dXJuIGFycmF5cyB3aXRoIG9uZSBlbGVtZW50XG4gICAqXG4gICAqIEByZXR1cm4ge3N0cmluZ1tdfVxuICAgKi9cbiAgZ2V0IHR5cGVzKCkge1xuICAgIC8vIGdldHRlcnMgZm9yIHRoZSB0eXBlc1xuICAgIHJldHVybiBbXG4gICAgICAuLi5zZWxmLnR5cGVzLFxuICAgICAgJ25vcm1hbCcsXG4gICAgXS5maWx0ZXIoKHQpID0+IHRoaXNbdF0pO1xuICB9XG5cbiAgLyoqXG4gICAqIEByZXR1cm4ge3N0cmluZ1tdfSBzdGF0cyBkZXNjcmlwdGlvbnNcbiAgICovXG4gIGdldCBzdGF0cygpIHtcbiAgICByZXR1cm4gdGhpcy5wcm9wcy5zZDtcbiAgfVxuXG4gIC8qKlxuICAgKiBAcmV0dXJuIHtudW1iZXJ9XG4gICAqL1xuICBnZXQgZ3JvdXBfaWQoKSB7XG4gICAgcmV0dXJuIHRoaXMucHJvcHMuZztcbiAgfVxuXG4gIC8qKlxuICAgKiBAc2NhbGFibGVcbiAgICogQHJldHVybiB7bnVtYmVyfSByYWRpdXMgcmVsYXRpdmUgdG8gZ3JvdXBcbiAgICovXG4gIGdldCByYWRpdXMoKSB7XG4gICAgcmV0dXJuIHNlbGYub3JiaXRfcmFkaWlbdGhpcy5vcmJpdF07XG4gIH1cblxuICAvKipcbiAgICogQHNjYWxhYmxlXG4gICAqIEByZXR1cm4ge251bWJlcn0gc2l6ZSBvZiB0aGUgYmlnZ2VzdCBhc3NldFxuICAgKi9cbiAgZ2V0IHNpemUoKSB7XG4gICAgcmV0dXJuIHNlbGYuc2l6ZXNbT2JqZWN0LmtleXMoc2VsZi5zaXplcykuZmlsdGVyKCh0KSA9PiB0aGlzW3RdKVswXV07XG4gIH1cblxuICAvKipcbiAgICogY2FsY3VsYXRlcyB0aGUgcmFkaWFudCBhbmdsZSBhdCB3aGljaCB0aGUgbm9kZSBpcyBsb2NhdGVkIGluIGl0cyBvcmJpdFxuICAgKlxuICAgKiBjb25zaWRlciBhIGNsb2NrXG4gICAqIHRoZSBvaWR4IHN0YXJ0cyBhdCAwOjAwIGFuZCBtb3ZlcyBjbG9ja3dpc2VcbiAgICogYW5nbGVzIGluIG1hdGggaW5jcmVhc2VzIGNvdW50ZXIgY2xvY2t3aXNlIHN0YXJ0aW5nIGF0IDM6MDBcbiAgICogd2UgbmVlZCB0byBhZGp1c3QgdGhlIGFuZ2xlIGFjY29yZGluZ2x5XG4gICAqXG4gICAqIEByZXR1cm4ge251bWJlcn1cbiAgICovXG4gIGdldCBhbmdsZSgpIHtcbiAgICByZXR1cm4gKHRhdSAqXG4gICAgICAoMSAtIHRoaXMucHJvcHMub2lkeCAvIHNlbGYuc2tpbGxzX3Blcl9vcmJpdFt0aGlzLnByb3BzLm9dKVxuICAgICAgKyB0YXUgLyA0KSAlIHRhdTtcbiAgfVxuXG4gIC8qKlxuICAgKiB0aGUgYW5nbGUgaWYgY291bnRlZCBjbG9ja3dpc2VcbiAgICovXG4gIGdldCBhbmdsZV9jbG9ja3dpc2UoKSB7XG4gICAgcmV0dXJuICh0YXUgKlxuICAgICAgdGhpcy5wcm9wcy5vaWR4IC8gc2VsZi5za2lsbHNfcGVyX29yYml0W3RoaXMucHJvcHMub10gLSB0YXUgLyA0KSAlIHRhdTtcbiAgfVxuXG4gIC8qKlxuICAgKiBAc2NhbGFibGVcbiAgICogQHJldHVybiB7bnVtYmVyfSBjYXJ0ZXNpYW4geFxuICAgKi9cbiAgZ2V0IHgoKSB7XG4gICAgcmV0dXJuIHRoaXMuZ3JvdXAueCArIHRoaXMucmFkaXVzICogTWF0aC5jb3ModGhpcy5hbmdsZSk7XG4gIH1cblxuICAvKipcbiAgICogQHNjYWxhYmxlXG4gICAqIEByZXR1cm4ge251bWJlcn0gY2FydGVzaWFuIHlcbiAgICovXG4gIGdldCB5KCkge1xuICAgIHJldHVybiB0aGlzLmdyb3VwLnkgLSB0aGlzLnJhZGl1cyAqIE1hdGguc2luKHRoaXMuYW5nbGUpO1xuICB9XG5cbiAgLyoqXG4gICAqIEByZXR1cm4ge3N0cmluZ31cbiAgICovXG4gIGdldCBpbnNwZWN0KCkge1xuICAgIHJldHVybiBPYmplY3QuZW50cmllcyhPYmplY3QuYXNzaWduKHtcbiAgICAgIGFuZ2xlOiB0aGlzLmFuZ2xlLFxuICAgICAgeDogdGhpcy54LFxuICAgICAgeTogdGhpcy55LFxuICAgICAgZzogT2JqZWN0LmVudHJpZXModGhpcy5ncm91cCkuam9pbignXFxuJyksXG4gICAgfSwgdGhpcy5wcm9wcykpLm1hcCgoZSkgPT4gYCR7ZVswXX06ICR7ZVsxXX1gKS5qb2luKCdcXG4nKTtcbiAgfVxufTtcblxuXG5cbi8vIFdFQlBBQ0sgRk9PVEVSIC8vXG4vLyAuL3NyYy9wb2UvUGFzc2l2ZU5vZGUuanMiLCJjb25zdCBQb2VUcmVlID0gcmVxdWlyZSgnLi9QYXNzaXZlVHJlZScpO1xuXG4vKipcbiAqIHZpZXcgaGVscGVyIGNsYXNzIHRoYXQgZGV0ZXJtaW5lcyBpZiB2YXJpb3VzIGVsZW1lbnRzIG9mXG4gKiB0aGUgZ2l2ZW4gdHJlZSBhcmUgdmlzaWJsZSB1bmRlciBhIGNvbmYgT2JqZWN0XG4gKi9cbmNsYXNzIFBhc3NpdmVUcmVlQ29uZiB7XG4gIC8qKlxuICAgKiBAcGFyYW0ge09iamVjdH0gY29uZl9wcm9wc1xuICAgKiBAcGFyYW0ge2Jvb2xlYW59IGNvbmZfcHJvcHMuZ3JvdXBfb3JiaXRzIGRpc3BsYXkgZ3JvdXBfb3JiaXRzP1xuICAgKiBAcGFyYW0ge2Jvb2xlYW59IGNvbmZfcHJvcHMuc3RhcnQgZGlzcGxheSBzdGFydCBub2Rlcz9cbiAgICogQHBhcmFtIHtib29sZWFufSBjb25mX3Byb3BzLnNjaW9uUGF0aE9mIGRpc3BsYXkgU2Npb25QYXRoT2ZYIGVkZ2U/XG4gICAqIEBwYXJhbSB7Ym9vbGVhbn0gY29uZl9wcm9wcy5hc2NlbmRhbmN5IGRpc3BsYXkgYXNjZW5kYW5jeSBub2Rlcz9cbiAgICogQHBhcmFtIHtib29sZWFufSBjb25mX3Byb3BzLm1hc3RlcnkgZGlzcGxheSBtYXN0ZXJ5IG5vZGVzP1xuICAgKiBAcGFyYW0ge2Jvb2xlYW59IGNvbmZfcHJvcHMubm9kZV9zY2FsZSBzY2FsZSBmb3Ige1Bhc3NpdmVOb2RlI3NpemV9XG4gICAqL1xuICBjb25zdHJ1Y3Rvcihjb25mX3Byb3BzKSB7XG4gICAgdGhpcy5wcm9wcyA9IGNvbmZfcHJvcHM7XG4gIH1cblxuICAvKipcbiAgICogQHJldHVybiB7bnVtYmVyfVxuICAgKi9cbiAgZ2V0IG5vZGVfc2NhbGUoKSB7XG4gICAgcmV0dXJuICt0aGlzLnByb3BzLm5vZGVfc2NhbGU7XG4gIH1cblxuICAvKipcbiAgICogQHBhcmFtIHtQYXNzaXZlTm9kZX0gbm9kZVxuICAgKiBAcmV0dXJuIHtib29sZWFufVxuICAgKi9cbiAgaXNWaXNpYmxlTm9kZShub2RlKSB7XG4gICAgY29uc3QgY29uZiA9IHRoaXMucHJvcHM7XG5cbiAgICByZXR1cm4gKGNvbmYubWFzdGVyeSB8fCAhbm9kZS5tYXN0ZXJ5KVxuICAgICAgJiYgKGNvbmYuc3RhcnQgfHwgIW5vZGUuc3RhcnQpXG4gICAgICAmJiAoY29uZi5hc2NlbmRhbmN5IHx8ICFub2RlLmFzY2VuZGFuY3kpO1xuICB9XG5cbiAgLyoqXG4gICAqIEBwYXJhbSB7UGFzc2l2ZU5vZGV9IHNvdXJjZVxuICAgKiBAcGFyYW0ge1Bhc3NpdmVOb2RlfSB0YXJnZXRcbiAgICogQHJldHVybiB7Ym9vbGVhbn1cbiAgICovXG4gIGlzVmlzaWJsZUVkZ2Uoc291cmNlLCB0YXJnZXQpIHtcbiAgICBjb25zdCBjb25mID0gdGhpcy5wcm9wcztcblxuICAgIC8vIG5vIHN0YXJ0IG5vZGUgY29ubmVjdGlvblxuICAgIHJldHVybiAoY29uZi5zdGFydCB8fCAhc291cmNlLnN0YXJ0ICYmICF0YXJnZXQuc3RhcnQpXG4gICAgICAvLyBubyBzY2lvbiBwYXRoIG9mIHggZWRnZXNcbiAgICAgICYmIChjb25mLnNjaW9uUGF0aE9mIHx8ICFQb2VUcmVlLnNjaW9uUGF0aE9mRWRnZShzb3VyY2UsIHRhcmdldCkpXG4gICAgICAvLyBubyBhc2NlbmRhbmN5IGVkZ2VzXG4gICAgICAmJiAoY29uZi5hc2NlbmRhbmN5IHx8ICFzb3VyY2UuYXNjZW5kYW5jeSk7XG4gIH07XG5cbiAgLyoqXG4gICAqIEBwYXJhbSB7T2JqZWN0fSBncm91cFxuICAgKiBAcmV0dXJuIHtib29sZWFufVxuICAgKi9cbiAgaXNWaXNpYmxlR3JvdXAoZ3JvdXApIHtcbiAgICByZXR1cm4gdGhpcy5wcm9wcy5ncm91cF9vcmJpdHM7XG4gIH07XG5cbiAgLyoqXG4gICAqIEBwYXJhbSB7UGFzc2l2ZVRyZWVDb25mfSBvdGhlclxuICAgKiBAcmV0dXJuIHtib29sZWFufVxuICAgKi9cbiAgZXF1YWxzKG90aGVyKSB7XG4gICAgcmV0dXJuIEpTT04uc3RyaW5naWZ5KHRoaXMucHJvcHMpID09PSBKU09OLnN0cmluZ2lmeShvdGhlci5wcm9wcyk7XG4gIH1cblxuICAvKipcbiAgICogY3JlYXRlcyBhIHNlcmlhbGl6ZWFibGUganMgdHlwZVxuICAgKiBAcmV0dXJuIHtPYmplY3R9XG4gICAqL1xuICB0b1NlcmlhbGl6ZWFibGUoKSB7XG4gICAgcmV0dXJuIHtcbiAgICAgIHByb3BzOiB0aGlzLnByb3BzLFxuICAgIH07XG4gIH1cblxuICAvKipcbiAgICogZmFjdG9yeSBmcm9tICN0b1NlcmlhbGl6ZWFibGVcbiAgICogQHBhcmFtIHtPYmplY3R9IHNlcmlhbGl6ZWFibGVcbiAgICogQHJldHVybiB7UGFzc2l2ZVRyZWVDb25mfVxuICAgKi9cbiAgc3RhdGljIGZyb21TZXJpYWxpemVhYmxlKHNlcmlhbGl6ZWFibGUpIHtcbiAgICByZXR1cm4gbmV3IFBhc3NpdmVUcmVlQ29uZihzZXJpYWxpemVhYmxlLnByb3BzKTtcbiAgfVxufVxuXG5leHBvcnQgZGVmYXVsdCBQYXNzaXZlVHJlZUNvbmY7XG5cblxuXG4vLyBXRUJQQUNLIEZPT1RFUiAvL1xuLy8gLi9zcmMvcG9lL1Bhc3NpdmVUcmVlQ29uZi5qcyIsIm1vZHVsZS5leHBvcnRzID0gZnVuY3Rpb24oKSB7XG5cdHJldHVybiBuZXcgV29ya2VyKF9fd2VicGFja19wdWJsaWNfcGF0aF9fICsgXCJkZWIyYjNhNDEwNmYxOWY4ZjU1My53b3JrZXIuanNcIik7XG59O1xuXG5cbi8vLy8vLy8vLy8vLy8vLy8vL1xuLy8gV0VCUEFDSyBGT09URVJcbi8vIC4vfi93b3JrZXItbG9hZGVyIS4vc3JjL2Jyb3dzZXIvd29ya2Vycy9oZWF0bWFwLmpzXG4vLyBtb2R1bGUgaWQgPSA4NlxuLy8gbW9kdWxlIGNodW5rcyA9IDAiLCJtb2R1bGUuZXhwb3J0cyA9IHJlcXVpcmUoXCJiYWJlbC1ydW50aW1lL2NvcmUtanMvb2JqZWN0L2ZyZWV6ZVwiKTtcblxuXG4vLy8vLy8vLy8vLy8vLy8vLy9cbi8vIFdFQlBBQ0sgRk9PVEVSXG4vLyBleHRlcm5hbCBcImJhYmVsLXJ1bnRpbWUvY29yZS1qcy9vYmplY3QvZnJlZXplXCJcbi8vIG1vZHVsZSBpZCA9IDg3XG4vLyBtb2R1bGUgY2h1bmtzID0gMCIsIm1vZHVsZS5leHBvcnRzID0gcmVxdWlyZShcImJhYmVsLXJ1bnRpbWUvY29yZS1qcy9vYmplY3QvZ2V0LXByb3RvdHlwZS1vZlwiKTtcblxuXG4vLy8vLy8vLy8vLy8vLy8vLy9cbi8vIFdFQlBBQ0sgRk9PVEVSXG4vLyBleHRlcm5hbCBcImJhYmVsLXJ1bnRpbWUvY29yZS1qcy9vYmplY3QvZ2V0LXByb3RvdHlwZS1vZlwiXG4vLyBtb2R1bGUgaWQgPSA4OFxuLy8gbW9kdWxlIGNodW5rcyA9IDAiLCJtb2R1bGUuZXhwb3J0cyA9IHJlcXVpcmUoXCJiYWJlbC1ydW50aW1lL2NvcmUtanMvb2JqZWN0L2tleXNcIik7XG5cblxuLy8vLy8vLy8vLy8vLy8vLy8vXG4vLyBXRUJQQUNLIEZPT1RFUlxuLy8gZXh0ZXJuYWwgXCJiYWJlbC1ydW50aW1lL2NvcmUtanMvb2JqZWN0L2tleXNcIlxuLy8gbW9kdWxlIGlkID0gODlcbi8vIG1vZHVsZSBjaHVua3MgPSAwIiwibW9kdWxlLmV4cG9ydHMgPSByZXF1aXJlKFwiYmFiZWwtcnVudGltZS9oZWxwZXJzL2luaGVyaXRzXCIpO1xuXG5cbi8vLy8vLy8vLy8vLy8vLy8vL1xuLy8gV0VCUEFDSyBGT09URVJcbi8vIGV4dGVybmFsIFwiYmFiZWwtcnVudGltZS9oZWxwZXJzL2luaGVyaXRzXCJcbi8vIG1vZHVsZSBpZCA9IDkwXG4vLyBtb2R1bGUgY2h1bmtzID0gMCIsIm1vZHVsZS5leHBvcnRzID0gcmVxdWlyZShcImJhYmVsLXJ1bnRpbWUvaGVscGVycy9wb3NzaWJsZUNvbnN0cnVjdG9yUmV0dXJuXCIpO1xuXG5cbi8vLy8vLy8vLy8vLy8vLy8vL1xuLy8gV0VCUEFDSyBGT09URVJcbi8vIGV4dGVybmFsIFwiYmFiZWwtcnVudGltZS9oZWxwZXJzL3Bvc3NpYmxlQ29uc3RydWN0b3JSZXR1cm5cIlxuLy8gbW9kdWxlIGlkID0gOTFcbi8vIG1vZHVsZSBjaHVua3MgPSAwIiwibW9kdWxlLmV4cG9ydHMgPSByZXF1aXJlKFwiY3N2LXBhcnNlXCIpO1xuXG5cbi8vLy8vLy8vLy8vLy8vLy8vL1xuLy8gV0VCUEFDSyBGT09URVJcbi8vIGV4dGVybmFsIFwiY3N2LXBhcnNlXCJcbi8vIG1vZHVsZSBpZCA9IDkzXG4vLyBtb2R1bGUgY2h1bmtzID0gMCIsIm1vZHVsZS5leHBvcnRzID0gcmVxdWlyZShcInJlYWN0LXJlZHV4LWZvcm0vaW1tdXRhYmxlXCIpO1xuXG5cbi8vLy8vLy8vLy8vLy8vLy8vL1xuLy8gV0VCUEFDSyBGT09URVJcbi8vIGV4dGVybmFsIFwicmVhY3QtcmVkdXgtZm9ybS9pbW11dGFibGVcIlxuLy8gbW9kdWxlIGlkID0gOTRcbi8vIG1vZHVsZSBjaHVua3MgPSAwIiwibW9kdWxlLmV4cG9ydHMgPSByZXF1aXJlKFwicmVhY3Qtcm91dGVyXCIpO1xuXG5cbi8vLy8vLy8vLy8vLy8vLy8vL1xuLy8gV0VCUEFDSyBGT09URVJcbi8vIGV4dGVybmFsIFwicmVhY3Qtcm91dGVyXCJcbi8vIG1vZHVsZSBpZCA9IDk1XG4vLyBtb2R1bGUgY2h1bmtzID0gMCIsIm1vZHVsZS5leHBvcnRzID0gcmVxdWlyZShcInJlZHV4LWltbXV0YWJsZVwiKTtcblxuXG4vLy8vLy8vLy8vLy8vLy8vLy9cbi8vIFdFQlBBQ0sgRk9PVEVSXG4vLyBleHRlcm5hbCBcInJlZHV4LWltbXV0YWJsZVwiXG4vLyBtb2R1bGUgaWQgPSA5NlxuLy8gbW9kdWxlIGNodW5rcyA9IDAiLCJtb2R1bGUuZXhwb3J0cyA9IHJlcXVpcmUoXCJyZWR1eC1sb2dnZXJcIik7XG5cblxuLy8vLy8vLy8vLy8vLy8vLy8vXG4vLyBXRUJQQUNLIEZPT1RFUlxuLy8gZXh0ZXJuYWwgXCJyZWR1eC1sb2dnZXJcIlxuLy8gbW9kdWxlIGlkID0gOTdcbi8vIG1vZHVsZSBjaHVua3MgPSAwIiwibW9kdWxlLmV4cG9ydHMgPSByZXF1aXJlKFwicmVkdXgtdGh1bmtcIik7XG5cblxuLy8vLy8vLy8vLy8vLy8vLy8vXG4vLyBXRUJQQUNLIEZPT1RFUlxuLy8gZXh0ZXJuYWwgXCJyZWR1eC10aHVua1wiXG4vLyBtb2R1bGUgaWQgPSA5OFxuLy8gbW9kdWxlIGNodW5rcyA9IDAiLCJtb2R1bGUuZXhwb3J0cyA9IHJlcXVpcmUoXCJyeGpzL2FkZC9vcGVyYXRvci9tYXBUb1wiKTtcblxuXG4vLy8vLy8vLy8vLy8vLy8vLy9cbi8vIFdFQlBBQ0sgRk9PVEVSXG4vLyBleHRlcm5hbCBcInJ4anMvYWRkL29wZXJhdG9yL21hcFRvXCJcbi8vIG1vZHVsZSBpZCA9IDk5XG4vLyBtb2R1bGUgY2h1bmtzID0gMCIsIm1vZHVsZS5leHBvcnRzID0gcmVxdWlyZShcInJ4anMvYWRkL29wZXJhdG9yL3N3aXRjaE1hcFwiKTtcblxuXG4vLy8vLy8vLy8vLy8vLy8vLy9cbi8vIFdFQlBBQ0sgRk9PVEVSXG4vLyBleHRlcm5hbCBcInJ4anMvYWRkL29wZXJhdG9yL3N3aXRjaE1hcFwiXG4vLyBtb2R1bGUgaWQgPSAxMDBcbi8vIG1vZHVsZSBjaHVua3MgPSAwIiwiaW1wb3J0IHN0b3JlIGZyb20gJy4uL2Jyb3dzZXIvc3RvcmUvc3RvcmUnO1xuXG5jb25zdCBkb25lID0gbmV3IFByb21pc2UoKGZ1bGZpbGwsIHJlamVjdCkgPT4ge1xuICBzdG9yZS5zdWJzY3JpYmUoKCkgPT4ge1xuICAgIGNvbnNvbGUubG9nKHN0b3JlLmdldFN0YXRlKCkudG9KUygpKTtcbiAgfSk7XG59KTtcblxuKGFzeW5jICgpID0+IHtcbiAgYXdhaXQgZG9uZTtcbn0pKCk7XG5cblxuXG4vLyBXRUJQQUNLIEZPT1RFUiAvL1xuLy8gLi9zcmMvc2NyaXB0cy9oZWF0bWFwLmpzIl0sInNvdXJjZVJvb3QiOiIifQ==