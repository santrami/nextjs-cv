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

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": function() { return /* binding */ Animation; }\n/* harmony export */ });\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"./node_modules/react/jsx-dev-runtime.js\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var _react_spring_three__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @react-spring/three */ \"./node_modules/@react-spring/three/dist/react-spring-three.esm.js\");\n/* harmony import */ var _react_three_fiber__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @react-three/fiber */ \"./node_modules/@react-three/fiber/dist/react-three-fiber.esm.js\");\n/* harmony import */ var three__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! three */ \"./node_modules/three/build/three.module.js\");\n/* harmony import */ var _react_three_drei__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @react-three/drei */ \"./node_modules/@react-three/drei/index.js\");\n\n\n\n\n\n\nvar _s = $RefreshSig$();\nfunction Animation() {\n    var Box = function Box() {\n        return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"mesh\", {\n            scale: 1.5,\n            children: [\n                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"circleGeometry\", {\n                    args: [\n                        1,\n                        32,\n                        32\n                    ]\n                }, void 0, false, {\n                    fileName: \"C:\\\\Users\\\\Hogar\\\\Desktop\\\\programacion\\\\nextjs-cv\\\\components\\\\Animation.js\",\n                    lineNumber: 43,\n                    columnNumber: 13\n                }, this),\n                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"meshStandardMaterial\", {\n                    transparent: true,\n                    color: \"#ffff00\",\n                    opacity: opacity\n                }, void 0, false, {\n                    fileName: \"C:\\\\Users\\\\Hogar\\\\Desktop\\\\programacion\\\\nextjs-cv\\\\components\\\\Animation.js\",\n                    lineNumber: 44,\n                    columnNumber: 13\n                }, this),\n                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_react_three_drei__WEBPACK_IMPORTED_MODULE_3__.Html, {\n                    distanceFactor: 1.5,\n                    position: [\n                        0,\n                        0,\n                        0.51\n                    ],\n                    children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"span\", {\n                        children: \"Size\"\n                    }, void 0, false, {\n                        fileName: \"C:\\\\Users\\\\Hogar\\\\Desktop\\\\programacion\\\\nextjs-cv\\\\components\\\\Animation.js\",\n                        lineNumber: 49,\n                        columnNumber: 15\n                    }, this)\n                }, void 0, false, {\n                    fileName: \"C:\\\\Users\\\\Hogar\\\\Desktop\\\\programacion\\\\nextjs-cv\\\\components\\\\Animation.js\",\n                    lineNumber: 45,\n                    columnNumber: 13\n                }, this)\n            ]\n        }, void 0, true, {\n            fileName: \"C:\\\\Users\\\\Hogar\\\\Desktop\\\\programacion\\\\nextjs-cv\\\\components\\\\Animation.js\",\n            lineNumber: 42,\n            columnNumber: 11\n        }, this);\n    };\n    _s();\n    var boton1 = (0,react__WEBPACK_IMPORTED_MODULE_1__.useRef)();\n    var boton2 = (0,react__WEBPACK_IMPORTED_MODULE_1__.useRef)();\n    var boton3 = (0,react__WEBPACK_IMPORTED_MODULE_1__.useRef)();\n    var boton4 = (0,react__WEBPACK_IMPORTED_MODULE_1__.useRef)();\n    var ref = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(false), active = ref[0], setActive = ref[1];\n    var ref1 = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(), clicked = ref1[0], setClicked = ref1[1];\n    var ref2 = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(0), opacity = ref2[0], setOpacity = ref2[1];\n    var scale = (0,_react_spring_three__WEBPACK_IMPORTED_MODULE_2__.useSpring)({\n        scale: active ? 1.5 : 0.5\n    }).scale;\n    var vec = new three__WEBPACK_IMPORTED_MODULE_4__.Vector3();\n    /* useFrame(({clock})=>{\r\n        const time= clock.getElapsedTime()\r\n        prueba.current.rotation.x=time;\r\n    }) */ var ref3 = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(false), item = ref3.item, setItem = ref3.setItem;\n    (0,_react_three_fiber__WEBPACK_IMPORTED_MODULE_5__.useFrame)(function(state) {\n        var el = document.createElement(\"div\");\n        if (clicked) {\n            state.camera.lookAt(boton1.current.position);\n            state.camera.position.lerp(vec.set(1, 1, 3), 0.08);\n            state.camera.updateProjectionMatrix();\n        } else {\n            state.camera.lookAt(boton1.current.position);\n            state.camera.position.lerp(vec.set(0, 2, 10), 0.08);\n            state.camera.updateProjectionMatrix();\n        }\n    });\n    var handleClick = function() {\n        setClicked(!clicked);\n        setOpacity(clicked ? 1 : 0);\n    /* if(clicked){\r\n            setOpacity(0)\r\n        }else{\r\n            setTimeout(() => {\r\n                setOpacity(1)\r\n            }, 1000);\r\n        } */ };\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.Fragment, {\n        children: [\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(Box, {}, void 0, false, {\n                fileName: \"C:\\\\Users\\\\Hogar\\\\Desktop\\\\programacion\\\\nextjs-cv\\\\components\\\\Animation.js\",\n                lineNumber: 68,\n                columnNumber: 13\n            }, this),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_react_spring_three__WEBPACK_IMPORTED_MODULE_2__.animated.mesh, {\n                ref: boton1,\n                onClick: handleClick,\n                children: [\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"boxGeometry\", {}, void 0, false, {\n                        fileName: \"C:\\\\Users\\\\Hogar\\\\Desktop\\\\programacion\\\\nextjs-cv\\\\components\\\\Animation.js\",\n                        lineNumber: 70,\n                        columnNumber: 17\n                    }, this),\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"meshPhongMaterial\", {\n                        color: \"royalblue\"\n                    }, void 0, false, {\n                        fileName: \"C:\\\\Users\\\\Hogar\\\\Desktop\\\\programacion\\\\nextjs-cv\\\\components\\\\Animation.js\",\n                        lineNumber: 71,\n                        columnNumber: 17\n                    }, this)\n                ]\n            }, void 0, true, {\n                fileName: \"C:\\\\Users\\\\Hogar\\\\Desktop\\\\programacion\\\\nextjs-cv\\\\components\\\\Animation.js\",\n                lineNumber: 69,\n                columnNumber: 13\n            }, this),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_react_spring_three__WEBPACK_IMPORTED_MODULE_2__.animated.mesh, {\n                position: [\n                    -1,\n                    1,\n                    2\n                ],\n                scale: scale,\n                onClick: function() {\n                    return setActive(!active);\n                },\n                ref: boton2,\n                children: [\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"boxGeometry\", {}, void 0, false, {\n                        fileName: \"C:\\\\Users\\\\Hogar\\\\Desktop\\\\programacion\\\\nextjs-cv\\\\components\\\\Animation.js\",\n                        lineNumber: 74,\n                        columnNumber: 17\n                    }, this),\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"meshPhongMaterial\", {\n                        color: \"royalblue\"\n                    }, void 0, false, {\n                        fileName: \"C:\\\\Users\\\\Hogar\\\\Desktop\\\\programacion\\\\nextjs-cv\\\\components\\\\Animation.js\",\n                        lineNumber: 75,\n                        columnNumber: 17\n                    }, this)\n                ]\n            }, void 0, true, {\n                fileName: \"C:\\\\Users\\\\Hogar\\\\Desktop\\\\programacion\\\\nextjs-cv\\\\components\\\\Animation.js\",\n                lineNumber: 73,\n                columnNumber: 13\n            }, this),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_react_spring_three__WEBPACK_IMPORTED_MODULE_2__.animated.mesh, {\n                position: [\n                    1,\n                    1,\n                    2\n                ],\n                scale: scale,\n                onClick: function() {\n                    return setActive(!active);\n                },\n                ref: boton3,\n                children: [\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"boxGeometry\", {}, void 0, false, {\n                        fileName: \"C:\\\\Users\\\\Hogar\\\\Desktop\\\\programacion\\\\nextjs-cv\\\\components\\\\Animation.js\",\n                        lineNumber: 78,\n                        columnNumber: 17\n                    }, this),\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"meshPhongMaterial\", {\n                        color: \"royalblue\"\n                    }, void 0, false, {\n                        fileName: \"C:\\\\Users\\\\Hogar\\\\Desktop\\\\programacion\\\\nextjs-cv\\\\components\\\\Animation.js\",\n                        lineNumber: 79,\n                        columnNumber: 17\n                    }, this)\n                ]\n            }, void 0, true, {\n                fileName: \"C:\\\\Users\\\\Hogar\\\\Desktop\\\\programacion\\\\nextjs-cv\\\\components\\\\Animation.js\",\n                lineNumber: 77,\n                columnNumber: 13\n            }, this),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_react_spring_three__WEBPACK_IMPORTED_MODULE_2__.animated.mesh, {\n                position: [\n                    3,\n                    0,\n                    1\n                ],\n                scale: scale,\n                onClick: function() {\n                    return setActive(!active);\n                },\n                ref: boton4,\n                children: [\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"boxGeometry\", {}, void 0, false, {\n                        fileName: \"C:\\\\Users\\\\Hogar\\\\Desktop\\\\programacion\\\\nextjs-cv\\\\components\\\\Animation.js\",\n                        lineNumber: 82,\n                        columnNumber: 17\n                    }, this),\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"meshPhongMaterial\", {\n                        color: \"royalblue\"\n                    }, void 0, false, {\n                        fileName: \"C:\\\\Users\\\\Hogar\\\\Desktop\\\\programacion\\\\nextjs-cv\\\\components\\\\Animation.js\",\n                        lineNumber: 83,\n                        columnNumber: 17\n                    }, this)\n                ]\n            }, void 0, true, {\n                fileName: \"C:\\\\Users\\\\Hogar\\\\Desktop\\\\programacion\\\\nextjs-cv\\\\components\\\\Animation.js\",\n                lineNumber: 81,\n                columnNumber: 13\n            }, this),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_react_spring_three__WEBPACK_IMPORTED_MODULE_2__.animated.mesh, {\n                position: [\n                    2,\n                    0,\n                    -1\n                ],\n                scale: scale,\n                onClick: function() {\n                    return setActive(!active);\n                },\n                ref: boton4,\n                children: [\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"boxGeometry\", {}, void 0, false, {\n                        fileName: \"C:\\\\Users\\\\Hogar\\\\Desktop\\\\programacion\\\\nextjs-cv\\\\components\\\\Animation.js\",\n                        lineNumber: 86,\n                        columnNumber: 17\n                    }, this),\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"meshPhongMaterial\", {\n                        color: \"royalblue\"\n                    }, void 0, false, {\n                        fileName: \"C:\\\\Users\\\\Hogar\\\\Desktop\\\\programacion\\\\nextjs-cv\\\\components\\\\Animation.js\",\n                        lineNumber: 87,\n                        columnNumber: 17\n                    }, this)\n                ]\n            }, void 0, true, {\n                fileName: \"C:\\\\Users\\\\Hogar\\\\Desktop\\\\programacion\\\\nextjs-cv\\\\components\\\\Animation.js\",\n                lineNumber: 85,\n                columnNumber: 13\n            }, this)\n        ]\n    }, void 0, true);\n};\n_s(Animation, \"7iULUgPY4LzPW2v4gXVs6ur9Pdw=\", false, function() {\n    return [\n        _react_spring_three__WEBPACK_IMPORTED_MODULE_2__.useSpring,\n        _react_three_fiber__WEBPACK_IMPORTED_MODULE_5__.useFrame\n    ];\n});\n_c = Animation;\nvar _c;\n$RefreshReg$(_c, \"Animation\");\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports on update so we can compare the boundary\n                // signatures.\n                module.hot.dispose(function (data) {\n                    data.prevExports = currentExports;\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevExports !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevExports !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,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QUFFUixLQUFLLEVBQUVBLEtBQUs7Z0JBQUVtQyxPQUFPLEVBQUU7O2lCQUF3QjtnQkFBRUQsR0FBRyxFQUFFdkIsTUFBTTs7Ozs7OzRCQUM3RTtrQ0FDZixRQUFDMEI7Ozs7Ozs0QkFBc0M7Ozs7OztvQkFDM0I7MEJBQ2hCLFFBQUM1QztnQkFBY2UsUUFBUSxFQUFFO0FBQUMscUJBQUM7QUFBRTtBQUFHLHFCQUFDO2lCQUFDO2dCQUFFUixLQUFLLEVBQUVBLEtBQUs7Z0JBQUVtQyxPQUFPLEVBQUU7O2lCQUF3QjtnQkFBRUQsR0FBRyxFQUFFdEIsTUFBTTs7Ozs7OzRCQUM3RTtrQ0FDZixRQUFDeUI7Ozs7Ozs0QkFBc0M7Ozs7OztvQkFDM0I7MEJBQ2hCLFFBQUM1QztnQkFBY2UsUUFBUSxFQUFFO0FBQUMscUJBQUM7QUFBRTtBQUFHLHFCQUFDO2lCQUFDO2dCQUFFUixLQUFLLEVBQUVBLEtBQUs7Z0JBQUVtQyxPQUFPLEVBQUU7O2lCQUF3QjtnQkFBRUQsR0FBRyxFQUFFckIsTUFBTTs7Ozs7OzRCQUM3RTtrQ0FDZixRQUFDd0I7Ozs7Ozs0QkFBc0M7Ozs7OztvQkFDM0I7MEJBQ2hCLFFBQUM1QztnQkFBY2UsUUFBUSxFQUFFO0FBQUMscUJBQUM7QUFBRTtvQkFBRyxDQUFDLENBQUM7aUJBQUM7Z0JBQUVSLEtBQUssRUFBRUEsS0FBSztnQkFBRW1DLE9BQU8sRUFBRTs7aUJBQXdCO2dCQUFFRCxHQUFHLEVBQUVyQixNQUFNOzs7Ozs7NEJBQzlFO2tDQUNmLFFBQUN3Qjs7Ozs7OzRCQUFzQzs7Ozs7O29CQUMzQjs7b0JBQ2pCLENBQ047Q0FDSjtHQXBGdUJ4QyxTQUFTOztRQVFYTCxTQUFTO1FBUTNCRSxRQUFROzs7QUFoQllHLEtBQUFBIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vX05fRS8uL2NvbXBvbmVudHMvQW5pbWF0aW9uLmpzP2YyMDkiXSwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgdXNlUmVmLCB1c2VTdGF0ZSB9IGZyb20gJ3JlYWN0J1xyXG5pbXBvcnQgeyB1c2VTcHJpbmcsIGFuaW1hdGVkIH0gZnJvbSAnQHJlYWN0LXNwcmluZy90aHJlZSdcclxuaW1wb3J0IHsgdXNlRnJhbWUsICB9IGZyb20gJ0ByZWFjdC10aHJlZS9maWJlcic7XHJcbmltcG9ydCAqIGFzIFRSSEVFIGZyb20gJ3RocmVlJ1xyXG5pbXBvcnQgeyBIdG1sIH0gZnJvbSAnQHJlYWN0LXRocmVlL2RyZWknO1xyXG5cclxuZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gQW5pbWF0aW9uKCkge1xyXG4gICAgY29uc3QgYm90b24xID0gdXNlUmVmKCk7XHJcbiAgICBjb25zdCBib3RvbjIgPSB1c2VSZWYoKTtcclxuICAgIGNvbnN0IGJvdG9uMyA9IHVzZVJlZigpO1xyXG4gICAgY29uc3QgYm90b240ID0gdXNlUmVmKCk7XHJcbiAgICBjb25zdCBbYWN0aXZlLCBzZXRBY3RpdmVdID0gdXNlU3RhdGUoZmFsc2UpXHJcbiAgICBjb25zdCBbY2xpY2tlZCwgc2V0Q2xpY2tlZF0gPSB1c2VTdGF0ZSgpXHJcbiAgICBjb25zdFtvcGFjaXR5LCBzZXRPcGFjaXR5XSA9IHVzZVN0YXRlKDApXHJcbiAgICBjb25zdCB7IHNjYWxlIH0gPSB1c2VTcHJpbmcoeyBzY2FsZTogYWN0aXZlID8gMS41IDogMC41IH0pXHJcbiAgICBjb25zdCB2ZWMgPSBuZXcgVFJIRUUuVmVjdG9yMygpXHJcblxyXG4gICAgLyogdXNlRnJhbWUoKHtjbG9ja30pPT57XHJcbiAgICAgICAgY29uc3QgdGltZT0gY2xvY2suZ2V0RWxhcHNlZFRpbWUoKVxyXG4gICAgICAgIHBydWViYS5jdXJyZW50LnJvdGF0aW9uLng9dGltZTtcclxuICAgIH0pICovXHJcbiAgICBjb25zdCB7aXRlbSwgc2V0SXRlbX09dXNlU3RhdGUoZmFsc2UpXHJcbiAgICB1c2VGcmFtZShzdGF0ZSA9PiB7XHJcbiAgICAgICAgY29uc3QgZWw9ZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2Jyk7XHJcbiAgICAgICAgaWYgKGNsaWNrZWQpIHtcclxuICAgICAgICAgICAgXHJcbiAgICAgICAgICAgIHN0YXRlLmNhbWVyYS5sb29rQXQoYm90b24xLmN1cnJlbnQucG9zaXRpb24pXHJcbiAgICAgICAgICAgIHN0YXRlLmNhbWVyYS5wb3NpdGlvbi5sZXJwKHZlYy5zZXQoMSwgMSwgMyksIDAuMDgpXHJcbiAgICAgICAgICAgIHN0YXRlLmNhbWVyYS51cGRhdGVQcm9qZWN0aW9uTWF0cml4KCkgICAgIFxyXG4gICAgICAgICAgICBcclxuICAgICAgICAgICAgXHJcbiAgICAgICAgfSBlbHNlIHtcclxuICAgICAgICAgICAgc3RhdGUuY2FtZXJhLmxvb2tBdChib3RvbjEuY3VycmVudC5wb3NpdGlvbilcclxuICAgICAgICAgICAgc3RhdGUuY2FtZXJhLnBvc2l0aW9uLmxlcnAodmVjLnNldCgwLCAyLDEwKSwgMC4wOClcclxuICAgICAgICAgICAgc3RhdGUuY2FtZXJhLnVwZGF0ZVByb2plY3Rpb25NYXRyaXgoKVxyXG4gICAgICAgICAgIFxyXG4gICAgICAgIH1cclxuICAgICAgICBcclxuICAgIH0pXHJcbiAgICBmdW5jdGlvbiBCb3goKSB7ICBcclxuICAgICAgICByZXR1cm4gKFxyXG4gICAgICAgICAgPG1lc2ggIHNjYWxlPXsxLjV9ID5cclxuICAgICAgICAgICAgPGNpcmNsZUdlb21ldHJ5IGFyZ3M9e1sxLDMyLDMyXX0gLz5cclxuICAgICAgICAgICAgPG1lc2hTdGFuZGFyZE1hdGVyaWFsIHRyYW5zcGFyZW50PXt0cnVlfSBjb2xvcj17XCIjZmZmZjAwXCJ9IG9wYWNpdHk9e29wYWNpdHl9Lz5cclxuICAgICAgICAgICAgPEh0bWwgICAgICAgIFxyXG4gICAgICAgICAgICAgIGRpc3RhbmNlRmFjdG9yPXsxLjV9XHJcbiAgICAgICAgICAgICAgcG9zaXRpb249e1swLCAwLCAwLjUxXX0gICAgICAgXHJcbiAgICAgICAgICAgID5cclxuICAgICAgICAgICAgICA8c3Bhbj5TaXplPC9zcGFuPlxyXG4gICAgICAgICAgICA8L0h0bWw+XHJcbiAgICAgICAgICA8L21lc2g+XHJcbiAgICAgICAgKVxyXG4gICAgICB9XHJcblxyXG4gICAgICBjb25zdCBoYW5kbGVDbGljaz0oKT0+e1xyXG4gICAgICAgIHNldENsaWNrZWQoIWNsaWNrZWQpIFxyXG4gICAgICAgIHNldE9wYWNpdHkoY2xpY2tlZCA/IDEgOiAwKVxyXG4gICAgICAgIC8qIGlmKGNsaWNrZWQpe1xyXG4gICAgICAgICAgICBzZXRPcGFjaXR5KDApXHJcbiAgICAgICAgfWVsc2V7XHJcbiAgICAgICAgICAgIHNldFRpbWVvdXQoKCkgPT4ge1xyXG4gICAgICAgICAgICAgICAgc2V0T3BhY2l0eSgxKVxyXG4gICAgICAgICAgICB9LCAxMDAwKTtcclxuICAgICAgICB9ICovXHJcbiAgICAgIH1cclxuICAgIHJldHVybiAoXHJcbiAgICAgICAgPD4gIFxyXG4gICAgICAgICAgICA8Qm94Lz4gICAgICBcclxuICAgICAgICAgICAgPGFuaW1hdGVkLm1lc2ggcmVmPXtib3RvbjF9IG9uQ2xpY2s9e2hhbmRsZUNsaWNrfT5cclxuICAgICAgICAgICAgICAgIDxib3hHZW9tZXRyeSAvPlxyXG4gICAgICAgICAgICAgICAgPG1lc2hQaG9uZ01hdGVyaWFsIGNvbG9yPVwicm95YWxibHVlXCIgLz5cclxuICAgICAgICAgICAgPC9hbmltYXRlZC5tZXNoPlxyXG4gICAgICAgICAgICA8YW5pbWF0ZWQubWVzaCBwb3NpdGlvbj17Wy0xLDEsIDJdfSBzY2FsZT17c2NhbGV9IG9uQ2xpY2s9eygpID0+IHNldEFjdGl2ZSghYWN0aXZlKX0gcmVmPXtib3RvbjJ9PlxyXG4gICAgICAgICAgICAgICAgPGJveEdlb21ldHJ5IC8+XHJcbiAgICAgICAgICAgICAgICA8bWVzaFBob25nTWF0ZXJpYWwgY29sb3I9XCJyb3lhbGJsdWVcIiAvPlxyXG4gICAgICAgICAgICA8L2FuaW1hdGVkLm1lc2g+XHJcbiAgICAgICAgICAgIDxhbmltYXRlZC5tZXNoIHBvc2l0aW9uPXtbMSwgMSwgMl19IHNjYWxlPXtzY2FsZX0gb25DbGljaz17KCkgPT4gc2V0QWN0aXZlKCFhY3RpdmUpfSByZWY9e2JvdG9uM30+XHJcbiAgICAgICAgICAgICAgICA8Ym94R2VvbWV0cnkgLz5cclxuICAgICAgICAgICAgICAgIDxtZXNoUGhvbmdNYXRlcmlhbCBjb2xvcj1cInJveWFsYmx1ZVwiIC8+XHJcbiAgICAgICAgICAgIDwvYW5pbWF0ZWQubWVzaD5cclxuICAgICAgICAgICAgPGFuaW1hdGVkLm1lc2ggcG9zaXRpb249e1szLCAwLCAxXX0gc2NhbGU9e3NjYWxlfSBvbkNsaWNrPXsoKSA9PiBzZXRBY3RpdmUoIWFjdGl2ZSl9IHJlZj17Ym90b240fT5cclxuICAgICAgICAgICAgICAgIDxib3hHZW9tZXRyeSAvPlxyXG4gICAgICAgICAgICAgICAgPG1lc2hQaG9uZ01hdGVyaWFsIGNvbG9yPVwicm95YWxibHVlXCIgLz5cclxuICAgICAgICAgICAgPC9hbmltYXRlZC5tZXNoPlxyXG4gICAgICAgICAgICA8YW5pbWF0ZWQubWVzaCBwb3NpdGlvbj17WzIsIDAsIC0xXX0gc2NhbGU9e3NjYWxlfSBvbkNsaWNrPXsoKSA9PiBzZXRBY3RpdmUoIWFjdGl2ZSl9IHJlZj17Ym90b240fT5cclxuICAgICAgICAgICAgICAgIDxib3hHZW9tZXRyeSAvPlxyXG4gICAgICAgICAgICAgICAgPG1lc2hQaG9uZ01hdGVyaWFsIGNvbG9yPVwicm95YWxibHVlXCIgLz5cclxuICAgICAgICAgICAgPC9hbmltYXRlZC5tZXNoPlxyXG4gICAgICAgIDwvPlxyXG4gICAgKVxyXG59XHJcbiJdLCJuYW1lcyI6WyJ1c2VSZWYiLCJ1c2VTdGF0ZSIsInVzZVNwcmluZyIsImFuaW1hdGVkIiwidXNlRnJhbWUiLCJUUkhFRSIsIkh0bWwiLCJBbmltYXRpb24iLCJCb3giLCJtZXNoIiwic2NhbGUiLCJjaXJjbGVHZW9tZXRyeSIsImFyZ3MiLCJtZXNoU3RhbmRhcmRNYXRlcmlhbCIsInRyYW5zcGFyZW50IiwiY29sb3IiLCJvcGFjaXR5IiwiZGlzdGFuY2VGYWN0b3IiLCJwb3NpdGlvbiIsInNwYW4iLCJib3RvbjEiLCJib3RvbjIiLCJib3RvbjMiLCJib3RvbjQiLCJhY3RpdmUiLCJzZXRBY3RpdmUiLCJjbGlja2VkIiwic2V0Q2xpY2tlZCIsInNldE9wYWNpdHkiLCJ2ZWMiLCJWZWN0b3IzIiwiaXRlbSIsInNldEl0ZW0iLCJzdGF0ZSIsImVsIiwiZG9jdW1lbnQiLCJjcmVhdGVFbGVtZW50IiwiY2FtZXJhIiwibG9va0F0IiwiY3VycmVudCIsImxlcnAiLCJzZXQiLCJ1cGRhdGVQcm9qZWN0aW9uTWF0cml4IiwiaGFuZGxlQ2xpY2siLCJyZWYiLCJvbkNsaWNrIiwiYm94R2VvbWV0cnkiLCJtZXNoUGhvbmdNYXRlcmlhbCJdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///./components/Animation.js\n");

/***/ })

});