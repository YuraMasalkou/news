/******/ (() => { // webpackBootstrap
/******/ 	"use strict";
/******/ 	var __webpack_modules__ = ({

/***/ "./src/adaptiv.css":
/*!*************************!*\
  !*** ./src/adaptiv.css ***!
  \*************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
// extracted by mini-css-extract-plugin


/***/ }),

/***/ "./src/index.css":
/*!***********************!*\
  !*** ./src/index.css ***!
  \***********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
// extracted by mini-css-extract-plugin


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
/************************************************************************/
var __webpack_exports__ = {};
// This entry need to be wrapped in an IIFE because it need to be isolated against other modules in the chunk.
(() => {
/*!**********************!*\
  !*** ./src/index.js ***!
  \**********************/
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _src_index_css__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../src/index.css */ "./src/index.css");
/* harmony import */ var _src_adaptiv_css__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../src/adaptiv.css */ "./src/adaptiv.css");



window.onload = function () {

// скрипт кнопки
    document.addEventListener('click', function (e) {
        if (e.target.classList.contains('btn') || e.target.parentNode.classList.contains('btn') || e.target.parentNode.classList.contains('btn-content')) {

            document.getElementById('btnCont').style.display = "none";
            document.getElementById('loader').style.display = "block";
            document.getElementById('btn').disabled = true;
        }
    })
    // картинка
    document.addEventListener('click', function (e) {
        console.log(e.target.parentNode.childNodes[1].getAttribute('src'))
        if (e.target.classList.contains('article-image') || e.target.parentNode.classList.contains('article-image')) {

            document.querySelector('.slider-block-backgr').classList.add('block-active');

            if (e.target.getAttribute('src')) {
                let src = e.target.getAttribute('src');
                document.querySelector('.icons').setAttribute('src', src);
            } else {
                let src = e.target.parentNode.childNodes[1].getAttribute('src');
                document.querySelector('.icons').setAttribute('src', src);
            }


        }
        if (e.target.classList.contains('form-close') || e.target.classList.contains('slider-block-backgr')) {
            document.querySelector('.slider-block-backgr').classList.remove('block-active');

        }

    })

}
})();

/******/ })()
;
//# sourceMappingURL=main.js.map