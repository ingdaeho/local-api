/*
 * ATTENTION: An "eval-source-map" devtool has been used.
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file with attached SourceMaps in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
self["webpackHotUpdate_N_E"]("pages/index",{

/***/ "./components/MsgLIst.js":
/*!*******************************!*\
  !*** ./components/MsgLIst.js ***!
  \*******************************/
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"../node_modules/react/jsx-dev-runtime.js\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _Users_imdaeho_repos_local_api_node_modules_babel_runtime_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../node_modules/@babel/runtime/helpers/esm/defineProperty */ \"../node_modules/@babel/runtime/helpers/esm/defineProperty.js\");\n/* harmony import */ var _Users_imdaeho_repos_local_api_node_modules_babel_runtime_helpers_esm_toConsumableArray__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../node_modules/@babel/runtime/helpers/esm/toConsumableArray */ \"../node_modules/@babel/runtime/helpers/esm/toConsumableArray.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! react */ \"../node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_3__);\n/* harmony import */ var _MsgItem__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./MsgItem */ \"./components/MsgItem.js\");\n/* harmony import */ var _MsgInput__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./MsgInput */ \"./components/MsgInput.js\");\n/* module decorator */ module = __webpack_require__.hmd(module);\n\n\n\n\n\nvar _jsxFileName = \"/Users/imdaeho/repos/local-api/client/components/MsgLIst.js\",\n    _this = undefined,\n    _s = $RefreshSig$();\n\nfunction ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); keys.push.apply(keys, symbols); } return keys; }\n\nfunction _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(Object(source), true).forEach(function (key) { (0,_Users_imdaeho_repos_local_api_node_modules_babel_runtime_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_1__.default)(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }\n\n\n\n\nvar UserIds = [\"roy\", \"jay\"];\n\nvar getRandomUserId = function getRandomUserId() {\n  return UserIds[Math.round(Math.random())];\n};\n\nvar originalMsgs = Array(50).fill(0).map(function (_, i) {\n  return {\n    id: 50 - i,\n    userId: getRandomUserId(),\n    timestamp: 1234567890123 + (50 - i) + 1000 + 60,\n    text: \"\".concat(50 - i, \" mock text\")\n  };\n});\n\nvar MsgList = function MsgList() {\n  _s();\n\n  var _useState = (0,react__WEBPACK_IMPORTED_MODULE_3__.useState)(originalMsgs),\n      msgs = _useState[0],\n      setMsgs = _useState[1];\n\n  var onCreate = function onCreate(text) {\n    var newMsg = {\n      id: msgs.length,\n      userId: getRandomUserId(),\n      timestamp: Date.now(),\n      text: \"\".concat(msgs.length, \" \").concat(text)\n    };\n    setMsgs(function (msgs) {\n      return [newMsg].concat((0,_Users_imdaeho_repos_local_api_node_modules_babel_runtime_helpers_esm_toConsumableArray__WEBPACK_IMPORTED_MODULE_2__.default)(msgs));\n    });\n    msgs.unshift(newMsg);\n  };\n\n  return /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.Fragment, {\n    children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_MsgInput__WEBPACK_IMPORTED_MODULE_5__.default, {\n      mutate: onCreate\n    }, void 0, false, {\n      fileName: _jsxFileName,\n      lineNumber: 31,\n      columnNumber: 7\n    }, _this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"ul\", {\n      className: \"messages\",\n      children: msgs.map(function (x) {\n        return /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_MsgItem__WEBPACK_IMPORTED_MODULE_4__.default, _objectSpread({}, x), x.id, false, {\n          fileName: _jsxFileName,\n          lineNumber: 34,\n          columnNumber: 11\n        }, _this);\n      })\n    }, void 0, false, {\n      fileName: _jsxFileName,\n      lineNumber: 32,\n      columnNumber: 7\n    }, _this)]\n  }, void 0, true);\n};\n\n_s(MsgList, \"0rHCd0+xzNh1d+KPpUdLMZZ9PRQ=\");\n\n_c = MsgList;\n/* harmony default export */ __webpack_exports__[\"default\"] = (MsgList);\n\nvar _c;\n\n$RefreshReg$(_c, \"MsgList\");\n\n;\n    var _a, _b;\n    // Legacy CSS implementations will `eval` browser code in a Node.js context\n    // to extract CSS. For backwards compatibility, we need to check we're in a\n    // browser context before continuing.\n    if (typeof self !== 'undefined' &&\n        // AMP / No-JS mode does not inject these helpers:\n        '$RefreshHelpers$' in self) {\n        var currentExports = module.__proto__.exports;\n        var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n        // This cannot happen in MainTemplate because the exports mismatch between\n        // templating and execution.\n        self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n        // A module can be accepted automatically based on its exports, e.g. when\n        // it is a Refresh Boundary.\n        if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n            // Save the previous exports on update so we can compare the boundary\n            // signatures.\n            module.hot.dispose(function (data) {\n                data.prevExports = currentExports;\n            });\n            // Unconditionally accept an update to this module, we'll check if it's\n            // still a Refresh Boundary later.\n            module.hot.accept();\n            // This field is set when the previous version of this module was a\n            // Refresh Boundary, letting us know we need to check for invalidation or\n            // enqueue an update.\n            if (prevExports !== null) {\n                // A boundary can become ineligible if its exports are incompatible\n                // with the previous exports.\n                //\n                // For example, if you add/remove/change exports, we'll want to\n                // re-execute the importing modules, and force those components to\n                // re-render. Similarly, if you convert a class component to a\n                // function, we want to invalidate the boundary.\n                if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                    module.hot.invalidate();\n                }\n                else {\n                    self.$RefreshHelpers$.scheduleUpdate();\n                }\n            }\n        }\n        else {\n            // Since we just executed the code for the module, it's possible that the\n            // new exports made it ineligible for being a boundary.\n            // We only care about the case when we were _previously_ a boundary,\n            // because we already accepted this update (accidental side effect).\n            var isNoLongerABoundary = prevExports !== null;\n            if (isNoLongerABoundary) {\n                module.hot.invalidate();\n            }\n        }\n    }\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vY29tcG9uZW50cy9Nc2dMSXN0LmpzP2NiNmEiXSwibmFtZXMiOlsiVXNlcklkcyIsImdldFJhbmRvbVVzZXJJZCIsIk1hdGgiLCJyb3VuZCIsInJhbmRvbSIsIm9yaWdpbmFsTXNncyIsIkFycmF5IiwiZmlsbCIsIm1hcCIsIl8iLCJpIiwiaWQiLCJ1c2VySWQiLCJ0aW1lc3RhbXAiLCJ0ZXh0IiwiTXNnTGlzdCIsInVzZVN0YXRlIiwibXNncyIsInNldE1zZ3MiLCJvbkNyZWF0ZSIsIm5ld01zZyIsImxlbmd0aCIsIkRhdGUiLCJub3ciLCJ1bnNoaWZ0IiwieCJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFBQTtBQUNBO0FBQ0E7QUFFQSxJQUFNQSxPQUFPLEdBQUcsQ0FBQyxLQUFELEVBQVEsS0FBUixDQUFoQjs7QUFDQSxJQUFNQyxlQUFlLEdBQUcsU0FBbEJBLGVBQWtCO0FBQUEsU0FBTUQsT0FBTyxDQUFDRSxJQUFJLENBQUNDLEtBQUwsQ0FBV0QsSUFBSSxDQUFDRSxNQUFMLEVBQVgsQ0FBRCxDQUFiO0FBQUEsQ0FBeEI7O0FBRUEsSUFBTUMsWUFBWSxHQUFHQyxLQUFLLENBQUMsRUFBRCxDQUFMLENBQ2xCQyxJQURrQixDQUNiLENBRGEsRUFFbEJDLEdBRmtCLENBRWQsVUFBQ0MsQ0FBRCxFQUFJQyxDQUFKO0FBQUEsU0FBVztBQUNkQyxNQUFFLEVBQUUsS0FBS0QsQ0FESztBQUVkRSxVQUFNLEVBQUVYLGVBQWUsRUFGVDtBQUdkWSxhQUFTLEVBQUUsaUJBQWlCLEtBQUtILENBQXRCLElBQTJCLElBQTNCLEdBQWtDLEVBSC9CO0FBSWRJLFFBQUksWUFBSyxLQUFLSixDQUFWO0FBSlUsR0FBWDtBQUFBLENBRmMsQ0FBckI7O0FBU0EsSUFBTUssT0FBTyxHQUFHLFNBQVZBLE9BQVUsR0FBTTtBQUFBOztBQUFBLGtCQUNJQywrQ0FBUSxDQUFDWCxZQUFELENBRFo7QUFBQSxNQUNiWSxJQURhO0FBQUEsTUFDUEMsT0FETzs7QUFFcEIsTUFBTUMsUUFBUSxHQUFHLFNBQVhBLFFBQVcsQ0FBQ0wsSUFBRCxFQUFVO0FBQ3pCLFFBQU1NLE1BQU0sR0FBRztBQUNiVCxRQUFFLEVBQUVNLElBQUksQ0FBQ0ksTUFESTtBQUViVCxZQUFNLEVBQUVYLGVBQWUsRUFGVjtBQUdiWSxlQUFTLEVBQUVTLElBQUksQ0FBQ0MsR0FBTCxFQUhFO0FBSWJULFVBQUksWUFBS0csSUFBSSxDQUFDSSxNQUFWLGNBQW9CUCxJQUFwQjtBQUpTLEtBQWY7QUFNQUksV0FBTyxDQUFDLFVBQUNELElBQUQ7QUFBQSxjQUFXRyxNQUFYLDBJQUFzQkgsSUFBdEI7QUFBQSxLQUFELENBQVA7QUFDQUEsUUFBSSxDQUFDTyxPQUFMLENBQWFKLE1BQWI7QUFDRCxHQVREOztBQVVBLHNCQUNFO0FBQUEsNEJBQ0UsOERBQUMsOENBQUQ7QUFBVSxZQUFNLEVBQUVEO0FBQWxCO0FBQUE7QUFBQTtBQUFBO0FBQUEsYUFERixlQUVFO0FBQUksZUFBUyxFQUFDLFVBQWQ7QUFBQSxnQkFDR0YsSUFBSSxDQUFDVCxHQUFMLENBQVMsVUFBQ2lCLENBQUQ7QUFBQSw0QkFDUiw4REFBQyw2Q0FBRCxvQkFBd0JBLENBQXhCLEdBQWNBLENBQUMsQ0FBQ2QsRUFBaEI7QUFBQTtBQUFBO0FBQUE7QUFBQSxpQkFEUTtBQUFBLE9BQVQ7QUFESDtBQUFBO0FBQUE7QUFBQTtBQUFBLGFBRkY7QUFBQSxrQkFERjtBQVVELENBdEJEOztHQUFNSSxPOztLQUFBQSxPO0FBd0JOLCtEQUFlQSxPQUFmIiwiZmlsZSI6Ii4vY29tcG9uZW50cy9Nc2dMSXN0LmpzLmpzIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgdXNlU3RhdGUgfSBmcm9tIFwicmVhY3RcIjtcbmltcG9ydCBNc2dJdGVtIGZyb20gXCIuL01zZ0l0ZW1cIjtcbmltcG9ydCBNc2dJbnB1dCBmcm9tIFwiLi9Nc2dJbnB1dFwiO1xuXG5jb25zdCBVc2VySWRzID0gW1wicm95XCIsIFwiamF5XCJdO1xuY29uc3QgZ2V0UmFuZG9tVXNlcklkID0gKCkgPT4gVXNlcklkc1tNYXRoLnJvdW5kKE1hdGgucmFuZG9tKCkpXTtcblxuY29uc3Qgb3JpZ2luYWxNc2dzID0gQXJyYXkoNTApXG4gIC5maWxsKDApXG4gIC5tYXAoKF8sIGkpID0+ICh7XG4gICAgaWQ6IDUwIC0gaSxcbiAgICB1c2VySWQ6IGdldFJhbmRvbVVzZXJJZCgpLFxuICAgIHRpbWVzdGFtcDogMTIzNDU2Nzg5MDEyMyArICg1MCAtIGkpICsgMTAwMCArIDYwLFxuICAgIHRleHQ6IGAkezUwIC0gaX0gbW9jayB0ZXh0YCxcbiAgfSkpO1xuXG5jb25zdCBNc2dMaXN0ID0gKCkgPT4ge1xuICBjb25zdCBbbXNncywgc2V0TXNnc10gPSB1c2VTdGF0ZShvcmlnaW5hbE1zZ3MpO1xuICBjb25zdCBvbkNyZWF0ZSA9ICh0ZXh0KSA9PiB7XG4gICAgY29uc3QgbmV3TXNnID0ge1xuICAgICAgaWQ6IG1zZ3MubGVuZ3RoLFxuICAgICAgdXNlcklkOiBnZXRSYW5kb21Vc2VySWQoKSxcbiAgICAgIHRpbWVzdGFtcDogRGF0ZS5ub3coKSxcbiAgICAgIHRleHQ6IGAke21zZ3MubGVuZ3RofSAke3RleHR9YCxcbiAgICB9O1xuICAgIHNldE1zZ3MoKG1zZ3MpID0+IFtuZXdNc2csIC4uLm1zZ3NdKTtcbiAgICBtc2dzLnVuc2hpZnQobmV3TXNnKTtcbiAgfTtcbiAgcmV0dXJuIChcbiAgICA8PlxuICAgICAgPE1zZ0lucHV0IG11dGF0ZT17b25DcmVhdGV9IC8+XG4gICAgICA8dWwgY2xhc3NOYW1lPVwibWVzc2FnZXNcIj5cbiAgICAgICAge21zZ3MubWFwKCh4KSA9PiAoXG4gICAgICAgICAgPE1zZ0l0ZW0ga2V5PXt4LmlkfSB7Li4ueH0gLz5cbiAgICAgICAgKSl9XG4gICAgICA8L3VsPlxuICAgIDwvPlxuICApO1xufTtcblxuZXhwb3J0IGRlZmF1bHQgTXNnTGlzdDtcbiJdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///./components/MsgLIst.js\n");

/***/ })

});