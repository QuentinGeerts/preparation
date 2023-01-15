/******/ (() => { // webpackBootstrap
/******/ 	"use strict";
/******/ 	var __webpack_modules__ = ({

/***/ "./src/docs/narrowing.ts":
/*!*******************************!*\
  !*** ./src/docs/narrowing.ts ***!
  \*******************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "TUser": () => (/* binding */ TUser),
/* harmony export */   "isDate": () => (/* binding */ isDate),
/* harmony export */   "isUser": () => (/* binding */ isUser),
/* harmony export */   "printId": () => (/* binding */ printId)
/* harmony export */ });
/**
 * Partie - Narrowing
 * ou comment réduire la liste des types disponibles
 */
let btn_inc = document.querySelector('#increment'); // Element | Null
let btn_inc2 = document.querySelector('#increment'); // Element
let btn_inc3 = document.querySelector('#increment'); // HTMLButtonElement
// 🪧 Attention pour btn_inc2 et btn_inc3, vous empêchez le querySelector de fonctionner correctement en cas de null
// Le mieux sera d'utiliser des conditions au lieu du narrowing '!' ou 'as'
// Autre exemple
let btn_dec = (event) => {
    event.preventDefault();
    const input = document.querySelector("#res"); // HTMLInputElement ou null
    if (input) {
        // HTMLInputElement
        // Premier élément du narrowing, j'ai éliminer le fait qu'il puisse être null
    }
    else {
        // null
    }
};
// Autre exemple (avec un id)
function printId(id) {
    if (id) {
        // string | number
        if (typeof id === "number") {
            console.log('id :>>', id); // Simulé, un algo de travail sur l'id, et enregistrement en db spécifique dans des fonctions
        }
        else {
            let tmpId = parseInt(id);
            console.log('id :>>', tmpId);
            // Traitement du cas number direct
        }
    }
    else {
        // null
        id = 42;
        console.log('id :>>', id);
    }
}
// ✏️ écrire l'exemple dans ./app.ts
// Autre exemple (double variable locale)
function exempleN(a, b) {
    if (a === b) {
        console.log(a); // ici il sera d'office en string
        // Le seul point commun entre a et b est string
    }
}
function exempleOperator(a) {
    // Exemple si a était un mouseEvent
    // MouseEvent étant un type TypeScript, il n'est pas reconnu par le typeof natif a JS! 
    // if (typeof a === "MouseEvent") { }
    if ("value" in a) {
        console.log(a); // value est une propriété de HTMLInputElement
    }
    else if ("toto" in a) {
        console.log(a); // Ne passera jamais
    }
    else {
        console.log(a); // MouseEvent
    }
}
// Autre cas
// Je veux définir obligatoirement un retour Date sur a
function isDate(a) {
    return a instanceof Date;
}
// ✏️ écrire l'exemple dans ./app.ts
// Cas plus concret
class TUser {
    constructor(name) { this.name = name; }
}
function isUser(a) {
    return a instanceof TUser;
}
// On aurait très bien pu mettre : boolean en retour de fonction
// Mais, dans la lecture de la doc au survol de la fonction,
// il est plus intéressant de savoir que le retour d'un booléen 
// sera sur un TUser et non d'un booléen
// ✏️ écrire l'exemple dans ./app.ts


/***/ }),

/***/ "./src/docs/types.ts":
/*!***************************!*\
  !*** ./src/docs/types.ts ***!
  \***************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "mesTypes": () => (/* binding */ mesTypes)
/* harmony export */ });
/**
 * Partie - Types
 */
const a = "Bonjour à tous";
const b = 42;
const c = true;
const d = null;
const e = ["Bonjour", "à", "tous"];
const f = [1, 2, 3, 4, 5];
const g = ["Hello", {}, [], 42, false];
const h = {};
const i = { firstname: 'Quentin', age: 26 };
const j = { hello: "Coucou" };
const k = new Date();
const l = () => { };
const m = () => { };
const n = (i, s, b) => ['a', 'b'];
// const o: HTMLSpanElement = new HTMLSpanElement();
// const p: Element = new Element();
let mesTypes = { a, b, c, d, e, f, g, h, i, j, k, l, m, n };
// Export grâce à module.exports, un objet lambda, qui contiendra toutes les variables
// Ce qui par la suite, dans notre app.ts, nous évitera des erreurs de nommage de variables déjà existantes


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
/*!********************!*\
  !*** ./src/app.ts ***!
  \********************/
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _docs_types__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./docs/types */ "./src/docs/types.ts");
/* harmony import */ var _docs_narrowing__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./docs/narrowing */ "./src/docs/narrowing.ts");


/**
 * Partie - Types
 */
console.warn("Types");
console.log('mesTypes.a :>> ', _docs_types__WEBPACK_IMPORTED_MODULE_0__.mesTypes.a);
console.log('mesTypes.b :>> ', _docs_types__WEBPACK_IMPORTED_MODULE_0__.mesTypes.b);
console.log('mesTypes.c :>> ', _docs_types__WEBPACK_IMPORTED_MODULE_0__.mesTypes.c);
console.log('mesTypes.d :>> ', _docs_types__WEBPACK_IMPORTED_MODULE_0__.mesTypes.d);
console.log('mesTypes.e :>> ', _docs_types__WEBPACK_IMPORTED_MODULE_0__.mesTypes.e);
console.log('mesTypes.f :>> ', _docs_types__WEBPACK_IMPORTED_MODULE_0__.mesTypes.f);
console.log('mesTypes.g :>> ', _docs_types__WEBPACK_IMPORTED_MODULE_0__.mesTypes.g);
console.log('mesTypes.h :>> ', _docs_types__WEBPACK_IMPORTED_MODULE_0__.mesTypes.h);
console.log('mesTypes.i :>> ', _docs_types__WEBPACK_IMPORTED_MODULE_0__.mesTypes.i);
console.log('mesTypes.j :>> ', _docs_types__WEBPACK_IMPORTED_MODULE_0__.mesTypes.j);
console.log('mesTypes.k :>> ', _docs_types__WEBPACK_IMPORTED_MODULE_0__.mesTypes.k);
console.log('mesTypes.l :>> ', _docs_types__WEBPACK_IMPORTED_MODULE_0__.mesTypes.l);
console.log('mesTypes.m :>> ', _docs_types__WEBPACK_IMPORTED_MODULE_0__.mesTypes.m);
console.log('mesTypes.n :>> ', _docs_types__WEBPACK_IMPORTED_MODULE_0__.mesTypes.n);
/**
 * Partie - Narrowing
 * ou comment réduire la liste des types disponibles
 */
console.warn("Narrowing");
(0,_docs_narrowing__WEBPACK_IMPORTED_MODULE_1__.printId)(12);
(0,_docs_narrowing__WEBPACK_IMPORTED_MODULE_1__.printId)('a');
(0,_docs_narrowing__WEBPACK_IMPORTED_MODULE_1__.printId)(null);
let birthDate = new Date('03/04/1996');
console.log('Date [03/04/1996]', (0,_docs_narrowing__WEBPACK_IMPORTED_MODULE_1__.isDate)(birthDate));
console.log('String [03/04/1996]', (0,_docs_narrowing__WEBPACK_IMPORTED_MODULE_1__.isDate)('03/04/1996'));
let user = new _docs_narrowing__WEBPACK_IMPORTED_MODULE_1__.TUser('Quentin');
console.log('isUser(user)', (0,_docs_narrowing__WEBPACK_IMPORTED_MODULE_1__.isUser)(user));
let y = (0,_docs_narrowing__WEBPACK_IMPORTED_MODULE_1__.isUser)('Toto');
console.log('y :>> ', y);

})();

/******/ })()
;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibWFpbi5qcyIsIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7OztBQUFBO0FBQ0E7QUFDQTtBQUNBO0FBQ0Esb0RBQW9EO0FBQ3BELHFEQUFxRDtBQUNyRCxxREFBcUQ7QUFDckQ7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLGtEQUFrRDtBQUNsRDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDTztBQUNQO0FBQ0E7QUFDQTtBQUNBLHVDQUF1QztBQUN2QztBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0Esd0JBQXdCO0FBQ3hCO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSx3QkFBd0I7QUFDeEI7QUFDQTtBQUNBLHdCQUF3QjtBQUN4QjtBQUNBO0FBQ0Esd0JBQXdCO0FBQ3hCO0FBQ0E7QUFDQTtBQUNBO0FBQ087QUFDUDtBQUNBO0FBQ0E7QUFDQTtBQUNPO0FBQ1Asd0JBQXdCO0FBQ3hCO0FBQ087QUFDUDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7Ozs7Ozs7Ozs7Ozs7O0FDL0VBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLHNCQUFzQjtBQUN0QjtBQUNBLFlBQVk7QUFDWixZQUFZO0FBQ1o7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ08saUJBQWlCO0FBQ3hCO0FBQ0E7Ozs7Ozs7VUNyQkE7VUFDQTs7VUFFQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTs7VUFFQTtVQUNBOztVQUVBO1VBQ0E7VUFDQTs7Ozs7V0N0QkE7V0FDQTtXQUNBO1dBQ0E7V0FDQSx5Q0FBeUMsd0NBQXdDO1dBQ2pGO1dBQ0E7V0FDQTs7Ozs7V0NQQTs7Ozs7V0NBQTtXQUNBO1dBQ0E7V0FDQSx1REFBdUQsaUJBQWlCO1dBQ3hFO1dBQ0EsZ0RBQWdELGFBQWE7V0FDN0Q7Ozs7Ozs7Ozs7Ozs7QUNOd0M7QUFDMEI7QUFDbEU7QUFDQTtBQUNBO0FBQ0E7QUFDQSwrQkFBK0IsbURBQVU7QUFDekMsK0JBQStCLG1EQUFVO0FBQ3pDLCtCQUErQixtREFBVTtBQUN6QywrQkFBK0IsbURBQVU7QUFDekMsK0JBQStCLG1EQUFVO0FBQ3pDLCtCQUErQixtREFBVTtBQUN6QywrQkFBK0IsbURBQVU7QUFDekMsK0JBQStCLG1EQUFVO0FBQ3pDLCtCQUErQixtREFBVTtBQUN6QywrQkFBK0IsbURBQVU7QUFDekMsK0JBQStCLG1EQUFVO0FBQ3pDLCtCQUErQixtREFBVTtBQUN6QywrQkFBK0IsbURBQVU7QUFDekMsK0JBQStCLG1EQUFVO0FBQ3pDO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSx3REFBTztBQUNQLHdEQUFPO0FBQ1Asd0RBQU87QUFDUDtBQUNBLGlDQUFpQyx1REFBTTtBQUN2QyxtQ0FBbUMsdURBQU07QUFDekMsZUFBZSxrREFBSztBQUNwQiw0QkFBNEIsdURBQU07QUFDbEMsUUFBUSx1REFBTTtBQUNkIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vbXktd2VicGFjay1wcm9qZWN0Ly4vc3JjL2RvY3MvbmFycm93aW5nLnRzIiwid2VicGFjazovL215LXdlYnBhY2stcHJvamVjdC8uL3NyYy9kb2NzL3R5cGVzLnRzIiwid2VicGFjazovL215LXdlYnBhY2stcHJvamVjdC93ZWJwYWNrL2Jvb3RzdHJhcCIsIndlYnBhY2s6Ly9teS13ZWJwYWNrLXByb2plY3Qvd2VicGFjay9ydW50aW1lL2RlZmluZSBwcm9wZXJ0eSBnZXR0ZXJzIiwid2VicGFjazovL215LXdlYnBhY2stcHJvamVjdC93ZWJwYWNrL3J1bnRpbWUvaGFzT3duUHJvcGVydHkgc2hvcnRoYW5kIiwid2VicGFjazovL215LXdlYnBhY2stcHJvamVjdC93ZWJwYWNrL3J1bnRpbWUvbWFrZSBuYW1lc3BhY2Ugb2JqZWN0Iiwid2VicGFjazovL215LXdlYnBhY2stcHJvamVjdC8uL3NyYy9hcHAudHMiXSwic291cmNlc0NvbnRlbnQiOlsiLyoqXHJcbiAqIFBhcnRpZSAtIE5hcnJvd2luZ1xyXG4gKiBvdSBjb21tZW50IHLDqWR1aXJlIGxhIGxpc3RlIGRlcyB0eXBlcyBkaXNwb25pYmxlc1xyXG4gKi9cclxubGV0IGJ0bl9pbmMgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcjaW5jcmVtZW50Jyk7IC8vIEVsZW1lbnQgfCBOdWxsXHJcbmxldCBidG5faW5jMiA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJyNpbmNyZW1lbnQnKTsgLy8gRWxlbWVudFxyXG5sZXQgYnRuX2luYzMgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcjaW5jcmVtZW50Jyk7IC8vIEhUTUxCdXR0b25FbGVtZW50XHJcbi8vIPCfqqcgQXR0ZW50aW9uIHBvdXIgYnRuX2luYzIgZXQgYnRuX2luYzMsIHZvdXMgZW1ww6pjaGV6IGxlIHF1ZXJ5U2VsZWN0b3IgZGUgZm9uY3Rpb25uZXIgY29ycmVjdGVtZW50IGVuIGNhcyBkZSBudWxsXHJcbi8vIExlIG1pZXV4IHNlcmEgZCd1dGlsaXNlciBkZXMgY29uZGl0aW9ucyBhdSBsaWV1IGR1IG5hcnJvd2luZyAnIScgb3UgJ2FzJ1xyXG4vLyBBdXRyZSBleGVtcGxlXHJcbmxldCBidG5fZGVjID0gKGV2ZW50KSA9PiB7XHJcbiAgICBldmVudC5wcmV2ZW50RGVmYXVsdCgpO1xyXG4gICAgY29uc3QgaW5wdXQgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwiI3Jlc1wiKTsgLy8gSFRNTElucHV0RWxlbWVudCBvdSBudWxsXHJcbiAgICBpZiAoaW5wdXQpIHtcclxuICAgICAgICAvLyBIVE1MSW5wdXRFbGVtZW50XHJcbiAgICAgICAgLy8gUHJlbWllciDDqWzDqW1lbnQgZHUgbmFycm93aW5nLCBqJ2FpIMOpbGltaW5lciBsZSBmYWl0IHF1J2lsIHB1aXNzZSDDqnRyZSBudWxsXHJcbiAgICB9XHJcbiAgICBlbHNlIHtcclxuICAgICAgICAvLyBudWxsXHJcbiAgICB9XHJcbn07XHJcbi8vIEF1dHJlIGV4ZW1wbGUgKGF2ZWMgdW4gaWQpXHJcbmV4cG9ydCBmdW5jdGlvbiBwcmludElkKGlkKSB7XHJcbiAgICBpZiAoaWQpIHtcclxuICAgICAgICAvLyBzdHJpbmcgfCBudW1iZXJcclxuICAgICAgICBpZiAodHlwZW9mIGlkID09PSBcIm51bWJlclwiKSB7XHJcbiAgICAgICAgICAgIGNvbnNvbGUubG9nKCdpZCA6Pj4nLCBpZCk7IC8vIFNpbXVsw6ksIHVuIGFsZ28gZGUgdHJhdmFpbCBzdXIgbCdpZCwgZXQgZW5yZWdpc3RyZW1lbnQgZW4gZGIgc3DDqWNpZmlxdWUgZGFucyBkZXMgZm9uY3Rpb25zXHJcbiAgICAgICAgfVxyXG4gICAgICAgIGVsc2Uge1xyXG4gICAgICAgICAgICBsZXQgdG1wSWQgPSBwYXJzZUludChpZCk7XHJcbiAgICAgICAgICAgIGNvbnNvbGUubG9nKCdpZCA6Pj4nLCB0bXBJZCk7XHJcbiAgICAgICAgICAgIC8vIFRyYWl0ZW1lbnQgZHUgY2FzIG51bWJlciBkaXJlY3RcclxuICAgICAgICB9XHJcbiAgICB9XHJcbiAgICBlbHNlIHtcclxuICAgICAgICAvLyBudWxsXHJcbiAgICAgICAgaWQgPSA0MjtcclxuICAgICAgICBjb25zb2xlLmxvZygnaWQgOj4+JywgaWQpO1xyXG4gICAgfVxyXG59XHJcbi8vIOKcj++4jyDDqWNyaXJlIGwnZXhlbXBsZSBkYW5zIC4vYXBwLnRzXHJcbi8vIEF1dHJlIGV4ZW1wbGUgKGRvdWJsZSB2YXJpYWJsZSBsb2NhbGUpXHJcbmZ1bmN0aW9uIGV4ZW1wbGVOKGEsIGIpIHtcclxuICAgIGlmIChhID09PSBiKSB7XHJcbiAgICAgICAgY29uc29sZS5sb2coYSk7IC8vIGljaSBpbCBzZXJhIGQnb2ZmaWNlIGVuIHN0cmluZ1xyXG4gICAgICAgIC8vIExlIHNldWwgcG9pbnQgY29tbXVuIGVudHJlIGEgZXQgYiBlc3Qgc3RyaW5nXHJcbiAgICB9XHJcbn1cclxuZnVuY3Rpb24gZXhlbXBsZU9wZXJhdG9yKGEpIHtcclxuICAgIC8vIEV4ZW1wbGUgc2kgYSDDqXRhaXQgdW4gbW91c2VFdmVudFxyXG4gICAgLy8gTW91c2VFdmVudCDDqXRhbnQgdW4gdHlwZSBUeXBlU2NyaXB0LCBpbCBuJ2VzdCBwYXMgcmVjb25udSBwYXIgbGUgdHlwZW9mIG5hdGlmIGEgSlMhIFxyXG4gICAgLy8gaWYgKHR5cGVvZiBhID09PSBcIk1vdXNlRXZlbnRcIikgeyB9XHJcbiAgICBpZiAoXCJ2YWx1ZVwiIGluIGEpIHtcclxuICAgICAgICBjb25zb2xlLmxvZyhhKTsgLy8gdmFsdWUgZXN0IHVuZSBwcm9wcmnDqXTDqSBkZSBIVE1MSW5wdXRFbGVtZW50XHJcbiAgICB9XHJcbiAgICBlbHNlIGlmIChcInRvdG9cIiBpbiBhKSB7XHJcbiAgICAgICAgY29uc29sZS5sb2coYSk7IC8vIE5lIHBhc3NlcmEgamFtYWlzXHJcbiAgICB9XHJcbiAgICBlbHNlIHtcclxuICAgICAgICBjb25zb2xlLmxvZyhhKTsgLy8gTW91c2VFdmVudFxyXG4gICAgfVxyXG59XHJcbi8vIEF1dHJlIGNhc1xyXG4vLyBKZSB2ZXV4IGTDqWZpbmlyIG9ibGlnYXRvaXJlbWVudCB1biByZXRvdXIgRGF0ZSBzdXIgYVxyXG5leHBvcnQgZnVuY3Rpb24gaXNEYXRlKGEpIHtcclxuICAgIHJldHVybiBhIGluc3RhbmNlb2YgRGF0ZTtcclxufVxyXG4vLyDinI/vuI8gw6ljcmlyZSBsJ2V4ZW1wbGUgZGFucyAuL2FwcC50c1xyXG4vLyBDYXMgcGx1cyBjb25jcmV0XHJcbmV4cG9ydCBjbGFzcyBUVXNlciB7XHJcbiAgICBjb25zdHJ1Y3RvcihuYW1lKSB7IHRoaXMubmFtZSA9IG5hbWU7IH1cclxufVxyXG5leHBvcnQgZnVuY3Rpb24gaXNVc2VyKGEpIHtcclxuICAgIHJldHVybiBhIGluc3RhbmNlb2YgVFVzZXI7XHJcbn1cclxuLy8gT24gYXVyYWl0IHRyw6hzIGJpZW4gcHUgbWV0dHJlIDogYm9vbGVhbiBlbiByZXRvdXIgZGUgZm9uY3Rpb25cclxuLy8gTWFpcywgZGFucyBsYSBsZWN0dXJlIGRlIGxhIGRvYyBhdSBzdXJ2b2wgZGUgbGEgZm9uY3Rpb24sXHJcbi8vIGlsIGVzdCBwbHVzIGludMOpcmVzc2FudCBkZSBzYXZvaXIgcXVlIGxlIHJldG91ciBkJ3VuIGJvb2zDqWVuIFxyXG4vLyBzZXJhIHN1ciB1biBUVXNlciBldCBub24gZCd1biBib29sw6llblxyXG4vLyDinI/vuI8gw6ljcmlyZSBsJ2V4ZW1wbGUgZGFucyAuL2FwcC50c1xyXG4iLCIvKipcclxuICogUGFydGllIC0gVHlwZXNcclxuICovXHJcbmNvbnN0IGEgPSBcIkJvbmpvdXIgw6AgdG91c1wiO1xyXG5jb25zdCBiID0gNDI7XHJcbmNvbnN0IGMgPSB0cnVlO1xyXG5jb25zdCBkID0gbnVsbDtcclxuY29uc3QgZSA9IFtcIkJvbmpvdXJcIiwgXCLDoFwiLCBcInRvdXNcIl07XHJcbmNvbnN0IGYgPSBbMSwgMiwgMywgNCwgNV07XHJcbmNvbnN0IGcgPSBbXCJIZWxsb1wiLCB7fSwgW10sIDQyLCBmYWxzZV07XHJcbmNvbnN0IGggPSB7fTtcclxuY29uc3QgaSA9IHsgZmlyc3RuYW1lOiAnUXVlbnRpbicsIGFnZTogMjYgfTtcclxuY29uc3QgaiA9IHsgaGVsbG86IFwiQ291Y291XCIgfTtcclxuY29uc3QgayA9IG5ldyBEYXRlKCk7XHJcbmNvbnN0IGwgPSAoKSA9PiB7IH07XHJcbmNvbnN0IG0gPSAoKSA9PiB7IH07XHJcbmNvbnN0IG4gPSAoaSwgcywgYikgPT4gWydhJywgJ2InXTtcclxuLy8gY29uc3QgbzogSFRNTFNwYW5FbGVtZW50ID0gbmV3IEhUTUxTcGFuRWxlbWVudCgpO1xyXG4vLyBjb25zdCBwOiBFbGVtZW50ID0gbmV3IEVsZW1lbnQoKTtcclxuZXhwb3J0IGxldCBtZXNUeXBlcyA9IHsgYSwgYiwgYywgZCwgZSwgZiwgZywgaCwgaSwgaiwgaywgbCwgbSwgbiB9O1xyXG4vLyBFeHBvcnQgZ3LDomNlIMOgIG1vZHVsZS5leHBvcnRzLCB1biBvYmpldCBsYW1iZGEsIHF1aSBjb250aWVuZHJhIHRvdXRlcyBsZXMgdmFyaWFibGVzXHJcbi8vIENlIHF1aSBwYXIgbGEgc3VpdGUsIGRhbnMgbm90cmUgYXBwLnRzLCBub3VzIMOpdml0ZXJhIGRlcyBlcnJldXJzIGRlIG5vbW1hZ2UgZGUgdmFyaWFibGVzIGTDqWrDoCBleGlzdGFudGVzXHJcbiIsIi8vIFRoZSBtb2R1bGUgY2FjaGVcbnZhciBfX3dlYnBhY2tfbW9kdWxlX2NhY2hlX18gPSB7fTtcblxuLy8gVGhlIHJlcXVpcmUgZnVuY3Rpb25cbmZ1bmN0aW9uIF9fd2VicGFja19yZXF1aXJlX18obW9kdWxlSWQpIHtcblx0Ly8gQ2hlY2sgaWYgbW9kdWxlIGlzIGluIGNhY2hlXG5cdHZhciBjYWNoZWRNb2R1bGUgPSBfX3dlYnBhY2tfbW9kdWxlX2NhY2hlX19bbW9kdWxlSWRdO1xuXHRpZiAoY2FjaGVkTW9kdWxlICE9PSB1bmRlZmluZWQpIHtcblx0XHRyZXR1cm4gY2FjaGVkTW9kdWxlLmV4cG9ydHM7XG5cdH1cblx0Ly8gQ3JlYXRlIGEgbmV3IG1vZHVsZSAoYW5kIHB1dCBpdCBpbnRvIHRoZSBjYWNoZSlcblx0dmFyIG1vZHVsZSA9IF9fd2VicGFja19tb2R1bGVfY2FjaGVfX1ttb2R1bGVJZF0gPSB7XG5cdFx0Ly8gbm8gbW9kdWxlLmlkIG5lZWRlZFxuXHRcdC8vIG5vIG1vZHVsZS5sb2FkZWQgbmVlZGVkXG5cdFx0ZXhwb3J0czoge31cblx0fTtcblxuXHQvLyBFeGVjdXRlIHRoZSBtb2R1bGUgZnVuY3Rpb25cblx0X193ZWJwYWNrX21vZHVsZXNfX1ttb2R1bGVJZF0obW9kdWxlLCBtb2R1bGUuZXhwb3J0cywgX193ZWJwYWNrX3JlcXVpcmVfXyk7XG5cblx0Ly8gUmV0dXJuIHRoZSBleHBvcnRzIG9mIHRoZSBtb2R1bGVcblx0cmV0dXJuIG1vZHVsZS5leHBvcnRzO1xufVxuXG4iLCIvLyBkZWZpbmUgZ2V0dGVyIGZ1bmN0aW9ucyBmb3IgaGFybW9ueSBleHBvcnRzXG5fX3dlYnBhY2tfcmVxdWlyZV9fLmQgPSAoZXhwb3J0cywgZGVmaW5pdGlvbikgPT4ge1xuXHRmb3IodmFyIGtleSBpbiBkZWZpbml0aW9uKSB7XG5cdFx0aWYoX193ZWJwYWNrX3JlcXVpcmVfXy5vKGRlZmluaXRpb24sIGtleSkgJiYgIV9fd2VicGFja19yZXF1aXJlX18ubyhleHBvcnRzLCBrZXkpKSB7XG5cdFx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywga2V5LCB7IGVudW1lcmFibGU6IHRydWUsIGdldDogZGVmaW5pdGlvbltrZXldIH0pO1xuXHRcdH1cblx0fVxufTsiLCJfX3dlYnBhY2tfcmVxdWlyZV9fLm8gPSAob2JqLCBwcm9wKSA9PiAoT2JqZWN0LnByb3RvdHlwZS5oYXNPd25Qcm9wZXJ0eS5jYWxsKG9iaiwgcHJvcCkpIiwiLy8gZGVmaW5lIF9fZXNNb2R1bGUgb24gZXhwb3J0c1xuX193ZWJwYWNrX3JlcXVpcmVfXy5yID0gKGV4cG9ydHMpID0+IHtcblx0aWYodHlwZW9mIFN5bWJvbCAhPT0gJ3VuZGVmaW5lZCcgJiYgU3ltYm9sLnRvU3RyaW5nVGFnKSB7XG5cdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIFN5bWJvbC50b1N0cmluZ1RhZywgeyB2YWx1ZTogJ01vZHVsZScgfSk7XG5cdH1cblx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsICdfX2VzTW9kdWxlJywgeyB2YWx1ZTogdHJ1ZSB9KTtcbn07IiwiaW1wb3J0IHsgbWVzVHlwZXMgfSBmcm9tIFwiLi9kb2NzL3R5cGVzXCI7XHJcbmltcG9ydCB7IHByaW50SWQsIGlzRGF0ZSwgaXNVc2VyLCBUVXNlciB9IGZyb20gXCIuL2RvY3MvbmFycm93aW5nXCI7XHJcbi8qKlxyXG4gKiBQYXJ0aWUgLSBUeXBlc1xyXG4gKi9cclxuY29uc29sZS53YXJuKFwiVHlwZXNcIik7XHJcbmNvbnNvbGUubG9nKCdtZXNUeXBlcy5hIDo+PiAnLCBtZXNUeXBlcy5hKTtcclxuY29uc29sZS5sb2coJ21lc1R5cGVzLmIgOj4+ICcsIG1lc1R5cGVzLmIpO1xyXG5jb25zb2xlLmxvZygnbWVzVHlwZXMuYyA6Pj4gJywgbWVzVHlwZXMuYyk7XHJcbmNvbnNvbGUubG9nKCdtZXNUeXBlcy5kIDo+PiAnLCBtZXNUeXBlcy5kKTtcclxuY29uc29sZS5sb2coJ21lc1R5cGVzLmUgOj4+ICcsIG1lc1R5cGVzLmUpO1xyXG5jb25zb2xlLmxvZygnbWVzVHlwZXMuZiA6Pj4gJywgbWVzVHlwZXMuZik7XHJcbmNvbnNvbGUubG9nKCdtZXNUeXBlcy5nIDo+PiAnLCBtZXNUeXBlcy5nKTtcclxuY29uc29sZS5sb2coJ21lc1R5cGVzLmggOj4+ICcsIG1lc1R5cGVzLmgpO1xyXG5jb25zb2xlLmxvZygnbWVzVHlwZXMuaSA6Pj4gJywgbWVzVHlwZXMuaSk7XHJcbmNvbnNvbGUubG9nKCdtZXNUeXBlcy5qIDo+PiAnLCBtZXNUeXBlcy5qKTtcclxuY29uc29sZS5sb2coJ21lc1R5cGVzLmsgOj4+ICcsIG1lc1R5cGVzLmspO1xyXG5jb25zb2xlLmxvZygnbWVzVHlwZXMubCA6Pj4gJywgbWVzVHlwZXMubCk7XHJcbmNvbnNvbGUubG9nKCdtZXNUeXBlcy5tIDo+PiAnLCBtZXNUeXBlcy5tKTtcclxuY29uc29sZS5sb2coJ21lc1R5cGVzLm4gOj4+ICcsIG1lc1R5cGVzLm4pO1xyXG4vKipcclxuICogUGFydGllIC0gTmFycm93aW5nXHJcbiAqIG91IGNvbW1lbnQgcsOpZHVpcmUgbGEgbGlzdGUgZGVzIHR5cGVzIGRpc3BvbmlibGVzXHJcbiAqL1xyXG5jb25zb2xlLndhcm4oXCJOYXJyb3dpbmdcIik7XHJcbnByaW50SWQoMTIpO1xyXG5wcmludElkKCdhJyk7XHJcbnByaW50SWQobnVsbCk7XHJcbmxldCBiaXJ0aERhdGUgPSBuZXcgRGF0ZSgnMDMvMDQvMTk5NicpO1xyXG5jb25zb2xlLmxvZygnRGF0ZSBbMDMvMDQvMTk5Nl0nLCBpc0RhdGUoYmlydGhEYXRlKSk7XHJcbmNvbnNvbGUubG9nKCdTdHJpbmcgWzAzLzA0LzE5OTZdJywgaXNEYXRlKCcwMy8wNC8xOTk2JykpO1xyXG5sZXQgdXNlciA9IG5ldyBUVXNlcignUXVlbnRpbicpO1xyXG5jb25zb2xlLmxvZygnaXNVc2VyKHVzZXIpJywgaXNVc2VyKHVzZXIpKTtcclxubGV0IHkgPSBpc1VzZXIoJ1RvdG8nKTtcclxuY29uc29sZS5sb2coJ3kgOj4+ICcsIHkpO1xyXG4iXSwibmFtZXMiOltdLCJzb3VyY2VSb290IjoiIn0=