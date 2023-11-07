"use strict";
/*
 * ATTENTION: An "eval-source-map" devtool has been used.
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file with attached SourceMaps in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
(() => {
var exports = {};
exports.id = "pages/api/getTopTen";
exports.ids = ["pages/api/getTopTen"];
exports.modules = {

/***/ "(api)/./pages/api/getTopTen.js":
/*!********************************!*\
  !*** ./pages/api/getTopTen.js ***!
  \********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (/* binding */ handler)\n/* harmony export */ });\n// Next.js API route support: https://nextjs.org/docs/api-routes/introduction\nfunction handler(req, res) {\n    const getData = async ()=>{\n        const response = await fetch(\"https://pro-api.coinmarketcap.com/v1/cryptocurrency/listings/latest?CMC_PRO_API_KEY=82d7943d-8194-43d9-85f6-b1541c6163e7\", {\n            method: \"GET\",\n            headers: {\n                Accept: \"*/*\"\n            }\n        });\n        const data = await response.json();\n        res.status(200).json({\n            data\n        });\n    };\n    getData();\n} // export default function handler(req, res) {\n //   const [repeater,setRepeater]=useState(0)\n //   useEffect(() => {\n //     const getData = async () => {\n //       setIsLoading(true)\n //       const response = await fetch(\n //               \"https://pro-api.coinmarketcap.com/v1/cryptocurrency/listings/latest?CMC_PRO_API_KEY=82d7943d-8194-43d9-85f6-b1541c6163e7\",\n //               {\n //                 method: 'GET',\n //                 headers: {\n //                   Accept: '*/*',\n //                 },\n //               },\n //             )\n //             const data = await response.json()\n //             res.status(200).json({ data })\n //       setIsLoading(false)\n //     }\n //     getData()\n //     setTimeout(() => setRepeater(prevState=>prevState+1), 100000);\n //   },[repeater])\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiKGFwaSkvLi9wYWdlcy9hcGkvZ2V0VG9wVGVuLmpzLmpzIiwibWFwcGluZ3MiOiI7Ozs7QUFBQSw2RUFBNkU7QUFFOUQsU0FBU0EsUUFBUUMsR0FBRyxFQUFFQyxHQUFHLEVBQUU7SUFDeEMsTUFBTUMsVUFBVSxVQUFZO1FBRTFCLE1BQU1DLFdBQVcsTUFBTUMsTUFDckIsNEhBQ0E7WUFDRUMsUUFBUTtZQUNSQyxTQUFTO2dCQUNQQyxRQUFRO1lBQ1Y7UUFDRjtRQUdGLE1BQU1DLE9BQU8sTUFBTUwsU0FBU00sSUFBSTtRQUVoQ1IsSUFBSVMsTUFBTSxDQUFDLEtBQUtELElBQUksQ0FBQztZQUFFRDtRQUFLO0lBQzlCO0lBRUFOO0FBQ0YsQ0FBQyxDQUVELDhDQUE4QztDQUM5Qyw2Q0FBNkM7Q0FDN0Msc0JBQXNCO0NBQ3RCLG9DQUFvQztDQUNwQywyQkFBMkI7Q0FDM0Isc0NBQXNDO0NBQ3RDLDRJQUE0STtDQUM1SSxrQkFBa0I7Q0FDbEIsaUNBQWlDO0NBQ2pDLDZCQUE2QjtDQUM3QixtQ0FBbUM7Q0FDbkMscUJBQXFCO0NBQ3JCLG1CQUFtQjtDQUNuQixnQkFBZ0I7Q0FDaEIsaURBQWlEO0NBQ2pELDZDQUE2QztDQUM3Qyw0QkFBNEI7Q0FDNUIsUUFBUTtDQUVSLGdCQUFnQjtDQUNoQixxRUFBcUU7Q0FDckUsa0JBQWtCIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vYnRzLWNvaW5tYXJrZXRjYXAtYmxvY2tjaGFpbi8uL3BhZ2VzL2FwaS9nZXRUb3BUZW4uanM/OTVhOSJdLCJzb3VyY2VzQ29udGVudCI6WyIvLyBOZXh0LmpzIEFQSSByb3V0ZSBzdXBwb3J0OiBodHRwczovL25leHRqcy5vcmcvZG9jcy9hcGktcm91dGVzL2ludHJvZHVjdGlvblxyXG5cclxuZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gaGFuZGxlcihyZXEsIHJlcykge1xyXG4gIGNvbnN0IGdldERhdGEgPSBhc3luYyAoKSA9PiB7XHJcbiAgIFxyXG4gICAgY29uc3QgcmVzcG9uc2UgPSBhd2FpdCBmZXRjaChcclxuICAgICAgXCJodHRwczovL3Byby1hcGkuY29pbm1hcmtldGNhcC5jb20vdjEvY3J5cHRvY3VycmVuY3kvbGlzdGluZ3MvbGF0ZXN0P0NNQ19QUk9fQVBJX0tFWT04MmQ3OTQzZC04MTk0LTQzZDktODVmNi1iMTU0MWM2MTYzZTdcIixcclxuICAgICAge1xyXG4gICAgICAgIG1ldGhvZDogJ0dFVCcsXHJcbiAgICAgICAgaGVhZGVyczoge1xyXG4gICAgICAgICAgQWNjZXB0OiAnKi8qJyxcclxuICAgICAgICB9LFxyXG4gICAgICB9LFxyXG4gICAgKVxyXG4gICBcclxuICAgIGNvbnN0IGRhdGEgPSBhd2FpdCByZXNwb25zZS5qc29uKClcclxuXHJcbiAgICByZXMuc3RhdHVzKDIwMCkuanNvbih7IGRhdGEgfSlcclxuICB9XHJcblxyXG4gIGdldERhdGEoKVxyXG59XHJcblxyXG4vLyBleHBvcnQgZGVmYXVsdCBmdW5jdGlvbiBoYW5kbGVyKHJlcSwgcmVzKSB7XHJcbi8vICAgY29uc3QgW3JlcGVhdGVyLHNldFJlcGVhdGVyXT11c2VTdGF0ZSgwKVxyXG4vLyAgIHVzZUVmZmVjdCgoKSA9PiB7XHJcbi8vICAgICBjb25zdCBnZXREYXRhID0gYXN5bmMgKCkgPT4ge1xyXG4vLyAgICAgICBzZXRJc0xvYWRpbmcodHJ1ZSlcclxuLy8gICAgICAgY29uc3QgcmVzcG9uc2UgPSBhd2FpdCBmZXRjaChcclxuLy8gICAgICAgICAgICAgICBcImh0dHBzOi8vcHJvLWFwaS5jb2lubWFya2V0Y2FwLmNvbS92MS9jcnlwdG9jdXJyZW5jeS9saXN0aW5ncy9sYXRlc3Q/Q01DX1BST19BUElfS0VZPTgyZDc5NDNkLTgxOTQtNDNkOS04NWY2LWIxNTQxYzYxNjNlN1wiLFxyXG4vLyAgICAgICAgICAgICAgIHtcclxuLy8gICAgICAgICAgICAgICAgIG1ldGhvZDogJ0dFVCcsXHJcbi8vICAgICAgICAgICAgICAgICBoZWFkZXJzOiB7XHJcbi8vICAgICAgICAgICAgICAgICAgIEFjY2VwdDogJyovKicsXHJcbi8vICAgICAgICAgICAgICAgICB9LFxyXG4vLyAgICAgICAgICAgICAgIH0sXHJcbi8vICAgICAgICAgICAgIClcclxuLy8gICAgICAgICAgICAgY29uc3QgZGF0YSA9IGF3YWl0IHJlc3BvbnNlLmpzb24oKVxyXG4vLyAgICAgICAgICAgICByZXMuc3RhdHVzKDIwMCkuanNvbih7IGRhdGEgfSlcclxuLy8gICAgICAgc2V0SXNMb2FkaW5nKGZhbHNlKVxyXG4vLyAgICAgfVxyXG4gIFxyXG4vLyAgICAgZ2V0RGF0YSgpXHJcbi8vICAgICBzZXRUaW1lb3V0KCgpID0+IHNldFJlcGVhdGVyKHByZXZTdGF0ZT0+cHJldlN0YXRlKzEpLCAxMDAwMDApO1xyXG4vLyAgIH0sW3JlcGVhdGVyXSlcclxuXHJcblxyXG5cclxuIl0sIm5hbWVzIjpbImhhbmRsZXIiLCJyZXEiLCJyZXMiLCJnZXREYXRhIiwicmVzcG9uc2UiLCJmZXRjaCIsIm1ldGhvZCIsImhlYWRlcnMiLCJBY2NlcHQiLCJkYXRhIiwianNvbiIsInN0YXR1cyJdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///(api)/./pages/api/getTopTen.js\n");

/***/ })

};
;

// load runtime
var __webpack_require__ = require("../../webpack-api-runtime.js");
__webpack_require__.C(exports);
var __webpack_exec__ = (moduleId) => (__webpack_require__(__webpack_require__.s = moduleId))
var __webpack_exports__ = (__webpack_exec__("(api)/./pages/api/getTopTen.js"));
module.exports = __webpack_exports__;

})();