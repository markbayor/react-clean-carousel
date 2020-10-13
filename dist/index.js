(function webpackUniversalModuleDefinition(root, factory) {
	if(typeof exports === 'object' && typeof module === 'object')
		module.exports = factory(require("react"));
	else if(typeof define === 'function' && define.amd)
		define("react-clean-carousel-library", ["React"], factory);
	else if(typeof exports === 'object')
		exports["react-clean-carousel-library"] = factory(require("react"));
	else
		root["react-clean-carousel-library"] = factory(root["React"]);
})(this, function(__WEBPACK_EXTERNAL_MODULE_react__) {
return /******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};
/******/
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/
/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId]) {
/******/ 			return installedModules[moduleId].exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			i: moduleId,
/******/ 			l: false,
/******/ 			exports: {}
/******/ 		};
/******/
/******/ 		// Execute the module function
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/
/******/ 		// Flag the module as loaded
/******/ 		module.l = true;
/******/
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/
/******/
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;
/******/
/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;
/******/
/******/ 	// define getter function for harmony exports
/******/ 	__webpack_require__.d = function(exports, name, getter) {
/******/ 		if(!__webpack_require__.o(exports, name)) {
/******/ 			Object.defineProperty(exports, name, { enumerable: true, get: getter });
/******/ 		}
/******/ 	};
/******/
/******/ 	// define __esModule on exports
/******/ 	__webpack_require__.r = function(exports) {
/******/ 		if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 			Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 		}
/******/ 		Object.defineProperty(exports, '__esModule', { value: true });
/******/ 	};
/******/
/******/ 	// create a fake namespace object
/******/ 	// mode & 1: value is a module id, require it
/******/ 	// mode & 2: merge all properties of value into the ns
/******/ 	// mode & 4: return value when already ns object
/******/ 	// mode & 8|1: behave like require
/******/ 	__webpack_require__.t = function(value, mode) {
/******/ 		if(mode & 1) value = __webpack_require__(value);
/******/ 		if(mode & 8) return value;
/******/ 		if((mode & 4) && typeof value === 'object' && value && value.__esModule) return value;
/******/ 		var ns = Object.create(null);
/******/ 		__webpack_require__.r(ns);
/******/ 		Object.defineProperty(ns, 'default', { enumerable: true, value: value });
/******/ 		if(mode & 2 && typeof value != 'string') for(var key in value) __webpack_require__.d(ns, key, function(key) { return value[key]; }.bind(null, key));
/******/ 		return ns;
/******/ 	};
/******/
/******/ 	// getDefaultExport function for compatibility with non-harmony modules
/******/ 	__webpack_require__.n = function(module) {
/******/ 		var getter = module && module.__esModule ?
/******/ 			function getDefault() { return module['default']; } :
/******/ 			function getModuleExports() { return module; };
/******/ 		__webpack_require__.d(getter, 'a', getter);
/******/ 		return getter;
/******/ 	};
/******/
/******/ 	// Object.prototype.hasOwnProperty.call
/******/ 	__webpack_require__.o = function(object, property) { return Object.prototype.hasOwnProperty.call(object, property); };
/******/
/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "";
/******/
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = "./src/index.tsx");
/******/ })
/************************************************************************/
/******/ ({

/***/ "./node_modules/css-loader/dist/cjs.js!./node_modules/sass-loader/dist/cjs.js!./src/carousel.scss":
/*!********************************************************************************************************!*\
  !*** ./node_modules/css-loader/dist/cjs.js!./node_modules/sass-loader/dist/cjs.js!./src/carousel.scss ***!
  \********************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../node_modules/css-loader/dist/runtime/api.js */ "./node_modules/css-loader/dist/runtime/api.js");
/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_0__);
// Imports

var ___CSS_LOADER_EXPORT___ = _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_0___default()(true);
// Module
___CSS_LOADER_EXPORT___.push([module.i, ".c-carousel {\n  position: relative;\n}\n.c-carousel--verylarge {\n  width: 100rem;\n  height: 40rem;\n}\n.c-carousel--large {\n  width: 98vw;\n  height: 41vw;\n}\n.c-carousel--medium {\n  width: 77vw;\n  height: 33vw;\n}\n.c-carousel--small {\n  width: 58vw;\n  height: 25vw;\n}\n.c-carousel--verysmall {\n  width: 45vw;\n  height: 19vw;\n}\n.c-carousel__inner {\n  position: relative;\n}", "",{"version":3,"sources":["webpack://src/carousel.scss"],"names":[],"mappings":"AAAA;EACE,kBAAA;AACF;AACE;EACE,aAAA;EACA,aAAA;AACJ;AAEE;EACE,WAAA;EACA,YAAA;AAAJ;AAGE;EACE,WAAA;EACA,YAAA;AADJ;AAIE;EACE,WAAA;EACA,YAAA;AAFJ;AAKE;EACE,WAAA;EACA,YAAA;AAHJ;AAME;EACE,kBAAA;AAJJ","sourcesContent":[".c-carousel {\n  position: relative;\n\n  &--verylarge {\n    width: 100rem;\n    height: 40rem;\n  }\n\n  &--large {\n    width: 98vw;\n    height: 41vw;\n  }\n\n  &--medium {\n    width: 77vw;\n    height: 33vw;\n  }\n\n  &--small {\n    width: 58vw;\n    height: 25vw;\n  }\n\n  &--verysmall {\n    width: 45vw;\n    height: 19vw;\n  }\n\n  &__inner {\n    position: relative;\n  }\n}\n"],"sourceRoot":""}]);
// Exports
/* harmony default export */ __webpack_exports__["default"] = (___CSS_LOADER_EXPORT___);


/***/ }),

/***/ "./node_modules/css-loader/dist/cjs.js!./node_modules/sass-loader/dist/cjs.js!./src/components/arrows.scss":
/*!*****************************************************************************************************************!*\
  !*** ./node_modules/css-loader/dist/cjs.js!./node_modules/sass-loader/dist/cjs.js!./src/components/arrows.scss ***!
  \*****************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../node_modules/css-loader/dist/runtime/api.js */ "./node_modules/css-loader/dist/runtime/api.js");
/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_0__);
// Imports

var ___CSS_LOADER_EXPORT___ = _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_0___default()(true);
// Module
___CSS_LOADER_EXPORT___.push([module.i, ".c-arrows {\n  position: absolute;\n  display: flex;\n  align-items: center;\n  justify-content: space-between;\n  width: 100%;\n  z-index: 50;\n  top: 50%;\n}\n.c-arrows__previous {\n  left: 1rem;\n  transform: translateX(30px) translate3d(0, -50%, 0) rotate(-135deg);\n  cursor: pointer;\n  width: 2rem;\n  height: 2rem;\n  background: transparent;\n  border-top: 1vmin solid white;\n  border-right: 1vmin solid white;\n  box-shadow: 0 0 0 lightgray;\n  transition: all 200ms ease;\n}\n.c-arrows__previous:hover {\n  border-color: lightgray;\n  box-shadow: 0.5vmin -0.5vmin 0 white;\n}\n.c-arrows__previous:active {\n  border-color: #848484;\n  box-shadow: 0.5rem -0.5rem 0 white;\n}\n.c-arrows__next {\n  right: 1rem;\n  transform: translateX(-30px) translate3d(0, -50%, 0) rotate(45deg);\n  cursor: pointer;\n  width: 2rem;\n  height: 2rem;\n  background: transparent;\n  border-top: 1vmin solid white;\n  border-right: 1vmin solid white;\n  box-shadow: 0 0 0 lightgray;\n  transition: all 200ms ease;\n}\n.c-arrows__next:hover {\n  border-color: lightgray;\n  box-shadow: 0.5vmin -0.5vmin 0 white;\n}\n.c-arrows__next:active {\n  border-color: #848484;\n  box-shadow: 0.5rem -0.5rem 0 white;\n}", "",{"version":3,"sources":["webpack://src/components/arrows.scss"],"names":[],"mappings":"AAAA;EACE,kBAAA;EACA,aAAA;EACA,mBAAA;EACA,8BAAA;EACA,WAAA;EACA,WAAA;EACA,QAAA;AACF;AACE;EACE,UAAA;EACA,mEAAA;EACA,eAAA;EACA,WAAA;EACA,YAAA;EACA,uBAAA;EACA,6BAAA;EACA,+BAAA;EACA,2BAAA;EACA,0BAAA;AACJ;AACI;EACE,uBAAA;EACA,oCAAA;AACN;AAEI;EACE,qBAAA;EACA,kCAAA;AAAN;AAIE;EACE,WAAA;EACA,kEAAA;EACA,eAAA;EACA,WAAA;EACA,YAAA;EACA,uBAAA;EACA,6BAAA;EACA,+BAAA;EACA,2BAAA;EACA,0BAAA;AAFJ;AAII;EACE,uBAAA;EACA,oCAAA;AAFN;AAKI;EACE,qBAAA;EACA,kCAAA;AAHN","sourcesContent":[".c-arrows {\n  position: absolute;\n  display: flex;\n  align-items: center;\n  justify-content: space-between;\n  width: 100%;\n  z-index: 50;\n  top: 50%;\n\n  &__previous {\n    left: 1rem;\n    transform: translateX(30px) translate3d(0,-50%,0) rotate(-135deg);\n    cursor: pointer;\n    width: 2rem;\n    height: 2rem;\n    background: transparent;\n    border-top: 1vmin solid white;\n    border-right: 1vmin solid white;\n    box-shadow: 0 0 0 lightgray;\n    transition: all 200ms ease;\n\n    &:hover {\n      border-color: lightgray;\n      box-shadow: 0.5vmin -0.5vmin 0 white;\n    }\n\n    &:active {\n      border-color: rgb(132, 132, 132);\n      box-shadow: .5rem -.5rem 0 white;\n    }\n  }\n\n  &__next {\n    right: 1rem;\n    transform: translateX(-30px) translate3d(0,-50%,0) rotate(45deg);\n    cursor: pointer;\n    width: 2rem;\n    height: 2rem;\n    background: transparent;\n    border-top: 1vmin solid white;\n    border-right: 1vmin solid white;\n    box-shadow: 0 0 0 lightgray;\n    transition: all 200ms ease;\n\n    &:hover {\n      border-color: lightgray;\n      box-shadow: 0.5vmin -0.5vmin 0 white;\n    }\n\n    &:active {\n      border-color: rgb(132, 132, 132);\n      box-shadow: .5rem -.5rem 0 white;\n    }\n  }\n\n  \n}\n\n  \n"],"sourceRoot":""}]);
// Exports
/* harmony default export */ __webpack_exports__["default"] = (___CSS_LOADER_EXPORT___);


/***/ }),

/***/ "./node_modules/css-loader/dist/cjs.js!./node_modules/sass-loader/dist/cjs.js!./src/components/dots.scss":
/*!***************************************************************************************************************!*\
  !*** ./node_modules/css-loader/dist/cjs.js!./node_modules/sass-loader/dist/cjs.js!./src/components/dots.scss ***!
  \***************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../node_modules/css-loader/dist/runtime/api.js */ "./node_modules/css-loader/dist/runtime/api.js");
/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_0__);
// Imports

var ___CSS_LOADER_EXPORT___ = _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_0___default()(true);
// Module
___CSS_LOADER_EXPORT___.push([module.i, ".c-dots {\n  z-index: 5;\n  position: absolute;\n  width: fit-content;\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  left: 0;\n  right: 0;\n  margin-left: auto;\n  margin-right: auto;\n  top: 85%;\n}\n.c-dots__dot {\n  margin: 1rem;\n  padding: 0.3rem;\n  height: 0.7rem;\n  width: 0.7rem;\n  border-radius: 2rem;\n  cursor: pointer;\n  background-color: rgba(255, 255, 255, 0.7);\n  border: solid 3px transparent;\n  transition: all 0.2s;\n}\n.c-dots .active {\n  background-color: rgba(255, 255, 255, 0.586);\n  border: solid 3px white;\n  transition: all 0.2s;\n}", "",{"version":3,"sources":["webpack://src/components/dots.scss"],"names":[],"mappings":"AAAA;EACE,UAAA;EACA,kBAAA;EACA,kBAAA;EACA,aAAA;EACA,mBAAA;EACA,uBAAA;EACA,OAAA;EACA,QAAA;EACA,iBAAA;EACA,kBAAA;EACA,QAAA;AACF;AACE;EACE,YAAA;EACA,eAAA;EACA,cAAA;EACA,aAAA;EACA,mBAAA;EACA,eAAA;EACA,0CAAA;EACA,6BAAA;EACA,oBAAA;AACJ;AAEE;EACE,4CAAA;EACA,uBAAA;EACA,oBAAA;AAAJ","sourcesContent":[".c-dots {\n  z-index: 5;\n  position: absolute;\n  width: fit-content;\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  left: 0;\n  right: 0;\n  margin-left: auto;\n  margin-right: auto;\n  top: 85%;\n\n  &__dot {\n    margin: 1rem;\n    padding: .3rem;\n    height: .7rem;\n    width: .7rem;\n    border-radius: 2rem;\n    cursor: pointer;\n    background-color: rgba(255, 255, 255, 0.7);\n    border: solid 3px transparent;\n    transition: all .2s;\n  }\n\n  .active {\n    background-color: rgba(255, 255, 255, 0.586);\n    border: solid 3px white;\n    transition: all .2s;\n  }\n}"],"sourceRoot":""}]);
// Exports
/* harmony default export */ __webpack_exports__["default"] = (___CSS_LOADER_EXPORT___);


/***/ }),

/***/ "./node_modules/css-loader/dist/cjs.js!./node_modules/sass-loader/dist/cjs.js!./src/components/slide.scss":
/*!****************************************************************************************************************!*\
  !*** ./node_modules/css-loader/dist/cjs.js!./node_modules/sass-loader/dist/cjs.js!./src/components/slide.scss ***!
  \****************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../node_modules/css-loader/dist/runtime/api.js */ "./node_modules/css-loader/dist/runtime/api.js");
/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_0__);
// Imports

var ___CSS_LOADER_EXPORT___ = _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_0___default()(true);
// Module
___CSS_LOADER_EXPORT___.push([module.i, ".c-slide {\n  display: flex;\n  height: fit-content;\n  position: relative;\n  height: 85vh;\n}\n.c-slide * {\n  z-index: 30;\n}\n.c-slide__img {\n  width: 100%;\n  position: absolute;\n  z-index: 2;\n}\n\n@keyframes inFromLeft {\n  0% {\n    transform: translateX(100%);\n  }\n  100% {\n    transform: translateX(0);\n  }\n}", "",{"version":3,"sources":["webpack://src/components/slide.scss"],"names":[],"mappings":"AAAA;EACE,aAAA;EACA,mBAAA;EACA,kBAAA;EACA,YAAA;AACF;AAEE;EACE,WAAA;AAAJ;AAGE;EACE,WAAA;EACA,kBAAA;EACA,UAAA;AADJ;;AAKA;EACE;IACE,2BAAA;EAFF;EAKA;IACE,wBAAA;EAHF;AACF","sourcesContent":[".c-slide {\n  display: flex;\n  height: fit-content;\n  position: relative;\n  height: 85vh;\n  // animation: inFromLeft 3s infinite;\n\n  * {\n    z-index: 30;\n  }\n\n  &__img {\n    width: 100%;\n    position: absolute;\n    z-index: 2;\n  }\n}\n\n@keyframes inFromLeft {\n  0% {\n    transform: translateX(100%);\n  }\n\n  100% {\n    transform: translateX(0);\n  }\n}"],"sourceRoot":""}]);
// Exports
/* harmony default export */ __webpack_exports__["default"] = (___CSS_LOADER_EXPORT___);


/***/ }),

/***/ "./node_modules/css-loader/dist/runtime/api.js":
/*!*****************************************************!*\
  !*** ./node_modules/css-loader/dist/runtime/api.js ***!
  \*****************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


/*
  MIT License http://www.opensource.org/licenses/mit-license.php
  Author Tobias Koppers @sokra
*/
// css base code, injected by the css-loader
// eslint-disable-next-line func-names
module.exports = function (useSourceMap) {
  var list = []; // return the list of modules as css string

  list.toString = function toString() {
    return this.map(function (item) {
      var content = cssWithMappingToString(item, useSourceMap);

      if (item[2]) {
        return "@media ".concat(item[2], " {").concat(content, "}");
      }

      return content;
    }).join('');
  }; // import a list of modules into the list
  // eslint-disable-next-line func-names


  list.i = function (modules, mediaQuery, dedupe) {
    if (typeof modules === 'string') {
      // eslint-disable-next-line no-param-reassign
      modules = [[null, modules, '']];
    }

    var alreadyImportedModules = {};

    if (dedupe) {
      for (var i = 0; i < this.length; i++) {
        // eslint-disable-next-line prefer-destructuring
        var id = this[i][0];

        if (id != null) {
          alreadyImportedModules[id] = true;
        }
      }
    }

    for (var _i = 0; _i < modules.length; _i++) {
      var item = [].concat(modules[_i]);

      if (dedupe && alreadyImportedModules[item[0]]) {
        // eslint-disable-next-line no-continue
        continue;
      }

      if (mediaQuery) {
        if (!item[2]) {
          item[2] = mediaQuery;
        } else {
          item[2] = "".concat(mediaQuery, " and ").concat(item[2]);
        }
      }

      list.push(item);
    }
  };

  return list;
};

function cssWithMappingToString(item, useSourceMap) {
  var content = item[1] || ''; // eslint-disable-next-line prefer-destructuring

  var cssMapping = item[3];

  if (!cssMapping) {
    return content;
  }

  if (useSourceMap && typeof btoa === 'function') {
    var sourceMapping = toComment(cssMapping);
    var sourceURLs = cssMapping.sources.map(function (source) {
      return "/*# sourceURL=".concat(cssMapping.sourceRoot || '').concat(source, " */");
    });
    return [content].concat(sourceURLs).concat([sourceMapping]).join('\n');
  }

  return [content].join('\n');
} // Adapted from convert-source-map (MIT)


function toComment(sourceMap) {
  // eslint-disable-next-line no-undef
  var base64 = btoa(unescape(encodeURIComponent(JSON.stringify(sourceMap))));
  var data = "sourceMappingURL=data:application/json;charset=utf-8;base64,".concat(base64);
  return "/*# ".concat(data, " */");
}

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js":
/*!****************************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js ***!
  \****************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var isOldIE = function isOldIE() {
  var memo;
  return function memorize() {
    if (typeof memo === 'undefined') {
      // Test for IE <= 9 as proposed by Browserhacks
      // @see http://browserhacks.com/#hack-e71d8692f65334173fee715c222cb805
      // Tests for existence of standard globals is to allow style-loader
      // to operate correctly into non-standard environments
      // @see https://github.com/webpack-contrib/style-loader/issues/177
      memo = Boolean(window && document && document.all && !window.atob);
    }

    return memo;
  };
}();

var getTarget = function getTarget() {
  var memo = {};
  return function memorize(target) {
    if (typeof memo[target] === 'undefined') {
      var styleTarget = document.querySelector(target); // Special case to return head of iframe instead of iframe itself

      if (window.HTMLIFrameElement && styleTarget instanceof window.HTMLIFrameElement) {
        try {
          // This will throw an exception if access to iframe is blocked
          // due to cross-origin restrictions
          styleTarget = styleTarget.contentDocument.head;
        } catch (e) {
          // istanbul ignore next
          styleTarget = null;
        }
      }

      memo[target] = styleTarget;
    }

    return memo[target];
  };
}();

var stylesInDom = [];

function getIndexByIdentifier(identifier) {
  var result = -1;

  for (var i = 0; i < stylesInDom.length; i++) {
    if (stylesInDom[i].identifier === identifier) {
      result = i;
      break;
    }
  }

  return result;
}

function modulesToDom(list, options) {
  var idCountMap = {};
  var identifiers = [];

  for (var i = 0; i < list.length; i++) {
    var item = list[i];
    var id = options.base ? item[0] + options.base : item[0];
    var count = idCountMap[id] || 0;
    var identifier = "".concat(id, " ").concat(count);
    idCountMap[id] = count + 1;
    var index = getIndexByIdentifier(identifier);
    var obj = {
      css: item[1],
      media: item[2],
      sourceMap: item[3]
    };

    if (index !== -1) {
      stylesInDom[index].references++;
      stylesInDom[index].updater(obj);
    } else {
      stylesInDom.push({
        identifier: identifier,
        updater: addStyle(obj, options),
        references: 1
      });
    }

    identifiers.push(identifier);
  }

  return identifiers;
}

function insertStyleElement(options) {
  var style = document.createElement('style');
  var attributes = options.attributes || {};

  if (typeof attributes.nonce === 'undefined') {
    var nonce =  true ? __webpack_require__.nc : undefined;

    if (nonce) {
      attributes.nonce = nonce;
    }
  }

  Object.keys(attributes).forEach(function (key) {
    style.setAttribute(key, attributes[key]);
  });

  if (typeof options.insert === 'function') {
    options.insert(style);
  } else {
    var target = getTarget(options.insert || 'head');

    if (!target) {
      throw new Error("Couldn't find a style target. This probably means that the value for the 'insert' parameter is invalid.");
    }

    target.appendChild(style);
  }

  return style;
}

function removeStyleElement(style) {
  // istanbul ignore if
  if (style.parentNode === null) {
    return false;
  }

  style.parentNode.removeChild(style);
}
/* istanbul ignore next  */


var replaceText = function replaceText() {
  var textStore = [];
  return function replace(index, replacement) {
    textStore[index] = replacement;
    return textStore.filter(Boolean).join('\n');
  };
}();

function applyToSingletonTag(style, index, remove, obj) {
  var css = remove ? '' : obj.media ? "@media ".concat(obj.media, " {").concat(obj.css, "}") : obj.css; // For old IE

  /* istanbul ignore if  */

  if (style.styleSheet) {
    style.styleSheet.cssText = replaceText(index, css);
  } else {
    var cssNode = document.createTextNode(css);
    var childNodes = style.childNodes;

    if (childNodes[index]) {
      style.removeChild(childNodes[index]);
    }

    if (childNodes.length) {
      style.insertBefore(cssNode, childNodes[index]);
    } else {
      style.appendChild(cssNode);
    }
  }
}

function applyToTag(style, options, obj) {
  var css = obj.css;
  var media = obj.media;
  var sourceMap = obj.sourceMap;

  if (media) {
    style.setAttribute('media', media);
  } else {
    style.removeAttribute('media');
  }

  if (sourceMap && typeof btoa !== 'undefined') {
    css += "\n/*# sourceMappingURL=data:application/json;base64,".concat(btoa(unescape(encodeURIComponent(JSON.stringify(sourceMap)))), " */");
  } // For old IE

  /* istanbul ignore if  */


  if (style.styleSheet) {
    style.styleSheet.cssText = css;
  } else {
    while (style.firstChild) {
      style.removeChild(style.firstChild);
    }

    style.appendChild(document.createTextNode(css));
  }
}

var singleton = null;
var singletonCounter = 0;

function addStyle(obj, options) {
  var style;
  var update;
  var remove;

  if (options.singleton) {
    var styleIndex = singletonCounter++;
    style = singleton || (singleton = insertStyleElement(options));
    update = applyToSingletonTag.bind(null, style, styleIndex, false);
    remove = applyToSingletonTag.bind(null, style, styleIndex, true);
  } else {
    style = insertStyleElement(options);
    update = applyToTag.bind(null, style, options);

    remove = function remove() {
      removeStyleElement(style);
    };
  }

  update(obj);
  return function updateStyle(newObj) {
    if (newObj) {
      if (newObj.css === obj.css && newObj.media === obj.media && newObj.sourceMap === obj.sourceMap) {
        return;
      }

      update(obj = newObj);
    } else {
      remove();
    }
  };
}

module.exports = function (list, options) {
  options = options || {}; // Force single-tag solution on IE6-9, which has a hard limit on the # of <style>
  // tags it will allow on a page

  if (!options.singleton && typeof options.singleton !== 'boolean') {
    options.singleton = isOldIE();
  }

  list = list || [];
  var lastIdentifiers = modulesToDom(list, options);
  return function update(newList) {
    newList = newList || [];

    if (Object.prototype.toString.call(newList) !== '[object Array]') {
      return;
    }

    for (var i = 0; i < lastIdentifiers.length; i++) {
      var identifier = lastIdentifiers[i];
      var index = getIndexByIdentifier(identifier);
      stylesInDom[index].references--;
    }

    var newLastIdentifiers = modulesToDom(newList, options);

    for (var _i = 0; _i < lastIdentifiers.length; _i++) {
      var _identifier = lastIdentifiers[_i];

      var _index = getIndexByIdentifier(_identifier);

      if (stylesInDom[_index].references === 0) {
        stylesInDom[_index].updater();

        stylesInDom.splice(_index, 1);
      }
    }

    lastIdentifiers = newLastIdentifiers;
  };
};

/***/ }),

/***/ "./src/Carousel.tsx":
/*!**************************!*\
  !*** ./src/Carousel.tsx ***!
  \**************************/
/*! exports provided: Carousel */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Carousel", function() { return Carousel; });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _components_Arrows__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./components/Arrows */ "./src/components/Arrows.tsx");
/* harmony import */ var _components_Dots__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./components/Dots */ "./src/components/Dots.tsx");
/* harmony import */ var _carousel_scss__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./carousel.scss */ "./src/carousel.scss");
/* harmony import */ var _carousel_scss__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_carousel_scss__WEBPACK_IMPORTED_MODULE_3__);
function _slicedToArray(arr, i) { return _arrayWithHoles(arr) || _iterableToArrayLimit(arr, i) || _unsupportedIterableToArray(arr, i) || _nonIterableRest(); }

function _nonIterableRest() { throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); }

function _unsupportedIterableToArray(o, minLen) { if (!o) return; if (typeof o === "string") return _arrayLikeToArray(o, minLen); var n = Object.prototype.toString.call(o).slice(8, -1); if (n === "Object" && o.constructor) n = o.constructor.name; if (n === "Map" || n === "Set") return Array.from(o); if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen); }

function _arrayLikeToArray(arr, len) { if (len == null || len > arr.length) len = arr.length; for (var i = 0, arr2 = new Array(len); i < len; i++) { arr2[i] = arr[i]; } return arr2; }

function _iterableToArrayLimit(arr, i) { if (typeof Symbol === "undefined" || !(Symbol.iterator in Object(arr))) return; var _arr = []; var _n = true; var _d = false; var _e = undefined; try { for (var _i = arr[Symbol.iterator](), _s; !(_n = (_s = _i.next()).done); _n = true) { _arr.push(_s.value); if (i && _arr.length === i) break; } } catch (err) { _d = true; _e = err; } finally { try { if (!_n && _i["return"] != null) _i["return"](); } finally { if (_d) throw _e; } } return _arr; }

function _arrayWithHoles(arr) { if (Array.isArray(arr)) return arr; }

// @ts-ignore





var Carousel = function Carousel(_ref) {
  var _ref$size = _ref.size,
      size = _ref$size === void 0 ? 'large' : _ref$size,
      children = _ref.children,
      arrowsNav = _ref.arrowsNav,
      dotsNav = _ref.dotsNav,
      _ref$autoplay = _ref.autoplay,
      autoplay = _ref$autoplay === void 0 ? true : _ref$autoplay,
      _ref$autoplayInterval = _ref.autoplayIntervalTime,
      autoplayIntervalTime = _ref$autoplayInterval === void 0 ? 5000 : _ref$autoplayInterval,
      mainStyle = _ref.mainStyle,
      innerStyle = _ref.innerStyle,
      arrowsContainerStyle = _ref.arrowsContainerStyle,
      previousArrowStyle = _ref.previousArrowStyle,
      nextArrowStyle = _ref.nextArrowStyle,
      dotsContainerStyle = _ref.dotsContainerStyle,
      dotStyle = _ref.dotStyle;

  var _useState = Object(react__WEBPACK_IMPORTED_MODULE_0__["useState"])(0),
      _useState2 = _slicedToArray(_useState, 2),
      currSlideIdx = _useState2[0],
      setCurrSlideIdx = _useState2[1];

  if (children.length > 5) {
    children = children.slice(4); // cannot excede 5 dots on the navbar
  }

  Object(react__WEBPACK_IMPORTED_MODULE_0__["useEffect"])(function () {
    if (autoplay) {
      var timer = setTimeout(function () {
        return setCurrSlideIdx((currSlideIdx + 1) % children.length);
      }, autoplayIntervalTime);
      return function () {
        clearInterval(timer);
      };
    }
  }, [currSlideIdx]);
  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
    style: mainStyle,
    className: "c-carousel c-carousel--".concat(size)
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
    style: innerStyle,
    className: "c-carousel__inner"
  }, children[currSlideIdx]), arrowsNav && /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_components_Arrows__WEBPACK_IMPORTED_MODULE_1__["Arrows"], {
    amount: children.length,
    currSlideIdx: currSlideIdx,
    setCurrSlideIdx: setCurrSlideIdx,
    arrowsContainerStyle: arrowsContainerStyle,
    previousArrowStyle: previousArrowStyle,
    nextArrowStyle: nextArrowStyle
  }), dotsNav && /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_components_Dots__WEBPACK_IMPORTED_MODULE_2__["Dots"], {
    amount: children.length,
    currSlideIdx: currSlideIdx,
    setCurrSlideIdx: setCurrSlideIdx,
    dotsContainerStyle: dotsContainerStyle,
    dotStyle: dotStyle
  }));
};



/***/ }),

/***/ "./src/carousel.scss":
/*!***************************!*\
  !*** ./src/carousel.scss ***!
  \***************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var api = __webpack_require__(/*! ../node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js */ "./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js");
            var content = __webpack_require__(/*! !../node_modules/css-loader/dist/cjs.js!../node_modules/sass-loader/dist/cjs.js!./carousel.scss */ "./node_modules/css-loader/dist/cjs.js!./node_modules/sass-loader/dist/cjs.js!./src/carousel.scss");

            content = content.__esModule ? content.default : content;

            if (typeof content === 'string') {
              content = [[module.i, content, '']];
            }

var options = {};

options.insert = "head";
options.singleton = false;

var update = api(content, options);



module.exports = content.locals || {};

/***/ }),

/***/ "./src/components/Arrows.tsx":
/*!***********************************!*\
  !*** ./src/components/Arrows.tsx ***!
  \***********************************/
/*! exports provided: Arrows */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Arrows", function() { return Arrows; });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _arrows_scss__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./arrows.scss */ "./src/components/arrows.scss");
/* harmony import */ var _arrows_scss__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_arrows_scss__WEBPACK_IMPORTED_MODULE_1__);



var Arrows = function Arrows(_ref) {
  var amount = _ref.amount,
      currSlideIdx = _ref.currSlideIdx,
      setCurrSlideIdx = _ref.setCurrSlideIdx,
      arrowsContainerStyle = _ref.arrowsContainerStyle,
      previousArrowStyle = _ref.previousArrowStyle,
      nextArrowStyle = _ref.nextArrowStyle;

  var changeSlide = function changeSlide(direction) {
    switch (direction) {
      case 'previous':
        setCurrSlideIdx((currSlideIdx - 1 + amount) % amount);
        break;

      case 'next':
        setCurrSlideIdx((currSlideIdx + 1) % amount);
        break;
    }
  };

  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
    className: "c-arrows",
    style: arrowsContainerStyle
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
    style: previousArrowStyle,
    onClick: function onClick() {
      return changeSlide('previous');
    },
    className: "c-arrows__previous"
  }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
    style: nextArrowStyle,
    onClick: function onClick() {
      return changeSlide('next');
    },
    className: "c-arrows__next"
  }));
};



/***/ }),

/***/ "./src/components/Dots.tsx":
/*!*********************************!*\
  !*** ./src/components/Dots.tsx ***!
  \*********************************/
/*! exports provided: Dots */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Dots", function() { return Dots; });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _dots_scss__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./dots.scss */ "./src/components/dots.scss");
/* harmony import */ var _dots_scss__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_dots_scss__WEBPACK_IMPORTED_MODULE_1__);



var Dots = function Dots(_ref) {
  var amount = _ref.amount,
      currSlideIdx = _ref.currSlideIdx,
      setCurrSlideIdx = _ref.setCurrSlideIdx,
      dotsContainerStyle = _ref.dotsContainerStyle,
      dotStyle = _ref.dotStyle;
  var indexes = Array.from(Array(amount).keys());
  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
    className: "c-dots",
    style: dotsContainerStyle
  }, indexes.map(function (index) {
    return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
      style: dotStyle,
      key: index,
      className: currSlideIdx === index ? 'c-dots__dot active' : 'c-dots__dot',
      onClick: function onClick() {
        return setCurrSlideIdx(index);
      }
    });
  }));
};



/***/ }),

/***/ "./src/components/Slide.tsx":
/*!**********************************!*\
  !*** ./src/components/Slide.tsx ***!
  \**********************************/
/*! exports provided: Slide */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Slide", function() { return Slide; });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _slide_scss__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./slide.scss */ "./src/components/slide.scss");
/* harmony import */ var _slide_scss__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_slide_scss__WEBPACK_IMPORTED_MODULE_1__);



var Slide = function Slide(_ref) {
  var style = _ref.style,
      imageUrl = _ref.imageUrl,
      children = _ref.children;
  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
    className: "c-slide",
    style: style
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("img", {
    className: "c-slide__img",
    src: imageUrl
  }), children);
};



/***/ }),

/***/ "./src/components/arrows.scss":
/*!************************************!*\
  !*** ./src/components/arrows.scss ***!
  \************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var api = __webpack_require__(/*! ../../node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js */ "./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js");
            var content = __webpack_require__(/*! !../../node_modules/css-loader/dist/cjs.js!../../node_modules/sass-loader/dist/cjs.js!./arrows.scss */ "./node_modules/css-loader/dist/cjs.js!./node_modules/sass-loader/dist/cjs.js!./src/components/arrows.scss");

            content = content.__esModule ? content.default : content;

            if (typeof content === 'string') {
              content = [[module.i, content, '']];
            }

var options = {};

options.insert = "head";
options.singleton = false;

var update = api(content, options);



module.exports = content.locals || {};

/***/ }),

/***/ "./src/components/dots.scss":
/*!**********************************!*\
  !*** ./src/components/dots.scss ***!
  \**********************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var api = __webpack_require__(/*! ../../node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js */ "./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js");
            var content = __webpack_require__(/*! !../../node_modules/css-loader/dist/cjs.js!../../node_modules/sass-loader/dist/cjs.js!./dots.scss */ "./node_modules/css-loader/dist/cjs.js!./node_modules/sass-loader/dist/cjs.js!./src/components/dots.scss");

            content = content.__esModule ? content.default : content;

            if (typeof content === 'string') {
              content = [[module.i, content, '']];
            }

var options = {};

options.insert = "head";
options.singleton = false;

var update = api(content, options);



module.exports = content.locals || {};

/***/ }),

/***/ "./src/components/slide.scss":
/*!***********************************!*\
  !*** ./src/components/slide.scss ***!
  \***********************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var api = __webpack_require__(/*! ../../node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js */ "./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js");
            var content = __webpack_require__(/*! !../../node_modules/css-loader/dist/cjs.js!../../node_modules/sass-loader/dist/cjs.js!./slide.scss */ "./node_modules/css-loader/dist/cjs.js!./node_modules/sass-loader/dist/cjs.js!./src/components/slide.scss");

            content = content.__esModule ? content.default : content;

            if (typeof content === 'string') {
              content = [[module.i, content, '']];
            }

var options = {};

options.insert = "head";
options.singleton = false;

var update = api(content, options);



module.exports = content.locals || {};

/***/ }),

/***/ "./src/index.tsx":
/*!***********************!*\
  !*** ./src/index.tsx ***!
  \***********************/
/*! exports provided: Carousel, CarouselProps, Slide, SlideProps, Dots, DotsProps, Arrows, ArrowsProps */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _Carousel__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./Carousel */ "./src/Carousel.tsx");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "Carousel", function() { return _Carousel__WEBPACK_IMPORTED_MODULE_0__["Carousel"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "CarouselProps", function() { return _Carousel__WEBPACK_IMPORTED_MODULE_0__["CarouselProps"]; });

/* harmony import */ var _components_Slide__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./components/Slide */ "./src/components/Slide.tsx");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "Slide", function() { return _components_Slide__WEBPACK_IMPORTED_MODULE_1__["Slide"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "SlideProps", function() { return _components_Slide__WEBPACK_IMPORTED_MODULE_1__["SlideProps"]; });

/* harmony import */ var _components_Dots__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./components/Dots */ "./src/components/Dots.tsx");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "Dots", function() { return _components_Dots__WEBPACK_IMPORTED_MODULE_2__["Dots"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "DotsProps", function() { return _components_Dots__WEBPACK_IMPORTED_MODULE_2__["DotsProps"]; });

/* harmony import */ var _components_Arrows__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./components/Arrows */ "./src/components/Arrows.tsx");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "Arrows", function() { return _components_Arrows__WEBPACK_IMPORTED_MODULE_3__["Arrows"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "ArrowsProps", function() { return _components_Arrows__WEBPACK_IMPORTED_MODULE_3__["ArrowsProps"]; });






/***/ }),

/***/ "react":
/*!**************************************************************************************!*\
  !*** external {"commonjs":"react","commonjs2":"react","amd":"React","root":"React"} ***!
  \**************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = __WEBPACK_EXTERNAL_MODULE_react__;

/***/ })

/******/ });
});
//# sourceMappingURL=index.js.map