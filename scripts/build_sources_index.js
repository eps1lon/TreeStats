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
/******/ 	return __webpack_require__(__webpack_require__.s = 25);
/******/ })
/************************************************************************/
/******/ ({

/***/ 0:
/***/ (function(module, exports) {

module.exports = require("path");

/***/ }),

/***/ 1:
/***/ (function(module, exports) {

module.exports = require("fs");

/***/ }),

/***/ 25:
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var _stringify = __webpack_require__(4);

var _stringify2 = _interopRequireDefault(_stringify);

var _slicedToArray2 = __webpack_require__(5);

var _slicedToArray3 = _interopRequireDefault(_slicedToArray2);

var _fs = __webpack_require__(1);

var fs = _interopRequireWildcard(_fs);

var _path = __webpack_require__(0);

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

/***/ }),

/***/ 4:
/***/ (function(module, exports) {

module.exports = require("babel-runtime/core-js/json/stringify");

/***/ }),

/***/ 5:
/***/ (function(module, exports) {

module.exports = require("babel-runtime/helpers/slicedToArray");

/***/ })

/******/ });
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vd2VicGFjay9ib290c3RyYXAgNzFiNWVjZDJlZmJmZDg5NzQ4MjU/ZDA0MioqIiwid2VicGFjazovLy9leHRlcm5hbCBcInBhdGhcIj81YjJhKioiLCJ3ZWJwYWNrOi8vL2V4dGVybmFsIFwiZnNcIj8yZTA5KioiLCJ3ZWJwYWNrOi8vLy4vc3JjL3NjcmlwdHMvYnVpbGRfc291cmNlc19pbmRleC5qcyIsIndlYnBhY2s6Ly8vZXh0ZXJuYWwgXCJiYWJlbC1ydW50aW1lL2NvcmUtanMvanNvbi9zdHJpbmdpZnlcIj9iZmE3Iiwid2VicGFjazovLy9leHRlcm5hbCBcImJhYmVsLXJ1bnRpbWUvaGVscGVycy9zbGljZWRUb0FycmF5XCI/MzVjNCJdLCJuYW1lcyI6WyJmcyIsInBhdGgiLCJwcm9jZXNzIiwiYXJndiIsInNsaWNlIiwibWFwIiwiZmlsZSIsImpvaW4iLCJjd2QiLCJkaXIiLCJvdXRfZmlsZSIsInB1YmxpY19yb290IiwiY3RpbWUiLCJmaWxlbmFtZSIsIm1hdGNoIiwic291cmNlcyIsInJlYWRkaXJTeW5jIiwiZmlsdGVyIiwidGVzdCIsInNvcnQiLCJhIiwiYiIsIndyaXRlRmlsZVN5bmMiLCJjb25zb2xlIiwibG9nIiwibGVuZ3RoIl0sIm1hcHBpbmdzIjoiO0FBQUE7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7O0FBR0E7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0EsbURBQTJDLGNBQWM7O0FBRXpEO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsYUFBSztBQUNMO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0EsbUNBQTJCLDBCQUEwQixFQUFFO0FBQ3ZELHlDQUFpQyxlQUFlO0FBQ2hEO0FBQ0E7QUFDQTs7QUFFQTtBQUNBLDhEQUFzRCwrREFBK0Q7O0FBRXJIO0FBQ0E7O0FBRUE7QUFDQTs7Ozs7Ozs7QUNoRUEsaUM7Ozs7Ozs7QUNBQSwrQjs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FDQUE7O0lBQVlBLEU7O0FBQ1o7O0lBQVlDLEk7Ozs7Ozs0QkFHUkMsUUFBUUMsSUFBUixDQUFhQyxLQUFiLENBQW1CLENBQW5CLEVBQXNCLENBQXRCLEVBQXlCQyxHQUF6QixDQUE2QixVQUFDQyxJQUFELEVBQVU7QUFDdkMsU0FBT0wsS0FBS00sSUFBTCxDQUFVTCxRQUFRTSxHQUFSLEVBQVYsRUFBeUJGLElBQXpCLENBQVA7QUFDRCxDQUZDLEM7O0lBREdHLEc7SUFBS0MsUTs7QUFLWixJQUFNQyxjQUFjVCxRQUFRQyxJQUFSLENBQWEsQ0FBYixDQUFwQjs7QUFFQSxJQUFNUyxRQUFRLFNBQVJBLEtBQVEsQ0FBQ0MsUUFBRDtBQUFBLFNBQWMsQ0FBQ0EsU0FBU0MsS0FBVCxDQUFlLFFBQWYsRUFBeUIsQ0FBekIsQ0FBZjtBQUFBLENBQWQ7O0FBRUEsSUFBTUMsVUFBVWYsR0FBR2dCLFdBQUgsQ0FBZVAsR0FBZixFQUNiUSxNQURhLENBQ04sVUFBQ0osUUFBRCxFQUFjO0FBQ3BCLFNBQU8sdUJBQXNCSyxJQUF0QixDQUEyQkwsUUFBM0I7QUFBUDtBQUNELENBSGEsRUFJYk0sSUFKYSxDQUlSLFVBQUNDLENBQUQsRUFBSUMsQ0FBSjtBQUFBLFNBQVVULE1BQU1TLENBQU4sSUFBV1QsTUFBTVEsQ0FBTixDQUFyQjtBQUFBLENBSlEsRUFLYmYsR0FMYSxDQUtULFVBQUNRLFFBQUQsRUFBYztBQUNqQixTQUFPLEVBQUVBLFVBQVVaLEtBQUtNLElBQUwsQ0FBVUksV0FBVixFQUF1QkUsUUFBdkIsQ0FBWixFQUFQO0FBQ0QsQ0FQYSxDQUFoQjs7QUFTQWIsR0FBR3NCLGFBQUgsQ0FBaUJaLFFBQWpCLEVBQTJCLHlCQUFlSyxPQUFmLENBQTNCOztBQUVBUSxRQUFRQyxHQUFSLFlBQXFCVCxRQUFRVSxNQUE3Qix3QkFBcURmLFFBQXJELFM7Ozs7Ozs7QUN2QkEsaUU7Ozs7Ozs7QUNBQSxnRSIsImZpbGUiOiJidWlsZF9zb3VyY2VzX2luZGV4LmpzIiwic291cmNlc0NvbnRlbnQiOlsiIFx0Ly8gVGhlIG1vZHVsZSBjYWNoZVxuIFx0dmFyIGluc3RhbGxlZE1vZHVsZXMgPSB7fTtcblxuIFx0Ly8gVGhlIHJlcXVpcmUgZnVuY3Rpb25cbiBcdGZ1bmN0aW9uIF9fd2VicGFja19yZXF1aXJlX18obW9kdWxlSWQpIHtcblxuIFx0XHQvLyBDaGVjayBpZiBtb2R1bGUgaXMgaW4gY2FjaGVcbiBcdFx0aWYoaW5zdGFsbGVkTW9kdWxlc1ttb2R1bGVJZF0pXG4gXHRcdFx0cmV0dXJuIGluc3RhbGxlZE1vZHVsZXNbbW9kdWxlSWRdLmV4cG9ydHM7XG5cbiBcdFx0Ly8gQ3JlYXRlIGEgbmV3IG1vZHVsZSAoYW5kIHB1dCBpdCBpbnRvIHRoZSBjYWNoZSlcbiBcdFx0dmFyIG1vZHVsZSA9IGluc3RhbGxlZE1vZHVsZXNbbW9kdWxlSWRdID0ge1xuIFx0XHRcdGk6IG1vZHVsZUlkLFxuIFx0XHRcdGw6IGZhbHNlLFxuIFx0XHRcdGV4cG9ydHM6IHt9XG4gXHRcdH07XG5cbiBcdFx0Ly8gRXhlY3V0ZSB0aGUgbW9kdWxlIGZ1bmN0aW9uXG4gXHRcdG1vZHVsZXNbbW9kdWxlSWRdLmNhbGwobW9kdWxlLmV4cG9ydHMsIG1vZHVsZSwgbW9kdWxlLmV4cG9ydHMsIF9fd2VicGFja19yZXF1aXJlX18pO1xuXG4gXHRcdC8vIEZsYWcgdGhlIG1vZHVsZSBhcyBsb2FkZWRcbiBcdFx0bW9kdWxlLmwgPSB0cnVlO1xuXG4gXHRcdC8vIFJldHVybiB0aGUgZXhwb3J0cyBvZiB0aGUgbW9kdWxlXG4gXHRcdHJldHVybiBtb2R1bGUuZXhwb3J0cztcbiBcdH1cblxuXG4gXHQvLyBleHBvc2UgdGhlIG1vZHVsZXMgb2JqZWN0IChfX3dlYnBhY2tfbW9kdWxlc19fKVxuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5tID0gbW9kdWxlcztcblxuIFx0Ly8gZXhwb3NlIHRoZSBtb2R1bGUgY2FjaGVcbiBcdF9fd2VicGFja19yZXF1aXJlX18uYyA9IGluc3RhbGxlZE1vZHVsZXM7XG5cbiBcdC8vIGlkZW50aXR5IGZ1bmN0aW9uIGZvciBjYWxsaW5nIGhhcm1vbnkgaW1wb3J0cyB3aXRoIHRoZSBjb3JyZWN0IGNvbnRleHRcbiBcdF9fd2VicGFja19yZXF1aXJlX18uaSA9IGZ1bmN0aW9uKHZhbHVlKSB7IHJldHVybiB2YWx1ZTsgfTtcblxuIFx0Ly8gZGVmaW5lIGdldHRlciBmdW5jdGlvbiBmb3IgaGFybW9ueSBleHBvcnRzXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLmQgPSBmdW5jdGlvbihleHBvcnRzLCBuYW1lLCBnZXR0ZXIpIHtcbiBcdFx0aWYoIV9fd2VicGFja19yZXF1aXJlX18ubyhleHBvcnRzLCBuYW1lKSkge1xuIFx0XHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBuYW1lLCB7XG4gXHRcdFx0XHRjb25maWd1cmFibGU6IGZhbHNlLFxuIFx0XHRcdFx0ZW51bWVyYWJsZTogdHJ1ZSxcbiBcdFx0XHRcdGdldDogZ2V0dGVyXG4gXHRcdFx0fSk7XG4gXHRcdH1cbiBcdH07XG5cbiBcdC8vIGdldERlZmF1bHRFeHBvcnQgZnVuY3Rpb24gZm9yIGNvbXBhdGliaWxpdHkgd2l0aCBub24taGFybW9ueSBtb2R1bGVzXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLm4gPSBmdW5jdGlvbihtb2R1bGUpIHtcbiBcdFx0dmFyIGdldHRlciA9IG1vZHVsZSAmJiBtb2R1bGUuX19lc01vZHVsZSA/XG4gXHRcdFx0ZnVuY3Rpb24gZ2V0RGVmYXVsdCgpIHsgcmV0dXJuIG1vZHVsZVsnZGVmYXVsdCddOyB9IDpcbiBcdFx0XHRmdW5jdGlvbiBnZXRNb2R1bGVFeHBvcnRzKCkgeyByZXR1cm4gbW9kdWxlOyB9O1xuIFx0XHRfX3dlYnBhY2tfcmVxdWlyZV9fLmQoZ2V0dGVyLCAnYScsIGdldHRlcik7XG4gXHRcdHJldHVybiBnZXR0ZXI7XG4gXHR9O1xuXG4gXHQvLyBPYmplY3QucHJvdG90eXBlLmhhc093blByb3BlcnR5LmNhbGxcbiBcdF9fd2VicGFja19yZXF1aXJlX18ubyA9IGZ1bmN0aW9uKG9iamVjdCwgcHJvcGVydHkpIHsgcmV0dXJuIE9iamVjdC5wcm90b3R5cGUuaGFzT3duUHJvcGVydHkuY2FsbChvYmplY3QsIHByb3BlcnR5KTsgfTtcblxuIFx0Ly8gX193ZWJwYWNrX3B1YmxpY19wYXRoX19cbiBcdF9fd2VicGFja19yZXF1aXJlX18ucCA9IFwiXCI7XG5cbiBcdC8vIExvYWQgZW50cnkgbW9kdWxlIGFuZCByZXR1cm4gZXhwb3J0c1xuIFx0cmV0dXJuIF9fd2VicGFja19yZXF1aXJlX18oX193ZWJwYWNrX3JlcXVpcmVfXy5zID0gMjUpO1xuXG5cblxuLy8gV0VCUEFDSyBGT09URVIgLy9cbi8vIHdlYnBhY2svYm9vdHN0cmFwIDcxYjVlY2QyZWZiZmQ4OTc0ODI1IiwibW9kdWxlLmV4cG9ydHMgPSByZXF1aXJlKFwicGF0aFwiKTtcblxuXG4vLy8vLy8vLy8vLy8vLy8vLy9cbi8vIFdFQlBBQ0sgRk9PVEVSXG4vLyBleHRlcm5hbCBcInBhdGhcIlxuLy8gbW9kdWxlIGlkID0gMFxuLy8gbW9kdWxlIGNodW5rcyA9IDAgMSAyIDMiLCJtb2R1bGUuZXhwb3J0cyA9IHJlcXVpcmUoXCJmc1wiKTtcblxuXG4vLy8vLy8vLy8vLy8vLy8vLy9cbi8vIFdFQlBBQ0sgRk9PVEVSXG4vLyBleHRlcm5hbCBcImZzXCJcbi8vIG1vZHVsZSBpZCA9IDFcbi8vIG1vZHVsZSBjaHVua3MgPSAwIDEgMiAzIiwiaW1wb3J0ICogYXMgZnMgZnJvbSAnZnMnO1xuaW1wb3J0ICogYXMgcGF0aCBmcm9tICdwYXRoJztcblxuY29uc3QgW2Rpciwgb3V0X2ZpbGVdXG4gID0gcHJvY2Vzcy5hcmd2LnNsaWNlKDIsIDQpLm1hcCgoZmlsZSkgPT4ge1xuICAgIHJldHVybiBwYXRoLmpvaW4ocHJvY2Vzcy5jd2QoKSwgZmlsZSk7XG4gIH0pO1xuXG5jb25zdCBwdWJsaWNfcm9vdCA9IHByb2Nlc3MuYXJndls0XTtcblxuY29uc3QgY3RpbWUgPSAoZmlsZW5hbWUpID0+ICtmaWxlbmFtZS5tYXRjaCgvXihcXGQrKS8pWzFdO1xuXG5jb25zdCBzb3VyY2VzID0gZnMucmVhZGRpclN5bmMoZGlyKVxuICAuZmlsdGVyKChmaWxlbmFtZSkgPT4ge1xuICAgIHJldHVybiAvXi4qX2dldF90cmVlc1xcLmNzdiQvLnRlc3QoZmlsZW5hbWUpO1xuICB9KVxuICAuc29ydCgoYSwgYikgPT4gY3RpbWUoYikgLSBjdGltZShhKSlcbiAgLm1hcCgoZmlsZW5hbWUpID0+IHtcbiAgICByZXR1cm4geyBmaWxlbmFtZTogcGF0aC5qb2luKHB1YmxpY19yb290LCBmaWxlbmFtZSkgfTtcbiAgfSk7XG5cbmZzLndyaXRlRmlsZVN5bmMob3V0X2ZpbGUsIEpTT04uc3RyaW5naWZ5KHNvdXJjZXMpKTtcblxuY29uc29sZS5sb2coYHdyb3RlICR7c291cmNlcy5sZW5ndGh9IHNvdXJjZXMgaW50byAnJHtvdXRfZmlsZX0nYCk7XG5cblxuXG4vLyBXRUJQQUNLIEZPT1RFUiAvL1xuLy8gLi9zcmMvc2NyaXB0cy9idWlsZF9zb3VyY2VzX2luZGV4LmpzIiwibW9kdWxlLmV4cG9ydHMgPSByZXF1aXJlKFwiYmFiZWwtcnVudGltZS9jb3JlLWpzL2pzb24vc3RyaW5naWZ5XCIpO1xuXG5cbi8vLy8vLy8vLy8vLy8vLy8vL1xuLy8gV0VCUEFDSyBGT09URVJcbi8vIGV4dGVybmFsIFwiYmFiZWwtcnVudGltZS9jb3JlLWpzL2pzb24vc3RyaW5naWZ5XCJcbi8vIG1vZHVsZSBpZCA9IDRcbi8vIG1vZHVsZSBjaHVua3MgPSAxIDMiLCJtb2R1bGUuZXhwb3J0cyA9IHJlcXVpcmUoXCJiYWJlbC1ydW50aW1lL2hlbHBlcnMvc2xpY2VkVG9BcnJheVwiKTtcblxuXG4vLy8vLy8vLy8vLy8vLy8vLy9cbi8vIFdFQlBBQ0sgRk9PVEVSXG4vLyBleHRlcm5hbCBcImJhYmVsLXJ1bnRpbWUvaGVscGVycy9zbGljZWRUb0FycmF5XCJcbi8vIG1vZHVsZSBpZCA9IDVcbi8vIG1vZHVsZSBjaHVua3MgPSAwIDMiXSwic291cmNlUm9vdCI6IiJ9