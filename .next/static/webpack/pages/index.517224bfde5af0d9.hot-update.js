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

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": function() { return /* binding */ Animation; }\n/* harmony export */ });\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"./node_modules/react/jsx-dev-runtime.js\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var _react_spring_three__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @react-spring/three */ \"./node_modules/@react-spring/three/dist/react-spring-three.esm.js\");\n/* harmony import */ var _react_three_fiber__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @react-three/fiber */ \"./node_modules/@react-three/fiber/dist/react-three-fiber.esm.js\");\n/* harmony import */ var three__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! three */ \"./node_modules/three/build/three.module.js\");\n/* harmony import */ var _react_three_drei__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @react-three/drei */ \"./node_modules/@react-three/drei/index.js\");\n\n\n\n\n\n\nvar _s = $RefreshSig$();\nfunction Animation() {\n    var Box = function Box() {\n        return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"mesh\", {\n            scale: 1.5,\n            children: [\n                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"circleGeometry\", {\n                    args: [\n                        1,\n                        32,\n                        32\n                    ]\n                }, void 0, false, {\n                    fileName: \"C:\\\\Users\\\\Hogar\\\\Desktop\\\\programacion\\\\nextjs-cv\\\\components\\\\Animation.js\",\n                    lineNumber: 43,\n                    columnNumber: 13\n                }, this),\n                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"meshStandardMaterial\", {\n                    transparent: true,\n                    color: \"#ffff00\",\n                    opacity: opacity\n                }, void 0, false, {\n                    fileName: \"C:\\\\Users\\\\Hogar\\\\Desktop\\\\programacion\\\\nextjs-cv\\\\components\\\\Animation.js\",\n                    lineNumber: 44,\n                    columnNumber: 13\n                }, this),\n                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_react_three_drei__WEBPACK_IMPORTED_MODULE_3__.Html, {\n                    distanceFactor: 1.5,\n                    position: [\n                        0,\n                        0,\n                        0.51\n                    ],\n                    children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"span\", {\n                        children: \"Size\"\n                    }, void 0, false, {\n                        fileName: \"C:\\\\Users\\\\Hogar\\\\Desktop\\\\programacion\\\\nextjs-cv\\\\components\\\\Animation.js\",\n                        lineNumber: 49,\n                        columnNumber: 15\n                    }, this)\n                }, void 0, false, {\n                    fileName: \"C:\\\\Users\\\\Hogar\\\\Desktop\\\\programacion\\\\nextjs-cv\\\\components\\\\Animation.js\",\n                    lineNumber: 45,\n                    columnNumber: 13\n                }, this)\n            ]\n        }, void 0, true, {\n            fileName: \"C:\\\\Users\\\\Hogar\\\\Desktop\\\\programacion\\\\nextjs-cv\\\\components\\\\Animation.js\",\n            lineNumber: 42,\n            columnNumber: 11\n        }, this);\n    };\n    _s();\n    var boton1 = (0,react__WEBPACK_IMPORTED_MODULE_1__.useRef)();\n    var boton2 = (0,react__WEBPACK_IMPORTED_MODULE_1__.useRef)();\n    var boton3 = (0,react__WEBPACK_IMPORTED_MODULE_1__.useRef)();\n    var boton4 = (0,react__WEBPACK_IMPORTED_MODULE_1__.useRef)();\n    var ref = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(false), active = ref[0], setActive = ref[1];\n    var ref1 = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(false), clicked = ref1[0], setClicked = ref1[1];\n    var ref2 = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(0), opacity = ref2[0], setOpacity = ref2[1];\n    var scale = (0,_react_spring_three__WEBPACK_IMPORTED_MODULE_2__.useSpring)({\n        scale: active ? 1.5 : 0.5\n    }).scale;\n    var vec = new three__WEBPACK_IMPORTED_MODULE_4__.Vector3();\n    /* useFrame(({clock})=>{\r\n        const time= clock.getElapsedTime()\r\n        prueba.current.rotation.x=time;\r\n    }) */ var ref3 = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(false), item = ref3.item, setItem = ref3.setItem;\n    (0,_react_three_fiber__WEBPACK_IMPORTED_MODULE_5__.useFrame)(function(state) {\n        var el = document.createElement(\"div\");\n        if (clicked) {\n            state.camera.lookAt(boton1.current.position);\n            state.camera.position.lerp(vec.set(0, 1, 5), 0.1);\n            state.camera.updateProjectionMatrix();\n        } else {\n            state.camera.lookAt(boton1.current.position);\n            state.camera.position.lerp(vec.set(0, 2, 10), 0.1);\n            state.camera.updateProjectionMatrix();\n        }\n    });\n    var handleClick = function() {\n        setClicked(!clicked);\n        if (clicked) {\n            setOpacity(0);\n        } else {\n            setTimeout(function() {}, timeout);\n        }\n    };\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.Fragment, {\n        children: [\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(Box, {}, void 0, false, {\n                fileName: \"C:\\\\Users\\\\Hogar\\\\Desktop\\\\programacion\\\\nextjs-cv\\\\components\\\\Animation.js\",\n                lineNumber: 67,\n                columnNumber: 13\n            }, this),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_react_spring_three__WEBPACK_IMPORTED_MODULE_2__.animated.mesh, {\n                ref: boton1,\n                onClick: handleClick,\n                children: [\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"boxGeometry\", {}, void 0, false, {\n                        fileName: \"C:\\\\Users\\\\Hogar\\\\Desktop\\\\programacion\\\\nextjs-cv\\\\components\\\\Animation.js\",\n                        lineNumber: 69,\n                        columnNumber: 17\n                    }, this),\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"meshPhongMaterial\", {\n                        color: \"royalblue\"\n                    }, void 0, false, {\n                        fileName: \"C:\\\\Users\\\\Hogar\\\\Desktop\\\\programacion\\\\nextjs-cv\\\\components\\\\Animation.js\",\n                        lineNumber: 70,\n                        columnNumber: 17\n                    }, this)\n                ]\n            }, void 0, true, {\n                fileName: \"C:\\\\Users\\\\Hogar\\\\Desktop\\\\programacion\\\\nextjs-cv\\\\components\\\\Animation.js\",\n                lineNumber: 68,\n                columnNumber: 13\n            }, this),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_react_spring_three__WEBPACK_IMPORTED_MODULE_2__.animated.mesh, {\n                position: [\n                    -1,\n                    1,\n                    2\n                ],\n                scale: scale,\n                onClick: function() {\n                    return setActive(!active);\n                },\n                ref: boton2,\n                children: [\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"boxGeometry\", {}, void 0, false, {\n                        fileName: \"C:\\\\Users\\\\Hogar\\\\Desktop\\\\programacion\\\\nextjs-cv\\\\components\\\\Animation.js\",\n                        lineNumber: 73,\n                        columnNumber: 17\n                    }, this),\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"meshPhongMaterial\", {\n                        color: \"royalblue\"\n                    }, void 0, false, {\n                        fileName: \"C:\\\\Users\\\\Hogar\\\\Desktop\\\\programacion\\\\nextjs-cv\\\\components\\\\Animation.js\",\n                        lineNumber: 74,\n                        columnNumber: 17\n                    }, this)\n                ]\n            }, void 0, true, {\n                fileName: \"C:\\\\Users\\\\Hogar\\\\Desktop\\\\programacion\\\\nextjs-cv\\\\components\\\\Animation.js\",\n                lineNumber: 72,\n                columnNumber: 13\n            }, this),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_react_spring_three__WEBPACK_IMPORTED_MODULE_2__.animated.mesh, {\n                position: [\n                    1,\n                    1,\n                    2\n                ],\n                scale: scale,\n                onClick: function() {\n                    return setActive(!active);\n                },\n                ref: boton3,\n                children: [\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"boxGeometry\", {}, void 0, false, {\n                        fileName: \"C:\\\\Users\\\\Hogar\\\\Desktop\\\\programacion\\\\nextjs-cv\\\\components\\\\Animation.js\",\n                        lineNumber: 77,\n                        columnNumber: 17\n                    }, this),\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"meshPhongMaterial\", {\n                        color: \"royalblue\"\n                    }, void 0, false, {\n                        fileName: \"C:\\\\Users\\\\Hogar\\\\Desktop\\\\programacion\\\\nextjs-cv\\\\components\\\\Animation.js\",\n                        lineNumber: 78,\n                        columnNumber: 17\n                    }, this)\n                ]\n            }, void 0, true, {\n                fileName: \"C:\\\\Users\\\\Hogar\\\\Desktop\\\\programacion\\\\nextjs-cv\\\\components\\\\Animation.js\",\n                lineNumber: 76,\n                columnNumber: 13\n            }, this),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_react_spring_three__WEBPACK_IMPORTED_MODULE_2__.animated.mesh, {\n                position: [\n                    3,\n                    0,\n                    1\n                ],\n                scale: scale,\n                onClick: function() {\n                    return setActive(!active);\n                },\n                ref: boton4,\n                children: [\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"boxGeometry\", {}, void 0, false, {\n                        fileName: \"C:\\\\Users\\\\Hogar\\\\Desktop\\\\programacion\\\\nextjs-cv\\\\components\\\\Animation.js\",\n                        lineNumber: 81,\n                        columnNumber: 17\n                    }, this),\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"meshPhongMaterial\", {\n                        color: \"royalblue\"\n                    }, void 0, false, {\n                        fileName: \"C:\\\\Users\\\\Hogar\\\\Desktop\\\\programacion\\\\nextjs-cv\\\\components\\\\Animation.js\",\n                        lineNumber: 82,\n                        columnNumber: 17\n                    }, this)\n                ]\n            }, void 0, true, {\n                fileName: \"C:\\\\Users\\\\Hogar\\\\Desktop\\\\programacion\\\\nextjs-cv\\\\components\\\\Animation.js\",\n                lineNumber: 80,\n                columnNumber: 13\n            }, this),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_react_spring_three__WEBPACK_IMPORTED_MODULE_2__.animated.mesh, {\n                position: [\n                    2,\n                    0,\n                    -1\n                ],\n                scale: scale,\n                onClick: function() {\n                    return setActive(!active);\n                },\n                ref: boton4,\n                children: [\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"boxGeometry\", {}, void 0, false, {\n                        fileName: \"C:\\\\Users\\\\Hogar\\\\Desktop\\\\programacion\\\\nextjs-cv\\\\components\\\\Animation.js\",\n                        lineNumber: 85,\n                        columnNumber: 17\n                    }, this),\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"meshPhongMaterial\", {\n                        color: \"royalblue\"\n                    }, void 0, false, {\n                        fileName: \"C:\\\\Users\\\\Hogar\\\\Desktop\\\\programacion\\\\nextjs-cv\\\\components\\\\Animation.js\",\n                        lineNumber: 86,\n                        columnNumber: 17\n                    }, this)\n                ]\n            }, void 0, true, {\n                fileName: \"C:\\\\Users\\\\Hogar\\\\Desktop\\\\programacion\\\\nextjs-cv\\\\components\\\\Animation.js\",\n                lineNumber: 84,\n                columnNumber: 13\n            }, this)\n        ]\n    }, void 0, true);\n};\n_s(Animation, \"CqEhyMnPYYkmNO2KlIQNQzFzI4w=\", false, function() {\n    return [\n        _react_spring_three__WEBPACK_IMPORTED_MODULE_2__.useSpring,\n        _react_three_fiber__WEBPACK_IMPORTED_MODULE_5__.useFrame\n    ];\n});\n_c = Animation;\nvar _c;\n$RefreshReg$(_c, \"Animation\");\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports on update so we can compare the boundary\n                // signatures.\n                module.hot.dispose(function (data) {\n                    data.prevExports = currentExports;\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevExports !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevExports !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,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LEVBQUU7b0JBQUMsQ0FBQztBQUFFLHFCQUFDO0FBQUUscUJBQUM7aUJBQUM7Z0JBQUVSLEtBQUs7Z0JBQVNxQzs7aUJBQWlDO2dCQUFFRCxHQUFHLEVBQUV6QixNQUFNOzs7Ozs7NEJBQzdFO2tDQUNmO3dCQUFtQk4sS0FBSyxFQUFDOzs7Ozs0QkFBYzs7Ozs7O29CQUMzQjswQkFDaEI7Z0JBQWVHLFFBQVEsRUFBRTtBQUFDLHFCQUFDO0FBQUUscUJBQUM7QUFBRSxxQkFBQztpQkFBQztnQkFBRVIsS0FBSztnQkFBU3FDOztpQkFBaUM7Z0JBQUVELEdBQUcsRUFBRXhCLE1BQU07Ozs7Ozs0QkFDN0U7a0NBQ2Y7d0JBQW1CUCxLQUFLLEVBQUM7Ozs7OzRCQUFjOzs7Ozs7b0JBQzNCOzBCQUNoQjtnQkFBZUcsUUFBUSxFQUFFO0FBQUMscUJBQUM7QUFBRSxxQkFBQztBQUFFLHFCQUFDO2lCQUFDO2dCQUFFUixLQUFLO2dCQUFTcUM7O2lCQUFpQztnQkFBRUQsR0FBRyxFQUFFdkIsTUFBTTs7Ozs7OzRCQUM3RTtrQ0FDZjt3QkFBbUJSLEtBQUssRUFBQzs7Ozs7NEJBQWM7Ozs7OztvQkFDM0I7MEJBQ2hCO2dCQUFlRyxRQUFRLEVBQUU7QUFBQyxxQkFBQztBQUFFLHFCQUFDO29CQUFFLENBQUMsQ0FBQztpQkFBQztnQkFBRVIsS0FBSztnQkFBU3FDOztpQkFBaUM7Z0JBQUVELEdBQUcsRUFBRXZCLE1BQU07Ozs7Ozs0QkFDOUU7a0NBQ2Y7d0JBQW1CUixLQUFLLEVBQUM7Ozs7OzRCQUFjOzs7Ozs7b0JBQzNCOztvQkFDakIsQ0FDTjtDQUNKO0dBbkZ1QlI7OztRQWdCcEJILFFBQVE7OztBQWhCWUcsS0FBQUEsR0FBQUEsd0RBQVMiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vY29tcG9uZW50cy9BbmltYXRpb24uanM/ZjIwOSJdLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyB1c2VSZWYsIHVzZVN0YXRlIH0gZnJvbSAncmVhY3QnXHJcbmltcG9ydCB7IHVzZVNwcmluZywgYW5pbWF0ZWQgfSBmcm9tICdAcmVhY3Qtc3ByaW5nL3RocmVlJ1xyXG5pbXBvcnQgeyB1c2VGcmFtZSwgIH0gZnJvbSAnQHJlYWN0LXRocmVlL2ZpYmVyJztcclxuaW1wb3J0ICogYXMgVFJIRUUgZnJvbSAndGhyZWUnXHJcbmltcG9ydCB7IEh0bWwgfSBmcm9tICdAcmVhY3QtdGhyZWUvZHJlaSc7XHJcblxyXG5leHBvcnQgZGVmYXVsdCBmdW5jdGlvbiBBbmltYXRpb24oKSB7XHJcbiAgICBjb25zdCBib3RvbjEgPSB1c2VSZWYoKTtcclxuICAgIGNvbnN0IGJvdG9uMiA9IHVzZVJlZigpO1xyXG4gICAgY29uc3QgYm90b24zID0gdXNlUmVmKCk7XHJcbiAgICBjb25zdCBib3RvbjQgPSB1c2VSZWYoKTtcclxuICAgIGNvbnN0IFthY3RpdmUsIHNldEFjdGl2ZV0gPSB1c2VTdGF0ZShmYWxzZSlcclxuICAgIGNvbnN0IFtjbGlja2VkLCBzZXRDbGlja2VkXSA9IHVzZVN0YXRlKGZhbHNlKVxyXG4gICAgY29uc3Rbb3BhY2l0eSwgc2V0T3BhY2l0eV0gPSB1c2VTdGF0ZSgwKVxyXG4gICAgY29uc3QgeyBzY2FsZSB9ID0gdXNlU3ByaW5nKHsgc2NhbGU6IGFjdGl2ZSA/IDEuNSA6IDAuNSB9KVxyXG4gICAgY29uc3QgdmVjID0gbmV3IFRSSEVFLlZlY3RvcjMoKVxyXG5cclxuICAgIC8qIHVzZUZyYW1lKCh7Y2xvY2t9KT0+e1xyXG4gICAgICAgIGNvbnN0IHRpbWU9IGNsb2NrLmdldEVsYXBzZWRUaW1lKClcclxuICAgICAgICBwcnVlYmEuY3VycmVudC5yb3RhdGlvbi54PXRpbWU7XHJcbiAgICB9KSAqL1xyXG4gICAgY29uc3Qge2l0ZW0sIHNldEl0ZW19PXVzZVN0YXRlKGZhbHNlKVxyXG4gICAgdXNlRnJhbWUoc3RhdGUgPT4ge1xyXG4gICAgICAgIGNvbnN0IGVsPWRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpO1xyXG4gICAgICAgIGlmIChjbGlja2VkKSB7XHJcbiAgICAgICAgICAgIFxyXG4gICAgICAgICAgICBzdGF0ZS5jYW1lcmEubG9va0F0KGJvdG9uMS5jdXJyZW50LnBvc2l0aW9uKVxyXG4gICAgICAgICAgICBzdGF0ZS5jYW1lcmEucG9zaXRpb24ubGVycCh2ZWMuc2V0KDAsIDEsIDUpLCAwLjEpXHJcbiAgICAgICAgICAgIHN0YXRlLmNhbWVyYS51cGRhdGVQcm9qZWN0aW9uTWF0cml4KCkgICAgIFxyXG4gICAgICAgICAgICBcclxuICAgICAgICAgICAgXHJcbiAgICAgICAgfSBlbHNlIHtcclxuICAgICAgICAgICAgc3RhdGUuY2FtZXJhLmxvb2tBdChib3RvbjEuY3VycmVudC5wb3NpdGlvbilcclxuICAgICAgICAgICAgc3RhdGUuY2FtZXJhLnBvc2l0aW9uLmxlcnAodmVjLnNldCgwLCAyLDEwKSwgMC4xKVxyXG4gICAgICAgICAgICBzdGF0ZS5jYW1lcmEudXBkYXRlUHJvamVjdGlvbk1hdHJpeCgpXHJcbiAgICAgICAgICAgXHJcbiAgICAgICAgfVxyXG4gICAgICAgIFxyXG4gICAgfSlcclxuICAgIGZ1bmN0aW9uIEJveCgpIHsgIFxyXG4gICAgICAgIHJldHVybiAoXHJcbiAgICAgICAgICA8bWVzaCAgc2NhbGU9ezEuNX0gPlxyXG4gICAgICAgICAgICA8Y2lyY2xlR2VvbWV0cnkgYXJncz17WzEsMzIsMzJdfSAvPlxyXG4gICAgICAgICAgICA8bWVzaFN0YW5kYXJkTWF0ZXJpYWwgdHJhbnNwYXJlbnQ9e3RydWV9IGNvbG9yPXtcIiNmZmZmMDBcIn0gb3BhY2l0eT17b3BhY2l0eX0vPlxyXG4gICAgICAgICAgICA8SHRtbCAgICAgICAgXHJcbiAgICAgICAgICAgICAgZGlzdGFuY2VGYWN0b3I9ezEuNX1cclxuICAgICAgICAgICAgICBwb3NpdGlvbj17WzAsIDAsIDAuNTFdfSAgICAgICBcclxuICAgICAgICAgICAgPlxyXG4gICAgICAgICAgICAgIDxzcGFuPlNpemU8L3NwYW4+XHJcbiAgICAgICAgICAgIDwvSHRtbD5cclxuICAgICAgICAgIDwvbWVzaD5cclxuICAgICAgICApXHJcbiAgICAgIH1cclxuXHJcbiAgICAgIGNvbnN0IGhhbmRsZUNsaWNrPSgpPT57XHJcbiAgICAgICAgc2V0Q2xpY2tlZCghY2xpY2tlZCkgXHJcbiAgICAgICAgaWYoY2xpY2tlZCl7XHJcbiAgICAgICAgICAgIHNldE9wYWNpdHkoMClcclxuICAgICAgICB9ZWxzZXtcclxuICAgICAgICAgICAgc2V0VGltZW91dCgoKSA9PiB7XHJcbiAgICAgICAgICAgICAgICBcclxuICAgICAgICAgICAgfSwgdGltZW91dCk7XHJcbiAgICAgICAgfVxyXG4gICAgICB9XHJcbiAgICByZXR1cm4gKFxyXG4gICAgICAgIDw+ICBcclxuICAgICAgICAgICAgPEJveC8+ICAgICAgXHJcbiAgICAgICAgICAgIDxhbmltYXRlZC5tZXNoIHJlZj17Ym90b24xfSBvbkNsaWNrPXtoYW5kbGVDbGlja30+XHJcbiAgICAgICAgICAgICAgICA8Ym94R2VvbWV0cnkgLz5cclxuICAgICAgICAgICAgICAgIDxtZXNoUGhvbmdNYXRlcmlhbCBjb2xvcj1cInJveWFsYmx1ZVwiIC8+XHJcbiAgICAgICAgICAgIDwvYW5pbWF0ZWQubWVzaD5cclxuICAgICAgICAgICAgPGFuaW1hdGVkLm1lc2ggcG9zaXRpb249e1stMSwxLCAyXX0gc2NhbGU9e3NjYWxlfSBvbkNsaWNrPXsoKSA9PiBzZXRBY3RpdmUoIWFjdGl2ZSl9IHJlZj17Ym90b24yfT5cclxuICAgICAgICAgICAgICAgIDxib3hHZW9tZXRyeSAvPlxyXG4gICAgICAgICAgICAgICAgPG1lc2hQaG9uZ01hdGVyaWFsIGNvbG9yPVwicm95YWxibHVlXCIgLz5cclxuICAgICAgICAgICAgPC9hbmltYXRlZC5tZXNoPlxyXG4gICAgICAgICAgICA8YW5pbWF0ZWQubWVzaCBwb3NpdGlvbj17WzEsIDEsIDJdfSBzY2FsZT17c2NhbGV9IG9uQ2xpY2s9eygpID0+IHNldEFjdGl2ZSghYWN0aXZlKX0gcmVmPXtib3RvbjN9PlxyXG4gICAgICAgICAgICAgICAgPGJveEdlb21ldHJ5IC8+XHJcbiAgICAgICAgICAgICAgICA8bWVzaFBob25nTWF0ZXJpYWwgY29sb3I9XCJyb3lhbGJsdWVcIiAvPlxyXG4gICAgICAgICAgICA8L2FuaW1hdGVkLm1lc2g+XHJcbiAgICAgICAgICAgIDxhbmltYXRlZC5tZXNoIHBvc2l0aW9uPXtbMywgMCwgMV19IHNjYWxlPXtzY2FsZX0gb25DbGljaz17KCkgPT4gc2V0QWN0aXZlKCFhY3RpdmUpfSByZWY9e2JvdG9uNH0+XHJcbiAgICAgICAgICAgICAgICA8Ym94R2VvbWV0cnkgLz5cclxuICAgICAgICAgICAgICAgIDxtZXNoUGhvbmdNYXRlcmlhbCBjb2xvcj1cInJveWFsYmx1ZVwiIC8+XHJcbiAgICAgICAgICAgIDwvYW5pbWF0ZWQubWVzaD5cclxuICAgICAgICAgICAgPGFuaW1hdGVkLm1lc2ggcG9zaXRpb249e1syLCAwLCAtMV19IHNjYWxlPXtzY2FsZX0gb25DbGljaz17KCkgPT4gc2V0QWN0aXZlKCFhY3RpdmUpfSByZWY9e2JvdG9uNH0+XHJcbiAgICAgICAgICAgICAgICA8Ym94R2VvbWV0cnkgLz5cclxuICAgICAgICAgICAgICAgIDxtZXNoUGhvbmdNYXRlcmlhbCBjb2xvcj1cInJveWFsYmx1ZVwiIC8+XHJcbiAgICAgICAgICAgIDwvYW5pbWF0ZWQubWVzaD5cclxuICAgICAgICA8Lz5cclxuICAgIClcclxufVxyXG4iXSwibmFtZXMiOlsidXNlUmVmIiwidXNlU3RhdGUiLCJ1c2VTcHJpbmciLCJhbmltYXRlZCIsInVzZUZyYW1lIiwiVFJIRUUiLCJIdG1sIiwiQW5pbWF0aW9uIiwiQm94IiwibWVzaCIsInNjYWxlIiwiY2lyY2xlR2VvbWV0cnkiLCJhcmdzIiwibWVzaFN0YW5kYXJkTWF0ZXJpYWwiLCJ0cmFuc3BhcmVudCIsImNvbG9yIiwib3BhY2l0eSIsImRpc3RhbmNlRmFjdG9yIiwicG9zaXRpb24iLCJzcGFuIiwiYm90b24xIiwiYm90b24yIiwiYm90b24zIiwiYm90b240IiwiYWN0aXZlIiwic2V0QWN0aXZlIiwiY2xpY2tlZCIsInNldENsaWNrZWQiLCJzZXRPcGFjaXR5IiwidmVjIiwiVmVjdG9yMyIsIml0ZW0iLCJzZXRJdGVtIiwic3RhdGUiLCJlbCIsImRvY3VtZW50IiwiY3JlYXRlRWxlbWVudCIsImNhbWVyYSIsImxvb2tBdCIsImN1cnJlbnQiLCJsZXJwIiwic2V0IiwidXBkYXRlUHJvamVjdGlvbk1hdHJpeCIsImhhbmRsZUNsaWNrIiwic2V0VGltZW91dCIsInRpbWVvdXQiLCJyZWYiLCJvbkNsaWNrIiwiYm94R2VvbWV0cnkiLCJtZXNoUGhvbmdNYXRlcmlhbCJdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///./components/Animation.js\n");

/***/ })

});