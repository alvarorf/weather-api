/******/ (() => { // webpackBootstrap
/******/ 	"use strict";
/******/ 	var __webpack_modules__ = ({

/***/ "./src/dom.js":
/*!********************!*\
  !*** ./src/dom.js ***!
  \********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _logic__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./logic */ "./src/logic.js");
/* eslint-disable import/no-cycle */

/* eslint-enable import/no-cycle */

const displayData = (data, units) => {
  const giphy = document.getElementById('giphy');
  const icon = document.getElementById('icon');
  const description = document.getElementById('description');
  description.textContent = data.weather[0].description;
  _logic__WEBPACK_IMPORTED_MODULE_0__.getGiphy(description, giphy);
  icon.src = `https://openweathermap.org/img/wn/${data.weather[0].icon}@4x.png`;
  const temp = document.getElementById('temp');
  const wind = document.getElementById('wind');
  const hum = document.getElementById('hum');
  const pre = document.getElementById('pre');
  [temp.textContent, wind.textContent, hum.textContent, pre.textContent] = _logic__WEBPACK_IMPORTED_MODULE_0__.convertData(
    data, units,
  );
};

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ({ displayData });


/***/ }),

/***/ "./src/logic.js":
/*!**********************!*\
  !*** ./src/logic.js ***!
  \**********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "forecast": () => (/* binding */ forecast),
/* harmony export */   "convertData": () => (/* binding */ convertData),
/* harmony export */   "getGiphy": () => (/* binding */ getGiphy)
/* harmony export */ });
/* harmony import */ var _dom__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./dom */ "./src/dom.js");
/* eslint-disable import/no-cycle */

/* eslint-enable import/no-cycle */
const forecast = async (place, units) => {
  await fetch(
    `https://api.openweathermap.org/data/2.5/weather?q=${place}&units=${units}&lang=en&appid=b863a920259d022cf48f60daf142113b`,
  ).then(
    (response) => response.json(),
  ).then((res) => res).then((data) => _dom__WEBPACK_IMPORTED_MODULE_0__.displayData(data, units));
};

const convertData = (data, units) => {
  let tempd = ((data.main.temp_max + data.main.temp_min) / 2);
  let windd = Math.round(data.wind.speed * 100) / 100;
  const humd = Math.round(data.main.humidity * 100) / 100;
  const pre = data.main.pressure;
  if (units === 'metric') {
    tempd += ' °C';
    windd += ' meters/second';
  } else {
    tempd += ' °F';
    windd += ' miles/hour';
  }

  return [tempd, windd, humd, pre];
};

const getGiphy = async (search, giphy) => {
  try {
    const response = await fetch(`https://api.giphy.com/v1/gifs/translate?api_key=2EwOKoQXnNF8ez8G3i67obeO2o5TT7EN&s=${search}`, { mode: 'cors' });
    const weatherImgData = await response.json();
    giphy.src = weatherImgData.data.images.original.url;
    giphy.style.borderStyle = 'none';
  } catch (error) {
    giphy.src = '#';
  }
};




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
/************************************************************************/
var __webpack_exports__ = {};
// This entry need to be wrapped in an IIFE because it need to be isolated against other modules in the chunk.
(() => {
/*!**********************!*\
  !*** ./src/index.js ***!
  \**********************/
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _logic__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./logic */ "./src/logic.js");


const placev = document.createElement('input');
placev.id = 'place';
document.getElementById('enter-place').appendChild(placev);

const startP = () => {
  const units = document.getElementById('units').value;
  const icon = document.getElementById('icon');
  icon.src = './giphy.gif';
  const place = document.getElementById('place').value;
  _logic__WEBPACK_IMPORTED_MODULE_0__.forecast(place, units);
};

const button = document.getElementById('search');
button.addEventListener('click', () => startP());

})();

/******/ })()
;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly93ZWF0aGVyLWFwaS8uL3NyYy9kb20uanMiLCJ3ZWJwYWNrOi8vd2VhdGhlci1hcGkvLi9zcmMvbG9naWMuanMiLCJ3ZWJwYWNrOi8vd2VhdGhlci1hcGkvd2VicGFjay9ib290c3RyYXAiLCJ3ZWJwYWNrOi8vd2VhdGhlci1hcGkvd2VicGFjay9ydW50aW1lL2RlZmluZSBwcm9wZXJ0eSBnZXR0ZXJzIiwid2VicGFjazovL3dlYXRoZXItYXBpL3dlYnBhY2svcnVudGltZS9oYXNPd25Qcm9wZXJ0eSBzaG9ydGhhbmQiLCJ3ZWJwYWNrOi8vd2VhdGhlci1hcGkvd2VicGFjay9ydW50aW1lL21ha2UgbmFtZXNwYWNlIG9iamVjdCIsIndlYnBhY2s6Ly93ZWF0aGVyLWFwaS8uL3NyYy9pbmRleC5qcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7QUFBQTtBQUNpQztBQUNqQzs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsRUFBRSw0Q0FBYztBQUNoQixrREFBa0QscUJBQXFCO0FBQ3ZFO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsMkVBQTJFLCtDQUFpQjtBQUM1RjtBQUNBO0FBQ0E7O0FBRUEsaUVBQWUsQ0FBQyxjQUFjLEVBQUM7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQ3BCL0I7QUFDNkI7QUFDN0I7QUFDQTtBQUNBO0FBQ0EseURBQXlELE1BQU0sU0FBUyxNQUFNO0FBQzlFO0FBQ0E7QUFDQSxzQ0FBc0MsNkNBQWU7QUFDckQ7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLEdBQUc7QUFDSDtBQUNBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0EsdUhBQXVILE9BQU8sSUFBSSxlQUFlO0FBQ2pKO0FBQ0E7QUFDQTtBQUNBLEdBQUc7QUFDSDtBQUNBO0FBQ0E7O0FBRTJDOzs7Ozs7O1VDdEMzQztVQUNBOztVQUVBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBOztVQUVBO1VBQ0E7O1VBRUE7VUFDQTtVQUNBOzs7OztXQ3RCQTtXQUNBO1dBQ0E7V0FDQTtXQUNBLHdDQUF3Qyx5Q0FBeUM7V0FDakY7V0FDQTtXQUNBLEU7Ozs7O1dDUEEsd0Y7Ozs7O1dDQUE7V0FDQTtXQUNBO1dBQ0Esc0RBQXNELGtCQUFrQjtXQUN4RTtXQUNBLCtDQUErQyxjQUFjO1dBQzdELEU7Ozs7Ozs7Ozs7OztBQ05pQzs7QUFFakM7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxFQUFFLDRDQUFjO0FBQ2hCOztBQUVBO0FBQ0EiLCJmaWxlIjoibWFpbi5qcyIsInNvdXJjZXNDb250ZW50IjpbIi8qIGVzbGludC1kaXNhYmxlIGltcG9ydC9uby1jeWNsZSAqL1xuaW1wb3J0ICogYXMgbG9naWMgZnJvbSAnLi9sb2dpYyc7XG4vKiBlc2xpbnQtZW5hYmxlIGltcG9ydC9uby1jeWNsZSAqL1xuXG5jb25zdCBkaXNwbGF5RGF0YSA9IChkYXRhLCB1bml0cykgPT4ge1xuICBjb25zdCBnaXBoeSA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCdnaXBoeScpO1xuICBjb25zdCBpY29uID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ2ljb24nKTtcbiAgY29uc3QgZGVzY3JpcHRpb24gPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgnZGVzY3JpcHRpb24nKTtcbiAgZGVzY3JpcHRpb24udGV4dENvbnRlbnQgPSBkYXRhLndlYXRoZXJbMF0uZGVzY3JpcHRpb247XG4gIGxvZ2ljLmdldEdpcGh5KGRlc2NyaXB0aW9uLCBnaXBoeSk7XG4gIGljb24uc3JjID0gYGh0dHBzOi8vb3BlbndlYXRoZXJtYXAub3JnL2ltZy93bi8ke2RhdGEud2VhdGhlclswXS5pY29ufUA0eC5wbmdgO1xuICBjb25zdCB0ZW1wID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ3RlbXAnKTtcbiAgY29uc3Qgd2luZCA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCd3aW5kJyk7XG4gIGNvbnN0IGh1bSA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCdodW0nKTtcbiAgY29uc3QgcHJlID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ3ByZScpO1xuICBbdGVtcC50ZXh0Q29udGVudCwgd2luZC50ZXh0Q29udGVudCwgaHVtLnRleHRDb250ZW50LCBwcmUudGV4dENvbnRlbnRdID0gbG9naWMuY29udmVydERhdGEoXG4gICAgZGF0YSwgdW5pdHMsXG4gICk7XG59O1xuXG5leHBvcnQgZGVmYXVsdCB7IGRpc3BsYXlEYXRhIH07XG4iLCIvKiBlc2xpbnQtZGlzYWJsZSBpbXBvcnQvbm8tY3ljbGUgKi9cbmltcG9ydCAqIGFzIGRvbSBmcm9tICcuL2RvbSc7XG4vKiBlc2xpbnQtZW5hYmxlIGltcG9ydC9uby1jeWNsZSAqL1xuY29uc3QgZm9yZWNhc3QgPSBhc3luYyAocGxhY2UsIHVuaXRzKSA9PiB7XG4gIGF3YWl0IGZldGNoKFxuICAgIGBodHRwczovL2FwaS5vcGVud2VhdGhlcm1hcC5vcmcvZGF0YS8yLjUvd2VhdGhlcj9xPSR7cGxhY2V9JnVuaXRzPSR7dW5pdHN9Jmxhbmc9ZW4mYXBwaWQ9Yjg2M2E5MjAyNTlkMDIyY2Y0OGY2MGRhZjE0MjExM2JgLFxuICApLnRoZW4oXG4gICAgKHJlc3BvbnNlKSA9PiByZXNwb25zZS5qc29uKCksXG4gICkudGhlbigocmVzKSA9PiByZXMpLnRoZW4oKGRhdGEpID0+IGRvbS5kaXNwbGF5RGF0YShkYXRhLCB1bml0cykpO1xufTtcblxuY29uc3QgY29udmVydERhdGEgPSAoZGF0YSwgdW5pdHMpID0+IHtcbiAgbGV0IHRlbXBkID0gKChkYXRhLm1haW4udGVtcF9tYXggKyBkYXRhLm1haW4udGVtcF9taW4pIC8gMik7XG4gIGxldCB3aW5kZCA9IE1hdGgucm91bmQoZGF0YS53aW5kLnNwZWVkICogMTAwKSAvIDEwMDtcbiAgY29uc3QgaHVtZCA9IE1hdGgucm91bmQoZGF0YS5tYWluLmh1bWlkaXR5ICogMTAwKSAvIDEwMDtcbiAgY29uc3QgcHJlID0gZGF0YS5tYWluLnByZXNzdXJlO1xuICBpZiAodW5pdHMgPT09ICdtZXRyaWMnKSB7XG4gICAgdGVtcGQgKz0gJyDCsEMnO1xuICAgIHdpbmRkICs9ICcgbWV0ZXJzL3NlY29uZCc7XG4gIH0gZWxzZSB7XG4gICAgdGVtcGQgKz0gJyDCsEYnO1xuICAgIHdpbmRkICs9ICcgbWlsZXMvaG91cic7XG4gIH1cblxuICByZXR1cm4gW3RlbXBkLCB3aW5kZCwgaHVtZCwgcHJlXTtcbn07XG5cbmNvbnN0IGdldEdpcGh5ID0gYXN5bmMgKHNlYXJjaCwgZ2lwaHkpID0+IHtcbiAgdHJ5IHtcbiAgICBjb25zdCByZXNwb25zZSA9IGF3YWl0IGZldGNoKGBodHRwczovL2FwaS5naXBoeS5jb20vdjEvZ2lmcy90cmFuc2xhdGU/YXBpX2tleT0yRXdPS29RWG5ORjhlejhHM2k2N29iZU8ybzVUVDdFTiZzPSR7c2VhcmNofWAsIHsgbW9kZTogJ2NvcnMnIH0pO1xuICAgIGNvbnN0IHdlYXRoZXJJbWdEYXRhID0gYXdhaXQgcmVzcG9uc2UuanNvbigpO1xuICAgIGdpcGh5LnNyYyA9IHdlYXRoZXJJbWdEYXRhLmRhdGEuaW1hZ2VzLm9yaWdpbmFsLnVybDtcbiAgICBnaXBoeS5zdHlsZS5ib3JkZXJTdHlsZSA9ICdub25lJztcbiAgfSBjYXRjaCAoZXJyb3IpIHtcbiAgICBnaXBoeS5zcmMgPSAnIyc7XG4gIH1cbn07XG5cbmV4cG9ydCB7IGZvcmVjYXN0LCBjb252ZXJ0RGF0YSwgZ2V0R2lwaHkgfTtcbiIsIi8vIFRoZSBtb2R1bGUgY2FjaGVcbnZhciBfX3dlYnBhY2tfbW9kdWxlX2NhY2hlX18gPSB7fTtcblxuLy8gVGhlIHJlcXVpcmUgZnVuY3Rpb25cbmZ1bmN0aW9uIF9fd2VicGFja19yZXF1aXJlX18obW9kdWxlSWQpIHtcblx0Ly8gQ2hlY2sgaWYgbW9kdWxlIGlzIGluIGNhY2hlXG5cdHZhciBjYWNoZWRNb2R1bGUgPSBfX3dlYnBhY2tfbW9kdWxlX2NhY2hlX19bbW9kdWxlSWRdO1xuXHRpZiAoY2FjaGVkTW9kdWxlICE9PSB1bmRlZmluZWQpIHtcblx0XHRyZXR1cm4gY2FjaGVkTW9kdWxlLmV4cG9ydHM7XG5cdH1cblx0Ly8gQ3JlYXRlIGEgbmV3IG1vZHVsZSAoYW5kIHB1dCBpdCBpbnRvIHRoZSBjYWNoZSlcblx0dmFyIG1vZHVsZSA9IF9fd2VicGFja19tb2R1bGVfY2FjaGVfX1ttb2R1bGVJZF0gPSB7XG5cdFx0Ly8gbm8gbW9kdWxlLmlkIG5lZWRlZFxuXHRcdC8vIG5vIG1vZHVsZS5sb2FkZWQgbmVlZGVkXG5cdFx0ZXhwb3J0czoge31cblx0fTtcblxuXHQvLyBFeGVjdXRlIHRoZSBtb2R1bGUgZnVuY3Rpb25cblx0X193ZWJwYWNrX21vZHVsZXNfX1ttb2R1bGVJZF0obW9kdWxlLCBtb2R1bGUuZXhwb3J0cywgX193ZWJwYWNrX3JlcXVpcmVfXyk7XG5cblx0Ly8gUmV0dXJuIHRoZSBleHBvcnRzIG9mIHRoZSBtb2R1bGVcblx0cmV0dXJuIG1vZHVsZS5leHBvcnRzO1xufVxuXG4iLCIvLyBkZWZpbmUgZ2V0dGVyIGZ1bmN0aW9ucyBmb3IgaGFybW9ueSBleHBvcnRzXG5fX3dlYnBhY2tfcmVxdWlyZV9fLmQgPSAoZXhwb3J0cywgZGVmaW5pdGlvbikgPT4ge1xuXHRmb3IodmFyIGtleSBpbiBkZWZpbml0aW9uKSB7XG5cdFx0aWYoX193ZWJwYWNrX3JlcXVpcmVfXy5vKGRlZmluaXRpb24sIGtleSkgJiYgIV9fd2VicGFja19yZXF1aXJlX18ubyhleHBvcnRzLCBrZXkpKSB7XG5cdFx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywga2V5LCB7IGVudW1lcmFibGU6IHRydWUsIGdldDogZGVmaW5pdGlvbltrZXldIH0pO1xuXHRcdH1cblx0fVxufTsiLCJfX3dlYnBhY2tfcmVxdWlyZV9fLm8gPSAob2JqLCBwcm9wKSA9PiAoT2JqZWN0LnByb3RvdHlwZS5oYXNPd25Qcm9wZXJ0eS5jYWxsKG9iaiwgcHJvcCkpIiwiLy8gZGVmaW5lIF9fZXNNb2R1bGUgb24gZXhwb3J0c1xuX193ZWJwYWNrX3JlcXVpcmVfXy5yID0gKGV4cG9ydHMpID0+IHtcblx0aWYodHlwZW9mIFN5bWJvbCAhPT0gJ3VuZGVmaW5lZCcgJiYgU3ltYm9sLnRvU3RyaW5nVGFnKSB7XG5cdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIFN5bWJvbC50b1N0cmluZ1RhZywgeyB2YWx1ZTogJ01vZHVsZScgfSk7XG5cdH1cblx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsICdfX2VzTW9kdWxlJywgeyB2YWx1ZTogdHJ1ZSB9KTtcbn07IiwiaW1wb3J0ICogYXMgbG9naWMgZnJvbSAnLi9sb2dpYyc7XG5cbmNvbnN0IHBsYWNldiA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2lucHV0Jyk7XG5wbGFjZXYuaWQgPSAncGxhY2UnO1xuZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ2VudGVyLXBsYWNlJykuYXBwZW5kQ2hpbGQocGxhY2V2KTtcblxuY29uc3Qgc3RhcnRQID0gKCkgPT4ge1xuICBjb25zdCB1bml0cyA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCd1bml0cycpLnZhbHVlO1xuICBjb25zdCBpY29uID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ2ljb24nKTtcbiAgaWNvbi5zcmMgPSAnLi9naXBoeS5naWYnO1xuICBjb25zdCBwbGFjZSA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCdwbGFjZScpLnZhbHVlO1xuICBsb2dpYy5mb3JlY2FzdChwbGFjZSwgdW5pdHMpO1xufTtcblxuY29uc3QgYnV0dG9uID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ3NlYXJjaCcpO1xuYnV0dG9uLmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgKCkgPT4gc3RhcnRQKCkpO1xuIl0sInNvdXJjZVJvb3QiOiIifQ==