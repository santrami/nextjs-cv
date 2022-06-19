"use strict";
/*
 * ATTENTION: An "eval-source-map" devtool has been used.
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file with attached SourceMaps in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
self["webpackHotUpdate_N_E"]("pages/index",{

/***/ "./components/SphereAnimated.js":
/*!**************************************!*\
  !*** ./components/SphereAnimated.js ***!
  \**************************************/
/***/ (function(module, __webpack_exports__, __webpack_require__) {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": function() { return /* binding */ SphereAnimated; }\n/* harmony export */ });\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"./node_modules/react/jsx-dev-runtime.js\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _react_three_drei__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @react-three/drei */ \"./node_modules/@react-three/drei/index.js\");\n/* harmony import */ var three__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! three */ \"./node_modules/three/build/three.module.js\");\n/* harmony import */ var _public_normal_map_jpg__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../public/normal-map.jpg */ \"./public/normal-map.jpg\");\n/* harmony import */ var _public_moon_normal_map_jpg__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../public/moon-normal-map.jpg */ \"./public/moon-normal-map.jpg\");\n/* harmony import */ var _react_three_fiber__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @react-three/fiber */ \"./node_modules/@react-three/fiber/dist/react-three-fiber.esm.js\");\nfunction _arrayLikeToArray(arr, len) {\n    if (len == null || len > arr.length) len = arr.length;\n    for(var i = 0, arr2 = new Array(len); i < len; i++)arr2[i] = arr[i];\n    return arr2;\n}\nfunction _arrayWithHoles(arr) {\n    if (Array.isArray(arr)) return arr;\n}\nfunction _iterableToArrayLimit(arr, i) {\n    var _i = arr == null ? null : typeof Symbol !== \"undefined\" && arr[Symbol.iterator] || arr[\"@@iterator\"];\n    if (_i == null) return;\n    var _arr = [];\n    var _n = true;\n    var _d = false;\n    var _s1, _e;\n    try {\n        for(_i = _i.call(arr); !(_n = (_s1 = _i.next()).done); _n = true){\n            _arr.push(_s1.value);\n            if (i && _arr.length === i) break;\n        }\n    } catch (err) {\n        _d = true;\n        _e = err;\n    } finally{\n        try {\n            if (!_n && _i[\"return\"] != null) _i[\"return\"]();\n        } finally{\n            if (_d) throw _e;\n        }\n    }\n    return _arr;\n}\nfunction _nonIterableRest() {\n    throw new TypeError(\"Invalid attempt to destructure non-iterable instance.\\\\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.\");\n}\nfunction _slicedToArray(arr, i) {\n    return _arrayWithHoles(arr) || _iterableToArrayLimit(arr, i) || _unsupportedIterableToArray(arr, i) || _nonIterableRest();\n}\nfunction _unsupportedIterableToArray(o, minLen) {\n    if (!o) return;\n    if (typeof o === \"string\") return _arrayLikeToArray(o, minLen);\n    var n = Object.prototype.toString.call(o).slice(8, -1);\n    if (n === \"Object\" && o.constructor) n = o.constructor.name;\n    if (n === \"Map\" || n === \"Set\") return Array.from(n);\n    if (n === \"Arguments\" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen);\n}\n\n\n\n\n\n\nvar _s = $RefreshSig$();\nfunction SphereAnimated(param) {\n    var args = param.args, scale = param.scale, position = param.position;\n    _s();\n    var ref = _slicedToArray((0,_react_three_fiber__WEBPACK_IMPORTED_MODULE_3__.useLoader)(three__WEBPACK_IMPORTED_MODULE_4__.TextureLoader, [\n        \"/normal-map.jpg\",\n        \"/moon-normal-map.jpg\"\n    ]), 2), image = ref[0], normal = ref[1];\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_react_three_drei__WEBPACK_IMPORTED_MODULE_5__.Sphere, {\n        opacity: 0,\n        visible: true,\n        args: args,\n        scale: scale,\n        position: position,\n        children: [\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"meshStandardMaterial\", {\n                map: normal,\n                normalMap: image\n            }, void 0, false, {\n                fileName: \"C:\\\\Users\\\\Hogar\\\\Desktop\\\\programacion\\\\nextjs-cv\\\\components\\\\SphereAnimated.js\",\n                lineNumber: 14,\n                columnNumber: 13\n            }, this),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_react_three_drei__WEBPACK_IMPORTED_MODULE_5__.Sparkles, {\n                count: 500,\n                size: 2,\n                speed: 0.1,\n                opacity: 1,\n                scale: 4,\n                color: \"#ffff00\"\n            }, void 0, false, {\n                fileName: \"C:\\\\Users\\\\Hogar\\\\Desktop\\\\programacion\\\\nextjs-cv\\\\components\\\\SphereAnimated.js\",\n                lineNumber: 15,\n                columnNumber: 13\n            }, this),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_react_three_drei__WEBPACK_IMPORTED_MODULE_5__.Cloud, {\n                opacity: 1,\n                speed: 2,\n                width: 0.1,\n                depth: 1,\n                segments: 2,\n                color: \"#000000\"\n            }, void 0, false, {\n                fileName: \"C:\\\\Users\\\\Hogar\\\\Desktop\\\\programacion\\\\nextjs-cv\\\\components\\\\SphereAnimated.js\",\n                lineNumber: 16,\n                columnNumber: 13\n            }, this),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_react_three_drei__WEBPACK_IMPORTED_MODULE_5__.Cloud, {\n                opacity: 1,\n                speed: 2,\n                width: 0.1,\n                depth: 1,\n                segments: 2,\n                color: \"#000000\"\n            }, void 0, false, {\n                fileName: \"C:\\\\Users\\\\Hogar\\\\Desktop\\\\programacion\\\\nextjs-cv\\\\components\\\\SphereAnimated.js\",\n                lineNumber: 25,\n                columnNumber: 13\n            }, this)\n        ]\n    }, void 0, true, {\n        fileName: \"C:\\\\Users\\\\Hogar\\\\Desktop\\\\programacion\\\\nextjs-cv\\\\components\\\\SphereAnimated.js\",\n        lineNumber: 12,\n        columnNumber: 9\n    }, this);\n};\n_s(SphereAnimated, \"ixWDcNex2XpXvausoAzTFlGCFUo=\", false, function() {\n    return [\n        _react_three_fiber__WEBPACK_IMPORTED_MODULE_3__.useLoader\n    ];\n});\n_c = SphereAnimated;\nvar _c;\n$RefreshReg$(_c, \"SphereAnimated\");\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports on update so we can compare the boundary\n                // signatures.\n                module.hot.dispose(function (data) {\n                    data.prevExports = currentExports;\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevExports !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevExports !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9jb21wb25lbnRzL1NwaGVyZUFuaW1hdGVkLmpzLmpzIiwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7O0FBQUE7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBQStGO0FBQzFEO0FBQ1c7QUFDRztBQUNMOztBQUcvQixTQUFTUyxjQUFjLENBQUMsS0FBeUIsRUFBRTtRQUF6QkMsSUFBSSxHQUFOLEtBQXlCLENBQXZCQSxJQUFJLEVBQUVDLEtBQUssR0FBYixLQUF5QixDQUFqQkEsS0FBSyxFQUFFQyxRQUFRLEdBQXZCLEtBQXlCLENBQVZBLFFBQVE7O0lBQzFELElBQXdCSixHQUFxRSxrQkFBckVBLDZEQUFTLENBQUNILGdEQUFhLEVBQUU7UUFBQyxpQkFBaUI7UUFBRSxzQkFBc0I7S0FBQyxDQUFDLE1BQXRGUSxLQUFLLEdBQVlMLEdBQXFFLEdBQWpGLEVBQUVNLE1BQU0sR0FBSU4sR0FBcUUsR0FBekU7SUFFcEIscUJBQ0ksOERBQUNSLHFEQUFNO1FBQUNlLE9BQU8sRUFBRSxDQUFDO1FBQUVDLE9BQU87UUFBQ04sSUFBSSxFQUFFQSxJQUFJO1FBQUVDLEtBQUssRUFBRUEsS0FBSztRQUFFQyxRQUFRLEVBQUVBLFFBQVE7OzBCQUVwRSw4REFBQ0ssc0JBQW9CO2dCQUFDQyxHQUFHLEVBQUVKLE1BQU07Z0JBQUVSLFNBQVMsRUFBRU8sS0FBSzs7Ozs7b0JBQUk7MEJBQ3ZELDhEQUFDVix1REFBUTtnQkFBQ2dCLEtBQUssRUFBRSxHQUFHO2dCQUFFQyxJQUFJLEVBQUUsQ0FBQztnQkFBRUMsS0FBSyxFQUFFLEdBQUc7Z0JBQUVOLE9BQU8sRUFBRSxDQUFDO2dCQUFFSixLQUFLLEVBQUUsQ0FBQztnQkFBRVcsS0FBSyxFQUFFLFNBQVM7Ozs7O29CQUFJOzBCQUNyRiw4REFBQ3JCLG9EQUFLO2dCQUVGYyxPQUFPLEVBQUUsQ0FBQztnQkFDVk0sS0FBSyxFQUFFLENBQUM7Z0JBQ1JFLEtBQUssRUFBRSxHQUFHO2dCQUNWQyxLQUFLLEVBQUUsQ0FBQztnQkFDUkMsUUFBUSxFQUFFLENBQUM7Z0JBQ1hILEtBQUssRUFBRSxTQUFTOzs7OztvQkFDbEI7MEJBQ0YsOERBQUNyQixvREFBSztnQkFFRmMsT0FBTyxFQUFFLENBQUM7Z0JBQ1ZNLEtBQUssRUFBRSxDQUFDO2dCQUNSRSxLQUFLLEVBQUUsR0FBRztnQkFDVkMsS0FBSyxFQUFFLENBQUM7Z0JBQ1JDLFFBQVEsRUFBRSxDQUFDO2dCQUNYSCxLQUFLLEVBQUUsU0FBUzs7Ozs7b0JBQ2xCOzs7Ozs7WUFDRyxDQUNaO0NBQ0o7R0E1QnVCYixjQUFjOztRQUNWRCx5REFBUzs7O0FBRGJDLEtBQUFBLGNBQWMiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vY29tcG9uZW50cy9TcGhlcmVBbmltYXRlZC5qcz81MDkwIl0sInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IFNwaGVyZSwgQ2xvdWQsIE1lc2hEaXN0b3J0TWF0ZXJpYWwsIFNwYXJrbGVzLCBQb2ludE1hdGVyaWFsIH0gZnJvbSAnQHJlYWN0LXRocmVlL2RyZWknXHJcbmltcG9ydCB7IFRleHR1cmVMb2FkZXIgfSBmcm9tICd0aHJlZSdcclxuaW1wb3J0IG5vcm1hbE1hcCBmcm9tICcuLi9wdWJsaWMvbm9ybWFsLW1hcC5qcGcnXHJcbmltcG9ydCBtb29uTWFwIGZyb20gJy4uL3B1YmxpYy9tb29uLW5vcm1hbC1tYXAuanBnJ1xyXG5pbXBvcnQgeyB1c2VMb2FkZXIgfSBmcm9tICdAcmVhY3QtdGhyZWUvZmliZXInXHJcblxyXG5cclxuZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gU3BoZXJlQW5pbWF0ZWQoeyBhcmdzLCBzY2FsZSwgcG9zaXRpb24gfSkge1xyXG4gICAgY29uc3QgW2ltYWdlLCBub3JtYWxdID0gdXNlTG9hZGVyKFRleHR1cmVMb2FkZXIsIFtcIi9ub3JtYWwtbWFwLmpwZ1wiLCAnL21vb24tbm9ybWFsLW1hcC5qcGcnXSlcclxuXHJcbiAgICByZXR1cm4gKFxyXG4gICAgICAgIDxTcGhlcmUgb3BhY2l0eT17MH0gdmlzaWJsZSBhcmdzPXthcmdzfSBzY2FsZT17c2NhbGV9IHBvc2l0aW9uPXtwb3NpdGlvbn0+XHJcbiAgICAgICAgICAgIHsvKiA8TWVzaERpc3RvcnRNYXRlcmlhbCBhdHRhY2g9XCJtYXRlcmlhbFwiIHNwZWVkPXsxfSBkaXN0b3J0PXsxfSAvPiAqL31cclxuICAgICAgICAgICAgPG1lc2hTdGFuZGFyZE1hdGVyaWFsIG1hcD17bm9ybWFsfSBub3JtYWxNYXA9e2ltYWdlfSAvPlxyXG4gICAgICAgICAgICA8U3BhcmtsZXMgY291bnQ9ezUwMH0gc2l6ZT17Mn0gc3BlZWQ9ezAuMX0gb3BhY2l0eT17MX0gc2NhbGU9ezR9IGNvbG9yPXtcIiNmZmZmMDBcIn0gLz5cclxuICAgICAgICAgICAgPENsb3VkXHJcbiAgICAgICAgICAgICAgICBcclxuICAgICAgICAgICAgICAgIG9wYWNpdHk9ezF9XHJcbiAgICAgICAgICAgICAgICBzcGVlZD17Mn0gLy8gUm90YXRpb24gc3BlZWRcclxuICAgICAgICAgICAgICAgIHdpZHRoPXswLjF9IC8vIFdpZHRoIG9mIHRoZSBmdWxsIGNsb3VkXHJcbiAgICAgICAgICAgICAgICBkZXB0aD17MX0gLy8gWi1kaXIgZGVwdGhcclxuICAgICAgICAgICAgICAgIHNlZ21lbnRzPXsyfSAvLyBOdW1iZXIgb2YgcGFydGljbGVzXHJcbiAgICAgICAgICAgICAgICBjb2xvcj17XCIjMDAwMDAwXCJ9XHJcbiAgICAgICAgICAgIC8+XHJcbiAgICAgICAgICAgIDxDbG91ZFxyXG4gICAgICAgICAgICAgICAgXHJcbiAgICAgICAgICAgICAgICBvcGFjaXR5PXsxfVxyXG4gICAgICAgICAgICAgICAgc3BlZWQ9ezJ9IC8vIFJvdGF0aW9uIHNwZWVkXHJcbiAgICAgICAgICAgICAgICB3aWR0aD17MC4xfSAvLyBXaWR0aCBvZiB0aGUgZnVsbCBjbG91ZFxyXG4gICAgICAgICAgICAgICAgZGVwdGg9ezF9IC8vIFotZGlyIGRlcHRoXHJcbiAgICAgICAgICAgICAgICBzZWdtZW50cz17Mn0gLy8gTnVtYmVyIG9mIHBhcnRpY2xlc1xyXG4gICAgICAgICAgICAgICAgY29sb3I9e1wiIzAwMDAwMFwifVxyXG4gICAgICAgICAgICAvPlxyXG4gICAgICAgIDwvU3BoZXJlPlxyXG4gICAgKVxyXG59Il0sIm5hbWVzIjpbIlNwaGVyZSIsIkNsb3VkIiwiTWVzaERpc3RvcnRNYXRlcmlhbCIsIlNwYXJrbGVzIiwiUG9pbnRNYXRlcmlhbCIsIlRleHR1cmVMb2FkZXIiLCJub3JtYWxNYXAiLCJtb29uTWFwIiwidXNlTG9hZGVyIiwiU3BoZXJlQW5pbWF0ZWQiLCJhcmdzIiwic2NhbGUiLCJwb3NpdGlvbiIsImltYWdlIiwibm9ybWFsIiwib3BhY2l0eSIsInZpc2libGUiLCJtZXNoU3RhbmRhcmRNYXRlcmlhbCIsIm1hcCIsImNvdW50Iiwic2l6ZSIsInNwZWVkIiwiY29sb3IiLCJ3aWR0aCIsImRlcHRoIiwic2VnbWVudHMiXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///./components/SphereAnimated.js\n");

/***/ })

});