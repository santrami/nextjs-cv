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

/***/ "./components/Camera.js":
/*!******************************!*\
  !*** ./components/Camera.js ***!
  \******************************/
/***/ (function(module, __webpack_exports__, __webpack_require__) {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": function() { return /* binding */ Camera; }\n/* harmony export */ });\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"./node_modules/react/jsx-dev-runtime.js\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var _react_three_drei__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @react-three/drei */ \"./node_modules/@react-three/drei/index.js\");\n/* harmony import */ var _react_three_fiber__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @react-three/fiber */ \"./node_modules/@react-three/fiber/dist/react-three-fiber.esm.js\");\n/* harmony import */ var three__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! three */ \"./node_modules/three/build/three.module.js\");\n\n\n\n\n\n\nvar _s = $RefreshSig$();\nfunction Camera() {\n    _s();\n    var vec = new three__WEBPACK_IMPORTED_MODULE_2__.Vector3();\n    var cameraRef = (0,react__WEBPACK_IMPORTED_MODULE_1__.useRef)();\n    (0,_react_three_fiber__WEBPACK_IMPORTED_MODULE_3__.useFrame)(function(state) {\n        state.camera.position.lerp(vec.set(0.5, 1, 3), 0.008);\n        state.camera.updateProjectionMatrix();\n    });\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"mesh\", {\n        children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_react_three_drei__WEBPACK_IMPORTED_MODULE_4__.PerspectiveCamera, {\n            makeDefault: true,\n            position: [\n                5,\n                0,\n                -12\n            ],\n            ref: cameraRef,\n            fov: 75\n        }, void 0, false, {\n            fileName: \"C:\\\\Users\\\\Hogar\\\\Desktop\\\\programacion\\\\nextjs-cv\\\\components\\\\Camera.js\",\n            lineNumber: 17,\n            columnNumber: 13\n        }, this)\n    }, void 0, false, {\n        fileName: \"C:\\\\Users\\\\Hogar\\\\Desktop\\\\programacion\\\\nextjs-cv\\\\components\\\\Camera.js\",\n        lineNumber: 16,\n        columnNumber: 9\n    }, this);\n};\n_s(Camera, \"hJVU1VJhV3D7gaub54nOAyWFt8k=\", false, function() {\n    return [\n        _react_three_fiber__WEBPACK_IMPORTED_MODULE_3__.useFrame\n    ];\n});\n_c = Camera;\nvar _c;\n$RefreshReg$(_c, \"Camera\");\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports on update so we can compare the boundary\n                // signatures.\n                module.hot.dispose(function (data) {\n                    data.prevExports = currentExports;\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevExports !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevExports !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9jb21wb25lbnRzL0NhbWVyYS5qcy5qcyIsIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7OztBQUFBO0FBQXlCO0FBQ2dEO0FBQzNDO0FBQ3lCO0FBQ3pCOztBQUNmLFNBQVNPLE1BQU0sR0FBRzs7SUFDN0IsSUFBTUMsR0FBRyxHQUFHLElBQUlGLDBDQUFhLEVBQUU7SUFDL0IsSUFBTUksU0FBUyxHQUFHUCw2Q0FBTSxFQUFFO0lBRTFCQyw0REFBUSxDQUFDLFNBQUNPLEtBQUssRUFBSztRQUNaQSxLQUFLLENBQUNDLE1BQU0sQ0FBQ0MsUUFBUSxDQUFDQyxJQUFJLENBQUNOLEdBQUcsQ0FBQ08sR0FBRyxDQUFDLEdBQUcsRUFBQyxDQUFDLEVBQUMsQ0FBQyxDQUFDLEVBQUUsS0FBSyxDQUFDO1FBQ25ESixLQUFLLENBQUNDLE1BQU0sQ0FBQ0ksc0JBQXNCLEVBQUU7S0FDNUMsQ0FBQztJQUVGLHFCQUNJLDhEQUFDQyxNQUFJO2tCQUNELDRFQUFDZixnRUFBaUI7WUFBQ2dCLFdBQVc7WUFBQ0wsUUFBUSxFQUFFO0FBQUMsaUJBQUM7QUFBQyxpQkFBQztnQkFBQyxDQUFDLEVBQUU7YUFBQztZQUFFTSxHQUFHLEVBQUVULFNBQVM7WUFBRVUsR0FBRyxFQUFFLEVBQUU7Ozs7O2dCQUFJOzs7OztZQUU1RSxDQUNWO0NBQ0o7R0FmdUJiLE1BQU07O1FBSTFCSCx3REFBUTs7O0FBSllHLEtBQUFBLE1BQU0iLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vY29tcG9uZW50cy9DYW1lcmEuanM/YTIyNCJdLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgUmVhY3QgZnJvbSAncmVhY3QnXHJcbmltcG9ydCB7IE9ydGhvZ3JhcGhpY0NhbWVyYSwgUGVyc3BlY3RpdmVDYW1lcmEgfSBmcm9tICdAcmVhY3QtdGhyZWUvZHJlaSdcclxuaW1wb3J0IHsgdXNlUmVmIH0gZnJvbSAncmVhY3QnXHJcbmltcG9ydCB7IHVzZUZyYW1lLCB1c2VUaHJlZSB9IGZyb20gJ0ByZWFjdC10aHJlZS9maWJlcidcclxuaW1wb3J0ICogYXMgVEhSRUUgZnJvbSAndGhyZWUnXHJcbmV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIENhbWVyYSgpIHtcclxuICAgIGNvbnN0IHZlYyA9IG5ldyBUSFJFRS5WZWN0b3IzKClcclxuICAgIGNvbnN0IGNhbWVyYVJlZiA9IHVzZVJlZigpXHJcblxyXG4gICAgdXNlRnJhbWUoKHN0YXRlKSA9PiB7ICAgICAgICAgICAgXHJcbiAgICAgICAgICAgIHN0YXRlLmNhbWVyYS5wb3NpdGlvbi5sZXJwKHZlYy5zZXQoMC41LDEsMyksIDAuMDA4KVxyXG4gICAgICAgICAgICBzdGF0ZS5jYW1lcmEudXBkYXRlUHJvamVjdGlvbk1hdHJpeCgpXHJcbiAgICB9KVxyXG5cclxuICAgIHJldHVybiAoXHJcbiAgICAgICAgPG1lc2g+XHJcbiAgICAgICAgICAgIDxQZXJzcGVjdGl2ZUNhbWVyYSBtYWtlRGVmYXVsdCBwb3NpdGlvbj17WzUsMCwtMTJdfSByZWY9e2NhbWVyYVJlZn0gZm92PXs3NX0gLz5cclxuXHJcbiAgICAgICAgPC9tZXNoPlxyXG4gICAgKVxyXG59XHJcbiJdLCJuYW1lcyI6WyJSZWFjdCIsIk9ydGhvZ3JhcGhpY0NhbWVyYSIsIlBlcnNwZWN0aXZlQ2FtZXJhIiwidXNlUmVmIiwidXNlRnJhbWUiLCJ1c2VUaHJlZSIsIlRIUkVFIiwiQ2FtZXJhIiwidmVjIiwiVmVjdG9yMyIsImNhbWVyYVJlZiIsInN0YXRlIiwiY2FtZXJhIiwicG9zaXRpb24iLCJsZXJwIiwic2V0IiwidXBkYXRlUHJvamVjdGlvbk1hdHJpeCIsIm1lc2giLCJtYWtlRGVmYXVsdCIsInJlZiIsImZvdiJdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///./components/Camera.js\n");

/***/ })

});