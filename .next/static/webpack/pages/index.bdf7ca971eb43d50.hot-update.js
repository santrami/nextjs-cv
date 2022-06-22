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

/***/ "./components/Asteroids.js":
/*!*********************************!*\
  !*** ./components/Asteroids.js ***!
  \*********************************/
/***/ (function(module, __webpack_exports__, __webpack_require__) {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": function() { return /* binding */ Asteroids; }\n/* harmony export */ });\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"./node_modules/react/jsx-dev-runtime.js\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _react_three_drei__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @react-three/drei */ \"./node_modules/@react-three/drei/index.js\");\n/* harmony import */ var three__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! three */ \"./node_modules/three/build/three.module.js\");\n/* harmony import */ var _react_three_fiber__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @react-three/fiber */ \"./node_modules/@react-three/fiber/dist/react-three-fiber.esm.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);\nfunction _arrayLikeToArray(arr, len) {\n    if (len == null || len > arr.length) len = arr.length;\n    for(var i = 0, arr2 = new Array(len); i < len; i++)arr2[i] = arr[i];\n    return arr2;\n}\nfunction _arrayWithHoles(arr) {\n    if (Array.isArray(arr)) return arr;\n}\nfunction _iterableToArrayLimit(arr, i) {\n    var _i = arr == null ? null : typeof Symbol !== \"undefined\" && arr[Symbol.iterator] || arr[\"@@iterator\"];\n    if (_i == null) return;\n    var _arr = [];\n    var _n = true;\n    var _d = false;\n    var _s1, _e;\n    try {\n        for(_i = _i.call(arr); !(_n = (_s1 = _i.next()).done); _n = true){\n            _arr.push(_s1.value);\n            if (i && _arr.length === i) break;\n        }\n    } catch (err) {\n        _d = true;\n        _e = err;\n    } finally{\n        try {\n            if (!_n && _i[\"return\"] != null) _i[\"return\"]();\n        } finally{\n            if (_d) throw _e;\n        }\n    }\n    return _arr;\n}\nfunction _nonIterableRest() {\n    throw new TypeError(\"Invalid attempt to destructure non-iterable instance.\\\\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.\");\n}\nfunction _slicedToArray(arr, i) {\n    return _arrayWithHoles(arr) || _iterableToArrayLimit(arr, i) || _unsupportedIterableToArray(arr, i) || _nonIterableRest();\n}\nfunction _unsupportedIterableToArray(o, minLen) {\n    if (!o) return;\n    if (typeof o === \"string\") return _arrayLikeToArray(o, minLen);\n    var n = Object.prototype.toString.call(o).slice(8, -1);\n    if (n === \"Object\" && o.constructor) n = o.constructor.name;\n    if (n === \"Map\" || n === \"Set\") return Array.from(n);\n    if (n === \"Arguments\" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen);\n}\n\n\n\n\n\n\nvar _s = $RefreshSig$();\nvar randomNumber = function(min, max) {\n    return Math.random() * (max - min) + min;\n};\nfunction Asteroids(param) {\n    var args = param.args, position = param.position;\n    _s();\n    var ref = _slicedToArray((0,_react_three_fiber__WEBPACK_IMPORTED_MODULE_2__.useLoader)(three__WEBPACK_IMPORTED_MODULE_3__.TextureLoader, [\n        \"/mercury-normal-map.jpg\",\n        \"/planet-texture.jpg\",\n        \"/asteroide.png\",\n        \"/rings.jpg\"\n    ]), 4), image = ref[0], normal = ref[1], asteroide = ref[2], rings = ref[3];\n    rings.wrapS = three__WEBPACK_IMPORTED_MODULE_3__.RepeatWrapping;\n    rings.wrapT = three__WEBPACK_IMPORTED_MODULE_3__.RepeatWrapping;\n    rings.offset.set(1, 1);\n    rings.repeat.set(10, 1);\n    rings.rotation = 90;\n    var a = new three__WEBPACK_IMPORTED_MODULE_3__.Vector2(0.1, 10);\n    rings.transformUv(a);\n    var geometry = new three__WEBPACK_IMPORTED_MODULE_3__.RingBufferGeometry(3, 5, 64);\n    var pos = geometry.attributes.position;\n    var v3 = new three__WEBPACK_IMPORTED_MODULE_3__.Vector3();\n    for(var i = 0; i < pos.count; i++){\n        v3.fromBufferAttribute(pos, i);\n        geometry.attributes.uv.setXY(i, v3.length() < 4 ? 0 : 1, 1);\n    }\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.Fragment, {\n        children: [\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"mesh\", {\n                scale: 0.37,\n                geometry: geometry,\n                rotation: [\n                    90,\n                    0,\n                    0\n                ],\n                children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"meshStandardMaterial\", {\n                    transparent: true,\n                    metalness: 0.5,\n                    roughness: 0.3,\n                    side: 2,\n                    color: \"#aaaaaa\",\n                    map: rings,\n                    opacity: 0.7\n                }, void 0, false, {\n                    fileName: \"C:\\\\Users\\\\Hogar\\\\Desktop\\\\programacion\\\\nextjs-cv\\\\components\\\\Asteroids.js\",\n                    lineNumber: 35,\n                    columnNumber: 17\n                }, this)\n            }, void 0, false, {\n                fileName: \"C:\\\\Users\\\\Hogar\\\\Desktop\\\\programacion\\\\nextjs-cv\\\\components\\\\Asteroids.js\",\n                lineNumber: 32,\n                columnNumber: 13\n            }, this),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"mesh\", {\n                rotation: [\n                    90,\n                    0,\n                    0\n                ],\n                position: [\n                    0,\n                    0,\n                    0\n                ],\n                children: [\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"points\", {\n                        children: [\n                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_react_three_drei__WEBPACK_IMPORTED_MODULE_4__.PointMaterial, {\n                                transparent: true,\n                                map: asteroide,\n                                size: randomNumber(0.01, 0.03)\n                            }, void 0, false, {\n                                fileName: \"C:\\\\Users\\\\Hogar\\\\Desktop\\\\programacion\\\\nextjs-cv\\\\components\\\\Asteroids.js\",\n                                lineNumber: 41,\n                                columnNumber: 21\n                            }, this),\n                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"circleGeometry\", {\n                                tethaStart: 0,\n                                tethaLenght: 6.283185,\n                                args: [\n                                    randomNumber(1.2, 1.5),\n                                    randomNumber(100, 250)\n                                ]\n                            }, void 0, false, {\n                                fileName: \"C:\\\\Users\\\\Hogar\\\\Desktop\\\\programacion\\\\nextjs-cv\\\\components\\\\Asteroids.js\",\n                                lineNumber: 42,\n                                columnNumber: 21\n                            }, this)\n                        ]\n                    }, void 0, true, {\n                        fileName: \"C:\\\\Users\\\\Hogar\\\\Desktop\\\\programacion\\\\nextjs-cv\\\\components\\\\Asteroids.js\",\n                        lineNumber: 40,\n                        columnNumber: 17\n                    }, this),\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"points\", {\n                        children: [\n                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_react_three_drei__WEBPACK_IMPORTED_MODULE_4__.PointMaterial, {\n                                transparent: true,\n                                map: asteroide,\n                                size: randomNumber(0.01, 0.03)\n                            }, void 0, false, {\n                                fileName: \"C:\\\\Users\\\\Hogar\\\\Desktop\\\\programacion\\\\nextjs-cv\\\\components\\\\Asteroids.js\",\n                                lineNumber: 45,\n                                columnNumber: 21\n                            }, this),\n                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"circleGeometry\", {\n                                tethaStart: 0,\n                                tethaLenght: 6.283185,\n                                args: [\n                                    randomNumber(1.2, 1.5),\n                                    randomNumber(100, 250)\n                                ]\n                            }, void 0, false, {\n                                fileName: \"C:\\\\Users\\\\Hogar\\\\Desktop\\\\programacion\\\\nextjs-cv\\\\components\\\\Asteroids.js\",\n                                lineNumber: 46,\n                                columnNumber: 21\n                            }, this)\n                        ]\n                    }, void 0, true, {\n                        fileName: \"C:\\\\Users\\\\Hogar\\\\Desktop\\\\programacion\\\\nextjs-cv\\\\components\\\\Asteroids.js\",\n                        lineNumber: 44,\n                        columnNumber: 17\n                    }, this),\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"points\", {\n                        children: [\n                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_react_three_drei__WEBPACK_IMPORTED_MODULE_4__.PointMaterial, {\n                                transparent: true,\n                                map: asteroide,\n                                size: randomNumber(0.01, 0.03)\n                            }, void 0, false, {\n                                fileName: \"C:\\\\Users\\\\Hogar\\\\Desktop\\\\programacion\\\\nextjs-cv\\\\components\\\\Asteroids.js\",\n                                lineNumber: 49,\n                                columnNumber: 21\n                            }, this),\n                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"circleGeometry\", {\n                                tethaStart: 0,\n                                tethaLenght: 6.283185,\n                                args: [\n                                    randomNumber(1.2, 1.5),\n                                    randomNumber(100, 250)\n                                ]\n                            }, void 0, false, {\n                                fileName: \"C:\\\\Users\\\\Hogar\\\\Desktop\\\\programacion\\\\nextjs-cv\\\\components\\\\Asteroids.js\",\n                                lineNumber: 50,\n                                columnNumber: 21\n                            }, this)\n                        ]\n                    }, void 0, true, {\n                        fileName: \"C:\\\\Users\\\\Hogar\\\\Desktop\\\\programacion\\\\nextjs-cv\\\\components\\\\Asteroids.js\",\n                        lineNumber: 48,\n                        columnNumber: 17\n                    }, this)\n                ]\n            }, void 0, true, {\n                fileName: \"C:\\\\Users\\\\Hogar\\\\Desktop\\\\programacion\\\\nextjs-cv\\\\components\\\\Asteroids.js\",\n                lineNumber: 39,\n                columnNumber: 13\n            }, this)\n        ]\n    }, void 0, true);\n};\n_s(Asteroids, \"vuVE+BKz1ggDta7wHR5Dk8EioJY=\", false, function() {\n    return [\n        _react_three_fiber__WEBPACK_IMPORTED_MODULE_2__.useLoader\n    ];\n});\n_c = Asteroids;\nvar _c;\n$RefreshReg$(_c, \"Asteroids\");\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports on update so we can compare the boundary\n                // signatures.\n                module.hot.dispose(function (data) {\n                    data.prevExports = currentExports;\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevExports !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevExports !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,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O2dDQUFDQyxVQUFVLEVBQUUsQ0FBQztnQ0FBRUMsV0FBVyxFQUFFLFFBQVE7Z0NBQUV6QyxJQUFJLEVBQUU7b0NBQUNOLFlBQVksQ0FBQyxHQUFHLEVBQUUsR0FBRyxDQUFDO29DQUFFQSxZQUFZLENBQUMsR0FBRyxFQUFFLEdBQUcsQ0FBQztpQ0FBQzs7Ozs7b0NBQUk7Ozs7Ozs0QkFDM0c7Ozs7OztvQkFFTjs7b0JBQ1IsQ0FFTjtDQUNKO0dBL0N1QkssU0FBUzs7UUFDWVIseURBQVM7OztBQUQ5QlEsS0FBQUEsU0FBUyIsInNvdXJjZXMiOlsid2VicGFjazovL19OX0UvLi9jb21wb25lbnRzL0FzdGVyb2lkcy5qcz9iOWQ5Il0sInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IFNwaGVyZSwgQ2xvdWQsIE1lc2hEaXN0b3J0TWF0ZXJpYWwsIFNwYXJrbGVzLCBQb2ludE1hdGVyaWFsIH0gZnJvbSAnQHJlYWN0LXRocmVlL2RyZWknXHJcbmltcG9ydCB7IFJlcGVhdFdyYXBwaW5nLCBUZXh0dXJlTG9hZGVyIH0gZnJvbSAndGhyZWUnXHJcbmltcG9ydCAqIGFzIFRIUkVFIGZyb20gJ3RocmVlJ1xyXG5pbXBvcnQgeyB1c2VMb2FkZXIsIHVzZUZyYW1lIH0gZnJvbSAnQHJlYWN0LXRocmVlL2ZpYmVyJ1xyXG5pbXBvcnQgeyB1c2VSZWYgfSBmcm9tICdyZWFjdCdcclxuXHJcbmNvbnN0IHJhbmRvbU51bWJlciA9IChtaW4sIG1heCkgPT4ge1xyXG4gICAgcmV0dXJuIE1hdGgucmFuZG9tKCkgKiAobWF4IC0gbWluKSArIG1pblxyXG59XHJcbmV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIEFzdGVyb2lkcyh7IGFyZ3MsIHBvc2l0aW9uIH0pIHtcclxuICAgIGNvbnN0IFtpbWFnZSwgbm9ybWFsLCBhc3Rlcm9pZGUscmluZ3NdID0gdXNlTG9hZGVyKFRleHR1cmVMb2FkZXIsIFtcIi9tZXJjdXJ5LW5vcm1hbC1tYXAuanBnXCIsICcvcGxhbmV0LXRleHR1cmUuanBnJywgJy9hc3Rlcm9pZGUucG5nJywnL3JpbmdzLmpwZyddKVxyXG4gICAgXHJcbiAgICByaW5ncy53cmFwUyA9IFRIUkVFLlJlcGVhdFdyYXBwaW5nO1xyXG4gICAgcmluZ3Mud3JhcFQgPSBUSFJFRS5SZXBlYXRXcmFwcGluZztcclxuICAgIHJpbmdzLm9mZnNldC5zZXQoMSwxKTtcclxuICAgIHJpbmdzLnJlcGVhdC5zZXQoMTAsIDEpO1xyXG4gICAgcmluZ3Mucm90YXRpb249OTBcclxuICAgIGNvbnN0IGEgPSBuZXcgVEhSRUUuVmVjdG9yMiggMC4xLCAxMCApO1xyXG4gICAgcmluZ3MudHJhbnNmb3JtVXYoYSlcclxuXHJcbiAgICBjb25zdCBnZW9tZXRyeSA9IG5ldyBUSFJFRS5SaW5nQnVmZmVyR2VvbWV0cnkoMywgNSwgNjQpO1xyXG4gIHZhciBwb3MgPSBnZW9tZXRyeS5hdHRyaWJ1dGVzLnBvc2l0aW9uO1xyXG4gIHZhciB2MyA9IG5ldyBUSFJFRS5WZWN0b3IzKCk7XHJcbiAgZm9yIChsZXQgaSA9IDA7IGkgPCBwb3MuY291bnQ7IGkrKykge1xyXG4gICAgdjMuZnJvbUJ1ZmZlckF0dHJpYnV0ZShwb3MsIGkpO1xyXG4gICAgZ2VvbWV0cnkuYXR0cmlidXRlcy51di5zZXRYWShpLCB2My5sZW5ndGgoKSA8IDQgPyAwIDogMSwgMSk7XHJcbiAgfVxyXG4gICAgXHJcblxyXG4gICAgcmV0dXJuIChcclxuICAgICAgICA8PlxyXG4gICAgICAgICAgICA8bWVzaCBzY2FsZT17MC4zN30gZ2VvbWV0cnk9e2dlb21ldHJ5fSByb3RhdGlvbj17WzkwLCAwLCAwXX0gPlxyXG4gICAgICAgICAgICAgICAgXHJcbiAgICAgICAgICAgICAgICB7LyogPHJpbmdHZW9tZXRyeSBhcmdzPXtbMSwgMS41LDI1XX0gLz4gKi99XHJcbiAgICAgICAgICAgICAgICA8bWVzaFN0YW5kYXJkTWF0ZXJpYWwgdHJhbnNwYXJlbnQ9e3RydWV9IG1ldGFsbmVzcz17MC41fSByb3VnaG5lc3M9ezAuM30gc2lkZT17Mn0gY29sb3I9eycjYWFhYWFhJ30gbWFwPXtyaW5nc30gb3BhY2l0eT17MC43fSAvPlxyXG4gICAgICAgICAgICA8L21lc2g+XHJcbiAgICAgICAgICAgXHJcblxyXG4gICAgICAgICAgICA8bWVzaCByb3RhdGlvbj17WzkwLCAwLCAwXX0gcG9zaXRpb249e1swLCAwLCAwXX0+XHJcbiAgICAgICAgICAgICAgICA8cG9pbnRzPlxyXG4gICAgICAgICAgICAgICAgICAgIDxQb2ludE1hdGVyaWFsIHRyYW5zcGFyZW50PXt0cnVlfSBtYXA9e2FzdGVyb2lkZX0gc2l6ZT17cmFuZG9tTnVtYmVyKDAuMDEsIDAuMDMpfSAvPlxyXG4gICAgICAgICAgICAgICAgICAgIDxjaXJjbGVHZW9tZXRyeSB0ZXRoYVN0YXJ0PXswfSB0ZXRoYUxlbmdodD17Ni4yODMxODV9IGFyZ3M9e1tyYW5kb21OdW1iZXIoMS4yLCAxLjUpLCByYW5kb21OdW1iZXIoMTAwLCAyNTApXX0gLz5cclxuICAgICAgICAgICAgICAgIDwvcG9pbnRzPlxyXG4gICAgICAgICAgICAgICAgPHBvaW50cz5cclxuICAgICAgICAgICAgICAgICAgICA8UG9pbnRNYXRlcmlhbCB0cmFuc3BhcmVudD17dHJ1ZX0gbWFwPXthc3Rlcm9pZGV9IHNpemU9e3JhbmRvbU51bWJlcigwLjAxLCAwLjAzKX0gLz5cclxuICAgICAgICAgICAgICAgICAgICA8Y2lyY2xlR2VvbWV0cnkgdGV0aGFTdGFydD17MH0gdGV0aGFMZW5naHQ9ezYuMjgzMTg1fSBhcmdzPXtbcmFuZG9tTnVtYmVyKDEuMiwgMS41KSwgcmFuZG9tTnVtYmVyKDEwMCwgMjUwKV19IC8+XHJcbiAgICAgICAgICAgICAgICA8L3BvaW50cz5cclxuICAgICAgICAgICAgICAgIDxwb2ludHM+XHJcbiAgICAgICAgICAgICAgICAgICAgPFBvaW50TWF0ZXJpYWwgdHJhbnNwYXJlbnQ9e3RydWV9IG1hcD17YXN0ZXJvaWRlfSBzaXplPXtyYW5kb21OdW1iZXIoMC4wMSwgMC4wMyl9IC8+XHJcbiAgICAgICAgICAgICAgICAgICAgPGNpcmNsZUdlb21ldHJ5IHRldGhhU3RhcnQ9ezB9IHRldGhhTGVuZ2h0PXs2LjI4MzE4NX0gYXJncz17W3JhbmRvbU51bWJlcigxLjIsIDEuNSksIHJhbmRvbU51bWJlcigxMDAsIDI1MCldfSAvPlxyXG4gICAgICAgICAgICAgICAgPC9wb2ludHM+XHJcbiAgICAgICAgICAgICAgICBcclxuICAgICAgICAgICAgPC9tZXNoPlxyXG4gICAgICAgIDwvPlxyXG5cclxuICAgIClcclxufSJdLCJuYW1lcyI6WyJTcGhlcmUiLCJDbG91ZCIsIk1lc2hEaXN0b3J0TWF0ZXJpYWwiLCJTcGFya2xlcyIsIlBvaW50TWF0ZXJpYWwiLCJSZXBlYXRXcmFwcGluZyIsIlRleHR1cmVMb2FkZXIiLCJUSFJFRSIsInVzZUxvYWRlciIsInVzZUZyYW1lIiwidXNlUmVmIiwicmFuZG9tTnVtYmVyIiwibWluIiwibWF4IiwiTWF0aCIsInJhbmRvbSIsIkFzdGVyb2lkcyIsImFyZ3MiLCJwb3NpdGlvbiIsImltYWdlIiwibm9ybWFsIiwiYXN0ZXJvaWRlIiwicmluZ3MiLCJ3cmFwUyIsIndyYXBUIiwib2Zmc2V0Iiwic2V0IiwicmVwZWF0Iiwicm90YXRpb24iLCJhIiwiVmVjdG9yMiIsInRyYW5zZm9ybVV2IiwiZ2VvbWV0cnkiLCJSaW5nQnVmZmVyR2VvbWV0cnkiLCJwb3MiLCJhdHRyaWJ1dGVzIiwidjMiLCJWZWN0b3IzIiwiaSIsImNvdW50IiwiZnJvbUJ1ZmZlckF0dHJpYnV0ZSIsInV2Iiwic2V0WFkiLCJsZW5ndGgiLCJtZXNoIiwic2NhbGUiLCJtZXNoU3RhbmRhcmRNYXRlcmlhbCIsInRyYW5zcGFyZW50IiwibWV0YWxuZXNzIiwicm91Z2huZXNzIiwic2lkZSIsImNvbG9yIiwibWFwIiwib3BhY2l0eSIsInBvaW50cyIsInNpemUiLCJjaXJjbGVHZW9tZXRyeSIsInRldGhhU3RhcnQiLCJ0ZXRoYUxlbmdodCJdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///./components/Asteroids.js\n");

/***/ })

});