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
/******/ 	return __webpack_require__(__webpack_require__.s = 10);
/******/ })
/************************************************************************/
/******/ ([
/* 0 */
/***/ (function(module, exports) {

module.exports = require("babel-runtime/core-js/json/stringify");

/***/ }),
/* 1 */
/***/ (function(module, exports) {

module.exports = require("fs");

/***/ }),
/* 2 */
/***/ (function(module, exports) {

module.exports = require("path");

/***/ }),
/* 3 */,
/* 4 */,
/* 5 */,
/* 6 */
/***/ (function(module, exports) {

module.exports = require("babel-runtime/helpers/slicedToArray");

/***/ }),
/* 7 */,
/* 8 */,
/* 9 */,
/* 10 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var _stringify = __webpack_require__(0);

var _stringify2 = _interopRequireDefault(_stringify);

var _slicedToArray2 = __webpack_require__(6);

var _slicedToArray3 = _interopRequireDefault(_slicedToArray2);

var _fs = __webpack_require__(1);

var fs = _interopRequireWildcard(_fs);

var _path = __webpack_require__(2);

var path = _interopRequireWildcard(_path);

function _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; } else { var newObj = {}; if (obj != null) { for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) newObj[key] = obj[key]; } } newObj.default = obj; return newObj; } }

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var _process$argv$slice$m = process.argv.slice(2, 4).map(function (file) {
  return path.join(process.cwd(), file);
}),
    _process$argv$slice$m2 = (0, _slicedToArray3.default)(_process$argv$slice$m, 2),
    dir = _process$argv$slice$m2[0],
    out_file = _process$argv$slice$m2[1];

var public_root = process.argv[4];

var ctime = function ctime(filename) {
  return +filename.match(/^(\d+)/)[1];
};

var sources = fs.readdirSync(dir).filter(function (filename) {
  return (/^.*_get_trees\.csv$/.test(filename)
  );
}).sort(function (a, b) {
  return ctime(b) - ctime(a);
}).map(function (filename) {
  return { filename: path.join(public_root, filename) };
});

fs.writeFileSync(out_file, (0, _stringify2.default)(sources));

console.log('wrote ' + sources.length + ' sources into \'' + out_file + '\'');

/***/ })
/******/ ]);
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vd2VicGFjay9ib290c3RyYXAgZTE3NjQ4NzdjNmY2OGU3NzcwMDQ/YmQ3NCIsIndlYnBhY2s6Ly8vZXh0ZXJuYWwgXCJiYWJlbC1ydW50aW1lL2NvcmUtanMvanNvbi9zdHJpbmdpZnlcIj9iZmE3Iiwid2VicGFjazovLy9leHRlcm5hbCBcImZzXCI/MmUwOSIsIndlYnBhY2s6Ly8vZXh0ZXJuYWwgXCJwYXRoXCI/NWIyYSIsIndlYnBhY2s6Ly8vZXh0ZXJuYWwgXCJiYWJlbC1ydW50aW1lL2hlbHBlcnMvc2xpY2VkVG9BcnJheVwiIiwid2VicGFjazovLy8uL3NyYy9zY3JpcHRzL2J1aWxkX3NvdXJjZXNfaW5kZXguanMiXSwibmFtZXMiOlsiZnMiLCJwYXRoIiwicHJvY2VzcyIsImFyZ3YiLCJzbGljZSIsIm1hcCIsImZpbGUiLCJqb2luIiwiY3dkIiwiZGlyIiwib3V0X2ZpbGUiLCJwdWJsaWNfcm9vdCIsImN0aW1lIiwiZmlsZW5hbWUiLCJtYXRjaCIsInNvdXJjZXMiLCJyZWFkZGlyU3luYyIsImZpbHRlciIsInRlc3QiLCJzb3J0IiwiYSIsImIiLCJ3cml0ZUZpbGVTeW5jIiwiY29uc29sZSIsImxvZyIsImxlbmd0aCJdLCJtYXBwaW5ncyI6IjtBQUFBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7OztBQUdBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBLG1EQUEyQyxjQUFjOztBQUV6RDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLGFBQUs7QUFDTDtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBLG1DQUEyQiwwQkFBMEIsRUFBRTtBQUN2RCx5Q0FBaUMsZUFBZTtBQUNoRDtBQUNBO0FBQ0E7O0FBRUE7QUFDQSw4REFBc0QsK0RBQStEOztBQUVySDtBQUNBOztBQUVBO0FBQ0E7Ozs7Ozs7QUNoRUEsaUU7Ozs7OztBQ0FBLCtCOzs7Ozs7QUNBQSxpQzs7Ozs7Ozs7O0FDQUEsZ0U7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FDQUE7O0lBQVlBLEU7O0FBQ1o7O0lBQVlDLEk7Ozs7Ozs0QkFHUkMsUUFBUUMsSUFBUixDQUFhQyxLQUFiLENBQW1CLENBQW5CLEVBQXNCLENBQXRCLEVBQXlCQyxHQUF6QixDQUE2QixVQUFDQyxJQUFELEVBQVU7QUFDdkMsU0FBT0wsS0FBS00sSUFBTCxDQUFVTCxRQUFRTSxHQUFSLEVBQVYsRUFBeUJGLElBQXpCLENBQVA7QUFDRCxDQUZDLEM7O0lBREdHLEc7SUFBS0MsUTs7QUFLWixJQUFNQyxjQUFjVCxRQUFRQyxJQUFSLENBQWEsQ0FBYixDQUFwQjs7QUFFQSxJQUFNUyxRQUFRLFNBQVJBLEtBQVEsQ0FBQ0MsUUFBRDtBQUFBLFNBQWMsQ0FBQ0EsU0FBU0MsS0FBVCxDQUFlLFFBQWYsRUFBeUIsQ0FBekIsQ0FBZjtBQUFBLENBQWQ7O0FBRUEsSUFBTUMsVUFBVWYsR0FBR2dCLFdBQUgsQ0FBZVAsR0FBZixFQUNiUSxNQURhLENBQ04sVUFBQ0osUUFBRCxFQUFjO0FBQ3BCLFNBQU8sdUJBQXNCSyxJQUF0QixDQUEyQkwsUUFBM0I7QUFBUDtBQUNELENBSGEsRUFJYk0sSUFKYSxDQUlSLFVBQUNDLENBQUQsRUFBSUMsQ0FBSjtBQUFBLFNBQVVULE1BQU1TLENBQU4sSUFBV1QsTUFBTVEsQ0FBTixDQUFyQjtBQUFBLENBSlEsRUFLYmYsR0FMYSxDQUtULFVBQUNRLFFBQUQsRUFBYztBQUNqQixTQUFPLEVBQUVBLFVBQVVaLEtBQUtNLElBQUwsQ0FBVUksV0FBVixFQUF1QkUsUUFBdkIsQ0FBWixFQUFQO0FBQ0QsQ0FQYSxDQUFoQjs7QUFTQWIsR0FBR3NCLGFBQUgsQ0FBaUJaLFFBQWpCLEVBQTJCLHlCQUFlSyxPQUFmLENBQTNCOztBQUVBUSxRQUFRQyxHQUFSLFlBQXFCVCxRQUFRVSxNQUE3Qix3QkFBcURmLFFBQXJELFMiLCJmaWxlIjoiYnVpbGRfc291cmNlc19pbmRleC5qcyIsInNvdXJjZXNDb250ZW50IjpbIiBcdC8vIFRoZSBtb2R1bGUgY2FjaGVcbiBcdHZhciBpbnN0YWxsZWRNb2R1bGVzID0ge307XG5cbiBcdC8vIFRoZSByZXF1aXJlIGZ1bmN0aW9uXG4gXHRmdW5jdGlvbiBfX3dlYnBhY2tfcmVxdWlyZV9fKG1vZHVsZUlkKSB7XG5cbiBcdFx0Ly8gQ2hlY2sgaWYgbW9kdWxlIGlzIGluIGNhY2hlXG4gXHRcdGlmKGluc3RhbGxlZE1vZHVsZXNbbW9kdWxlSWRdKVxuIFx0XHRcdHJldHVybiBpbnN0YWxsZWRNb2R1bGVzW21vZHVsZUlkXS5leHBvcnRzO1xuXG4gXHRcdC8vIENyZWF0ZSBhIG5ldyBtb2R1bGUgKGFuZCBwdXQgaXQgaW50byB0aGUgY2FjaGUpXG4gXHRcdHZhciBtb2R1bGUgPSBpbnN0YWxsZWRNb2R1bGVzW21vZHVsZUlkXSA9IHtcbiBcdFx0XHRpOiBtb2R1bGVJZCxcbiBcdFx0XHRsOiBmYWxzZSxcbiBcdFx0XHRleHBvcnRzOiB7fVxuIFx0XHR9O1xuXG4gXHRcdC8vIEV4ZWN1dGUgdGhlIG1vZHVsZSBmdW5jdGlvblxuIFx0XHRtb2R1bGVzW21vZHVsZUlkXS5jYWxsKG1vZHVsZS5leHBvcnRzLCBtb2R1bGUsIG1vZHVsZS5leHBvcnRzLCBfX3dlYnBhY2tfcmVxdWlyZV9fKTtcblxuIFx0XHQvLyBGbGFnIHRoZSBtb2R1bGUgYXMgbG9hZGVkXG4gXHRcdG1vZHVsZS5sID0gdHJ1ZTtcblxuIFx0XHQvLyBSZXR1cm4gdGhlIGV4cG9ydHMgb2YgdGhlIG1vZHVsZVxuIFx0XHRyZXR1cm4gbW9kdWxlLmV4cG9ydHM7XG4gXHR9XG5cblxuIFx0Ly8gZXhwb3NlIHRoZSBtb2R1bGVzIG9iamVjdCAoX193ZWJwYWNrX21vZHVsZXNfXylcbiBcdF9fd2VicGFja19yZXF1aXJlX18ubSA9IG1vZHVsZXM7XG5cbiBcdC8vIGV4cG9zZSB0aGUgbW9kdWxlIGNhY2hlXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLmMgPSBpbnN0YWxsZWRNb2R1bGVzO1xuXG4gXHQvLyBpZGVudGl0eSBmdW5jdGlvbiBmb3IgY2FsbGluZyBoYXJtb255IGltcG9ydHMgd2l0aCB0aGUgY29ycmVjdCBjb250ZXh0XG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLmkgPSBmdW5jdGlvbih2YWx1ZSkgeyByZXR1cm4gdmFsdWU7IH07XG5cbiBcdC8vIGRlZmluZSBnZXR0ZXIgZnVuY3Rpb24gZm9yIGhhcm1vbnkgZXhwb3J0c1xuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5kID0gZnVuY3Rpb24oZXhwb3J0cywgbmFtZSwgZ2V0dGVyKSB7XG4gXHRcdGlmKCFfX3dlYnBhY2tfcmVxdWlyZV9fLm8oZXhwb3J0cywgbmFtZSkpIHtcbiBcdFx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgbmFtZSwge1xuIFx0XHRcdFx0Y29uZmlndXJhYmxlOiBmYWxzZSxcbiBcdFx0XHRcdGVudW1lcmFibGU6IHRydWUsXG4gXHRcdFx0XHRnZXQ6IGdldHRlclxuIFx0XHRcdH0pO1xuIFx0XHR9XG4gXHR9O1xuXG4gXHQvLyBnZXREZWZhdWx0RXhwb3J0IGZ1bmN0aW9uIGZvciBjb21wYXRpYmlsaXR5IHdpdGggbm9uLWhhcm1vbnkgbW9kdWxlc1xuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5uID0gZnVuY3Rpb24obW9kdWxlKSB7XG4gXHRcdHZhciBnZXR0ZXIgPSBtb2R1bGUgJiYgbW9kdWxlLl9fZXNNb2R1bGUgP1xuIFx0XHRcdGZ1bmN0aW9uIGdldERlZmF1bHQoKSB7IHJldHVybiBtb2R1bGVbJ2RlZmF1bHQnXTsgfSA6XG4gXHRcdFx0ZnVuY3Rpb24gZ2V0TW9kdWxlRXhwb3J0cygpIHsgcmV0dXJuIG1vZHVsZTsgfTtcbiBcdFx0X193ZWJwYWNrX3JlcXVpcmVfXy5kKGdldHRlciwgJ2EnLCBnZXR0ZXIpO1xuIFx0XHRyZXR1cm4gZ2V0dGVyO1xuIFx0fTtcblxuIFx0Ly8gT2JqZWN0LnByb3RvdHlwZS5oYXNPd25Qcm9wZXJ0eS5jYWxsXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLm8gPSBmdW5jdGlvbihvYmplY3QsIHByb3BlcnR5KSB7IHJldHVybiBPYmplY3QucHJvdG90eXBlLmhhc093blByb3BlcnR5LmNhbGwob2JqZWN0LCBwcm9wZXJ0eSk7IH07XG5cbiBcdC8vIF9fd2VicGFja19wdWJsaWNfcGF0aF9fXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLnAgPSBcIlwiO1xuXG4gXHQvLyBMb2FkIGVudHJ5IG1vZHVsZSBhbmQgcmV0dXJuIGV4cG9ydHNcbiBcdHJldHVybiBfX3dlYnBhY2tfcmVxdWlyZV9fKF9fd2VicGFja19yZXF1aXJlX18ucyA9IDEwKTtcblxuXG5cbi8vIFdFQlBBQ0sgRk9PVEVSIC8vXG4vLyB3ZWJwYWNrL2Jvb3RzdHJhcCBlMTc2NDg3N2M2ZjY4ZTc3NzAwNCIsIm1vZHVsZS5leHBvcnRzID0gcmVxdWlyZShcImJhYmVsLXJ1bnRpbWUvY29yZS1qcy9qc29uL3N0cmluZ2lmeVwiKTtcblxuXG4vLy8vLy8vLy8vLy8vLy8vLy9cbi8vIFdFQlBBQ0sgRk9PVEVSXG4vLyBleHRlcm5hbCBcImJhYmVsLXJ1bnRpbWUvY29yZS1qcy9qc29uL3N0cmluZ2lmeVwiXG4vLyBtb2R1bGUgaWQgPSAwXG4vLyBtb2R1bGUgY2h1bmtzID0gMCAxIiwibW9kdWxlLmV4cG9ydHMgPSByZXF1aXJlKFwiZnNcIik7XG5cblxuLy8vLy8vLy8vLy8vLy8vLy8vXG4vLyBXRUJQQUNLIEZPT1RFUlxuLy8gZXh0ZXJuYWwgXCJmc1wiXG4vLyBtb2R1bGUgaWQgPSAxXG4vLyBtb2R1bGUgY2h1bmtzID0gMCAxIiwibW9kdWxlLmV4cG9ydHMgPSByZXF1aXJlKFwicGF0aFwiKTtcblxuXG4vLy8vLy8vLy8vLy8vLy8vLy9cbi8vIFdFQlBBQ0sgRk9PVEVSXG4vLyBleHRlcm5hbCBcInBhdGhcIlxuLy8gbW9kdWxlIGlkID0gMlxuLy8gbW9kdWxlIGNodW5rcyA9IDAgMSIsIm1vZHVsZS5leHBvcnRzID0gcmVxdWlyZShcImJhYmVsLXJ1bnRpbWUvaGVscGVycy9zbGljZWRUb0FycmF5XCIpO1xuXG5cbi8vLy8vLy8vLy8vLy8vLy8vL1xuLy8gV0VCUEFDSyBGT09URVJcbi8vIGV4dGVybmFsIFwiYmFiZWwtcnVudGltZS9oZWxwZXJzL3NsaWNlZFRvQXJyYXlcIlxuLy8gbW9kdWxlIGlkID0gNlxuLy8gbW9kdWxlIGNodW5rcyA9IDEiLCJpbXBvcnQgKiBhcyBmcyBmcm9tICdmcyc7XG5pbXBvcnQgKiBhcyBwYXRoIGZyb20gJ3BhdGgnO1xuXG5jb25zdCBbZGlyLCBvdXRfZmlsZV1cbiAgPSBwcm9jZXNzLmFyZ3Yuc2xpY2UoMiwgNCkubWFwKChmaWxlKSA9PiB7XG4gICAgcmV0dXJuIHBhdGguam9pbihwcm9jZXNzLmN3ZCgpLCBmaWxlKTtcbiAgfSk7XG5cbmNvbnN0IHB1YmxpY19yb290ID0gcHJvY2Vzcy5hcmd2WzRdO1xuXG5jb25zdCBjdGltZSA9IChmaWxlbmFtZSkgPT4gK2ZpbGVuYW1lLm1hdGNoKC9eKFxcZCspLylbMV07XG5cbmNvbnN0IHNvdXJjZXMgPSBmcy5yZWFkZGlyU3luYyhkaXIpXG4gIC5maWx0ZXIoKGZpbGVuYW1lKSA9PiB7XG4gICAgcmV0dXJuIC9eLipfZ2V0X3RyZWVzXFwuY3N2JC8udGVzdChmaWxlbmFtZSk7XG4gIH0pXG4gIC5zb3J0KChhLCBiKSA9PiBjdGltZShiKSAtIGN0aW1lKGEpKVxuICAubWFwKChmaWxlbmFtZSkgPT4ge1xuICAgIHJldHVybiB7IGZpbGVuYW1lOiBwYXRoLmpvaW4ocHVibGljX3Jvb3QsIGZpbGVuYW1lKSB9O1xuICB9KTtcblxuZnMud3JpdGVGaWxlU3luYyhvdXRfZmlsZSwgSlNPTi5zdHJpbmdpZnkoc291cmNlcykpO1xuXG5jb25zb2xlLmxvZyhgd3JvdGUgJHtzb3VyY2VzLmxlbmd0aH0gc291cmNlcyBpbnRvICcke291dF9maWxlfSdgKTtcblxuXG5cbi8vIFdFQlBBQ0sgRk9PVEVSIC8vXG4vLyAuL3NyYy9zY3JpcHRzL2J1aWxkX3NvdXJjZXNfaW5kZXguanMiXSwic291cmNlUm9vdCI6IiJ9