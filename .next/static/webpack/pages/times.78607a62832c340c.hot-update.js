"use strict";
/*
 * ATTENTION: An "eval-source-map" devtool has been used.
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file with attached SourceMaps in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
self["webpackHotUpdate_N_E"]("pages/times",{

/***/ "./src/styles/times.js":
/*!*****************************!*\
  !*** ./src/styles/times.js ***!
  \*****************************/
/***/ (function(module, __webpack_exports__, __webpack_require__) {

eval(__webpack_require__.ts("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"Button\": function() { return /* binding */ Button; },\n/* harmony export */   \"Container\": function() { return /* binding */ Container; },\n/* harmony export */   \"Header\": function() { return /* binding */ Header; },\n/* harmony export */   \"HeaderContent\": function() { return /* binding */ HeaderContent; },\n/* harmony export */   \"Image\": function() { return /* binding */ Image; },\n/* harmony export */   \"Nav\": function() { return /* binding */ Nav; },\n/* harmony export */   \"NewsCard\": function() { return /* binding */ NewsCard; },\n/* harmony export */   \"NewsGrid\": function() { return /* binding */ NewsGrid; },\n/* harmony export */   \"Section\": function() { return /* binding */ Section; },\n/* harmony export */   \"Table\": function() { return /* binding */ Table; },\n/* harmony export */   \"TableCell\": function() { return /* binding */ TableCell; },\n/* harmony export */   \"TableHeader\": function() { return /* binding */ TableHeader; }\n/* harmony export */ });\n/* harmony import */ var _swc_helpers_src_tagged_template_literal_mjs__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @swc/helpers/src/_tagged_template_literal.mjs */ \"./node_modules/@swc/helpers/src/_tagged_template_literal.mjs\");\n/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! styled-components */ \"./node_modules/styled-components/dist/styled-components.browser.esm.js\");\n\nfunction _templateObject() {\n    const data = (0,_swc_helpers_src_tagged_template_literal_mjs__WEBPACK_IMPORTED_MODULE_0__[\"default\"])([\n        \"\\n  background-color: #1a1a1a;\\n  color: #ffffff;\\n  min-height: 100vh;\\n  font-family: sans-serif;\\n\"\n    ]);\n    _templateObject = function() {\n        return data;\n    };\n    return data;\n}\nfunction _templateObject1() {\n    const data = (0,_swc_helpers_src_tagged_template_literal_mjs__WEBPACK_IMPORTED_MODULE_0__[\"default\"])([\n        \"\\n  background-color: #2d2d2d;\\n  padding: 1rem 1.5rem;\\n\"\n    ]);\n    _templateObject1 = function() {\n        return data;\n    };\n    return data;\n}\nfunction _templateObject2() {\n    const data = (0,_swc_helpers_src_tagged_template_literal_mjs__WEBPACK_IMPORTED_MODULE_0__[\"default\"])([\n        \"\\n  display: flex;\\n  align-items: center;\\n  justify-content: space-between;\\n\"\n    ]);\n    _templateObject2 = function() {\n        return data;\n    };\n    return data;\n}\nfunction _templateObject3() {\n    const data = (0,_swc_helpers_src_tagged_template_literal_mjs__WEBPACK_IMPORTED_MODULE_0__[\"default\"])([\n        \"\\n  background-color: #2d2d2d;\\n  display: flex;\\n  gap: 1rem;\\n  padding: 0.5rem 1.5rem;\\n\"\n    ]);\n    _templateObject3 = function() {\n        return data;\n    };\n    return data;\n}\nfunction _templateObject4() {\n    const data = (0,_swc_helpers_src_tagged_template_literal_mjs__WEBPACK_IMPORTED_MODULE_0__[\"default\"])([\n        \"\\n  padding: 1rem 1.5rem;\\n\"\n    ]);\n    _templateObject4 = function() {\n        return data;\n    };\n    return data;\n}\nfunction _templateObject5() {\n    const data = (0,_swc_helpers_src_tagged_template_literal_mjs__WEBPACK_IMPORTED_MODULE_0__[\"default\"])([\n        \"\\n  display: grid;\\n  grid-template-columns: repeat(3, 1fr);\\n  gap: 1rem;\\n\"\n    ]);\n    _templateObject5 = function() {\n        return data;\n    };\n    return data;\n}\nfunction _templateObject6() {\n    const data = (0,_swc_helpers_src_tagged_template_literal_mjs__WEBPACK_IMPORTED_MODULE_0__[\"default\"])([\n        \"\\n  background-color: #2d2d2d;\\n  padding: 1rem;\\n  border-radius: 0.5rem;\\n\"\n    ]);\n    _templateObject6 = function() {\n        return data;\n    };\n    return data;\n}\nfunction _templateObject7() {\n    const data = (0,_swc_helpers_src_tagged_template_literal_mjs__WEBPACK_IMPORTED_MODULE_0__[\"default\"])([\n        \"\\n  width: 100%;\\n  height: 8rem;\\n  object-fit: cover;\\n  border-radius: 0.5rem;\\n  margin-bottom: 0.5rem;\\n\"\n    ]);\n    _templateObject7 = function() {\n        return data;\n    };\n    return data;\n}\nfunction _templateObject8() {\n    const data = (0,_swc_helpers_src_tagged_template_literal_mjs__WEBPACK_IMPORTED_MODULE_0__[\"default\"])([\n        \"\\n  width: 100%;\\n  text-align: left;\\n\"\n    ]);\n    _templateObject8 = function() {\n        return data;\n    };\n    return data;\n}\nfunction _templateObject9() {\n    const data = (0,_swc_helpers_src_tagged_template_literal_mjs__WEBPACK_IMPORTED_MODULE_0__[\"default\"])([\n        \"\\n  padding: 0.5rem 0;\\n\"\n    ]);\n    _templateObject9 = function() {\n        return data;\n    };\n    return data;\n}\nfunction _templateObject10() {\n    const data = (0,_swc_helpers_src_tagged_template_literal_mjs__WEBPACK_IMPORTED_MODULE_0__[\"default\"])([\n        \"\\n  padding: 0.5rem 0;\\n\"\n    ]);\n    _templateObject10 = function() {\n        return data;\n    };\n    return data;\n}\n\nconst Container = styled_components__WEBPACK_IMPORTED_MODULE_1__[\"default\"].div(_templateObject());\nconst Header = styled_components__WEBPACK_IMPORTED_MODULE_1__[\"default\"].header(_templateObject1());\nconst HeaderContent = styled_components__WEBPACK_IMPORTED_MODULE_1__[\"default\"].div(_templateObject2());\nconst Nav = styled_components__WEBPACK_IMPORTED_MODULE_1__[\"default\"].nav(_templateObject3());\nconst Button = styled_components__WEBPACK_IMPORTED_MODULE_1__[\"default\"].button < {\n    isActive: boolean\n} > \"\\n  background-color: \".concat((props)=>props.isActive ? \"#fbbf24\" : \"#2d2d2d\", \";\\n  color: \").concat((props)=>props.isActive ? \"#000000\" : \"#9ca3af\", \";\\n  padding: 0.7rem 1.5rem;\\n  border: \").concat((props)=>props.isActive ? \"none\" : \"1px solid #3b3b3b\", \";\\n  border-radius: 0.5rem;\\n  font-size: 1rem;\\n  font-weight: bold;\\n  cursor: pointer;\\n  box-shadow: \").concat((props)=>props.isActive ? \"0px 4px 6px rgba(0, 0, 0, 0.1)\" : \"none\", \";\\n  transition: all 0.3s ease-in-out;\\n\\n  &:hover {\\n    background-color: \").concat((props)=>props.isActive ? \"#ffdb6c\" : \"#3b3b3b\", \";\\n    color: \").concat((props)=>props.isActive ? \"#000000\" : \"#fbbf24\", \";\\n    box-shadow: \").concat((props)=>props.isActive ? \"0px 6px 8px rgba(0, 0, 0, 0.2)\" : \"none\", \";\\n    transform: \").concat((props)=>props.isActive ? \"translateY(-2px)\" : \"none\", \";\\n  }\\n\\n  &:active {\\n    transform: \").concat((props)=>props.isActive ? \"translateY(1px)\" : \"none\", \";\\n  }\\n\");\nconst Section = styled_components__WEBPACK_IMPORTED_MODULE_1__[\"default\"].section(_templateObject4());\nconst NewsGrid = styled_components__WEBPACK_IMPORTED_MODULE_1__[\"default\"].div(_templateObject5());\nconst NewsCard = styled_components__WEBPACK_IMPORTED_MODULE_1__[\"default\"].div(_templateObject6());\nconst Image = styled_components__WEBPACK_IMPORTED_MODULE_1__[\"default\"].img(_templateObject7());\nconst Table = styled_components__WEBPACK_IMPORTED_MODULE_1__[\"default\"].table(_templateObject8());\nconst TableHeader = styled_components__WEBPACK_IMPORTED_MODULE_1__[\"default\"].th(_templateObject9());\nconst TableCell = styled_components__WEBPACK_IMPORTED_MODULE_1__[\"default\"].td(_templateObject10());\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports on update so we can compare the boundary\n                // signatures.\n                module.hot.dispose(function (data) {\n                    data.prevExports = currentExports;\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevExports !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevExports !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9zcmMvc3R5bGVzL3RpbWVzLmpzLmpzIiwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUF1QztBQUVoQyxNQUFNQyxZQUFZRCw2REFBVSxvQkFLakM7QUFFSyxNQUFNRyxTQUFTSCxnRUFBYSxxQkFHakM7QUFFSyxNQUFNSyxnQkFBZ0JMLDZEQUFVLHFCQUlyQztBQUVLLE1BQU1NLE1BQU1OLDZEQUFVLHFCQUszQjtBQUVLLE1BQU1RLFNBQVNSLGdFQUFhLEdBQUM7SUFBRVUsVUFBVUM7QUFBUSxJQUFFLHlCQUUvQyxPQURXLENBQUNDLFFBQVdBLE1BQU1GLFFBQVEsR0FBRyxZQUFZLFNBQVMsRUFBRSxnQkFHOUQsT0FGRCxDQUFDRSxRQUFXQSxNQUFNRixRQUFRLEdBQUcsWUFBWSxTQUFTLEVBQUUsNENBTy9DLE9BTEosQ0FBQ0UsUUFBV0EsTUFBTUYsUUFBUSxHQUFHLFNBQVMsbUJBQW1CLEVBQUUsNkdBVS9DLE9BTFIsQ0FBQ0UsUUFDYkEsTUFBTUYsUUFBUSxHQUFHLG1DQUFtQyxNQUFNLEVBQUMsaUZBS2xELE9BRFcsQ0FBQ0UsUUFBV0EsTUFBTUYsUUFBUSxHQUFHLFlBQVksU0FBUyxFQUFFLGtCQUUxRCxPQURMLENBQUNFLFFBQVdBLE1BQU1GLFFBQVEsR0FBRyxZQUFZLFNBQVMsRUFBRSx1QkFHaEQsT0FGQyxDQUFDRSxRQUNiQSxNQUFNRixRQUFRLEdBQUcsbUNBQW1DLE1BQU0sRUFBQyxzQkFLaEQsT0FKQSxDQUFDRSxRQUFXQSxNQUFNRixRQUFRLEdBQUcscUJBQXFCLE1BQU0sRUFBRSwyQ0FJRCxPQUF6RCxDQUFDRSxRQUFXQSxNQUFNRixRQUFRLEdBQUcsb0JBQW9CLE1BQU0sRUFBRSxZQUV4RTtBQUVLLE1BQU1HLFVBQVViLGlFQUFjLHFCQUVuQztBQUVLLE1BQU1lLFdBQVdmLDZEQUFVLHFCQUloQztBQUVLLE1BQU1nQixXQUFXaEIsNkRBQVUscUJBSWhDO0FBRUssTUFBTWlCLFFBQVFqQiw2REFBVSxxQkFNN0I7QUFFSyxNQUFNbUIsUUFBUW5CLCtEQUFZLHFCQUcvQjtBQUVLLE1BQU1xQixjQUFjckIsNERBQVMscUJBRWxDO0FBRUssTUFBTXVCLFlBQVl2Qiw0REFBUyxzQkFFaEMiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vc3JjL3N0eWxlcy90aW1lcy5qcz9lNzk3Il0sInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBzdHlsZWQgZnJvbSBcInN0eWxlZC1jb21wb25lbnRzXCI7XG5cbmV4cG9ydCBjb25zdCBDb250YWluZXIgPSBzdHlsZWQuZGl2YFxuICBiYWNrZ3JvdW5kLWNvbG9yOiAjMWExYTFhO1xuICBjb2xvcjogI2ZmZmZmZjtcbiAgbWluLWhlaWdodDogMTAwdmg7XG4gIGZvbnQtZmFtaWx5OiBzYW5zLXNlcmlmO1xuYDtcblxuZXhwb3J0IGNvbnN0IEhlYWRlciA9IHN0eWxlZC5oZWFkZXJgXG4gIGJhY2tncm91bmQtY29sb3I6ICMyZDJkMmQ7XG4gIHBhZGRpbmc6IDFyZW0gMS41cmVtO1xuYDtcblxuZXhwb3J0IGNvbnN0IEhlYWRlckNvbnRlbnQgPSBzdHlsZWQuZGl2YFxuICBkaXNwbGF5OiBmbGV4O1xuICBhbGlnbi1pdGVtczogY2VudGVyO1xuICBqdXN0aWZ5LWNvbnRlbnQ6IHNwYWNlLWJldHdlZW47XG5gO1xuXG5leHBvcnQgY29uc3QgTmF2ID0gc3R5bGVkLm5hdmBcbiAgYmFja2dyb3VuZC1jb2xvcjogIzJkMmQyZDtcbiAgZGlzcGxheTogZmxleDtcbiAgZ2FwOiAxcmVtO1xuICBwYWRkaW5nOiAwLjVyZW0gMS41cmVtO1xuYDtcblxuZXhwb3J0IGNvbnN0IEJ1dHRvbiA9IHN0eWxlZC5idXR0b248eyBpc0FjdGl2ZTogYm9vbGVhbiB9PmBcbiAgYmFja2dyb3VuZC1jb2xvcjogJHsocHJvcHMpID0+IChwcm9wcy5pc0FjdGl2ZSA/IFwiI2ZiYmYyNFwiIDogXCIjMmQyZDJkXCIpfTtcbiAgY29sb3I6ICR7KHByb3BzKSA9PiAocHJvcHMuaXNBY3RpdmUgPyBcIiMwMDAwMDBcIiA6IFwiIzljYTNhZlwiKX07XG4gIHBhZGRpbmc6IDAuN3JlbSAxLjVyZW07XG4gIGJvcmRlcjogJHsocHJvcHMpID0+IChwcm9wcy5pc0FjdGl2ZSA/IFwibm9uZVwiIDogXCIxcHggc29saWQgIzNiM2IzYlwiKX07XG4gIGJvcmRlci1yYWRpdXM6IDAuNXJlbTtcbiAgZm9udC1zaXplOiAxcmVtO1xuICBmb250LXdlaWdodDogYm9sZDtcbiAgY3Vyc29yOiBwb2ludGVyO1xuICBib3gtc2hhZG93OiAkeyhwcm9wcykgPT5cbiAgICBwcm9wcy5pc0FjdGl2ZSA/IFwiMHB4IDRweCA2cHggcmdiYSgwLCAwLCAwLCAwLjEpXCIgOiBcIm5vbmVcIn07XG4gIHRyYW5zaXRpb246IGFsbCAwLjNzIGVhc2UtaW4tb3V0O1xuXG4gICY6aG92ZXIge1xuICAgIGJhY2tncm91bmQtY29sb3I6ICR7KHByb3BzKSA9PiAocHJvcHMuaXNBY3RpdmUgPyBcIiNmZmRiNmNcIiA6IFwiIzNiM2IzYlwiKX07XG4gICAgY29sb3I6ICR7KHByb3BzKSA9PiAocHJvcHMuaXNBY3RpdmUgPyBcIiMwMDAwMDBcIiA6IFwiI2ZiYmYyNFwiKX07XG4gICAgYm94LXNoYWRvdzogJHsocHJvcHMpID0+XG4gICAgICBwcm9wcy5pc0FjdGl2ZSA/IFwiMHB4IDZweCA4cHggcmdiYSgwLCAwLCAwLCAwLjIpXCIgOiBcIm5vbmVcIn07XG4gICAgdHJhbnNmb3JtOiAkeyhwcm9wcykgPT4gKHByb3BzLmlzQWN0aXZlID8gXCJ0cmFuc2xhdGVZKC0ycHgpXCIgOiBcIm5vbmVcIil9O1xuICB9XG5cbiAgJjphY3RpdmUge1xuICAgIHRyYW5zZm9ybTogJHsocHJvcHMpID0+IChwcm9wcy5pc0FjdGl2ZSA/IFwidHJhbnNsYXRlWSgxcHgpXCIgOiBcIm5vbmVcIil9O1xuICB9XG5gO1xuXG5leHBvcnQgY29uc3QgU2VjdGlvbiA9IHN0eWxlZC5zZWN0aW9uYFxuICBwYWRkaW5nOiAxcmVtIDEuNXJlbTtcbmA7XG5cbmV4cG9ydCBjb25zdCBOZXdzR3JpZCA9IHN0eWxlZC5kaXZgXG4gIGRpc3BsYXk6IGdyaWQ7XG4gIGdyaWQtdGVtcGxhdGUtY29sdW1uczogcmVwZWF0KDMsIDFmcik7XG4gIGdhcDogMXJlbTtcbmA7XG5cbmV4cG9ydCBjb25zdCBOZXdzQ2FyZCA9IHN0eWxlZC5kaXZgXG4gIGJhY2tncm91bmQtY29sb3I6ICMyZDJkMmQ7XG4gIHBhZGRpbmc6IDFyZW07XG4gIGJvcmRlci1yYWRpdXM6IDAuNXJlbTtcbmA7XG5cbmV4cG9ydCBjb25zdCBJbWFnZSA9IHN0eWxlZC5pbWdgXG4gIHdpZHRoOiAxMDAlO1xuICBoZWlnaHQ6IDhyZW07XG4gIG9iamVjdC1maXQ6IGNvdmVyO1xuICBib3JkZXItcmFkaXVzOiAwLjVyZW07XG4gIG1hcmdpbi1ib3R0b206IDAuNXJlbTtcbmA7XG5cbmV4cG9ydCBjb25zdCBUYWJsZSA9IHN0eWxlZC50YWJsZWBcbiAgd2lkdGg6IDEwMCU7XG4gIHRleHQtYWxpZ246IGxlZnQ7XG5gO1xuXG5leHBvcnQgY29uc3QgVGFibGVIZWFkZXIgPSBzdHlsZWQudGhgXG4gIHBhZGRpbmc6IDAuNXJlbSAwO1xuYDtcblxuZXhwb3J0IGNvbnN0IFRhYmxlQ2VsbCA9IHN0eWxlZC50ZGBcbiAgcGFkZGluZzogMC41cmVtIDA7XG5gO1xuIl0sIm5hbWVzIjpbInN0eWxlZCIsIkNvbnRhaW5lciIsImRpdiIsIkhlYWRlciIsImhlYWRlciIsIkhlYWRlckNvbnRlbnQiLCJOYXYiLCJuYXYiLCJCdXR0b24iLCJidXR0b24iLCJpc0FjdGl2ZSIsImJvb2xlYW4iLCJwcm9wcyIsIlNlY3Rpb24iLCJzZWN0aW9uIiwiTmV3c0dyaWQiLCJOZXdzQ2FyZCIsIkltYWdlIiwiaW1nIiwiVGFibGUiLCJ0YWJsZSIsIlRhYmxlSGVhZGVyIiwidGgiLCJUYWJsZUNlbGwiLCJ0ZCJdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///./src/styles/times.js\n"));

/***/ })

});