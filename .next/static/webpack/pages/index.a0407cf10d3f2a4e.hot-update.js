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

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": function() { return /* binding */ Camera; }\n/* harmony export */ });\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"./node_modules/react/jsx-dev-runtime.js\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var _react_three_drei__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @react-three/drei */ \"./node_modules/@react-three/drei/index.js\");\n/* harmony import */ var _react_three_fiber__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @react-three/fiber */ \"./node_modules/@react-three/fiber/dist/react-three-fiber.esm.js\");\n\n\n\n\n\nvar _s = $RefreshSig$();\nfunction Camera() {\n    _s();\n    var cameraRef = (0,react__WEBPACK_IMPORTED_MODULE_1__.useRef)();\n    _react_three_fiber__WEBPACK_IMPORTED_MODULE_2__.useFrame;\n    (0,_react_three_fiber__WEBPACK_IMPORTED_MODULE_2__.useFrame)(function() {\n        cameraRef.current.rotation.x += 0.001;\n    });\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_react_three_drei__WEBPACK_IMPORTED_MODULE_3__.PerspectiveCamera, {\n        ref: cameraRef,\n        makeDefault: true,\n        position: [\n            0,\n            0.3,\n            1.7\n        ],\n        fov: 75\n    }, void 0, false, {\n        fileName: \"C:\\\\Users\\\\Hogar\\\\Desktop\\\\programacion\\\\nextjs-cv\\\\components\\\\Camera.js\",\n        lineNumber: 15,\n        columnNumber: 9\n    }, this);\n};\n_s(Camera, \"hJVU1VJhV3D7gaub54nOAyWFt8k=\", false, function() {\n    return [\n        _react_three_fiber__WEBPACK_IMPORTED_MODULE_2__.useFrame\n    ];\n});\n_c = Camera;\nvar _c;\n$RefreshReg$(_c, \"Camera\");\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports on update so we can compare the boundary\n                // signatures.\n                module.hot.dispose(function (data) {\n                    data.prevExports = currentExports;\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevExports !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevExports !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9jb21wb25lbnRzL0NhbWVyYS5qcy5qcyIsIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7O0FBQUE7QUFBeUI7QUFDNEI7QUFDdkI7QUFDZTs7QUFFOUIsU0FBU0ksTUFBTSxHQUFHOztJQUU3QixJQUFNQyxTQUFTLEdBQUdILDZDQUFNLEVBQUU7SUFDOUJDLHdEQUFRO0lBQ0pBLDREQUFRLENBQUMsV0FBTTtRQUNYRSxTQUFTLENBQUNDLE9BQU8sQ0FBQ0MsUUFBUSxDQUFDQyxDQUFDLElBQUksS0FBSztLQUN4QyxDQUFDO0lBRUYscUJBQ0ksOERBQUNQLGdFQUFpQjtRQUFDUSxHQUFHLEVBQUVKLFNBQVM7UUFBRUssV0FBVztRQUFDQyxRQUFRLEVBQUU7QUFBQyxhQUFDO0FBQUUsZUFBRztBQUFFLGVBQUc7U0FBQztRQUFFQyxHQUFHLEVBQUUsRUFBRTs7Ozs7WUFBSSxDQUN0RjtDQUNKO0dBWHVCUixNQUFNOztRQUkxQkQsd0RBQVE7OztBQUpZQyxLQUFBQSxNQUFNIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vX05fRS8uL2NvbXBvbmVudHMvQ2FtZXJhLmpzP2EyMjQiXSwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IFJlYWN0IGZyb20gJ3JlYWN0J1xyXG5pbXBvcnQgeyBQZXJzcGVjdGl2ZUNhbWVyYSB9IGZyb20gJ0ByZWFjdC10aHJlZS9kcmVpJ1xyXG5pbXBvcnQgeyB1c2VSZWYgfSBmcm9tICdyZWFjdCdcclxuaW1wb3J0IHsgdXNlRnJhbWUgfSBmcm9tICdAcmVhY3QtdGhyZWUvZmliZXInXHJcblxyXG5leHBvcnQgZGVmYXVsdCBmdW5jdGlvbiBDYW1lcmEoKSB7XHJcblxyXG4gICAgY29uc3QgY2FtZXJhUmVmID0gdXNlUmVmKClcclxudXNlRnJhbWVcclxuICAgIHVzZUZyYW1lKCgpID0+IHtcclxuICAgICAgICBjYW1lcmFSZWYuY3VycmVudC5yb3RhdGlvbi54ICs9IDAuMDAxXHJcbiAgICB9KVxyXG5cclxuICAgIHJldHVybiAoXHJcbiAgICAgICAgPFBlcnNwZWN0aXZlQ2FtZXJhIHJlZj17Y2FtZXJhUmVmfSBtYWtlRGVmYXVsdCBwb3NpdGlvbj17WzAsIDAuMywgMS43XX0gZm92PXs3NX0gLz5cclxuICAgIClcclxufVxyXG4iXSwibmFtZXMiOlsiUmVhY3QiLCJQZXJzcGVjdGl2ZUNhbWVyYSIsInVzZVJlZiIsInVzZUZyYW1lIiwiQ2FtZXJhIiwiY2FtZXJhUmVmIiwiY3VycmVudCIsInJvdGF0aW9uIiwieCIsInJlZiIsIm1ha2VEZWZhdWx0IiwicG9zaXRpb24iLCJmb3YiXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///./components/Camera.js\n");

/***/ })

});