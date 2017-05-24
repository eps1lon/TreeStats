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
/******/ 	return __webpack_require__(__webpack_require__.s = 15);
/******/ })
/************************************************************************/
/******/ ([
/* 0 */
/***/ (function(module, exports) {

module.exports = require("fs");

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
/* 4 */,
/* 5 */,
/* 6 */
/***/ (function(module, exports) {

module.exports = require("babel-runtime/core-js/promise");

/***/ }),
/* 7 */
/***/ (function(module, exports) {

module.exports = require("babel-runtime/helpers/asyncToGenerator");

/***/ }),
/* 8 */,
/* 9 */
/***/ (function(module, exports) {

module.exports = require("babel-runtime/regenerator");

/***/ }),
/* 10 */
/***/ (function(module, exports) {

module.exports = require("chrome-remote-interface");

/***/ }),
/* 11 */,
/* 12 */,
/* 13 */,
/* 14 */,
/* 15 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var _getIterator2 = __webpack_require__(2);

var _getIterator3 = _interopRequireDefault(_getIterator2);

var _regenerator = __webpack_require__(9);

var _regenerator2 = _interopRequireDefault(_regenerator);

var _asyncToGenerator2 = __webpack_require__(7);

var _asyncToGenerator3 = _interopRequireDefault(_asyncToGenerator2);

var _promise = __webpack_require__(6);

var _promise2 = _interopRequireDefault(_promise);

var _chromeRemoteInterface = __webpack_require__(10);

var cdp = _interopRequireWildcard(_chromeRemoteInterface);

var _fs = __webpack_require__(0);

var fs = _interopRequireWildcard(_fs);

var _path = __webpack_require__(1);

var path = _interopRequireWildcard(_path);

function _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; } else { var newObj = {}; if (obj != null) { for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) newObj[key] = obj[key]; } } newObj.default = obj; return newObj; } }

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var viewportWidth = 1920;
var viewportHeight = 1080;

var sleep = function sleep(n) {
  return new _promise2.default(function (resolve) {
    return setTimeout(function () {
      return resolve();
    }, n);
  });
};

var range = function range(n, m) {
  return Array(m - n).fill(0).map(function (_, i) {
    return n + i;
  });
};

var interleavedToObject = function interleavedToObject(array) {
  if (array.length % 2) {
    throw new Error('only interleaved when |array| % 2 == 0');
  }

  var parsed = {};
  for (var i = 0; i < array.length; i += 2) {
    parsed[array[i]] = array[i + 1];
  }

  return parsed;
};

var classNames = function () {
  var _ref = (0, _asyncToGenerator3.default)(_regenerator2.default.mark(function _callee(DOM, node_id) {
    var attributes, klass;
    return _regenerator2.default.wrap(function _callee$(_context) {
      while (1) {
        switch (_context.prev = _context.next) {
          case 0:
            _context.t0 = interleavedToObject;
            _context.next = 3;
            return DOM.getAttributes({ nodeId: node_id });

          case 3:
            _context.t1 = _context.sent.attributes;
            attributes = (0, _context.t0)(_context.t1);
            klass = attributes['class'];

            if (!(typeof klass === 'string')) {
              _context.next = 10;
              break;
            }

            return _context.abrupt('return', klass.split(' '));

          case 10:
            return _context.abrupt('return', []);

          case 11:
          case 'end':
            return _context.stop();
        }
      }
    }, _callee, undefined);
  }));

  return function classNames(_x, _x2) {
    return _ref.apply(this, arguments);
  };
}();

var hasClass = function () {
  var _ref2 = (0, _asyncToGenerator3.default)(_regenerator2.default.mark(function _callee2(DOM, node_id, class_name) {
    var class_names;
    return _regenerator2.default.wrap(function _callee2$(_context2) {
      while (1) {
        switch (_context2.prev = _context2.next) {
          case 0:
            _context2.next = 2;
            return classNames(DOM, node_id);

          case 2:
            class_names = _context2.sent;
            return _context2.abrupt('return', class_names.indexOf(class_name) !== -1);

          case 4:
          case 'end':
            return _context2.stop();
        }
      }
    }, _callee2, undefined);
  }));

  return function hasClass(_x3, _x4, _x5) {
    return _ref2.apply(this, arguments);
  };
}();

var querySelector = function () {
  var _ref3 = (0, _asyncToGenerator3.default)(_regenerator2.default.mark(function _callee3(DOM, selector) {
    var _ref4, documentNodeId;

    return _regenerator2.default.wrap(function _callee3$(_context3) {
      while (1) {
        switch (_context3.prev = _context3.next) {
          case 0:
            _context3.next = 2;
            return DOM.getDocument();

          case 2:
            _ref4 = _context3.sent;
            documentNodeId = _ref4.root.nodeId;
            _context3.next = 6;
            return DOM.querySelector({
              selector: selector,
              nodeId: documentNodeId
            });

          case 6:
            return _context3.abrupt('return', _context3.sent);

          case 7:
          case 'end':
            return _context3.stop();
        }
      }
    }, _callee3, undefined);
  }));

  return function querySelector(_x6, _x7) {
    return _ref3.apply(this, arguments);
  };
}();

var appIsLoading = function () {
  var _ref5 = (0, _asyncToGenerator3.default)(_regenerator2.default.mark(function _callee4(DOM) {
    var _ref6, htmlNodeId;

    return _regenerator2.default.wrap(function _callee4$(_context4) {
      while (1) {
        switch (_context4.prev = _context4.next) {
          case 0:
            _context4.next = 2;
            return querySelector(DOM, 'html');

          case 2:
            _ref6 = _context4.sent;
            htmlNodeId = _ref6.nodeId;
            _context4.next = 6;
            return hasClass(DOM, htmlNodeId, 'nprogress-busy');

          case 6:
            return _context4.abrupt('return', _context4.sent);

          case 7:
          case 'end':
            return _context4.stop();
        }
      }
    }, _callee4, undefined);
  }));

  return function appIsLoading(_x8) {
    return _ref5.apply(this, arguments);
  };
}();

var headmapLoaded = function headmapLoaded(DOM) {
  return new _promise2.default(function () {
    var _ref7 = (0, _asyncToGenerator3.default)(_regenerator2.default.mark(function _callee5(resolve) {
      return _regenerator2.default.wrap(function _callee5$(_context5) {
        while (1) {
          switch (_context5.prev = _context5.next) {
            case 0:
              _context5.next = 2;
              return appIsLoading(DOM);

            case 2:
              if (!_context5.sent) {
                _context5.next = 7;
                break;
              }

              _context5.next = 5;
              return DOM.attributeModified();

            case 5:
              _context5.next = 0;
              break;

            case 7:
              resolve();

            case 8:
            case 'end':
              return _context5.stop();
          }
        }
      }, _callee5, undefined);
    }));

    return function (_x9) {
      return _ref7.apply(this, arguments);
    };
  }());
};

var screenshot = function () {
  var _ref8 = (0, _asyncToGenerator3.default)(_regenerator2.default.mark(function _callee6(Page, DOM, out_prefix) {
    var league = arguments.length > 3 && arguments[3] !== undefined ? arguments[3] : 'all';
    var source = arguments.length > 4 && arguments[4] !== undefined ? arguments[4] : '0';

    var url, _ref9, data;

    return _regenerator2.default.wrap(function _callee6$(_context6) {
      while (1) {
        switch (_context6.prev = _context6.next) {
          case 0:
            url = 'http://localhost:3000/league/' + league + '/?clean&source=' + source;
            _context6.next = 3;
            return Page.navigate({ url: url });

          case 3:
            _context6.next = 5;
            return Page.domContentEventFired();

          case 5:
            _context6.next = 7;
            return sleep(20);

          case 7:
            _context6.next = 9;
            return headmapLoaded(DOM);

          case 9:
            _context6.next = 11;
            return Page.captureScreenshot();

          case 11:
            _ref9 = _context6.sent;
            data = _ref9.data;

            fs.writeFileSync(path.join(__dirname, 'screenshot', [out_prefix, source, league].join('-') + '.png'), Buffer.from(data, 'base64'));

          case 14:
          case 'end':
            return _context6.stop();
        }
      }
    }, _callee6, undefined);
  }));

  return function screenshot(_x12, _x13, _x14) {
    return _ref8.apply(this, arguments);
  };
}();

cdp.default(function () {
  var _ref10 = (0, _asyncToGenerator3.default)(_regenerator2.default.mark(function _callee7(client) {
    var Emulation, Page, DOM, deviceMetrics, sources, _iteratorNormalCompletion, _didIteratorError, _iteratorError, _iterator, _step, source;

    return _regenerator2.default.wrap(function _callee7$(_context7) {
      while (1) {
        switch (_context7.prev = _context7.next) {
          case 0:
            Emulation = client.Emulation, Page = client.Page, DOM = client.DOM;
            _context7.prev = 1;
            _context7.next = 4;
            return Page.enable();

          case 4:
            _context7.next = 6;
            return DOM.enable();

          case 6:

            // Set up viewport resolution, etc.
            deviceMetrics = {
              width: viewportWidth,
              height: viewportHeight,
              deviceScaleFactor: 0,
              mobile: false,
              fitWindow: false
            };
            _context7.next = 9;
            return Emulation.setDeviceMetricsOverride(deviceMetrics);

          case 9:
            _context7.next = 11;
            return Emulation.setVisibleSize({
              width: viewportWidth,
              height: viewportHeight
            });

          case 11:
            sources = range(0, 3);
            _iteratorNormalCompletion = true;
            _didIteratorError = false;
            _iteratorError = undefined;
            _context7.prev = 15;
            _iterator = (0, _getIterator3.default)(sources);

          case 17:
            if (_iteratorNormalCompletion = (_step = _iterator.next()).done) {
              _context7.next = 25;
              break;
            }

            source = _step.value;
            _context7.next = 21;
            return screenshot(Page, DOM, 'test', 'all', source);

          case 21:
            console.log('shot taken of', source);

          case 22:
            _iteratorNormalCompletion = true;
            _context7.next = 17;
            break;

          case 25:
            _context7.next = 31;
            break;

          case 27:
            _context7.prev = 27;
            _context7.t0 = _context7['catch'](15);
            _didIteratorError = true;
            _iteratorError = _context7.t0;

          case 31:
            _context7.prev = 31;
            _context7.prev = 32;

            if (!_iteratorNormalCompletion && _iterator.return) {
              _iterator.return();
            }

          case 34:
            _context7.prev = 34;

            if (!_didIteratorError) {
              _context7.next = 37;
              break;
            }

            throw _iteratorError;

          case 37:
            return _context7.finish(34);

          case 38:
            return _context7.finish(31);

          case 39:
            _context7.next = 44;
            break;

          case 41:
            _context7.prev = 41;
            _context7.t1 = _context7['catch'](1);

            console.error(_context7.t1);

          case 44:
            _context7.next = 46;
            return client.close();

          case 46:
          case 'end':
            return _context7.stop();
        }
      }
    }, _callee7, undefined, [[1, 41], [15, 27, 31, 39], [32,, 34, 38]]);
  }));

  return function (_x15) {
    return _ref10.apply(this, arguments);
  };
}()).on('error', function (err) {
  console.error(err);
});

/***/ })
/******/ ]);
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vd2VicGFjay9ib290c3RyYXAgNTRmN2NkMjc4Yzk5MTlhYjU2OTEiLCJ3ZWJwYWNrOi8vL2V4dGVybmFsIFwiZnNcIiIsIndlYnBhY2s6Ly8vZXh0ZXJuYWwgXCJwYXRoXCIiLCJ3ZWJwYWNrOi8vL2V4dGVybmFsIFwiYmFiZWwtcnVudGltZS9jb3JlLWpzL2dldC1pdGVyYXRvclwiIiwid2VicGFjazovLy9leHRlcm5hbCBcImJhYmVsLXJ1bnRpbWUvY29yZS1qcy9wcm9taXNlXCIiLCJ3ZWJwYWNrOi8vL2V4dGVybmFsIFwiYmFiZWwtcnVudGltZS9oZWxwZXJzL2FzeW5jVG9HZW5lcmF0b3JcIiIsIndlYnBhY2s6Ly8vZXh0ZXJuYWwgXCJiYWJlbC1ydW50aW1lL3JlZ2VuZXJhdG9yXCIiLCJ3ZWJwYWNrOi8vL2V4dGVybmFsIFwiY2hyb21lLXJlbW90ZS1pbnRlcmZhY2VcIiIsIndlYnBhY2s6Ly8vLi9zcmMvc2NyaXB0cy9zY3JlZW5zaG90LmpzIl0sIm5hbWVzIjpbImNkcCIsImZzIiwicGF0aCIsInZpZXdwb3J0V2lkdGgiLCJ2aWV3cG9ydEhlaWdodCIsInNsZWVwIiwibiIsInJlc29sdmUiLCJzZXRUaW1lb3V0IiwicmFuZ2UiLCJtIiwiQXJyYXkiLCJmaWxsIiwibWFwIiwiXyIsImkiLCJpbnRlcmxlYXZlZFRvT2JqZWN0IiwiYXJyYXkiLCJsZW5ndGgiLCJFcnJvciIsInBhcnNlZCIsImNsYXNzTmFtZXMiLCJET00iLCJub2RlX2lkIiwiZ2V0QXR0cmlidXRlcyIsIm5vZGVJZCIsImF0dHJpYnV0ZXMiLCJrbGFzcyIsInNwbGl0IiwiaGFzQ2xhc3MiLCJjbGFzc19uYW1lIiwiY2xhc3NfbmFtZXMiLCJpbmRleE9mIiwicXVlcnlTZWxlY3RvciIsInNlbGVjdG9yIiwiZ2V0RG9jdW1lbnQiLCJkb2N1bWVudE5vZGVJZCIsInJvb3QiLCJhcHBJc0xvYWRpbmciLCJodG1sTm9kZUlkIiwiaGVhZG1hcExvYWRlZCIsImF0dHJpYnV0ZU1vZGlmaWVkIiwic2NyZWVuc2hvdCIsIlBhZ2UiLCJvdXRfcHJlZml4IiwibGVhZ3VlIiwic291cmNlIiwidXJsIiwibmF2aWdhdGUiLCJkb21Db250ZW50RXZlbnRGaXJlZCIsImNhcHR1cmVTY3JlZW5zaG90IiwiZGF0YSIsIndyaXRlRmlsZVN5bmMiLCJqb2luIiwiX19kaXJuYW1lIiwiQnVmZmVyIiwiZnJvbSIsImRlZmF1bHQiLCJjbGllbnQiLCJFbXVsYXRpb24iLCJlbmFibGUiLCJkZXZpY2VNZXRyaWNzIiwid2lkdGgiLCJoZWlnaHQiLCJkZXZpY2VTY2FsZUZhY3RvciIsIm1vYmlsZSIsImZpdFdpbmRvdyIsInNldERldmljZU1ldHJpY3NPdmVycmlkZSIsInNldFZpc2libGVTaXplIiwic291cmNlcyIsImNvbnNvbGUiLCJsb2ciLCJlcnJvciIsImNsb3NlIiwib24iLCJlcnIiXSwibWFwcGluZ3MiOiI7QUFBQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOzs7QUFHQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQSxtREFBMkMsY0FBYzs7QUFFekQ7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxhQUFLO0FBQ0w7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQSxtQ0FBMkIsMEJBQTBCLEVBQUU7QUFDdkQseUNBQWlDLGVBQWU7QUFDaEQ7QUFDQTtBQUNBOztBQUVBO0FBQ0EsOERBQXNELCtEQUErRDs7QUFFckg7QUFDQTs7QUFFQTtBQUNBOzs7Ozs7O0FDaEVBLCtCOzs7Ozs7QUNBQSxpQzs7Ozs7O0FDQUEsK0Q7Ozs7Ozs7OztBQ0FBLDBEOzs7Ozs7QUNBQSxtRTs7Ozs7OztBQ0FBLHNEOzs7Ozs7QUNBQSxvRDs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUNBQTs7SUFBWUEsRzs7QUFDWjs7SUFBWUMsRTs7QUFDWjs7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dEJiOztBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7O0FBc0JHdkIsa0JBdEJIO0FBQUE7QUFBQSxtQkF1QkFKLFdBQVdDLElBQVgsRUFBaUJyQixHQUFqQixFQUFzQixNQUF0QixFQUE4QixLQUE5QixFQUFxQ3dCLE1BQXJDLENBdkJBOztBQUFBO0FBd0JOd0Isb0JBQVFDLEdBQVIsQ0FBWSxlQUFaLEVBQTZCekIsTUFBN0I7O0FBeEJNO0FBQUE7QUFBQTtBQUFBOztBQUFBO0FBQUE7QUFBQTs7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBOztBQUFBO0FBQUE7QUFBQTs7QUFBQTtBQUFBO0FBQUE7O0FBQUE7QUFBQTs7QUFBQTtBQUFBO0FBQUE7QUFBQTs7QUFBQTs7QUFBQTtBQUFBOztBQUFBO0FBQUE7O0FBQUE7QUFBQTtBQUFBOztBQUFBO0FBQUE7QUFBQTs7QUEyQlJ3QixvQkFBUUUsS0FBUjs7QUEzQlE7QUFBQTtBQUFBLG1CQTZCSmQsT0FBT2UsS0FBUCxFQTdCSTs7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxHQUFaOztBQUFBO0FBQUE7QUFBQTtBQUFBLEtBOEJHQyxFQTlCSCxDQThCTSxPQTlCTixFQThCZSxVQUFDQyxHQUFELEVBQVM7QUFDdEJMLFVBQVFFLEtBQVIsQ0FBY0csR0FBZDtBQUNELENBaENELEUiLCJmaWxlIjoic2NyZWVuc2hvdC5qcyIsInNvdXJjZXNDb250ZW50IjpbIiBcdC8vIFRoZSBtb2R1bGUgY2FjaGVcbiBcdHZhciBpbnN0YWxsZWRNb2R1bGVzID0ge307XG5cbiBcdC8vIFRoZSByZXF1aXJlIGZ1bmN0aW9uXG4gXHRmdW5jdGlvbiBfX3dlYnBhY2tfcmVxdWlyZV9fKG1vZHVsZUlkKSB7XG5cbiBcdFx0Ly8gQ2hlY2sgaWYgbW9kdWxlIGlzIGluIGNhY2hlXG4gXHRcdGlmKGluc3RhbGxlZE1vZHVsZXNbbW9kdWxlSWRdKVxuIFx0XHRcdHJldHVybiBpbnN0YWxsZWRNb2R1bGVzW21vZHVsZUlkXS5leHBvcnRzO1xuXG4gXHRcdC8vIENyZWF0ZSBhIG5ldyBtb2R1bGUgKGFuZCBwdXQgaXQgaW50byB0aGUgY2FjaGUpXG4gXHRcdHZhciBtb2R1bGUgPSBpbnN0YWxsZWRNb2R1bGVzW21vZHVsZUlkXSA9IHtcbiBcdFx0XHRpOiBtb2R1bGVJZCxcbiBcdFx0XHRsOiBmYWxzZSxcbiBcdFx0XHRleHBvcnRzOiB7fVxuIFx0XHR9O1xuXG4gXHRcdC8vIEV4ZWN1dGUgdGhlIG1vZHVsZSBmdW5jdGlvblxuIFx0XHRtb2R1bGVzW21vZHVsZUlkXS5jYWxsKG1vZHVsZS5leHBvcnRzLCBtb2R1bGUsIG1vZHVsZS5leHBvcnRzLCBfX3dlYnBhY2tfcmVxdWlyZV9fKTtcblxuIFx0XHQvLyBGbGFnIHRoZSBtb2R1bGUgYXMgbG9hZGVkXG4gXHRcdG1vZHVsZS5sID0gdHJ1ZTtcblxuIFx0XHQvLyBSZXR1cm4gdGhlIGV4cG9ydHMgb2YgdGhlIG1vZHVsZVxuIFx0XHRyZXR1cm4gbW9kdWxlLmV4cG9ydHM7XG4gXHR9XG5cblxuIFx0Ly8gZXhwb3NlIHRoZSBtb2R1bGVzIG9iamVjdCAoX193ZWJwYWNrX21vZHVsZXNfXylcbiBcdF9fd2VicGFja19yZXF1aXJlX18ubSA9IG1vZHVsZXM7XG5cbiBcdC8vIGV4cG9zZSB0aGUgbW9kdWxlIGNhY2hlXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLmMgPSBpbnN0YWxsZWRNb2R1bGVzO1xuXG4gXHQvLyBpZGVudGl0eSBmdW5jdGlvbiBmb3IgY2FsbGluZyBoYXJtb255IGltcG9ydHMgd2l0aCB0aGUgY29ycmVjdCBjb250ZXh0XG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLmkgPSBmdW5jdGlvbih2YWx1ZSkgeyByZXR1cm4gdmFsdWU7IH07XG5cbiBcdC8vIGRlZmluZSBnZXR0ZXIgZnVuY3Rpb24gZm9yIGhhcm1vbnkgZXhwb3J0c1xuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5kID0gZnVuY3Rpb24oZXhwb3J0cywgbmFtZSwgZ2V0dGVyKSB7XG4gXHRcdGlmKCFfX3dlYnBhY2tfcmVxdWlyZV9fLm8oZXhwb3J0cywgbmFtZSkpIHtcbiBcdFx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgbmFtZSwge1xuIFx0XHRcdFx0Y29uZmlndXJhYmxlOiBmYWxzZSxcbiBcdFx0XHRcdGVudW1lcmFibGU6IHRydWUsXG4gXHRcdFx0XHRnZXQ6IGdldHRlclxuIFx0XHRcdH0pO1xuIFx0XHR9XG4gXHR9O1xuXG4gXHQvLyBnZXREZWZhdWx0RXhwb3J0IGZ1bmN0aW9uIGZvciBjb21wYXRpYmlsaXR5IHdpdGggbm9uLWhhcm1vbnkgbW9kdWxlc1xuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5uID0gZnVuY3Rpb24obW9kdWxlKSB7XG4gXHRcdHZhciBnZXR0ZXIgPSBtb2R1bGUgJiYgbW9kdWxlLl9fZXNNb2R1bGUgP1xuIFx0XHRcdGZ1bmN0aW9uIGdldERlZmF1bHQoKSB7IHJldHVybiBtb2R1bGVbJ2RlZmF1bHQnXTsgfSA6XG4gXHRcdFx0ZnVuY3Rpb24gZ2V0TW9kdWxlRXhwb3J0cygpIHsgcmV0dXJuIG1vZHVsZTsgfTtcbiBcdFx0X193ZWJwYWNrX3JlcXVpcmVfXy5kKGdldHRlciwgJ2EnLCBnZXR0ZXIpO1xuIFx0XHRyZXR1cm4gZ2V0dGVyO1xuIFx0fTtcblxuIFx0Ly8gT2JqZWN0LnByb3RvdHlwZS5oYXNPd25Qcm9wZXJ0eS5jYWxsXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLm8gPSBmdW5jdGlvbihvYmplY3QsIHByb3BlcnR5KSB7IHJldHVybiBPYmplY3QucHJvdG90eXBlLmhhc093blByb3BlcnR5LmNhbGwob2JqZWN0LCBwcm9wZXJ0eSk7IH07XG5cbiBcdC8vIF9fd2VicGFja19wdWJsaWNfcGF0aF9fXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLnAgPSBcIlwiO1xuXG4gXHQvLyBMb2FkIGVudHJ5IG1vZHVsZSBhbmQgcmV0dXJuIGV4cG9ydHNcbiBcdHJldHVybiBfX3dlYnBhY2tfcmVxdWlyZV9fKF9fd2VicGFja19yZXF1aXJlX18ucyA9IDE1KTtcblxuXG5cbi8vIFdFQlBBQ0sgRk9PVEVSIC8vXG4vLyB3ZWJwYWNrL2Jvb3RzdHJhcCA1NGY3Y2QyNzhjOTkxOWFiNTY5MSIsIm1vZHVsZS5leHBvcnRzID0gcmVxdWlyZShcImZzXCIpO1xuXG5cbi8vLy8vLy8vLy8vLy8vLy8vL1xuLy8gV0VCUEFDSyBGT09URVJcbi8vIGV4dGVybmFsIFwiZnNcIlxuLy8gbW9kdWxlIGlkID0gMFxuLy8gbW9kdWxlIGNodW5rcyA9IDAgMSAyIiwibW9kdWxlLmV4cG9ydHMgPSByZXF1aXJlKFwicGF0aFwiKTtcblxuXG4vLy8vLy8vLy8vLy8vLy8vLy9cbi8vIFdFQlBBQ0sgRk9PVEVSXG4vLyBleHRlcm5hbCBcInBhdGhcIlxuLy8gbW9kdWxlIGlkID0gMVxuLy8gbW9kdWxlIGNodW5rcyA9IDAgMSAyIiwibW9kdWxlLmV4cG9ydHMgPSByZXF1aXJlKFwiYmFiZWwtcnVudGltZS9jb3JlLWpzL2dldC1pdGVyYXRvclwiKTtcblxuXG4vLy8vLy8vLy8vLy8vLy8vLy9cbi8vIFdFQlBBQ0sgRk9PVEVSXG4vLyBleHRlcm5hbCBcImJhYmVsLXJ1bnRpbWUvY29yZS1qcy9nZXQtaXRlcmF0b3JcIlxuLy8gbW9kdWxlIGlkID0gMlxuLy8gbW9kdWxlIGNodW5rcyA9IDAgMSIsIm1vZHVsZS5leHBvcnRzID0gcmVxdWlyZShcImJhYmVsLXJ1bnRpbWUvY29yZS1qcy9wcm9taXNlXCIpO1xuXG5cbi8vLy8vLy8vLy8vLy8vLy8vL1xuLy8gV0VCUEFDSyBGT09URVJcbi8vIGV4dGVybmFsIFwiYmFiZWwtcnVudGltZS9jb3JlLWpzL3Byb21pc2VcIlxuLy8gbW9kdWxlIGlkID0gNlxuLy8gbW9kdWxlIGNodW5rcyA9IDEiLCJtb2R1bGUuZXhwb3J0cyA9IHJlcXVpcmUoXCJiYWJlbC1ydW50aW1lL2hlbHBlcnMvYXN5bmNUb0dlbmVyYXRvclwiKTtcblxuXG4vLy8vLy8vLy8vLy8vLy8vLy9cbi8vIFdFQlBBQ0sgRk9PVEVSXG4vLyBleHRlcm5hbCBcImJhYmVsLXJ1bnRpbWUvaGVscGVycy9hc3luY1RvR2VuZXJhdG9yXCJcbi8vIG1vZHVsZSBpZCA9IDdcbi8vIG1vZHVsZSBjaHVua3MgPSAxIiwibW9kdWxlLmV4cG9ydHMgPSByZXF1aXJlKFwiYmFiZWwtcnVudGltZS9yZWdlbmVyYXRvclwiKTtcblxuXG4vLy8vLy8vLy8vLy8vLy8vLy9cbi8vIFdFQlBBQ0sgRk9PVEVSXG4vLyBleHRlcm5hbCBcImJhYmVsLXJ1bnRpbWUvcmVnZW5lcmF0b3JcIlxuLy8gbW9kdWxlIGlkID0gOVxuLy8gbW9kdWxlIGNodW5rcyA9IDEiLCJtb2R1bGUuZXhwb3J0cyA9IHJlcXVpcmUoXCJjaHJvbWUtcmVtb3RlLWludGVyZmFjZVwiKTtcblxuXG4vLy8vLy8vLy8vLy8vLy8vLy9cbi8vIFdFQlBBQ0sgRk9PVEVSXG4vLyBleHRlcm5hbCBcImNocm9tZS1yZW1vdGUtaW50ZXJmYWNlXCJcbi8vIG1vZHVsZSBpZCA9IDEwXG4vLyBtb2R1bGUgY2h1bmtzID0gMSIsImltcG9ydCAqIGFzIGNkcCBmcm9tICdjaHJvbWUtcmVtb3RlLWludGVyZmFjZSc7XG5pbXBvcnQgKiBhcyBmcyBmcm9tICdmcyc7XG5pbXBvcnQgKiBhcyBwYXRoIGZyb20gJ3BhdGgnO1xuXG5jb25zdCB2aWV3cG9ydFdpZHRoID0gMTkyMDtcbmNvbnN0IHZpZXdwb3J0SGVpZ2h0ID0gMTA4MDtcblxuY29uc3Qgc2xlZXAgPSAobikgPT4gbmV3IFByb21pc2UoKHJlc29sdmUpID0+IHNldFRpbWVvdXQoKCkgPT4gcmVzb2x2ZSgpLCBuKSk7XG5cbmNvbnN0IHJhbmdlID0gKG4sIG0pID0+IEFycmF5KG0gLSBuKS5maWxsKDApLm1hcCgoXywgaSkgPT4gbiArIGkpO1xuXG5jb25zdCBpbnRlcmxlYXZlZFRvT2JqZWN0ID0gKGFycmF5KSA9PiB7XG4gIGlmIChhcnJheS5sZW5ndGggJSAyKSB7XG4gICAgdGhyb3cgbmV3IEVycm9yKCdvbmx5IGludGVybGVhdmVkIHdoZW4gfGFycmF5fCAlIDIgPT0gMCcpO1xuICB9XG5cbiAgY29uc3QgcGFyc2VkID0ge307XG4gIGZvciAobGV0IGkgPSAwOyBpIDwgYXJyYXkubGVuZ3RoOyBpICs9IDIpIHtcbiAgICBwYXJzZWRbYXJyYXlbaV1dID0gYXJyYXlbaSsxXTtcbiAgfVxuXG4gIHJldHVybiBwYXJzZWQ7XG59O1xuXG5jb25zdCBjbGFzc05hbWVzID0gYXN5bmMgKERPTSwgbm9kZV9pZCkgPT4ge1xuICBjb25zdCBhdHRyaWJ1dGVzID0gaW50ZXJsZWF2ZWRUb09iamVjdChcbiAgICAoYXdhaXQgRE9NLmdldEF0dHJpYnV0ZXMoeyBub2RlSWQ6IG5vZGVfaWQgfSkpLmF0dHJpYnV0ZXNcbiAgKTtcbiAgY29uc3Qga2xhc3MgPSBhdHRyaWJ1dGVzWydjbGFzcyddO1xuXG4gIGlmICh0eXBlb2Yga2xhc3MgPT09ICdzdHJpbmcnKSB7XG4gICAgcmV0dXJuIGtsYXNzLnNwbGl0KCcgJyk7XG4gIH0gZWxzZSB7XG4gICAgcmV0dXJuIFtdO1xuICB9XG59O1xuXG5jb25zdCBoYXNDbGFzcyA9IGFzeW5jIChET00sIG5vZGVfaWQsIGNsYXNzX25hbWUpID0+IHtcbiAgY29uc3QgY2xhc3NfbmFtZXMgPSBhd2FpdCBjbGFzc05hbWVzKERPTSwgbm9kZV9pZCk7XG4gIHJldHVybiBjbGFzc19uYW1lcy5pbmRleE9mKGNsYXNzX25hbWUpICE9PSAtMTtcbn07XG5cbmNvbnN0IHF1ZXJ5U2VsZWN0b3IgPSBhc3luYyAoRE9NLCBzZWxlY3RvcikgPT4ge1xuICBjb25zdCB7IHJvb3Q6IHsgbm9kZUlkOiBkb2N1bWVudE5vZGVJZCB9IH0gPSBhd2FpdCBET00uZ2V0RG9jdW1lbnQoKTtcbiAgcmV0dXJuIGF3YWl0IERPTS5xdWVyeVNlbGVjdG9yKHtcbiAgICBzZWxlY3RvcixcbiAgICBub2RlSWQ6IGRvY3VtZW50Tm9kZUlkLFxuICB9KTtcbn07XG5cbmNvbnN0IGFwcElzTG9hZGluZyA9IGFzeW5jIChET00pID0+IHtcbiAgY29uc3QgeyBub2RlSWQ6IGh0bWxOb2RlSWQgfSA9IGF3YWl0IHF1ZXJ5U2VsZWN0b3IoRE9NLCAnaHRtbCcpO1xuXG4gIHJldHVybiBhd2FpdCBoYXNDbGFzcyhET00sIGh0bWxOb2RlSWQsICducHJvZ3Jlc3MtYnVzeScpO1xufTtcblxuY29uc3QgaGVhZG1hcExvYWRlZCA9IChET00pID0+IG5ldyBQcm9taXNlKGFzeW5jIChyZXNvbHZlKSA9PiB7XG4gIHdoaWxlIChhd2FpdCBhcHBJc0xvYWRpbmcoRE9NKSkge1xuICAgIC8vIGF3YWl0IHNsZWVwKDIwKTtcbiAgICBhd2FpdCBET00uYXR0cmlidXRlTW9kaWZpZWQoKTtcbiAgfVxuICByZXNvbHZlKCk7XG59KTtcblxuY29uc3Qgc2NyZWVuc2hvdCA9IGFzeW5jIChcbiAgUGFnZSwgRE9NLCBvdXRfcHJlZml4LCBsZWFndWUgPSAnYWxsJywgc291cmNlID0gJzAnXG4pID0+IHtcbiAgY29uc3QgdXJsID0gYGh0dHA6Ly9sb2NhbGhvc3Q6MzAwMC9sZWFndWUvJHtsZWFndWV9Lz9jbGVhbiZzb3VyY2U9JHtzb3VyY2V9YDtcblxuICBhd2FpdCBQYWdlLm5hdmlnYXRlKHsgdXJsIH0pO1xuICBhd2FpdCBQYWdlLmRvbUNvbnRlbnRFdmVudEZpcmVkKCk7XG5cbiAgYXdhaXQgc2xlZXAoMjApOyAvLyB3YWl0Zm9yIGluaXQgYWN0aW9uXG4gIGF3YWl0IGhlYWRtYXBMb2FkZWQoRE9NKTtcblxuICBjb25zdCB7IGRhdGEgfSA9IGF3YWl0IFBhZ2UuY2FwdHVyZVNjcmVlbnNob3QoKTtcbiAgZnMud3JpdGVGaWxlU3luYyhcbiAgICBwYXRoLmpvaW4oXG4gICAgICBfX2Rpcm5hbWUsXG4gICAgICAnc2NyZWVuc2hvdCcsXG4gICAgICBbb3V0X3ByZWZpeCwgc291cmNlLCBsZWFndWVdLmpvaW4oJy0nKSArICcucG5nJ1xuICAgICksXG4gICAgQnVmZmVyLmZyb20oZGF0YSwgJ2Jhc2U2NCcpXG4gICk7XG59O1xuXG5jZHAuZGVmYXVsdChhc3luYyAoY2xpZW50KSA9PiB7XG4gIGNvbnN0IHsgRW11bGF0aW9uLCBQYWdlLCBET00gfSA9IGNsaWVudDtcbiAgdHJ5IHtcbiAgICBhd2FpdCBQYWdlLmVuYWJsZSgpO1xuICAgIGF3YWl0IERPTS5lbmFibGUoKTtcblxuICAgIC8vIFNldCB1cCB2aWV3cG9ydCByZXNvbHV0aW9uLCBldGMuXG4gICAgY29uc3QgZGV2aWNlTWV0cmljcyA9IHtcbiAgICAgIHdpZHRoOiB2aWV3cG9ydFdpZHRoLFxuICAgICAgaGVpZ2h0OiB2aWV3cG9ydEhlaWdodCxcbiAgICAgIGRldmljZVNjYWxlRmFjdG9yOiAwLFxuICAgICAgbW9iaWxlOiBmYWxzZSxcbiAgICAgIGZpdFdpbmRvdzogZmFsc2UsXG4gICAgfTtcbiAgICBhd2FpdCBFbXVsYXRpb24uc2V0RGV2aWNlTWV0cmljc092ZXJyaWRlKGRldmljZU1ldHJpY3MpO1xuICAgIGF3YWl0IEVtdWxhdGlvbi5zZXRWaXNpYmxlU2l6ZSh7XG4gICAgICB3aWR0aDogdmlld3BvcnRXaWR0aCxcbiAgICAgIGhlaWdodDogdmlld3BvcnRIZWlnaHQsXG4gICAgfSk7XG5cbiAgICBjb25zdCBzb3VyY2VzID0gcmFuZ2UoMCwgMyk7XG5cbiAgICBmb3IgKGNvbnN0IHNvdXJjZSBvZiBzb3VyY2VzKSB7XG4gICAgICBhd2FpdCBzY3JlZW5zaG90KFBhZ2UsIERPTSwgJ3Rlc3QnLCAnYWxsJywgc291cmNlKTtcbiAgICAgIGNvbnNvbGUubG9nKCdzaG90IHRha2VuIG9mJywgc291cmNlKTtcbiAgICB9XG4gIH0gY2F0Y2ggKGVycikge1xuICAgIGNvbnNvbGUuZXJyb3IoZXJyKTtcbiAgfVxuICBhd2FpdCBjbGllbnQuY2xvc2UoKTtcbn0pLm9uKCdlcnJvcicsIChlcnIpID0+IHtcbiAgY29uc29sZS5lcnJvcihlcnIpO1xufSk7XG5cblxuXG4vLyBXRUJQQUNLIEZPT1RFUiAvL1xuLy8gLi9zcmMvc2NyaXB0cy9zY3JlZW5zaG90LmpzIl0sInNvdXJjZVJvb3QiOiIifQ==