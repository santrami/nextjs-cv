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

/***/ "./components/SphereAnimated.js":
/*!**************************************!*\
  !*** ./components/SphereAnimated.js ***!
  \**************************************/
/***/ (function(module, __webpack_exports__, __webpack_require__) {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": function() { return /* binding */ SphereAnimated; }\n/* harmony export */ });\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"./node_modules/react/jsx-dev-runtime.js\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _react_three_drei__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @react-three/drei */ \"./node_modules/@react-three/drei/index.js\");\n/* harmony import */ var three__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! three */ \"./node_modules/three/build/three.module.js\");\n/* harmony import */ var _react_three_fiber__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @react-three/fiber */ \"./node_modules/@react-three/fiber/dist/react-three-fiber.esm.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var _components_Asteroids__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../components/Asteroids */ \"./components/Asteroids.js\");\nfunction _arrayLikeToArray(arr, len) {\n    if (len == null || len > arr.length) len = arr.length;\n    for(var i = 0, arr2 = new Array(len); i < len; i++)arr2[i] = arr[i];\n    return arr2;\n}\nfunction _arrayWithHoles(arr) {\n    if (Array.isArray(arr)) return arr;\n}\nfunction _iterableToArrayLimit(arr, i) {\n    var _i = arr == null ? null : typeof Symbol !== \"undefined\" && arr[Symbol.iterator] || arr[\"@@iterator\"];\n    if (_i == null) return;\n    var _arr = [];\n    var _n = true;\n    var _d = false;\n    var _s1, _e;\n    try {\n        for(_i = _i.call(arr); !(_n = (_s1 = _i.next()).done); _n = true){\n            _arr.push(_s1.value);\n            if (i && _arr.length === i) break;\n        }\n    } catch (err) {\n        _d = true;\n        _e = err;\n    } finally{\n        try {\n            if (!_n && _i[\"return\"] != null) _i[\"return\"]();\n        } finally{\n            if (_d) throw _e;\n        }\n    }\n    return _arr;\n}\nfunction _nonIterableRest() {\n    throw new TypeError(\"Invalid attempt to destructure non-iterable instance.\\\\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.\");\n}\nfunction _slicedToArray(arr, i) {\n    return _arrayWithHoles(arr) || _iterableToArrayLimit(arr, i) || _unsupportedIterableToArray(arr, i) || _nonIterableRest();\n}\nfunction _unsupportedIterableToArray(o, minLen) {\n    if (!o) return;\n    if (typeof o === \"string\") return _arrayLikeToArray(o, minLen);\n    var n = Object.prototype.toString.call(o).slice(8, -1);\n    if (n === \"Object\" && o.constructor) n = o.constructor.name;\n    if (n === \"Map\" || n === \"Set\") return Array.from(n);\n    if (n === \"Arguments\" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen);\n}\n\n\n\n\n\n\n\nvar _s = $RefreshSig$();\nfunction SphereAnimated(param) {\n    var args = param.args, scale = param.scale, position = param.position;\n    _s();\n    var ref = _slicedToArray((0,_react_three_fiber__WEBPACK_IMPORTED_MODULE_3__.useLoader)(three__WEBPACK_IMPORTED_MODULE_4__.TextureLoader, [\n        \"/mercury-normal-map.jpg\",\n        \"/planet-texture.jpg\"\n    ]), 2), image = ref[0], normal = ref[1];\n    var asteroids = new three__WEBPACK_IMPORTED_MODULE_4__.PointsMaterial({\n        size: 0.005\n    });\n    var sphere = (0,react__WEBPACK_IMPORTED_MODULE_1__.useRef)();\n    (0,_react_three_fiber__WEBPACK_IMPORTED_MODULE_3__.useFrame)(function() {\n        sphere.current.rotation.y += 0.0005;\n    });\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"group\", {\n        children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"mesh\", {\n            castShadow: true,\n            receiveShadow: true,\n            children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_react_three_drei__WEBPACK_IMPORTED_MODULE_5__.Sphere, {\n                onClick: function() {\n                    return console.log(\"hola\");\n                },\n                ref: sphere,\n                transparent: true,\n                opacity: 0,\n                visible: true,\n                args: args,\n                scale: scale,\n                position: position,\n                children: [\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"meshStandardMaterial\", {\n                        map: normal,\n                        normalMap: image,\n                        roughness: 0.4,\n                        metalness: 0.7\n                    }, void 0, false, {\n                        fileName: \"C:\\\\Users\\\\Hogar\\\\Desktop\\\\programacion\\\\nextjs-cv\\\\components\\\\SphereAnimated.js\",\n                        lineNumber: 28,\n                        columnNumber: 21\n                    }, this),\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_components_Asteroids__WEBPACK_IMPORTED_MODULE_2__[\"default\"], {\n                        args: [\n                            1.1,\n                            180\n                        ],\n                        position: [\n                            10,\n                            10,\n                            10\n                        ]\n                    }, void 0, false, {\n                        fileName: \"C:\\\\Users\\\\Hogar\\\\Desktop\\\\programacion\\\\nextjs-cv\\\\components\\\\SphereAnimated.js\",\n                        lineNumber: 29,\n                        columnNumber: 21\n                    }, this)\n                ]\n            }, void 0, true, {\n                fileName: \"C:\\\\Users\\\\Hogar\\\\Desktop\\\\programacion\\\\nextjs-cv\\\\components\\\\SphereAnimated.js\",\n                lineNumber: 26,\n                columnNumber: 17\n            }, this)\n        }, void 0, false, {\n            fileName: \"C:\\\\Users\\\\Hogar\\\\Desktop\\\\programacion\\\\nextjs-cv\\\\components\\\\SphereAnimated.js\",\n            lineNumber: 25,\n            columnNumber: 13\n        }, this)\n    }, void 0, false, {\n        fileName: \"C:\\\\Users\\\\Hogar\\\\Desktop\\\\programacion\\\\nextjs-cv\\\\components\\\\SphereAnimated.js\",\n        lineNumber: 24,\n        columnNumber: 9\n    }, this);\n};\n_s(SphereAnimated, \"t4lhYBWfjnoVFRvCW75IUdBFyvQ=\", false, function() {\n    return [\n        _react_three_fiber__WEBPACK_IMPORTED_MODULE_3__.useLoader,\n        _react_three_fiber__WEBPACK_IMPORTED_MODULE_3__.useFrame\n    ];\n});\n_c = SphereAnimated;\nvar _c;\n$RefreshReg$(_c, \"SphereAnimated\");\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports on update so we can compare the boundary\n                // signatures.\n                module.hot.dispose(function (data) {\n                    data.prevExports = currentExports;\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevExports !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevExports !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9jb21wb25lbnRzL1NwaGVyZUFuaW1hdGVkLmpzLmpzIiwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7OztBQUFBOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUFzRztBQUNqRTtBQUNQO0FBQzBCO0FBQzFCO0FBQ2tCOztBQUlqQyxTQUFTWSxjQUFjLENBQUMsS0FBeUIsRUFBRTtRQUF6QkMsSUFBSSxHQUFOLEtBQXlCLENBQXZCQSxJQUFJLEVBQUVDLEtBQUssR0FBYixLQUF5QixDQUFqQkEsS0FBSyxFQUFFQyxRQUFRLEdBQXZCLEtBQXlCLENBQVZBLFFBQVE7O0lBQzFELElBQXdCTixHQUE0RSxrQkFBNUVBLDZEQUFTLENBQUNILGdEQUFhLEVBQUU7UUFBQyx5QkFBeUI7UUFBRSxxQkFBcUI7S0FBQyxDQUFDLE1BQTdGVSxLQUFLLEdBQVlQLEdBQTRFLEdBQXhGLEVBQUVRLE1BQU0sR0FBSVIsR0FBNEUsR0FBaEY7SUFDcEIsSUFBTVMsU0FBUyxHQUFHLElBQUlYLGlEQUFvQixDQUFDO1FBQ3ZDYSxJQUFJLEVBQUUsS0FBSztLQUNkLENBQUM7SUFFRixJQUFNQyxNQUFNLEdBQUdYLDZDQUFNLEVBQUU7SUFFdkJGLDREQUFRLENBQUMsV0FBTTtRQUNYYSxNQUFNLENBQUNDLE9BQU8sQ0FBQ0MsUUFBUSxDQUFDQyxDQUFDLElBQUksTUFBTTtLQUV0QyxDQUFDO0lBRUYscUJBQ0ksOERBQUNDLE9BQUs7a0JBQ0YsNEVBQUNDLE1BQUk7WUFBQ0MsVUFBVTtZQUFDQyxhQUFhO3NCQUMxQiw0RUFBQzVCLHFEQUFNO2dCQUFDNkIsT0FBTyxFQUFFOzJCQUFNQyxPQUFPLENBQUNDLEdBQUcsQ0FBQyxNQUFNLENBQUM7aUJBQUE7Z0JBQUVDLEdBQUcsRUFBRVgsTUFBTTtnQkFBRVksV0FBVyxFQUFFLElBQUk7Z0JBQUVDLE9BQU8sRUFBRSxDQUFDO2dCQUFFQyxPQUFPO2dCQUFDdEIsSUFBSSxFQUFFQSxJQUFJO2dCQUFFQyxLQUFLLEVBQUVBLEtBQUs7Z0JBQUVDLFFBQVEsRUFBRUEsUUFBUTs7a0NBRXhJLDhEQUFDcUIsc0JBQW9CO3dCQUFDQyxHQUFHLEVBQUVwQixNQUFNO3dCQUFFcUIsU0FBUyxFQUFFdEIsS0FBSzt3QkFBRXVCLFNBQVMsRUFBRSxHQUFHO3dCQUFFQyxTQUFTLEVBQUUsR0FBRzs7Ozs7NEJBQUk7a0NBQ3ZGLDhEQUFDN0IsNkRBQVM7d0JBQUNFLElBQUksRUFBRTtBQUFDLCtCQUFHO0FBQUUsK0JBQUc7eUJBQUM7d0JBQUVFLFFBQVEsRUFBRTtBQUFDLDhCQUFFO0FBQUUsOEJBQUU7QUFBRSw4QkFBRTt5QkFBQzs7Ozs7NEJBQUk7Ozs7OztvQkFFbEQ7Ozs7O2dCQUNOOzs7OztZQUNILENBQ1g7Q0FDSjtHQXpCdUJILGNBQWM7O1FBQ1ZILHlEQUFTO1FBT2pDRCx3REFBUTs7O0FBUllJLEtBQUFBLGNBQWMiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vY29tcG9uZW50cy9TcGhlcmVBbmltYXRlZC5qcz81MDkwIl0sInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IFNwaGVyZSwgQ2xvdWQsIE1lc2hEaXN0b3J0TWF0ZXJpYWwsIFNwYXJrbGVzLCBQb2ludE1hdGVyaWFsLCBQb2ludCB9IGZyb20gJ0ByZWFjdC10aHJlZS9kcmVpJ1xyXG5pbXBvcnQgeyBUZXh0dXJlTG9hZGVyIH0gZnJvbSAndGhyZWUnXHJcbmltcG9ydCAqIGFzIFRIUkVFIGZyb20gJ3RocmVlJ1xyXG5pbXBvcnQgeyB1c2VGcmFtZSwgdXNlTG9hZGVyIH0gZnJvbSAnQHJlYWN0LXRocmVlL2ZpYmVyJ1xyXG5pbXBvcnQgeyB1c2VSZWYgfSBmcm9tICdyZWFjdCdcclxuaW1wb3J0IEFzdGVyb2lkcyBmcm9tICcuLi9jb21wb25lbnRzL0FzdGVyb2lkcyc7XHJcblxyXG5cclxuXHJcbmV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIFNwaGVyZUFuaW1hdGVkKHsgYXJncywgc2NhbGUsIHBvc2l0aW9uIH0pIHtcclxuICAgIGNvbnN0IFtpbWFnZSwgbm9ybWFsXSA9IHVzZUxvYWRlcihUZXh0dXJlTG9hZGVyLCBbXCIvbWVyY3VyeS1ub3JtYWwtbWFwLmpwZ1wiLCAnL3BsYW5ldC10ZXh0dXJlLmpwZyddKVxyXG4gICAgY29uc3QgYXN0ZXJvaWRzID0gbmV3IFRIUkVFLlBvaW50c01hdGVyaWFsKHtcclxuICAgICAgICBzaXplOiAwLjAwNVxyXG4gICAgfSlcclxuXHJcbiAgICBjb25zdCBzcGhlcmUgPSB1c2VSZWYoKTtcclxuXHJcbiAgICB1c2VGcmFtZSgoKSA9PiB7XHJcbiAgICAgICAgc3BoZXJlLmN1cnJlbnQucm90YXRpb24ueSArPSAwLjAwMDVcclxuXHJcbiAgICB9KVxyXG5cclxuICAgIHJldHVybiAoXHJcbiAgICAgICAgPGdyb3VwPlxyXG4gICAgICAgICAgICA8bWVzaCBjYXN0U2hhZG93IHJlY2VpdmVTaGFkb3c+XHJcbiAgICAgICAgICAgICAgICA8U3BoZXJlIG9uQ2xpY2s9eygpID0+IGNvbnNvbGUubG9nKFwiaG9sYVwiKX0gcmVmPXtzcGhlcmV9IHRyYW5zcGFyZW50PXt0cnVlfSBvcGFjaXR5PXswfSB2aXNpYmxlIGFyZ3M9e2FyZ3N9IHNjYWxlPXtzY2FsZX0gcG9zaXRpb249e3Bvc2l0aW9ufT5cclxuICAgICAgICAgICAgICAgICAgICB7LyogPE1lc2hEaXN0b3J0TWF0ZXJpYWwgYXR0YWNoPVwibWF0ZXJpYWxcIiBzcGVlZD17MX0gZGlzdG9ydD17MX0gLz4gKi99XHJcbiAgICAgICAgICAgICAgICAgICAgPG1lc2hTdGFuZGFyZE1hdGVyaWFsIG1hcD17bm9ybWFsfSBub3JtYWxNYXA9e2ltYWdlfSByb3VnaG5lc3M9ezAuNH0gbWV0YWxuZXNzPXswLjd9IC8+XHJcbiAgICAgICAgICAgICAgICAgICAgPEFzdGVyb2lkcyBhcmdzPXtbMS4xLCAxODBdfSBwb3NpdGlvbj17WzEwLCAxMCwgMTBdfSAvPlxyXG5cclxuICAgICAgICAgICAgICAgIDwvU3BoZXJlPlxyXG4gICAgICAgICAgICA8L21lc2g+XHJcbiAgICAgICAgPC9ncm91cD5cclxuICAgIClcclxufSJdLCJuYW1lcyI6WyJTcGhlcmUiLCJDbG91ZCIsIk1lc2hEaXN0b3J0TWF0ZXJpYWwiLCJTcGFya2xlcyIsIlBvaW50TWF0ZXJpYWwiLCJQb2ludCIsIlRleHR1cmVMb2FkZXIiLCJUSFJFRSIsInVzZUZyYW1lIiwidXNlTG9hZGVyIiwidXNlUmVmIiwiQXN0ZXJvaWRzIiwiU3BoZXJlQW5pbWF0ZWQiLCJhcmdzIiwic2NhbGUiLCJwb3NpdGlvbiIsImltYWdlIiwibm9ybWFsIiwiYXN0ZXJvaWRzIiwiUG9pbnRzTWF0ZXJpYWwiLCJzaXplIiwic3BoZXJlIiwiY3VycmVudCIsInJvdGF0aW9uIiwieSIsImdyb3VwIiwibWVzaCIsImNhc3RTaGFkb3ciLCJyZWNlaXZlU2hhZG93Iiwib25DbGljayIsImNvbnNvbGUiLCJsb2ciLCJyZWYiLCJ0cmFuc3BhcmVudCIsIm9wYWNpdHkiLCJ2aXNpYmxlIiwibWVzaFN0YW5kYXJkTWF0ZXJpYWwiLCJtYXAiLCJub3JtYWxNYXAiLCJyb3VnaG5lc3MiLCJtZXRhbG5lc3MiXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///./components/SphereAnimated.js\n");

/***/ })

});