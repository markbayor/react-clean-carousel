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
      _ref$arrowsNav = _ref.arrowsNav,
      arrowsNav = _ref$arrowsNav === void 0 ? true : _ref$arrowsNav,
      _ref$dotsNav = _ref.dotsNav,
      dotsNav = _ref$dotsNav === void 0 ? true : _ref$dotsNav,
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
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
// extracted by mini-css-extract-plugin


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
// @ts-ignore



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
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
// extracted by mini-css-extract-plugin


/***/ }),

/***/ "./src/components/dots.scss":
/*!**********************************!*\
  !*** ./src/components/dots.scss ***!
  \**********************************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
// extracted by mini-css-extract-plugin


/***/ }),

/***/ "./src/components/slide.scss":
/*!***********************************!*\
  !*** ./src/components/slide.scss ***!
  \***********************************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
// extracted by mini-css-extract-plugin


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