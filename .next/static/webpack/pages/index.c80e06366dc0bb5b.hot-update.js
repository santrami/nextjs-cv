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

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": function() { return /* binding */ Animation; }\n/* harmony export */ });\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"./node_modules/react/jsx-dev-runtime.js\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var _react_spring_three__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @react-spring/three */ \"./node_modules/@react-spring/three/dist/react-spring-three.esm.js\");\n/* harmony import */ var _react_three_fiber__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @react-three/fiber */ \"./node_modules/@react-three/fiber/dist/react-three-fiber.esm.js\");\n/* harmony import */ var three__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! three */ \"./node_modules/three/build/three.module.js\");\n\n\n\n\n\nvar _s = $RefreshSig$();\nfunction Animation() {\n    _s();\n    var boton1 = (0,react__WEBPACK_IMPORTED_MODULE_1__.useRef)();\n    var boton2 = (0,react__WEBPACK_IMPORTED_MODULE_1__.useRef)();\n    var boton3 = (0,react__WEBPACK_IMPORTED_MODULE_1__.useRef)();\n    var boton4 = (0,react__WEBPACK_IMPORTED_MODULE_1__.useRef)();\n    var ref = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(false), active = ref[0], setActive = ref[1];\n    var ref1 = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(false), clicked = ref1[0], setClicked = ref1[1];\n    var scale = (0,_react_spring_three__WEBPACK_IMPORTED_MODULE_2__.useSpring)({\n        scale: active ? 1.5 : 0.5\n    }).scale;\n    var vec = new three__WEBPACK_IMPORTED_MODULE_3__.Vector3();\n    /* useFrame(({clock})=>{\r\n        const time= clock.getElapsedTime()\r\n        prueba.current.rotation.x=time;\r\n    }) */ useframe;\n    (0,_react_three_fiber__WEBPACK_IMPORTED_MODULE_4__.useFrame)(function(state) {\n        var el = document.createElement(\"div\");\n        if (clicked) {\n            state.camera.lookAt(boton1.current.position);\n            state.camera.position.lerp(vec.set(0, 1, 1), 0.1);\n            state.camera.updateProjectionMatrix();\n        } else {\n            state.camera.lookAt(boton1.current.position);\n            state.camera.position.lerp(vec.set(0, 2, 4), 0.1);\n            state.camera.updateProjectionMatrix();\n        }\n    });\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.Fragment, {\n        children: [\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_react_spring_three__WEBPACK_IMPORTED_MODULE_2__.animated.mesh, {\n                ref: boton1,\n                onClick: function() {\n                    return setClicked(!clicked);\n                },\n                children: [\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"boxGeometry\", {}, void 0, false, {\n                        fileName: \"C:\\\\Users\\\\Hogar\\\\Desktop\\\\programacion\\\\nextjs-cv\\\\components\\\\Animation.js\",\n                        lineNumber: 44,\n                        columnNumber: 17\n                    }, this),\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"meshPhongMaterial\", {\n                        color: \"royalblue\"\n                    }, void 0, false, {\n                        fileName: \"C:\\\\Users\\\\Hogar\\\\Desktop\\\\programacion\\\\nextjs-cv\\\\components\\\\Animation.js\",\n                        lineNumber: 45,\n                        columnNumber: 17\n                    }, this)\n                ]\n            }, void 0, true, {\n                fileName: \"C:\\\\Users\\\\Hogar\\\\Desktop\\\\programacion\\\\nextjs-cv\\\\components\\\\Animation.js\",\n                lineNumber: 43,\n                columnNumber: 13\n            }, this),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_react_spring_three__WEBPACK_IMPORTED_MODULE_2__.animated.mesh, {\n                position: [\n                    1,\n                    0,\n                    2\n                ],\n                scale: scale,\n                onClick: function() {\n                    return setActive(!active);\n                },\n                ref: boton2,\n                children: [\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"boxGeometry\", {}, void 0, false, {\n                        fileName: \"C:\\\\Users\\\\Hogar\\\\Desktop\\\\programacion\\\\nextjs-cv\\\\components\\\\Animation.js\",\n                        lineNumber: 48,\n                        columnNumber: 17\n                    }, this),\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"meshPhongMaterial\", {\n                        color: \"royalblue\"\n                    }, void 0, false, {\n                        fileName: \"C:\\\\Users\\\\Hogar\\\\Desktop\\\\programacion\\\\nextjs-cv\\\\components\\\\Animation.js\",\n                        lineNumber: 49,\n                        columnNumber: 17\n                    }, this)\n                ]\n            }, void 0, true, {\n                fileName: \"C:\\\\Users\\\\Hogar\\\\Desktop\\\\programacion\\\\nextjs-cv\\\\components\\\\Animation.js\",\n                lineNumber: 47,\n                columnNumber: 13\n            }, this),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_react_spring_three__WEBPACK_IMPORTED_MODULE_2__.animated.mesh, {\n                position: [\n                    -3,\n                    0,\n                    -3\n                ],\n                scale: scale,\n                onClick: function() {\n                    return setActive(!active);\n                },\n                ref: boton3,\n                children: [\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"boxGeometry\", {}, void 0, false, {\n                        fileName: \"C:\\\\Users\\\\Hogar\\\\Desktop\\\\programacion\\\\nextjs-cv\\\\components\\\\Animation.js\",\n                        lineNumber: 52,\n                        columnNumber: 17\n                    }, this),\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"meshPhongMaterial\", {\n                        color: \"royalblue\"\n                    }, void 0, false, {\n                        fileName: \"C:\\\\Users\\\\Hogar\\\\Desktop\\\\programacion\\\\nextjs-cv\\\\components\\\\Animation.js\",\n                        lineNumber: 53,\n                        columnNumber: 17\n                    }, this)\n                ]\n            }, void 0, true, {\n                fileName: \"C:\\\\Users\\\\Hogar\\\\Desktop\\\\programacion\\\\nextjs-cv\\\\components\\\\Animation.js\",\n                lineNumber: 51,\n                columnNumber: 13\n            }, this),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_react_spring_three__WEBPACK_IMPORTED_MODULE_2__.animated.mesh, {\n                position: [\n                    2,\n                    0,\n                    2\n                ],\n                scale: scale,\n                onClick: function() {\n                    return setActive(!active);\n                },\n                ref: boton4,\n                children: [\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"boxGeometry\", {}, void 0, false, {\n                        fileName: \"C:\\\\Users\\\\Hogar\\\\Desktop\\\\programacion\\\\nextjs-cv\\\\components\\\\Animation.js\",\n                        lineNumber: 56,\n                        columnNumber: 17\n                    }, this),\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"meshPhongMaterial\", {\n                        color: \"royalblue\"\n                    }, void 0, false, {\n                        fileName: \"C:\\\\Users\\\\Hogar\\\\Desktop\\\\programacion\\\\nextjs-cv\\\\components\\\\Animation.js\",\n                        lineNumber: 57,\n                        columnNumber: 17\n                    }, this)\n                ]\n            }, void 0, true, {\n                fileName: \"C:\\\\Users\\\\Hogar\\\\Desktop\\\\programacion\\\\nextjs-cv\\\\components\\\\Animation.js\",\n                lineNumber: 55,\n                columnNumber: 13\n            }, this)\n        ]\n    }, void 0, true);\n};\n_s(Animation, \"tJ38GMMgyZXi4nhSsRJ2YYxYYGg=\", false, function() {\n    return [\n        _react_spring_three__WEBPACK_IMPORTED_MODULE_2__.useSpring,\n        _react_three_fiber__WEBPACK_IMPORTED_MODULE_4__.useFrame\n    ];\n});\n_c = Animation;\nvar _c;\n$RefreshReg$(_c, \"Animation\");\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports on update so we can compare the boundary\n                // signatures.\n                module.hot.dispose(function (data) {\n                    data.prevExports = currentExports;\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevExports !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevExports !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9jb21wb25lbnRzL0FuaW1hdGlvbi5qcy5qcyIsIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7OztBQUFBO0FBQXdDO0FBQ2lCO0FBQ1Q7QUFDbEI7O0FBRWYsU0FBU00sU0FBUyxHQUFHOztJQUNoQyxJQUFNQyxNQUFNLEdBQUdQLDZDQUFNLEVBQUU7SUFDdkIsSUFBTVEsTUFBTSxHQUFHUiw2Q0FBTSxFQUFFO0lBQ3ZCLElBQU1TLE1BQU0sR0FBR1QsNkNBQU0sRUFBRTtJQUN2QixJQUFNVSxNQUFNLEdBQUdWLDZDQUFNLEVBQUU7SUFDdkIsSUFBNEJDLEdBQWUsR0FBZkEsK0NBQVEsQ0FBQyxLQUFLLENBQUMsRUFWL0MsTUFVaUIsR0FBZUEsR0FBZSxHQUE5QixFQVZqQixTQVU0QixHQUFJQSxHQUFlLEdBQW5CO0lBQ3hCLElBQThCQSxJQUFlLEdBQWZBLCtDQUFRLENBQUMsS0FBSyxDQUFDLEVBWGpELE9BV2tCLEdBQWdCQSxJQUFlLEdBQS9CLEVBWGxCLFVBVzhCLEdBQUlBLElBQWUsR0FBbkI7SUFDMUIsSUFBTSxLQUFPLEdBQUtDLDhEQUFTLENBQUM7UUFBRWEsS0FBSyxFQUFFSixNQUFNLEdBQUcsR0FBRyxHQUFHLEdBQUc7S0FBRSxDQUFDLENBQWxESSxLQUFLO0lBQ2IsSUFBTUMsR0FBRyxHQUFHLElBQUlYLDBDQUFhLEVBQUU7SUFFL0I7SUFRQUQsUUFBUSxDQUFDZSxTQUFBQSxLQUFLLEVBQUk7UUFDZCxJQUFNQyxFQUFFLEdBQUNDLFFBQVEsQ0FBQ0MsYUFBYSxDQUFDO1FBQ2hDLElBQUlULE9BQU87Z0VBRVBNLEtBQUssQ0FBQ0ksTUFBTSxDQUFDQztZQUNiTCxLQUFLLENBQUNJLE1BQU0sQ0FBQ0csUUFBUSxDQUFDQyxJQUFJLENBQUNYLEdBQUcsQ0FBQ1ksR0FBRyxDQUFDO1lBQ25DVCxLQUFLLENBQUNJO1NBR1QsTUFBTTtZQUNISixLQUFLLENBQUNJLE1BQU0sQ0FBQ0MsTUFBTSxDQUFDakIsTUFBTSxDQUFDa0IsT0FBTyxDQUFDQyxRQUFRLENBQUM7WUFDNUNQLEtBQUssQ0FBQ0ksTUFBTSxDQUFDRyxRQUFRLENBQUNDLElBQUksQ0FBQ1gsR0FBRyxDQUFDWSxHQUFHLENBQUMsQ0FBQyxFQUFFO1lBQ3RDVDtTQUVIO0tBQ0osQ0FBQztJQUVGLHFCQUNJOzs7Z0JBQ21CWSxHQUFHLEVBQUV4QixJQUFBQSw2REFBTTtnQkFBRXlCO3VGQUFlbEIsQ0FBQUEsOERBQW9CO2lCQUFBOztrQ0FDM0QsUUFBQ21COzs7OzRCQUFjO2tDQUNmO3dCQUFtQkUsS0FBSyxFQUFDOzs7Ozs0QkFBYzs7Ozs7O29CQUMzQjswQkFDaEI7Z0JBQWVULFFBQVEsRUFBRTtBQUFDLHFCQUFDO0FBQUUscUJBQUM7QUFBRSxxQkFBQztpQkFBQztnQkFBRVgsS0FBSztnQkFBU2lCOztpQkFBaUM7Z0JBQUVELEdBQUcsRUFBRXZCLE1BQU07Ozs7Ozs0QkFDN0U7a0NBQ2Y7d0JBQW1CMkIsS0FBSyxFQUFDOzs7Ozs0QkFBYzs7Ozs7O29CQUMzQjswQkFDaEI7Z0JBQWVULFFBQVEsRUFBRTtvQkFBQyxDQUFDO0FBQUcscUJBQUM7b0JBQUUsQ0FBQyxDQUFDO2lCQUFDO2dCQUFFWCxLQUFLO2dCQUFTaUI7O2lCQUFpQztnQkFBRUQsR0FBRyxFQUFFdEIsTUFBTTs7Ozs7OzRCQUMvRTtrQ0FDZjt3QkFBbUIwQixLQUFLLEVBQUM7Ozs7OzRCQUFjOzs7Ozs7b0JBQzNCOzBCQUNoQjtnQkFBZVQsUUFBUSxFQUFFO0FBQUMscUJBQUM7QUFBRSxxQkFBQztBQUFFLHFCQUFDO2lCQUFDO2dCQUFFWCxLQUFLO2dCQUFTaUI7O2lCQUFpQztnQkFBRUQsR0FBRyxFQUFFckIsTUFBTTs7Ozs7OzRCQUM3RTtrQ0FDZjt3QkFBbUJ5QixLQUFLLEVBQUM7Ozs7OzRCQUFjOzs7Ozs7b0JBQzNCOztvQkFDakIsQ0FDTjtDQUNKO0dBdkR1QjdCOzs7UUFrQnBCRixRQUFROzs7QUFsQllFLEtBQUFBLEdBQUFBLHdEQUFTIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vX05fRS8uL2NvbXBvbmVudHMvQW5pbWF0aW9uLmpzP2YyMDkiXSwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgdXNlUmVmLCB1c2VTdGF0ZSB9IGZyb20gJ3JlYWN0J1xyXG5pbXBvcnQgeyB1c2VTcHJpbmcsIGFuaW1hdGVkIH0gZnJvbSAnQHJlYWN0LXNwcmluZy90aHJlZSdcclxuaW1wb3J0IHsgdXNlRnJhbWUsICB9IGZyb20gJ0ByZWFjdC10aHJlZS9maWJlcic7XHJcbmltcG9ydCAqIGFzIFRSSEVFIGZyb20gJ3RocmVlJ1xyXG5cclxuZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gQW5pbWF0aW9uKCkge1xyXG4gICAgY29uc3QgYm90b24xID0gdXNlUmVmKCk7XHJcbiAgICBjb25zdCBib3RvbjIgPSB1c2VSZWYoKTtcclxuICAgIGNvbnN0IGJvdG9uMyA9IHVzZVJlZigpO1xyXG4gICAgY29uc3QgYm90b240ID0gdXNlUmVmKCk7XHJcbiAgICBjb25zdCBbYWN0aXZlLCBzZXRBY3RpdmVdID0gdXNlU3RhdGUoZmFsc2UpXHJcbiAgICBjb25zdCBbY2xpY2tlZCwgc2V0Q2xpY2tlZF0gPSB1c2VTdGF0ZShmYWxzZSlcclxuICAgIGNvbnN0IHsgc2NhbGUgfSA9IHVzZVNwcmluZyh7IHNjYWxlOiBhY3RpdmUgPyAxLjUgOiAwLjUgfSlcclxuICAgIGNvbnN0IHZlYyA9IG5ldyBUUkhFRS5WZWN0b3IzKClcclxuXHJcbiAgICAvKiB1c2VGcmFtZSgoe2Nsb2NrfSk9PntcclxuICAgICAgICBjb25zdCB0aW1lPSBjbG9jay5nZXRFbGFwc2VkVGltZSgpXHJcbiAgICAgICAgcHJ1ZWJhLmN1cnJlbnQucm90YXRpb24ueD10aW1lO1xyXG4gICAgfSkgKi9cclxuXHJcbiAgICB1c2VmcmFtZVxyXG5cclxuXHJcbiAgICB1c2VGcmFtZShzdGF0ZSA9PiB7XHJcbiAgICAgICAgY29uc3QgZWw9ZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2Jyk7XHJcbiAgICAgICAgaWYgKGNsaWNrZWQpIHtcclxuICAgICAgICAgICAgXHJcbiAgICAgICAgICAgIHN0YXRlLmNhbWVyYS5sb29rQXQoYm90b24xLmN1cnJlbnQucG9zaXRpb24pXHJcbiAgICAgICAgICAgIHN0YXRlLmNhbWVyYS5wb3NpdGlvbi5sZXJwKHZlYy5zZXQoMCwgMSwgMSksIDAuMSlcclxuICAgICAgICAgICAgc3RhdGUuY2FtZXJhLnVwZGF0ZVByb2plY3Rpb25NYXRyaXgoKSAgICAgXHJcbiAgICAgICAgICAgIFxyXG5cclxuICAgICAgICB9IGVsc2Uge1xyXG4gICAgICAgICAgICBzdGF0ZS5jYW1lcmEubG9va0F0KGJvdG9uMS5jdXJyZW50LnBvc2l0aW9uKVxyXG4gICAgICAgICAgICBzdGF0ZS5jYW1lcmEucG9zaXRpb24ubGVycCh2ZWMuc2V0KDAsIDIsIDQpLCAwLjEpXHJcbiAgICAgICAgICAgIHN0YXRlLmNhbWVyYS51cGRhdGVQcm9qZWN0aW9uTWF0cml4KClcclxuXHJcbiAgICAgICAgfVxyXG4gICAgfSlcclxuXHJcbiAgICByZXR1cm4gKFxyXG4gICAgICAgIDw+XHJcbiAgICAgICAgICAgIDxhbmltYXRlZC5tZXNoIHJlZj17Ym90b24xfSBvbkNsaWNrPXsoKSA9PiBzZXRDbGlja2VkKCFjbGlja2VkKX0+XHJcbiAgICAgICAgICAgICAgICA8Ym94R2VvbWV0cnkgLz5cclxuICAgICAgICAgICAgICAgIDxtZXNoUGhvbmdNYXRlcmlhbCBjb2xvcj1cInJveWFsYmx1ZVwiIC8+XHJcbiAgICAgICAgICAgIDwvYW5pbWF0ZWQubWVzaD5cclxuICAgICAgICAgICAgPGFuaW1hdGVkLm1lc2ggcG9zaXRpb249e1sxLCAwLCAyXX0gc2NhbGU9e3NjYWxlfSBvbkNsaWNrPXsoKSA9PiBzZXRBY3RpdmUoIWFjdGl2ZSl9IHJlZj17Ym90b24yfT5cclxuICAgICAgICAgICAgICAgIDxib3hHZW9tZXRyeSAvPlxyXG4gICAgICAgICAgICAgICAgPG1lc2hQaG9uZ01hdGVyaWFsIGNvbG9yPVwicm95YWxibHVlXCIgLz5cclxuICAgICAgICAgICAgPC9hbmltYXRlZC5tZXNoPlxyXG4gICAgICAgICAgICA8YW5pbWF0ZWQubWVzaCBwb3NpdGlvbj17Wy0zLCAwLCAtM119IHNjYWxlPXtzY2FsZX0gb25DbGljaz17KCkgPT4gc2V0QWN0aXZlKCFhY3RpdmUpfSByZWY9e2JvdG9uM30+XHJcbiAgICAgICAgICAgICAgICA8Ym94R2VvbWV0cnkgLz5cclxuICAgICAgICAgICAgICAgIDxtZXNoUGhvbmdNYXRlcmlhbCBjb2xvcj1cInJveWFsYmx1ZVwiIC8+XHJcbiAgICAgICAgICAgIDwvYW5pbWF0ZWQubWVzaD5cclxuICAgICAgICAgICAgPGFuaW1hdGVkLm1lc2ggcG9zaXRpb249e1syLCAwLCAyXX0gc2NhbGU9e3NjYWxlfSBvbkNsaWNrPXsoKSA9PiBzZXRBY3RpdmUoIWFjdGl2ZSl9IHJlZj17Ym90b240fT5cclxuICAgICAgICAgICAgICAgIDxib3hHZW9tZXRyeSAvPlxyXG4gICAgICAgICAgICAgICAgPG1lc2hQaG9uZ01hdGVyaWFsIGNvbG9yPVwicm95YWxibHVlXCIgLz5cclxuICAgICAgICAgICAgPC9hbmltYXRlZC5tZXNoPlxyXG4gICAgICAgIDwvPlxyXG4gICAgKVxyXG59XHJcbiJdLCJuYW1lcyI6WyJ1c2VSZWYiLCJ1c2VTdGF0ZSIsInVzZVNwcmluZyIsImFuaW1hdGVkIiwidXNlRnJhbWUiLCJUUkhFRSIsIkFuaW1hdGlvbiIsImJvdG9uMSIsImJvdG9uMiIsImJvdG9uMyIsImJvdG9uNCIsImFjdGl2ZSIsInNldEFjdGl2ZSIsImNsaWNrZWQiLCJzZXRDbGlja2VkIiwic2NhbGUiLCJ2ZWMiLCJWZWN0b3IzIiwidXNlZnJhbWUiLCJzdGF0ZSIsImVsIiwiZG9jdW1lbnQiLCJjcmVhdGVFbGVtZW50IiwiY2FtZXJhIiwibG9va0F0IiwiY3VycmVudCIsInBvc2l0aW9uIiwibGVycCIsInNldCIsInVwZGF0ZVByb2plY3Rpb25NYXRyaXgiLCJtZXNoIiwicmVmIiwib25DbGljayIsImJveEdlb21ldHJ5IiwibWVzaFBob25nTWF0ZXJpYWwiLCJjb2xvciJdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///./components/Animation.js\n");

/***/ })

});