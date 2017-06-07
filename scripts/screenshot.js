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
/******/ 	return __webpack_require__(__webpack_require__.s = 104);
/******/ })
/************************************************************************/
/******/ ({

/***/ 1:
/***/ (function(module, exports) {

module.exports = require("path");

/***/ }),

/***/ 104:
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var _getIterator2 = __webpack_require__(2);

var _getIterator3 = _interopRequireDefault(_getIterator2);

var _regenerator = __webpack_require__(9);

var _regenerator2 = _interopRequireDefault(_regenerator);

var _asyncToGenerator2 = __webpack_require__(8);

var _asyncToGenerator3 = _interopRequireDefault(_asyncToGenerator2);

var _promise = __webpack_require__(5);

var _promise2 = _interopRequireDefault(_promise);

var _chromeRemoteInterface = __webpack_require__(51);

var cdp = _interopRequireWildcard(_chromeRemoteInterface);

var _fs = __webpack_require__(3);

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

/***/ }),

/***/ 2:
/***/ (function(module, exports) {

module.exports = require("babel-runtime/core-js/get-iterator");

/***/ }),

/***/ 3:
/***/ (function(module, exports) {

module.exports = require("fs");

/***/ }),

/***/ 5:
/***/ (function(module, exports) {

module.exports = require("babel-runtime/core-js/promise");

/***/ }),

/***/ 51:
/***/ (function(module, exports) {

module.exports = require("chrome-remote-interface");

/***/ }),

/***/ 8:
/***/ (function(module, exports) {

module.exports = require("babel-runtime/helpers/asyncToGenerator");

/***/ }),

/***/ 9:
/***/ (function(module, exports) {

module.exports = require("babel-runtime/regenerator");

/***/ })

/******/ });
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vd2VicGFjay9ib290c3RyYXAgMGFjMTM5Nzg3NWZkMjMyMjVlN2Q/MmZiOCoiLCJ3ZWJwYWNrOi8vL2V4dGVybmFsIFwicGF0aFwiPzViMmEqKiIsIndlYnBhY2s6Ly8vLi9zcmMvc2NyaXB0cy9zY3JlZW5zaG90LmpzIiwid2VicGFjazovLy9leHRlcm5hbCBcImJhYmVsLXJ1bnRpbWUvY29yZS1qcy9nZXQtaXRlcmF0b3JcIj81NWEzKioiLCJ3ZWJwYWNrOi8vL2V4dGVybmFsIFwiZnNcIj8yZTA5KiIsIndlYnBhY2s6Ly8vZXh0ZXJuYWwgXCJiYWJlbC1ydW50aW1lL2NvcmUtanMvcHJvbWlzZVwiP2U0NzkiLCJ3ZWJwYWNrOi8vL2V4dGVybmFsIFwiY2hyb21lLXJlbW90ZS1pbnRlcmZhY2VcIiIsIndlYnBhY2s6Ly8vZXh0ZXJuYWwgXCJiYWJlbC1ydW50aW1lL2hlbHBlcnMvYXN5bmNUb0dlbmVyYXRvclwiPzI5YzgiLCJ3ZWJwYWNrOi8vL2V4dGVybmFsIFwiYmFiZWwtcnVudGltZS9yZWdlbmVyYXRvclwiP2VkMjIiXSwibmFtZXMiOlsiY2RwIiwiZnMiLCJwYXRoIiwidmlld3BvcnRXaWR0aCIsInZpZXdwb3J0SGVpZ2h0Iiwic2xlZXAiLCJuIiwicmVzb2x2ZSIsInNldFRpbWVvdXQiLCJyYW5nZSIsIm0iLCJBcnJheSIsImZpbGwiLCJtYXAiLCJfIiwiaSIsImludGVybGVhdmVkVG9PYmplY3QiLCJhcnJheSIsImxlbmd0aCIsIkVycm9yIiwicGFyc2VkIiwiY2xhc3NOYW1lcyIsIkRPTSIsIm5vZGVfaWQiLCJnZXRBdHRyaWJ1dGVzIiwibm9kZUlkIiwiYXR0cmlidXRlcyIsImtsYXNzIiwic3BsaXQiLCJoYXNDbGFzcyIsImNsYXNzX25hbWUiLCJjbGFzc19uYW1lcyIsImluZGV4T2YiLCJxdWVyeVNlbGVjdG9yIiwic2VsZWN0b3IiLCJnZXREb2N1bWVudCIsImRvY3VtZW50Tm9kZUlkIiwicm9vdCIsImFwcElzTG9hZGluZyIsImh0bWxOb2RlSWQiLCJoZWFkbWFwTG9hZGVkIiwiYXR0cmlidXRlTW9kaWZpZWQiLCJzY3JlZW5zaG90IiwiUGFnZSIsIm91dF9wcmVmaXgiLCJsZWFndWUiLCJzb3VyY2UiLCJ1cmwiLCJuYXZpZ2F0ZSIsImRvbUNvbnRlbnRFdmVudEZpcmVkIiwiY2FwdHVyZVNjcmVlbnNob3QiLCJkYXRhIiwid3JpdGVGaWxlU3luYyIsImpvaW4iLCJfX2Rpcm5hbWUiLCJCdWZmZXIiLCJmcm9tIiwiZGVmYXVsdCIsImNsaWVudCIsIkVtdWxhdGlvbiIsImVuYWJsZSIsImRldmljZU1ldHJpY3MiLCJ3aWR0aCIsImhlaWdodCIsImRldmljZVNjYWxlRmFjdG9yIiwibW9iaWxlIiwiZml0V2luZG93Iiwic2V0RGV2aWNlTWV0cmljc092ZXJyaWRlIiwic2V0VmlzaWJsZVNpemUiLCJzb3VyY2VzIiwiY29uc29sZSIsImxvZyIsImVycm9yIiwiY2xvc2UiLCJvbiIsImVyciJdLCJtYXBwaW5ncyI6Ijs7QUFBQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOzs7QUFHQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQSxtREFBMkMsY0FBYzs7QUFFekQ7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxhQUFLO0FBQ0w7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQSxtQ0FBMkIsMEJBQTBCLEVBQUU7QUFDdkQseUNBQWlDLGVBQWU7QUFDaEQ7QUFDQTtBQUNBOztBQUVBO0FBQ0EsOERBQXNELCtEQUErRDs7QUFFckg7QUFDQTs7QUFFQTtBQUNBOzs7Ozs7OztBQ2hFQSxpQzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUNBQTs7SUFBWUEsRzs7QUFDWjs7SUFBWUMsRTs7QUFDWjs7SUFBWUMsSTs7Ozs7O0FBRVosSUFBTUMsZ0JBQWdCLElBQXRCO0FBQ0Es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dEJIO0FBQUE7QUFBQSxtQkF1QkFKLFdBQVdDLElBQVgsRUFBaUJyQixHQUFqQixFQUFzQixNQUF0QixFQUE4QixLQUE5QixFQUFxQ3dCLE1BQXJDLENBdkJBOztBQUFBO0FBd0JOd0Isb0JBQVFDLEdBQVIsQ0FBWSxlQUFaLEVBQTZCekIsTUFBN0I7O0FBeEJNO0FBQUE7QUFBQTtBQUFBOztBQUFBO0FBQUE7QUFBQTs7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBOztBQUFBO0FBQUE7QUFBQTs7QUFBQTtBQUFBO0FBQUE7O0FBQUE7QUFBQTs7QUFBQTtBQUFBO0FBQUE7QUFBQTs7QUFBQTs7QUFBQTtBQUFBOztBQUFBO0FBQUE7O0FBQUE7QUFBQTtBQUFBOztBQUFBO0FBQUE7QUFBQTs7QUEyQlJ3QixvQkFBUUUsS0FBUjs7QUEzQlE7QUFBQTtBQUFBLG1CQTZCSmQsT0FBT2UsS0FBUCxFQTdCSTs7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxHQUFaOztBQUFBO0FBQUE7QUFBQTtBQUFBLEtBOEJHQyxFQTlCSCxDQThCTSxPQTlCTixFQThCZSxVQUFDQyxHQUFELEVBQVM7QUFDdEJMLFVBQVFFLEtBQVIsQ0FBY0csR0FBZDtBQUNELENBaENELEU7Ozs7Ozs7QUN0RkEsK0Q7Ozs7Ozs7QUNBQSwrQjs7Ozs7OztBQ0FBLDBEOzs7Ozs7O0FDQUEsb0Q7Ozs7Ozs7QUNBQSxtRTs7Ozs7OztBQ0FBLHNEIiwiZmlsZSI6InNjcmVlbnNob3QuanMiLCJzb3VyY2VzQ29udGVudCI6WyIgXHQvLyBUaGUgbW9kdWxlIGNhY2hlXG4gXHR2YXIgaW5zdGFsbGVkTW9kdWxlcyA9IHt9O1xuXG4gXHQvLyBUaGUgcmVxdWlyZSBmdW5jdGlvblxuIFx0ZnVuY3Rpb24gX193ZWJwYWNrX3JlcXVpcmVfXyhtb2R1bGVJZCkge1xuXG4gXHRcdC8vIENoZWNrIGlmIG1vZHVsZSBpcyBpbiBjYWNoZVxuIFx0XHRpZihpbnN0YWxsZWRNb2R1bGVzW21vZHVsZUlkXSlcbiBcdFx0XHRyZXR1cm4gaW5zdGFsbGVkTW9kdWxlc1ttb2R1bGVJZF0uZXhwb3J0cztcblxuIFx0XHQvLyBDcmVhdGUgYSBuZXcgbW9kdWxlIChhbmQgcHV0IGl0IGludG8gdGhlIGNhY2hlKVxuIFx0XHR2YXIgbW9kdWxlID0gaW5zdGFsbGVkTW9kdWxlc1ttb2R1bGVJZF0gPSB7XG4gXHRcdFx0aTogbW9kdWxlSWQsXG4gXHRcdFx0bDogZmFsc2UsXG4gXHRcdFx0ZXhwb3J0czoge31cbiBcdFx0fTtcblxuIFx0XHQvLyBFeGVjdXRlIHRoZSBtb2R1bGUgZnVuY3Rpb25cbiBcdFx0bW9kdWxlc1ttb2R1bGVJZF0uY2FsbChtb2R1bGUuZXhwb3J0cywgbW9kdWxlLCBtb2R1bGUuZXhwb3J0cywgX193ZWJwYWNrX3JlcXVpcmVfXyk7XG5cbiBcdFx0Ly8gRmxhZyB0aGUgbW9kdWxlIGFzIGxvYWRlZFxuIFx0XHRtb2R1bGUubCA9IHRydWU7XG5cbiBcdFx0Ly8gUmV0dXJuIHRoZSBleHBvcnRzIG9mIHRoZSBtb2R1bGVcbiBcdFx0cmV0dXJuIG1vZHVsZS5leHBvcnRzO1xuIFx0fVxuXG5cbiBcdC8vIGV4cG9zZSB0aGUgbW9kdWxlcyBvYmplY3QgKF9fd2VicGFja19tb2R1bGVzX18pXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLm0gPSBtb2R1bGVzO1xuXG4gXHQvLyBleHBvc2UgdGhlIG1vZHVsZSBjYWNoZVxuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5jID0gaW5zdGFsbGVkTW9kdWxlcztcblxuIFx0Ly8gaWRlbnRpdHkgZnVuY3Rpb24gZm9yIGNhbGxpbmcgaGFybW9ueSBpbXBvcnRzIHdpdGggdGhlIGNvcnJlY3QgY29udGV4dFxuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5pID0gZnVuY3Rpb24odmFsdWUpIHsgcmV0dXJuIHZhbHVlOyB9O1xuXG4gXHQvLyBkZWZpbmUgZ2V0dGVyIGZ1bmN0aW9uIGZvciBoYXJtb255IGV4cG9ydHNcbiBcdF9fd2VicGFja19yZXF1aXJlX18uZCA9IGZ1bmN0aW9uKGV4cG9ydHMsIG5hbWUsIGdldHRlcikge1xuIFx0XHRpZighX193ZWJwYWNrX3JlcXVpcmVfXy5vKGV4cG9ydHMsIG5hbWUpKSB7XG4gXHRcdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIG5hbWUsIHtcbiBcdFx0XHRcdGNvbmZpZ3VyYWJsZTogZmFsc2UsXG4gXHRcdFx0XHRlbnVtZXJhYmxlOiB0cnVlLFxuIFx0XHRcdFx0Z2V0OiBnZXR0ZXJcbiBcdFx0XHR9KTtcbiBcdFx0fVxuIFx0fTtcblxuIFx0Ly8gZ2V0RGVmYXVsdEV4cG9ydCBmdW5jdGlvbiBmb3IgY29tcGF0aWJpbGl0eSB3aXRoIG5vbi1oYXJtb255IG1vZHVsZXNcbiBcdF9fd2VicGFja19yZXF1aXJlX18ubiA9IGZ1bmN0aW9uKG1vZHVsZSkge1xuIFx0XHR2YXIgZ2V0dGVyID0gbW9kdWxlICYmIG1vZHVsZS5fX2VzTW9kdWxlID9cbiBcdFx0XHRmdW5jdGlvbiBnZXREZWZhdWx0KCkgeyByZXR1cm4gbW9kdWxlWydkZWZhdWx0J107IH0gOlxuIFx0XHRcdGZ1bmN0aW9uIGdldE1vZHVsZUV4cG9ydHMoKSB7IHJldHVybiBtb2R1bGU7IH07XG4gXHRcdF9fd2VicGFja19yZXF1aXJlX18uZChnZXR0ZXIsICdhJywgZ2V0dGVyKTtcbiBcdFx0cmV0dXJuIGdldHRlcjtcbiBcdH07XG5cbiBcdC8vIE9iamVjdC5wcm90b3R5cGUuaGFzT3duUHJvcGVydHkuY2FsbFxuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5vID0gZnVuY3Rpb24ob2JqZWN0LCBwcm9wZXJ0eSkgeyByZXR1cm4gT2JqZWN0LnByb3RvdHlwZS5oYXNPd25Qcm9wZXJ0eS5jYWxsKG9iamVjdCwgcHJvcGVydHkpOyB9O1xuXG4gXHQvLyBfX3dlYnBhY2tfcHVibGljX3BhdGhfX1xuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5wID0gXCIuL1wiO1xuXG4gXHQvLyBMb2FkIGVudHJ5IG1vZHVsZSBhbmQgcmV0dXJuIGV4cG9ydHNcbiBcdHJldHVybiBfX3dlYnBhY2tfcmVxdWlyZV9fKF9fd2VicGFja19yZXF1aXJlX18ucyA9IDEwNCk7XG5cblxuXG4vLyBXRUJQQUNLIEZPT1RFUiAvL1xuLy8gd2VicGFjay9ib290c3RyYXAgMGFjMTM5Nzg3NWZkMjMyMjVlN2QiLCJtb2R1bGUuZXhwb3J0cyA9IHJlcXVpcmUoXCJwYXRoXCIpO1xuXG5cbi8vLy8vLy8vLy8vLy8vLy8vL1xuLy8gV0VCUEFDSyBGT09URVJcbi8vIGV4dGVybmFsIFwicGF0aFwiXG4vLyBtb2R1bGUgaWQgPSAxXG4vLyBtb2R1bGUgY2h1bmtzID0gMCAxIDIgMyA0IiwiaW1wb3J0ICogYXMgY2RwIGZyb20gJ2Nocm9tZS1yZW1vdGUtaW50ZXJmYWNlJztcbmltcG9ydCAqIGFzIGZzIGZyb20gJ2ZzJztcbmltcG9ydCAqIGFzIHBhdGggZnJvbSAncGF0aCc7XG5cbmNvbnN0IHZpZXdwb3J0V2lkdGggPSAxOTIwO1xuY29uc3Qgdmlld3BvcnRIZWlnaHQgPSAxMDgwO1xuXG5jb25zdCBzbGVlcCA9IChuKSA9PiBuZXcgUHJvbWlzZSgocmVzb2x2ZSkgPT4gc2V0VGltZW91dCgoKSA9PiByZXNvbHZlKCksIG4pKTtcblxuY29uc3QgcmFuZ2UgPSAobiwgbSkgPT4gQXJyYXkobSAtIG4pLmZpbGwoMCkubWFwKChfLCBpKSA9PiBuICsgaSk7XG5cbmNvbnN0IGludGVybGVhdmVkVG9PYmplY3QgPSAoYXJyYXkpID0+IHtcbiAgaWYgKGFycmF5Lmxlbmd0aCAlIDIpIHtcbiAgICB0aHJvdyBuZXcgRXJyb3IoJ29ubHkgaW50ZXJsZWF2ZWQgd2hlbiB8YXJyYXl8ICUgMiA9PSAwJyk7XG4gIH1cblxuICBjb25zdCBwYXJzZWQgPSB7fTtcbiAgZm9yIChsZXQgaSA9IDA7IGkgPCBhcnJheS5sZW5ndGg7IGkgKz0gMikge1xuICAgIHBhcnNlZFthcnJheVtpXV0gPSBhcnJheVtpKzFdO1xuICB9XG5cbiAgcmV0dXJuIHBhcnNlZDtcbn07XG5cbmNvbnN0IGNsYXNzTmFtZXMgPSBhc3luYyAoRE9NLCBub2RlX2lkKSA9PiB7XG4gIGNvbnN0IGF0dHJpYnV0ZXMgPSBpbnRlcmxlYXZlZFRvT2JqZWN0KFxuICAgIChhd2FpdCBET00uZ2V0QXR0cmlidXRlcyh7IG5vZGVJZDogbm9kZV9pZCB9KSkuYXR0cmlidXRlc1xuICApO1xuICBjb25zdCBrbGFzcyA9IGF0dHJpYnV0ZXNbJ2NsYXNzJ107XG5cbiAgaWYgKHR5cGVvZiBrbGFzcyA9PT0gJ3N0cmluZycpIHtcbiAgICByZXR1cm4ga2xhc3Muc3BsaXQoJyAnKTtcbiAgfSBlbHNlIHtcbiAgICByZXR1cm4gW107XG4gIH1cbn07XG5cbmNvbnN0IGhhc0NsYXNzID0gYXN5bmMgKERPTSwgbm9kZV9pZCwgY2xhc3NfbmFtZSkgPT4ge1xuICBjb25zdCBjbGFzc19uYW1lcyA9IGF3YWl0IGNsYXNzTmFtZXMoRE9NLCBub2RlX2lkKTtcbiAgcmV0dXJuIGNsYXNzX25hbWVzLmluZGV4T2YoY2xhc3NfbmFtZSkgIT09IC0xO1xufTtcblxuY29uc3QgcXVlcnlTZWxlY3RvciA9IGFzeW5jIChET00sIHNlbGVjdG9yKSA9PiB7XG4gIGNvbnN0IHsgcm9vdDogeyBub2RlSWQ6IGRvY3VtZW50Tm9kZUlkIH0gfSA9IGF3YWl0IERPTS5nZXREb2N1bWVudCgpO1xuICByZXR1cm4gYXdhaXQgRE9NLnF1ZXJ5U2VsZWN0b3Ioe1xuICAgIHNlbGVjdG9yLFxuICAgIG5vZGVJZDogZG9jdW1lbnROb2RlSWQsXG4gIH0pO1xufTtcblxuY29uc3QgYXBwSXNMb2FkaW5nID0gYXN5bmMgKERPTSkgPT4ge1xuICBjb25zdCB7IG5vZGVJZDogaHRtbE5vZGVJZCB9ID0gYXdhaXQgcXVlcnlTZWxlY3RvcihET00sICdodG1sJyk7XG5cbiAgcmV0dXJuIGF3YWl0IGhhc0NsYXNzKERPTSwgaHRtbE5vZGVJZCwgJ25wcm9ncmVzcy1idXN5Jyk7XG59O1xuXG5jb25zdCBoZWFkbWFwTG9hZGVkID0gKERPTSkgPT4gbmV3IFByb21pc2UoYXN5bmMgKHJlc29sdmUpID0+IHtcbiAgd2hpbGUgKGF3YWl0IGFwcElzTG9hZGluZyhET00pKSB7XG4gICAgLy8gYXdhaXQgc2xlZXAoMjApO1xuICAgIGF3YWl0IERPTS5hdHRyaWJ1dGVNb2RpZmllZCgpO1xuICB9XG4gIHJlc29sdmUoKTtcbn0pO1xuXG5jb25zdCBzY3JlZW5zaG90ID0gYXN5bmMgKFxuICBQYWdlLCBET00sIG91dF9wcmVmaXgsIGxlYWd1ZSA9ICdhbGwnLCBzb3VyY2UgPSAnMCdcbikgPT4ge1xuICBjb25zdCB1cmwgPSBgaHR0cDovL2xvY2FsaG9zdDozMDAwL2xlYWd1ZS8ke2xlYWd1ZX0vP2NsZWFuJnNvdXJjZT0ke3NvdXJjZX1gO1xuXG4gIGF3YWl0IFBhZ2UubmF2aWdhdGUoeyB1cmwgfSk7XG4gIGF3YWl0IFBhZ2UuZG9tQ29udGVudEV2ZW50RmlyZWQoKTtcblxuICBhd2FpdCBzbGVlcCgyMCk7IC8vIHdhaXRmb3IgaW5pdCBhY3Rpb25cbiAgYXdhaXQgaGVhZG1hcExvYWRlZChET00pO1xuXG4gIGNvbnN0IHsgZGF0YSB9ID0gYXdhaXQgUGFnZS5jYXB0dXJlU2NyZWVuc2hvdCgpO1xuICBmcy53cml0ZUZpbGVTeW5jKFxuICAgIHBhdGguam9pbihcbiAgICAgIF9fZGlybmFtZSxcbiAgICAgICdzY3JlZW5zaG90JyxcbiAgICAgIFtvdXRfcHJlZml4LCBzb3VyY2UsIGxlYWd1ZV0uam9pbignLScpICsgJy5wbmcnXG4gICAgKSxcbiAgICBCdWZmZXIuZnJvbShkYXRhLCAnYmFzZTY0JylcbiAgKTtcbn07XG5cbmNkcC5kZWZhdWx0KGFzeW5jIChjbGllbnQpID0+IHtcbiAgY29uc3QgeyBFbXVsYXRpb24sIFBhZ2UsIERPTSB9ID0gY2xpZW50O1xuICB0cnkge1xuICAgIGF3YWl0IFBhZ2UuZW5hYmxlKCk7XG4gICAgYXdhaXQgRE9NLmVuYWJsZSgpO1xuXG4gICAgLy8gU2V0IHVwIHZpZXdwb3J0IHJlc29sdXRpb24sIGV0Yy5cbiAgICBjb25zdCBkZXZpY2VNZXRyaWNzID0ge1xuICAgICAgd2lkdGg6IHZpZXdwb3J0V2lkdGgsXG4gICAgICBoZWlnaHQ6IHZpZXdwb3J0SGVpZ2h0LFxuICAgICAgZGV2aWNlU2NhbGVGYWN0b3I6IDAsXG4gICAgICBtb2JpbGU6IGZhbHNlLFxuICAgICAgZml0V2luZG93OiBmYWxzZSxcbiAgICB9O1xuICAgIGF3YWl0IEVtdWxhdGlvbi5zZXREZXZpY2VNZXRyaWNzT3ZlcnJpZGUoZGV2aWNlTWV0cmljcyk7XG4gICAgYXdhaXQgRW11bGF0aW9uLnNldFZpc2libGVTaXplKHtcbiAgICAgIHdpZHRoOiB2aWV3cG9ydFdpZHRoLFxuICAgICAgaGVpZ2h0OiB2aWV3cG9ydEhlaWdodCxcbiAgICB9KTtcblxuICAgIGNvbnN0IHNvdXJjZXMgPSByYW5nZSgwLCAzKTtcblxuICAgIGZvciAoY29uc3Qgc291cmNlIG9mIHNvdXJjZXMpIHtcbiAgICAgIGF3YWl0IHNjcmVlbnNob3QoUGFnZSwgRE9NLCAndGVzdCcsICdhbGwnLCBzb3VyY2UpO1xuICAgICAgY29uc29sZS5sb2coJ3Nob3QgdGFrZW4gb2YnLCBzb3VyY2UpO1xuICAgIH1cbiAgfSBjYXRjaCAoZXJyKSB7XG4gICAgY29uc29sZS5lcnJvcihlcnIpO1xuICB9XG4gIGF3YWl0IGNsaWVudC5jbG9zZSgpO1xufSkub24oJ2Vycm9yJywgKGVycikgPT4ge1xuICBjb25zb2xlLmVycm9yKGVycik7XG59KTtcblxuXG5cbi8vIFdFQlBBQ0sgRk9PVEVSIC8vXG4vLyAuL3NyYy9zY3JpcHRzL3NjcmVlbnNob3QuanMiLCJtb2R1bGUuZXhwb3J0cyA9IHJlcXVpcmUoXCJiYWJlbC1ydW50aW1lL2NvcmUtanMvZ2V0LWl0ZXJhdG9yXCIpO1xuXG5cbi8vLy8vLy8vLy8vLy8vLy8vL1xuLy8gV0VCUEFDSyBGT09URVJcbi8vIGV4dGVybmFsIFwiYmFiZWwtcnVudGltZS9jb3JlLWpzL2dldC1pdGVyYXRvclwiXG4vLyBtb2R1bGUgaWQgPSAyXG4vLyBtb2R1bGUgY2h1bmtzID0gMCAxIDIgMyIsIm1vZHVsZS5leHBvcnRzID0gcmVxdWlyZShcImZzXCIpO1xuXG5cbi8vLy8vLy8vLy8vLy8vLy8vL1xuLy8gV0VCUEFDSyBGT09URVJcbi8vIGV4dGVybmFsIFwiZnNcIlxuLy8gbW9kdWxlIGlkID0gM1xuLy8gbW9kdWxlIGNodW5rcyA9IDEgMiAzIDQiLCJtb2R1bGUuZXhwb3J0cyA9IHJlcXVpcmUoXCJiYWJlbC1ydW50aW1lL2NvcmUtanMvcHJvbWlzZVwiKTtcblxuXG4vLy8vLy8vLy8vLy8vLy8vLy9cbi8vIFdFQlBBQ0sgRk9PVEVSXG4vLyBleHRlcm5hbCBcImJhYmVsLXJ1bnRpbWUvY29yZS1qcy9wcm9taXNlXCJcbi8vIG1vZHVsZSBpZCA9IDVcbi8vIG1vZHVsZSBjaHVua3MgPSAwIDMiLCJtb2R1bGUuZXhwb3J0cyA9IHJlcXVpcmUoXCJjaHJvbWUtcmVtb3RlLWludGVyZmFjZVwiKTtcblxuXG4vLy8vLy8vLy8vLy8vLy8vLy9cbi8vIFdFQlBBQ0sgRk9PVEVSXG4vLyBleHRlcm5hbCBcImNocm9tZS1yZW1vdGUtaW50ZXJmYWNlXCJcbi8vIG1vZHVsZSBpZCA9IDUxXG4vLyBtb2R1bGUgY2h1bmtzID0gMyIsIm1vZHVsZS5leHBvcnRzID0gcmVxdWlyZShcImJhYmVsLXJ1bnRpbWUvaGVscGVycy9hc3luY1RvR2VuZXJhdG9yXCIpO1xuXG5cbi8vLy8vLy8vLy8vLy8vLy8vL1xuLy8gV0VCUEFDSyBGT09URVJcbi8vIGV4dGVybmFsIFwiYmFiZWwtcnVudGltZS9oZWxwZXJzL2FzeW5jVG9HZW5lcmF0b3JcIlxuLy8gbW9kdWxlIGlkID0gOFxuLy8gbW9kdWxlIGNodW5rcyA9IDAgMyIsIm1vZHVsZS5leHBvcnRzID0gcmVxdWlyZShcImJhYmVsLXJ1bnRpbWUvcmVnZW5lcmF0b3JcIik7XG5cblxuLy8vLy8vLy8vLy8vLy8vLy8vXG4vLyBXRUJQQUNLIEZPT1RFUlxuLy8gZXh0ZXJuYWwgXCJiYWJlbC1ydW50aW1lL3JlZ2VuZXJhdG9yXCJcbi8vIG1vZHVsZSBpZCA9IDlcbi8vIG1vZHVsZSBjaHVua3MgPSAwIDMiXSwic291cmNlUm9vdCI6IiJ9