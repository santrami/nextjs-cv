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

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": function() { return /* binding */ SphereAnimated; }\n/* harmony export */ });\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"./node_modules/react/jsx-dev-runtime.js\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var _react_three_drei__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @react-three/drei */ \"./node_modules/@react-three/drei/index.js\");\n/* harmony import */ var _public_normal_map_jpg__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../public/normal-map.jpg */ \"./public/normal-map.jpg\");\n/* harmony import */ var _public_moon_normal_map_jpg__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../public/moon-normal-map.jpg */ \"./public/moon-normal-map.jpg\");\n\n\n\n\n\n\n\nfunction SphereAnimated(param) {\n    var args = param.args, scale = param.scale, position = param.position;\n    /* const [image,normal]= useLoader(TextureLoader,[moonMap, normalMap]) */ return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.Fragment, {\n        children: [\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"img\", {\n                src: _public_moon_normal_map_jpg__WEBPACK_IMPORTED_MODULE_3__[\"default\"]\n            }, void 0, false, {\n                fileName: \"C:\\\\Users\\\\Hogar\\\\Desktop\\\\programacion\\\\nextjs-cv\\\\components\\\\SphereAnimated.js\",\n                lineNumber: 13,\n                columnNumber: 9\n            }, this),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_react_three_drei__WEBPACK_IMPORTED_MODULE_4__.Sphere, {\n                opacity: 0,\n                visible: true,\n                args: args,\n                scale: scale,\n                position: position,\n                children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_react_three_drei__WEBPACK_IMPORTED_MODULE_4__.Sparkles, {\n                    count: 1500,\n                    size: 10,\n                    speed: 1,\n                    opacity: 0.1,\n                    noise: 10,\n                    color: \"#ff0000\"\n                }, void 0, false, {\n                    fileName: \"C:\\\\Users\\\\Hogar\\\\Desktop\\\\programacion\\\\nextjs-cv\\\\components\\\\SphereAnimated.js\",\n                    lineNumber: 17,\n                    columnNumber: 13\n                }, this)\n            }, void 0, false, {\n                fileName: \"C:\\\\Users\\\\Hogar\\\\Desktop\\\\programacion\\\\nextjs-cv\\\\components\\\\SphereAnimated.js\",\n                lineNumber: 14,\n                columnNumber: 9\n            }, this)\n        ]\n    }, void 0, true);\n};\n_c = SphereAnimated;\nvar _c;\n$RefreshReg$(_c, \"SphereAnimated\");\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports on update so we can compare the boundary\n                // signatures.\n                module.hot.dispose(function (data) {\n                    data.prevExports = currentExports;\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevExports !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevExports !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9jb21wb25lbnRzL1NwaGVyZUFuaW1hdGVkLmpzLmpzIiwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7O0FBQUE7QUFBeUI7QUFDK0Q7QUFDeEM7QUFDRztBQUNMO0FBQ1Q7QUFFdEIsU0FBU1MsY0FBYyxDQUFDLEtBQXlCLEVBQUU7UUFBekJDLElBQUksR0FBTixLQUF5QixDQUF2QkEsSUFBSSxFQUFFQyxLQUFLLEdBQWIsS0FBeUIsQ0FBakJBLEtBQUssRUFBRUMsUUFBUSxHQUF2QixLQUF5QixDQUFWQSxRQUFRO0lBQzFELHlFQUF5RSxDQUV6RSxxQkFDSTs7MEJBQ0EsOERBQUNDLEtBQUc7Z0JBQUNDLEdBQUcsRUFBRVIsbUVBQU87Ozs7O29CQUFHOzBCQUNwQiw4REFBQ0wscURBQU07Z0JBQUNjLE9BQU8sRUFBRSxDQUFDO2dCQUFFQyxPQUFPO2dCQUFDTixJQUFJLEVBQUVBLElBQUk7Z0JBQUVDLEtBQUssRUFBRUEsS0FBSztnQkFBRUMsUUFBUSxFQUFFQSxRQUFROzBCQUdwRSw0RUFBQ1QsdURBQVE7b0JBQUNjLEtBQUssRUFBRSxJQUFJO29CQUFFQyxJQUFJLEVBQUUsRUFBRTtvQkFBRUMsS0FBSyxFQUFFLENBQUM7b0JBQUVKLE9BQU8sRUFBRSxHQUFHO29CQUFFSyxLQUFLLEVBQUUsRUFBRTtvQkFBRUMsS0FBSyxFQUFFLFNBQVM7Ozs7O3dCQUFJOzs7OztvQkFDbkY7O29CQUNOLENBRU47Q0FDSjtBQWR1QlosS0FBQUEsY0FBYyIsInNvdXJjZXMiOlsid2VicGFjazovL19OX0UvLi9jb21wb25lbnRzL1NwaGVyZUFuaW1hdGVkLmpzPzUwOTAiXSwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IFJlYWN0IGZyb20gJ3JlYWN0J1xyXG5pbXBvcnQgeyBTcGhlcmUsIE1lc2hEaXN0b3J0TWF0ZXJpYWwsIFNwYXJrbGVzLCBQb2ludE1hdGVyaWFsIH0gZnJvbSAnQHJlYWN0LXRocmVlL2RyZWknXHJcbmltcG9ydCBub3JtYWxNYXAgZnJvbSAnLi4vcHVibGljL25vcm1hbC1tYXAuanBnJ1xyXG5pbXBvcnQgbW9vbk1hcCBmcm9tICcuLi9wdWJsaWMvbW9vbi1ub3JtYWwtbWFwLmpwZydcclxuaW1wb3J0IHsgdXNlTG9hZGVyIH0gZnJvbSAnQHJlYWN0LXRocmVlL2ZpYmVyJ1xyXG5pbXBvcnQgeyBUZXh0dXJlTG9hZGVyIH0gZnJvbSAndGhyZWUnXHJcblxyXG5leHBvcnQgZGVmYXVsdCBmdW5jdGlvbiBTcGhlcmVBbmltYXRlZCh7IGFyZ3MsIHNjYWxlLCBwb3NpdGlvbiB9KSB7XHJcbiAgICAvKiBjb25zdCBbaW1hZ2Usbm9ybWFsXT0gdXNlTG9hZGVyKFRleHR1cmVMb2FkZXIsW21vb25NYXAsIG5vcm1hbE1hcF0pICovXHJcbiAgICBcclxuICAgIHJldHVybiAoXHJcbiAgICAgICAgPD5cclxuICAgICAgICA8aW1nIHNyYz17bW9vbk1hcH0vPlxyXG4gICAgICAgIDxTcGhlcmUgb3BhY2l0eT17MH0gdmlzaWJsZSBhcmdzPXthcmdzfSBzY2FsZT17c2NhbGV9IHBvc2l0aW9uPXtwb3NpdGlvbn0+XHJcbiAgICAgICAgICAgIHsvKiA8TWVzaERpc3RvcnRNYXRlcmlhbCBhdHRhY2g9XCJtYXRlcmlhbFwiIHNwZWVkPXsxfSBkaXN0b3J0PXsxfSAvPiAqL30gICAgICAgICAgICBcclxuICAgICAgICAgICAgey8qIDxtZXNoU3RhbmRhcmRNYXRlcmlhbCBtYXA9e2ltYWdlfSBub3JtYWxNYXA9e25vcm1hbH0gLz4gKi99XHJcbiAgICAgICAgICAgIDxTcGFya2xlcyBjb3VudD17MTUwMH0gc2l6ZT17MTB9IHNwZWVkPXsxfSBvcGFjaXR5PXswLjF9IG5vaXNlPXsxMH0gY29sb3I9e1wiI2ZmMDAwMFwifSAvPiAgICAgICAgIFxyXG4gICAgICAgIDwvU3BoZXJlPlxyXG4gICAgICAgIDwvPlxyXG5cclxuICAgIClcclxufSJdLCJuYW1lcyI6WyJSZWFjdCIsIlNwaGVyZSIsIk1lc2hEaXN0b3J0TWF0ZXJpYWwiLCJTcGFya2xlcyIsIlBvaW50TWF0ZXJpYWwiLCJub3JtYWxNYXAiLCJtb29uTWFwIiwidXNlTG9hZGVyIiwiVGV4dHVyZUxvYWRlciIsIlNwaGVyZUFuaW1hdGVkIiwiYXJncyIsInNjYWxlIiwicG9zaXRpb24iLCJpbWciLCJzcmMiLCJvcGFjaXR5IiwidmlzaWJsZSIsImNvdW50Iiwic2l6ZSIsInNwZWVkIiwibm9pc2UiLCJjb2xvciJdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///./components/SphereAnimated.js\n");

/***/ })

});