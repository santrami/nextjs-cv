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

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": function() { return /* binding */ SphereAnimated; }\n/* harmony export */ });\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"./node_modules/react/jsx-dev-runtime.js\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _react_three_drei__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @react-three/drei */ \"./node_modules/@react-three/drei/index.js\");\n/* harmony import */ var three__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! three */ \"./node_modules/three/build/three.module.js\");\n/* harmony import */ var _react_three_fiber__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @react-three/fiber */ \"./node_modules/@react-three/fiber/dist/react-three-fiber.esm.js\");\nfunction _arrayLikeToArray(arr, len) {\n    if (len == null || len > arr.length) len = arr.length;\n    for(var i = 0, arr2 = new Array(len); i < len; i++)arr2[i] = arr[i];\n    return arr2;\n}\nfunction _arrayWithHoles(arr) {\n    if (Array.isArray(arr)) return arr;\n}\nfunction _iterableToArrayLimit(arr, i) {\n    var _i = arr == null ? null : typeof Symbol !== \"undefined\" && arr[Symbol.iterator] || arr[\"@@iterator\"];\n    if (_i == null) return;\n    var _arr = [];\n    var _n = true;\n    var _d = false;\n    var _s1, _e;\n    try {\n        for(_i = _i.call(arr); !(_n = (_s1 = _i.next()).done); _n = true){\n            _arr.push(_s1.value);\n            if (i && _arr.length === i) break;\n        }\n    } catch (err) {\n        _d = true;\n        _e = err;\n    } finally{\n        try {\n            if (!_n && _i[\"return\"] != null) _i[\"return\"]();\n        } finally{\n            if (_d) throw _e;\n        }\n    }\n    return _arr;\n}\nfunction _nonIterableRest() {\n    throw new TypeError(\"Invalid attempt to destructure non-iterable instance.\\\\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.\");\n}\nfunction _slicedToArray(arr, i) {\n    return _arrayWithHoles(arr) || _iterableToArrayLimit(arr, i) || _unsupportedIterableToArray(arr, i) || _nonIterableRest();\n}\nfunction _unsupportedIterableToArray(o, minLen) {\n    if (!o) return;\n    if (typeof o === \"string\") return _arrayLikeToArray(o, minLen);\n    var n = Object.prototype.toString.call(o).slice(8, -1);\n    if (n === \"Object\" && o.constructor) n = o.constructor.name;\n    if (n === \"Map\" || n === \"Set\") return Array.from(n);\n    if (n === \"Arguments\" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen);\n}\n\n\n\n\nvar _s = $RefreshSig$();\nfunction SphereAnimated(param) {\n    var args = param.args, scale = param.scale, position = param.position;\n    _s();\n    var ref = _slicedToArray((0,_react_three_fiber__WEBPACK_IMPORTED_MODULE_1__.useLoader)(three__WEBPACK_IMPORTED_MODULE_2__.TextureLoader, [\n        \"/normal-map.jpg\",\n        \"/moon-normal-map.jpg\"\n    ]), 2), image = ref[0], normal = ref[1];\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_react_three_drei__WEBPACK_IMPORTED_MODULE_3__.Sphere, {\n        opacity: 0,\n        visible: true,\n        args: args,\n        scale: scale,\n        position: position,\n        children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"meshStandardMaterial\", {\n            map: normal,\n            normalMap: image,\n            roughness: 0.1,\n            metalness: 0.9\n        }, void 0, false, {\n            fileName: \"C:\\\\Users\\\\Hogar\\\\Desktop\\\\programacion\\\\nextjs-cv\\\\components\\\\SphereAnimated.js\",\n            lineNumber: 12,\n            columnNumber: 13\n        }, this)\n    }, void 0, false, {\n        fileName: \"C:\\\\Users\\\\Hogar\\\\Desktop\\\\programacion\\\\nextjs-cv\\\\components\\\\SphereAnimated.js\",\n        lineNumber: 10,\n        columnNumber: 9\n    }, this);\n};\n_s(SphereAnimated, \"ixWDcNex2XpXvausoAzTFlGCFUo=\", false, function() {\n    return [\n        _react_three_fiber__WEBPACK_IMPORTED_MODULE_1__.useLoader\n    ];\n});\n_c = SphereAnimated;\nvar _c;\n$RefreshReg$(_c, \"SphereAnimated\");\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports on update so we can compare the boundary\n                // signatures.\n                module.hot.dispose(function (data) {\n                    data.prevExports = currentExports;\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevExports !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevExports !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9jb21wb25lbnRzL1NwaGVyZUFuaW1hdGVkLmpzLmpzIiwibWFwcGluZ3MiOiI7Ozs7Ozs7OztBQUFBOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUErRjtBQUMxRDtBQUNTOztBQUcvQixTQUFTTyxjQUFjLENBQUMsS0FBeUIsRUFBRTtRQUF6QkMsSUFBSSxHQUFOLEtBQXlCLENBQXZCQSxJQUFJLEVBQUVDLEtBQUssR0FBYixLQUF5QixDQUFqQkEsS0FBSyxFQUFFQyxRQUFRLEdBQXZCLEtBQXlCLENBQVZBLFFBQVE7O0lBQzFELElBQXdCSixHQUFxRSxrQkFBckVBLDZEQUFTLENBQUNELGdEQUFhLEVBQUU7UUFBQyxpQkFBaUI7UUFBRSxzQkFBc0I7S0FBQyxDQUFDLE1BQXRGTSxLQUFLLEdBQVlMLEdBQXFFLEdBQWpGLEVBQUVNLE1BQU0sR0FBSU4sR0FBcUUsR0FBekU7SUFFcEIscUJBQ0ksOERBQUNOLHFEQUFNO1FBQUNhLE9BQU8sRUFBRSxDQUFDO1FBQUVDLE9BQU87UUFBQ04sSUFBSSxFQUFFQSxJQUFJO1FBQUVDLEtBQUssRUFBRUEsS0FBSztRQUFFQyxRQUFRLEVBQUVBLFFBQVE7a0JBRXBFLDRFQUFDSyxzQkFBb0I7WUFBQ0MsR0FBRyxFQUFFSixNQUFNO1lBQUVLLFNBQVMsRUFBRU4sS0FBSztZQUFFTyxTQUFTLEVBQUUsR0FBRztZQUFFQyxTQUFTLEVBQUUsR0FBRzs7Ozs7Z0JBQUc7Ozs7O1lBQ2pGLENBQ1o7Q0FDSjtHQVR1QlosY0FBYzs7UUFDVkQseURBQVM7OztBQURiQyxLQUFBQSxjQUFjIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vX05fRS8uL2NvbXBvbmVudHMvU3BoZXJlQW5pbWF0ZWQuanM/NTA5MCJdLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBTcGhlcmUsIENsb3VkLCBNZXNoRGlzdG9ydE1hdGVyaWFsLCBTcGFya2xlcywgUG9pbnRNYXRlcmlhbCB9IGZyb20gJ0ByZWFjdC10aHJlZS9kcmVpJ1xyXG5pbXBvcnQgeyBUZXh0dXJlTG9hZGVyIH0gZnJvbSAndGhyZWUnXHJcbmltcG9ydCB7IHVzZUxvYWRlciB9IGZyb20gJ0ByZWFjdC10aHJlZS9maWJlcidcclxuXHJcblxyXG5leHBvcnQgZGVmYXVsdCBmdW5jdGlvbiBTcGhlcmVBbmltYXRlZCh7IGFyZ3MsIHNjYWxlLCBwb3NpdGlvbiB9KSB7XHJcbiAgICBjb25zdCBbaW1hZ2UsIG5vcm1hbF0gPSB1c2VMb2FkZXIoVGV4dHVyZUxvYWRlciwgW1wiL25vcm1hbC1tYXAuanBnXCIsICcvbW9vbi1ub3JtYWwtbWFwLmpwZyddKVxyXG5cclxuICAgIHJldHVybiAoXHJcbiAgICAgICAgPFNwaGVyZSBvcGFjaXR5PXswfSB2aXNpYmxlIGFyZ3M9e2FyZ3N9IHNjYWxlPXtzY2FsZX0gcG9zaXRpb249e3Bvc2l0aW9ufT5cclxuICAgICAgICAgICAgey8qIDxNZXNoRGlzdG9ydE1hdGVyaWFsIGF0dGFjaD1cIm1hdGVyaWFsXCIgc3BlZWQ9ezF9IGRpc3RvcnQ9ezF9IC8+ICovfVxyXG4gICAgICAgICAgICA8bWVzaFN0YW5kYXJkTWF0ZXJpYWwgbWFwPXtub3JtYWx9IG5vcm1hbE1hcD17aW1hZ2V9IHJvdWdobmVzcz17MC4xfSBtZXRhbG5lc3M9ezAuOX0vPlxyXG4gICAgICAgIDwvU3BoZXJlPlxyXG4gICAgKVxyXG59Il0sIm5hbWVzIjpbIlNwaGVyZSIsIkNsb3VkIiwiTWVzaERpc3RvcnRNYXRlcmlhbCIsIlNwYXJrbGVzIiwiUG9pbnRNYXRlcmlhbCIsIlRleHR1cmVMb2FkZXIiLCJ1c2VMb2FkZXIiLCJTcGhlcmVBbmltYXRlZCIsImFyZ3MiLCJzY2FsZSIsInBvc2l0aW9uIiwiaW1hZ2UiLCJub3JtYWwiLCJvcGFjaXR5IiwidmlzaWJsZSIsIm1lc2hTdGFuZGFyZE1hdGVyaWFsIiwibWFwIiwibm9ybWFsTWFwIiwicm91Z2huZXNzIiwibWV0YWxuZXNzIl0sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///./components/SphereAnimated.js\n");

/***/ })

});