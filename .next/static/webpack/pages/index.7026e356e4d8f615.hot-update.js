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

/***/ "./pages/index.js":
/*!************************!*\
  !*** ./pages/index.js ***!
  \************************/
/***/ (function(module, __webpack_exports__, __webpack_require__) {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"./node_modules/react/jsx-dev-runtime.js\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _components_Layout__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../components/Layout */ \"./components/Layout.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_2__);\n/* harmony import */ var _components_Header__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../components/Header */ \"./components/Header.js\");\n/* harmony import */ var _components_Skills__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../components/Skills */ \"./components/Skills.js\");\n/* harmony import */ var _components_Studies__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../components/Studies */ \"./components/Studies.js\");\n/* harmony import */ var _react_three_fiber__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @react-three/fiber */ \"./node_modules/@react-three/fiber/dist/react-three-fiber.esm.js\");\n/* harmony import */ var _react_three_drei__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @react-three/drei */ \"./node_modules/@react-three/drei/index.js\");\n/* harmony import */ var _components_SphereAnimated__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../components/SphereAnimated */ \"./components/SphereAnimated.js\");\n/* harmony import */ var _components_Asteroids__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../components/Asteroids */ \"./components/Asteroids.js\");\nfunction _defineProperty(obj, key, value) {\n    if (key in obj) {\n        Object.defineProperty(obj, key, {\n            value: value,\n            enumerable: true,\n            configurable: true,\n            writable: true\n        });\n    } else {\n        obj[key] = value;\n    }\n    return obj;\n}\nfunction _objectSpread(target) {\n    for(var i = 1; i < arguments.length; i++){\n        var source = arguments[i] != null ? arguments[i] : {};\n        var ownKeys = Object.keys(source);\n        if (typeof Object.getOwnPropertySymbols === \"function\") {\n            ownKeys = ownKeys.concat(Object.getOwnPropertySymbols(source).filter(function(sym) {\n                return Object.getOwnPropertyDescriptor(source, sym).enumerable;\n            }));\n        }\n        ownKeys.forEach(function(key) {\n            _defineProperty(target, key, source[key]);\n        });\n    }\n    return target;\n}\nfunction _objectWithoutProperties(source, excluded) {\n    if (source == null) return {};\n    var target = _objectWithoutPropertiesLoose(source, excluded);\n    var key, i;\n    if (Object.getOwnPropertySymbols) {\n        var sourceSymbolKeys = Object.getOwnPropertySymbols(source);\n        for(i = 0; i < sourceSymbolKeys.length; i++){\n            key = sourceSymbolKeys[i];\n            if (excluded.indexOf(key) >= 0) continue;\n            if (!Object.prototype.propertyIsEnumerable.call(source, key)) continue;\n            target[key] = source[key];\n        }\n    }\n    return target;\n}\nfunction _objectWithoutPropertiesLoose(source, excluded) {\n    if (source == null) return {};\n    var target = {};\n    var sourceKeys = Object.keys(source);\n    var key, i;\n    for(i = 0; i < sourceKeys.length; i++){\n        key = sourceKeys[i];\n        if (excluded.indexOf(key) >= 0) continue;\n        target[key] = source[key];\n    }\n    return target;\n}\nvar _this = undefined;\n\n\n\n\n\n\n\n\n\n\n\nvar _s = $RefreshSig$();\nvar Index = function() {\n    var MovingSpot = function MovingSpot(_param) {\n        var _vec = _param.vec, vec = _vec === void 0 ? new Vector3() : _vec, props = _objectWithoutProperties(_param, [\n            \"vec\"\n        ]);\n        var light = (0,react__WEBPACK_IMPORTED_MODULE_2__.useRef)();\n        var viewport = (0,_react_three_fiber__WEBPACK_IMPORTED_MODULE_8__.useThree)(function(state) {\n            return state.viewport;\n        });\n        useFrame(function(state) {\n            light.current.target.position.lerp(vec.set(state.mouse.x * viewport.width / 2, state.mouse.y * viewport.height / 2, 0), 0.1);\n            light.current.target.updateMatrixWorld();\n        });\n        return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_react_three_drei__WEBPACK_IMPORTED_MODULE_9__.SpotLight, _objectSpread({\n            castShadow: true,\n            ref: light,\n            penumbra: 1,\n            distance: 6,\n            angle: 0.35,\n            attenuation: 5,\n            anglePower: 4,\n            intensity: 2\n        }, props), void 0, false, {\n            fileName: \"C:\\\\Users\\\\Hogar\\\\Desktop\\\\programacion\\\\nextjs-cv\\\\pages\\\\index.js\",\n            lineNumber: 21,\n            columnNumber: 16\n        }, this);\n    };\n    _s();\n    var depthBuffer = (0,_react_three_drei__WEBPACK_IMPORTED_MODULE_9__.useDepthBuffer)({\n        frames: 1\n    });\n    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_components_Layout__WEBPACK_IMPORTED_MODULE_1__[\"default\"], {\n        children: [\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_components_Header__WEBPACK_IMPORTED_MODULE_3__[\"default\"], {}, void 0, false, {\n                fileName: \"C:\\\\Users\\\\Hogar\\\\Desktop\\\\programacion\\\\nextjs-cv\\\\pages\\\\index.js\",\n                lineNumber: 25,\n                columnNumber: 9\n            }, _this),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_react_three_fiber__WEBPACK_IMPORTED_MODULE_8__.Canvas, {\n                className: \"canvas1\",\n                children: [\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(MovingSpot, {\n                        depthBuffer: depthBuffer,\n                        color: \"#0c8cbf\",\n                        position: [\n                            3,\n                            3,\n                            2\n                        ]\n                    }, void 0, false, {\n                        fileName: \"C:\\\\Users\\\\Hogar\\\\Desktop\\\\programacion\\\\nextjs-cv\\\\pages\\\\index.js\",\n                        lineNumber: 28,\n                        columnNumber: 9\n                    }, _this),\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(MovingSpot, {\n                        depthBuffer: depthBuffer,\n                        color: \"#b00c3f\",\n                        position: [\n                            1,\n                            3,\n                            0\n                        ]\n                    }, void 0, false, {\n                        fileName: \"C:\\\\Users\\\\Hogar\\\\Desktop\\\\programacion\\\\nextjs-cv\\\\pages\\\\index.js\",\n                        lineNumber: 29,\n                        columnNumber: 7\n                    }, _this),\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_react_three_drei__WEBPACK_IMPORTED_MODULE_9__.OrbitControls, {\n                        speed: 1,\n                        rotation: [\n                            1,\n                            22,\n                            0\n                        ]\n                    }, void 0, false, {\n                        fileName: \"C:\\\\Users\\\\Hogar\\\\Desktop\\\\programacion\\\\nextjs-cv\\\\pages\\\\index.js\",\n                        lineNumber: 32,\n                        columnNumber: 13\n                    }, _this),\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_react_three_drei__WEBPACK_IMPORTED_MODULE_9__.PerspectiveCamera, {\n                        makeDefault: true,\n                        rotation: [\n                            1,\n                            22,\n                            0\n                        ],\n                        position: [\n                            0,\n                            0.1,\n                            2\n                        ],\n                        fov: 75\n                    }, void 0, false, {\n                        fileName: \"C:\\\\Users\\\\Hogar\\\\Desktop\\\\programacion\\\\nextjs-cv\\\\pages\\\\index.js\",\n                        lineNumber: 33,\n                        columnNumber: 13\n                    }, _this),\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_react_three_drei__WEBPACK_IMPORTED_MODULE_9__.SpotLight, {\n                        distance: 5,\n                        angle: 0.15,\n                        attenuation: 5,\n                        anglePower: 5\n                    }, void 0, false, {\n                        fileName: \"C:\\\\Users\\\\Hogar\\\\Desktop\\\\programacion\\\\nextjs-cv\\\\pages\\\\index.js\",\n                        lineNumber: 34,\n                        columnNumber: 13\n                    }, _this),\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"hemisphereLight\", {\n                        castShadow: true,\n                        \"color-setHSL\": [\n                            1,\n                            1,\n                            1\n                        ],\n                        position: [\n                            10,\n                            150,\n                            0\n                        ],\n                        args: [\n                            \"#ffffff\",\n                            \"#ffffff\",\n                            0.1\n                        ]\n                    }, void 0, false, {\n                        fileName: \"C:\\\\Users\\\\Hogar\\\\Desktop\\\\programacion\\\\nextjs-cv\\\\pages\\\\index.js\",\n                        lineNumber: 41,\n                        columnNumber: 13\n                    }, _this),\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"directionalLight\", {\n                        intensity: 2,\n                        castShadow: true,\n                        shadow: true,\n                        position: [\n                            0,\n                            10,\n                            20\n                        ]\n                    }, void 0, false, {\n                        fileName: \"C:\\\\Users\\\\Hogar\\\\Desktop\\\\programacion\\\\nextjs-cv\\\\pages\\\\index.js\",\n                        lineNumber: 42,\n                        columnNumber: 13\n                    }, _this),\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(react__WEBPACK_IMPORTED_MODULE_2__.Suspense, {\n                        fallback: null,\n                        children: [\n                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_components_SphereAnimated__WEBPACK_IMPORTED_MODULE_6__[\"default\"], {\n                                args: [\n                                    1,\n                                    128,\n                                    128\n                                ],\n                                position: [\n                                    0,\n                                    0,\n                                    0\n                                ]\n                            }, void 0, false, {\n                                fileName: \"C:\\\\Users\\\\Hogar\\\\Desktop\\\\programacion\\\\nextjs-cv\\\\pages\\\\index.js\",\n                                lineNumber: 50,\n                                columnNumber: 17\n                            }, _this),\n                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_components_Asteroids__WEBPACK_IMPORTED_MODULE_7__[\"default\"], {\n                                args: [\n                                    1.1,\n                                    180\n                                ],\n                                position: [\n                                    10,\n                                    10,\n                                    10\n                                ]\n                            }, void 0, false, {\n                                fileName: \"C:\\\\Users\\\\Hogar\\\\Desktop\\\\programacion\\\\nextjs-cv\\\\pages\\\\index.js\",\n                                lineNumber: 51,\n                                columnNumber: 17\n                            }, _this)\n                        ]\n                    }, void 0, true, {\n                        fileName: \"C:\\\\Users\\\\Hogar\\\\Desktop\\\\programacion\\\\nextjs-cv\\\\pages\\\\index.js\",\n                        lineNumber: 47,\n                        columnNumber: 13\n                    }, _this),\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_react_three_drei__WEBPACK_IMPORTED_MODULE_9__.Sparkles, {\n                        count: 20,\n                        size: 100,\n                        speed: 1,\n                        opacity: 1,\n                        scale: 20,\n                        noise: 10,\n                        color: \"#ffffff\"\n                    }, void 0, false, {\n                        fileName: \"C:\\\\Users\\\\Hogar\\\\Desktop\\\\programacion\\\\nextjs-cv\\\\pages\\\\index.js\",\n                        lineNumber: 56,\n                        columnNumber: 13\n                    }, _this),\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_react_three_drei__WEBPACK_IMPORTED_MODULE_9__.Stars, {\n                        radius: 600,\n                        depth: 50,\n                        count: 10000,\n                        factor: 8\n                    }, void 0, false, {\n                        fileName: \"C:\\\\Users\\\\Hogar\\\\Desktop\\\\programacion\\\\nextjs-cv\\\\pages\\\\index.js\",\n                        lineNumber: 57,\n                        columnNumber: 13\n                    }, _this)\n                ]\n            }, void 0, true, {\n                fileName: \"C:\\\\Users\\\\Hogar\\\\Desktop\\\\programacion\\\\nextjs-cv\\\\pages\\\\index.js\",\n                lineNumber: 26,\n                columnNumber: 9\n            }, _this),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_components_Skills__WEBPACK_IMPORTED_MODULE_4__[\"default\"], {}, void 0, false, {\n                fileName: \"C:\\\\Users\\\\Hogar\\\\Desktop\\\\programacion\\\\nextjs-cv\\\\pages\\\\index.js\",\n                lineNumber: 72,\n                columnNumber: 9\n            }, _this),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_components_Studies__WEBPACK_IMPORTED_MODULE_5__[\"default\"], {}, void 0, false, {\n                fileName: \"C:\\\\Users\\\\Hogar\\\\Desktop\\\\programacion\\\\nextjs-cv\\\\pages\\\\index.js\",\n                lineNumber: 74,\n                columnNumber: 9\n            }, _this)\n        ]\n    }, void 0, true, {\n        fileName: \"C:\\\\Users\\\\Hogar\\\\Desktop\\\\programacion\\\\nextjs-cv\\\\pages\\\\index.js\",\n        lineNumber: 24,\n        columnNumber: 5\n    }, _this);\n};\n_s(Index, \"I4r8VZffKykJieUufPlEHQJy2MM=\", false, function() {\n    return [\n        _react_three_drei__WEBPACK_IMPORTED_MODULE_9__.useDepthBuffer\n    ];\n});\n_c = Index;\n/* harmony default export */ __webpack_exports__[\"default\"] = (Index);\nvar _c;\n$RefreshReg$(_c, \"Index\");\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports on update so we can compare the boundary\n                // signatures.\n                module.hot.dispose(function (data) {\n                    data.prevExports = currentExports;\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevExports !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevExports !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9wYWdlcy9pbmRleC5qcy5qcyIsIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7O0FBQUE7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUF5QztBQUNWO0FBQ1U7QUFDQztBQUNFO0FBQ3NCO0FBQytEO0FBQ3ZFO0FBQ1Y7QUFDZjs7QUFFakMsSUFBTW1CLEtBQUssR0FBRyxXQUFNO1FBRVBDLFVBQVUsR0FBbkIsU0FBU0EsVUFBVSxDQUFDLE1BQWlDLEVBQUU7bUJBQW5DLE1BQWlDLENBQS9CQyxHQUFHLEVBQUhBLEdBQUcscUJBQUcsSUFBSUMsT0FBTyxFQUFFLFNBQUtDLEtBQUssNEJBQS9CLE1BQWlDO1lBQS9CRixLQUFHOztRQUNyQixJQUFNRyxLQUFLLEdBQUd2Qiw2Q0FBTSxFQUFFO1FBQ3RCLElBQU13QixRQUFRLEdBQUduQiw0REFBUSxDQUFDLFNBQUNvQixLQUFLO21CQUFLQSxLQUFLLENBQUNELFFBQVE7U0FBQSxDQUFDO1FBQ3BERSxRQUFRLENBQUMsU0FBQ0QsS0FBSyxFQUFLO1lBQ2xCRixLQUFLLENBQUNJLE9BQU8sQ0FBQ0MsTUFBTSxDQUFDQyxRQUFRLENBQUNDLElBQUksQ0FBQ1YsR0FBRyxDQUFDVyxHQUFHLENBQUMsS0FBTSxDQUFDQyxLQUFLLENBQUNDLENBQUMsR0FBR1QsUUFBUSxDQUFDVSxLQUFLLEdBQUksQ0FBQyxFQUFFLEtBQU0sQ0FBQ0YsS0FBSyxDQUFDRyxDQUFDLEdBQUdYLFFBQVEsQ0FBQ1ksTUFBTSxHQUFJLENBQUMsRUFBRSxDQUFDLENBQUMsRUFBRSxHQUFHLENBQUM7WUFDaEliLEtBQUssQ0FBQ0ksT0FBTyxDQUFDQyxNQUFNLENBQUNTLGlCQUFpQixFQUFFO1NBQ3pDLENBQUM7UUFDRixxQkFBTyw4REFBQ3hCLHdEQUFTO1lBQUNQLFVBQVU7WUFBQ2dDLEdBQUcsRUFBRWYsS0FBSztZQUFFZ0IsUUFBUSxFQUFFLENBQUM7WUFBRUMsUUFBUSxFQUFFLENBQUM7WUFBRUMsS0FBSyxFQUFFLElBQUk7WUFBRUMsV0FBVyxFQUFFLENBQUM7WUFBRUMsVUFBVSxFQUFFLENBQUM7WUFBRUMsU0FBUyxFQUFFLENBQUM7V0FBTXRCLEtBQUs7Ozs7Z0JBQUk7S0FDM0k7O0lBVEgsSUFBTXVCLFdBQVcsR0FBRy9CLGlFQUFjLENBQUM7UUFBRWdDLE1BQU0sRUFBRSxDQUFDO0tBQUUsQ0FBQztrQkFXakQsOERBQUMvQywwREFBTTs7MEJBQ0gsOERBQUNFLDBEQUFNOzs7O3FCQUFHOzBCQUNWLDhEQUFDRyxzREFBTTtnQkFBQzJDLFNBQVMsRUFBQyxTQUFTOztrQ0FFM0IsOERBQUM1QixVQUFVO3dCQUFDMEIsV0FBVyxFQUFFQSxXQUFXO3dCQUFFRyxLQUFLLEVBQUMsU0FBUzt3QkFBQ25CLFFBQVEsRUFBRTtBQUFDLDZCQUFDO0FBQUUsNkJBQUM7QUFBRSw2QkFBQzt5QkFBQzs7Ozs7NkJBQUk7a0NBQy9FLDhEQUFDVixVQUFVO3dCQUFDMEIsV0FBVyxFQUFFQSxXQUFXO3dCQUFFRyxLQUFLLEVBQUMsU0FBUzt3QkFBQ25CLFFBQVEsRUFBRTtBQUFDLDZCQUFDO0FBQUUsNkJBQUM7QUFBRSw2QkFBQzt5QkFBQzs7Ozs7NkJBQUk7a0NBR3ZFLDhEQUFDdEIsNERBQWE7d0JBQUMwQyxLQUFLLEVBQUUsQ0FBQzt3QkFBRUMsUUFBUSxFQUFFO0FBQUMsNkJBQUM7QUFBRSw4QkFBRTtBQUFFLDZCQUFDO3lCQUFDOzs7Ozs2QkFBSTtrQ0FDakQsOERBQUN6QyxnRUFBaUI7d0JBQUMwQyxXQUFXO3dCQUFDRCxRQUFRLEVBQUU7QUFBQyw2QkFBQztBQUFFLDhCQUFFO0FBQUUsNkJBQUM7eUJBQUM7d0JBQUVyQixRQUFRLEVBQUU7QUFBQyw2QkFBQztBQUFFLCtCQUFHO0FBQUUsNkJBQUM7eUJBQUM7d0JBQUV1QixHQUFHLEVBQUUsRUFBRTs7Ozs7NkJBQUk7a0NBQ3ZGLDhEQUFDdkMsd0RBQVM7d0JBQ04yQixRQUFRLEVBQUUsQ0FBQzt3QkFDWEMsS0FBSyxFQUFFLElBQUk7d0JBQ1hDLFdBQVcsRUFBRSxDQUFDO3dCQUNkQyxVQUFVLEVBQUUsQ0FBQzs7Ozs7NkJBQ2Y7a0NBRUYsOERBQUNVLGlCQUFlO3dCQUFDL0MsVUFBVTt3QkFBQ2dELGNBQVksRUFBRTtBQUFDLDZCQUFDO0FBQUUsNkJBQUM7QUFBRSw2QkFBQzt5QkFBQzt3QkFBRXpCLFFBQVEsRUFBRTtBQUFDLDhCQUFFO0FBQUUsK0JBQUc7QUFBRSw2QkFBQzt5QkFBQzt3QkFBRTBCLElBQUksRUFBRTs0QkFBQyxTQUFTOzRCQUFFLFNBQVM7QUFBRSwrQkFBRzt5QkFBQzs7Ozs7NkJBQUk7a0NBQ2xILDhEQUFDQyxrQkFBZ0I7d0JBQUNaLFNBQVMsRUFBRSxDQUFDO3dCQUFFdEMsVUFBVTt3QkFBQ21ELE1BQU07d0JBQUM1QixRQUFRLEVBQUU7QUFBQyw2QkFBQztBQUFFLDhCQUFFO0FBQUUsOEJBQUU7eUJBQUM7Ozs7OzZCQUFJO2tDQUszRSw4REFBQ1osMkNBQVE7d0JBQUN5QyxRQUFRLEVBQUUsSUFBSTs7MENBR3BCLDhEQUFDM0Msa0VBQWM7Z0NBQUN3QyxJQUFJLEVBQUU7QUFBQyxxQ0FBQztBQUFFLHVDQUFHO0FBQUUsdUNBQUc7aUNBQUM7Z0NBQUUxQixRQUFRLEVBQUU7QUFBQyxxQ0FBQztBQUFFLHFDQUFDO0FBQUUscUNBQUM7aUNBQUM7Ozs7O3FDQUFJOzBDQUM1RCw4REFBQ2IsNkRBQVM7Z0NBQUN1QyxJQUFJLEVBQUU7QUFBQyx1Q0FBRztBQUFFLHVDQUFHO2lDQUFDO2dDQUFFMUIsUUFBUSxFQUFFO0FBQUMsc0NBQUU7QUFBRSxzQ0FBRTtBQUFFLHNDQUFFO2lDQUFDOzs7OztxQ0FBSTs7Ozs7OzZCQUloRDtrQ0FDWCw4REFBQ2xCLHVEQUFRO3dCQUFDZ0QsS0FBSyxFQUFFLEVBQUU7d0JBQUVDLElBQUksRUFBRSxHQUFHO3dCQUFFWCxLQUFLLEVBQUUsQ0FBQzt3QkFBRVksT0FBTyxFQUFFLENBQUM7d0JBQUVDLEtBQUssRUFBRSxFQUFFO3dCQUFFQyxLQUFLLEVBQUUsRUFBRTt3QkFBRWYsS0FBSyxFQUFFLFNBQVM7Ozs7OzZCQUFJO2tDQUNoRyw4REFBQ3hDLG9EQUFLO3dCQUFDd0QsTUFBTSxFQUFFLEdBQUc7d0JBQUVDLEtBQUssRUFBRSxFQUFFO3dCQUFFTixLQUFLLEVBQUUsS0FBSzt3QkFBRU8sTUFBTSxFQUFFLENBQUM7Ozs7OzZCQUFJOzs7Ozs7cUJBQ3JEOzBCQWNULDhEQUFDaEUsMERBQU07Ozs7cUJBQUc7MEJBRVYsOERBQUNDLDJEQUFPOzs7O3FCQUFHOzs7Ozs7YUFFTjtDQUNaO0dBakVLZSxLQUFLOztRQUNhSiw2REFBYzs7O0FBRGhDSSxLQUFBQSxLQUFLO0FBbUVYLCtEQUFlQSxLQUFLLEVBQUMiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vcGFnZXMvaW5kZXguanM/YmVlNyJdLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgTGF5b3V0IGZyb20gJy4uL2NvbXBvbmVudHMvTGF5b3V0J1xyXG5pbXBvcnQgeyB1c2VSZWYgfSBmcm9tICdyZWFjdCc7XHJcbmltcG9ydCBIZWFkZXIgZnJvbSAnLi4vY29tcG9uZW50cy9IZWFkZXInXHJcbmltcG9ydCBTa2lsbHMgZnJvbSAnLi4vY29tcG9uZW50cy9Ta2lsbHMnO1xyXG5pbXBvcnQgU3R1ZGllcyBmcm9tICcuLi9jb21wb25lbnRzL1N0dWRpZXMnO1xyXG5pbXBvcnQgeyBDYW52YXMsIHVzZVRocmVlLCBjYXN0U2hhZG93IH0gZnJvbSAnQHJlYWN0LXRocmVlL2ZpYmVyJztcclxuaW1wb3J0IHsgT3JiaXRDb250cm9scywgU3RhcnMsIFBlcnNwZWN0aXZlQ2FtZXJhLCBTdGFnZSwgU3BhcmtsZXMsIHVzZUdMVEYsIFNwb3RMaWdodCwgdXNlRGVwdGhCdWZmZXIgfSBmcm9tICdAcmVhY3QtdGhyZWUvZHJlaSc7XHJcbmltcG9ydCBTcGhlcmVBbmltYXRlZCBmcm9tICcuLi9jb21wb25lbnRzL1NwaGVyZUFuaW1hdGVkJztcclxuaW1wb3J0IEFzdGVyb2lkcyBmcm9tICcuLi9jb21wb25lbnRzL0FzdGVyb2lkcyc7XHJcbmltcG9ydCB7IFN1c3BlbnNlIH0gZnJvbSAncmVhY3QnO1xyXG5cclxuY29uc3QgSW5kZXggPSAoKSA9PiB7XHJcbiAgICBjb25zdCBkZXB0aEJ1ZmZlciA9IHVzZURlcHRoQnVmZmVyKHsgZnJhbWVzOiAxIH0pXHJcbiAgICBmdW5jdGlvbiBNb3ZpbmdTcG90KHsgdmVjID0gbmV3IFZlY3RvcjMoKSwgLi4ucHJvcHMgfSkge1xyXG4gICAgICAgIGNvbnN0IGxpZ2h0ID0gdXNlUmVmKClcclxuICAgICAgICBjb25zdCB2aWV3cG9ydCA9IHVzZVRocmVlKChzdGF0ZSkgPT4gc3RhdGUudmlld3BvcnQpXHJcbiAgICAgICAgdXNlRnJhbWUoKHN0YXRlKSA9PiB7XHJcbiAgICAgICAgICBsaWdodC5jdXJyZW50LnRhcmdldC5wb3NpdGlvbi5sZXJwKHZlYy5zZXQoKHN0YXRlLm1vdXNlLnggKiB2aWV3cG9ydC53aWR0aCkgLyAyLCAoc3RhdGUubW91c2UueSAqIHZpZXdwb3J0LmhlaWdodCkgLyAyLCAwKSwgMC4xKVxyXG4gICAgICAgICAgbGlnaHQuY3VycmVudC50YXJnZXQudXBkYXRlTWF0cml4V29ybGQoKVxyXG4gICAgICAgIH0pXHJcbiAgICAgICAgcmV0dXJuIDxTcG90TGlnaHQgY2FzdFNoYWRvdyByZWY9e2xpZ2h0fSBwZW51bWJyYT17MX0gZGlzdGFuY2U9ezZ9IGFuZ2xlPXswLjM1fSBhdHRlbnVhdGlvbj17NX0gYW5nbGVQb3dlcj17NH0gaW50ZW5zaXR5PXsyfSB7Li4ucHJvcHN9IC8+XHJcbiAgICAgIH1cclxuXHJcbiAgICA8TGF5b3V0PlxyXG4gICAgICAgIDxIZWFkZXIgLz5cclxuICAgICAgICA8Q2FudmFzIGNsYXNzTmFtZT0nY2FudmFzMSc+XHJcblxyXG4gICAgICAgIDxNb3ZpbmdTcG90IGRlcHRoQnVmZmVyPXtkZXB0aEJ1ZmZlcn0gY29sb3I9XCIjMGM4Y2JmXCIgcG9zaXRpb249e1szLCAzLCAyXX0gLz5cclxuICAgICAgPE1vdmluZ1Nwb3QgZGVwdGhCdWZmZXI9e2RlcHRoQnVmZmVyfSBjb2xvcj1cIiNiMDBjM2ZcIiBwb3NpdGlvbj17WzEsIDMsIDBdfSAvPlxyXG5cclxuXHJcbiAgICAgICAgICAgIDxPcmJpdENvbnRyb2xzIHNwZWVkPXsxfSByb3RhdGlvbj17WzEsIDIyLCAwXX0gLz5cclxuICAgICAgICAgICAgPFBlcnNwZWN0aXZlQ2FtZXJhIG1ha2VEZWZhdWx0IHJvdGF0aW9uPXtbMSwgMjIsIDBdfSBwb3NpdGlvbj17WzAsIDAuMSwgMl19IGZvdj17NzV9IC8+XHJcbiAgICAgICAgICAgIDxTcG90TGlnaHRcclxuICAgICAgICAgICAgICAgIGRpc3RhbmNlPXs1fVxyXG4gICAgICAgICAgICAgICAgYW5nbGU9ezAuMTV9XHJcbiAgICAgICAgICAgICAgICBhdHRlbnVhdGlvbj17NX1cclxuICAgICAgICAgICAgICAgIGFuZ2xlUG93ZXI9ezV9IC8vIERpZmZ1c2UtY29uZSBhbmdsZVBvd2VyIChkZWZhdWx0OiA1KVxyXG4gICAgICAgICAgICAvPlxyXG5cclxuICAgICAgICAgICAgPGhlbWlzcGhlcmVMaWdodCBjYXN0U2hhZG93IGNvbG9yLXNldEhTTD17WzEsIDEsIDFdfSBwb3NpdGlvbj17WzEwLCAxNTAsIDBdfSBhcmdzPXtbXCIjZmZmZmZmXCIsIFwiI2ZmZmZmZlwiLCAwLjFdfSAvPlxyXG4gICAgICAgICAgICA8ZGlyZWN0aW9uYWxMaWdodCBpbnRlbnNpdHk9ezJ9IGNhc3RTaGFkb3cgc2hhZG93IHBvc2l0aW9uPXtbMCwgMTAsIDIwXX0gLz5cclxuXHJcbiAgICAgICAgICAgIHsvKiAgPGFtYmllbnRMaWdodCBpbnRlbnNpdHk9ezAuNX0gLz5cclxuICAgICAgICAgICAgICAgIDxkaXJlY3Rpb25hbExpZ2h0IGludGVuc2l0eT17MX0gcG9zaXRpb249e1swLCAwLCAxXX0gLz4gKi99XHJcblxyXG4gICAgICAgICAgICA8U3VzcGVuc2UgZmFsbGJhY2s9e251bGx9PlxyXG4gICAgICAgICAgICAgICAgey8qIDxTdGFnZSBjb250YWN0U2hhZG93IHNoYWRvd3MgYWRqdXN0Q2FtZXJhIGludGVuc2l0eT17MC4xfSA+ICovfVxyXG5cclxuICAgICAgICAgICAgICAgIDxTcGhlcmVBbmltYXRlZCBhcmdzPXtbMSwgMTI4LCAxMjhdfSBwb3NpdGlvbj17WzAsIDAsIDBdfSAvPlxyXG4gICAgICAgICAgICAgICAgPEFzdGVyb2lkcyBhcmdzPXtbMS4xLCAxODBdfSBwb3NpdGlvbj17WzEwLCAxMCwgMTBdfSAvPlxyXG5cclxuICAgICAgICAgICAgICAgIHsvKiA8L1N0YWdlPiAqL31cclxuXHJcbiAgICAgICAgICAgIDwvU3VzcGVuc2U+XHJcbiAgICAgICAgICAgIDxTcGFya2xlcyBjb3VudD17MjB9IHNpemU9ezEwMH0gc3BlZWQ9ezF9IG9wYWNpdHk9ezF9IHNjYWxlPXsyMH0gbm9pc2U9ezEwfSBjb2xvcj17XCIjZmZmZmZmXCJ9IC8+XHJcbiAgICAgICAgICAgIDxTdGFycyByYWRpdXM9ezYwMH0gZGVwdGg9ezUwfSBjb3VudD17MTAwMDB9IGZhY3Rvcj17OH0gLz5cclxuICAgICAgICA8L0NhbnZhcz5cclxuICAgICAgICB7LyogPENhbnZhcyBjbGFzc05hbWU9J2NhbnZhczInPlxyXG5cclxuICAgICAgICAgICAgPE9yYml0Q29udHJvbHMgYXV0b1JvdGF0ZVNwZWVkPXswLjF9IGF1dG9Sb3RhdGUgLz5cclxuICAgICAgICAgICAgPFBlcnNwZWN0aXZlQ2FtZXJhIG1ha2VEZWZhdWx0IHBvc2l0aW9uPXtbMCwgMC4xLCAyXX0gZm92PXszNX0+XHJcbiAgICAgICAgICAgICAgICA8cG9pbnRMaWdodCBpbnRlbnNpdHk9ezF9IHBvc2l0aW9uPXtbMCwgMTAsIDNdfSAvPlxyXG4gICAgICAgICAgICAgICAgPGRpcmVjdGlvbmFsTGlnaHQgaW50ZW5zaXR5PXsxfSBwb3NpdGlvbj17WzEsIDIsIC0xMF19IC8+XHJcbiAgICAgICAgICAgICAgICA8YW1iaWVudExpZ2h0IGludGVuc2l0eT17MC4yfSAvPlxyXG4gICAgICAgICAgICA8L1BlcnNwZWN0aXZlQ2FtZXJhPlxyXG4gICAgICAgICAgICA8U3VzcGVuc2UgZmFsbGJhY2s9e251bGx9PlxyXG4gICAgICAgICAgICA8U3BoZXJlQW5pbWF0ZWQgYXJncz17WzEsIDY0LCA2NF19IHBvc2l0aW9uPXtbMCwgMCwgMF19IC8+XHJcbiAgICAgICAgICAgICAgICA8QXN0ZXJvaWRzIGFyZ3M9e1sxLjEsIDE4MF19IHBvc2l0aW9uPXtbMTAsIDEwLCAxMF19IC8+XHJcbiAgICAgICAgICAgIDwvU3VzcGVuc2U+XHJcbiAgICAgICAgPC9DYW52YXM+ICovfVxyXG4gICAgICAgIDxTa2lsbHMgLz5cclxuXHJcbiAgICAgICAgPFN0dWRpZXMgLz5cclxuXHJcbiAgICA8L0xheW91dD5cclxufVxyXG5cclxuZXhwb3J0IGRlZmF1bHQgSW5kZXg7Il0sIm5hbWVzIjpbIkxheW91dCIsInVzZVJlZiIsIkhlYWRlciIsIlNraWxscyIsIlN0dWRpZXMiLCJDYW52YXMiLCJ1c2VUaHJlZSIsImNhc3RTaGFkb3ciLCJPcmJpdENvbnRyb2xzIiwiU3RhcnMiLCJQZXJzcGVjdGl2ZUNhbWVyYSIsIlN0YWdlIiwiU3BhcmtsZXMiLCJ1c2VHTFRGIiwiU3BvdExpZ2h0IiwidXNlRGVwdGhCdWZmZXIiLCJTcGhlcmVBbmltYXRlZCIsIkFzdGVyb2lkcyIsIlN1c3BlbnNlIiwiSW5kZXgiLCJNb3ZpbmdTcG90IiwidmVjIiwiVmVjdG9yMyIsInByb3BzIiwibGlnaHQiLCJ2aWV3cG9ydCIsInN0YXRlIiwidXNlRnJhbWUiLCJjdXJyZW50IiwidGFyZ2V0IiwicG9zaXRpb24iLCJsZXJwIiwic2V0IiwibW91c2UiLCJ4Iiwid2lkdGgiLCJ5IiwiaGVpZ2h0IiwidXBkYXRlTWF0cml4V29ybGQiLCJyZWYiLCJwZW51bWJyYSIsImRpc3RhbmNlIiwiYW5nbGUiLCJhdHRlbnVhdGlvbiIsImFuZ2xlUG93ZXIiLCJpbnRlbnNpdHkiLCJkZXB0aEJ1ZmZlciIsImZyYW1lcyIsImNsYXNzTmFtZSIsImNvbG9yIiwic3BlZWQiLCJyb3RhdGlvbiIsIm1ha2VEZWZhdWx0IiwiZm92IiwiaGVtaXNwaGVyZUxpZ2h0IiwiY29sb3Itc2V0SFNMIiwiYXJncyIsImRpcmVjdGlvbmFsTGlnaHQiLCJzaGFkb3ciLCJmYWxsYmFjayIsImNvdW50Iiwic2l6ZSIsIm9wYWNpdHkiLCJzY2FsZSIsIm5vaXNlIiwicmFkaXVzIiwiZGVwdGgiLCJmYWN0b3IiXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///./pages/index.js\n");

/***/ })

});