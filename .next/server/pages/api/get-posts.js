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
exports.id = "pages/api/get-posts";
exports.ids = ["pages/api/get-posts"];
exports.modules = {

/***/ "serverless-mysql":
/*!***********************************!*\
  !*** external "serverless-mysql" ***!
  \***********************************/
/***/ ((module) => {

module.exports = require("serverless-mysql");

/***/ }),

/***/ "(api)/./lib/db.js":
/*!*******************!*\
  !*** ./lib/db.js ***!
  \*******************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var serverless_mysql__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! serverless-mysql */ \"serverless-mysql\");\n/* harmony import */ var serverless_mysql__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(serverless_mysql__WEBPACK_IMPORTED_MODULE_0__);\n// db.js\n\nconst db = serverless_mysql__WEBPACK_IMPORTED_MODULE_0___default()({\n    config: {\n        host: process.env.MYSQL_HOST,\n        // port: process.env.MYSQL_PORT,\n        database: process.env.MYSQL_DATABASE,\n        user: process.env.MYSQL_USER,\n        password: process.env.MYSQL_PASSWORD\n    }\n});\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (db); // export default async function excuteQuery({ query, values }) {\n //   try {\n //     const results = await db.query(query, values);\n //     await db.end();\n //     return results;\n //   } catch (error) {\n //     return { error };\n //   }\n // }\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiKGFwaSkvLi9saWIvZGIuanMuanMiLCJtYXBwaW5ncyI6Ijs7Ozs7O0FBQUEsUUFBUTtBQUM2QjtBQUNyQyxNQUFNQyxFQUFFLEdBQUdELHVEQUFLLENBQUM7SUFDZkUsTUFBTSxFQUFFO1FBQ05DLElBQUksRUFBRUMsT0FBTyxDQUFDQyxHQUFHLENBQUNDLFVBQVU7UUFDNUIsZ0NBQWdDO1FBQ2hDQyxRQUFRLEVBQUVILE9BQU8sQ0FBQ0MsR0FBRyxDQUFDRyxjQUFjO1FBQ3BDQyxJQUFJLEVBQUVMLE9BQU8sQ0FBQ0MsR0FBRyxDQUFDSyxVQUFVO1FBQzVCQyxRQUFRLEVBQUVQLE9BQU8sQ0FBQ0MsR0FBRyxDQUFDTyxjQUFjO0tBQ3JDO0NBQ0YsQ0FBQztBQUNGLGlFQUFlWCxFQUFFLEVBQUMsQ0FDbEIsaUVBQWlFO0NBQ2pFLFVBQVU7Q0FDVixxREFBcUQ7Q0FDckQsc0JBQXNCO0NBQ3RCLHNCQUFzQjtDQUN0QixzQkFBc0I7Q0FDdEIsd0JBQXdCO0NBQ3hCLE1BQU07Q0FDTixJQUFJIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vLy4vbGliL2RiLmpzPzNkYzkiXSwic291cmNlc0NvbnRlbnQiOlsiLy8gZGIuanNcbmltcG9ydCBteXNxbCBmcm9tICdzZXJ2ZXJsZXNzLW15c3FsJztcbmNvbnN0IGRiID0gbXlzcWwoe1xuICBjb25maWc6IHtcbiAgICBob3N0OiBwcm9jZXNzLmVudi5NWVNRTF9IT1NULFxuICAgIC8vIHBvcnQ6IHByb2Nlc3MuZW52Lk1ZU1FMX1BPUlQsXG4gICAgZGF0YWJhc2U6IHByb2Nlc3MuZW52Lk1ZU1FMX0RBVEFCQVNFLFxuICAgIHVzZXI6IHByb2Nlc3MuZW52Lk1ZU1FMX1VTRVIsXG4gICAgcGFzc3dvcmQ6IHByb2Nlc3MuZW52Lk1ZU1FMX1BBU1NXT1JEXG4gIH1cbn0pO1xuZXhwb3J0IGRlZmF1bHQgZGI7XG4vLyBleHBvcnQgZGVmYXVsdCBhc3luYyBmdW5jdGlvbiBleGN1dGVRdWVyeSh7IHF1ZXJ5LCB2YWx1ZXMgfSkge1xuLy8gICB0cnkge1xuLy8gICAgIGNvbnN0IHJlc3VsdHMgPSBhd2FpdCBkYi5xdWVyeShxdWVyeSwgdmFsdWVzKTtcbi8vICAgICBhd2FpdCBkYi5lbmQoKTtcbi8vICAgICByZXR1cm4gcmVzdWx0cztcbi8vICAgfSBjYXRjaCAoZXJyb3IpIHtcbi8vICAgICByZXR1cm4geyBlcnJvciB9O1xuLy8gICB9XG4vLyB9Il0sIm5hbWVzIjpbIm15c3FsIiwiZGIiLCJjb25maWciLCJob3N0IiwicHJvY2VzcyIsImVudiIsIk1ZU1FMX0hPU1QiLCJkYXRhYmFzZSIsIk1ZU1FMX0RBVEFCQVNFIiwidXNlciIsIk1ZU1FMX1VTRVIiLCJwYXNzd29yZCIsIk1ZU1FMX1BBU1NXT1JEIl0sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///(api)/./lib/db.js\n");

/***/ }),

/***/ "(api)/./pages/api/get-posts.js":
/*!********************************!*\
  !*** ./pages/api/get-posts.js ***!
  \********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var _lib_db__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../lib/db */ \"(api)/./lib/db.js\");\n\n// import { parseISO, format, getDate } from 'date-fns'\n// import ja from 'date-fns/locale/ja'\n// import { json } from 'express';\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (async (req, res)=>{\n    try {\n        let results = await _lib_db__WEBPACK_IMPORTED_MODULE_0__[\"default\"].query(\"SELECT * FROM posts\");\n        // Run clean up function\n        await _lib_db__WEBPACK_IMPORTED_MODULE_0__[\"default\"].end();\n        res.end(JSON.stringify(results));\n    // const date = results[4]['created'];\n    // res.json(date.toLocaleString())\n    // const data = results.map(x => x.created);\n    // res.json(data);\n    } catch (error) {\n        console.log(error);\n    }\n});\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiKGFwaSkvLi9wYWdlcy9hcGkvZ2V0LXBvc3RzLmpzLmpzIiwibWFwcGluZ3MiOiI7Ozs7O0FBQTZCO0FBQzdCLHVEQUF1RDtBQUN2RCxzQ0FBc0M7QUFDdEMsa0NBQWtDO0FBRWxDLGlFQUFlLE9BQU9DLEdBQUcsRUFBRUMsR0FBRyxHQUFLO0lBQy9CLElBQUk7UUFDQSxJQUFJQyxPQUFPLEdBQUcsTUFBTUgscURBQVEsQ0FBQyxxQkFBcUIsQ0FBQztRQUVuRCx3QkFBd0I7UUFDeEIsTUFBTUEsbURBQU0sRUFBRTtRQUVkRSxHQUFHLENBQUNHLEdBQUcsQ0FBQ0MsSUFBSSxDQUFDQyxTQUFTLENBQUNKLE9BQU8sQ0FBQyxDQUFDO0lBRWhDLHNDQUFzQztJQUN0QyxrQ0FBa0M7SUFFbEMsNENBQTRDO0lBQzVDLGtCQUFrQjtLQUVyQixDQUFDLE9BQVFLLEtBQUssRUFBRztRQUNkQyxPQUFPLENBQUNDLEdBQUcsQ0FBRUYsS0FBSyxDQUFFLENBQUM7S0FDeEI7Q0FDSixFQUFDIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vLy4vcGFnZXMvYXBpL2dldC1wb3N0cy5qcz82ZGRlIl0sInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBkYiBmcm9tICcuLi8uLi9saWIvZGInXG4vLyBpbXBvcnQgeyBwYXJzZUlTTywgZm9ybWF0LCBnZXREYXRlIH0gZnJvbSAnZGF0ZS1mbnMnXG4vLyBpbXBvcnQgamEgZnJvbSAnZGF0ZS1mbnMvbG9jYWxlL2phJ1xuLy8gaW1wb3J0IHsganNvbiB9IGZyb20gJ2V4cHJlc3MnO1xuXG5leHBvcnQgZGVmYXVsdCBhc3luYyAocmVxLCByZXMpID0+IHtcbiAgICB0cnkge1xuICAgICAgICBsZXQgcmVzdWx0cyA9IGF3YWl0IGRiLnF1ZXJ5KCdTRUxFQ1QgKiBGUk9NIHBvc3RzJylcbiBcbiAgICAgICAgLy8gUnVuIGNsZWFuIHVwIGZ1bmN0aW9uXG4gICAgICAgIGF3YWl0IGRiLmVuZCgpXG4gICAgICAgIFxuICAgICAgICByZXMuZW5kKEpTT04uc3RyaW5naWZ5KHJlc3VsdHMpKVxuXG4gICAgICAgIC8vIGNvbnN0IGRhdGUgPSByZXN1bHRzWzRdWydjcmVhdGVkJ107XG4gICAgICAgIC8vIHJlcy5qc29uKGRhdGUudG9Mb2NhbGVTdHJpbmcoKSlcblxuICAgICAgICAvLyBjb25zdCBkYXRhID0gcmVzdWx0cy5tYXAoeCA9PiB4LmNyZWF0ZWQpO1xuICAgICAgICAvLyByZXMuanNvbihkYXRhKTtcblxuICAgIH0gY2F0Y2ggKCBlcnJvciApIHtcbiAgICAgICAgY29uc29sZS5sb2coIGVycm9yICk7XG4gICAgfVxufTsiXSwibmFtZXMiOlsiZGIiLCJyZXEiLCJyZXMiLCJyZXN1bHRzIiwicXVlcnkiLCJlbmQiLCJKU09OIiwic3RyaW5naWZ5IiwiZXJyb3IiLCJjb25zb2xlIiwibG9nIl0sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///(api)/./pages/api/get-posts.js\n");

/***/ })

};
;

// load runtime
var __webpack_require__ = require("../../webpack-api-runtime.js");
__webpack_require__.C(exports);
var __webpack_exec__ = (moduleId) => (__webpack_require__(__webpack_require__.s = moduleId))
var __webpack_exports__ = (__webpack_exec__("(api)/./pages/api/get-posts.js"));
module.exports = __webpack_exports__;

})();