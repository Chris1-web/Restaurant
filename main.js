/*
 * ATTENTION: The "eval" devtool has been used (maybe by default in mode: "development").
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
/******/ (() => { // webpackBootstrap
/******/ 	"use strict";
/******/ 	var __webpack_modules__ = ({

/***/ "./node_modules/css-loader/dist/cjs.js!./src/styles/style.css":
/*!********************************************************************!*\
  !*** ./node_modules/css-loader/dist/cjs.js!./src/styles/style.css ***!
  \********************************************************************/
/***/ ((module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var _node_modules_css_loader_dist_runtime_noSourceMaps_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../node_modules/css-loader/dist/runtime/noSourceMaps.js */ \"./node_modules/css-loader/dist/runtime/noSourceMaps.js\");\n/* harmony import */ var _node_modules_css_loader_dist_runtime_noSourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_noSourceMaps_js__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../node_modules/css-loader/dist/runtime/api.js */ \"./node_modules/css-loader/dist/runtime/api.js\");\n/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var _node_modules_css_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../node_modules/css-loader/dist/runtime/getUrl.js */ \"./node_modules/css-loader/dist/runtime/getUrl.js\");\n/* harmony import */ var _node_modules_css_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_2__);\n// Imports\n\n\n\nvar ___CSS_LOADER_URL_IMPORT_0___ = new URL(/* asset import */ __webpack_require__(/*! ../images/steak.jpg */ \"./src/images/steak.jpg\"), __webpack_require__.b);\nvar ___CSS_LOADER_EXPORT___ = _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default()((_node_modules_css_loader_dist_runtime_noSourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default()));\n___CSS_LOADER_EXPORT___.push([module.id, \"@import url(https://fonts.googleapis.com/css2?family=Rubik+Glitch&display=swap);\"]);\n___CSS_LOADER_EXPORT___.push([module.id, \"@import url(https://fonts.googleapis.com/css2?family=Rubik+Microbe&display=swap);\"]);\nvar ___CSS_LOADER_URL_REPLACEMENT_0___ = _node_modules_css_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_2___default()(___CSS_LOADER_URL_IMPORT_0___);\n// Module\n___CSS_LOADER_EXPORT___.push([module.id, \"* {\\n  margin: 0;\\n  padding: 0;\\n  box-sizing: border-box;\\n}\\n\\n.container {\\n  max-width: 130rem;\\n  margin: 0 auto;\\n  height: 100vh;\\n  font-family: \\\"Rubik Microbe\\\", cursive;\\n}\\n\\nhtml {\\n  font-size: 62.5%;\\n}\\n\\nheader {\\n  display: flex;\\n  justify-content: space-between;\\n  font-size: 2.5rem;\\n  height: 10vh;\\n  padding: 1rem 2rem;\\n  align-items: center;\\n  cursor: pointer;\\n  font-weight: bold;\\n}\\n\\n.logo {\\n  font-style: italic;\\n}\\n\\nul {\\n  list-style-type: none;\\n}\\n\\n.navigation {\\n  display: flex;\\n  gap: 2rem;\\n}\\n\\n.hero-image {\\n  max-width: 75rem;\\n  height: auto;\\n}\\n\\n.cta {\\n  padding: 1rem;\\n}\\n\\n.btn {\\n  padding: 1.2rem 3rem;\\n  cursor: pointer;\\n  border: 0.3rem solid rgba(230, 125, 34, 0.939);\\n  border-radius: 2rem;\\n  max-width: 70%;\\n  margin: 0 auto;\\n  color: black;\\n  font-size: 1.8rem;\\n}\\n\\nh1 {\\n  font-size: 3rem;\\n}\\n\\np {\\n  font-size: 2rem;\\n}\\n\\n.hero-img-container {\\n  background-image: linear-gradient(\\n      to right bottom,\\n      rgba(165, 84, 13, 0.495),\\n      rgba(230, 125, 34, 0.524)\\n    ),\\n    url(\" + ___CSS_LOADER_URL_REPLACEMENT_0___ + \");\\n  height: 90vh;\\n  background-position: center;\\n  background-size: cover;\\n  width: 100%;\\n  position: relative;\\n}\\n\\n.information {\\n  position: absolute;\\n  top: 40%;\\n  transform: translateX(50%);\\n  right: 50%;\\n  text-align: center;\\n  display: flex;\\n  flex-direction: column;\\n  gap: 1rem;\\n  font-family: \\\"Rubik Microbe\\\", cursive;\\n}\\n\\n.information h1 {\\n  font-size: 4.5rem;\\n  text-transform: uppercase;\\n}\\n\\n.menu {\\n  display: grid;\\n  grid-template-columns: 2fr 1fr;\\n  gap: 4rem;\\n  margin-bottom: 2.5rem;\\n  border: 0.5rem solid #e67d22ef;\\n  padding: 1rem;\\n  box-shadow: 10px 5px 5px #e67d22ef;\\n}\\n\\n.menu-container {\\n  display: grid;\\n  grid-template-columns: repeat(auto-fit, minmax(25rem, 1fr));\\n  gap: 3rem;\\n  width: 70%;\\n  margin: 2rem auto;\\n}\\n\\n.menu img {\\n  max-width: 100%;\\n}\\n\\n.writing {\\n  display: flex;\\n  flex-direction: column;\\n  align-items: flex-end;\\n  text-align: right;\\n  gap: 1rem;\\n}\\n\\n.writing button {\\n  align-self: flex-end;\\n  padding: 0.6rem 2rem;\\n  cursor: pointer;\\n  border: 0.3rem solid #e67d22ef;\\n  border-radius: 1rem;\\n  color: black;\\n  font-size: 1.8rem;\\n  background-color: transparent;\\n  font-weight: bolder;\\n}\\n\\n.menu h2,\\n.menu .price {\\n  font-size: 2rem;\\n}\\n\\n.menu p {\\n  font-size: 1.2rem;\\n}\\n\\n.price {\\n  font-size: 10rem;\\n  font-weight: bold;\\n}\\n\\nheader .active {\\n  text-decoration: underline;\\n  background-color: #e67d2286;\\n}\\n\\n.contact-container {\\n  display: grid;\\n  grid-template-columns: repeat(auto-fit, minmax(25rem, 1fr));\\n  border: 1rem solid #e67d2286;\\n  padding: 2rem;\\n  max-width: 100rem;\\n  margin: 5rem auto;\\n}\\n\\n.left-contact {\\n  display: flex;\\n  flex-direction: column;\\n  gap: 4rem;\\n  justify-items: center;\\n}\\n\\n.left-contact img,\\nfooter img {\\n  width: 3rem;\\n}\\n.contact-info li {\\n  display: flex;\\n  align-items: center;\\n  gap: 1rem;\\n  font-size: 1.2rem;\\n}\\n\\ninput,\\ntextarea {\\n  padding: 1rem 2rem 1rem 1rem;\\n  margin: 1rem 1rem 1rem 0;\\n  border: 0.1rem solid grey;\\n  border-radius: 1rem;\\n  outline: none;\\n}\\n\\nlabel {\\n  text-transform: uppercase;\\n  font-weight: bold;\\n}\\n\\ninput:focus {\\n  box-shadow: 0 0 1.5rem 0.4rem rgba(12, 11, 11, 0.06);\\n}\\n\\n.form {\\n  display: flex;\\n  flex-direction: column;\\n  width: 100%;\\n}\\n\\n.form button {\\n  padding: 1rem 5rem;\\n  width: 100%;\\n  background-color: #e67d2286;\\n  border-radius: 1rem;\\n  cursor: pointer;\\n  color: black;\\n  font-size: 1.5rem;\\n  border: none;\\n}\\n\\n.form button:hover {\\n  border: 0.2rem solid #e67d2286;\\n  color: black;\\n  background-color: white;\\n}\\n\\n.hide {\\n  display: none;\\n}\\n\\nfooter {\\n  position: absolute;\\n  top: 95%;\\n  left: 50%;\\n  transform: translateX(-50%);\\n}\\n\\nfooter p {\\n  font-size: 2rem;\\n  display: flex;\\n  justify-content: center;\\n  align-items: center;\\n  gap: 1rem;\\n}\\n\", \"\"]);\n// Exports\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (___CSS_LOADER_EXPORT___);\n\n\n//# sourceURL=webpack://restaurant/./src/styles/style.css?./node_modules/css-loader/dist/cjs.js");

/***/ }),

/***/ "./node_modules/css-loader/dist/runtime/api.js":
/*!*****************************************************!*\
  !*** ./node_modules/css-loader/dist/runtime/api.js ***!
  \*****************************************************/
/***/ ((module) => {

eval("\n\n/*\n  MIT License http://www.opensource.org/licenses/mit-license.php\n  Author Tobias Koppers @sokra\n*/\nmodule.exports = function (cssWithMappingToString) {\n  var list = []; // return the list of modules as css string\n\n  list.toString = function toString() {\n    return this.map(function (item) {\n      var content = \"\";\n      var needLayer = typeof item[5] !== \"undefined\";\n\n      if (item[4]) {\n        content += \"@supports (\".concat(item[4], \") {\");\n      }\n\n      if (item[2]) {\n        content += \"@media \".concat(item[2], \" {\");\n      }\n\n      if (needLayer) {\n        content += \"@layer\".concat(item[5].length > 0 ? \" \".concat(item[5]) : \"\", \" {\");\n      }\n\n      content += cssWithMappingToString(item);\n\n      if (needLayer) {\n        content += \"}\";\n      }\n\n      if (item[2]) {\n        content += \"}\";\n      }\n\n      if (item[4]) {\n        content += \"}\";\n      }\n\n      return content;\n    }).join(\"\");\n  }; // import a list of modules into the list\n\n\n  list.i = function i(modules, media, dedupe, supports, layer) {\n    if (typeof modules === \"string\") {\n      modules = [[null, modules, undefined]];\n    }\n\n    var alreadyImportedModules = {};\n\n    if (dedupe) {\n      for (var k = 0; k < this.length; k++) {\n        var id = this[k][0];\n\n        if (id != null) {\n          alreadyImportedModules[id] = true;\n        }\n      }\n    }\n\n    for (var _k = 0; _k < modules.length; _k++) {\n      var item = [].concat(modules[_k]);\n\n      if (dedupe && alreadyImportedModules[item[0]]) {\n        continue;\n      }\n\n      if (typeof layer !== \"undefined\") {\n        if (typeof item[5] === \"undefined\") {\n          item[5] = layer;\n        } else {\n          item[1] = \"@layer\".concat(item[5].length > 0 ? \" \".concat(item[5]) : \"\", \" {\").concat(item[1], \"}\");\n          item[5] = layer;\n        }\n      }\n\n      if (media) {\n        if (!item[2]) {\n          item[2] = media;\n        } else {\n          item[1] = \"@media \".concat(item[2], \" {\").concat(item[1], \"}\");\n          item[2] = media;\n        }\n      }\n\n      if (supports) {\n        if (!item[4]) {\n          item[4] = \"\".concat(supports);\n        } else {\n          item[1] = \"@supports (\".concat(item[4], \") {\").concat(item[1], \"}\");\n          item[4] = supports;\n        }\n      }\n\n      list.push(item);\n    }\n  };\n\n  return list;\n};\n\n//# sourceURL=webpack://restaurant/./node_modules/css-loader/dist/runtime/api.js?");

/***/ }),

/***/ "./node_modules/css-loader/dist/runtime/getUrl.js":
/*!********************************************************!*\
  !*** ./node_modules/css-loader/dist/runtime/getUrl.js ***!
  \********************************************************/
/***/ ((module) => {

eval("\n\nmodule.exports = function (url, options) {\n  if (!options) {\n    options = {};\n  }\n\n  if (!url) {\n    return url;\n  }\n\n  url = String(url.__esModule ? url.default : url); // If url is already wrapped in quotes, remove them\n\n  if (/^['\"].*['\"]$/.test(url)) {\n    url = url.slice(1, -1);\n  }\n\n  if (options.hash) {\n    url += options.hash;\n  } // Should url be wrapped?\n  // See https://drafts.csswg.org/css-values-3/#urls\n\n\n  if (/[\"'() \\t\\n]|(%20)/.test(url) || options.needQuotes) {\n    return \"\\\"\".concat(url.replace(/\"/g, '\\\\\"').replace(/\\n/g, \"\\\\n\"), \"\\\"\");\n  }\n\n  return url;\n};\n\n//# sourceURL=webpack://restaurant/./node_modules/css-loader/dist/runtime/getUrl.js?");

/***/ }),

/***/ "./node_modules/css-loader/dist/runtime/noSourceMaps.js":
/*!**************************************************************!*\
  !*** ./node_modules/css-loader/dist/runtime/noSourceMaps.js ***!
  \**************************************************************/
/***/ ((module) => {

eval("\n\nmodule.exports = function (i) {\n  return i[1];\n};\n\n//# sourceURL=webpack://restaurant/./node_modules/css-loader/dist/runtime/noSourceMaps.js?");

/***/ }),

/***/ "./src/styles/style.css":
/*!******************************!*\
  !*** ./src/styles/style.css ***!
  \******************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! !../../node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js */ \"./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js\");\n/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! !../../node_modules/style-loader/dist/runtime/styleDomAPI.js */ \"./node_modules/style-loader/dist/runtime/styleDomAPI.js\");\n/* harmony import */ var _node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! !../../node_modules/style-loader/dist/runtime/insertBySelector.js */ \"./node_modules/style-loader/dist/runtime/insertBySelector.js\");\n/* harmony import */ var _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2__);\n/* harmony import */ var _node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! !../../node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js */ \"./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js\");\n/* harmony import */ var _node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3__);\n/* harmony import */ var _node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! !../../node_modules/style-loader/dist/runtime/insertStyleElement.js */ \"./node_modules/style-loader/dist/runtime/insertStyleElement.js\");\n/* harmony import */ var _node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4__);\n/* harmony import */ var _node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! !../../node_modules/style-loader/dist/runtime/styleTagTransform.js */ \"./node_modules/style-loader/dist/runtime/styleTagTransform.js\");\n/* harmony import */ var _node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5__);\n/* harmony import */ var _node_modules_css_loader_dist_cjs_js_style_css__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! !!../../node_modules/css-loader/dist/cjs.js!./style.css */ \"./node_modules/css-loader/dist/cjs.js!./src/styles/style.css\");\n\n      \n      \n      \n      \n      \n      \n      \n      \n      \n\nvar options = {};\n\noptions.styleTagTransform = (_node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5___default());\noptions.setAttributes = (_node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3___default());\n\n      options.insert = _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2___default().bind(null, \"head\");\n    \noptions.domAPI = (_node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1___default());\noptions.insertStyleElement = (_node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4___default());\n\nvar update = _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default()(_node_modules_css_loader_dist_cjs_js_style_css__WEBPACK_IMPORTED_MODULE_6__[\"default\"], options);\n\n\n\n\n       /* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (_node_modules_css_loader_dist_cjs_js_style_css__WEBPACK_IMPORTED_MODULE_6__[\"default\"] && _node_modules_css_loader_dist_cjs_js_style_css__WEBPACK_IMPORTED_MODULE_6__[\"default\"].locals ? _node_modules_css_loader_dist_cjs_js_style_css__WEBPACK_IMPORTED_MODULE_6__[\"default\"].locals : undefined);\n\n\n//# sourceURL=webpack://restaurant/./src/styles/style.css?");

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js":
/*!****************************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js ***!
  \****************************************************************************/
/***/ ((module) => {

eval("\n\nvar stylesInDOM = [];\n\nfunction getIndexByIdentifier(identifier) {\n  var result = -1;\n\n  for (var i = 0; i < stylesInDOM.length; i++) {\n    if (stylesInDOM[i].identifier === identifier) {\n      result = i;\n      break;\n    }\n  }\n\n  return result;\n}\n\nfunction modulesToDom(list, options) {\n  var idCountMap = {};\n  var identifiers = [];\n\n  for (var i = 0; i < list.length; i++) {\n    var item = list[i];\n    var id = options.base ? item[0] + options.base : item[0];\n    var count = idCountMap[id] || 0;\n    var identifier = \"\".concat(id, \" \").concat(count);\n    idCountMap[id] = count + 1;\n    var indexByIdentifier = getIndexByIdentifier(identifier);\n    var obj = {\n      css: item[1],\n      media: item[2],\n      sourceMap: item[3],\n      supports: item[4],\n      layer: item[5]\n    };\n\n    if (indexByIdentifier !== -1) {\n      stylesInDOM[indexByIdentifier].references++;\n      stylesInDOM[indexByIdentifier].updater(obj);\n    } else {\n      var updater = addElementStyle(obj, options);\n      options.byIndex = i;\n      stylesInDOM.splice(i, 0, {\n        identifier: identifier,\n        updater: updater,\n        references: 1\n      });\n    }\n\n    identifiers.push(identifier);\n  }\n\n  return identifiers;\n}\n\nfunction addElementStyle(obj, options) {\n  var api = options.domAPI(options);\n  api.update(obj);\n\n  var updater = function updater(newObj) {\n    if (newObj) {\n      if (newObj.css === obj.css && newObj.media === obj.media && newObj.sourceMap === obj.sourceMap && newObj.supports === obj.supports && newObj.layer === obj.layer) {\n        return;\n      }\n\n      api.update(obj = newObj);\n    } else {\n      api.remove();\n    }\n  };\n\n  return updater;\n}\n\nmodule.exports = function (list, options) {\n  options = options || {};\n  list = list || [];\n  var lastIdentifiers = modulesToDom(list, options);\n  return function update(newList) {\n    newList = newList || [];\n\n    for (var i = 0; i < lastIdentifiers.length; i++) {\n      var identifier = lastIdentifiers[i];\n      var index = getIndexByIdentifier(identifier);\n      stylesInDOM[index].references--;\n    }\n\n    var newLastIdentifiers = modulesToDom(newList, options);\n\n    for (var _i = 0; _i < lastIdentifiers.length; _i++) {\n      var _identifier = lastIdentifiers[_i];\n\n      var _index = getIndexByIdentifier(_identifier);\n\n      if (stylesInDOM[_index].references === 0) {\n        stylesInDOM[_index].updater();\n\n        stylesInDOM.splice(_index, 1);\n      }\n    }\n\n    lastIdentifiers = newLastIdentifiers;\n  };\n};\n\n//# sourceURL=webpack://restaurant/./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js?");

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/insertBySelector.js":
/*!********************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/insertBySelector.js ***!
  \********************************************************************/
/***/ ((module) => {

eval("\n\nvar memo = {};\n/* istanbul ignore next  */\n\nfunction getTarget(target) {\n  if (typeof memo[target] === \"undefined\") {\n    var styleTarget = document.querySelector(target); // Special case to return head of iframe instead of iframe itself\n\n    if (window.HTMLIFrameElement && styleTarget instanceof window.HTMLIFrameElement) {\n      try {\n        // This will throw an exception if access to iframe is blocked\n        // due to cross-origin restrictions\n        styleTarget = styleTarget.contentDocument.head;\n      } catch (e) {\n        // istanbul ignore next\n        styleTarget = null;\n      }\n    }\n\n    memo[target] = styleTarget;\n  }\n\n  return memo[target];\n}\n/* istanbul ignore next  */\n\n\nfunction insertBySelector(insert, style) {\n  var target = getTarget(insert);\n\n  if (!target) {\n    throw new Error(\"Couldn't find a style target. This probably means that the value for the 'insert' parameter is invalid.\");\n  }\n\n  target.appendChild(style);\n}\n\nmodule.exports = insertBySelector;\n\n//# sourceURL=webpack://restaurant/./node_modules/style-loader/dist/runtime/insertBySelector.js?");

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/insertStyleElement.js":
/*!**********************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/insertStyleElement.js ***!
  \**********************************************************************/
/***/ ((module) => {

eval("\n\n/* istanbul ignore next  */\nfunction insertStyleElement(options) {\n  var element = document.createElement(\"style\");\n  options.setAttributes(element, options.attributes);\n  options.insert(element, options.options);\n  return element;\n}\n\nmodule.exports = insertStyleElement;\n\n//# sourceURL=webpack://restaurant/./node_modules/style-loader/dist/runtime/insertStyleElement.js?");

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js":
/*!**********************************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js ***!
  \**********************************************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

eval("\n\n/* istanbul ignore next  */\nfunction setAttributesWithoutAttributes(styleElement) {\n  var nonce =  true ? __webpack_require__.nc : 0;\n\n  if (nonce) {\n    styleElement.setAttribute(\"nonce\", nonce);\n  }\n}\n\nmodule.exports = setAttributesWithoutAttributes;\n\n//# sourceURL=webpack://restaurant/./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js?");

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/styleDomAPI.js":
/*!***************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/styleDomAPI.js ***!
  \***************************************************************/
/***/ ((module) => {

eval("\n\n/* istanbul ignore next  */\nfunction apply(styleElement, options, obj) {\n  var css = \"\";\n\n  if (obj.supports) {\n    css += \"@supports (\".concat(obj.supports, \") {\");\n  }\n\n  if (obj.media) {\n    css += \"@media \".concat(obj.media, \" {\");\n  }\n\n  var needLayer = typeof obj.layer !== \"undefined\";\n\n  if (needLayer) {\n    css += \"@layer\".concat(obj.layer.length > 0 ? \" \".concat(obj.layer) : \"\", \" {\");\n  }\n\n  css += obj.css;\n\n  if (needLayer) {\n    css += \"}\";\n  }\n\n  if (obj.media) {\n    css += \"}\";\n  }\n\n  if (obj.supports) {\n    css += \"}\";\n  }\n\n  var sourceMap = obj.sourceMap;\n\n  if (sourceMap && typeof btoa !== \"undefined\") {\n    css += \"\\n/*# sourceMappingURL=data:application/json;base64,\".concat(btoa(unescape(encodeURIComponent(JSON.stringify(sourceMap)))), \" */\");\n  } // For old IE\n\n  /* istanbul ignore if  */\n\n\n  options.styleTagTransform(css, styleElement, options.options);\n}\n\nfunction removeStyleElement(styleElement) {\n  // istanbul ignore if\n  if (styleElement.parentNode === null) {\n    return false;\n  }\n\n  styleElement.parentNode.removeChild(styleElement);\n}\n/* istanbul ignore next  */\n\n\nfunction domAPI(options) {\n  var styleElement = options.insertStyleElement(options);\n  return {\n    update: function update(obj) {\n      apply(styleElement, options, obj);\n    },\n    remove: function remove() {\n      removeStyleElement(styleElement);\n    }\n  };\n}\n\nmodule.exports = domAPI;\n\n//# sourceURL=webpack://restaurant/./node_modules/style-loader/dist/runtime/styleDomAPI.js?");

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/styleTagTransform.js":
/*!*********************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/styleTagTransform.js ***!
  \*********************************************************************/
/***/ ((module) => {

eval("\n\n/* istanbul ignore next  */\nfunction styleTagTransform(css, styleElement) {\n  if (styleElement.styleSheet) {\n    styleElement.styleSheet.cssText = css;\n  } else {\n    while (styleElement.firstChild) {\n      styleElement.removeChild(styleElement.firstChild);\n    }\n\n    styleElement.appendChild(document.createTextNode(css));\n  }\n}\n\nmodule.exports = styleTagTransform;\n\n//# sourceURL=webpack://restaurant/./node_modules/style-loader/dist/runtime/styleTagTransform.js?");

/***/ }),

/***/ "./src/contactView.js":
/*!****************************!*\
  !*** ./src/contactView.js ***!
  \****************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\nconst contactView = function () {\n  const container = document.querySelector(\"#content\");\n  const html = `<div class=\"contact-container hide\">\n    <div class=\"left-contact\">\n      <div class=\"text\">\n        <h1>Contact Information</h1>\n        <p>\n          Fill up the form and our Team would get back to you <br />\n          in 24 hours\n        </p>\n      </div>\n      <ul class=\"contact-info\">\n        <li>\n          <img src=\"../src/icons/phone-call.png\" alt=\"phone icon\" />\n          <span>+47 333 78 901</span>\n        </li>\n        <li>\n          <img src=\"../src/icons/mail.png\" alt=\"mail icon\" />\n          <span> hello@helloworld.com</span>\n        </li>\n        <li>\n          <img src=\"../src/icons/address.png\" alt=\"address icon\" />\n          <span> 102 street 2172 DON</span>\n        </li>\n      </ul>\n      <div class=\"social-links\">\n        <img src=\"../src/icons/facebook.png\" alt=\"facebook icon\" />\n        <img src=\"../src/icons/twitter.png\" alt=\"twitter icon\" />\n        <img src=\"../src/icons/instagram.png\" alt=\"instagram icon\" />\n      </div>\n    </div>\n    <div class=\"right-contact\">\n      <div class=\"contact-form\">\n        <form action=\"#\" method=\"#\">\n          <div class=\"form-group\">\n            <div class=\"form\">\n              <label for=\"first_name\">First Name</label>\n              <input\n                type=\"text\"\n                name=\"first_name\"\n                id=\"first_name\"\n                required\n              />\n            </div>\n            <div class=\"form\">\n              <label for=\"last_name\">Last Name</label>\n              <input type=\"text\" name=\"last_name\" id=\"last_name\" required />\n            </div>\n          </div>\n          <div class=\"form-group\">\n            <div class=\"form\">\n              <label for=\"email\">Email</label>\n              <input type=\"email\" name=\"email\" id=\"email\" required />\n            </div>\n            <div class=\"form\">\n              <label for=\"phone_number\">Phone Number</label>\n              <input type=\"text\" name=\"phone_number\" id=\"phone_number\" />\n            </div>\n          </div>\n          <div class=\"form-group\">\n            <div class=\"form\">\n              <label for=\"message\">Message</label>\n              <textarea name=\"message\">Enter your message</textarea>\n            </div>\n            <div class=\"form\">\n              <button>SEND MESSAGE</button>\n            </div>\n          </div>\n        </form>\n      </div>\n    </div>\n    <footer>\n        <p>\n        <span>Copyright &copy; 2022 Christianah</span>\n          <a href=\"https://github.com/Chris1-web/Restaurant\" target=\"_blank\"><img src=\"../src/icons/github.png\" alt=\"git hub icon\"/></a>\n        </p>\n      </footer>\n  </div>`;\n  container.insertAdjacentHTML(\"beforeend\", html);\n};\n\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (contactView);\n\n\n//# sourceURL=webpack://restaurant/./src/contactView.js?");

/***/ }),

/***/ "./src/heroView.js":
/*!*************************!*\
  !*** ./src/heroView.js ***!
  \*************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\nconst heroView = function () {\n  const container = document.querySelector(\"#content\");\n  const html = `\n    <div class=\"hero-view\">\n        <div class=\"hero-section\">\n          <div class=\"hero-img-container\"></div>\n        </div>\n        <article class=\"information\">\n          <h1>Home of the Best Stack</h1>\n          <p>\n            Our Restaurant steak is delicious. It is a standard meal grilled to\n            your personal taste. Your satisfaction is our priority\n          </p>\n        </article>\n        <footer>\n        <p>\n        <span>Copyright &copy; 2022 Christianah</span>\n          <a href=\"https://github.com/Chris1-web/Restaurant\" target=\"_blank\"><img src=\"../src/icons/github.png\" alt=\"git hub icon\"/></a>\n        </p>\n      </footer>\n    </div>\n    `;\n  container.insertAdjacentHTML(\"beforeend\", html);\n};\n\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (heroView);\n\n\n//# sourceURL=webpack://restaurant/./src/heroView.js?");

/***/ }),

/***/ "./src/index.js":
/*!**********************!*\
  !*** ./src/index.js ***!
  \**********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _src_styles_style_css__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../src/styles/style.css */ \"./src/styles/style.css\");\n/* harmony import */ var _navView__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./navView */ \"./src/navView.js\");\n/* harmony import */ var _heroView__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./heroView */ \"./src/heroView.js\");\n/* harmony import */ var _menuView__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./menuView */ \"./src/menuView.js\");\n/* harmony import */ var _tabView__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./tabView */ \"./src/tabView.js\");\n/* harmony import */ var _contactView__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./contactView */ \"./src/contactView.js\");\n\n\n\n\n\n\n\n(0,_navView__WEBPACK_IMPORTED_MODULE_1__[\"default\"])();\n(0,_heroView__WEBPACK_IMPORTED_MODULE_2__[\"default\"])();\n(0,_menuView__WEBPACK_IMPORTED_MODULE_3__[\"default\"])();\n(0,_contactView__WEBPACK_IMPORTED_MODULE_5__[\"default\"])();\n(0,_tabView__WEBPACK_IMPORTED_MODULE_4__[\"default\"])();\n\n\n//# sourceURL=webpack://restaurant/./src/index.js?");

/***/ }),

/***/ "./src/menuView.js":
/*!*************************!*\
  !*** ./src/menuView.js ***!
  \*************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\nconst menuView = function () {\n  const container = document.querySelector(\"#content\");\n  const html = `\n    <div class=\"menu-container hide\">\n            <div class=\"left-side-menu\">\n              <div class=\"menu\">\n                <div class=\"writing\">\n                  <h2>Steak Soup</h2>\n                  <p>\n                    Lorem ipsum dolor sit, amet consectetur adipisicing elit. Nemo\n                    impedit quam adipisci porro. Velit quos minus iusto fugit\n                    blanditiis.\n                  </p>\n                  <p class=\"price\">$50</p>\n                  <button>Order</button>\n                </div>\n                <div class=\"menu1-image\">\n                  <img src=\"../src/icons/soup.png\" alt=\"steak soup icon\" />\n                </div>\n              </div>\n              <div class=\"menu\">\n                <div class=\"writing\">\n                  <h2>Steak Pizza</h2>\n                  <p>\n                    Lorem ipsum dolor sit, amet consectetur adipisicing elit. Nemo\n                    impedit quam adipisci porro. Velit quos minus iusto fugit\n                    blanditiis.\n                  </p>\n                  <p class=\"price\">$60</p>\n                  <button>Order</button>\n                </div>\n                <div class=\"menu2-image\">\n                  <img src=\"../src/icons/pizza.png\" alt=\"\" />\n                </div>\n              </div>\n              <div class=\"menu\">\n                <div class=\"writing\">\n                  <h2>Steak Spaghetti</h2>\n                  <p>\n                    Lorem ipsum dolor sit, amet consectetur adipisicing elit. Nemo\n                    impedit quam adipisci porro. Velit quos minus iusto fugit\n                    blanditiis.\n                  </p>\n                  <p class=\"price\">$70</p>\n                  <button>Order</button>\n                </div>\n                <div class=\"menu3-image\">\n                  <img src=\"../src/icons/spaghetti.png\" alt=\"\" />\n                </div>\n              </div>\n            </div>\n            <div class=\"right-side-menu\">\n              <div class=\"menu\">\n                <div class=\"writing\">\n                  <h2>Steak Burger</h2>\n                  <p>\n                    Lorem ipsum dolor sit, amet consectetur adipisicing elit. Nemo\n                    impedit quam adipisci porro. Velit quos minus iusto fugit\n                    blanditiis.\n                  </p>\n                  <p class=\"price\">$90</p>\n                  <button>Order</button>\n                </div>\n                <div class=\"menu4-image\">\n                  <img src=\"../src/icons/burger.png\" alt=\"\" />\n                </div>\n              </div>\n              <div class=\"menu\">\n                <div class=\"writing\">\n                  <h2>Steak & Chicken</h2>\n                  <p>\n                    Lorem ipsum dolor sit, amet consectetur adipisicing elit. Nemo\n                    impedit quam adipisci porro. Velit quos minus iusto fugit\n                    blanditiis.\n                  </p>\n                  <p class=\"price\">$40</p>\n                  <button>Order</button>\n                </div>\n                <div class=\"menu5-image\">\n                  <img src=\"../src/icons/chicken-leg.png\" alt=\"\" />\n                </div>\n              </div>\n              <div class=\"menu\">\n                <div class=\"writing\">\n                  <h2>Steak & Coffee</h2>\n                  <p>\n                    Lorem ipsum dolor sit, amet consectetur adipisicing elit. Nemo\n                    impedit quam adipisci porro. Velit quos minus iusto fugit\n                    blanditiis.\n                  </p>\n                  <p class=\"price\">$70</p>\n                  <button>Order</button>\n                </div>\n                <div class=\"menu6-image\">\n                  <img src=\"../src/icons/coffee-cup.png\" alt=\"\" />\n                </div>\n              </div>\n            </div>\n          </div>\n    `;\n  // return html;\n  container.insertAdjacentHTML(\"beforeend\", html);\n};\n\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (menuView);\n\n\n//# sourceURL=webpack://restaurant/./src/menuView.js?");

/***/ }),

/***/ "./src/navView.js":
/*!************************!*\
  !*** ./src/navView.js ***!
  \************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\nconst nav = function () {\n  const content = document.querySelector(\"#content\");\n  const html = `\n      <header>\n        <div class=\"logo\">STEAK HOUSE</div>\n        <nav>\n          <ul class=\"navigation\">\n            <li class=\"home active\">Home</li>\n            <li class=\"menu-nav\">Menu</li>\n            <li class=\"contact\">Contact</li>\n          </ul>\n        </nav>\n      </header>\n  `;\n  content.insertAdjacentHTML(\"beforeend\", html);\n};\n\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (nav);\n\n\n//# sourceURL=webpack://restaurant/./src/navView.js?");

/***/ }),

/***/ "./src/tabView.js":
/*!************************!*\
  !*** ./src/tabView.js ***!
  \************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\nconst tabView = function () {\n  const homeContainer = document.querySelector(\".hero-view\");\n  const home = document.querySelector(\".home\");\n  const menu = document.querySelector(\".menu-nav\");\n  const contact = document.querySelector(\".contact\");\n  const menuContainer = document.querySelector(\".menu-container\");\n  const contactContainer = document.querySelector(\".contact-container\");\n\n  home.addEventListener(\"click\", function () {\n    homeContainer.classList.remove(\"hide\");\n    home.classList.add(\"active\");\n    menuContainer.classList.add(\"hide\");\n    menu.classList.remove(\"active\");\n    contactContainer.classList.add(\"hide\");\n    contact.classList.remove(\"active\");\n  });\n  menu.addEventListener(\"click\", function () {\n    homeContainer.classList.add(\"hide\");\n    home.classList.remove(\"active\");\n    menuContainer.classList.remove(\"hide\");\n    menu.classList.add(\"active\");\n    contactContainer.classList.add(\"hide\");\n    contact.classList.remove(\"active\");\n  });\n  contact.addEventListener(\"click\", function () {\n    homeContainer.classList.add(\"hide\");\n    home.classList.remove(\"active\");\n    menu.classList.remove(\"active\");\n    menuContainer.classList.add(\"hide\");\n    menuContainer.classList.add(\"hide\");\n    contact.classList.add(\"active\");\n    contactContainer.classList.remove(\"hide\");\n  });\n};\n\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (tabView);\n\n\n//# sourceURL=webpack://restaurant/./src/tabView.js?");

/***/ }),

/***/ "./src/images/steak.jpg":
/*!******************************!*\
  !*** ./src/images/steak.jpg ***!
  \******************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

eval("module.exports = __webpack_require__.p + \"18929779a37afb7a0b93.jpg\";\n\n//# sourceURL=webpack://restaurant/./src/images/steak.jpg?");

/***/ })

/******/ 	});
/************************************************************************/
/******/ 	// The module cache
/******/ 	var __webpack_module_cache__ = {};
/******/ 	
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/ 		// Check if module is in cache
/******/ 		var cachedModule = __webpack_module_cache__[moduleId];
/******/ 		if (cachedModule !== undefined) {
/******/ 			return cachedModule.exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = __webpack_module_cache__[moduleId] = {
/******/ 			id: moduleId,
/******/ 			// no module.loaded needed
/******/ 			exports: {}
/******/ 		};
/******/ 	
/******/ 		// Execute the module function
/******/ 		__webpack_modules__[moduleId](module, module.exports, __webpack_require__);
/******/ 	
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/ 	
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = __webpack_modules__;
/******/ 	
/************************************************************************/
/******/ 	/* webpack/runtime/compat get default export */
/******/ 	(() => {
/******/ 		// getDefaultExport function for compatibility with non-harmony modules
/******/ 		__webpack_require__.n = (module) => {
/******/ 			var getter = module && module.__esModule ?
/******/ 				() => (module['default']) :
/******/ 				() => (module);
/******/ 			__webpack_require__.d(getter, { a: getter });
/******/ 			return getter;
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/define property getters */
/******/ 	(() => {
/******/ 		// define getter functions for harmony exports
/******/ 		__webpack_require__.d = (exports, definition) => {
/******/ 			for(var key in definition) {
/******/ 				if(__webpack_require__.o(definition, key) && !__webpack_require__.o(exports, key)) {
/******/ 					Object.defineProperty(exports, key, { enumerable: true, get: definition[key] });
/******/ 				}
/******/ 			}
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/global */
/******/ 	(() => {
/******/ 		__webpack_require__.g = (function() {
/******/ 			if (typeof globalThis === 'object') return globalThis;
/******/ 			try {
/******/ 				return this || new Function('return this')();
/******/ 			} catch (e) {
/******/ 				if (typeof window === 'object') return window;
/******/ 			}
/******/ 		})();
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/hasOwnProperty shorthand */
/******/ 	(() => {
/******/ 		__webpack_require__.o = (obj, prop) => (Object.prototype.hasOwnProperty.call(obj, prop))
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/make namespace object */
/******/ 	(() => {
/******/ 		// define __esModule on exports
/******/ 		__webpack_require__.r = (exports) => {
/******/ 			if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 				Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 			}
/******/ 			Object.defineProperty(exports, '__esModule', { value: true });
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/publicPath */
/******/ 	(() => {
/******/ 		var scriptUrl;
/******/ 		if (__webpack_require__.g.importScripts) scriptUrl = __webpack_require__.g.location + "";
/******/ 		var document = __webpack_require__.g.document;
/******/ 		if (!scriptUrl && document) {
/******/ 			if (document.currentScript)
/******/ 				scriptUrl = document.currentScript.src
/******/ 			if (!scriptUrl) {
/******/ 				var scripts = document.getElementsByTagName("script");
/******/ 				if(scripts.length) scriptUrl = scripts[scripts.length - 1].src
/******/ 			}
/******/ 		}
/******/ 		// When supporting browsers where an automatic publicPath is not supported you must specify an output.publicPath manually via configuration
/******/ 		// or pass an empty string ("") and set the __webpack_public_path__ variable from your code to use your own logic.
/******/ 		if (!scriptUrl) throw new Error("Automatic publicPath is not supported in this browser");
/******/ 		scriptUrl = scriptUrl.replace(/#.*$/, "").replace(/\?.*$/, "").replace(/\/[^\/]+$/, "/");
/******/ 		__webpack_require__.p = scriptUrl;
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/jsonp chunk loading */
/******/ 	(() => {
/******/ 		__webpack_require__.b = document.baseURI || self.location.href;
/******/ 		
/******/ 		// object to store loaded and loading chunks
/******/ 		// undefined = chunk not loaded, null = chunk preloaded/prefetched
/******/ 		// [resolve, reject, Promise] = chunk loading, 0 = chunk loaded
/******/ 		var installedChunks = {
/******/ 			"main": 0
/******/ 		};
/******/ 		
/******/ 		// no chunk on demand loading
/******/ 		
/******/ 		// no prefetching
/******/ 		
/******/ 		// no preloaded
/******/ 		
/******/ 		// no HMR
/******/ 		
/******/ 		// no HMR manifest
/******/ 		
/******/ 		// no on chunks loaded
/******/ 		
/******/ 		// no jsonp function
/******/ 	})();
/******/ 	
/************************************************************************/
/******/ 	
/******/ 	// startup
/******/ 	// Load entry module and return exports
/******/ 	// This entry module can't be inlined because the eval devtool is used.
/******/ 	var __webpack_exports__ = __webpack_require__("./src/index.js");
/******/ 	
/******/ })()
;