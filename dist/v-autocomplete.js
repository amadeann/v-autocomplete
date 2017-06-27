(function webpackUniversalModuleDefinition(root, factory) {
	if(typeof exports === 'object' && typeof module === 'object')
		module.exports = factory();
	else if(typeof define === 'function' && define.amd)
		define([], factory);
	else if(typeof exports === 'object')
		exports["VAutocomplete"] = factory();
	else
		root["VAutocomplete"] = factory();
})(this, function() {
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
/******/ 	// identity function for calling harmony imports with the correct context
/******/ 	__webpack_require__.i = function(value) { return value; };
/******/
/******/ 	// define getter function for harmony exports
/******/ 	__webpack_require__.d = function(exports, name, getter) {
/******/ 		if(!__webpack_require__.o(exports, name)) {
/******/ 			Object.defineProperty(exports, name, {
/******/ 				configurable: false,
/******/ 				enumerable: true,
/******/ 				get: getter
/******/ 			});
/******/ 		}
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
/******/ 	__webpack_require__.p = ".";
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = 10);
/******/ })
/************************************************************************/
/******/ ([
/* 0 */
/***/ (function(module, exports) {

module.exports = function normalizeComponent (
  rawScriptExports,
  compiledTemplate,
  scopeId,
  cssModules
) {
  var esModule
  var scriptExports = rawScriptExports = rawScriptExports || {}

  // ES6 modules interop
  var type = typeof rawScriptExports.default
  if (type === 'object' || type === 'function') {
    esModule = rawScriptExports
    scriptExports = rawScriptExports.default
  }

  // Vue.extend constructor export interop
  var options = typeof scriptExports === 'function'
    ? scriptExports.options
    : scriptExports

  // render functions
  if (compiledTemplate) {
    options.render = compiledTemplate.render
    options.staticRenderFns = compiledTemplate.staticRenderFns
  }

  // scopedId
  if (scopeId) {
    options._scopeId = scopeId
  }

  // inject cssModules
  if (cssModules) {
    var computed = options.computed || (options.computed = {})
    Object.keys(cssModules).forEach(function (key) {
      var module = cssModules[key]
      computed[key] = function () { return module }
    })
  }

  return {
    esModule: esModule,
    exports: scriptExports,
    options: options
  }
}


/***/ }),
/* 1 */
/***/ (function(module, exports, __webpack_require__) {

// need to use require instead of import (changes from babel 5 to 6)
var Autocomplete = __webpack_require__(6);
Autocomplete.install = function (Vue) {
  return Vue.component(Autocomplete.name, Autocomplete);
};
Autocomplete.version = "1.2.0";

module.exports = Autocomplete;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyY1xcdi1hdXRvY29tcGxldGUuanMiXSwibmFtZXMiOlsiQXV0b2NvbXBsZXRlIiwicmVxdWlyZSIsImluc3RhbGwiLCJWdWUiLCJjb21wb25lbnQiLCJuYW1lIiwidmVyc2lvbiIsInByb2NjZXNzIiwiZW52IiwiVkVSU0lPTiIsIm1vZHVsZSIsImV4cG9ydHMiXSwibWFwcGluZ3MiOiJBQUFBO0FBQ0EsSUFBTUEsZUFBZUMsUUFBUSxvQkFBUixDQUFyQjtBQUNBRCxhQUFhRSxPQUFiLEdBQXVCO0FBQUEsU0FBT0MsSUFBSUMsU0FBSixDQUFjSixhQUFhSyxJQUEzQixFQUFpQ0wsWUFBakMsQ0FBUDtBQUFBLENBQXZCO0FBQ0FBLGFBQWFNLE9BQWIsR0FBdUJDLFNBQVNDLEdBQVQsQ0FBYUMsT0FBcEM7O0FBRUFDLE9BQU9DLE9BQVAsR0FBaUJYLFlBQWpCIiwiZmlsZSI6InYtYXV0b2NvbXBsZXRlLmpzIiwic291cmNlUm9vdCI6IkM6L1VzZXJzL0FtYWRlL0dpdC9hdWd1c3RhL2xhcmF2ZWwvcmVzb3VyY2VzL2Fzc2V0cy9tb2R1bGVzL3YtYXV0b2NvbXBsZXRlIiwic291cmNlc0NvbnRlbnQiOlsiLy8gbmVlZCB0byB1c2UgcmVxdWlyZSBpbnN0ZWFkIG9mIGltcG9ydCAoY2hhbmdlcyBmcm9tIGJhYmVsIDUgdG8gNilcclxuY29uc3QgQXV0b2NvbXBsZXRlID0gcmVxdWlyZSgnLi9BdXRvY29tcGxldGUudnVlJylcclxuQXV0b2NvbXBsZXRlLmluc3RhbGwgPSBWdWUgPT4gVnVlLmNvbXBvbmVudChBdXRvY29tcGxldGUubmFtZSwgQXV0b2NvbXBsZXRlKVxyXG5BdXRvY29tcGxldGUudmVyc2lvbiA9IHByb2NjZXNzLmVudi5WRVJTSU9OXHJcblxyXG5tb2R1bGUuZXhwb3J0cyA9IEF1dG9jb21wbGV0ZVxyXG4iXX0=

/***/ }),
/* 2 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__Item_vue__ = __webpack_require__(7);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__Item_vue___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0__Item_vue__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__utils_js__ = __webpack_require__(4);
//
//
//
//
//
//
//
//
//
//
//
//
//
//




/* harmony default export */ __webpack_exports__["default"] = ({
  name: 'v-autocomplete',
  props: {
    componentItem: { default: function _default() {
        return __WEBPACK_IMPORTED_MODULE_0__Item_vue___default.a;
      } },
    placeholder: String,
    minLen: { type: Number, default: __WEBPACK_IMPORTED_MODULE_1__utils_js__["a" /* default */].minLen },
    wait: { type: Number, default: __WEBPACK_IMPORTED_MODULE_1__utils_js__["a" /* default */].wait },
    value: null,
    getLabel: {
      type: Function,
      default: function _default(item) {
        return item;
      }
    },
    items: Array,
    autoSelectOneItem: { type: Boolean, default: true },
    inputClass: String
  },
  data: function data() {
    return {
      searchText: '',
      showList: false,
      internalItems: this.items || []
    };
  },

  methods: {
    inputChange: function inputChange() {
      this.showList = true;
      this.onSelectItem(null, 'inputChange');
      __WEBPACK_IMPORTED_MODULE_1__utils_js__["a" /* default */].callUpdateItems(this.searchText, this.updateItems);
      this.$emit('change', this.searchText);
    },
    updateItems: function updateItems() {
      this.$emit('update-items', this.searchText);
    },
    focus: function focus() {
      this.showList = true;
    },
    blur: function blur() {
      var _this = this;

      setTimeout(function () {
        return _this.showList = false;
      }, 200);
    },
    onClickItem: function onClickItem(item) {
      this.onSelectItem(item);
      this.$emit('item-clicked', item);
    },
    onSelectItem: function onSelectItem(item) {
      if (item) {
        this.internalItems = [item];
        this.searchText = this.getLabel(item);
        this.$emit('item-selected', item);
      } else {
        this.setItems(this.items);
      }
      this.$emit('input', item);
    },
    setItems: function setItems(items) {
      this.internalItems = items || [];
    },
    isSelecteValue: function isSelecteValue(value) {
      return 1 == this.internalItems.length && value == this.internalItems[0];
    }
  },
  created: function created() {
    __WEBPACK_IMPORTED_MODULE_1__utils_js__["a" /* default */].minLen = this.minLen;
    __WEBPACK_IMPORTED_MODULE_1__utils_js__["a" /* default */].wait = this.wait;
    this.onSelectItem(this.value);
  },

  watch: {
    items: function items(newValue) {
      this.setItems(newValue);
      var item = __WEBPACK_IMPORTED_MODULE_1__utils_js__["a" /* default */].findItem(this.items, this.searchText, this.autoSelectOneItem);
      if (item) {
        this.onSelectItem(item);
        this.showList = false;
      }
    },
    value: function value(newValue) {
      if (!this.isSelecteValue(newValue)) {
        this.onSelectItem(newValue);
      }
    }
  }
});
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyY1xcQXV0b2NvbXBsZXRlLnZ1ZSJdLCJuYW1lcyI6WyJJdGVtIiwidXRpbHMiLCJuYW1lIiwicHJvcHMiLCJjb21wb25lbnRJdGVtIiwiZGVmYXVsdCIsInBsYWNlaG9sZGVyIiwiU3RyaW5nIiwibWluTGVuIiwidHlwZSIsIk51bWJlciIsIndhaXQiLCJ2YWx1ZSIsImdldExhYmVsIiwiRnVuY3Rpb24iLCJpdGVtIiwiaXRlbXMiLCJBcnJheSIsImF1dG9TZWxlY3RPbmVJdGVtIiwiQm9vbGVhbiIsImlucHV0Q2xhc3MiLCJkYXRhIiwic2VhcmNoVGV4dCIsInNob3dMaXN0IiwiaW50ZXJuYWxJdGVtcyIsIm1ldGhvZHMiLCJpbnB1dENoYW5nZSIsIm9uU2VsZWN0SXRlbSIsImNhbGxVcGRhdGVJdGVtcyIsInVwZGF0ZUl0ZW1zIiwiJGVtaXQiLCJmb2N1cyIsImJsdXIiLCJzZXRUaW1lb3V0Iiwib25DbGlja0l0ZW0iLCJzZXRJdGVtcyIsImlzU2VsZWN0ZVZhbHVlIiwibGVuZ3RoIiwiY3JlYXRlZCIsIndhdGNoIiwibmV3VmFsdWUiLCJmaW5kSXRlbSJdLCJtYXBwaW5ncyI6IkFBQUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQSxPQUFPQSxJQUFQLE1BQWlCLFlBQWpCO0FBQ0EsT0FBT0MsS0FBUCxNQUFrQixZQUFsQjs7QUFFQSxlQUFlO0FBQ2JDLFFBQU0sZ0JBRE87QUFFYkMsU0FBTztBQUNMQyxtQkFBZSxFQUFFQyxTQUFTO0FBQUEsZUFBTUwsSUFBTjtBQUFBLE9BQVgsRUFEVjtBQUVMTSxpQkFBYUMsTUFGUjtBQUdMQyxZQUFRLEVBQUVDLE1BQU1DLE1BQVIsRUFBZ0JMLFNBQVNKLE1BQU1PLE1BQS9CLEVBSEg7QUFJTEcsVUFBTSxFQUFFRixNQUFNQyxNQUFSLEVBQWdCTCxTQUFTSixNQUFNVSxJQUEvQixFQUpEO0FBS0xDLFdBQU8sSUFMRjtBQU1MQyxj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YUFBS2IsWUFBTCxDQUFrQmEsUUFBbEI7QUFDRDtBQUNGO0FBYkk7QUF6RU0sQ0FBZiIsImZpbGUiOiJBdXRvY29tcGxldGUudnVlIiwic291cmNlUm9vdCI6IkM6L1VzZXJzL0FtYWRlL0dpdC9hdWd1c3RhL2xhcmF2ZWwvcmVzb3VyY2VzL2Fzc2V0cy9tb2R1bGVzL3YtYXV0b2NvbXBsZXRlIiwic291cmNlc0NvbnRlbnQiOlsiLy9cbi8vXG4vL1xuLy9cbi8vXG4vL1xuLy9cbi8vXG4vL1xuLy9cbi8vXG4vL1xuLy9cbi8vXG5cclxuaW1wb3J0IEl0ZW0gZnJvbSAnLi9JdGVtLnZ1ZSdcclxuaW1wb3J0IHV0aWxzIGZyb20gJy4vdXRpbHMuanMnXHJcblxyXG5leHBvcnQgZGVmYXVsdCB7XHJcbiAgbmFtZTogJ3YtYXV0b2NvbXBsZXRlJyxcclxuICBwcm9wczoge1xyXG4gICAgY29tcG9uZW50SXRlbTogeyBkZWZhdWx0OiAoKSA9PiBJdGVtIH0sXHJcbiAgICBwbGFjZWhvbGRlcjogU3RyaW5nLFxyXG4gICAgbWluTGVuOiB7IHR5cGU6IE51bWJlciwgZGVmYXVsdDogdXRpbHMubWluTGVuIH0sXHJcbiAgICB3YWl0OiB7IHR5cGU6IE51bWJlciwgZGVmYXVsdDogdXRpbHMud2FpdCB9LFxyXG4gICAgdmFsdWU6IG51bGwsXHJcbiAgICBnZXRMYWJlbDoge1xyXG4gICAgICB0eXBlOiBGdW5jdGlvbixcclxuICAgICAgZGVmYXVsdDogaXRlbSA9PiBpdGVtXHJcbiAgICB9LFxyXG4gICAgaXRlbXM6IEFycmF5LFxyXG4gICAgYXV0b1NlbGVjdE9uZUl0ZW06IHsgdHlwZTogQm9vbGVhbiwgZGVmYXVsdDogdHJ1ZSB9LFxyXG4gICAgaW5wdXRDbGFzczogU3RyaW5nXHJcbiAgfSxcclxuICBkYXRhICgpIHtcclxuICAgIHJldHVybiB7XHJcbiAgICAgIHNlYXJjaFRleHQ6ICcnLFxyXG4gICAgICBzaG93TGlzdDogZmFsc2UsXHJcbiAgICAgIGludGVybmFsSXRlbXM6IHRoaXMuaXRlbXMgfHwgW11cclxuICAgIH1cclxuICB9LFxyXG4gIG1ldGhvZHM6IHtcclxuICAgIGlucHV0Q2hhbmdlICgpIHtcclxuICAgICAgdGhpcy5zaG93TGlzdCA9IHRydWVcclxuICAgICAgdGhpcy5vblNlbGVjdEl0ZW0obnVsbCwgJ2lucHV0Q2hhbmdlJylcclxuICAgICAgdXRpbHMuY2FsbFVwZGF0ZUl0ZW1zKHRoaXMuc2VhcmNoVGV4dCwgdGhpcy51cGRhdGVJdGVtcylcclxuICAgICAgdGhpcy4kZW1pdCgnY2hhbmdlJywgdGhpcy5zZWFyY2hUZXh0KVxyXG4gICAgfSxcclxuXHJcbiAgICB1cGRhdGVJdGVtcyAoKSB7XHJcbiAgICAgIHRoaXMuJGVtaXQoJ3VwZGF0ZS1pdGVtcycsIHRoaXMuc2VhcmNoVGV4dClcclxuICAgIH0sXHJcblxyXG4gICAgZm9jdXMgKCkge1xyXG4gICAgICB0aGlzLnNob3dMaXN0ID0gdHJ1ZVxyXG4gICAgfSxcclxuXHJcbiAgICBibHVyICgpIHtcclxuICAgICAgc2V0VGltZW91dCggKCkgPT4gdGhpcy5zaG93TGlzdCA9IGZhbHNlLCAyMDApXHJcbiAgICB9LFxyXG5cclxuICAgIG9uQ2xpY2tJdGVtKGl0ZW0pIHtcclxuICAgICAgdGhpcy5vblNlbGVjdEl0ZW0oaXRlbSlcclxuICAgICAgdGhpcy4kZW1pdCgnaXRlbS1jbGlja2VkJywgaXRlbSlcclxuICAgIH0sXHJcblxyXG4gICAgb25TZWxlY3RJdGVtIChpdGVtKSB7XHJcbiAgICAgIGlmIChpdGVtKSB7XHJcbiAgICAgICAgdGhpcy5pbnRlcm5hbEl0ZW1zID0gW2l0ZW1dXHJcbiAgICAgICAgdGhpcy5zZWFyY2hUZXh0ID0gdGhpcy5nZXRMYWJlbChpdGVtKVxyXG4gICAgICAgIHRoaXMuJGVtaXQoJ2l0ZW0tc2VsZWN0ZWQnLCBpdGVtKVxyXG4gICAgICB9IGVsc2Uge1xyXG4gICAgICAgIHRoaXMuc2V0SXRlbXModGhpcy5pdGVtcylcclxuICAgICAgfVxyXG4gICAgICB0aGlzLiRlbWl0KCdpbnB1dCcsIGl0ZW0pXHJcbiAgICB9LFxyXG5cclxuICAgIHNldEl0ZW1zIChpdGVtcykge1xyXG4gICAgICB0aGlzLmludGVybmFsSXRlbXMgPSBpdGVtcyB8fCBbXVxyXG4gICAgfSxcclxuXHJcbiAgICBpc1NlbGVjdGVWYWx1ZSAodmFsdWUpIHtcclxuICAgICAgcmV0dXJuIDEgPT0gdGhpcy5pbnRlcm5hbEl0ZW1zLmxlbmd0aCAmJiB2YWx1ZSA9PSB0aGlzLmludGVybmFsSXRlbXNbMF1cclxuICAgIH1cclxuXHJcbiAgfSxcclxuICBjcmVhdGVkICgpIHtcclxuICAgIHV0aWxzLm1pbkxlbiA9IHRoaXMubWluTGVuXHJcbiAgICB1dGlscy53YWl0ID0gdGhpcy53YWl0XHJcbiAgICB0aGlzLm9uU2VsZWN0SXRlbSh0aGlzLnZhbHVlKVxyXG4gIH0sXHJcbiAgd2F0Y2g6IHtcclxuICAgIGl0ZW1zIChuZXdWYWx1ZSkge1xyXG4gICAgICB0aGlzLnNldEl0ZW1zKG5ld1ZhbHVlKVxyXG4gICAgICBsZXQgaXRlbSA9IHV0aWxzLmZpbmRJdGVtKHRoaXMuaXRlbXMsIHRoaXMuc2VhcmNoVGV4dCwgdGhpcy5hdXRvU2VsZWN0T25lSXRlbSlcclxuICAgICAgaWYgKGl0ZW0pIHtcclxuICAgICAgICB0aGlzLm9uU2VsZWN0SXRlbShpdGVtKVxyXG4gICAgICAgIHRoaXMuc2hvd0xpc3QgPSBmYWxzZVxyXG4gICAgICB9XHJcbiAgICB9LFxyXG4gICAgdmFsdWUgKG5ld1ZhbHVlKSB7XHJcbiAgICAgIGlmICghdGhpcy5pc1NlbGVjdGVWYWx1ZShuZXdWYWx1ZSkgKSB7XHJcbiAgICAgICAgdGhpcy5vblNlbGVjdEl0ZW0obmV3VmFsdWUpXHJcbiAgICAgIH1cclxuICAgIH1cclxuICB9XHJcbn1cclxuIl19

/***/ }),
/* 3 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
//
//
//
//

/* harmony default export */ __webpack_exports__["default"] = ({
  props: {
    item: { required: true }
  }
});
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyY1xcSXRlbS52dWUiXSwibmFtZXMiOlsicHJvcHMiLCJpdGVtIiwicmVxdWlyZWQiXSwibWFwcGluZ3MiOiJBQUFBO0FBQ0E7QUFDQTtBQUNBOztBQUVBLGVBQWU7QUFDYkEsU0FBTztBQUNMQyxVQUFNLEVBQUVDLFVBQVUsSUFBWjtBQUREO0FBRE0sQ0FBZiIsImZpbGUiOiJJdGVtLnZ1ZSIsInNvdXJjZVJvb3QiOiJDOi9Vc2Vycy9BbWFkZS9HaXQvYXVndXN0YS9sYXJhdmVsL3Jlc291cmNlcy9hc3NldHMvbW9kdWxlcy92LWF1dG9jb21wbGV0ZSIsInNvdXJjZXNDb250ZW50IjpbIi8vXG4vL1xuLy9cbi8vXG5cclxuZXhwb3J0IGRlZmF1bHQge1xyXG4gIHByb3BzOiB7XHJcbiAgICBpdGVtOiB7IHJlcXVpcmVkOiB0cnVlIH1cclxuICB9XHJcbn1cclxuIl19

/***/ }),
/* 4 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony default export */ __webpack_exports__["a"] = ({
  minLen: 3,
  wait: 500,
  timeout: null,

  isUpdateItems: function isUpdateItems(text) {
    if (text.length > this.minLen) {
      return true;
    }
  },
  callUpdateItems: function callUpdateItems(text, cb) {
    clearTimeout(this.timeout);
    if (this.isUpdateItems(text)) {
      this.timeout = setTimeout(cb, this.wait);
    }
  },
  findItem: function findItem(items, text, autoSelectOneResult) {
    if (!text) return;
    if (autoSelectOneResult && items.length == 1) {
      return items[0];
    }
  }
});
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyY1xcdXRpbHMuanMiXSwibmFtZXMiOlsibWluTGVuIiwid2FpdCIsInRpbWVvdXQiLCJpc1VwZGF0ZUl0ZW1zIiwidGV4dCIsImxlbmd0aCIsImNhbGxVcGRhdGVJdGVtcyIsImNiIiwiY2xlYXJUaW1lb3V0Iiwic2V0VGltZW91dCIsImZpbmRJdGVtIiwiaXRlbXMiLCJhdXRvU2VsZWN0T25lUmVzdWx0Il0sIm1hcHBpbmdzIjoiQUFBQSxlQUFlO0FBQ2JBLFVBQVEsQ0FESztBQUViQyxRQUFNLEdBRk87QUFHYkMsV0FBUyxJQUhJOztBQUtiQyxlQUxhLHlCQUtFQyxJQUxGLEVBS1E7QUFDbkIsUUFBSUEsS0FBS0MsTUFBTCxHQUFjLEtBQUtMLE1BQXZCLEVBQStCO0FBQzdCLGFBQU8sSUFBUDtBQUNEO0FBQ0YsR0FUWTtBQVdiTSxpQkFYYSwyQkFXSUYsSUFYSixFQVdVRyxFQVhWLEVBV2M7QUFDekJDLGlCQUFhLEtBQUtOLE9BQWxCO0FBQ0EsUUFBSSxLQUFLQyxhQUFMLENBQW1CQyxJQUFuQixDQUFKLEVBQThCO0FBQzVCLFdBQUtGLE9BQUwsR0FBZU8sV0FBV0YsRUFBWCxFQUFlLEtBQUtOLElBQXBCLENBQWY7QUFDRDtBQUNGLEdBaEJZO0FBa0JiUyxVQWxCYSxvQkFrQkhDLEtBbEJHLEVBa0JJUCxJQWxCSixFQWtCVVEsbUJBbEJWLEVBa0IrQjtBQUMxQyxRQUFJLENBQUNSLElBQUwsRUFBVztBQUNYLFFBQUlRLHVCQUF1QkQsTUFBTU4sTUFBTixJQUFnQixDQUEzQyxFQUE4QztBQUM1QyxhQUFPTSxNQUFNLENBQU4sQ0FBUDtBQUNEO0FBQ0Y7QUF2QlksQ0FBZiIsImZpbGUiOiJ1dGlscy5qcyIsInNvdXJjZVJvb3QiOiJDOi9Vc2Vycy9BbWFkZS9HaXQvYXVndXN0YS9sYXJhdmVsL3Jlc291cmNlcy9hc3NldHMvbW9kdWxlcy92LWF1dG9jb21wbGV0ZSIsInNvdXJjZXNDb250ZW50IjpbImV4cG9ydCBkZWZhdWx0IHtcclxuICBtaW5MZW46IDMsXHJcbiAgd2FpdDogNTAwLFxyXG4gIHRpbWVvdXQ6IG51bGwsXHJcblxyXG4gIGlzVXBkYXRlSXRlbXMgKHRleHQpIHtcclxuICAgIGlmICh0ZXh0Lmxlbmd0aCA+IHRoaXMubWluTGVuKSB7XHJcbiAgICAgIHJldHVybiB0cnVlXHJcbiAgICB9XHJcbiAgfSxcclxuXHJcbiAgY2FsbFVwZGF0ZUl0ZW1zICh0ZXh0LCBjYikge1xyXG4gICAgY2xlYXJUaW1lb3V0KHRoaXMudGltZW91dClcclxuICAgIGlmICh0aGlzLmlzVXBkYXRlSXRlbXModGV4dCkpIHtcclxuICAgICAgdGhpcy50aW1lb3V0ID0gc2V0VGltZW91dChjYiwgdGhpcy53YWl0KVxyXG4gICAgfVxyXG4gIH0sXHJcblxyXG4gIGZpbmRJdGVtIChpdGVtcywgdGV4dCwgYXV0b1NlbGVjdE9uZVJlc3VsdCkge1xyXG4gICAgaWYgKCF0ZXh0KSByZXR1cm5cclxuICAgIGlmIChhdXRvU2VsZWN0T25lUmVzdWx0ICYmIGl0ZW1zLmxlbmd0aCA9PSAxKSB7XHJcbiAgICAgIHJldHVybiBpdGVtc1swXVxyXG4gICAgfVxyXG4gIH1cclxuXHJcbn1cclxuIl19

/***/ }),
/* 5 */
/***/ (function(module, exports) {

// removed by extract-text-webpack-plugin

/***/ }),
/* 6 */
/***/ (function(module, exports, __webpack_require__) {


/* styles */
__webpack_require__(5)

var Component = __webpack_require__(0)(
  /* script */
  __webpack_require__(2),
  /* template */
  __webpack_require__(8),
  /* scopeId */
  null,
  /* cssModules */
  null
)

module.exports = Component.exports


/***/ }),
/* 7 */
/***/ (function(module, exports, __webpack_require__) {

var Component = __webpack_require__(0)(
  /* script */
  __webpack_require__(3),
  /* template */
  __webpack_require__(9),
  /* scopeId */
  null,
  /* cssModules */
  null
)

module.exports = Component.exports


/***/ }),
/* 8 */
/***/ (function(module, exports) {

module.exports={render:function (){var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;
  return _c('div', {
    staticClass: "v-autocomplete"
  }, [_c('div', {
    staticClass: "v-autocomplete-input-group",
    class: {
      'v-autocomplete-selected': _vm.value
    }
  }, [_c('input', {
    directives: [{
      name: "model",
      rawName: "v-model",
      value: (_vm.searchText),
      expression: "searchText"
    }],
    staticClass: "v-autocomplete-input",
    class: _vm.inputClass,
    attrs: {
      "type": "search",
      "placeholder": _vm.placeholder
    },
    domProps: {
      "value": (_vm.searchText)
    },
    on: {
      "blur": _vm.blur,
      "focus": _vm.focus,
      "input": [function($event) {
        if ($event.target.composing) { return; }
        _vm.searchText = $event.target.value
      }, _vm.inputChange]
    }
  })]), _vm._v(" "), (_vm.showList && _vm.internalItems.length) ? _c('div', {
    staticClass: "v-autocomplete-list"
  }, _vm._l((_vm.internalItems), function(item) {
    return _c('div', {
      staticClass: "v-autocomplete-list-item",
      on: {
        "click": function($event) {
          _vm.onClickItem(item)
        }
      }
    }, [_c(_vm.componentItem, {
      tag: "div",
      attrs: {
        "item": item
      }
    })])
  })) : _vm._e()])
},staticRenderFns: []}

/***/ }),
/* 9 */
/***/ (function(module, exports) {

module.exports={render:function (){var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;
  return _c('div', [_vm._v(_vm._s(_vm.item))])
},staticRenderFns: []}

/***/ }),
/* 10 */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(1);


/***/ })
/******/ ]);
});