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

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": function() { return /* binding */ SphereAnimated; }\n/* harmony export */ });\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"./node_modules/react/jsx-dev-runtime.js\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _react_three_drei__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @react-three/drei */ \"./node_modules/@react-three/drei/index.js\");\n/* harmony import */ var three__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! three */ \"./node_modules/three/build/three.module.js\");\n/* harmony import */ var _react_three_fiber__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @react-three/fiber */ \"./node_modules/@react-three/fiber/dist/react-three-fiber.esm.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);\nfunction _arrayLikeToArray(arr, len) {\n    if (len == null || len > arr.length) len = arr.length;\n    for(var i = 0, arr2 = new Array(len); i < len; i++)arr2[i] = arr[i];\n    return arr2;\n}\nfunction _arrayWithHoles(arr) {\n    if (Array.isArray(arr)) return arr;\n}\nfunction _iterableToArrayLimit(arr, i) {\n    var _i = arr == null ? null : typeof Symbol !== \"undefined\" && arr[Symbol.iterator] || arr[\"@@iterator\"];\n    if (_i == null) return;\n    var _arr = [];\n    var _n = true;\n    var _d = false;\n    var _s1, _e;\n    try {\n        for(_i = _i.call(arr); !(_n = (_s1 = _i.next()).done); _n = true){\n            _arr.push(_s1.value);\n            if (i && _arr.length === i) break;\n        }\n    } catch (err) {\n        _d = true;\n        _e = err;\n    } finally{\n        try {\n            if (!_n && _i[\"return\"] != null) _i[\"return\"]();\n        } finally{\n            if (_d) throw _e;\n        }\n    }\n    return _arr;\n}\nfunction _nonIterableRest() {\n    throw new TypeError(\"Invalid attempt to destructure non-iterable instance.\\\\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.\");\n}\nfunction _slicedToArray(arr, i) {\n    return _arrayWithHoles(arr) || _iterableToArrayLimit(arr, i) || _unsupportedIterableToArray(arr, i) || _nonIterableRest();\n}\nfunction _unsupportedIterableToArray(o, minLen) {\n    if (!o) return;\n    if (typeof o === \"string\") return _arrayLikeToArray(o, minLen);\n    var n = Object.prototype.toString.call(o).slice(8, -1);\n    if (n === \"Object\" && o.constructor) n = o.constructor.name;\n    if (n === \"Map\" || n === \"Set\") return Array.from(n);\n    if (n === \"Arguments\" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen);\n}\n\n\n\n\n\n\nvar _s = $RefreshSig$();\nfunction SphereAnimated(param) {\n    var args = param.args, scale = param.scale, position = param.position;\n    _s();\n    var ref = _slicedToArray((0,_react_three_fiber__WEBPACK_IMPORTED_MODULE_2__.useLoader)(three__WEBPACK_IMPORTED_MODULE_3__.TextureLoader, [\n        \"/mercury-normal-map.jpg\",\n        \"/planet-texture.jpg\"\n    ]), 2), image = ref[0], normal = ref[1];\n    var asteroids = new three__WEBPACK_IMPORTED_MODULE_3__.PointsMaterial({\n        size: 0.005\n    });\n    var sphere = (0,react__WEBPACK_IMPORTED_MODULE_1__.useRef)();\n    (0,_react_three_fiber__WEBPACK_IMPORTED_MODULE_2__.useFrame)(function() {\n        sphere.current.rotation.y += 0.01;\n    });\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"mesh\", {\n        transparent: true,\n        op: true,\n        children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_react_three_drei__WEBPACK_IMPORTED_MODULE_4__.Sphere, {\n            onClick: function() {\n                return console.log(\"hola\");\n            },\n            ref: sphere,\n            transparent: true,\n            opacity: 0,\n            visible: true,\n            args: args,\n            scale: scale,\n            position: position,\n            children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"meshStandardMaterial\", {\n                map: normal,\n                normalMap: image,\n                roughness: 0.4,\n                metalness: 0.7\n            }, void 0, false, {\n                fileName: \"C:\\\\Users\\\\Hogar\\\\Desktop\\\\programacion\\\\nextjs-cv\\\\components\\\\SphereAnimated.js\",\n                lineNumber: 32,\n                columnNumber: 17\n            }, this)\n        }, void 0, false, {\n            fileName: \"C:\\\\Users\\\\Hogar\\\\Desktop\\\\programacion\\\\nextjs-cv\\\\components\\\\SphereAnimated.js\",\n            lineNumber: 23,\n            columnNumber: 13\n        }, this)\n    }, void 0, false, {\n        fileName: \"C:\\\\Users\\\\Hogar\\\\Desktop\\\\programacion\\\\nextjs-cv\\\\components\\\\SphereAnimated.js\",\n        lineNumber: 22,\n        columnNumber: 9\n    }, this);\n};\n_s(SphereAnimated, \"t4lhYBWfjnoVFRvCW75IUdBFyvQ=\", false, function() {\n    return [\n        _react_three_fiber__WEBPACK_IMPORTED_MODULE_2__.useLoader,\n        _react_three_fiber__WEBPACK_IMPORTED_MODULE_2__.useFrame\n    ];\n});\n_c = SphereAnimated;\nvar _c;\n$RefreshReg$(_c, \"SphereAnimated\");\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports on update so we can compare the boundary\n                // signatures.\n                module.hot.dispose(function (data) {\n                    data.prevExports = currentExports;\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevExports !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevExports !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9jb21wb25lbnRzL1NwaGVyZUFuaW1hdGVkLmpzLmpzIiwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7O0FBQUE7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBQXNHO0FBQ2pFO0FBQ1A7QUFDMEI7QUFDMUI7O0FBR2YsU0FBU1csY0FBYyxDQUFDLEtBQXlCLEVBQUU7UUFBekJDLElBQUksR0FBTixLQUF5QixDQUF2QkEsSUFBSSxFQUFFQyxLQUFLLEdBQWIsS0FBeUIsQ0FBakJBLEtBQUssRUFBRUMsUUFBUSxHQUF2QixLQUF5QixDQUFWQSxRQUFROztJQUMxRCxJQUF3QkwsR0FBNEUsa0JBQTVFQSw2REFBUyxDQUFDSCxnREFBYSxFQUFFO1FBQUMseUJBQXlCO1FBQUUscUJBQXFCO0tBQUMsQ0FBQyxNQUE3RlMsS0FBSyxHQUFZTixHQUE0RSxHQUF4RixFQUFFTyxNQUFNLEdBQUlQLEdBQTRFLEdBQWhGO0lBQ3BCLElBQU1RLFNBQVMsR0FBRyxJQUFJVixpREFBb0IsQ0FBQztRQUN2Q1ksSUFBSSxFQUFFLEtBQUs7S0FDZCxDQUFDO0lBRUYsSUFBTUMsTUFBTSxHQUFHViw2Q0FBTSxFQUFFO0lBRXZCRiw0REFBUSxDQUFDLFdBQU07UUFDWFksTUFBTSxDQUFDQyxPQUFPLENBQUNDLFFBQVEsQ0FBQ0MsQ0FBQyxJQUFJLElBQUk7S0FFcEMsQ0FBQztJQUVGLHFCQUNJLDhEQUFDQyxNQUFJO1FBQUNDLFdBQVcsRUFBRSxJQUFJO1FBQUVDLEVBQUU7a0JBQ3ZCLDRFQUFDMUIscURBQU07WUFBQzJCLE9BQU8sRUFBRTt1QkFBTUMsT0FBTyxDQUFDQyxHQUFHLENBQUMsTUFBTSxDQUFDO2FBQUE7WUFDdENDLEdBQUcsRUFBRVYsTUFBTTtZQUNYSyxXQUFXLEVBQUUsSUFBSTtZQUNqQk0sT0FBTyxFQUFFLENBQUM7WUFDVkMsT0FBTztZQUNQcEIsSUFBSSxFQUFFQSxJQUFJO1lBQ1ZDLEtBQUssRUFBRUEsS0FBSztZQUNaQyxRQUFRLEVBQUVBLFFBQVE7c0JBRWxCLDRFQUFDbUIsc0JBQW9CO2dCQUFDQyxHQUFHLEVBQUVsQixNQUFNO2dCQUFFbUIsU0FBUyxFQUFFcEIsS0FBSztnQkFBRXFCLFNBQVMsRUFBRSxHQUFHO2dCQUFFQyxTQUFTLEVBQUUsR0FBRzs7Ozs7b0JBQUk7Ozs7O2dCQUNsRjs7Ozs7WUFDTixDQUNWO0NBQ0o7R0E1QnVCMUIsY0FBYzs7UUFDVkYseURBQVM7UUFPakNELHdEQUFROzs7QUFSWUcsS0FBQUEsY0FBYyIsInNvdXJjZXMiOlsid2VicGFjazovL19OX0UvLi9jb21wb25lbnRzL1NwaGVyZUFuaW1hdGVkLmpzPzUwOTAiXSwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgU3BoZXJlLCBDbG91ZCwgTWVzaERpc3RvcnRNYXRlcmlhbCwgU3BhcmtsZXMsIFBvaW50TWF0ZXJpYWwsIFBvaW50IH0gZnJvbSAnQHJlYWN0LXRocmVlL2RyZWknXHJcbmltcG9ydCB7IFRleHR1cmVMb2FkZXIgfSBmcm9tICd0aHJlZSdcclxuaW1wb3J0ICogYXMgVEhSRUUgZnJvbSAndGhyZWUnXHJcbmltcG9ydCB7IHVzZUZyYW1lLCB1c2VMb2FkZXIgfSBmcm9tICdAcmVhY3QtdGhyZWUvZmliZXInXHJcbmltcG9ydCB7IHVzZVJlZiB9IGZyb20gJ3JlYWN0J1xyXG5cclxuXHJcbmV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIFNwaGVyZUFuaW1hdGVkKHsgYXJncywgc2NhbGUsIHBvc2l0aW9uIH0pIHtcclxuICAgIGNvbnN0IFtpbWFnZSwgbm9ybWFsXSA9IHVzZUxvYWRlcihUZXh0dXJlTG9hZGVyLCBbXCIvbWVyY3VyeS1ub3JtYWwtbWFwLmpwZ1wiLCAnL3BsYW5ldC10ZXh0dXJlLmpwZyddKVxyXG4gICAgY29uc3QgYXN0ZXJvaWRzID0gbmV3IFRIUkVFLlBvaW50c01hdGVyaWFsKHtcclxuICAgICAgICBzaXplOiAwLjAwNVxyXG4gICAgfSlcclxuXHJcbiAgICBjb25zdCBzcGhlcmUgPSB1c2VSZWYoKTtcclxuXHJcbiAgICB1c2VGcmFtZSgoKSA9PiB7XHJcbiAgICAgICAgc3BoZXJlLmN1cnJlbnQucm90YXRpb24ueSArPSAwLjAxXHJcblxyXG4gICAgfSlcclxuXHJcbiAgICByZXR1cm4gKFxyXG4gICAgICAgIDxtZXNoIHRyYW5zcGFyZW50PXt0cnVlfSBvcD5cclxuICAgICAgICAgICAgPFNwaGVyZSBvbkNsaWNrPXsoKSA9PiBjb25zb2xlLmxvZyhcImhvbGFcIil9XHJcbiAgICAgICAgICAgICAgICByZWY9e3NwaGVyZX1cclxuICAgICAgICAgICAgICAgIHRyYW5zcGFyZW50PXt0cnVlfVxyXG4gICAgICAgICAgICAgICAgb3BhY2l0eT17MH1cclxuICAgICAgICAgICAgICAgIHZpc2libGVcclxuICAgICAgICAgICAgICAgIGFyZ3M9e2FyZ3N9XHJcbiAgICAgICAgICAgICAgICBzY2FsZT17c2NhbGV9XHJcbiAgICAgICAgICAgICAgICBwb3NpdGlvbj17cG9zaXRpb259PlxyXG4gICAgICAgICAgICAgICAgey8qIDxNZXNoRGlzdG9ydE1hdGVyaWFsIGF0dGFjaD1cIm1hdGVyaWFsXCIgc3BlZWQ9ezF9IGRpc3RvcnQ9ezF9IC8+ICovfVxyXG4gICAgICAgICAgICAgICAgPG1lc2hTdGFuZGFyZE1hdGVyaWFsIG1hcD17bm9ybWFsfSBub3JtYWxNYXA9e2ltYWdlfSByb3VnaG5lc3M9ezAuNH0gbWV0YWxuZXNzPXswLjd9IC8+XHJcbiAgICAgICAgICAgIDwvU3BoZXJlPlxyXG4gICAgICAgIDwvbWVzaD5cclxuICAgIClcclxufSJdLCJuYW1lcyI6WyJTcGhlcmUiLCJDbG91ZCIsIk1lc2hEaXN0b3J0TWF0ZXJpYWwiLCJTcGFya2xlcyIsIlBvaW50TWF0ZXJpYWwiLCJQb2ludCIsIlRleHR1cmVMb2FkZXIiLCJUSFJFRSIsInVzZUZyYW1lIiwidXNlTG9hZGVyIiwidXNlUmVmIiwiU3BoZXJlQW5pbWF0ZWQiLCJhcmdzIiwic2NhbGUiLCJwb3NpdGlvbiIsImltYWdlIiwibm9ybWFsIiwiYXN0ZXJvaWRzIiwiUG9pbnRzTWF0ZXJpYWwiLCJzaXplIiwic3BoZXJlIiwiY3VycmVudCIsInJvdGF0aW9uIiwieSIsIm1lc2giLCJ0cmFuc3BhcmVudCIsIm9wIiwib25DbGljayIsImNvbnNvbGUiLCJsb2ciLCJyZWYiLCJvcGFjaXR5IiwidmlzaWJsZSIsIm1lc2hTdGFuZGFyZE1hdGVyaWFsIiwibWFwIiwibm9ybWFsTWFwIiwicm91Z2huZXNzIiwibWV0YWxuZXNzIl0sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///./components/SphereAnimated.js\n");

/***/ })

});