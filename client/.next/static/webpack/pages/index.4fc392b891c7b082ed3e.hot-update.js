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
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"../node_modules/react/jsx-dev-runtime.js\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _Users_imdaeho_repos_local_api_node_modules_babel_runtime_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../node_modules/@babel/runtime/helpers/esm/defineProperty */ \"../node_modules/@babel/runtime/helpers/esm/defineProperty.js\");\n/* harmony import */ var _Users_imdaeho_repos_local_api_node_modules_babel_runtime_helpers_esm_toConsumableArray__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../node_modules/@babel/runtime/helpers/esm/toConsumableArray */ \"../node_modules/@babel/runtime/helpers/esm/toConsumableArray.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! react */ \"../node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_3__);\n/* harmony import */ var _MsgItem__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./MsgItem */ \"./components/MsgItem.js\");\n/* harmony import */ var _MsgInput__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./MsgInput */ \"./components/MsgInput.js\");\n/* module decorator */ module = __webpack_require__.hmd(module);\n\n\n\n\n\nvar _jsxFileName = \"/Users/imdaeho/repos/local-api/client/components/MsgLIst.js\",\n    _this = undefined,\n    _s = $RefreshSig$();\n\nfunction ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); keys.push.apply(keys, symbols); } return keys; }\n\nfunction _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(Object(source), true).forEach(function (key) { (0,_Users_imdaeho_repos_local_api_node_modules_babel_runtime_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_1__.default)(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }\n\n\n\n\nvar UserIds = [\"roy\", \"jay\"];\n\nvar getRandomUserId = function getRandomUserId() {\n  return UserIds[Math.round(Math.random())];\n};\n\nvar originalMsgs = Array(50).fill(0).map(function (_, i) {\n  return {\n    id: 50 - i,\n    userId: getRandomUserId(),\n    timestamp: 1234567890123 + (50 - i) + 1000 + 60,\n    text: \"\".concat(50 - i, \" mock text\")\n  };\n});\n\nvar MsgList = function MsgList() {\n  _s();\n\n  var _useState = (0,react__WEBPACK_IMPORTED_MODULE_3__.useState)(originalMsgs),\n      msgs = _useState[0],\n      setMsgs = _useState[1];\n\n  var _useState2 = (0,react__WEBPACK_IMPORTED_MODULE_3__.useState)(null),\n      editingId = _useState2[0],\n      setEditingId = _useState2[1];\n\n  var onCreate = function onCreate(text) {\n    var newMsg = {\n      id: msgs.length + 1,\n      userId: getRandomUserId(),\n      timestamp: Date.now(),\n      text: \"\".concat(msgs.length + 1, \" \").concat(text)\n    };\n    setMsgs(function (msgs) {\n      return [newMsg].concat((0,_Users_imdaeho_repos_local_api_node_modules_babel_runtime_helpers_esm_toConsumableArray__WEBPACK_IMPORTED_MODULE_2__.default)(msgs));\n    });\n  };\n\n  var onUpdate = function onUpdate(text, id) {\n    setMsgs(function (msgs) {\n      var targetIndex = msgs.findIndex(function (msgs) {\n        return msgs.id === id;\n      });\n      if (targetIndex < 0) return msgs;\n\n      var newMsgs = (0,_Users_imdaeho_repos_local_api_node_modules_babel_runtime_helpers_esm_toConsumableArray__WEBPACK_IMPORTED_MODULE_2__.default)(msgs);\n\n      newMsgs.splice(targetIndex, 1, _objectSpread(_objectSpread({}, msgs[targetIndex]), {}, {\n        text: text\n      }));\n      return newMsgs;\n    });\n  };\n\n  var startEdit = function startEdit(id) {\n    return setEditingId(id);\n  };\n\n  return /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.Fragment, {\n    children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_MsgInput__WEBPACK_IMPORTED_MODULE_5__.default, {\n      mutate: onCreate\n    }, void 0, false, {\n      fileName: _jsxFileName,\n      lineNumber: 47,\n      columnNumber: 7\n    }, _this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"ul\", {\n      className: \"messages\",\n      children: msgs.map(function (x) {\n        return /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_MsgItem__WEBPACK_IMPORTED_MODULE_4__.default, _objectSpread(_objectSpread({}, x), {}, {\n          onUpdate: onUpdate,\n          startEdit: startEdit\n        }), x.id, false, {\n          fileName: _jsxFileName,\n          lineNumber: 50,\n          columnNumber: 11\n        }, _this);\n      })\n    }, void 0, false, {\n      fileName: _jsxFileName,\n      lineNumber: 48,\n      columnNumber: 7\n    }, _this)]\n  }, void 0, true);\n};\n\n_s(MsgList, \"01fMYNZrB/VzC7UxNBW1xkTAcyg=\");\n\n_c = MsgList;\n/* harmony default export */ __webpack_exports__[\"default\"] = (MsgList);\n\nvar _c;\n\n$RefreshReg$(_c, \"MsgList\");\n\n;\n    var _a, _b;\n    // Legacy CSS implementations will `eval` browser code in a Node.js context\n    // to extract CSS. For backwards compatibility, we need to check we're in a\n    // browser context before continuing.\n    if (typeof self !== 'undefined' &&\n        // AMP / No-JS mode does not inject these helpers:\n        '$RefreshHelpers$' in self) {\n        var currentExports = module.__proto__.exports;\n        var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n        // This cannot happen in MainTemplate because the exports mismatch between\n        // templating and execution.\n        self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n        // A module can be accepted automatically based on its exports, e.g. when\n        // it is a Refresh Boundary.\n        if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n            // Save the previous exports on update so we can compare the boundary\n            // signatures.\n            module.hot.dispose(function (data) {\n                data.prevExports = currentExports;\n            });\n            // Unconditionally accept an update to this module, we'll check if it's\n            // still a Refresh Boundary later.\n            module.hot.accept();\n            // This field is set when the previous version of this module was a\n            // Refresh Boundary, letting us know we need to check for invalidation or\n            // enqueue an update.\n            if (prevExports !== null) {\n                // A boundary can become ineligible if its exports are incompatible\n                // with the previous exports.\n                //\n                // For example, if you add/remove/change exports, we'll want to\n                // re-execute the importing modules, and force those components to\n                // re-render. Similarly, if you convert a class component to a\n                // function, we want to invalidate the boundary.\n                if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                    module.hot.invalidate();\n                }\n                else {\n                    self.$RefreshHelpers$.scheduleUpdate();\n                }\n            }\n        }\n        else {\n            // Since we just executed the code for the module, it's possible that the\n            // new exports made it ineligible for being a boundary.\n            // We only care about the case when we were _previously_ a boundary,\n            // because we already accepted this update (accidental side effect).\n            var isNoLongerABoundary = prevExports !== null;\n            if (isNoLongerABoundary) {\n                module.hot.invalidate();\n            }\n        }\n    }\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vY29tcG9uZW50cy9Nc2dMSXN0LmpzP2NiNmEiXSwibmFtZXMiOlsiVXNlcklkcyIsImdldFJhbmRvbVVzZXJJZCIsIk1hdGgiLCJyb3VuZCIsInJhbmRvbSIsIm9yaWdpbmFsTXNncyIsIkFycmF5IiwiZmlsbCIsIm1hcCIsIl8iLCJpIiwiaWQiLCJ1c2VySWQiLCJ0aW1lc3RhbXAiLCJ0ZXh0IiwiTXNnTGlzdCIsInVzZVN0YXRlIiwibXNncyIsInNldE1zZ3MiLCJlZGl0aW5nSWQiLCJzZXRFZGl0aW5nSWQiLCJvbkNyZWF0ZSIsIm5ld01zZyIsImxlbmd0aCIsIkRhdGUiLCJub3ciLCJvblVwZGF0ZSIsInRhcmdldEluZGV4IiwiZmluZEluZGV4IiwibmV3TXNncyIsInNwbGljZSIsInN0YXJ0RWRpdCIsIngiXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBQUE7QUFDQTtBQUNBO0FBRUEsSUFBTUEsT0FBTyxHQUFHLENBQUMsS0FBRCxFQUFRLEtBQVIsQ0FBaEI7O0FBQ0EsSUFBTUMsZUFBZSxHQUFHLFNBQWxCQSxlQUFrQjtBQUFBLFNBQU1ELE9BQU8sQ0FBQ0UsSUFBSSxDQUFDQyxLQUFMLENBQVdELElBQUksQ0FBQ0UsTUFBTCxFQUFYLENBQUQsQ0FBYjtBQUFBLENBQXhCOztBQUVBLElBQU1DLFlBQVksR0FBR0MsS0FBSyxDQUFDLEVBQUQsQ0FBTCxDQUNsQkMsSUFEa0IsQ0FDYixDQURhLEVBRWxCQyxHQUZrQixDQUVkLFVBQUNDLENBQUQsRUFBSUMsQ0FBSjtBQUFBLFNBQVc7QUFDZEMsTUFBRSxFQUFFLEtBQUtELENBREs7QUFFZEUsVUFBTSxFQUFFWCxlQUFlLEVBRlQ7QUFHZFksYUFBUyxFQUFFLGlCQUFpQixLQUFLSCxDQUF0QixJQUEyQixJQUEzQixHQUFrQyxFQUgvQjtBQUlkSSxRQUFJLFlBQUssS0FBS0osQ0FBVjtBQUpVLEdBQVg7QUFBQSxDQUZjLENBQXJCOztBQVNBLElBQU1LLE9BQU8sR0FBRyxTQUFWQSxPQUFVLEdBQU07QUFBQTs7QUFBQSxrQkFDSUMsK0NBQVEsQ0FBQ1gsWUFBRCxDQURaO0FBQUEsTUFDYlksSUFEYTtBQUFBLE1BQ1BDLE9BRE87O0FBQUEsbUJBRWNGLCtDQUFRLENBQUMsSUFBRCxDQUZ0QjtBQUFBLE1BRWJHLFNBRmE7QUFBQSxNQUVGQyxZQUZFOztBQUlwQixNQUFNQyxRQUFRLEdBQUcsU0FBWEEsUUFBVyxDQUFDUCxJQUFELEVBQVU7QUFDekIsUUFBTVEsTUFBTSxHQUFHO0FBQ2JYLFFBQUUsRUFBRU0sSUFBSSxDQUFDTSxNQUFMLEdBQWMsQ0FETDtBQUViWCxZQUFNLEVBQUVYLGVBQWUsRUFGVjtBQUdiWSxlQUFTLEVBQUVXLElBQUksQ0FBQ0MsR0FBTCxFQUhFO0FBSWJYLFVBQUksWUFBS0csSUFBSSxDQUFDTSxNQUFMLEdBQWMsQ0FBbkIsY0FBd0JULElBQXhCO0FBSlMsS0FBZjtBQU1BSSxXQUFPLENBQUMsVUFBQ0QsSUFBRDtBQUFBLGNBQVdLLE1BQVgsMElBQXNCTCxJQUF0QjtBQUFBLEtBQUQsQ0FBUDtBQUNELEdBUkQ7O0FBVUEsTUFBTVMsUUFBUSxHQUFHLFNBQVhBLFFBQVcsQ0FBQ1osSUFBRCxFQUFPSCxFQUFQLEVBQWM7QUFDN0JPLFdBQU8sQ0FBQyxVQUFDRCxJQUFELEVBQVU7QUFDaEIsVUFBTVUsV0FBVyxHQUFHVixJQUFJLENBQUNXLFNBQUwsQ0FBZSxVQUFDWCxJQUFEO0FBQUEsZUFBVUEsSUFBSSxDQUFDTixFQUFMLEtBQVlBLEVBQXRCO0FBQUEsT0FBZixDQUFwQjtBQUNBLFVBQUlnQixXQUFXLEdBQUcsQ0FBbEIsRUFBcUIsT0FBT1YsSUFBUDs7QUFDckIsVUFBTVksT0FBTyxHQUFHLGlJQUFJWixJQUFQLENBQWI7O0FBQ0FZLGFBQU8sQ0FBQ0MsTUFBUixDQUFlSCxXQUFmLEVBQTRCLENBQTVCLGtDQUNLVixJQUFJLENBQUNVLFdBQUQsQ0FEVDtBQUVFYixZQUFJLEVBQUpBO0FBRkY7QUFJQSxhQUFPZSxPQUFQO0FBQ0QsS0FUTSxDQUFQO0FBVUQsR0FYRDs7QUFhQSxNQUFNRSxTQUFTLEdBQUcsU0FBWkEsU0FBWSxDQUFDcEIsRUFBRDtBQUFBLFdBQVFTLFlBQVksQ0FBQ1QsRUFBRCxDQUFwQjtBQUFBLEdBQWxCOztBQUNBLHNCQUNFO0FBQUEsNEJBQ0UsOERBQUMsOENBQUQ7QUFBVSxZQUFNLEVBQUVVO0FBQWxCO0FBQUE7QUFBQTtBQUFBO0FBQUEsYUFERixlQUVFO0FBQUksZUFBUyxFQUFDLFVBQWQ7QUFBQSxnQkFDR0osSUFBSSxDQUFDVCxHQUFMLENBQVMsVUFBQ3dCLENBQUQ7QUFBQSw0QkFDUiw4REFBQyw2Q0FBRCxrQ0FFTUEsQ0FGTjtBQUdFLGtCQUFRLEVBQUVOLFFBSFo7QUFJRSxtQkFBUyxFQUFFSztBQUpiLFlBQ09DLENBQUMsQ0FBQ3JCLEVBRFQ7QUFBQTtBQUFBO0FBQUE7QUFBQSxpQkFEUTtBQUFBLE9BQVQ7QUFESDtBQUFBO0FBQUE7QUFBQTtBQUFBLGFBRkY7QUFBQSxrQkFERjtBQWVELENBM0NEOztHQUFNSSxPOztLQUFBQSxPO0FBNkNOLCtEQUFlQSxPQUFmIiwiZmlsZSI6Ii4vY29tcG9uZW50cy9Nc2dMSXN0LmpzLmpzIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgdXNlU3RhdGUgfSBmcm9tIFwicmVhY3RcIjtcbmltcG9ydCBNc2dJdGVtIGZyb20gXCIuL01zZ0l0ZW1cIjtcbmltcG9ydCBNc2dJbnB1dCBmcm9tIFwiLi9Nc2dJbnB1dFwiO1xuXG5jb25zdCBVc2VySWRzID0gW1wicm95XCIsIFwiamF5XCJdO1xuY29uc3QgZ2V0UmFuZG9tVXNlcklkID0gKCkgPT4gVXNlcklkc1tNYXRoLnJvdW5kKE1hdGgucmFuZG9tKCkpXTtcblxuY29uc3Qgb3JpZ2luYWxNc2dzID0gQXJyYXkoNTApXG4gIC5maWxsKDApXG4gIC5tYXAoKF8sIGkpID0+ICh7XG4gICAgaWQ6IDUwIC0gaSxcbiAgICB1c2VySWQ6IGdldFJhbmRvbVVzZXJJZCgpLFxuICAgIHRpbWVzdGFtcDogMTIzNDU2Nzg5MDEyMyArICg1MCAtIGkpICsgMTAwMCArIDYwLFxuICAgIHRleHQ6IGAkezUwIC0gaX0gbW9jayB0ZXh0YCxcbiAgfSkpO1xuXG5jb25zdCBNc2dMaXN0ID0gKCkgPT4ge1xuICBjb25zdCBbbXNncywgc2V0TXNnc10gPSB1c2VTdGF0ZShvcmlnaW5hbE1zZ3MpO1xuICBjb25zdCBbZWRpdGluZ0lkLCBzZXRFZGl0aW5nSWRdID0gdXNlU3RhdGUobnVsbCk7XG5cbiAgY29uc3Qgb25DcmVhdGUgPSAodGV4dCkgPT4ge1xuICAgIGNvbnN0IG5ld01zZyA9IHtcbiAgICAgIGlkOiBtc2dzLmxlbmd0aCArIDEsXG4gICAgICB1c2VySWQ6IGdldFJhbmRvbVVzZXJJZCgpLFxuICAgICAgdGltZXN0YW1wOiBEYXRlLm5vdygpLFxuICAgICAgdGV4dDogYCR7bXNncy5sZW5ndGggKyAxfSAke3RleHR9YCxcbiAgICB9O1xuICAgIHNldE1zZ3MoKG1zZ3MpID0+IFtuZXdNc2csIC4uLm1zZ3NdKTtcbiAgfTtcblxuICBjb25zdCBvblVwZGF0ZSA9ICh0ZXh0LCBpZCkgPT4ge1xuICAgIHNldE1zZ3MoKG1zZ3MpID0+IHtcbiAgICAgIGNvbnN0IHRhcmdldEluZGV4ID0gbXNncy5maW5kSW5kZXgoKG1zZ3MpID0+IG1zZ3MuaWQgPT09IGlkKTtcbiAgICAgIGlmICh0YXJnZXRJbmRleCA8IDApIHJldHVybiBtc2dzO1xuICAgICAgY29uc3QgbmV3TXNncyA9IFsuLi5tc2dzXTtcbiAgICAgIG5ld01zZ3Muc3BsaWNlKHRhcmdldEluZGV4LCAxLCB7XG4gICAgICAgIC4uLm1zZ3NbdGFyZ2V0SW5kZXhdLFxuICAgICAgICB0ZXh0LFxuICAgICAgfSk7XG4gICAgICByZXR1cm4gbmV3TXNncztcbiAgICB9KTtcbiAgfTtcblxuICBjb25zdCBzdGFydEVkaXQgPSAoaWQpID0+IHNldEVkaXRpbmdJZChpZCk7XG4gIHJldHVybiAoXG4gICAgPD5cbiAgICAgIDxNc2dJbnB1dCBtdXRhdGU9e29uQ3JlYXRlfSAvPlxuICAgICAgPHVsIGNsYXNzTmFtZT1cIm1lc3NhZ2VzXCI+XG4gICAgICAgIHttc2dzLm1hcCgoeCkgPT4gKFxuICAgICAgICAgIDxNc2dJdGVtXG4gICAgICAgICAgICBrZXk9e3guaWR9XG4gICAgICAgICAgICB7Li4ueH1cbiAgICAgICAgICAgIG9uVXBkYXRlPXtvblVwZGF0ZX1cbiAgICAgICAgICAgIHN0YXJ0RWRpdD17c3RhcnRFZGl0fVxuICAgICAgICAgIC8+XG4gICAgICAgICkpfVxuICAgICAgPC91bD5cbiAgICA8Lz5cbiAgKTtcbn07XG5cbmV4cG9ydCBkZWZhdWx0IE1zZ0xpc3Q7XG4iXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///./components/MsgLIst.js\n");

/***/ })

});