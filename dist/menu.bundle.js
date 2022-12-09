/******/ (() => { // webpackBootstrap
/******/ 	"use strict";
/******/ 	var __webpack_modules__ = ({

/***/ "./src/hawaiian.png":
/*!**************************!*\
  !*** ./src/hawaiian.png ***!
  \**************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

module.exports = __webpack_require__.p + "3b0088f8a1bb012d9fc8.png";

/***/ }),

/***/ "./src/margherita.png":
/*!****************************!*\
  !*** ./src/margherita.png ***!
  \****************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

module.exports = __webpack_require__.p + "8224e3b0231fec328b00.png";

/***/ }),

/***/ "./src/mushroom.png":
/*!**************************!*\
  !*** ./src/mushroom.png ***!
  \**************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

module.exports = __webpack_require__.p + "9d3d3a67fa19eacc104e.png";

/***/ }),

/***/ "./src/neopolitan.png":
/*!****************************!*\
  !*** ./src/neopolitan.png ***!
  \****************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

module.exports = __webpack_require__.p + "7044a1ecc1b1ee894da6.png";

/***/ }),

/***/ "./src/pepperoni.png":
/*!***************************!*\
  !*** ./src/pepperoni.png ***!
  \***************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

module.exports = __webpack_require__.p + "5807c23c76e339db4477.png";

/***/ }),

/***/ "./src/seafood.png":
/*!*************************!*\
  !*** ./src/seafood.png ***!
  \*************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

module.exports = __webpack_require__.p + "a701b52641730a00c9ed.png";

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
/******/ 			// no module.id needed
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
/************************************************************************/
var __webpack_exports__ = {};
// This entry need to be wrapped in an IIFE because it need to be isolated against other modules in the chunk.
(() => {
/*!*********************!*\
  !*** ./src/menu.js ***!
  \*********************/
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ generateMenu)
/* harmony export */ });
/* harmony import */ var _pepperoni_png__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./pepperoni.png */ "./src/pepperoni.png");
/* harmony import */ var _mushroom_png__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./mushroom.png */ "./src/mushroom.png");
/* harmony import */ var _seafood_png__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./seafood.png */ "./src/seafood.png");
/* harmony import */ var _hawaiian_png__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./hawaiian.png */ "./src/hawaiian.png");
/* harmony import */ var _margherita_png__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./margherita.png */ "./src/margherita.png");
/* harmony import */ var _neopolitan_png__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./neopolitan.png */ "./src/neopolitan.png");
// https://cdn4.vectorstock.com/i/1000x1000/58/63/set-of-pizza-and-hand-vector-10175863.jpg







function generateMenu() {
    const menu = document.createElement("div");
    menu.className = "menu";

    const pepperoni = new MenuItem("Pepperoni", "pepperoni slices, mozarella cheese, permasan cheese, tomato sauce", _pepperoni_png__WEBPACK_IMPORTED_MODULE_0__, "$9.90");    
    const mushroom = new MenuItem("Mushroom", "mushroom, mozarella cheese, tomato sauce, paprika, basil", _mushroom_png__WEBPACK_IMPORTED_MODULE_1__, "$8.90");
    const seafood = new MenuItem("Seafood", "shrimp, anchovy fillets, provolone cheese, mozarella cheese, tomato sauce, basil", _seafood_png__WEBPACK_IMPORTED_MODULE_2__, "$10.90");
    const hawaiian = new MenuItem("Hawaiian", "pineapple, ham, mozarella cheese, tomato sauce", _hawaiian_png__WEBPACK_IMPORTED_MODULE_3__, "$7.90");
    const margherita = new MenuItem("Margherita", "mozarella cheese, tomato sauce, basil", _margherita_png__WEBPACK_IMPORTED_MODULE_4__, "$6.90");
    const neopolitan = new MenuItem("Neopolitan", "buffalo mozarella cheese, tomato sauce, olive, basil", _neopolitan_png__WEBPACK_IMPORTED_MODULE_5__, "$7.90");

    const menuItems = [pepperoni, mushroom, seafood, hawaiian, margherita, neopolitan];
    menuItems.forEach(key => {
        menu.appendChild(key.generateMenuItem());
    });

    document.querySelector(".content").appendChild(menu)
};

class MenuItem {
    constructor(name, description, imgSrc, price){
        this.name = name;
        this.description = description;
        this.imgSrc = imgSrc;
        this.price = price;
    }

    generateMenuItem() {
        const menuItem = document.createElement("div");
        menuItem.className = "menu-item";
        const name = document.createElement("div");
        name.className = "name";
        name.innerText = this.name;
        const description = document.createElement("div");
        description.className = "description";
        description.innerText = this.description;
        const img = document.createElement("img");
        img.src = this.imgSrc;
        const price = document.createElement("div");
        price.className = "price";
        price.innerText = this.price;

        const args = [name, description, img, price];
        args.forEach(key => {
            menuItem.appendChild(key);
        });

        return menuItem;
    }
}
})();

/******/ })()
;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibWVudS5idW5kbGUuanMiLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O1VBQUE7VUFDQTs7VUFFQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTs7VUFFQTtVQUNBOztVQUVBO1VBQ0E7VUFDQTs7Ozs7V0N0QkE7V0FDQTtXQUNBO1dBQ0E7V0FDQSx5Q0FBeUMsd0NBQXdDO1dBQ2pGO1dBQ0E7V0FDQTs7Ozs7V0NQQTtXQUNBO1dBQ0E7V0FDQTtXQUNBLEdBQUc7V0FDSDtXQUNBO1dBQ0EsQ0FBQzs7Ozs7V0NQRDs7Ozs7V0NBQTtXQUNBO1dBQ0E7V0FDQSx1REFBdUQsaUJBQWlCO1dBQ3hFO1dBQ0EsZ0RBQWdELGFBQWE7V0FDN0Q7Ozs7O1dDTkE7V0FDQTtXQUNBO1dBQ0E7V0FDQTtXQUNBO1dBQ0E7V0FDQTtXQUNBO1dBQ0E7V0FDQTtXQUNBO1dBQ0E7V0FDQTtXQUNBO1dBQ0E7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FDZkE7QUFDd0M7QUFDRjtBQUNGO0FBQ0U7QUFDSTtBQUNBOztBQUUzQjtBQUNmO0FBQ0E7O0FBRUEscUhBQXFILDJDQUFTO0FBQzlILDBHQUEwRywwQ0FBUTtBQUNsSCxnSUFBZ0kseUNBQU87QUFDdkksZ0dBQWdHLDBDQUFRO0FBQ3hHLDJGQUEyRiw0Q0FBVTtBQUNyRywwR0FBMEcsNENBQVU7O0FBRXBIO0FBQ0E7QUFDQTtBQUNBLEtBQUs7O0FBRUw7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBLFNBQVM7O0FBRVQ7QUFDQTtBQUNBLEMiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9yZXN0YXVyYW50LXBhZ2Uvd2VicGFjay9ib290c3RyYXAiLCJ3ZWJwYWNrOi8vcmVzdGF1cmFudC1wYWdlL3dlYnBhY2svcnVudGltZS9kZWZpbmUgcHJvcGVydHkgZ2V0dGVycyIsIndlYnBhY2s6Ly9yZXN0YXVyYW50LXBhZ2Uvd2VicGFjay9ydW50aW1lL2dsb2JhbCIsIndlYnBhY2s6Ly9yZXN0YXVyYW50LXBhZ2Uvd2VicGFjay9ydW50aW1lL2hhc093blByb3BlcnR5IHNob3J0aGFuZCIsIndlYnBhY2s6Ly9yZXN0YXVyYW50LXBhZ2Uvd2VicGFjay9ydW50aW1lL21ha2UgbmFtZXNwYWNlIG9iamVjdCIsIndlYnBhY2s6Ly9yZXN0YXVyYW50LXBhZ2Uvd2VicGFjay9ydW50aW1lL3B1YmxpY1BhdGgiLCJ3ZWJwYWNrOi8vcmVzdGF1cmFudC1wYWdlLy4vc3JjL21lbnUuanMiXSwic291cmNlc0NvbnRlbnQiOlsiLy8gVGhlIG1vZHVsZSBjYWNoZVxudmFyIF9fd2VicGFja19tb2R1bGVfY2FjaGVfXyA9IHt9O1xuXG4vLyBUaGUgcmVxdWlyZSBmdW5jdGlvblxuZnVuY3Rpb24gX193ZWJwYWNrX3JlcXVpcmVfXyhtb2R1bGVJZCkge1xuXHQvLyBDaGVjayBpZiBtb2R1bGUgaXMgaW4gY2FjaGVcblx0dmFyIGNhY2hlZE1vZHVsZSA9IF9fd2VicGFja19tb2R1bGVfY2FjaGVfX1ttb2R1bGVJZF07XG5cdGlmIChjYWNoZWRNb2R1bGUgIT09IHVuZGVmaW5lZCkge1xuXHRcdHJldHVybiBjYWNoZWRNb2R1bGUuZXhwb3J0cztcblx0fVxuXHQvLyBDcmVhdGUgYSBuZXcgbW9kdWxlIChhbmQgcHV0IGl0IGludG8gdGhlIGNhY2hlKVxuXHR2YXIgbW9kdWxlID0gX193ZWJwYWNrX21vZHVsZV9jYWNoZV9fW21vZHVsZUlkXSA9IHtcblx0XHQvLyBubyBtb2R1bGUuaWQgbmVlZGVkXG5cdFx0Ly8gbm8gbW9kdWxlLmxvYWRlZCBuZWVkZWRcblx0XHRleHBvcnRzOiB7fVxuXHR9O1xuXG5cdC8vIEV4ZWN1dGUgdGhlIG1vZHVsZSBmdW5jdGlvblxuXHRfX3dlYnBhY2tfbW9kdWxlc19fW21vZHVsZUlkXShtb2R1bGUsIG1vZHVsZS5leHBvcnRzLCBfX3dlYnBhY2tfcmVxdWlyZV9fKTtcblxuXHQvLyBSZXR1cm4gdGhlIGV4cG9ydHMgb2YgdGhlIG1vZHVsZVxuXHRyZXR1cm4gbW9kdWxlLmV4cG9ydHM7XG59XG5cbiIsIi8vIGRlZmluZSBnZXR0ZXIgZnVuY3Rpb25zIGZvciBoYXJtb255IGV4cG9ydHNcbl9fd2VicGFja19yZXF1aXJlX18uZCA9IChleHBvcnRzLCBkZWZpbml0aW9uKSA9PiB7XG5cdGZvcih2YXIga2V5IGluIGRlZmluaXRpb24pIHtcblx0XHRpZihfX3dlYnBhY2tfcmVxdWlyZV9fLm8oZGVmaW5pdGlvbiwga2V5KSAmJiAhX193ZWJwYWNrX3JlcXVpcmVfXy5vKGV4cG9ydHMsIGtleSkpIHtcblx0XHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBrZXksIHsgZW51bWVyYWJsZTogdHJ1ZSwgZ2V0OiBkZWZpbml0aW9uW2tleV0gfSk7XG5cdFx0fVxuXHR9XG59OyIsIl9fd2VicGFja19yZXF1aXJlX18uZyA9IChmdW5jdGlvbigpIHtcblx0aWYgKHR5cGVvZiBnbG9iYWxUaGlzID09PSAnb2JqZWN0JykgcmV0dXJuIGdsb2JhbFRoaXM7XG5cdHRyeSB7XG5cdFx0cmV0dXJuIHRoaXMgfHwgbmV3IEZ1bmN0aW9uKCdyZXR1cm4gdGhpcycpKCk7XG5cdH0gY2F0Y2ggKGUpIHtcblx0XHRpZiAodHlwZW9mIHdpbmRvdyA9PT0gJ29iamVjdCcpIHJldHVybiB3aW5kb3c7XG5cdH1cbn0pKCk7IiwiX193ZWJwYWNrX3JlcXVpcmVfXy5vID0gKG9iaiwgcHJvcCkgPT4gKE9iamVjdC5wcm90b3R5cGUuaGFzT3duUHJvcGVydHkuY2FsbChvYmosIHByb3ApKSIsIi8vIGRlZmluZSBfX2VzTW9kdWxlIG9uIGV4cG9ydHNcbl9fd2VicGFja19yZXF1aXJlX18uciA9IChleHBvcnRzKSA9PiB7XG5cdGlmKHR5cGVvZiBTeW1ib2wgIT09ICd1bmRlZmluZWQnICYmIFN5bWJvbC50b1N0cmluZ1RhZykge1xuXHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBTeW1ib2wudG9TdHJpbmdUYWcsIHsgdmFsdWU6ICdNb2R1bGUnIH0pO1xuXHR9XG5cdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCAnX19lc01vZHVsZScsIHsgdmFsdWU6IHRydWUgfSk7XG59OyIsInZhciBzY3JpcHRVcmw7XG5pZiAoX193ZWJwYWNrX3JlcXVpcmVfXy5nLmltcG9ydFNjcmlwdHMpIHNjcmlwdFVybCA9IF9fd2VicGFja19yZXF1aXJlX18uZy5sb2NhdGlvbiArIFwiXCI7XG52YXIgZG9jdW1lbnQgPSBfX3dlYnBhY2tfcmVxdWlyZV9fLmcuZG9jdW1lbnQ7XG5pZiAoIXNjcmlwdFVybCAmJiBkb2N1bWVudCkge1xuXHRpZiAoZG9jdW1lbnQuY3VycmVudFNjcmlwdClcblx0XHRzY3JpcHRVcmwgPSBkb2N1bWVudC5jdXJyZW50U2NyaXB0LnNyY1xuXHRpZiAoIXNjcmlwdFVybCkge1xuXHRcdHZhciBzY3JpcHRzID0gZG9jdW1lbnQuZ2V0RWxlbWVudHNCeVRhZ05hbWUoXCJzY3JpcHRcIik7XG5cdFx0aWYoc2NyaXB0cy5sZW5ndGgpIHNjcmlwdFVybCA9IHNjcmlwdHNbc2NyaXB0cy5sZW5ndGggLSAxXS5zcmNcblx0fVxufVxuLy8gV2hlbiBzdXBwb3J0aW5nIGJyb3dzZXJzIHdoZXJlIGFuIGF1dG9tYXRpYyBwdWJsaWNQYXRoIGlzIG5vdCBzdXBwb3J0ZWQgeW91IG11c3Qgc3BlY2lmeSBhbiBvdXRwdXQucHVibGljUGF0aCBtYW51YWxseSB2aWEgY29uZmlndXJhdGlvblxuLy8gb3IgcGFzcyBhbiBlbXB0eSBzdHJpbmcgKFwiXCIpIGFuZCBzZXQgdGhlIF9fd2VicGFja19wdWJsaWNfcGF0aF9fIHZhcmlhYmxlIGZyb20geW91ciBjb2RlIHRvIHVzZSB5b3VyIG93biBsb2dpYy5cbmlmICghc2NyaXB0VXJsKSB0aHJvdyBuZXcgRXJyb3IoXCJBdXRvbWF0aWMgcHVibGljUGF0aCBpcyBub3Qgc3VwcG9ydGVkIGluIHRoaXMgYnJvd3NlclwiKTtcbnNjcmlwdFVybCA9IHNjcmlwdFVybC5yZXBsYWNlKC8jLiokLywgXCJcIikucmVwbGFjZSgvXFw/LiokLywgXCJcIikucmVwbGFjZSgvXFwvW15cXC9dKyQvLCBcIi9cIik7XG5fX3dlYnBhY2tfcmVxdWlyZV9fLnAgPSBzY3JpcHRVcmw7IiwiLy8gaHR0cHM6Ly9jZG40LnZlY3RvcnN0b2NrLmNvbS9pLzEwMDB4MTAwMC81OC82My9zZXQtb2YtcGl6emEtYW5kLWhhbmQtdmVjdG9yLTEwMTc1ODYzLmpwZ1xuaW1wb3J0IFBlcHBlcm9uaSBmcm9tIFwiLi9wZXBwZXJvbmkucG5nXCI7XG5pbXBvcnQgTXVzaHJvb20gZnJvbSBcIi4vbXVzaHJvb20ucG5nXCI7XG5pbXBvcnQgU2VhZm9vZCBmcm9tIFwiLi9zZWFmb29kLnBuZ1wiO1xuaW1wb3J0IEhhd2FpaWFuIGZyb20gXCIuL2hhd2FpaWFuLnBuZ1wiO1xuaW1wb3J0IE1hcmdoZXJpdGEgZnJvbSBcIi4vbWFyZ2hlcml0YS5wbmdcIjtcbmltcG9ydCBOZW9wb2xpdGFuIGZyb20gXCIuL25lb3BvbGl0YW4ucG5nXCI7XG5cbmV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIGdlbmVyYXRlTWVudSgpIHtcbiAgICBjb25zdCBtZW51ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImRpdlwiKTtcbiAgICBtZW51LmNsYXNzTmFtZSA9IFwibWVudVwiO1xuXG4gICAgY29uc3QgcGVwcGVyb25pID0gbmV3IE1lbnVJdGVtKFwiUGVwcGVyb25pXCIsIFwicGVwcGVyb25pIHNsaWNlcywgbW96YXJlbGxhIGNoZWVzZSwgcGVybWFzYW4gY2hlZXNlLCB0b21hdG8gc2F1Y2VcIiwgUGVwcGVyb25pLCBcIiQ5LjkwXCIpOyAgICBcbiAgICBjb25zdCBtdXNocm9vbSA9IG5ldyBNZW51SXRlbShcIk11c2hyb29tXCIsIFwibXVzaHJvb20sIG1vemFyZWxsYSBjaGVlc2UsIHRvbWF0byBzYXVjZSwgcGFwcmlrYSwgYmFzaWxcIiwgTXVzaHJvb20sIFwiJDguOTBcIik7XG4gICAgY29uc3Qgc2VhZm9vZCA9IG5ldyBNZW51SXRlbShcIlNlYWZvb2RcIiwgXCJzaHJpbXAsIGFuY2hvdnkgZmlsbGV0cywgcHJvdm9sb25lIGNoZWVzZSwgbW96YXJlbGxhIGNoZWVzZSwgdG9tYXRvIHNhdWNlLCBiYXNpbFwiLCBTZWFmb29kLCBcIiQxMC45MFwiKTtcbiAgICBjb25zdCBoYXdhaWlhbiA9IG5ldyBNZW51SXRlbShcIkhhd2FpaWFuXCIsIFwicGluZWFwcGxlLCBoYW0sIG1vemFyZWxsYSBjaGVlc2UsIHRvbWF0byBzYXVjZVwiLCBIYXdhaWlhbiwgXCIkNy45MFwiKTtcbiAgICBjb25zdCBtYXJnaGVyaXRhID0gbmV3IE1lbnVJdGVtKFwiTWFyZ2hlcml0YVwiLCBcIm1vemFyZWxsYSBjaGVlc2UsIHRvbWF0byBzYXVjZSwgYmFzaWxcIiwgTWFyZ2hlcml0YSwgXCIkNi45MFwiKTtcbiAgICBjb25zdCBuZW9wb2xpdGFuID0gbmV3IE1lbnVJdGVtKFwiTmVvcG9saXRhblwiLCBcImJ1ZmZhbG8gbW96YXJlbGxhIGNoZWVzZSwgdG9tYXRvIHNhdWNlLCBvbGl2ZSwgYmFzaWxcIiwgTmVvcG9saXRhbiwgXCIkNy45MFwiKTtcblxuICAgIGNvbnN0IG1lbnVJdGVtcyA9IFtwZXBwZXJvbmksIG11c2hyb29tLCBzZWFmb29kLCBoYXdhaWlhbiwgbWFyZ2hlcml0YSwgbmVvcG9saXRhbl07XG4gICAgbWVudUl0ZW1zLmZvckVhY2goa2V5ID0+IHtcbiAgICAgICAgbWVudS5hcHBlbmRDaGlsZChrZXkuZ2VuZXJhdGVNZW51SXRlbSgpKTtcbiAgICB9KTtcblxuICAgIGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCIuY29udGVudFwiKS5hcHBlbmRDaGlsZChtZW51KVxufTtcblxuY2xhc3MgTWVudUl0ZW0ge1xuICAgIGNvbnN0cnVjdG9yKG5hbWUsIGRlc2NyaXB0aW9uLCBpbWdTcmMsIHByaWNlKXtcbiAgICAgICAgdGhpcy5uYW1lID0gbmFtZTtcbiAgICAgICAgdGhpcy5kZXNjcmlwdGlvbiA9IGRlc2NyaXB0aW9uO1xuICAgICAgICB0aGlzLmltZ1NyYyA9IGltZ1NyYztcbiAgICAgICAgdGhpcy5wcmljZSA9IHByaWNlO1xuICAgIH1cblxuICAgIGdlbmVyYXRlTWVudUl0ZW0oKSB7XG4gICAgICAgIGNvbnN0IG1lbnVJdGVtID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImRpdlwiKTtcbiAgICAgICAgbWVudUl0ZW0uY2xhc3NOYW1lID0gXCJtZW51LWl0ZW1cIjtcbiAgICAgICAgY29uc3QgbmFtZSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJkaXZcIik7XG4gICAgICAgIG5hbWUuY2xhc3NOYW1lID0gXCJuYW1lXCI7XG4gICAgICAgIG5hbWUuaW5uZXJUZXh0ID0gdGhpcy5uYW1lO1xuICAgICAgICBjb25zdCBkZXNjcmlwdGlvbiA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJkaXZcIik7XG4gICAgICAgIGRlc2NyaXB0aW9uLmNsYXNzTmFtZSA9IFwiZGVzY3JpcHRpb25cIjtcbiAgICAgICAgZGVzY3JpcHRpb24uaW5uZXJUZXh0ID0gdGhpcy5kZXNjcmlwdGlvbjtcbiAgICAgICAgY29uc3QgaW1nID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImltZ1wiKTtcbiAgICAgICAgaW1nLnNyYyA9IHRoaXMuaW1nU3JjO1xuICAgICAgICBjb25zdCBwcmljZSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJkaXZcIik7XG4gICAgICAgIHByaWNlLmNsYXNzTmFtZSA9IFwicHJpY2VcIjtcbiAgICAgICAgcHJpY2UuaW5uZXJUZXh0ID0gdGhpcy5wcmljZTtcblxuICAgICAgICBjb25zdCBhcmdzID0gW25hbWUsIGRlc2NyaXB0aW9uLCBpbWcsIHByaWNlXTtcbiAgICAgICAgYXJncy5mb3JFYWNoKGtleSA9PiB7XG4gICAgICAgICAgICBtZW51SXRlbS5hcHBlbmRDaGlsZChrZXkpO1xuICAgICAgICB9KTtcblxuICAgICAgICByZXR1cm4gbWVudUl0ZW07XG4gICAgfVxufSJdLCJuYW1lcyI6W10sInNvdXJjZVJvb3QiOiIifQ==