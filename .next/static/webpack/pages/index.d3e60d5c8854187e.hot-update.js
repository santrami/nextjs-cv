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

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": function() { return /* binding */ Animation; }\n/* harmony export */ });\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"./node_modules/react/jsx-dev-runtime.js\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var _react_spring_three__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @react-spring/three */ \"./node_modules/@react-spring/three/dist/react-spring-three.esm.js\");\n/* harmony import */ var _react_three_fiber__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @react-three/fiber */ \"./node_modules/@react-three/fiber/dist/react-three-fiber.esm.js\");\n/* harmony import */ var three__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! three */ \"./node_modules/three/build/three.module.js\");\n\n\n\n\n\nvar _s = $RefreshSig$();\nfunction Animation() {\n    var Box = function Box() {\n        return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"mesh\", {\n            scale: 1,\n            children: [\n                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"circleGeometry\", {\n                    args: [\n                        1,\n                        32,\n                        32\n                    ]\n                }, void 0, false, {\n                    fileName: \"C:\\\\Users\\\\Hogar\\\\Desktop\\\\programacion\\\\nextjs-cv\\\\components\\\\Animation.js\",\n                    lineNumber: 38,\n                    columnNumber: 13\n                }, this),\n                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"meshStandardMaterial\", {}, void 0, false, {\n                    fileName: \"C:\\\\Users\\\\Hogar\\\\Desktop\\\\programacion\\\\nextjs-cv\\\\components\\\\Animation.js\",\n                    lineNumber: 39,\n                    columnNumber: 13\n                }, this),\n                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(Html, {\n                    distanceFactor: 1.5,\n                    position: [\n                        0,\n                        0,\n                        0.51\n                    ],\n                    children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"span\", {\n                        children: \"Size\"\n                    }, void 0, false, {\n                        fileName: \"C:\\\\Users\\\\Hogar\\\\Desktop\\\\programacion\\\\nextjs-cv\\\\components\\\\Animation.js\",\n                        lineNumber: 44,\n                        columnNumber: 15\n                    }, this)\n                }, void 0, false, {\n                    fileName: \"C:\\\\Users\\\\Hogar\\\\Desktop\\\\programacion\\\\nextjs-cv\\\\components\\\\Animation.js\",\n                    lineNumber: 40,\n                    columnNumber: 13\n                }, this)\n            ]\n        }, void 0, true, {\n            fileName: \"C:\\\\Users\\\\Hogar\\\\Desktop\\\\programacion\\\\nextjs-cv\\\\components\\\\Animation.js\",\n            lineNumber: 37,\n            columnNumber: 11\n        }, this);\n    };\n    _s();\n    var boton1 = (0,react__WEBPACK_IMPORTED_MODULE_1__.useRef)();\n    var boton2 = (0,react__WEBPACK_IMPORTED_MODULE_1__.useRef)();\n    var boton3 = (0,react__WEBPACK_IMPORTED_MODULE_1__.useRef)();\n    var boton4 = (0,react__WEBPACK_IMPORTED_MODULE_1__.useRef)();\n    var ref = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(false), active = ref[0], setActive = ref[1];\n    var ref1 = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(false), clicked = ref1[0], setClicked = ref1[1];\n    var scale = (0,_react_spring_three__WEBPACK_IMPORTED_MODULE_2__.useSpring)({\n        scale: active ? 1.5 : 0.5\n    }).scale;\n    var vec = new three__WEBPACK_IMPORTED_MODULE_3__.Vector3();\n    /* useFrame(({clock})=>{\r\n        const time= clock.getElapsedTime()\r\n        prueba.current.rotation.x=time;\r\n    }) */ (0,_react_three_fiber__WEBPACK_IMPORTED_MODULE_4__.useFrame)(function(state) {\n        var el = document.createElement(\"div\");\n        if (clicked) {\n            state.camera.lookAt(boton1.current.position);\n            state.camera.position.lerp(vec.set(0, 1, 5), 0.1);\n            state.camera.updateProjectionMatrix();\n        } else {\n            state.camera.lookAt(boton1.current.position);\n            state.camera.position.lerp(vec.set(0, 2, 10), 0.1);\n            state.camera.updateProjectionMatrix();\n        }\n    });\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.Fragment, {\n        children: [\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_react_spring_three__WEBPACK_IMPORTED_MODULE_2__.animated.mesh, {\n                ref: boton1,\n                onClick: function() {\n                    return setClicked(!clicked);\n                },\n                children: [\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"boxGeometry\", {}, void 0, false, {\n                        fileName: \"C:\\\\Users\\\\Hogar\\\\Desktop\\\\programacion\\\\nextjs-cv\\\\components\\\\Animation.js\",\n                        lineNumber: 52,\n                        columnNumber: 17\n                    }, this),\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"meshPhongMaterial\", {\n                        color: \"royalblue\"\n                    }, void 0, false, {\n                        fileName: \"C:\\\\Users\\\\Hogar\\\\Desktop\\\\programacion\\\\nextjs-cv\\\\components\\\\Animation.js\",\n                        lineNumber: 53,\n                        columnNumber: 17\n                    }, this)\n                ]\n            }, void 0, true, {\n                fileName: \"C:\\\\Users\\\\Hogar\\\\Desktop\\\\programacion\\\\nextjs-cv\\\\components\\\\Animation.js\",\n                lineNumber: 51,\n                columnNumber: 13\n            }, this),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_react_spring_three__WEBPACK_IMPORTED_MODULE_2__.animated.mesh, {\n                position: [\n                    -1,\n                    1,\n                    2\n                ],\n                scale: scale,\n                onClick: function() {\n                    return setActive(!active);\n                },\n                ref: boton2,\n                children: [\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"boxGeometry\", {}, void 0, false, {\n                        fileName: \"C:\\\\Users\\\\Hogar\\\\Desktop\\\\programacion\\\\nextjs-cv\\\\components\\\\Animation.js\",\n                        lineNumber: 56,\n                        columnNumber: 17\n                    }, this),\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"meshPhongMaterial\", {\n                        color: \"royalblue\"\n                    }, void 0, false, {\n                        fileName: \"C:\\\\Users\\\\Hogar\\\\Desktop\\\\programacion\\\\nextjs-cv\\\\components\\\\Animation.js\",\n                        lineNumber: 57,\n                        columnNumber: 17\n                    }, this)\n                ]\n            }, void 0, true, {\n                fileName: \"C:\\\\Users\\\\Hogar\\\\Desktop\\\\programacion\\\\nextjs-cv\\\\components\\\\Animation.js\",\n                lineNumber: 55,\n                columnNumber: 13\n            }, this),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_react_spring_three__WEBPACK_IMPORTED_MODULE_2__.animated.mesh, {\n                position: [\n                    1,\n                    1,\n                    2\n                ],\n                scale: scale,\n                onClick: function() {\n                    return setActive(!active);\n                },\n                ref: boton3,\n                children: [\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"boxGeometry\", {}, void 0, false, {\n                        fileName: \"C:\\\\Users\\\\Hogar\\\\Desktop\\\\programacion\\\\nextjs-cv\\\\components\\\\Animation.js\",\n                        lineNumber: 60,\n                        columnNumber: 17\n                    }, this),\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"meshPhongMaterial\", {\n                        color: \"royalblue\"\n                    }, void 0, false, {\n                        fileName: \"C:\\\\Users\\\\Hogar\\\\Desktop\\\\programacion\\\\nextjs-cv\\\\components\\\\Animation.js\",\n                        lineNumber: 61,\n                        columnNumber: 17\n                    }, this)\n                ]\n            }, void 0, true, {\n                fileName: \"C:\\\\Users\\\\Hogar\\\\Desktop\\\\programacion\\\\nextjs-cv\\\\components\\\\Animation.js\",\n                lineNumber: 59,\n                columnNumber: 13\n            }, this),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_react_spring_three__WEBPACK_IMPORTED_MODULE_2__.animated.mesh, {\n                position: [\n                    3,\n                    0,\n                    1\n                ],\n                scale: scale,\n                onClick: function() {\n                    return setActive(!active);\n                },\n                ref: boton4,\n                children: [\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"boxGeometry\", {}, void 0, false, {\n                        fileName: \"C:\\\\Users\\\\Hogar\\\\Desktop\\\\programacion\\\\nextjs-cv\\\\components\\\\Animation.js\",\n                        lineNumber: 64,\n                        columnNumber: 17\n                    }, this),\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"meshPhongMaterial\", {\n                        color: \"royalblue\"\n                    }, void 0, false, {\n                        fileName: \"C:\\\\Users\\\\Hogar\\\\Desktop\\\\programacion\\\\nextjs-cv\\\\components\\\\Animation.js\",\n                        lineNumber: 65,\n                        columnNumber: 17\n                    }, this)\n                ]\n            }, void 0, true, {\n                fileName: \"C:\\\\Users\\\\Hogar\\\\Desktop\\\\programacion\\\\nextjs-cv\\\\components\\\\Animation.js\",\n                lineNumber: 63,\n                columnNumber: 13\n            }, this),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_react_spring_three__WEBPACK_IMPORTED_MODULE_2__.animated.mesh, {\n                position: [\n                    2,\n                    0,\n                    -1\n                ],\n                scale: scale,\n                onClick: function() {\n                    return setActive(!active);\n                },\n                ref: boton4,\n                children: [\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"boxGeometry\", {}, void 0, false, {\n                        fileName: \"C:\\\\Users\\\\Hogar\\\\Desktop\\\\programacion\\\\nextjs-cv\\\\components\\\\Animation.js\",\n                        lineNumber: 68,\n                        columnNumber: 17\n                    }, this),\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"meshPhongMaterial\", {\n                        color: \"royalblue\"\n                    }, void 0, false, {\n                        fileName: \"C:\\\\Users\\\\Hogar\\\\Desktop\\\\programacion\\\\nextjs-cv\\\\components\\\\Animation.js\",\n                        lineNumber: 69,\n                        columnNumber: 17\n                    }, this)\n                ]\n            }, void 0, true, {\n                fileName: \"C:\\\\Users\\\\Hogar\\\\Desktop\\\\programacion\\\\nextjs-cv\\\\components\\\\Animation.js\",\n                lineNumber: 67,\n                columnNumber: 13\n            }, this)\n        ]\n    }, void 0, true);\n};\n_s(Animation, \"tJ38GMMgyZXi4nhSsRJ2YYxYYGg=\", false, function() {\n    return [\n        _react_spring_three__WEBPACK_IMPORTED_MODULE_2__.useSpring,\n        _react_three_fiber__WEBPACK_IMPORTED_MODULE_4__.useFrame\n    ];\n});\n_c = Animation;\nvar _c;\n$RefreshReg$(_c, \"Animation\");\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports on update so we can compare the boundary\n                // signatures.\n                module.hot.dispose(function (data) {\n                    data.prevExports = currentExports;\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevExports !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevExports !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,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OzRCQUM3RTtrQ0FDZjt3QkFBbUJzQixLQUFLLEVBQUM7Ozs7OzRCQUFjOzs7Ozs7b0JBQzNCOzBCQUNoQjtnQkFBZTFCLFFBQVEsRUFBRTtBQUFDLHFCQUFDO0FBQUUscUJBQUM7QUFBRSxxQkFBQztpQkFBQztnQkFBRU4sS0FBSztnQkFBUzZCOztpQkFBaUM7Z0JBQUVELEdBQUcsRUFBRWpCLE1BQU07Ozs7Ozs0QkFDN0U7a0NBQ2Y7d0JBQW1CcUIsS0FBSyxFQUFDOzs7Ozs0QkFBYzs7Ozs7O29CQUMzQjswQkFDaEI7Z0JBQWUxQixRQUFRLEVBQUU7QUFBQyxxQkFBQztBQUFFLHFCQUFDO29CQUFFLENBQUMsQ0FBQztpQkFBQztnQkFBRU4sS0FBSztnQkFBUzZCOztpQkFBaUM7Z0JBQUVELEdBQUcsRUFBRWpCLE1BQU07Ozs7Ozs0QkFDOUU7a0NBQ2Y7d0JBQW1CcUIsS0FBSyxFQUFDOzs7Ozs0QkFBYzs7Ozs7O29CQUMzQjs7b0JBQ2pCLENBQ047Q0FDSjtHQW5FdUJuQzs7O1FBZXBCRixRQUFROzs7QUFmWUUsS0FBQUEsR0FBQUEsd0RBQVMiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vY29tcG9uZW50cy9BbmltYXRpb24uanM/ZjIwOSJdLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyB1c2VSZWYsIHVzZVN0YXRlIH0gZnJvbSAncmVhY3QnXHJcbmltcG9ydCB7IHVzZVNwcmluZywgYW5pbWF0ZWQgfSBmcm9tICdAcmVhY3Qtc3ByaW5nL3RocmVlJ1xyXG5pbXBvcnQgeyB1c2VGcmFtZSwgIH0gZnJvbSAnQHJlYWN0LXRocmVlL2ZpYmVyJztcclxuaW1wb3J0ICogYXMgVFJIRUUgZnJvbSAndGhyZWUnXHJcblxyXG5leHBvcnQgZGVmYXVsdCBmdW5jdGlvbiBBbmltYXRpb24oKSB7XHJcbiAgICBjb25zdCBib3RvbjEgPSB1c2VSZWYoKTtcclxuICAgIGNvbnN0IGJvdG9uMiA9IHVzZVJlZigpO1xyXG4gICAgY29uc3QgYm90b24zID0gdXNlUmVmKCk7XHJcbiAgICBjb25zdCBib3RvbjQgPSB1c2VSZWYoKTtcclxuICAgIGNvbnN0IFthY3RpdmUsIHNldEFjdGl2ZV0gPSB1c2VTdGF0ZShmYWxzZSlcclxuICAgIGNvbnN0IFtjbGlja2VkLCBzZXRDbGlja2VkXSA9IHVzZVN0YXRlKGZhbHNlKVxyXG4gICAgY29uc3QgeyBzY2FsZSB9ID0gdXNlU3ByaW5nKHsgc2NhbGU6IGFjdGl2ZSA/IDEuNSA6IDAuNSB9KVxyXG4gICAgY29uc3QgdmVjID0gbmV3IFRSSEVFLlZlY3RvcjMoKVxyXG5cclxuICAgIC8qIHVzZUZyYW1lKCh7Y2xvY2t9KT0+e1xyXG4gICAgICAgIGNvbnN0IHRpbWU9IGNsb2NrLmdldEVsYXBzZWRUaW1lKClcclxuICAgICAgICBwcnVlYmEuY3VycmVudC5yb3RhdGlvbi54PXRpbWU7XHJcbiAgICB9KSAqL1xyXG4gICAgXHJcbiAgICB1c2VGcmFtZShzdGF0ZSA9PiB7XHJcbiAgICAgICAgY29uc3QgZWw9ZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2Jyk7XHJcbiAgICAgICAgaWYgKGNsaWNrZWQpIHtcclxuICAgICAgICAgICAgXHJcbiAgICAgICAgICAgIHN0YXRlLmNhbWVyYS5sb29rQXQoYm90b24xLmN1cnJlbnQucG9zaXRpb24pXHJcbiAgICAgICAgICAgIHN0YXRlLmNhbWVyYS5wb3NpdGlvbi5sZXJwKHZlYy5zZXQoMCwgMSwgNSksIDAuMSlcclxuICAgICAgICAgICAgc3RhdGUuY2FtZXJhLnVwZGF0ZVByb2plY3Rpb25NYXRyaXgoKSAgICAgXHJcbiAgICAgICAgfSBlbHNlIHtcclxuICAgICAgICAgICAgc3RhdGUuY2FtZXJhLmxvb2tBdChib3RvbjEuY3VycmVudC5wb3NpdGlvbilcclxuICAgICAgICAgICAgc3RhdGUuY2FtZXJhLnBvc2l0aW9uLmxlcnAodmVjLnNldCgwLCAyLDEwKSwgMC4xKVxyXG4gICAgICAgICAgICBzdGF0ZS5jYW1lcmEudXBkYXRlUHJvamVjdGlvbk1hdHJpeCgpXHJcblxyXG4gICAgICAgIH1cclxuICAgIH0pXHJcbiAgICBmdW5jdGlvbiBCb3goKSB7ICBcclxuICAgICAgICByZXR1cm4gKFxyXG4gICAgICAgICAgPG1lc2ggc2NhbGU9ezF9PlxyXG4gICAgICAgICAgICA8Y2lyY2xlR2VvbWV0cnkgYXJncz17WzEsMzIsMzJdfSAvPlxyXG4gICAgICAgICAgICA8bWVzaFN0YW5kYXJkTWF0ZXJpYWwgLz5cclxuICAgICAgICAgICAgPEh0bWwgICAgICAgIFxyXG4gICAgICAgICAgICAgIGRpc3RhbmNlRmFjdG9yPXsxLjV9XHJcbiAgICAgICAgICAgICAgcG9zaXRpb249e1swLCAwLCAwLjUxXX0gICAgICAgXHJcbiAgICAgICAgICAgID5cclxuICAgICAgICAgICAgICA8c3Bhbj5TaXplPC9zcGFuPlxyXG4gICAgICAgICAgICA8L0h0bWw+XHJcbiAgICAgICAgICA8L21lc2g+XHJcbiAgICAgICAgKVxyXG4gICAgICB9XHJcbiAgICByZXR1cm4gKFxyXG4gICAgICAgIDw+XHJcbiAgICAgICAgICAgIDxhbmltYXRlZC5tZXNoIHJlZj17Ym90b24xfSBvbkNsaWNrPXsoKSA9PiBzZXRDbGlja2VkKCFjbGlja2VkKX0+XHJcbiAgICAgICAgICAgICAgICA8Ym94R2VvbWV0cnkgLz5cclxuICAgICAgICAgICAgICAgIDxtZXNoUGhvbmdNYXRlcmlhbCBjb2xvcj1cInJveWFsYmx1ZVwiIC8+XHJcbiAgICAgICAgICAgIDwvYW5pbWF0ZWQubWVzaD5cclxuICAgICAgICAgICAgPGFuaW1hdGVkLm1lc2ggcG9zaXRpb249e1stMSwxLCAyXX0gc2NhbGU9e3NjYWxlfSBvbkNsaWNrPXsoKSA9PiBzZXRBY3RpdmUoIWFjdGl2ZSl9IHJlZj17Ym90b24yfT5cclxuICAgICAgICAgICAgICAgIDxib3hHZW9tZXRyeSAvPlxyXG4gICAgICAgICAgICAgICAgPG1lc2hQaG9uZ01hdGVyaWFsIGNvbG9yPVwicm95YWxibHVlXCIgLz5cclxuICAgICAgICAgICAgPC9hbmltYXRlZC5tZXNoPlxyXG4gICAgICAgICAgICA8YW5pbWF0ZWQubWVzaCBwb3NpdGlvbj17WzEsIDEsIDJdfSBzY2FsZT17c2NhbGV9IG9uQ2xpY2s9eygpID0+IHNldEFjdGl2ZSghYWN0aXZlKX0gcmVmPXtib3RvbjN9PlxyXG4gICAgICAgICAgICAgICAgPGJveEdlb21ldHJ5IC8+XHJcbiAgICAgICAgICAgICAgICA8bWVzaFBob25nTWF0ZXJpYWwgY29sb3I9XCJyb3lhbGJsdWVcIiAvPlxyXG4gICAgICAgICAgICA8L2FuaW1hdGVkLm1lc2g+XHJcbiAgICAgICAgICAgIDxhbmltYXRlZC5tZXNoIHBvc2l0aW9uPXtbMywgMCwgMV19IHNjYWxlPXtzY2FsZX0gb25DbGljaz17KCkgPT4gc2V0QWN0aXZlKCFhY3RpdmUpfSByZWY9e2JvdG9uNH0+XHJcbiAgICAgICAgICAgICAgICA8Ym94R2VvbWV0cnkgLz5cclxuICAgICAgICAgICAgICAgIDxtZXNoUGhvbmdNYXRlcmlhbCBjb2xvcj1cInJveWFsYmx1ZVwiIC8+XHJcbiAgICAgICAgICAgIDwvYW5pbWF0ZWQubWVzaD5cclxuICAgICAgICAgICAgPGFuaW1hdGVkLm1lc2ggcG9zaXRpb249e1syLCAwLCAtMV19IHNjYWxlPXtzY2FsZX0gb25DbGljaz17KCkgPT4gc2V0QWN0aXZlKCFhY3RpdmUpfSByZWY9e2JvdG9uNH0+XHJcbiAgICAgICAgICAgICAgICA8Ym94R2VvbWV0cnkgLz5cclxuICAgICAgICAgICAgICAgIDxtZXNoUGhvbmdNYXRlcmlhbCBjb2xvcj1cInJveWFsYmx1ZVwiIC8+XHJcbiAgICAgICAgICAgIDwvYW5pbWF0ZWQubWVzaD5cclxuICAgICAgICA8Lz5cclxuICAgIClcclxufVxyXG4iXSwibmFtZXMiOlsidXNlUmVmIiwidXNlU3RhdGUiLCJ1c2VTcHJpbmciLCJhbmltYXRlZCIsInVzZUZyYW1lIiwiVFJIRUUiLCJBbmltYXRpb24iLCJCb3giLCJtZXNoIiwic2NhbGUiLCJjaXJjbGVHZW9tZXRyeSIsImFyZ3MiLCJtZXNoU3RhbmRhcmRNYXRlcmlhbCIsIkh0bWwiLCJkaXN0YW5jZUZhY3RvciIsInBvc2l0aW9uIiwic3BhbiIsImJvdG9uMSIsImJvdG9uMiIsImJvdG9uMyIsImJvdG9uNCIsImFjdGl2ZSIsInNldEFjdGl2ZSIsImNsaWNrZWQiLCJzZXRDbGlja2VkIiwidmVjIiwiVmVjdG9yMyIsInN0YXRlIiwiZWwiLCJkb2N1bWVudCIsImNyZWF0ZUVsZW1lbnQiLCJjYW1lcmEiLCJsb29rQXQiLCJjdXJyZW50IiwibGVycCIsInNldCIsInVwZGF0ZVByb2plY3Rpb25NYXRyaXgiLCJyZWYiLCJvbkNsaWNrIiwiYm94R2VvbWV0cnkiLCJtZXNoUGhvbmdNYXRlcmlhbCIsImNvbG9yIl0sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///./components/Animation.js\n");

/***/ })

});