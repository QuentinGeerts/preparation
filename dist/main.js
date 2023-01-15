/******/ (() => { // webpackBootstrap
/******/ 	"use strict";
/******/ 	var __webpack_modules__ = ({

/***/ "./src/docs/generics.ts":
/*!******************************!*\
  !*** ./src/docs/generics.ts ***!
  \******************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "GenericNumber": () => (/* binding */ GenericNumber),
/* harmony export */   "fnTab": () => (/* binding */ fnTab),
/* harmony export */   "fnTab2": () => (/* binding */ fnTab2),
/* harmony export */   "getLength": () => (/* binding */ getLength),
/* harmony export */   "getProperty": () => (/* binding */ getProperty),
/* harmony export */   "getUsers": () => (/* binding */ getUsers),
/* harmony export */   "identity": () => (/* binding */ identity),
/* harmony export */   "identity2": () => (/* binding */ identity2),
/* harmony export */   "identity3": () => (/* binding */ identity3)
/* harmony export */ });
/**
 * Partie 4 - Generics
 */
function identity(arg) {
    return arg;
}
function identity2(arg) {
    return arg;
}
function identity3(arg) {
    return arg;
}
// Exemple avec un tableau
function fnTab(arg) {
    return arg[0];
}
// Autre exemple avec un tableau de 2 types
function fnTab2(arg) {
    return arg[0];
}
// Définir que le générique va contenir une propriété 'length'
function getLength(arg) {
    console.log('arg.length :>> ', arg.length);
    return arg;
}
function getUsers(arg) {
    console.log('arg.id :>> ', arg.id);
    return arg.id;
}
// Dans une classe générique
class GenericNumber {
}
// Utilisation d'une clef qui fait partie de l'objet
function getProperty(obj, key) {
    return obj[key];
}
// ✏️ Exercice 02


/***/ }),

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
// ✏️ Exercice 01


/***/ }),

/***/ "./src/models/Users.model.ts":
/*!***********************************!*\
  !*** ./src/models/Users.model.ts ***!
  \***********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ Users)
/* harmony export */ });
class Users {
}


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
// This entry need to be wrapped in an IIFE because it need to be isolated against other entry modules.
(() => {
var __webpack_exports__ = {};
/*!********************!*\
  !*** ./src/app.ts ***!
  \********************/
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _docs_types__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./docs/types */ "./src/docs/types.ts");
/* harmony import */ var _docs_narrowing__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./docs/narrowing */ "./src/docs/narrowing.ts");
/* harmony import */ var _docs_generics__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./docs/generics */ "./src/docs/generics.ts");
/* harmony import */ var _models_Users_model__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./models/Users.model */ "./src/models/Users.model.ts");
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
/**
 * Partie 3 - Types custom
 * On peut créer ses propres types
 */
console.warn("Custom Types");
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
/**
 * Partie 4 - Generics
 */
console.warn("Generics");

const id1 = (0,_docs_generics__WEBPACK_IMPORTED_MODULE_2__.identity)(3); // On perd le typage dynamique passé en paramètre à cause du any
console.log('id1 :>> ', id1);
console.log('typeof id1 :>> ', typeof id1);
const id2 = (0,_docs_generics__WEBPACK_IMPORTED_MODULE_2__.identity2)('Hello');
console.log('id2 :>> ', id2);
console.log('typeof id2 :>> ', typeof id2);
const id3a = (0,_docs_generics__WEBPACK_IMPORTED_MODULE_2__.identity3)('Coucou'); // Type literal de "Coucou"
const id3b = (0,_docs_generics__WEBPACK_IMPORTED_MODULE_2__.identity3)('Heyo'); // Récupercussion du type string sur le type de arg et retour
console.log('id3a :>> ', id3a);
console.log('typeof id3a :>> ', typeof id3a);
console.log('id3b :>> ', id3a);
console.log('typeof id3b :>> ', typeof id3a);
const ft = (0,_docs_generics__WEBPACK_IMPORTED_MODULE_2__.fnTab)(['a', 'b', 'c']);
console.log('ft :>> ', ft);
const ft2 = (0,_docs_generics__WEBPACK_IMPORTED_MODULE_2__.fnTab2)([26, 1, 'C', 42]);
console.log('ft2 :>> ', ft2);
const myLength = (0,_docs_generics__WEBPACK_IMPORTED_MODULE_2__.getLength)('Bonjour');
// const myLength2 = getLength(6); // Ne fonctionne pas car un number ne possède pas la propriété length
const myLength3 = (0,_docs_generics__WEBPACK_IMPORTED_MODULE_2__.getLength)(['a', 1, true]);
console.log('myLength :>> ', myLength);
console.log('myLength3 :>> ', myLength3);

let myUser = new _models_Users_model__WEBPACK_IMPORTED_MODULE_3__["default"]();
myUser = { lastName: "Geerts", firstName: "Quentin", id: 4 };
const gu1 = (0,_docs_generics__WEBPACK_IMPORTED_MODULE_2__.getUsers)(myUser);
const gu2 = (0,_docs_generics__WEBPACK_IMPORTED_MODULE_2__.getUsers)(myUser);
console.log('gu1 :>> ', gu1);
console.log('gu2 :>> ', gu2);
// Avec classe générique

let nb = new _docs_generics__WEBPACK_IMPORTED_MODULE_2__.GenericNumber();
nb.zeroValue = 0;
nb.add = (x, y) => x + y;
// Utilisation d'une clef qui fait partie d'un objet
let x = { a: 1, b: 2, c: 3, d: 4 };
(0,_docs_generics__WEBPACK_IMPORTED_MODULE_2__.getProperty)(x, 'a');
// getProperty(x, 'z'); // Ne fonctionne pas car x n'a pas de propriété z
/**
 * Partie 5 - Classes
 */

})();

// This entry need to be wrapped in an IIFE because it need to be isolated against other entry modules.
(() => {
/*!**************************!*\
  !*** ./src/exercices.ts ***!
  \**************************/

/**
 * Partie 1 - Exercice 01
 */
// Créer un code permettant de créer un compteur classique, avec + 1, -1 et =..., il faudra type le tout au maximum, préparer 2 fonctions pour ça
// const btnPlus: HTMLButtonElement | null = document.querySelector("#compteurP");
// const btnMoins: HTMLButtonElement | null = document.querySelector("#compteurM");
// const total: HTMLSpanElement | null = document.querySelector("#total");
// let actual: number;
// if (total)
//     actual = parseInt(total.innerText);
// const increment: (e: MouseEvent) => void = (event: MouseEvent): void => {
//     event.preventDefault();
//     actual = actual + 1;
//     if (total) {
//         //total //do'ffice un element
//         total.innerText = actual.toString();
//     }
// };
// const decrement: (e: MouseEvent) => void = (event: MouseEvent): void => {
//     event.preventDefault();
//     actual = actual - 1;
//     if (total)
//         total.innerText = actual.toString();
// };
// if (btnPlus)
//     btnPlus.addEventListener("click", increment);
// if (btnMoins)
//     btnMoins.addEventListener("click", decrement);
/**
 * Partie 4 - Exercice 02
 */
// reprendre le code de l'exos 1 et tranformer le tout avec des narrowing et des generics
// const btnPlus = document.querySelector<HTMLButtonElement>("#compteurP");
// const btnMoins = document.querySelector<HTMLButtonElement>("#compteurM");
// const total = document.querySelector<HTMLSpanElement>("#total")!;
// let actual = <number>parseInt(total.innerText);
// const increment: (e: MouseEvent) => void = (event: MouseEvent): void => {
//     event.preventDefault();
//     actual = actual + 1;
//     total.innerText = actual.toString();
// };
// function setActual<ArgType> (nb: ArgType): number {
//     let a = nb as unknown as number;
//     a = a - 1;
//     return a;
// }
// function decrement (event: Event): void {
//     event.preventDefault();
//     actual = setActual<number>(actual);
//     total.innerText = actual.toString();
// }
// btnPlus?.addEventListener("click", increment);
// btnMoins?.addEventListener<keyof HTMLElementEventMap>("click", decrement);

})();

/******/ })()
;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,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Q0E7QUFDQSxZQUFZLHlEQUFTO0FBQ3JCO0FBQ0E7QUFDQSxhQUFhLHlEQUFTLFlBQVk7QUFDbEMsYUFBYSx5REFBUyxVQUFVO0FBQ2hDO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsV0FBVyxxREFBSztBQUNoQjtBQUNBLFlBQVksc0RBQU07QUFDbEI7QUFDQSxpQkFBaUIseURBQVM7QUFDMUIsbUNBQW1DO0FBQ25DLGtCQUFrQix5REFBUztBQUMzQjtBQUNBO0FBQ3lDO0FBQ3pDLGlCQUFpQiwyREFBSztBQUN0QixXQUFXO0FBQ1gsWUFBWSx3REFBUTtBQUNwQixZQUFZLHdEQUFRO0FBQ3BCO0FBQ0E7QUFDQTtBQUNnRDtBQUNoRCxhQUFhLHlEQUFhO0FBQzFCO0FBQ0E7QUFDQTtBQUNBLFVBQVU7QUFDViwyREFBVztBQUNYLHdCQUF3QjtBQUN4QjtBQUNBO0FBQ0E7Ozs7Ozs7OztBQ2pHYTtBQUNiO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9teS13ZWJwYWNrLXByb2plY3QvLi9zcmMvZG9jcy9nZW5lcmljcy50cyIsIndlYnBhY2s6Ly9teS13ZWJwYWNrLXByb2plY3QvLi9zcmMvZG9jcy9uYXJyb3dpbmcudHMiLCJ3ZWJwYWNrOi8vbXktd2VicGFjay1wcm9qZWN0Ly4vc3JjL2RvY3MvdHlwZXMudHMiLCJ3ZWJwYWNrOi8vbXktd2VicGFjay1wcm9qZWN0Ly4vc3JjL21vZGVscy9Vc2Vycy5tb2RlbC50cyIsIndlYnBhY2s6Ly9teS13ZWJwYWNrLXByb2plY3Qvd2VicGFjay9ib290c3RyYXAiLCJ3ZWJwYWNrOi8vbXktd2VicGFjay1wcm9qZWN0L3dlYnBhY2svcnVudGltZS9kZWZpbmUgcHJvcGVydHkgZ2V0dGVycyIsIndlYnBhY2s6Ly9teS13ZWJwYWNrLXByb2plY3Qvd2VicGFjay9ydW50aW1lL2hhc093blByb3BlcnR5IHNob3J0aGFuZCIsIndlYnBhY2s6Ly9teS13ZWJwYWNrLXByb2plY3Qvd2VicGFjay9ydW50aW1lL21ha2UgbmFtZXNwYWNlIG9iamVjdCIsIndlYnBhY2s6Ly9teS13ZWJwYWNrLXByb2plY3QvLi9zcmMvYXBwLnRzIiwid2VicGFjazovL215LXdlYnBhY2stcHJvamVjdC8uL3NyYy9leGVyY2ljZXMudHMiXSwic291cmNlc0NvbnRlbnQiOlsiLyoqXHJcbiAqIFBhcnRpZSA0IC0gR2VuZXJpY3NcclxuICovXHJcbmV4cG9ydCBmdW5jdGlvbiBpZGVudGl0eShhcmcpIHtcclxuICAgIHJldHVybiBhcmc7XHJcbn1cclxuZXhwb3J0IGZ1bmN0aW9uIGlkZW50aXR5MihhcmcpIHtcclxuICAgIHJldHVybiBhcmc7XHJcbn1cclxuZXhwb3J0IGZ1bmN0aW9uIGlkZW50aXR5MyhhcmcpIHtcclxuICAgIHJldHVybiBhcmc7XHJcbn1cclxuLy8gRXhlbXBsZSBhdmVjIHVuIHRhYmxlYXVcclxuZXhwb3J0IGZ1bmN0aW9uIGZuVGFiKGFyZykge1xyXG4gICAgcmV0dXJuIGFyZ1swXTtcclxufVxyXG4vLyBBdXRyZSBleGVtcGxlIGF2ZWMgdW4gdGFibGVhdSBkZSAyIHR5cGVzXHJcbmV4cG9ydCBmdW5jdGlvbiBmblRhYjIoYXJnKSB7XHJcbiAgICByZXR1cm4gYXJnWzBdO1xyXG59XHJcbi8vIETDqWZpbmlyIHF1ZSBsZSBnw6luw6lyaXF1ZSB2YSBjb250ZW5pciB1bmUgcHJvcHJpw6l0w6kgJ2xlbmd0aCdcclxuZXhwb3J0IGZ1bmN0aW9uIGdldExlbmd0aChhcmcpIHtcclxuICAgIGNvbnNvbGUubG9nKCdhcmcubGVuZ3RoIDo+PiAnLCBhcmcubGVuZ3RoKTtcclxuICAgIHJldHVybiBhcmc7XHJcbn1cclxuZXhwb3J0IGZ1bmN0aW9uIGdldFVzZXJzKGFyZykge1xyXG4gICAgY29uc29sZS5sb2coJ2FyZy5pZCA6Pj4gJywgYXJnLmlkKTtcclxuICAgIHJldHVybiBhcmcuaWQ7XHJcbn1cclxuLy8gRGFucyB1bmUgY2xhc3NlIGfDqW7DqXJpcXVlXHJcbmV4cG9ydCBjbGFzcyBHZW5lcmljTnVtYmVyIHtcclxufVxyXG4vLyBVdGlsaXNhdGlvbiBkJ3VuZSBjbGVmIHF1aSBmYWl0IHBhcnRpZSBkZSBsJ29iamV0XHJcbmV4cG9ydCBmdW5jdGlvbiBnZXRQcm9wZXJ0eShvYmosIGtleSkge1xyXG4gICAgcmV0dXJuIG9ialtrZXldO1xyXG59XHJcbi8vIOKcj++4jyBFeGVyY2ljZSAwMlxyXG4iLCIvKipcclxuICogUGFydGllIC0gTmFycm93aW5nXHJcbiAqIG91IGNvbW1lbnQgcsOpZHVpcmUgbGEgbGlzdGUgZGVzIHR5cGVzIGRpc3BvbmlibGVzXHJcbiAqL1xyXG5sZXQgYnRuX2luYyA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJyNpbmNyZW1lbnQnKTsgLy8gRWxlbWVudCB8IE51bGxcclxubGV0IGJ0bl9pbmMyID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignI2luY3JlbWVudCcpOyAvLyBFbGVtZW50XHJcbmxldCBidG5faW5jMyA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJyNpbmNyZW1lbnQnKTsgLy8gSFRNTEJ1dHRvbkVsZW1lbnRcclxuLy8g8J+qpyBBdHRlbnRpb24gcG91ciBidG5faW5jMiBldCBidG5faW5jMywgdm91cyBlbXDDqmNoZXogbGUgcXVlcnlTZWxlY3RvciBkZSBmb25jdGlvbm5lciBjb3JyZWN0ZW1lbnQgZW4gY2FzIGRlIG51bGxcclxuLy8gTGUgbWlldXggc2VyYSBkJ3V0aWxpc2VyIGRlcyBjb25kaXRpb25zIGF1IGxpZXUgZHUgbmFycm93aW5nICchJyBvdSAnYXMnXHJcbi8vIEF1dHJlIGV4ZW1wbGVcclxubGV0IGJ0bl9kZWMgPSAoZXZlbnQpID0+IHtcclxuICAgIGV2ZW50LnByZXZlbnREZWZhdWx0KCk7XHJcbiAgICBjb25zdCBpbnB1dCA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCIjcmVzXCIpOyAvLyBIVE1MSW5wdXRFbGVtZW50IG91IG51bGxcclxuICAgIGlmIChpbnB1dCkge1xyXG4gICAgICAgIC8vIEhUTUxJbnB1dEVsZW1lbnRcclxuICAgICAgICAvLyBQcmVtaWVyIMOpbMOpbWVudCBkdSBuYXJyb3dpbmcsIGonYWkgw6lsaW1pbmVyIGxlIGZhaXQgcXUnaWwgcHVpc3NlIMOqdHJlIG51bGxcclxuICAgIH1cclxuICAgIGVsc2Uge1xyXG4gICAgICAgIC8vIG51bGxcclxuICAgIH1cclxufTtcclxuLy8gQXV0cmUgZXhlbXBsZSAoYXZlYyB1biBpZClcclxuZXhwb3J0IGZ1bmN0aW9uIHByaW50SWQoaWQpIHtcclxuICAgIGlmIChpZCkge1xyXG4gICAgICAgIC8vIHN0cmluZyB8IG51bWJlclxyXG4gICAgICAgIGlmICh0eXBlb2YgaWQgPT09IFwibnVtYmVyXCIpIHtcclxuICAgICAgICAgICAgY29uc29sZS5sb2coJ2lkIDo+PicsIGlkKTsgLy8gU2ltdWzDqSwgdW4gYWxnbyBkZSB0cmF2YWlsIHN1ciBsJ2lkLCBldCBlbnJlZ2lzdHJlbWVudCBlbiBkYiBzcMOpY2lmaXF1ZSBkYW5zIGRlcyBmb25jdGlvbnNcclxuICAgICAgICB9XHJcbiAgICAgICAgZWxzZSB7XHJcbiAgICAgICAgICAgIGxldCB0bXBJZCA9IHBhcnNlSW50KGlkKTtcclxuICAgICAgICAgICAgY29uc29sZS5sb2coJ2lkIDo+PicsIHRtcElkKTtcclxuICAgICAgICAgICAgLy8gVHJhaXRlbWVudCBkdSBjYXMgbnVtYmVyIGRpcmVjdFxyXG4gICAgICAgIH1cclxuICAgIH1cclxuICAgIGVsc2Uge1xyXG4gICAgICAgIC8vIG51bGxcclxuICAgICAgICBpZCA9IDQyO1xyXG4gICAgICAgIGNvbnNvbGUubG9nKCdpZCA6Pj4nLCBpZCk7XHJcbiAgICB9XHJcbn1cclxuLy8g4pyP77iPIMOpY3JpcmUgbCdleGVtcGxlIGRhbnMgLi9hcHAudHNcclxuLy8gQXV0cmUgZXhlbXBsZSAoZG91YmxlIHZhcmlhYmxlIGxvY2FsZSlcclxuZnVuY3Rpb24gZXhlbXBsZU4oYSwgYikge1xyXG4gICAgaWYgKGEgPT09IGIpIHtcclxuICAgICAgICBjb25zb2xlLmxvZyhhKTsgLy8gaWNpIGlsIHNlcmEgZCdvZmZpY2UgZW4gc3RyaW5nXHJcbiAgICAgICAgLy8gTGUgc2V1bCBwb2ludCBjb21tdW4gZW50cmUgYSBldCBiIGVzdCBzdHJpbmdcclxuICAgIH1cclxufVxyXG5mdW5jdGlvbiBleGVtcGxlT3BlcmF0b3IoYSkge1xyXG4gICAgLy8gRXhlbXBsZSBzaSBhIMOpdGFpdCB1biBtb3VzZUV2ZW50XHJcbiAgICAvLyBNb3VzZUV2ZW50IMOpdGFudCB1biB0eXBlIFR5cGVTY3JpcHQsIGlsIG4nZXN0IHBhcyByZWNvbm51IHBhciBsZSB0eXBlb2YgbmF0aWYgYSBKUyEgXHJcbiAgICAvLyBpZiAodHlwZW9mIGEgPT09IFwiTW91c2VFdmVudFwiKSB7IH1cclxuICAgIGlmIChcInZhbHVlXCIgaW4gYSkge1xyXG4gICAgICAgIGNvbnNvbGUubG9nKGEpOyAvLyB2YWx1ZSBlc3QgdW5lIHByb3ByacOpdMOpIGRlIEhUTUxJbnB1dEVsZW1lbnRcclxuICAgIH1cclxuICAgIGVsc2UgaWYgKFwidG90b1wiIGluIGEpIHtcclxuICAgICAgICBjb25zb2xlLmxvZyhhKTsgLy8gTmUgcGFzc2VyYSBqYW1haXNcclxuICAgIH1cclxuICAgIGVsc2Uge1xyXG4gICAgICAgIGNvbnNvbGUubG9nKGEpOyAvLyBNb3VzZUV2ZW50XHJcbiAgICB9XHJcbn1cclxuLy8gQXV0cmUgY2FzXHJcbi8vIEplIHZldXggZMOpZmluaXIgb2JsaWdhdG9pcmVtZW50IHVuIHJldG91ciBEYXRlIHN1ciBhXHJcbmV4cG9ydCBmdW5jdGlvbiBpc0RhdGUoYSkge1xyXG4gICAgcmV0dXJuIGEgaW5zdGFuY2VvZiBEYXRlO1xyXG59XHJcbi8vIOKcj++4jyDDqWNyaXJlIGwnZXhlbXBsZSBkYW5zIC4vYXBwLnRzXHJcbi8vIENhcyBwbHVzIGNvbmNyZXRcclxuZXhwb3J0IGNsYXNzIFRVc2VyIHtcclxuICAgIGNvbnN0cnVjdG9yKG5hbWUpIHsgdGhpcy5uYW1lID0gbmFtZTsgfVxyXG59XHJcbmV4cG9ydCBmdW5jdGlvbiBpc1VzZXIoYSkge1xyXG4gICAgcmV0dXJuIGEgaW5zdGFuY2VvZiBUVXNlcjtcclxufVxyXG4vLyBPbiBhdXJhaXQgdHLDqHMgYmllbiBwdSBtZXR0cmUgOiBib29sZWFuIGVuIHJldG91ciBkZSBmb25jdGlvblxyXG4vLyBNYWlzLCBkYW5zIGxhIGxlY3R1cmUgZGUgbGEgZG9jIGF1IHN1cnZvbCBkZSBsYSBmb25jdGlvbixcclxuLy8gaWwgZXN0IHBsdXMgaW50w6lyZXNzYW50IGRlIHNhdm9pciBxdWUgbGUgcmV0b3VyIGQndW4gYm9vbMOpZW4gXHJcbi8vIHNlcmEgc3VyIHVuIFRVc2VyIGV0IG5vbiBkJ3VuIGJvb2zDqWVuXHJcbi8vIOKcj++4jyDDqWNyaXJlIGwnZXhlbXBsZSBkYW5zIC4vYXBwLnRzXHJcbiIsIi8qKlxyXG4gKiBQYXJ0aWUgLSBUeXBlc1xyXG4gKi9cclxuY29uc3QgYSA9IFwiQm9uam91ciDDoCB0b3VzXCI7XHJcbmNvbnN0IGIgPSA0MjtcclxuY29uc3QgYyA9IHRydWU7XHJcbmNvbnN0IGQgPSBudWxsO1xyXG5jb25zdCBlID0gW1wiQm9uam91clwiLCBcIsOgXCIsIFwidG91c1wiXTtcclxuY29uc3QgZiA9IFsxLCAyLCAzLCA0LCA1XTtcclxuY29uc3QgZyA9IFtcIkhlbGxvXCIsIHt9LCBbXSwgNDIsIGZhbHNlXTtcclxuY29uc3QgaCA9IHt9O1xyXG5jb25zdCBpID0geyBmaXJzdG5hbWU6ICdRdWVudGluJywgYWdlOiAyNiB9O1xyXG5jb25zdCBqID0geyBoZWxsbzogXCJDb3Vjb3VcIiB9O1xyXG5jb25zdCBrID0gbmV3IERhdGUoKTtcclxuY29uc3QgbCA9ICgpID0+IHsgfTtcclxuY29uc3QgbSA9ICgpID0+IHsgfTtcclxuY29uc3QgbiA9IChpLCBzLCBiKSA9PiBbJ2EnLCAnYiddO1xyXG4vLyBjb25zdCBvOiBIVE1MU3BhbkVsZW1lbnQgPSBuZXcgSFRNTFNwYW5FbGVtZW50KCk7XHJcbi8vIGNvbnN0IHA6IEVsZW1lbnQgPSBuZXcgRWxlbWVudCgpO1xyXG5leHBvcnQgbGV0IG1lc1R5cGVzID0geyBhLCBiLCBjLCBkLCBlLCBmLCBnLCBoLCBpLCBqLCBrLCBsLCBtLCBuIH07XHJcbi8vIEV4cG9ydCBncsOiY2Ugw6AgbW9kdWxlLmV4cG9ydHMsIHVuIG9iamV0IGxhbWJkYSwgcXVpIGNvbnRpZW5kcmEgdG91dGVzIGxlcyB2YXJpYWJsZXNcclxuLy8gQ2UgcXVpIHBhciBsYSBzdWl0ZSwgZGFucyBub3RyZSBhcHAudHMsIG5vdXMgw6l2aXRlcmEgZGVzIGVycmV1cnMgZGUgbm9tbWFnZSBkZSB2YXJpYWJsZXMgZMOpasOgIGV4aXN0YW50ZXNcclxuLy8g4pyP77iPIEV4ZXJjaWNlIDAxXHJcbiIsImV4cG9ydCBkZWZhdWx0IGNsYXNzIFVzZXJzIHtcclxufVxyXG4iLCIvLyBUaGUgbW9kdWxlIGNhY2hlXG52YXIgX193ZWJwYWNrX21vZHVsZV9jYWNoZV9fID0ge307XG5cbi8vIFRoZSByZXF1aXJlIGZ1bmN0aW9uXG5mdW5jdGlvbiBfX3dlYnBhY2tfcmVxdWlyZV9fKG1vZHVsZUlkKSB7XG5cdC8vIENoZWNrIGlmIG1vZHVsZSBpcyBpbiBjYWNoZVxuXHR2YXIgY2FjaGVkTW9kdWxlID0gX193ZWJwYWNrX21vZHVsZV9jYWNoZV9fW21vZHVsZUlkXTtcblx0aWYgKGNhY2hlZE1vZHVsZSAhPT0gdW5kZWZpbmVkKSB7XG5cdFx0cmV0dXJuIGNhY2hlZE1vZHVsZS5leHBvcnRzO1xuXHR9XG5cdC8vIENyZWF0ZSBhIG5ldyBtb2R1bGUgKGFuZCBwdXQgaXQgaW50byB0aGUgY2FjaGUpXG5cdHZhciBtb2R1bGUgPSBfX3dlYnBhY2tfbW9kdWxlX2NhY2hlX19bbW9kdWxlSWRdID0ge1xuXHRcdC8vIG5vIG1vZHVsZS5pZCBuZWVkZWRcblx0XHQvLyBubyBtb2R1bGUubG9hZGVkIG5lZWRlZFxuXHRcdGV4cG9ydHM6IHt9XG5cdH07XG5cblx0Ly8gRXhlY3V0ZSB0aGUgbW9kdWxlIGZ1bmN0aW9uXG5cdF9fd2VicGFja19tb2R1bGVzX19bbW9kdWxlSWRdKG1vZHVsZSwgbW9kdWxlLmV4cG9ydHMsIF9fd2VicGFja19yZXF1aXJlX18pO1xuXG5cdC8vIFJldHVybiB0aGUgZXhwb3J0cyBvZiB0aGUgbW9kdWxlXG5cdHJldHVybiBtb2R1bGUuZXhwb3J0cztcbn1cblxuIiwiLy8gZGVmaW5lIGdldHRlciBmdW5jdGlvbnMgZm9yIGhhcm1vbnkgZXhwb3J0c1xuX193ZWJwYWNrX3JlcXVpcmVfXy5kID0gKGV4cG9ydHMsIGRlZmluaXRpb24pID0+IHtcblx0Zm9yKHZhciBrZXkgaW4gZGVmaW5pdGlvbikge1xuXHRcdGlmKF9fd2VicGFja19yZXF1aXJlX18ubyhkZWZpbml0aW9uLCBrZXkpICYmICFfX3dlYnBhY2tfcmVxdWlyZV9fLm8oZXhwb3J0cywga2V5KSkge1xuXHRcdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIGtleSwgeyBlbnVtZXJhYmxlOiB0cnVlLCBnZXQ6IGRlZmluaXRpb25ba2V5XSB9KTtcblx0XHR9XG5cdH1cbn07IiwiX193ZWJwYWNrX3JlcXVpcmVfXy5vID0gKG9iaiwgcHJvcCkgPT4gKE9iamVjdC5wcm90b3R5cGUuaGFzT3duUHJvcGVydHkuY2FsbChvYmosIHByb3ApKSIsIi8vIGRlZmluZSBfX2VzTW9kdWxlIG9uIGV4cG9ydHNcbl9fd2VicGFja19yZXF1aXJlX18uciA9IChleHBvcnRzKSA9PiB7XG5cdGlmKHR5cGVvZiBTeW1ib2wgIT09ICd1bmRlZmluZWQnICYmIFN5bWJvbC50b1N0cmluZ1RhZykge1xuXHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBTeW1ib2wudG9TdHJpbmdUYWcsIHsgdmFsdWU6ICdNb2R1bGUnIH0pO1xuXHR9XG5cdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCAnX19lc01vZHVsZScsIHsgdmFsdWU6IHRydWUgfSk7XG59OyIsIi8qKlxyXG4gKiBQYXJ0aWUgMSAtIFR5cGVzXHJcbiAqL1xyXG5jb25zb2xlLndhcm4oXCJUeXBlc1wiKTtcclxuaW1wb3J0IHsgbWVzVHlwZXMgfSBmcm9tIFwiLi9kb2NzL3R5cGVzXCI7XHJcbmNvbnNvbGUubG9nKCdtZXNUeXBlcy5hIDo+PiAnLCBtZXNUeXBlcy5hKTtcclxuY29uc29sZS5sb2coJ21lc1R5cGVzLmIgOj4+ICcsIG1lc1R5cGVzLmIpO1xyXG5jb25zb2xlLmxvZygnbWVzVHlwZXMuYyA6Pj4gJywgbWVzVHlwZXMuYyk7XHJcbmNvbnNvbGUubG9nKCdtZXNUeXBlcy5kIDo+PiAnLCBtZXNUeXBlcy5kKTtcclxuY29uc29sZS5sb2coJ21lc1R5cGVzLmUgOj4+ICcsIG1lc1R5cGVzLmUpO1xyXG5jb25zb2xlLmxvZygnbWVzVHlwZXMuZiA6Pj4gJywgbWVzVHlwZXMuZik7XHJcbmNvbnNvbGUubG9nKCdtZXNUeXBlcy5nIDo+PiAnLCBtZXNUeXBlcy5nKTtcclxuY29uc29sZS5sb2coJ21lc1R5cGVzLmggOj4+ICcsIG1lc1R5cGVzLmgpO1xyXG5jb25zb2xlLmxvZygnbWVzVHlwZXMuaSA6Pj4gJywgbWVzVHlwZXMuaSk7XHJcbmNvbnNvbGUubG9nKCdtZXNUeXBlcy5qIDo+PiAnLCBtZXNUeXBlcy5qKTtcclxuY29uc29sZS5sb2coJ21lc1R5cGVzLmsgOj4+ICcsIG1lc1R5cGVzLmspO1xyXG5jb25zb2xlLmxvZygnbWVzVHlwZXMubCA6Pj4gJywgbWVzVHlwZXMubCk7XHJcbmNvbnNvbGUubG9nKCdtZXNUeXBlcy5tIDo+PiAnLCBtZXNUeXBlcy5tKTtcclxuY29uc29sZS5sb2coJ21lc1R5cGVzLm4gOj4+ICcsIG1lc1R5cGVzLm4pO1xyXG4vKipcclxuICogUGFydGllIDIgLSBOYXJyb3dpbmdcclxuICogb3UgY29tbWVudCByw6lkdWlyZSBsYSBsaXN0ZSBkZXMgdHlwZXMgZGlzcG9uaWJsZXNcclxuICovXHJcbmNvbnNvbGUud2FybihcIk5hcnJvd2luZ1wiKTtcclxuaW1wb3J0IHsgcHJpbnRJZCwgaXNEYXRlLCBpc1VzZXIsIFRVc2VyIH0gZnJvbSBcIi4vZG9jcy9uYXJyb3dpbmdcIjtcclxucHJpbnRJZCgxMik7XHJcbnByaW50SWQoJ2EnKTtcclxucHJpbnRJZChudWxsKTtcclxubGV0IGJpcnRoRGF0ZSA9IG5ldyBEYXRlKCcwMy8wNC8xOTk2Jyk7XHJcbmNvbnNvbGUubG9nKCdEYXRlIFswMy8wNC8xOTk2XScsIGlzRGF0ZShiaXJ0aERhdGUpKTtcclxuY29uc29sZS5sb2coJ1N0cmluZyBbMDMvMDQvMTk5Nl0nLCBpc0RhdGUoJzAzLzA0LzE5OTYnKSk7XHJcbmxldCB1c2VyID0gbmV3IFRVc2VyKCdRdWVudGluJyk7XHJcbmNvbnNvbGUubG9nKCdpc1VzZXIodXNlciknLCBpc1VzZXIodXNlcikpO1xyXG5sZXQgeSA9IGlzVXNlcignVG90bycpO1xyXG5jb25zb2xlLmxvZygneSA6Pj4gJywgeSk7XHJcbi8qKlxyXG4gKiBQYXJ0aWUgMyAtIFR5cGVzIGN1c3RvbVxyXG4gKiBPbiBwZXV0IGNyw6llciBzZXMgcHJvcHJlcyB0eXBlc1xyXG4gKi9cclxuY29uc29sZS53YXJuKFwiQ3VzdG9tIFR5cGVzXCIpO1xyXG5sZXQgYWRtaW4gPSB7XHJcbiAgICBsYXN0TmFtZTogJ0dlZXJ0cycsXHJcbiAgICBmaXJzdE5hbWU6ICdRdWVudGluJyxcclxuICAgIHJvbGVJZDogNDJcclxufTtcclxuY29uc29sZS5sb2coJ2FkbWluIDo+PiAnLCBhZG1pbik7XHJcbmxldCBpZFRtcEludCA9IDQyO1xyXG5sZXQgaWRUbXBTdHJpbmcgPSBcIjQyXCI7XHJcbi8vIGxldCBpZFRtcEJvb2xlYW46IElkID0gdHJ1ZTsgLy8gTmUgZm9uY3Rpb25uZSBwYXNcclxuY29uc29sZS5sb2coJ2lkVG1wVHlwZSA6Pj4gJywgaWRUbXBJbnQpO1xyXG5jb25zb2xlLmxvZygnaWRUbXBUeXBlIDo+PiAnLCBpZFRtcFN0cmluZyk7XHJcbmxldCBkYXRlVG1wID0gXCIwMy8wNC8xOTk2XCI7XHJcbmNvbnNvbGUubG9nKCdkYXRlVG1wIDo+PiAnLCBkYXRlVG1wKTtcclxuLyoqXHJcbiAqIFBhcnRpZSA0IC0gR2VuZXJpY3NcclxuICovXHJcbmNvbnNvbGUud2FybihcIkdlbmVyaWNzXCIpO1xyXG5pbXBvcnQgeyBmblRhYiwgZm5UYWIyLCBnZXRMZW5ndGgsIGdldFByb3BlcnR5LCBnZXRVc2VycywgaWRlbnRpdHksIGlkZW50aXR5MiwgaWRlbnRpdHkzIH0gZnJvbSBcIi4vZG9jcy9nZW5lcmljc1wiO1xyXG5jb25zdCBpZDEgPSBpZGVudGl0eSgzKTsgLy8gT24gcGVyZCBsZSB0eXBhZ2UgZHluYW1pcXVlIHBhc3PDqSBlbiBwYXJhbcOodHJlIMOgIGNhdXNlIGR1IGFueVxyXG5jb25zb2xlLmxvZygnaWQxIDo+PiAnLCBpZDEpO1xyXG5jb25zb2xlLmxvZygndHlwZW9mIGlkMSA6Pj4gJywgdHlwZW9mIGlkMSk7XHJcbmNvbnN0IGlkMiA9IGlkZW50aXR5MignSGVsbG8nKTtcclxuY29uc29sZS5sb2coJ2lkMiA6Pj4gJywgaWQyKTtcclxuY29uc29sZS5sb2coJ3R5cGVvZiBpZDIgOj4+ICcsIHR5cGVvZiBpZDIpO1xyXG5jb25zdCBpZDNhID0gaWRlbnRpdHkzKCdDb3Vjb3UnKTsgLy8gVHlwZSBsaXRlcmFsIGRlIFwiQ291Y291XCJcclxuY29uc3QgaWQzYiA9IGlkZW50aXR5MygnSGV5bycpOyAvLyBSw6ljdXBlcmN1c3Npb24gZHUgdHlwZSBzdHJpbmcgc3VyIGxlIHR5cGUgZGUgYXJnIGV0IHJldG91clxyXG5jb25zb2xlLmxvZygnaWQzYSA6Pj4gJywgaWQzYSk7XHJcbmNvbnNvbGUubG9nKCd0eXBlb2YgaWQzYSA6Pj4gJywgdHlwZW9mIGlkM2EpO1xyXG5jb25zb2xlLmxvZygnaWQzYiA6Pj4gJywgaWQzYSk7XHJcbmNvbnNvbGUubG9nKCd0eXBlb2YgaWQzYiA6Pj4gJywgdHlwZW9mIGlkM2EpO1xyXG5jb25zdCBmdCA9IGZuVGFiKFsnYScsICdiJywgJ2MnXSk7XHJcbmNvbnNvbGUubG9nKCdmdCA6Pj4gJywgZnQpO1xyXG5jb25zdCBmdDIgPSBmblRhYjIoWzI2LCAxLCAnQycsIDQyXSk7XHJcbmNvbnNvbGUubG9nKCdmdDIgOj4+ICcsIGZ0Mik7XHJcbmNvbnN0IG15TGVuZ3RoID0gZ2V0TGVuZ3RoKCdCb25qb3VyJyk7XHJcbi8vIGNvbnN0IG15TGVuZ3RoMiA9IGdldExlbmd0aCg2KTsgLy8gTmUgZm9uY3Rpb25uZSBwYXMgY2FyIHVuIG51bWJlciBuZSBwb3Nzw6hkZSBwYXMgbGEgcHJvcHJpw6l0w6kgbGVuZ3RoXHJcbmNvbnN0IG15TGVuZ3RoMyA9IGdldExlbmd0aChbJ2EnLCAxLCB0cnVlXSk7XHJcbmNvbnNvbGUubG9nKCdteUxlbmd0aCA6Pj4gJywgbXlMZW5ndGgpO1xyXG5jb25zb2xlLmxvZygnbXlMZW5ndGgzIDo+PiAnLCBteUxlbmd0aDMpO1xyXG5pbXBvcnQgVXNlcnMgZnJvbSBcIi4vbW9kZWxzL1VzZXJzLm1vZGVsXCI7XHJcbmxldCBteVVzZXIgPSBuZXcgVXNlcnMoKTtcclxubXlVc2VyID0geyBsYXN0TmFtZTogXCJHZWVydHNcIiwgZmlyc3ROYW1lOiBcIlF1ZW50aW5cIiwgaWQ6IDQgfTtcclxuY29uc3QgZ3UxID0gZ2V0VXNlcnMobXlVc2VyKTtcclxuY29uc3QgZ3UyID0gZ2V0VXNlcnMobXlVc2VyKTtcclxuY29uc29sZS5sb2coJ2d1MSA6Pj4gJywgZ3UxKTtcclxuY29uc29sZS5sb2coJ2d1MiA6Pj4gJywgZ3UyKTtcclxuLy8gQXZlYyBjbGFzc2UgZ8OpbsOpcmlxdWVcclxuaW1wb3J0IHsgR2VuZXJpY051bWJlciB9IGZyb20gXCIuL2RvY3MvZ2VuZXJpY3NcIjtcclxubGV0IG5iID0gbmV3IEdlbmVyaWNOdW1iZXIoKTtcclxubmIuemVyb1ZhbHVlID0gMDtcclxubmIuYWRkID0gKHgsIHkpID0+IHggKyB5O1xyXG4vLyBVdGlsaXNhdGlvbiBkJ3VuZSBjbGVmIHF1aSBmYWl0IHBhcnRpZSBkJ3VuIG9iamV0XHJcbmxldCB4ID0geyBhOiAxLCBiOiAyLCBjOiAzLCBkOiA0IH07XHJcbmdldFByb3BlcnR5KHgsICdhJyk7XHJcbi8vIGdldFByb3BlcnR5KHgsICd6Jyk7IC8vIE5lIGZvbmN0aW9ubmUgcGFzIGNhciB4IG4nYSBwYXMgZGUgcHJvcHJpw6l0w6kgelxyXG4vKipcclxuICogUGFydGllIDUgLSBDbGFzc2VzXHJcbiAqL1xyXG4iLCJcInVzZSBzdHJpY3RcIjtcclxuLyoqXHJcbiAqIFBhcnRpZSAxIC0gRXhlcmNpY2UgMDFcclxuICovXHJcbi8vIENyw6llciB1biBjb2RlIHBlcm1ldHRhbnQgZGUgY3LDqWVyIHVuIGNvbXB0ZXVyIGNsYXNzaXF1ZSwgYXZlYyArIDEsIC0xIGV0ID0uLi4sIGlsIGZhdWRyYSB0eXBlIGxlIHRvdXQgYXUgbWF4aW11bSwgcHLDqXBhcmVyIDIgZm9uY3Rpb25zIHBvdXIgw6dhXHJcbi8vIGNvbnN0IGJ0blBsdXM6IEhUTUxCdXR0b25FbGVtZW50IHwgbnVsbCA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCIjY29tcHRldXJQXCIpO1xyXG4vLyBjb25zdCBidG5Nb2luczogSFRNTEJ1dHRvbkVsZW1lbnQgfCBudWxsID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcIiNjb21wdGV1ck1cIik7XHJcbi8vIGNvbnN0IHRvdGFsOiBIVE1MU3BhbkVsZW1lbnQgfCBudWxsID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcIiN0b3RhbFwiKTtcclxuLy8gbGV0IGFjdHVhbDogbnVtYmVyO1xyXG4vLyBpZiAodG90YWwpXHJcbi8vICAgICBhY3R1YWwgPSBwYXJzZUludCh0b3RhbC5pbm5lclRleHQpO1xyXG4vLyBjb25zdCBpbmNyZW1lbnQ6IChlOiBNb3VzZUV2ZW50KSA9PiB2b2lkID0gKGV2ZW50OiBNb3VzZUV2ZW50KTogdm9pZCA9PiB7XHJcbi8vICAgICBldmVudC5wcmV2ZW50RGVmYXVsdCgpO1xyXG4vLyAgICAgYWN0dWFsID0gYWN0dWFsICsgMTtcclxuLy8gICAgIGlmICh0b3RhbCkge1xyXG4vLyAgICAgICAgIC8vdG90YWwgLy9kbydmZmljZSB1biBlbGVtZW50XHJcbi8vICAgICAgICAgdG90YWwuaW5uZXJUZXh0ID0gYWN0dWFsLnRvU3RyaW5nKCk7XHJcbi8vICAgICB9XHJcbi8vIH07XHJcbi8vIGNvbnN0IGRlY3JlbWVudDogKGU6IE1vdXNlRXZlbnQpID0+IHZvaWQgPSAoZXZlbnQ6IE1vdXNlRXZlbnQpOiB2b2lkID0+IHtcclxuLy8gICAgIGV2ZW50LnByZXZlbnREZWZhdWx0KCk7XHJcbi8vICAgICBhY3R1YWwgPSBhY3R1YWwgLSAxO1xyXG4vLyAgICAgaWYgKHRvdGFsKVxyXG4vLyAgICAgICAgIHRvdGFsLmlubmVyVGV4dCA9IGFjdHVhbC50b1N0cmluZygpO1xyXG4vLyB9O1xyXG4vLyBpZiAoYnRuUGx1cylcclxuLy8gICAgIGJ0blBsdXMuYWRkRXZlbnRMaXN0ZW5lcihcImNsaWNrXCIsIGluY3JlbWVudCk7XHJcbi8vIGlmIChidG5Nb2lucylcclxuLy8gICAgIGJ0bk1vaW5zLmFkZEV2ZW50TGlzdGVuZXIoXCJjbGlja1wiLCBkZWNyZW1lbnQpO1xyXG4vKipcclxuICogUGFydGllIDQgLSBFeGVyY2ljZSAwMlxyXG4gKi9cclxuLy8gcmVwcmVuZHJlIGxlIGNvZGUgZGUgbCdleG9zIDEgZXQgdHJhbmZvcm1lciBsZSB0b3V0IGF2ZWMgZGVzIG5hcnJvd2luZyBldCBkZXMgZ2VuZXJpY3NcclxuLy8gY29uc3QgYnRuUGx1cyA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3I8SFRNTEJ1dHRvbkVsZW1lbnQ+KFwiI2NvbXB0ZXVyUFwiKTtcclxuLy8gY29uc3QgYnRuTW9pbnMgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yPEhUTUxCdXR0b25FbGVtZW50PihcIiNjb21wdGV1ck1cIik7XHJcbi8vIGNvbnN0IHRvdGFsID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcjxIVE1MU3BhbkVsZW1lbnQ+KFwiI3RvdGFsXCIpITtcclxuLy8gbGV0IGFjdHVhbCA9IDxudW1iZXI+cGFyc2VJbnQodG90YWwuaW5uZXJUZXh0KTtcclxuLy8gY29uc3QgaW5jcmVtZW50OiAoZTogTW91c2VFdmVudCkgPT4gdm9pZCA9IChldmVudDogTW91c2VFdmVudCk6IHZvaWQgPT4ge1xyXG4vLyAgICAgZXZlbnQucHJldmVudERlZmF1bHQoKTtcclxuLy8gICAgIGFjdHVhbCA9IGFjdHVhbCArIDE7XHJcbi8vICAgICB0b3RhbC5pbm5lclRleHQgPSBhY3R1YWwudG9TdHJpbmcoKTtcclxuLy8gfTtcclxuLy8gZnVuY3Rpb24gc2V0QWN0dWFsPEFyZ1R5cGU+IChuYjogQXJnVHlwZSk6IG51bWJlciB7XHJcbi8vICAgICBsZXQgYSA9IG5iIGFzIHVua25vd24gYXMgbnVtYmVyO1xyXG4vLyAgICAgYSA9IGEgLSAxO1xyXG4vLyAgICAgcmV0dXJuIGE7XHJcbi8vIH1cclxuLy8gZnVuY3Rpb24gZGVjcmVtZW50IChldmVudDogRXZlbnQpOiB2b2lkIHtcclxuLy8gICAgIGV2ZW50LnByZXZlbnREZWZhdWx0KCk7XHJcbi8vICAgICBhY3R1YWwgPSBzZXRBY3R1YWw8bnVtYmVyPihhY3R1YWwpO1xyXG4vLyAgICAgdG90YWwuaW5uZXJUZXh0ID0gYWN0dWFsLnRvU3RyaW5nKCk7XHJcbi8vIH1cclxuLy8gYnRuUGx1cz8uYWRkRXZlbnRMaXN0ZW5lcihcImNsaWNrXCIsIGluY3JlbWVudCk7XHJcbi8vIGJ0bk1vaW5zPy5hZGRFdmVudExpc3RlbmVyPGtleW9mIEhUTUxFbGVtZW50RXZlbnRNYXA+KFwiY2xpY2tcIiwgZGVjcmVtZW50KTtcclxuIl0sIm5hbWVzIjpbXSwic291cmNlUm9vdCI6IiJ9