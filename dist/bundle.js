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

/***/ "./node_modules/css-loader/dist/cjs.js??ruleSet[1].rules[0].use[1]!./src/style.css":
/*!*****************************************************************************************!*\
  !*** ./node_modules/css-loader/dist/cjs.js??ruleSet[1].rules[0].use[1]!./src/style.css ***!
  \*****************************************************************************************/
/***/ ((module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var _node_modules_css_loader_dist_runtime_noSourceMaps_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../node_modules/css-loader/dist/runtime/noSourceMaps.js */ \"./node_modules/css-loader/dist/runtime/noSourceMaps.js\");\n/* harmony import */ var _node_modules_css_loader_dist_runtime_noSourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_noSourceMaps_js__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../node_modules/css-loader/dist/runtime/api.js */ \"./node_modules/css-loader/dist/runtime/api.js\");\n/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__);\n// Imports\n\n\nvar ___CSS_LOADER_EXPORT___ = _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default()((_node_modules_css_loader_dist_runtime_noSourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default()));\n// Module\n___CSS_LOADER_EXPORT___.push([module.id, `* {\n    margin: 0px;\n    padding: 0px;\n    box-sizing: border-box;\n}\n\nhtml {\n    width: 100vw;\n    height: 100vh;\n    background-color: white;\n}\n\nbody {\n    color: white;\n    overflow-x: hidden;\n}\n\ncanvas {\n    position: fixed;\n    top: 0;\n    left: 0;\n}\n\nmain {\n    position: absolute;\n    width: 100vw;\n    height: 200vh;\n    z-index: 100;\n}\n\nsection {\n    min-height: 100vh;\n    display: flex;\n}`, \"\"]);\n// Exports\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (___CSS_LOADER_EXPORT___);\n\n\n//# sourceURL=webpack://three.js_text_3d_animation/./src/style.css?./node_modules/css-loader/dist/cjs.js??ruleSet%5B1%5D.rules%5B0%5D.use%5B1%5D");

/***/ }),

/***/ "./node_modules/css-loader/dist/runtime/api.js":
/*!*****************************************************!*\
  !*** ./node_modules/css-loader/dist/runtime/api.js ***!
  \*****************************************************/
/***/ ((module) => {

eval("\n\n/*\n  MIT License http://www.opensource.org/licenses/mit-license.php\n  Author Tobias Koppers @sokra\n*/\nmodule.exports = function (cssWithMappingToString) {\n  var list = [];\n\n  // return the list of modules as css string\n  list.toString = function toString() {\n    return this.map(function (item) {\n      var content = \"\";\n      var needLayer = typeof item[5] !== \"undefined\";\n      if (item[4]) {\n        content += \"@supports (\".concat(item[4], \") {\");\n      }\n      if (item[2]) {\n        content += \"@media \".concat(item[2], \" {\");\n      }\n      if (needLayer) {\n        content += \"@layer\".concat(item[5].length > 0 ? \" \".concat(item[5]) : \"\", \" {\");\n      }\n      content += cssWithMappingToString(item);\n      if (needLayer) {\n        content += \"}\";\n      }\n      if (item[2]) {\n        content += \"}\";\n      }\n      if (item[4]) {\n        content += \"}\";\n      }\n      return content;\n    }).join(\"\");\n  };\n\n  // import a list of modules into the list\n  list.i = function i(modules, media, dedupe, supports, layer) {\n    if (typeof modules === \"string\") {\n      modules = [[null, modules, undefined]];\n    }\n    var alreadyImportedModules = {};\n    if (dedupe) {\n      for (var k = 0; k < this.length; k++) {\n        var id = this[k][0];\n        if (id != null) {\n          alreadyImportedModules[id] = true;\n        }\n      }\n    }\n    for (var _k = 0; _k < modules.length; _k++) {\n      var item = [].concat(modules[_k]);\n      if (dedupe && alreadyImportedModules[item[0]]) {\n        continue;\n      }\n      if (typeof layer !== \"undefined\") {\n        if (typeof item[5] === \"undefined\") {\n          item[5] = layer;\n        } else {\n          item[1] = \"@layer\".concat(item[5].length > 0 ? \" \".concat(item[5]) : \"\", \" {\").concat(item[1], \"}\");\n          item[5] = layer;\n        }\n      }\n      if (media) {\n        if (!item[2]) {\n          item[2] = media;\n        } else {\n          item[1] = \"@media \".concat(item[2], \" {\").concat(item[1], \"}\");\n          item[2] = media;\n        }\n      }\n      if (supports) {\n        if (!item[4]) {\n          item[4] = \"\".concat(supports);\n        } else {\n          item[1] = \"@supports (\".concat(item[4], \") {\").concat(item[1], \"}\");\n          item[4] = supports;\n        }\n      }\n      list.push(item);\n    }\n  };\n  return list;\n};\n\n//# sourceURL=webpack://three.js_text_3d_animation/./node_modules/css-loader/dist/runtime/api.js?");

/***/ }),

/***/ "./node_modules/css-loader/dist/runtime/noSourceMaps.js":
/*!**************************************************************!*\
  !*** ./node_modules/css-loader/dist/runtime/noSourceMaps.js ***!
  \**************************************************************/
/***/ ((module) => {

eval("\n\nmodule.exports = function (i) {\n  return i[1];\n};\n\n//# sourceURL=webpack://three.js_text_3d_animation/./node_modules/css-loader/dist/runtime/noSourceMaps.js?");

/***/ }),

/***/ "./src/style.css":
/*!***********************!*\
  !*** ./src/style.css ***!
  \***********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js */ \"./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js\");\n/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/styleDomAPI.js */ \"./node_modules/style-loader/dist/runtime/styleDomAPI.js\");\n/* harmony import */ var _node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/insertBySelector.js */ \"./node_modules/style-loader/dist/runtime/insertBySelector.js\");\n/* harmony import */ var _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2__);\n/* harmony import */ var _node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js */ \"./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js\");\n/* harmony import */ var _node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3__);\n/* harmony import */ var _node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/insertStyleElement.js */ \"./node_modules/style-loader/dist/runtime/insertStyleElement.js\");\n/* harmony import */ var _node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4__);\n/* harmony import */ var _node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/styleTagTransform.js */ \"./node_modules/style-loader/dist/runtime/styleTagTransform.js\");\n/* harmony import */ var _node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5__);\n/* harmony import */ var _node_modules_css_loader_dist_cjs_js_ruleSet_1_rules_0_use_1_style_css__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! !!../node_modules/css-loader/dist/cjs.js??ruleSet[1].rules[0].use[1]!./style.css */ \"./node_modules/css-loader/dist/cjs.js??ruleSet[1].rules[0].use[1]!./src/style.css\");\n\n      \n      \n      \n      \n      \n      \n      \n      \n      \n\nvar options = {};\n\noptions.styleTagTransform = (_node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5___default());\noptions.setAttributes = (_node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3___default());\n\n      options.insert = _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2___default().bind(null, \"head\");\n    \noptions.domAPI = (_node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1___default());\noptions.insertStyleElement = (_node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4___default());\n\nvar update = _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default()(_node_modules_css_loader_dist_cjs_js_ruleSet_1_rules_0_use_1_style_css__WEBPACK_IMPORTED_MODULE_6__[\"default\"], options);\n\n\n\n\n       /* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (_node_modules_css_loader_dist_cjs_js_ruleSet_1_rules_0_use_1_style_css__WEBPACK_IMPORTED_MODULE_6__[\"default\"] && _node_modules_css_loader_dist_cjs_js_ruleSet_1_rules_0_use_1_style_css__WEBPACK_IMPORTED_MODULE_6__[\"default\"].locals ? _node_modules_css_loader_dist_cjs_js_ruleSet_1_rules_0_use_1_style_css__WEBPACK_IMPORTED_MODULE_6__[\"default\"].locals : undefined);\n\n\n//# sourceURL=webpack://three.js_text_3d_animation/./src/style.css?");

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js":
/*!****************************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js ***!
  \****************************************************************************/
/***/ ((module) => {

eval("\n\nvar stylesInDOM = [];\nfunction getIndexByIdentifier(identifier) {\n  var result = -1;\n  for (var i = 0; i < stylesInDOM.length; i++) {\n    if (stylesInDOM[i].identifier === identifier) {\n      result = i;\n      break;\n    }\n  }\n  return result;\n}\nfunction modulesToDom(list, options) {\n  var idCountMap = {};\n  var identifiers = [];\n  for (var i = 0; i < list.length; i++) {\n    var item = list[i];\n    var id = options.base ? item[0] + options.base : item[0];\n    var count = idCountMap[id] || 0;\n    var identifier = \"\".concat(id, \" \").concat(count);\n    idCountMap[id] = count + 1;\n    var indexByIdentifier = getIndexByIdentifier(identifier);\n    var obj = {\n      css: item[1],\n      media: item[2],\n      sourceMap: item[3],\n      supports: item[4],\n      layer: item[5]\n    };\n    if (indexByIdentifier !== -1) {\n      stylesInDOM[indexByIdentifier].references++;\n      stylesInDOM[indexByIdentifier].updater(obj);\n    } else {\n      var updater = addElementStyle(obj, options);\n      options.byIndex = i;\n      stylesInDOM.splice(i, 0, {\n        identifier: identifier,\n        updater: updater,\n        references: 1\n      });\n    }\n    identifiers.push(identifier);\n  }\n  return identifiers;\n}\nfunction addElementStyle(obj, options) {\n  var api = options.domAPI(options);\n  api.update(obj);\n  var updater = function updater(newObj) {\n    if (newObj) {\n      if (newObj.css === obj.css && newObj.media === obj.media && newObj.sourceMap === obj.sourceMap && newObj.supports === obj.supports && newObj.layer === obj.layer) {\n        return;\n      }\n      api.update(obj = newObj);\n    } else {\n      api.remove();\n    }\n  };\n  return updater;\n}\nmodule.exports = function (list, options) {\n  options = options || {};\n  list = list || [];\n  var lastIdentifiers = modulesToDom(list, options);\n  return function update(newList) {\n    newList = newList || [];\n    for (var i = 0; i < lastIdentifiers.length; i++) {\n      var identifier = lastIdentifiers[i];\n      var index = getIndexByIdentifier(identifier);\n      stylesInDOM[index].references--;\n    }\n    var newLastIdentifiers = modulesToDom(newList, options);\n    for (var _i = 0; _i < lastIdentifiers.length; _i++) {\n      var _identifier = lastIdentifiers[_i];\n      var _index = getIndexByIdentifier(_identifier);\n      if (stylesInDOM[_index].references === 0) {\n        stylesInDOM[_index].updater();\n        stylesInDOM.splice(_index, 1);\n      }\n    }\n    lastIdentifiers = newLastIdentifiers;\n  };\n};\n\n//# sourceURL=webpack://three.js_text_3d_animation/./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js?");

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/insertBySelector.js":
/*!********************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/insertBySelector.js ***!
  \********************************************************************/
/***/ ((module) => {

eval("\n\nvar memo = {};\n\n/* istanbul ignore next  */\nfunction getTarget(target) {\n  if (typeof memo[target] === \"undefined\") {\n    var styleTarget = document.querySelector(target);\n\n    // Special case to return head of iframe instead of iframe itself\n    if (window.HTMLIFrameElement && styleTarget instanceof window.HTMLIFrameElement) {\n      try {\n        // This will throw an exception if access to iframe is blocked\n        // due to cross-origin restrictions\n        styleTarget = styleTarget.contentDocument.head;\n      } catch (e) {\n        // istanbul ignore next\n        styleTarget = null;\n      }\n    }\n    memo[target] = styleTarget;\n  }\n  return memo[target];\n}\n\n/* istanbul ignore next  */\nfunction insertBySelector(insert, style) {\n  var target = getTarget(insert);\n  if (!target) {\n    throw new Error(\"Couldn't find a style target. This probably means that the value for the 'insert' parameter is invalid.\");\n  }\n  target.appendChild(style);\n}\nmodule.exports = insertBySelector;\n\n//# sourceURL=webpack://three.js_text_3d_animation/./node_modules/style-loader/dist/runtime/insertBySelector.js?");

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/insertStyleElement.js":
/*!**********************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/insertStyleElement.js ***!
  \**********************************************************************/
/***/ ((module) => {

eval("\n\n/* istanbul ignore next  */\nfunction insertStyleElement(options) {\n  var element = document.createElement(\"style\");\n  options.setAttributes(element, options.attributes);\n  options.insert(element, options.options);\n  return element;\n}\nmodule.exports = insertStyleElement;\n\n//# sourceURL=webpack://three.js_text_3d_animation/./node_modules/style-loader/dist/runtime/insertStyleElement.js?");

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js":
/*!**********************************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js ***!
  \**********************************************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

eval("\n\n/* istanbul ignore next  */\nfunction setAttributesWithoutAttributes(styleElement) {\n  var nonce =  true ? __webpack_require__.nc : 0;\n  if (nonce) {\n    styleElement.setAttribute(\"nonce\", nonce);\n  }\n}\nmodule.exports = setAttributesWithoutAttributes;\n\n//# sourceURL=webpack://three.js_text_3d_animation/./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js?");

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/styleDomAPI.js":
/*!***************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/styleDomAPI.js ***!
  \***************************************************************/
/***/ ((module) => {

eval("\n\n/* istanbul ignore next  */\nfunction apply(styleElement, options, obj) {\n  var css = \"\";\n  if (obj.supports) {\n    css += \"@supports (\".concat(obj.supports, \") {\");\n  }\n  if (obj.media) {\n    css += \"@media \".concat(obj.media, \" {\");\n  }\n  var needLayer = typeof obj.layer !== \"undefined\";\n  if (needLayer) {\n    css += \"@layer\".concat(obj.layer.length > 0 ? \" \".concat(obj.layer) : \"\", \" {\");\n  }\n  css += obj.css;\n  if (needLayer) {\n    css += \"}\";\n  }\n  if (obj.media) {\n    css += \"}\";\n  }\n  if (obj.supports) {\n    css += \"}\";\n  }\n  var sourceMap = obj.sourceMap;\n  if (sourceMap && typeof btoa !== \"undefined\") {\n    css += \"\\n/*# sourceMappingURL=data:application/json;base64,\".concat(btoa(unescape(encodeURIComponent(JSON.stringify(sourceMap)))), \" */\");\n  }\n\n  // For old IE\n  /* istanbul ignore if  */\n  options.styleTagTransform(css, styleElement, options.options);\n}\nfunction removeStyleElement(styleElement) {\n  // istanbul ignore if\n  if (styleElement.parentNode === null) {\n    return false;\n  }\n  styleElement.parentNode.removeChild(styleElement);\n}\n\n/* istanbul ignore next  */\nfunction domAPI(options) {\n  if (typeof document === \"undefined\") {\n    return {\n      update: function update() {},\n      remove: function remove() {}\n    };\n  }\n  var styleElement = options.insertStyleElement(options);\n  return {\n    update: function update(obj) {\n      apply(styleElement, options, obj);\n    },\n    remove: function remove() {\n      removeStyleElement(styleElement);\n    }\n  };\n}\nmodule.exports = domAPI;\n\n//# sourceURL=webpack://three.js_text_3d_animation/./node_modules/style-loader/dist/runtime/styleDomAPI.js?");

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/styleTagTransform.js":
/*!*********************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/styleTagTransform.js ***!
  \*********************************************************************/
/***/ ((module) => {

eval("\n\n/* istanbul ignore next  */\nfunction styleTagTransform(css, styleElement) {\n  if (styleElement.styleSheet) {\n    styleElement.styleSheet.cssText = css;\n  } else {\n    while (styleElement.firstChild) {\n      styleElement.removeChild(styleElement.firstChild);\n    }\n    styleElement.appendChild(document.createTextNode(css));\n  }\n}\nmodule.exports = styleTagTransform;\n\n//# sourceURL=webpack://three.js_text_3d_animation/./node_modules/style-loader/dist/runtime/styleTagTransform.js?");

/***/ }),

/***/ "./src/index.js":
/*!**********************!*\
  !*** ./src/index.js ***!
  \**********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var three__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! three */ \"./node_modules/three/build/three.module.js\");\n/* harmony import */ var _style_css__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./style.css */ \"./src/style.css\");\n/* harmony import */ var three_examples_jsm_loaders_FontLoader_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! three/examples/jsm/loaders/FontLoader.js */ \"./node_modules/three/examples/jsm/loaders/FontLoader.js\");\n/* harmony import */ var three_examples_jsm_geometries_TextGeometry_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! three/examples/jsm/geometries/TextGeometry.js */ \"./node_modules/three/examples/jsm/geometries/TextGeometry.js\");\n/* harmony import */ var three_addons_math_MeshSurfaceSampler_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! three/addons/math/MeshSurfaceSampler.js */ \"./node_modules/three/examples/jsm/math/MeshSurfaceSampler.js\");\n\n\n\n\n\n\nclass main {\n    constructor() {\n        this.scene = null;\n        this.camera = null;\n        this.renderer = null;\n        this.sphere = null;\n        this.text = null;\n        this.scrollPercent = 0;\n        this.points = null;\n        this._init();\n    }\n\n    _init() {\n        this._initScene();\n        this._initCamera();\n        this._initRenderer();\n        this._initText();\n        this._addEvent();\n    }\n\n    _initScene() {\n        this.scene = new three__WEBPACK_IMPORTED_MODULE_1__.Scene();\n        this.scene.background = new three__WEBPACK_IMPORTED_MODULE_1__.Color(0xffffff);\n    }\n\n    _initCamera() {\n        this.camera = new three__WEBPACK_IMPORTED_MODULE_1__.PerspectiveCamera(75, window.innerWidth / window.innerHeight, 0.1, 1000);\n        this.camera.position.z = 2;\n        this.scene.add(this.camera);\n    }\n\n    _initRenderer() {\n        this.renderer = new three__WEBPACK_IMPORTED_MODULE_1__.WebGLRenderer();\n        this.renderer.setSize(window.innerWidth, window.innerHeight);\n        document.body.appendChild(this.renderer.domElement);\n    }\n\n    _resize() {\n        this.camera.aspect = window.innerWidth / window.innerHeight;\n        this.camera.updateProjectionMatrix();\n        this.renderer.setSize(window.innerWidth, window.innerHeight);\n    }\n\n    _render() {\n        this.renderer.render(this.scene, this.camera);\n        requestAnimationFrame(this._render);\n    }\n\n    async _initText() {\n        const fontLoader = new three_examples_jsm_loaders_FontLoader_js__WEBPACK_IMPORTED_MODULE_2__.FontLoader();\n        fontLoader.load(\"./font/Noto Sans JP_Regular.json\", (font) => {\n            const text1Geometry = new three_examples_jsm_geometries_TextGeometry_js__WEBPACK_IMPORTED_MODULE_3__.TextGeometry(\"H e l l o\", {\n                font: font,\n                size: 0.5,\n                height: 0.2,\n                curveSegments: 12,\n                bevelEnabled: true,\n                bevelThickness: 0.03,\n                bevelSize: 0.02,\n                bevelOffset: 0,\n                bevelSegments: 5,\n            });\n            const text2Geometry = new three_examples_jsm_geometries_TextGeometry_js__WEBPACK_IMPORTED_MODULE_3__.TextGeometry(\"W o r l d\", {\n                font: font,\n                size: 0.5,\n                height: 0.2,\n                curveSegments: 12,\n                bevelEnabled: true,\n                bevelThickness: 0.03,\n                bevelSize: 0.02,\n                bevelOffset: 0,\n                bevelSegments: 5,\n            });\n            text1Geometry.center();\n            text2Geometry.center();\n            const numParticles = 1800;\n            this.geometry = new three__WEBPACK_IMPORTED_MODULE_1__.BufferGeometry();\n            const position = this._getPointPosition(text1Geometry.toNonIndexed(), 1800);\n            const secPosition = this._getPointPosition(text2Geometry.toNonIndexed(), 1800);\n            console.log(position);\n            console.log(secPosition);\n            this.geometry.setAttribute('position', new three__WEBPACK_IMPORTED_MODULE_1__.BufferAttribute(position, 3));\n            this.geometry.setAttribute('secPosition', new three__WEBPACK_IMPORTED_MODULE_1__.BufferAttribute(secPosition, 3));\n            const material = new three__WEBPACK_IMPORTED_MODULE_1__.RawShaderMaterial({\n                vertexShader: `\n                attribute vec3 position;\n                attribute vec3 secPosition;\n                uniform float scalePercent;\n                uniform mat4 modelViewMatrix;\n                uniform mat4 projectionMatrix;\n\n\n                void main() {\n                    vec3 newPosition = mix(position, secPosition, scalePercent);\n                    gl_Position = projectionMatrix * modelViewMatrix * vec4(newPosition, 1.0);\n                    gl_PointSize = 10.0;\n                }\n                `,\n                fragmentShader: `\n                precision mediump float;\n\n                void main() {\n                    float distance = length(gl_PointCoord - vec2(0.5, 0.5));\n\n                    if (distance <= 0.5) {\n                        gl_FragColor = vec4(1.0, 0.0, 0.0, 1.0);\n                    } else {\n                        discard;\n                    }\n                }\n                `,\n                side: three__WEBPACK_IMPORTED_MODULE_1__.DoubleSide,\n                transparent: true,\n                uniforms: {\n                    scalePercent: { value: 0.0 },\n                },\n            });\n            this.points = new three__WEBPACK_IMPORTED_MODULE_1__.Points(this.geometry, material);\n            this.scene.add(this.points);\n        });\n    }\n\n    _getPointPosition(geometry, numPoints) {\n        const material = new three__WEBPACK_IMPORTED_MODULE_1__.MeshBasicMaterial({ color: 0xFFFFFF });\n        const mesh = new three__WEBPACK_IMPORTED_MODULE_1__.InstancedMesh(geometry, material);\n        const sampler = new three_addons_math_MeshSurfaceSampler_js__WEBPACK_IMPORTED_MODULE_4__.MeshSurfaceSampler(mesh).build();\n        const particlesPosition = new Float32Array(numPoints * 3);\n        for (let i = 0; i < numPoints; i++) {\n            const newPosition = new three__WEBPACK_IMPORTED_MODULE_1__.Vector3();\n            sampler.sample(newPosition);\n            particlesPosition.set([newPosition.x, newPosition.y, newPosition.z], i * 3);\n        }\n        return particlesPosition;\n    };\n\n    _initHelpers() {\n        const axesHelper = new three__WEBPACK_IMPORTED_MODULE_1__.AxesHelper(5);\n        this.scene.add(axesHelper);\n        const gridHelper = new three__WEBPACK_IMPORTED_MODULE_1__.GridHelper(10, 10);\n        this.scene.add(gridHelper);\n    }\n\n    _addEvent() {\n        this._render = this._render.bind(this);\n        window.addEventListener('load', () => {this._render()});\n        window.addEventListener('resize', () => {this._resize()});\n        window.addEventListener('scroll', () => {this.points.material.uniforms.scalePercent.value = (document.documentElement.scrollTop / (document.documentElement.scrollHeight - document.documentElement.clientHeight))});\n        console.log(this.geometry);\n    }\n}\n\nnew main();\n\n//# sourceURL=webpack://three.js_text_3d_animation/./src/index.js?");

/***/ }),

/***/ "./node_modules/three/build/three.module.js":
/*!**************************************************!*\
  !*** ./node_modules/three/build/three.module.js ***!
  \**************************************************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {


/***/ }),

/***/ "./node_modules/three/examples/jsm/geometries/TextGeometry.js":
/*!********************************************************************!*\
  !*** ./node_modules/three/examples/jsm/geometries/TextGeometry.js ***!
  \********************************************************************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   TextGeometry: () => (/* binding */ TextGeometry)\n/* harmony export */ });\n/* harmony import */ var three__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! three */ \"./node_modules/three/build/three.module.js\");\n/**\n * Text = 3D Text\n *\n * parameters = {\n *  font: <THREE.Font>, // font\n *\n *  size: <float>, // size of the text\n *  height: <float>, // thickness to extrude text\n *  curveSegments: <int>, // number of points on the curves\n *\n *  bevelEnabled: <bool>, // turn on bevel\n *  bevelThickness: <float>, // how deep into text bevel goes\n *  bevelSize: <float>, // how far from text outline (including bevelOffset) is bevel\n *  bevelOffset: <float> // how far from text outline does bevel start\n * }\n */\n\n\n\nclass TextGeometry extends three__WEBPACK_IMPORTED_MODULE_0__.ExtrudeGeometry {\n\n\tconstructor( text, parameters = {} ) {\n\n\t\tconst font = parameters.font;\n\n\t\tif ( font === undefined ) {\n\n\t\t\tsuper(); // generate default extrude geometry\n\n\t\t} else {\n\n\t\t\tconst shapes = font.generateShapes( text, parameters.size );\n\n\t\t\t// translate parameters to ExtrudeGeometry API\n\n\t\t\tparameters.depth = parameters.height !== undefined ? parameters.height : 50;\n\n\t\t\t// defaults\n\n\t\t\tif ( parameters.bevelThickness === undefined ) parameters.bevelThickness = 10;\n\t\t\tif ( parameters.bevelSize === undefined ) parameters.bevelSize = 8;\n\t\t\tif ( parameters.bevelEnabled === undefined ) parameters.bevelEnabled = false;\n\n\t\t\tsuper( shapes, parameters );\n\n\t\t}\n\n\t\tthis.type = 'TextGeometry';\n\n\t}\n\n}\n\n\n\n\n\n//# sourceURL=webpack://three.js_text_3d_animation/./node_modules/three/examples/jsm/geometries/TextGeometry.js?");

/***/ }),

/***/ "./node_modules/three/examples/jsm/loaders/FontLoader.js":
/*!***************************************************************!*\
  !*** ./node_modules/three/examples/jsm/loaders/FontLoader.js ***!
  \***************************************************************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   Font: () => (/* binding */ Font),\n/* harmony export */   FontLoader: () => (/* binding */ FontLoader)\n/* harmony export */ });\n/* harmony import */ var three__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! three */ \"./node_modules/three/build/three.module.js\");\n\n\nclass FontLoader extends three__WEBPACK_IMPORTED_MODULE_0__.Loader {\n\n\tconstructor( manager ) {\n\n\t\tsuper( manager );\n\n\t}\n\n\tload( url, onLoad, onProgress, onError ) {\n\n\t\tconst scope = this;\n\n\t\tconst loader = new three__WEBPACK_IMPORTED_MODULE_0__.FileLoader( this.manager );\n\t\tloader.setPath( this.path );\n\t\tloader.setRequestHeader( this.requestHeader );\n\t\tloader.setWithCredentials( this.withCredentials );\n\t\tloader.load( url, function ( text ) {\n\n\t\t\tconst font = scope.parse( JSON.parse( text ) );\n\n\t\t\tif ( onLoad ) onLoad( font );\n\n\t\t}, onProgress, onError );\n\n\t}\n\n\tparse( json ) {\n\n\t\treturn new Font( json );\n\n\t}\n\n}\n\n//\n\nclass Font {\n\n\tconstructor( data ) {\n\n\t\tthis.isFont = true;\n\n\t\tthis.type = 'Font';\n\n\t\tthis.data = data;\n\n\t}\n\n\tgenerateShapes( text, size = 100 ) {\n\n\t\tconst shapes = [];\n\t\tconst paths = createPaths( text, size, this.data );\n\n\t\tfor ( let p = 0, pl = paths.length; p < pl; p ++ ) {\n\n\t\t\tshapes.push( ...paths[ p ].toShapes() );\n\n\t\t}\n\n\t\treturn shapes;\n\n\t}\n\n}\n\nfunction createPaths( text, size, data ) {\n\n\tconst chars = Array.from( text );\n\tconst scale = size / data.resolution;\n\tconst line_height = ( data.boundingBox.yMax - data.boundingBox.yMin + data.underlineThickness ) * scale;\n\n\tconst paths = [];\n\n\tlet offsetX = 0, offsetY = 0;\n\n\tfor ( let i = 0; i < chars.length; i ++ ) {\n\n\t\tconst char = chars[ i ];\n\n\t\tif ( char === '\\n' ) {\n\n\t\t\toffsetX = 0;\n\t\t\toffsetY -= line_height;\n\n\t\t} else {\n\n\t\t\tconst ret = createPath( char, scale, offsetX, offsetY, data );\n\t\t\toffsetX += ret.offsetX;\n\t\t\tpaths.push( ret.path );\n\n\t\t}\n\n\t}\n\n\treturn paths;\n\n}\n\nfunction createPath( char, scale, offsetX, offsetY, data ) {\n\n\tconst glyph = data.glyphs[ char ] || data.glyphs[ '?' ];\n\n\tif ( ! glyph ) {\n\n\t\tconsole.error( 'THREE.Font: character \"' + char + '\" does not exists in font family ' + data.familyName + '.' );\n\n\t\treturn;\n\n\t}\n\n\tconst path = new three__WEBPACK_IMPORTED_MODULE_0__.ShapePath();\n\n\tlet x, y, cpx, cpy, cpx1, cpy1, cpx2, cpy2;\n\n\tif ( glyph.o ) {\n\n\t\tconst outline = glyph._cachedOutline || ( glyph._cachedOutline = glyph.o.split( ' ' ) );\n\n\t\tfor ( let i = 0, l = outline.length; i < l; ) {\n\n\t\t\tconst action = outline[ i ++ ];\n\n\t\t\tswitch ( action ) {\n\n\t\t\t\tcase 'm': // moveTo\n\n\t\t\t\t\tx = outline[ i ++ ] * scale + offsetX;\n\t\t\t\t\ty = outline[ i ++ ] * scale + offsetY;\n\n\t\t\t\t\tpath.moveTo( x, y );\n\n\t\t\t\t\tbreak;\n\n\t\t\t\tcase 'l': // lineTo\n\n\t\t\t\t\tx = outline[ i ++ ] * scale + offsetX;\n\t\t\t\t\ty = outline[ i ++ ] * scale + offsetY;\n\n\t\t\t\t\tpath.lineTo( x, y );\n\n\t\t\t\t\tbreak;\n\n\t\t\t\tcase 'q': // quadraticCurveTo\n\n\t\t\t\t\tcpx = outline[ i ++ ] * scale + offsetX;\n\t\t\t\t\tcpy = outline[ i ++ ] * scale + offsetY;\n\t\t\t\t\tcpx1 = outline[ i ++ ] * scale + offsetX;\n\t\t\t\t\tcpy1 = outline[ i ++ ] * scale + offsetY;\n\n\t\t\t\t\tpath.quadraticCurveTo( cpx1, cpy1, cpx, cpy );\n\n\t\t\t\t\tbreak;\n\n\t\t\t\tcase 'b': // bezierCurveTo\n\n\t\t\t\t\tcpx = outline[ i ++ ] * scale + offsetX;\n\t\t\t\t\tcpy = outline[ i ++ ] * scale + offsetY;\n\t\t\t\t\tcpx1 = outline[ i ++ ] * scale + offsetX;\n\t\t\t\t\tcpy1 = outline[ i ++ ] * scale + offsetY;\n\t\t\t\t\tcpx2 = outline[ i ++ ] * scale + offsetX;\n\t\t\t\t\tcpy2 = outline[ i ++ ] * scale + offsetY;\n\n\t\t\t\t\tpath.bezierCurveTo( cpx1, cpy1, cpx2, cpy2, cpx, cpy );\n\n\t\t\t\t\tbreak;\n\n\t\t\t}\n\n\t\t}\n\n\t}\n\n\treturn { offsetX: glyph.ha * scale, path: path };\n\n}\n\n\n\n\n//# sourceURL=webpack://three.js_text_3d_animation/./node_modules/three/examples/jsm/loaders/FontLoader.js?");

/***/ }),

/***/ "./node_modules/three/examples/jsm/math/MeshSurfaceSampler.js":
/*!********************************************************************!*\
  !*** ./node_modules/three/examples/jsm/math/MeshSurfaceSampler.js ***!
  \********************************************************************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   MeshSurfaceSampler: () => (/* binding */ MeshSurfaceSampler)\n/* harmony export */ });\n/* harmony import */ var three__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! three */ \"./node_modules/three/build/three.module.js\");\n\n\n/**\n * Utility class for sampling weighted random points on the surface of a mesh.\n *\n * Building the sampler is a one-time O(n) operation. Once built, any number of\n * random samples may be selected in O(logn) time. Memory usage is O(n).\n *\n * References:\n * - http://www.joesfer.com/?p=84\n * - https://stackoverflow.com/a/4322940/1314762\n */\n\nconst _face = new three__WEBPACK_IMPORTED_MODULE_0__.Triangle();\nconst _color = new three__WEBPACK_IMPORTED_MODULE_0__.Vector3();\nconst _uva = new three__WEBPACK_IMPORTED_MODULE_0__.Vector2(), _uvb = new three__WEBPACK_IMPORTED_MODULE_0__.Vector2(), _uvc = new three__WEBPACK_IMPORTED_MODULE_0__.Vector2();\n\nclass MeshSurfaceSampler {\n\n\tconstructor( mesh ) {\n\n\t\tthis.geometry = mesh.geometry;\n\t\tthis.randomFunction = Math.random;\n\n\t\tthis.indexAttribute = this.geometry.index;\n\t\tthis.positionAttribute = this.geometry.getAttribute( 'position' );\n\t\tthis.normalAttribute = this.geometry.getAttribute( 'normal' );\n\t\tthis.colorAttribute = this.geometry.getAttribute( 'color' );\n\t\tthis.uvAttribute = this.geometry.getAttribute( 'uv' );\n\t\tthis.weightAttribute = null;\n\n\t\tthis.distribution = null;\n\n\t}\n\n\tsetWeightAttribute( name ) {\n\n\t\tthis.weightAttribute = name ? this.geometry.getAttribute( name ) : null;\n\n\t\treturn this;\n\n\t}\n\n\tbuild() {\n\n\t\tconst indexAttribute = this.indexAttribute;\n\t\tconst positionAttribute = this.positionAttribute;\n\t\tconst weightAttribute = this.weightAttribute;\n\n\t\tconst totalFaces = indexAttribute ? ( indexAttribute.count / 3 ) : ( positionAttribute.count / 3 );\n\t\tconst faceWeights = new Float32Array( totalFaces );\n\n\t\t// Accumulate weights for each mesh face.\n\n\t\tfor ( let i = 0; i < totalFaces; i ++ ) {\n\n\t\t\tlet faceWeight = 1;\n\n\t\t\tlet i0 = 3 * i;\n\t\t\tlet i1 = 3 * i + 1;\n\t\t\tlet i2 = 3 * i + 2;\n\n\t\t\tif ( indexAttribute ) {\n\n\t\t\t\ti0 = indexAttribute.getX( i0 );\n\t\t\t\ti1 = indexAttribute.getX( i1 );\n\t\t\t\ti2 = indexAttribute.getX( i2 );\n\n\t\t\t}\n\n\t\t\tif ( weightAttribute ) {\n\n\t\t\t\tfaceWeight = weightAttribute.getX( i0 )\n\t\t\t\t\t+ weightAttribute.getX( i1 )\n\t\t\t\t\t+ weightAttribute.getX( i2 );\n\n\t\t\t}\n\n\t\t\t_face.a.fromBufferAttribute( positionAttribute, i0 );\n\t\t\t_face.b.fromBufferAttribute( positionAttribute, i1 );\n\t\t\t_face.c.fromBufferAttribute( positionAttribute, i2 );\n\t\t\tfaceWeight *= _face.getArea();\n\n\t\t\tfaceWeights[ i ] = faceWeight;\n\n\t\t}\n\n\t\t// Store cumulative total face weights in an array, where weight index\n\t\t// corresponds to face index.\n\n\t\tconst distribution = new Float32Array( totalFaces );\n\t\tlet cumulativeTotal = 0;\n\n\t\tfor ( let i = 0; i < totalFaces; i ++ ) {\n\n\t\t\tcumulativeTotal += faceWeights[ i ];\n\t\t\tdistribution[ i ] = cumulativeTotal;\n\n\t\t}\n\n\t\tthis.distribution = distribution;\n\t\treturn this;\n\n\t}\n\n\tsetRandomGenerator( randomFunction ) {\n\n\t\tthis.randomFunction = randomFunction;\n\t\treturn this;\n\n\t}\n\n\tsample( targetPosition, targetNormal, targetColor, targetUV ) {\n\n\t\tconst faceIndex = this.sampleFaceIndex();\n\t\treturn this.sampleFace( faceIndex, targetPosition, targetNormal, targetColor, targetUV );\n\n\t}\n\n\tsampleFaceIndex() {\n\n\t\tconst cumulativeTotal = this.distribution[ this.distribution.length - 1 ];\n\t\treturn this.binarySearch( this.randomFunction() * cumulativeTotal );\n\n\t}\n\n\tbinarySearch( x ) {\n\n\t\tconst dist = this.distribution;\n\t\tlet start = 0;\n\t\tlet end = dist.length - 1;\n\n\t\tlet index = - 1;\n\n\t\twhile ( start <= end ) {\n\n\t\t\tconst mid = Math.ceil( ( start + end ) / 2 );\n\n\t\t\tif ( mid === 0 || dist[ mid - 1 ] <= x && dist[ mid ] > x ) {\n\n\t\t\t\tindex = mid;\n\n\t\t\t\tbreak;\n\n\t\t\t} else if ( x < dist[ mid ] ) {\n\n\t\t\t\tend = mid - 1;\n\n\t\t\t} else {\n\n\t\t\t\tstart = mid + 1;\n\n\t\t\t}\n\n\t\t}\n\n\t\treturn index;\n\n\t}\n\n\tsampleFace( faceIndex, targetPosition, targetNormal, targetColor, targetUV ) {\n\n\t\tlet u = this.randomFunction();\n\t\tlet v = this.randomFunction();\n\n\t\tif ( u + v > 1 ) {\n\n\t\t\tu = 1 - u;\n\t\t\tv = 1 - v;\n\n\t\t}\n\n\t\t// get the vertex attribute indices\n\t\tconst indexAttribute = this.indexAttribute;\n\t\tlet i0 = faceIndex * 3;\n\t\tlet i1 = faceIndex * 3 + 1;\n\t\tlet i2 = faceIndex * 3 + 2;\n\t\tif ( indexAttribute ) {\n\n\t\t\ti0 = indexAttribute.getX( i0 );\n\t\t\ti1 = indexAttribute.getX( i1 );\n\t\t\ti2 = indexAttribute.getX( i2 );\n\n\t\t}\n\n\t\t_face.a.fromBufferAttribute( this.positionAttribute, i0 );\n\t\t_face.b.fromBufferAttribute( this.positionAttribute, i1 );\n\t\t_face.c.fromBufferAttribute( this.positionAttribute, i2 );\n\n\t\ttargetPosition\n\t\t\t.set( 0, 0, 0 )\n\t\t\t.addScaledVector( _face.a, u )\n\t\t\t.addScaledVector( _face.b, v )\n\t\t\t.addScaledVector( _face.c, 1 - ( u + v ) );\n\n\t\tif ( targetNormal !== undefined ) {\n\n\t\t\tif ( this.normalAttribute !== undefined ) {\n\n\t\t\t\t_face.a.fromBufferAttribute( this.normalAttribute, i0 );\n\t\t\t\t_face.b.fromBufferAttribute( this.normalAttribute, i1 );\n\t\t\t\t_face.c.fromBufferAttribute( this.normalAttribute, i2 );\n\t\t\t\ttargetNormal.set( 0, 0, 0 ).addScaledVector( _face.a, u ).addScaledVector( _face.b, v ).addScaledVector( _face.c, 1 - ( u + v ) ).normalize();\n\n\t\t\t} else {\n\n\t\t\t\t_face.getNormal( targetNormal );\n\n\t\t\t}\n\n\t\t}\n\n\t\tif ( targetColor !== undefined && this.colorAttribute !== undefined ) {\n\n\t\t\t_face.a.fromBufferAttribute( this.colorAttribute, i0 );\n\t\t\t_face.b.fromBufferAttribute( this.colorAttribute, i1 );\n\t\t\t_face.c.fromBufferAttribute( this.colorAttribute, i2 );\n\n\t\t\t_color\n\t\t\t\t.set( 0, 0, 0 )\n\t\t\t\t.addScaledVector( _face.a, u )\n\t\t\t\t.addScaledVector( _face.b, v )\n\t\t\t\t.addScaledVector( _face.c, 1 - ( u + v ) );\n\n\t\t\ttargetColor.r = _color.x;\n\t\t\ttargetColor.g = _color.y;\n\t\t\ttargetColor.b = _color.z;\n\n\t\t}\n\n\t\tif ( targetUV !== undefined && this.uvAttribute !== undefined ) {\n\n\t\t\t_uva.fromBufferAttribute( this.uvAttribute, i0 );\n\t\t\t_uvb.fromBufferAttribute( this.uvAttribute, i1 );\n\t\t\t_uvc.fromBufferAttribute( this.uvAttribute, i2 );\n\t\t\ttargetUV.set( 0, 0 ).addScaledVector( _uva, u ).addScaledVector( _uvb, v ).addScaledVector( _uvc, 1 - ( u + v ) );\n\n\t\t}\n\n\t\treturn this;\n\n\t}\n\n}\n\n\n\n\n//# sourceURL=webpack://three.js_text_3d_animation/./node_modules/three/examples/jsm/math/MeshSurfaceSampler.js?");

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
/******/ 	/* webpack/runtime/nonce */
/******/ 	(() => {
/******/ 		__webpack_require__.nc = undefined;
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