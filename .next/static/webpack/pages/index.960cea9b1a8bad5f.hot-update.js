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

/***/ "./components/Animation.js":
/*!*********************************!*\
  !*** ./components/Animation.js ***!
  \*********************************/
/***/ (function(module, __webpack_exports__, __webpack_require__) {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": function() { return /* binding */ Animation; }\n/* harmony export */ });\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"./node_modules/react/jsx-dev-runtime.js\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var _react_spring_three__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @react-spring/three */ \"./node_modules/@react-spring/three/dist/react-spring-three.esm.js\");\n/* harmony import */ var _react_three_fiber__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @react-three/fiber */ \"./node_modules/@react-three/fiber/dist/react-three-fiber.esm.js\");\n/* harmony import */ var three__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! three */ \"./node_modules/three/build/three.module.js\");\n\n\n\n\n\nvar _s = $RefreshSig$();\nfunction Animation() {\n    _s();\n    var boton1 = (0,react__WEBPACK_IMPORTED_MODULE_1__.useRef)();\n    var boton2 = (0,react__WEBPACK_IMPORTED_MODULE_1__.useRef)();\n    var boton3 = (0,react__WEBPACK_IMPORTED_MODULE_1__.useRef)();\n    var boton4 = (0,react__WEBPACK_IMPORTED_MODULE_1__.useRef)();\n    var ref = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(false), active = ref[0], setActive = ref[1];\n    var ref1 = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(false), clicked = ref1[0], setClicked = ref1[1];\n    var scale = (0,_react_spring_three__WEBPACK_IMPORTED_MODULE_2__.useSpring)({\n        scale: active ? 1.5 : 0.5\n    }).scale;\n    var vec = new three__WEBPACK_IMPORTED_MODULE_3__.Vector3();\n    /* useFrame(({clock})=>{\r\n        const time= clock.getElapsedTime()\r\n        prueba.current.rotation.x=time;\r\n    }) */ usefra;\n    (0,_react_three_fiber__WEBPACK_IMPORTED_MODULE_4__.useFrame)(function(state) {\n        var el = document.createElement(\"div\");\n        if (clicked) {\n            state.camera.lookAt(boton1.current.position);\n            state.camera.position.lerp(vec.set(0, 1, 1), 0.1);\n            state.camera.updateProjectionMatrix();\n        } else {\n            state.camera.lookAt(boton1.current.position);\n            state.camera.position.lerp(vec.set(0, 2, 4), 0.1);\n            state.camera.updateProjectionMatrix();\n        }\n    });\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.Fragment, {\n        children: [\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_react_spring_three__WEBPACK_IMPORTED_MODULE_2__.animated.mesh, {\n                ref: boton1,\n                onClick: function() {\n                    return setClicked(!clicked);\n                },\n                children: [\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"boxGeometry\", {}, void 0, false, {\n                        fileName: \"C:\\\\Users\\\\Hogar\\\\Desktop\\\\programacion\\\\nextjs-cv\\\\components\\\\Animation.js\",\n                        lineNumber: 43,\n                        columnNumber: 17\n                    }, this),\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"meshPhongMaterial\", {\n                        color: \"royalblue\"\n                    }, void 0, false, {\n                        fileName: \"C:\\\\Users\\\\Hogar\\\\Desktop\\\\programacion\\\\nextjs-cv\\\\components\\\\Animation.js\",\n                        lineNumber: 44,\n                        columnNumber: 17\n                    }, this)\n                ]\n            }, void 0, true, {\n                fileName: \"C:\\\\Users\\\\Hogar\\\\Desktop\\\\programacion\\\\nextjs-cv\\\\components\\\\Animation.js\",\n                lineNumber: 42,\n                columnNumber: 13\n            }, this),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_react_spring_three__WEBPACK_IMPORTED_MODULE_2__.animated.mesh, {\n                position: [\n                    1,\n                    0,\n                    2\n                ],\n                scale: scale,\n                onClick: function() {\n                    return setActive(!active);\n                },\n                ref: boton2,\n                children: [\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"boxGeometry\", {}, void 0, false, {\n                        fileName: \"C:\\\\Users\\\\Hogar\\\\Desktop\\\\programacion\\\\nextjs-cv\\\\components\\\\Animation.js\",\n                        lineNumber: 47,\n                        columnNumber: 17\n                    }, this),\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"meshPhongMaterial\", {\n                        color: \"royalblue\"\n                    }, void 0, false, {\n                        fileName: \"C:\\\\Users\\\\Hogar\\\\Desktop\\\\programacion\\\\nextjs-cv\\\\components\\\\Animation.js\",\n                        lineNumber: 48,\n                        columnNumber: 17\n                    }, this)\n                ]\n            }, void 0, true, {\n                fileName: \"C:\\\\Users\\\\Hogar\\\\Desktop\\\\programacion\\\\nextjs-cv\\\\components\\\\Animation.js\",\n                lineNumber: 46,\n                columnNumber: 13\n            }, this),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_react_spring_three__WEBPACK_IMPORTED_MODULE_2__.animated.mesh, {\n                position: [\n                    -3,\n                    0,\n                    -3\n                ],\n                scale: scale,\n                onClick: function() {\n                    return setActive(!active);\n                },\n                ref: boton3,\n                children: [\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"boxGeometry\", {}, void 0, false, {\n                        fileName: \"C:\\\\Users\\\\Hogar\\\\Desktop\\\\programacion\\\\nextjs-cv\\\\components\\\\Animation.js\",\n                        lineNumber: 51,\n                        columnNumber: 17\n                    }, this),\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"meshPhongMaterial\", {\n                        color: \"royalblue\"\n                    }, void 0, false, {\n                        fileName: \"C:\\\\Users\\\\Hogar\\\\Desktop\\\\programacion\\\\nextjs-cv\\\\components\\\\Animation.js\",\n                        lineNumber: 52,\n                        columnNumber: 17\n                    }, this)\n                ]\n            }, void 0, true, {\n                fileName: \"C:\\\\Users\\\\Hogar\\\\Desktop\\\\programacion\\\\nextjs-cv\\\\components\\\\Animation.js\",\n                lineNumber: 50,\n                columnNumber: 13\n            }, this),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_react_spring_three__WEBPACK_IMPORTED_MODULE_2__.animated.mesh, {\n                position: [\n                    2,\n                    0,\n                    2\n                ],\n                scale: scale,\n                onClick: function() {\n                    return setActive(!active);\n                },\n                ref: boton4,\n                children: [\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"boxGeometry\", {}, void 0, false, {\n                        fileName: \"C:\\\\Users\\\\Hogar\\\\Desktop\\\\programacion\\\\nextjs-cv\\\\components\\\\Animation.js\",\n                        lineNumber: 55,\n                        columnNumber: 17\n                    }, this),\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"meshPhongMaterial\", {\n                        color: \"royalblue\"\n                    }, void 0, false, {\n                        fileName: \"C:\\\\Users\\\\Hogar\\\\Desktop\\\\programacion\\\\nextjs-cv\\\\components\\\\Animation.js\",\n                        lineNumber: 56,\n                        columnNumber: 17\n                    }, this)\n                ]\n            }, void 0, true, {\n                fileName: \"C:\\\\Users\\\\Hogar\\\\Desktop\\\\programacion\\\\nextjs-cv\\\\components\\\\Animation.js\",\n                lineNumber: 54,\n                columnNumber: 13\n            }, this)\n        ]\n    }, void 0, true);\n};\n_s(Animation, \"tJ38GMMgyZXi4nhSsRJ2YYxYYGg=\", false, function() {\n    return [\n        _react_spring_three__WEBPACK_IMPORTED_MODULE_2__.useSpring,\n        _react_three_fiber__WEBPACK_IMPORTED_MODULE_4__.useFrame\n    ];\n});\n_c = Animation;\nvar _c;\n$RefreshReg$(_c, \"Animation\");\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports on update so we can compare the boundary\n                // signatures.\n                module.hot.dispose(function (data) {\n                    data.prevExports = currentExports;\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevExports !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevExports !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9jb21wb25lbnRzL0FuaW1hdGlvbi5qcy5qcyIsIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7OztBQUFBO0FBQXdDO0FBQ2lCO0FBQ1Q7QUFDbEI7O0FBRWYsU0FBU00sU0FBUyxHQUFHOztJQUNoQyxJQUFNQyxNQUFNLEdBQUdQLDZDQUFNLEVBQUU7SUFDdkIsSUFBTVEsTUFBTSxHQUFHUiw2Q0FBTSxFQUFFO0lBQ3ZCLElBQU1TLE1BQU0sR0FBR1QsNkNBQU0sRUFBRTtJQUN2QixJQUFNVSxNQUFNLEdBQUdWLDZDQUFNLEVBQUU7SUFDdkIsSUFBNEJDLEdBQWUsR0FBZkEsK0NBQVEsQ0FBQyxLQUFLLENBQUMsRUFWL0MsTUFVaUIsR0FBZUEsR0FBZSxHQUE5QixFQVZqQixTQVU0QixHQUFJQSxHQUFlLEdBQW5CO0lBQ3hCLElBQThCQSxJQUFlLEdBQWZBLCtDQUFRLENBQUMsS0FBSyxDQUFDLEVBWGpELE9BV2tCLEdBQWdCQSxJQUFlLEdBQS9CLEVBWGxCLFVBVzhCLEdBQUlBLElBQWUsR0FBbkI7SUFDMUIsSUFBTSxLQUFPLEdBQUtDLDhEQUFTLENBQUM7UUFBRWEsS0FBSyxFQUFFSixNQUFNLEdBQUcsR0FBRyxHQUFHLEdBQUc7S0FBRSxDQUFDLENBQWxESSxLQUFLO0lBQ2IsSUFBTUMsR0FBRyxHQUFHLElBQUlYLDBDQUFhLEVBQUU7SUFFL0I7SUFPQUQsUUFBUSxDQUFDZSxTQUFBQSxLQUFLLEVBQUk7UUFDZCxJQUFNQyxFQUFFLEdBQUNDLFFBQVEsQ0FBQ0MsYUFBYSxDQUFDO1FBQ2hDLElBQUlUO2dFQUVBTSxLQUFLLENBQUNJLE1BQU0sQ0FBQ0M7WUFDYkwsS0FBSyxDQUFDSSxNQUFNLENBQUNHLFFBQVEsQ0FBQ0MsSUFBSSxDQUFDWCxHQUFHLENBQUNZLEdBQUcsQ0FBQztZQUNuQ1QsS0FBSyxDQUFDSTtTQUdULE1BQU07WUFDSEosS0FBSyxDQUFDSSxNQUFNLENBQUNDLE1BQU0sQ0FBQ2pCLE1BQU0sQ0FBQ2tCLE9BQU8sQ0FBQ0MsUUFBUSxDQUFDO1lBQzVDUCxLQUFLLENBQUNJLE1BQU0sQ0FBQ0csUUFBUSxDQUFDQyxJQUFJLENBQUNYLEdBQUcsQ0FBQ1ksR0FBRyxDQUFDLENBQUMsRUFBRTtZQUN0Q1Q7U0FFSDtLQUNKLENBQUM7SUFFRixxQkFDSTs7O2dCQUNtQlksR0FBRyxFQUFFeEIsSUFBQUEsNkRBQU07Z0JBQUV5Qjt1RkFBZWxCLENBQUFBLDhEQUFvQjtpQkFBQTs7a0NBQzNELFFBQUNtQjs7Ozs0QkFBYztrQ0FDZjt3QkFBbUJFLEtBQUssRUFBQzs7Ozs7NEJBQWM7Ozs7OztvQkFDM0I7MEJBQ2hCO2dCQUFlVCxRQUFRLEVBQUU7QUFBQyxxQkFBQztBQUFFLHFCQUFDO0FBQUUscUJBQUM7aUJBQUM7Z0JBQUVYLEtBQUs7Z0JBQVNpQjs7aUJBQWlDO2dCQUFFRCxHQUFHLEVBQUV2QixNQUFNOzs7Ozs7NEJBQzdFO2tDQUNmO3dCQUFtQjJCLEtBQUssRUFBQzs7Ozs7NEJBQWM7Ozs7OztvQkFDM0I7MEJBQ2hCO2dCQUFlVCxRQUFRLEVBQUU7b0JBQUMsQ0FBQztBQUFHLHFCQUFDO29CQUFFLENBQUMsQ0FBQztpQkFBQztnQkFBRVgsS0FBSztnQkFBU2lCOztpQkFBaUM7Z0JBQUVELEdBQUcsRUFBRXRCLE1BQU07Ozs7Ozs0QkFDL0U7a0NBQ2Y7d0JBQW1CMEIsS0FBSyxFQUFDOzs7Ozs0QkFBYzs7Ozs7O29CQUMzQjswQkFDaEI7Z0JBQWVULFFBQVEsRUFBRTtBQUFDLHFCQUFDO0FBQUUscUJBQUM7QUFBRSxxQkFBQztpQkFBQztnQkFBRVgsS0FBSztnQkFBU2lCOztpQkFBaUM7Z0JBQUVELEdBQUcsRUFBRXJCLE1BQU07Ozs7Ozs0QkFDN0U7a0NBQ2Y7d0JBQW1CeUIsS0FBSyxFQUFDOzs7Ozs0QkFBYzs7Ozs7O29CQUMzQjs7b0JBQ2pCLENBQ047Q0FDSjtHQXREdUI3Qjs7O1FBaUJwQkYsUUFBUTs7O0FBakJZRSxLQUFBQSxHQUFBQSx3REFBUyIsInNvdXJjZXMiOlsid2VicGFjazovL19OX0UvLi9jb21wb25lbnRzL0FuaW1hdGlvbi5qcz9mMjA5Il0sInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IHVzZVJlZiwgdXNlU3RhdGUgfSBmcm9tICdyZWFjdCdcclxuaW1wb3J0IHsgdXNlU3ByaW5nLCBhbmltYXRlZCB9IGZyb20gJ0ByZWFjdC1zcHJpbmcvdGhyZWUnXHJcbmltcG9ydCB7IHVzZUZyYW1lLCAgfSBmcm9tICdAcmVhY3QtdGhyZWUvZmliZXInO1xyXG5pbXBvcnQgKiBhcyBUUkhFRSBmcm9tICd0aHJlZSdcclxuXHJcbmV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIEFuaW1hdGlvbigpIHtcclxuICAgIGNvbnN0IGJvdG9uMSA9IHVzZVJlZigpO1xyXG4gICAgY29uc3QgYm90b24yID0gdXNlUmVmKCk7XHJcbiAgICBjb25zdCBib3RvbjMgPSB1c2VSZWYoKTtcclxuICAgIGNvbnN0IGJvdG9uNCA9IHVzZVJlZigpO1xyXG4gICAgY29uc3QgW2FjdGl2ZSwgc2V0QWN0aXZlXSA9IHVzZVN0YXRlKGZhbHNlKVxyXG4gICAgY29uc3QgW2NsaWNrZWQsIHNldENsaWNrZWRdID0gdXNlU3RhdGUoZmFsc2UpXHJcbiAgICBjb25zdCB7IHNjYWxlIH0gPSB1c2VTcHJpbmcoeyBzY2FsZTogYWN0aXZlID8gMS41IDogMC41IH0pXHJcbiAgICBjb25zdCB2ZWMgPSBuZXcgVFJIRUUuVmVjdG9yMygpXHJcblxyXG4gICAgLyogdXNlRnJhbWUoKHtjbG9ja30pPT57XHJcbiAgICAgICAgY29uc3QgdGltZT0gY2xvY2suZ2V0RWxhcHNlZFRpbWUoKVxyXG4gICAgICAgIHBydWViYS5jdXJyZW50LnJvdGF0aW9uLng9dGltZTtcclxuICAgIH0pICovXHJcblxyXG5cclxuICAgIHVzZWZyYVxyXG4gICAgdXNlRnJhbWUoc3RhdGUgPT4ge1xyXG4gICAgICAgIGNvbnN0IGVsPWRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpO1xyXG4gICAgICAgIGlmIChjbGlja2VkKSB7XHJcbiAgICAgICAgICAgIFxyXG4gICAgICAgICAgICBzdGF0ZS5jYW1lcmEubG9va0F0KGJvdG9uMS5jdXJyZW50LnBvc2l0aW9uKVxyXG4gICAgICAgICAgICBzdGF0ZS5jYW1lcmEucG9zaXRpb24ubGVycCh2ZWMuc2V0KDAsIDEsIDEpLCAwLjEpXHJcbiAgICAgICAgICAgIHN0YXRlLmNhbWVyYS51cGRhdGVQcm9qZWN0aW9uTWF0cml4KCkgICAgIFxyXG4gICAgICAgICAgICBcclxuXHJcbiAgICAgICAgfSBlbHNlIHtcclxuICAgICAgICAgICAgc3RhdGUuY2FtZXJhLmxvb2tBdChib3RvbjEuY3VycmVudC5wb3NpdGlvbilcclxuICAgICAgICAgICAgc3RhdGUuY2FtZXJhLnBvc2l0aW9uLmxlcnAodmVjLnNldCgwLCAyLCA0KSwgMC4xKVxyXG4gICAgICAgICAgICBzdGF0ZS5jYW1lcmEudXBkYXRlUHJvamVjdGlvbk1hdHJpeCgpXHJcblxyXG4gICAgICAgIH1cclxuICAgIH0pXHJcblxyXG4gICAgcmV0dXJuIChcclxuICAgICAgICA8PlxyXG4gICAgICAgICAgICA8YW5pbWF0ZWQubWVzaCByZWY9e2JvdG9uMX0gb25DbGljaz17KCkgPT4gc2V0Q2xpY2tlZCghY2xpY2tlZCl9PlxyXG4gICAgICAgICAgICAgICAgPGJveEdlb21ldHJ5IC8+XHJcbiAgICAgICAgICAgICAgICA8bWVzaFBob25nTWF0ZXJpYWwgY29sb3I9XCJyb3lhbGJsdWVcIiAvPlxyXG4gICAgICAgICAgICA8L2FuaW1hdGVkLm1lc2g+XHJcbiAgICAgICAgICAgIDxhbmltYXRlZC5tZXNoIHBvc2l0aW9uPXtbMSwgMCwgMl19IHNjYWxlPXtzY2FsZX0gb25DbGljaz17KCkgPT4gc2V0QWN0aXZlKCFhY3RpdmUpfSByZWY9e2JvdG9uMn0+XHJcbiAgICAgICAgICAgICAgICA8Ym94R2VvbWV0cnkgLz5cclxuICAgICAgICAgICAgICAgIDxtZXNoUGhvbmdNYXRlcmlhbCBjb2xvcj1cInJveWFsYmx1ZVwiIC8+XHJcbiAgICAgICAgICAgIDwvYW5pbWF0ZWQubWVzaD5cclxuICAgICAgICAgICAgPGFuaW1hdGVkLm1lc2ggcG9zaXRpb249e1stMywgMCwgLTNdfSBzY2FsZT17c2NhbGV9IG9uQ2xpY2s9eygpID0+IHNldEFjdGl2ZSghYWN0aXZlKX0gcmVmPXtib3RvbjN9PlxyXG4gICAgICAgICAgICAgICAgPGJveEdlb21ldHJ5IC8+XHJcbiAgICAgICAgICAgICAgICA8bWVzaFBob25nTWF0ZXJpYWwgY29sb3I9XCJyb3lhbGJsdWVcIiAvPlxyXG4gICAgICAgICAgICA8L2FuaW1hdGVkLm1lc2g+XHJcbiAgICAgICAgICAgIDxhbmltYXRlZC5tZXNoIHBvc2l0aW9uPXtbMiwgMCwgMl19IHNjYWxlPXtzY2FsZX0gb25DbGljaz17KCkgPT4gc2V0QWN0aXZlKCFhY3RpdmUpfSByZWY9e2JvdG9uNH0+XHJcbiAgICAgICAgICAgICAgICA8Ym94R2VvbWV0cnkgLz5cclxuICAgICAgICAgICAgICAgIDxtZXNoUGhvbmdNYXRlcmlhbCBjb2xvcj1cInJveWFsYmx1ZVwiIC8+XHJcbiAgICAgICAgICAgIDwvYW5pbWF0ZWQubWVzaD5cclxuICAgICAgICA8Lz5cclxuICAgIClcclxufVxyXG4iXSwibmFtZXMiOlsidXNlUmVmIiwidXNlU3RhdGUiLCJ1c2VTcHJpbmciLCJhbmltYXRlZCIsInVzZUZyYW1lIiwiVFJIRUUiLCJBbmltYXRpb24iLCJib3RvbjEiLCJib3RvbjIiLCJib3RvbjMiLCJib3RvbjQiLCJhY3RpdmUiLCJzZXRBY3RpdmUiLCJjbGlja2VkIiwic2V0Q2xpY2tlZCIsInNjYWxlIiwidmVjIiwiVmVjdG9yMyIsInVzZWZyYSIsInN0YXRlIiwiZWwiLCJkb2N1bWVudCIsImNyZWF0ZUVsZW1lbnQiLCJjYW1lcmEiLCJsb29rQXQiLCJjdXJyZW50IiwicG9zaXRpb24iLCJsZXJwIiwic2V0IiwidXBkYXRlUHJvamVjdGlvbk1hdHJpeCIsIm1lc2giLCJyZWYiLCJvbkNsaWNrIiwiYm94R2VvbWV0cnkiLCJtZXNoUGhvbmdNYXRlcmlhbCIsImNvbG9yIl0sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///./components/Animation.js\n");

/***/ })

});