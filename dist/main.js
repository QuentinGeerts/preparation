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
 * Partie 1 - Types
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
 * Partie 2 - Narrowing
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
let admin = {
    lastName: 'Geerts',
    firstName: 'Quentin',
    roleId: 42
};
console.log('admin :>> ', admin);
let idTmpInt = 42;
let idTmpString = "42";
// let idTmpBoolean: Id = true; // Ne fonctionne pas
console.log('idTmpType :>> ', idTmpInt);
console.log('idTmpType :>> ', idTmpString);
let dateTmp = "03/04/1996";
console.log('dateTmp :>> ', dateTmp);

})();

/******/ })()
;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibWFpbi5qcyIsIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7OztBQUFBO0FBQ0E7QUFDQTtBQUNBO0FBQ0Esb0RBQW9EO0FBQ3BELHFEQUFxRDtBQUNyRCxxREFBcUQ7QUFDckQ7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLGtEQUFrRDtBQUNsRDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDTztBQUNQO0FBQ0E7QUFDQTtBQUNBLHVDQUF1QztBQUN2QztBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0Esd0JBQXdCO0FBQ3hCO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSx3QkFBd0I7QUFDeEI7QUFDQTtBQUNBLHdCQUF3QjtBQUN4QjtBQUNBO0FBQ0Esd0JBQXdCO0FBQ3hCO0FBQ0E7QUFDQTtBQUNBO0FBQ087QUFDUDtBQUNBO0FBQ0E7QUFDQTtBQUNPO0FBQ1Asd0JBQXdCO0FBQ3hCO0FBQ087QUFDUDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7Ozs7Ozs7Ozs7Ozs7O0FDL0VBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLHNCQUFzQjtBQUN0QjtBQUNBLFlBQVk7QUFDWixZQUFZO0FBQ1o7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ08saUJBQWlCO0FBQ3hCO0FBQ0E7Ozs7Ozs7VUNyQkE7VUFDQTs7VUFFQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTs7VUFFQTtVQUNBOztVQUVBO1VBQ0E7VUFDQTs7Ozs7V0N0QkE7V0FDQTtXQUNBO1dBQ0E7V0FDQSx5Q0FBeUMsd0NBQXdDO1dBQ2pGO1dBQ0E7V0FDQTs7Ozs7V0NQQTs7Ozs7V0NBQTtXQUNBO1dBQ0E7V0FDQSx1REFBdUQsaUJBQWlCO1dBQ3hFO1dBQ0EsZ0RBQWdELGFBQWE7V0FDN0Q7Ozs7Ozs7Ozs7Ozs7QUNOd0M7QUFDeEM7QUFDQTtBQUNBO0FBQ0E7QUFDQSwrQkFBK0IsbURBQVU7QUFDekMsK0JBQStCLG1EQUFVO0FBQ3pDLCtCQUErQixtREFBVTtBQUN6QywrQkFBK0IsbURBQVU7QUFDekMsK0JBQStCLG1EQUFVO0FBQ3pDLCtCQUErQixtREFBVTtBQUN6QywrQkFBK0IsbURBQVU7QUFDekMsK0JBQStCLG1EQUFVO0FBQ3pDLCtCQUErQixtREFBVTtBQUN6QywrQkFBK0IsbURBQVU7QUFDekMsK0JBQStCLG1EQUFVO0FBQ3pDLCtCQUErQixtREFBVTtBQUN6QywrQkFBK0IsbURBQVU7QUFDekMsK0JBQStCLG1EQUFVO0FBQ3pDO0FBQ0E7QUFDQTtBQUNBO0FBQ2tFO0FBQ2xFO0FBQ0Esd0RBQU87QUFDUCx3REFBTztBQUNQLHdEQUFPO0FBQ1A7QUFDQSxpQ0FBaUMsdURBQU07QUFDdkMsbUNBQW1DLHVEQUFNO0FBQ3pDLGVBQWUsa0RBQUs7QUFDcEIsNEJBQTRCLHVEQUFNO0FBQ2xDLFFBQVEsdURBQU07QUFDZDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxnQ0FBZ0M7QUFDaEM7QUFDQTtBQUNBO0FBQ0EiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9teS13ZWJwYWNrLXByb2plY3QvLi9zcmMvZG9jcy9uYXJyb3dpbmcudHMiLCJ3ZWJwYWNrOi8vbXktd2VicGFjay1wcm9qZWN0Ly4vc3JjL2RvY3MvdHlwZXMudHMiLCJ3ZWJwYWNrOi8vbXktd2VicGFjay1wcm9qZWN0L3dlYnBhY2svYm9vdHN0cmFwIiwid2VicGFjazovL215LXdlYnBhY2stcHJvamVjdC93ZWJwYWNrL3J1bnRpbWUvZGVmaW5lIHByb3BlcnR5IGdldHRlcnMiLCJ3ZWJwYWNrOi8vbXktd2VicGFjay1wcm9qZWN0L3dlYnBhY2svcnVudGltZS9oYXNPd25Qcm9wZXJ0eSBzaG9ydGhhbmQiLCJ3ZWJwYWNrOi8vbXktd2VicGFjay1wcm9qZWN0L3dlYnBhY2svcnVudGltZS9tYWtlIG5hbWVzcGFjZSBvYmplY3QiLCJ3ZWJwYWNrOi8vbXktd2VicGFjay1wcm9qZWN0Ly4vc3JjL2FwcC50cyJdLCJzb3VyY2VzQ29udGVudCI6WyIvKipcclxuICogUGFydGllIC0gTmFycm93aW5nXHJcbiAqIG91IGNvbW1lbnQgcsOpZHVpcmUgbGEgbGlzdGUgZGVzIHR5cGVzIGRpc3BvbmlibGVzXHJcbiAqL1xyXG5sZXQgYnRuX2luYyA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJyNpbmNyZW1lbnQnKTsgLy8gRWxlbWVudCB8IE51bGxcclxubGV0IGJ0bl9pbmMyID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignI2luY3JlbWVudCcpOyAvLyBFbGVtZW50XHJcbmxldCBidG5faW5jMyA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJyNpbmNyZW1lbnQnKTsgLy8gSFRNTEJ1dHRvbkVsZW1lbnRcclxuLy8g8J+qpyBBdHRlbnRpb24gcG91ciBidG5faW5jMiBldCBidG5faW5jMywgdm91cyBlbXDDqmNoZXogbGUgcXVlcnlTZWxlY3RvciBkZSBmb25jdGlvbm5lciBjb3JyZWN0ZW1lbnQgZW4gY2FzIGRlIG51bGxcclxuLy8gTGUgbWlldXggc2VyYSBkJ3V0aWxpc2VyIGRlcyBjb25kaXRpb25zIGF1IGxpZXUgZHUgbmFycm93aW5nICchJyBvdSAnYXMnXHJcbi8vIEF1dHJlIGV4ZW1wbGVcclxubGV0IGJ0bl9kZWMgPSAoZXZlbnQpID0+IHtcclxuICAgIGV2ZW50LnByZXZlbnREZWZhdWx0KCk7XHJcbiAgICBjb25zdCBpbnB1dCA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCIjcmVzXCIpOyAvLyBIVE1MSW5wdXRFbGVtZW50IG91IG51bGxcclxuICAgIGlmIChpbnB1dCkge1xyXG4gICAgICAgIC8vIEhUTUxJbnB1dEVsZW1lbnRcclxuICAgICAgICAvLyBQcmVtaWVyIMOpbMOpbWVudCBkdSBuYXJyb3dpbmcsIGonYWkgw6lsaW1pbmVyIGxlIGZhaXQgcXUnaWwgcHVpc3NlIMOqdHJlIG51bGxcclxuICAgIH1cclxuICAgIGVsc2Uge1xyXG4gICAgICAgIC8vIG51bGxcclxuICAgIH1cclxufTtcclxuLy8gQXV0cmUgZXhlbXBsZSAoYXZlYyB1biBpZClcclxuZXhwb3J0IGZ1bmN0aW9uIHByaW50SWQoaWQpIHtcclxuICAgIGlmIChpZCkge1xyXG4gICAgICAgIC8vIHN0cmluZyB8IG51bWJlclxyXG4gICAgICAgIGlmICh0eXBlb2YgaWQgPT09IFwibnVtYmVyXCIpIHtcclxuICAgICAgICAgICAgY29uc29sZS5sb2coJ2lkIDo+PicsIGlkKTsgLy8gU2ltdWzDqSwgdW4gYWxnbyBkZSB0cmF2YWlsIHN1ciBsJ2lkLCBldCBlbnJlZ2lzdHJlbWVudCBlbiBkYiBzcMOpY2lmaXF1ZSBkYW5zIGRlcyBmb25jdGlvbnNcclxuICAgICAgICB9XHJcbiAgICAgICAgZWxzZSB7XHJcbiAgICAgICAgICAgIGxldCB0bXBJZCA9IHBhcnNlSW50KGlkKTtcclxuICAgICAgICAgICAgY29uc29sZS5sb2coJ2lkIDo+PicsIHRtcElkKTtcclxuICAgICAgICAgICAgLy8gVHJhaXRlbWVudCBkdSBjYXMgbnVtYmVyIGRpcmVjdFxyXG4gICAgICAgIH1cclxuICAgIH1cclxuICAgIGVsc2Uge1xyXG4gICAgICAgIC8vIG51bGxcclxuICAgICAgICBpZCA9IDQyO1xyXG4gICAgICAgIGNvbnNvbGUubG9nKCdpZCA6Pj4nLCBpZCk7XHJcbiAgICB9XHJcbn1cclxuLy8g4pyP77iPIMOpY3JpcmUgbCdleGVtcGxlIGRhbnMgLi9hcHAudHNcclxuLy8gQXV0cmUgZXhlbXBsZSAoZG91YmxlIHZhcmlhYmxlIGxvY2FsZSlcclxuZnVuY3Rpb24gZXhlbXBsZU4oYSwgYikge1xyXG4gICAgaWYgKGEgPT09IGIpIHtcclxuICAgICAgICBjb25zb2xlLmxvZyhhKTsgLy8gaWNpIGlsIHNlcmEgZCdvZmZpY2UgZW4gc3RyaW5nXHJcbiAgICAgICAgLy8gTGUgc2V1bCBwb2ludCBjb21tdW4gZW50cmUgYSBldCBiIGVzdCBzdHJpbmdcclxuICAgIH1cclxufVxyXG5mdW5jdGlvbiBleGVtcGxlT3BlcmF0b3IoYSkge1xyXG4gICAgLy8gRXhlbXBsZSBzaSBhIMOpdGFpdCB1biBtb3VzZUV2ZW50XHJcbiAgICAvLyBNb3VzZUV2ZW50IMOpdGFudCB1biB0eXBlIFR5cGVTY3JpcHQsIGlsIG4nZXN0IHBhcyByZWNvbm51IHBhciBsZSB0eXBlb2YgbmF0aWYgYSBKUyEgXHJcbiAgICAvLyBpZiAodHlwZW9mIGEgPT09IFwiTW91c2VFdmVudFwiKSB7IH1cclxuICAgIGlmIChcInZhbHVlXCIgaW4gYSkge1xyXG4gICAgICAgIGNvbnNvbGUubG9nKGEpOyAvLyB2YWx1ZSBlc3QgdW5lIHByb3ByacOpdMOpIGRlIEhUTUxJbnB1dEVsZW1lbnRcclxuICAgIH1cclxuICAgIGVsc2UgaWYgKFwidG90b1wiIGluIGEpIHtcclxuICAgICAgICBjb25zb2xlLmxvZyhhKTsgLy8gTmUgcGFzc2VyYSBqYW1haXNcclxuICAgIH1cclxuICAgIGVsc2Uge1xyXG4gICAgICAgIGNvbnNvbGUubG9nKGEpOyAvLyBNb3VzZUV2ZW50XHJcbiAgICB9XHJcbn1cclxuLy8gQXV0cmUgY2FzXHJcbi8vIEplIHZldXggZMOpZmluaXIgb2JsaWdhdG9pcmVtZW50IHVuIHJldG91ciBEYXRlIHN1ciBhXHJcbmV4cG9ydCBmdW5jdGlvbiBpc0RhdGUoYSkge1xyXG4gICAgcmV0dXJuIGEgaW5zdGFuY2VvZiBEYXRlO1xyXG59XHJcbi8vIOKcj++4jyDDqWNyaXJlIGwnZXhlbXBsZSBkYW5zIC4vYXBwLnRzXHJcbi8vIENhcyBwbHVzIGNvbmNyZXRcclxuZXhwb3J0IGNsYXNzIFRVc2VyIHtcclxuICAgIGNvbnN0cnVjdG9yKG5hbWUpIHsgdGhpcy5uYW1lID0gbmFtZTsgfVxyXG59XHJcbmV4cG9ydCBmdW5jdGlvbiBpc1VzZXIoYSkge1xyXG4gICAgcmV0dXJuIGEgaW5zdGFuY2VvZiBUVXNlcjtcclxufVxyXG4vLyBPbiBhdXJhaXQgdHLDqHMgYmllbiBwdSBtZXR0cmUgOiBib29sZWFuIGVuIHJldG91ciBkZSBmb25jdGlvblxyXG4vLyBNYWlzLCBkYW5zIGxhIGxlY3R1cmUgZGUgbGEgZG9jIGF1IHN1cnZvbCBkZSBsYSBmb25jdGlvbixcclxuLy8gaWwgZXN0IHBsdXMgaW50w6lyZXNzYW50IGRlIHNhdm9pciBxdWUgbGUgcmV0b3VyIGQndW4gYm9vbMOpZW4gXHJcbi8vIHNlcmEgc3VyIHVuIFRVc2VyIGV0IG5vbiBkJ3VuIGJvb2zDqWVuXHJcbi8vIOKcj++4jyDDqWNyaXJlIGwnZXhlbXBsZSBkYW5zIC4vYXBwLnRzXHJcbiIsIi8qKlxyXG4gKiBQYXJ0aWUgLSBUeXBlc1xyXG4gKi9cclxuY29uc3QgYSA9IFwiQm9uam91ciDDoCB0b3VzXCI7XHJcbmNvbnN0IGIgPSA0MjtcclxuY29uc3QgYyA9IHRydWU7XHJcbmNvbnN0IGQgPSBudWxsO1xyXG5jb25zdCBlID0gW1wiQm9uam91clwiLCBcIsOgXCIsIFwidG91c1wiXTtcclxuY29uc3QgZiA9IFsxLCAyLCAzLCA0LCA1XTtcclxuY29uc3QgZyA9IFtcIkhlbGxvXCIsIHt9LCBbXSwgNDIsIGZhbHNlXTtcclxuY29uc3QgaCA9IHt9O1xyXG5jb25zdCBpID0geyBmaXJzdG5hbWU6ICdRdWVudGluJywgYWdlOiAyNiB9O1xyXG5jb25zdCBqID0geyBoZWxsbzogXCJDb3Vjb3VcIiB9O1xyXG5jb25zdCBrID0gbmV3IERhdGUoKTtcclxuY29uc3QgbCA9ICgpID0+IHsgfTtcclxuY29uc3QgbSA9ICgpID0+IHsgfTtcclxuY29uc3QgbiA9IChpLCBzLCBiKSA9PiBbJ2EnLCAnYiddO1xyXG4vLyBjb25zdCBvOiBIVE1MU3BhbkVsZW1lbnQgPSBuZXcgSFRNTFNwYW5FbGVtZW50KCk7XHJcbi8vIGNvbnN0IHA6IEVsZW1lbnQgPSBuZXcgRWxlbWVudCgpO1xyXG5leHBvcnQgbGV0IG1lc1R5cGVzID0geyBhLCBiLCBjLCBkLCBlLCBmLCBnLCBoLCBpLCBqLCBrLCBsLCBtLCBuIH07XHJcbi8vIEV4cG9ydCBncsOiY2Ugw6AgbW9kdWxlLmV4cG9ydHMsIHVuIG9iamV0IGxhbWJkYSwgcXVpIGNvbnRpZW5kcmEgdG91dGVzIGxlcyB2YXJpYWJsZXNcclxuLy8gQ2UgcXVpIHBhciBsYSBzdWl0ZSwgZGFucyBub3RyZSBhcHAudHMsIG5vdXMgw6l2aXRlcmEgZGVzIGVycmV1cnMgZGUgbm9tbWFnZSBkZSB2YXJpYWJsZXMgZMOpasOgIGV4aXN0YW50ZXNcclxuIiwiLy8gVGhlIG1vZHVsZSBjYWNoZVxudmFyIF9fd2VicGFja19tb2R1bGVfY2FjaGVfXyA9IHt9O1xuXG4vLyBUaGUgcmVxdWlyZSBmdW5jdGlvblxuZnVuY3Rpb24gX193ZWJwYWNrX3JlcXVpcmVfXyhtb2R1bGVJZCkge1xuXHQvLyBDaGVjayBpZiBtb2R1bGUgaXMgaW4gY2FjaGVcblx0dmFyIGNhY2hlZE1vZHVsZSA9IF9fd2VicGFja19tb2R1bGVfY2FjaGVfX1ttb2R1bGVJZF07XG5cdGlmIChjYWNoZWRNb2R1bGUgIT09IHVuZGVmaW5lZCkge1xuXHRcdHJldHVybiBjYWNoZWRNb2R1bGUuZXhwb3J0cztcblx0fVxuXHQvLyBDcmVhdGUgYSBuZXcgbW9kdWxlIChhbmQgcHV0IGl0IGludG8gdGhlIGNhY2hlKVxuXHR2YXIgbW9kdWxlID0gX193ZWJwYWNrX21vZHVsZV9jYWNoZV9fW21vZHVsZUlkXSA9IHtcblx0XHQvLyBubyBtb2R1bGUuaWQgbmVlZGVkXG5cdFx0Ly8gbm8gbW9kdWxlLmxvYWRlZCBuZWVkZWRcblx0XHRleHBvcnRzOiB7fVxuXHR9O1xuXG5cdC8vIEV4ZWN1dGUgdGhlIG1vZHVsZSBmdW5jdGlvblxuXHRfX3dlYnBhY2tfbW9kdWxlc19fW21vZHVsZUlkXShtb2R1bGUsIG1vZHVsZS5leHBvcnRzLCBfX3dlYnBhY2tfcmVxdWlyZV9fKTtcblxuXHQvLyBSZXR1cm4gdGhlIGV4cG9ydHMgb2YgdGhlIG1vZHVsZVxuXHRyZXR1cm4gbW9kdWxlLmV4cG9ydHM7XG59XG5cbiIsIi8vIGRlZmluZSBnZXR0ZXIgZnVuY3Rpb25zIGZvciBoYXJtb255IGV4cG9ydHNcbl9fd2VicGFja19yZXF1aXJlX18uZCA9IChleHBvcnRzLCBkZWZpbml0aW9uKSA9PiB7XG5cdGZvcih2YXIga2V5IGluIGRlZmluaXRpb24pIHtcblx0XHRpZihfX3dlYnBhY2tfcmVxdWlyZV9fLm8oZGVmaW5pdGlvbiwga2V5KSAmJiAhX193ZWJwYWNrX3JlcXVpcmVfXy5vKGV4cG9ydHMsIGtleSkpIHtcblx0XHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBrZXksIHsgZW51bWVyYWJsZTogdHJ1ZSwgZ2V0OiBkZWZpbml0aW9uW2tleV0gfSk7XG5cdFx0fVxuXHR9XG59OyIsIl9fd2VicGFja19yZXF1aXJlX18ubyA9IChvYmosIHByb3ApID0+IChPYmplY3QucHJvdG90eXBlLmhhc093blByb3BlcnR5LmNhbGwob2JqLCBwcm9wKSkiLCIvLyBkZWZpbmUgX19lc01vZHVsZSBvbiBleHBvcnRzXG5fX3dlYnBhY2tfcmVxdWlyZV9fLnIgPSAoZXhwb3J0cykgPT4ge1xuXHRpZih0eXBlb2YgU3ltYm9sICE9PSAndW5kZWZpbmVkJyAmJiBTeW1ib2wudG9TdHJpbmdUYWcpIHtcblx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgU3ltYm9sLnRvU3RyaW5nVGFnLCB7IHZhbHVlOiAnTW9kdWxlJyB9KTtcblx0fVxuXHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgJ19fZXNNb2R1bGUnLCB7IHZhbHVlOiB0cnVlIH0pO1xufTsiLCJpbXBvcnQgeyBtZXNUeXBlcyB9IGZyb20gXCIuL2RvY3MvdHlwZXNcIjtcclxuLyoqXHJcbiAqIFBhcnRpZSAxIC0gVHlwZXNcclxuICovXHJcbmNvbnNvbGUud2FybihcIlR5cGVzXCIpO1xyXG5jb25zb2xlLmxvZygnbWVzVHlwZXMuYSA6Pj4gJywgbWVzVHlwZXMuYSk7XHJcbmNvbnNvbGUubG9nKCdtZXNUeXBlcy5iIDo+PiAnLCBtZXNUeXBlcy5iKTtcclxuY29uc29sZS5sb2coJ21lc1R5cGVzLmMgOj4+ICcsIG1lc1R5cGVzLmMpO1xyXG5jb25zb2xlLmxvZygnbWVzVHlwZXMuZCA6Pj4gJywgbWVzVHlwZXMuZCk7XHJcbmNvbnNvbGUubG9nKCdtZXNUeXBlcy5lIDo+PiAnLCBtZXNUeXBlcy5lKTtcclxuY29uc29sZS5sb2coJ21lc1R5cGVzLmYgOj4+ICcsIG1lc1R5cGVzLmYpO1xyXG5jb25zb2xlLmxvZygnbWVzVHlwZXMuZyA6Pj4gJywgbWVzVHlwZXMuZyk7XHJcbmNvbnNvbGUubG9nKCdtZXNUeXBlcy5oIDo+PiAnLCBtZXNUeXBlcy5oKTtcclxuY29uc29sZS5sb2coJ21lc1R5cGVzLmkgOj4+ICcsIG1lc1R5cGVzLmkpO1xyXG5jb25zb2xlLmxvZygnbWVzVHlwZXMuaiA6Pj4gJywgbWVzVHlwZXMuaik7XHJcbmNvbnNvbGUubG9nKCdtZXNUeXBlcy5rIDo+PiAnLCBtZXNUeXBlcy5rKTtcclxuY29uc29sZS5sb2coJ21lc1R5cGVzLmwgOj4+ICcsIG1lc1R5cGVzLmwpO1xyXG5jb25zb2xlLmxvZygnbWVzVHlwZXMubSA6Pj4gJywgbWVzVHlwZXMubSk7XHJcbmNvbnNvbGUubG9nKCdtZXNUeXBlcy5uIDo+PiAnLCBtZXNUeXBlcy5uKTtcclxuLyoqXHJcbiAqIFBhcnRpZSAyIC0gTmFycm93aW5nXHJcbiAqIG91IGNvbW1lbnQgcsOpZHVpcmUgbGEgbGlzdGUgZGVzIHR5cGVzIGRpc3BvbmlibGVzXHJcbiAqL1xyXG5pbXBvcnQgeyBwcmludElkLCBpc0RhdGUsIGlzVXNlciwgVFVzZXIgfSBmcm9tIFwiLi9kb2NzL25hcnJvd2luZ1wiO1xyXG5jb25zb2xlLndhcm4oXCJOYXJyb3dpbmdcIik7XHJcbnByaW50SWQoMTIpO1xyXG5wcmludElkKCdhJyk7XHJcbnByaW50SWQobnVsbCk7XHJcbmxldCBiaXJ0aERhdGUgPSBuZXcgRGF0ZSgnMDMvMDQvMTk5NicpO1xyXG5jb25zb2xlLmxvZygnRGF0ZSBbMDMvMDQvMTk5Nl0nLCBpc0RhdGUoYmlydGhEYXRlKSk7XHJcbmNvbnNvbGUubG9nKCdTdHJpbmcgWzAzLzA0LzE5OTZdJywgaXNEYXRlKCcwMy8wNC8xOTk2JykpO1xyXG5sZXQgdXNlciA9IG5ldyBUVXNlcignUXVlbnRpbicpO1xyXG5jb25zb2xlLmxvZygnaXNVc2VyKHVzZXIpJywgaXNVc2VyKHVzZXIpKTtcclxubGV0IHkgPSBpc1VzZXIoJ1RvdG8nKTtcclxuY29uc29sZS5sb2coJ3kgOj4+ICcsIHkpO1xyXG5sZXQgYWRtaW4gPSB7XHJcbiAgICBsYXN0TmFtZTogJ0dlZXJ0cycsXHJcbiAgICBmaXJzdE5hbWU6ICdRdWVudGluJyxcclxuICAgIHJvbGVJZDogNDJcclxufTtcclxuY29uc29sZS5sb2coJ2FkbWluIDo+PiAnLCBhZG1pbik7XHJcbmxldCBpZFRtcEludCA9IDQyO1xyXG5sZXQgaWRUbXBTdHJpbmcgPSBcIjQyXCI7XHJcbi8vIGxldCBpZFRtcEJvb2xlYW46IElkID0gdHJ1ZTsgLy8gTmUgZm9uY3Rpb25uZSBwYXNcclxuY29uc29sZS5sb2coJ2lkVG1wVHlwZSA6Pj4gJywgaWRUbXBJbnQpO1xyXG5jb25zb2xlLmxvZygnaWRUbXBUeXBlIDo+PiAnLCBpZFRtcFN0cmluZyk7XHJcbmxldCBkYXRlVG1wID0gXCIwMy8wNC8xOTk2XCI7XHJcbmNvbnNvbGUubG9nKCdkYXRlVG1wIDo+PiAnLCBkYXRlVG1wKTtcclxuIl0sIm5hbWVzIjpbXSwic291cmNlUm9vdCI6IiJ9