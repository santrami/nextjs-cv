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

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": function() { return /* binding */ Animation; }\n/* harmony export */ });\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"./node_modules/react/jsx-dev-runtime.js\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var _react_spring_three__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @react-spring/three */ \"./node_modules/@react-spring/three/dist/react-spring-three.esm.js\");\n/* harmony import */ var _react_three_fiber__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @react-three/fiber */ \"./node_modules/@react-three/fiber/dist/react-three-fiber.esm.js\");\n/* harmony import */ var three__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! three */ \"./node_modules/three/build/three.module.js\");\n/* harmony import */ var _react_three_drei__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @react-three/drei */ \"./node_modules/@react-three/drei/index.js\");\n\n\n\n\n\n\nvar _s = $RefreshSig$();\nfunction Animation() {\n    var Box = function Box(opacity) {\n        return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"mesh\", {\n            transparent: true,\n            scale: 1,\n            opacity: opacity,\n            children: [\n                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"circleGeometry\", {\n                    args: [\n                        1,\n                        32,\n                        32\n                    ]\n                }, void 0, false, {\n                    fileName: \"C:\\\\Users\\\\Hogar\\\\Desktop\\\\programacion\\\\nextjs-cv\\\\components\\\\Animation.js\",\n                    lineNumber: 43,\n                    columnNumber: 13\n                }, this),\n                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"meshStandardMaterial\", {\n                    color: \"#ffff00\"\n                }, void 0, false, {\n                    fileName: \"C:\\\\Users\\\\Hogar\\\\Desktop\\\\programacion\\\\nextjs-cv\\\\components\\\\Animation.js\",\n                    lineNumber: 44,\n                    columnNumber: 13\n                }, this),\n                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_react_three_drei__WEBPACK_IMPORTED_MODULE_3__.Html, {\n                    distanceFactor: 1.5,\n                    position: [\n                        0,\n                        0,\n                        0.51\n                    ],\n                    children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"span\", {\n                        children: \"Size\"\n                    }, void 0, false, {\n                        fileName: \"C:\\\\Users\\\\Hogar\\\\Desktop\\\\programacion\\\\nextjs-cv\\\\components\\\\Animation.js\",\n                        lineNumber: 49,\n                        columnNumber: 15\n                    }, this)\n                }, void 0, false, {\n                    fileName: \"C:\\\\Users\\\\Hogar\\\\Desktop\\\\programacion\\\\nextjs-cv\\\\components\\\\Animation.js\",\n                    lineNumber: 45,\n                    columnNumber: 13\n                }, this)\n            ]\n        }, void 0, true, {\n            fileName: \"C:\\\\Users\\\\Hogar\\\\Desktop\\\\programacion\\\\nextjs-cv\\\\components\\\\Animation.js\",\n            lineNumber: 42,\n            columnNumber: 11\n        }, this);\n    };\n    _s();\n    var boton1 = (0,react__WEBPACK_IMPORTED_MODULE_1__.useRef)();\n    var boton2 = (0,react__WEBPACK_IMPORTED_MODULE_1__.useRef)();\n    var boton3 = (0,react__WEBPACK_IMPORTED_MODULE_1__.useRef)();\n    var boton4 = (0,react__WEBPACK_IMPORTED_MODULE_1__.useRef)();\n    var ref = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(false), active = ref[0], setActive = ref[1];\n    var ref1 = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(false), clicked = ref1[0], setClicked = ref1[1];\n    var ref2 = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(0), opacity1 = ref2[0], setOpacity = ref2[1];\n    var scale = (0,_react_spring_three__WEBPACK_IMPORTED_MODULE_2__.useSpring)({\n        scale: active ? 1.5 : 0.5\n    }).scale;\n    var vec = new three__WEBPACK_IMPORTED_MODULE_4__.Vector3();\n    /* useFrame(({clock})=>{\r\n        const time= clock.getElapsedTime()\r\n        prueba.current.rotation.x=time;\r\n    }) */ var ref3 = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(false), item = ref3.item, setItem = ref3.setItem;\n    (0,_react_three_fiber__WEBPACK_IMPORTED_MODULE_5__.useFrame)(function(state) {\n        var el = document.createElement(\"div\");\n        if (clicked) {\n            state.camera.lookAt(boton1.current.position);\n            state.camera.position.lerp(vec.set(0, 1, 5), 0.1);\n            state.camera.updateProjectionMatrix();\n        } else {\n            state.camera.lookAt(boton1.current.position);\n            state.camera.position.lerp(vec.set(0, 2, 10), 0.1);\n            state.camera.updateProjectionMatrix();\n        }\n    });\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.Fragment, {\n        children: [\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(Box, {\n                opacity: opacity1\n            }, void 0, false, {\n                fileName: \"C:\\\\Users\\\\Hogar\\\\Desktop\\\\programacion\\\\nextjs-cv\\\\components\\\\Animation.js\",\n                lineNumber: 56,\n                columnNumber: 13\n            }, this),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_react_spring_three__WEBPACK_IMPORTED_MODULE_2__.animated.mesh, {\n                ref: boton1,\n                onClick: function() {\n                    return setClicked(!clicked);\n                },\n                children: [\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"boxGeometry\", {}, void 0, false, {\n                        fileName: \"C:\\\\Users\\\\Hogar\\\\Desktop\\\\programacion\\\\nextjs-cv\\\\components\\\\Animation.js\",\n                        lineNumber: 58,\n                        columnNumber: 17\n                    }, this),\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"meshPhongMaterial\", {\n                        color: \"royalblue\"\n                    }, void 0, false, {\n                        fileName: \"C:\\\\Users\\\\Hogar\\\\Desktop\\\\programacion\\\\nextjs-cv\\\\components\\\\Animation.js\",\n                        lineNumber: 59,\n                        columnNumber: 17\n                    }, this)\n                ]\n            }, void 0, true, {\n                fileName: \"C:\\\\Users\\\\Hogar\\\\Desktop\\\\programacion\\\\nextjs-cv\\\\components\\\\Animation.js\",\n                lineNumber: 57,\n                columnNumber: 13\n            }, this),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_react_spring_three__WEBPACK_IMPORTED_MODULE_2__.animated.mesh, {\n                position: [\n                    -1,\n                    1,\n                    2\n                ],\n                scale: scale,\n                onClick: function() {\n                    return setActive(!active);\n                },\n                ref: boton2,\n                children: [\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"boxGeometry\", {}, void 0, false, {\n                        fileName: \"C:\\\\Users\\\\Hogar\\\\Desktop\\\\programacion\\\\nextjs-cv\\\\components\\\\Animation.js\",\n                        lineNumber: 62,\n                        columnNumber: 17\n                    }, this),\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"meshPhongMaterial\", {\n                        color: \"royalblue\"\n                    }, void 0, false, {\n                        fileName: \"C:\\\\Users\\\\Hogar\\\\Desktop\\\\programacion\\\\nextjs-cv\\\\components\\\\Animation.js\",\n                        lineNumber: 63,\n                        columnNumber: 17\n                    }, this)\n                ]\n            }, void 0, true, {\n                fileName: \"C:\\\\Users\\\\Hogar\\\\Desktop\\\\programacion\\\\nextjs-cv\\\\components\\\\Animation.js\",\n                lineNumber: 61,\n                columnNumber: 13\n            }, this),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_react_spring_three__WEBPACK_IMPORTED_MODULE_2__.animated.mesh, {\n                position: [\n                    1,\n                    1,\n                    2\n                ],\n                scale: scale,\n                onClick: function() {\n                    return setActive(!active);\n                },\n                ref: boton3,\n                children: [\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"boxGeometry\", {}, void 0, false, {\n                        fileName: \"C:\\\\Users\\\\Hogar\\\\Desktop\\\\programacion\\\\nextjs-cv\\\\components\\\\Animation.js\",\n                        lineNumber: 66,\n                        columnNumber: 17\n                    }, this),\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"meshPhongMaterial\", {\n                        color: \"royalblue\"\n                    }, void 0, false, {\n                        fileName: \"C:\\\\Users\\\\Hogar\\\\Desktop\\\\programacion\\\\nextjs-cv\\\\components\\\\Animation.js\",\n                        lineNumber: 67,\n                        columnNumber: 17\n                    }, this)\n                ]\n            }, void 0, true, {\n                fileName: \"C:\\\\Users\\\\Hogar\\\\Desktop\\\\programacion\\\\nextjs-cv\\\\components\\\\Animation.js\",\n                lineNumber: 65,\n                columnNumber: 13\n            }, this),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_react_spring_three__WEBPACK_IMPORTED_MODULE_2__.animated.mesh, {\n                position: [\n                    3,\n                    0,\n                    1\n                ],\n                scale: scale,\n                onClick: function() {\n                    return setActive(!active);\n                },\n                ref: boton4,\n                children: [\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"boxGeometry\", {}, void 0, false, {\n                        fileName: \"C:\\\\Users\\\\Hogar\\\\Desktop\\\\programacion\\\\nextjs-cv\\\\components\\\\Animation.js\",\n                        lineNumber: 70,\n                        columnNumber: 17\n                    }, this),\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"meshPhongMaterial\", {\n                        color: \"royalblue\"\n                    }, void 0, false, {\n                        fileName: \"C:\\\\Users\\\\Hogar\\\\Desktop\\\\programacion\\\\nextjs-cv\\\\components\\\\Animation.js\",\n                        lineNumber: 71,\n                        columnNumber: 17\n                    }, this)\n                ]\n            }, void 0, true, {\n                fileName: \"C:\\\\Users\\\\Hogar\\\\Desktop\\\\programacion\\\\nextjs-cv\\\\components\\\\Animation.js\",\n                lineNumber: 69,\n                columnNumber: 13\n            }, this),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_react_spring_three__WEBPACK_IMPORTED_MODULE_2__.animated.mesh, {\n                position: [\n                    2,\n                    0,\n                    -1\n                ],\n                scale: scale,\n                onClick: function() {\n                    return setActive(!active);\n                },\n                ref: boton4,\n                children: [\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"boxGeometry\", {}, void 0, false, {\n                        fileName: \"C:\\\\Users\\\\Hogar\\\\Desktop\\\\programacion\\\\nextjs-cv\\\\components\\\\Animation.js\",\n                        lineNumber: 74,\n                        columnNumber: 17\n                    }, this),\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"meshPhongMaterial\", {\n                        color: \"royalblue\"\n                    }, void 0, false, {\n                        fileName: \"C:\\\\Users\\\\Hogar\\\\Desktop\\\\programacion\\\\nextjs-cv\\\\components\\\\Animation.js\",\n                        lineNumber: 75,\n                        columnNumber: 17\n                    }, this)\n                ]\n            }, void 0, true, {\n                fileName: \"C:\\\\Users\\\\Hogar\\\\Desktop\\\\programacion\\\\nextjs-cv\\\\components\\\\Animation.js\",\n                lineNumber: 73,\n                columnNumber: 13\n            }, this)\n        ]\n    }, void 0, true);\n};\n_s(Animation, \"CqEhyMnPYYkmNO2KlIQNQzFzI4w=\", false, function() {\n    return [\n        _react_spring_three__WEBPACK_IMPORTED_MODULE_2__.useSpring,\n        _react_three_fiber__WEBPACK_IMPORTED_MODULE_5__.useFrame\n    ];\n});\n_c = Animation;\nvar _c;\n$RefreshReg$(_c, \"Animation\");\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports on update so we can compare the boundary\n                // signatures.\n                module.hot.dispose(function (data) {\n                    data.prevExports = currentExports;\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevExports !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevExports !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,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QyxDQUFDO0FBQUUscUJBQUM7QUFBRSxxQkFBQztpQkFBQztnQkFBRU4sS0FBSztnQkFBU2dDOztpQkFBaUM7Z0JBQUVELEdBQUcsRUFBRXRCLE1BQU07Ozs7Ozs0QkFDN0U7a0NBQ2Y7d0JBQW1CTCxLQUFLLEVBQUM7Ozs7OzRCQUFjOzs7Ozs7b0JBQzNCOzBCQUNoQjtnQkFBZUUsUUFBUSxFQUFFO0FBQUMscUJBQUM7QUFBRSxxQkFBQztBQUFFLHFCQUFDO2lCQUFDO2dCQUFFTixLQUFLO2dCQUFTZ0M7O2lCQUFpQztnQkFBRUQsR0FBRyxFQUFFckIsTUFBTTs7Ozs7OzRCQUM3RTtrQ0FDZjt3QkFBbUJOLEtBQUssRUFBQzs7Ozs7NEJBQWM7Ozs7OztvQkFDM0I7MEJBQ2hCO2dCQUFlRSxRQUFRLEVBQUU7QUFBQyxxQkFBQztBQUFFLHFCQUFDO0FBQUUscUJBQUM7aUJBQUM7Z0JBQUVOLEtBQUs7Z0JBQVNnQzs7aUJBQWlDO2dCQUFFRCxHQUFHLEVBQUVwQixNQUFNOzs7Ozs7NEJBQzdFO2tDQUNmO3dCQUFtQlAsS0FBSyxFQUFDOzs7Ozs0QkFBYzs7Ozs7O29CQUMzQjswQkFDaEI7Z0JBQWVFLFFBQVEsRUFBRTtBQUFDLHFCQUFDO0FBQUUscUJBQUM7b0JBQUUsQ0FBQyxDQUFDO2lCQUFDO2dCQUFFTixLQUFLO2dCQUFTZ0M7O2lCQUFpQztnQkFBRUQsR0FBRyxFQUFFcEIsTUFBTTs7Ozs7OzRCQUM5RTtrQ0FDZjt3QkFBbUJQLEtBQUssRUFBQzs7Ozs7NEJBQWM7Ozs7OztvQkFDM0I7O29CQUNqQixDQUNOO0NBQ0o7R0F4RXVCVDs7O1FBZ0JwQkgsUUFBUTs7O0FBaEJZRyxLQUFBQSxHQUFBQSx3REFBUyIsInNvdXJjZXMiOlsid2VicGFjazovL19OX0UvLi9jb21wb25lbnRzL0FuaW1hdGlvbi5qcz9mMjA5Il0sInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IHVzZVJlZiwgdXNlU3RhdGUgfSBmcm9tICdyZWFjdCdcclxuaW1wb3J0IHsgdXNlU3ByaW5nLCBhbmltYXRlZCB9IGZyb20gJ0ByZWFjdC1zcHJpbmcvdGhyZWUnXHJcbmltcG9ydCB7IHVzZUZyYW1lLCAgfSBmcm9tICdAcmVhY3QtdGhyZWUvZmliZXInO1xyXG5pbXBvcnQgKiBhcyBUUkhFRSBmcm9tICd0aHJlZSdcclxuaW1wb3J0IHsgSHRtbCB9IGZyb20gJ0ByZWFjdC10aHJlZS9kcmVpJztcclxuXHJcbmV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIEFuaW1hdGlvbigpIHtcclxuICAgIGNvbnN0IGJvdG9uMSA9IHVzZVJlZigpO1xyXG4gICAgY29uc3QgYm90b24yID0gdXNlUmVmKCk7XHJcbiAgICBjb25zdCBib3RvbjMgPSB1c2VSZWYoKTtcclxuICAgIGNvbnN0IGJvdG9uNCA9IHVzZVJlZigpO1xyXG4gICAgY29uc3QgW2FjdGl2ZSwgc2V0QWN0aXZlXSA9IHVzZVN0YXRlKGZhbHNlKVxyXG4gICAgY29uc3QgW2NsaWNrZWQsIHNldENsaWNrZWRdID0gdXNlU3RhdGUoZmFsc2UpXHJcbiAgICBjb25zdFtvcGFjaXR5LCBzZXRPcGFjaXR5XSA9IHVzZVN0YXRlKDApXHJcbiAgICBjb25zdCB7IHNjYWxlIH0gPSB1c2VTcHJpbmcoeyBzY2FsZTogYWN0aXZlID8gMS41IDogMC41IH0pXHJcbiAgICBjb25zdCB2ZWMgPSBuZXcgVFJIRUUuVmVjdG9yMygpXHJcblxyXG4gICAgLyogdXNlRnJhbWUoKHtjbG9ja30pPT57XHJcbiAgICAgICAgY29uc3QgdGltZT0gY2xvY2suZ2V0RWxhcHNlZFRpbWUoKVxyXG4gICAgICAgIHBydWViYS5jdXJyZW50LnJvdGF0aW9uLng9dGltZTtcclxuICAgIH0pICovXHJcbiAgICBjb25zdCB7aXRlbSwgc2V0SXRlbX09dXNlU3RhdGUoZmFsc2UpXHJcbiAgICB1c2VGcmFtZShzdGF0ZSA9PiB7XHJcbiAgICAgICAgY29uc3QgZWw9ZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2Jyk7XHJcbiAgICAgICAgaWYgKGNsaWNrZWQpIHtcclxuICAgICAgICAgICAgXHJcbiAgICAgICAgICAgIHN0YXRlLmNhbWVyYS5sb29rQXQoYm90b24xLmN1cnJlbnQucG9zaXRpb24pXHJcbiAgICAgICAgICAgIHN0YXRlLmNhbWVyYS5wb3NpdGlvbi5sZXJwKHZlYy5zZXQoMCwgMSwgNSksIDAuMSlcclxuICAgICAgICAgICAgc3RhdGUuY2FtZXJhLnVwZGF0ZVByb2plY3Rpb25NYXRyaXgoKSAgICAgXHJcbiAgICAgICAgICAgIFxyXG4gICAgICAgICAgICBcclxuICAgICAgICB9IGVsc2Uge1xyXG4gICAgICAgICAgICBzdGF0ZS5jYW1lcmEubG9va0F0KGJvdG9uMS5jdXJyZW50LnBvc2l0aW9uKVxyXG4gICAgICAgICAgICBzdGF0ZS5jYW1lcmEucG9zaXRpb24ubGVycCh2ZWMuc2V0KDAsIDIsMTApLCAwLjEpXHJcbiAgICAgICAgICAgIHN0YXRlLmNhbWVyYS51cGRhdGVQcm9qZWN0aW9uTWF0cml4KClcclxuICAgICAgICAgICBcclxuICAgICAgICB9XHJcbiAgICAgICAgXHJcbiAgICB9KVxyXG4gICAgZnVuY3Rpb24gQm94KG9wYWNpdHkpIHsgIFxyXG4gICAgICAgIHJldHVybiAoXHJcbiAgICAgICAgICA8bWVzaCB0cmFuc3BhcmVudD17dHJ1ZX0gc2NhbGU9ezF9IG9wYWNpdHk9e29wYWNpdHl9PlxyXG4gICAgICAgICAgICA8Y2lyY2xlR2VvbWV0cnkgYXJncz17WzEsMzIsMzJdfSAvPlxyXG4gICAgICAgICAgICA8bWVzaFN0YW5kYXJkTWF0ZXJpYWwgY29sb3I9e1wiI2ZmZmYwMFwifS8+XHJcbiAgICAgICAgICAgIDxIdG1sICAgICAgICBcclxuICAgICAgICAgICAgICBkaXN0YW5jZUZhY3Rvcj17MS41fVxyXG4gICAgICAgICAgICAgIHBvc2l0aW9uPXtbMCwgMCwgMC41MV19ICAgICAgIFxyXG4gICAgICAgICAgICA+XHJcbiAgICAgICAgICAgICAgPHNwYW4+U2l6ZTwvc3Bhbj5cclxuICAgICAgICAgICAgPC9IdG1sPlxyXG4gICAgICAgICAgPC9tZXNoPlxyXG4gICAgICAgIClcclxuICAgICAgfVxyXG4gICAgcmV0dXJuIChcclxuICAgICAgICA8PiAgXHJcbiAgICAgICAgICAgIDxCb3ggb3BhY2l0eT17b3BhY2l0eX0gLz4gICAgICBcclxuICAgICAgICAgICAgPGFuaW1hdGVkLm1lc2ggcmVmPXtib3RvbjF9IG9uQ2xpY2s9eygpID0+IHNldENsaWNrZWQoIWNsaWNrZWQpfT5cclxuICAgICAgICAgICAgICAgIDxib3hHZW9tZXRyeSAvPlxyXG4gICAgICAgICAgICAgICAgPG1lc2hQaG9uZ01hdGVyaWFsIGNvbG9yPVwicm95YWxibHVlXCIgLz5cclxuICAgICAgICAgICAgPC9hbmltYXRlZC5tZXNoPlxyXG4gICAgICAgICAgICA8YW5pbWF0ZWQubWVzaCBwb3NpdGlvbj17Wy0xLDEsIDJdfSBzY2FsZT17c2NhbGV9IG9uQ2xpY2s9eygpID0+IHNldEFjdGl2ZSghYWN0aXZlKX0gcmVmPXtib3RvbjJ9PlxyXG4gICAgICAgICAgICAgICAgPGJveEdlb21ldHJ5IC8+XHJcbiAgICAgICAgICAgICAgICA8bWVzaFBob25nTWF0ZXJpYWwgY29sb3I9XCJyb3lhbGJsdWVcIiAvPlxyXG4gICAgICAgICAgICA8L2FuaW1hdGVkLm1lc2g+XHJcbiAgICAgICAgICAgIDxhbmltYXRlZC5tZXNoIHBvc2l0aW9uPXtbMSwgMSwgMl19IHNjYWxlPXtzY2FsZX0gb25DbGljaz17KCkgPT4gc2V0QWN0aXZlKCFhY3RpdmUpfSByZWY9e2JvdG9uM30+XHJcbiAgICAgICAgICAgICAgICA8Ym94R2VvbWV0cnkgLz5cclxuICAgICAgICAgICAgICAgIDxtZXNoUGhvbmdNYXRlcmlhbCBjb2xvcj1cInJveWFsYmx1ZVwiIC8+XHJcbiAgICAgICAgICAgIDwvYW5pbWF0ZWQubWVzaD5cclxuICAgICAgICAgICAgPGFuaW1hdGVkLm1lc2ggcG9zaXRpb249e1szLCAwLCAxXX0gc2NhbGU9e3NjYWxlfSBvbkNsaWNrPXsoKSA9PiBzZXRBY3RpdmUoIWFjdGl2ZSl9IHJlZj17Ym90b240fT5cclxuICAgICAgICAgICAgICAgIDxib3hHZW9tZXRyeSAvPlxyXG4gICAgICAgICAgICAgICAgPG1lc2hQaG9uZ01hdGVyaWFsIGNvbG9yPVwicm95YWxibHVlXCIgLz5cclxuICAgICAgICAgICAgPC9hbmltYXRlZC5tZXNoPlxyXG4gICAgICAgICAgICA8YW5pbWF0ZWQubWVzaCBwb3NpdGlvbj17WzIsIDAsIC0xXX0gc2NhbGU9e3NjYWxlfSBvbkNsaWNrPXsoKSA9PiBzZXRBY3RpdmUoIWFjdGl2ZSl9IHJlZj17Ym90b240fT5cclxuICAgICAgICAgICAgICAgIDxib3hHZW9tZXRyeSAvPlxyXG4gICAgICAgICAgICAgICAgPG1lc2hQaG9uZ01hdGVyaWFsIGNvbG9yPVwicm95YWxibHVlXCIgLz5cclxuICAgICAgICAgICAgPC9hbmltYXRlZC5tZXNoPlxyXG4gICAgICAgIDwvPlxyXG4gICAgKVxyXG59XHJcbiJdLCJuYW1lcyI6WyJ1c2VSZWYiLCJ1c2VTdGF0ZSIsInVzZVNwcmluZyIsImFuaW1hdGVkIiwidXNlRnJhbWUiLCJUUkhFRSIsIkh0bWwiLCJBbmltYXRpb24iLCJCb3giLCJvcGFjaXR5IiwibWVzaCIsInRyYW5zcGFyZW50Iiwic2NhbGUiLCJjaXJjbGVHZW9tZXRyeSIsImFyZ3MiLCJtZXNoU3RhbmRhcmRNYXRlcmlhbCIsImNvbG9yIiwiZGlzdGFuY2VGYWN0b3IiLCJwb3NpdGlvbiIsInNwYW4iLCJib3RvbjEiLCJib3RvbjIiLCJib3RvbjMiLCJib3RvbjQiLCJhY3RpdmUiLCJzZXRBY3RpdmUiLCJjbGlja2VkIiwic2V0Q2xpY2tlZCIsInNldE9wYWNpdHkiLCJ2ZWMiLCJWZWN0b3IzIiwiaXRlbSIsInNldEl0ZW0iLCJzdGF0ZSIsImVsIiwiZG9jdW1lbnQiLCJjcmVhdGVFbGVtZW50IiwiY2FtZXJhIiwibG9va0F0IiwiY3VycmVudCIsImxlcnAiLCJzZXQiLCJ1cGRhdGVQcm9qZWN0aW9uTWF0cml4IiwicmVmIiwib25DbGljayIsImJveEdlb21ldHJ5IiwibWVzaFBob25nTWF0ZXJpYWwiXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///./components/Animation.js\n");

/***/ })

});