/******/ (() => { // webpackBootstrap
/******/ 	"use strict";
/******/ 	var __webpack_modules__ = ({

/***/ "./src/docs/classes.ts":
/*!*****************************!*\
  !*** ./src/docs/classes.ts ***!
  \*****************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "AGeometryS": () => (/* binding */ AGeometryS),
/* harmony export */   "Allemande": () => (/* binding */ Allemande),
/* harmony export */   "Carre": () => (/* binding */ Carre),
/* harmony export */   "DateConverter": () => (/* binding */ DateConverter),
/* harmony export */   "Geometry": () => (/* binding */ Geometry),
/* harmony export */   "Point": () => (/* binding */ Point),
/* harmony export */   "Uuser": () => (/* binding */ Uuser),
/* harmony export */   "getX": () => (/* binding */ getX),
/* harmony export */   "getY": () => (/* binding */ getY)
/* harmony export */ });
/**
 * Partie 5 - Classes
 */
var __classPrivateFieldSet = (undefined && undefined.__classPrivateFieldSet) || function (receiver, state, value, kind, f) {
    if (kind === "m") throw new TypeError("Private method is not writable");
    if (kind === "a" && !f) throw new TypeError("Private accessor was defined without a setter");
    if (typeof state === "function" ? receiver !== state || !f : !state.has(receiver)) throw new TypeError("Cannot write private member to an object whose class did not declare it");
    return (kind === "a" ? f.call(receiver, value) : f ? f.value = value : state.set(receiver, value)), value;
};
var _Person__password;
class Human {
    constructor() {
        this.gender = '';
        this.height = 0;
        this.weight = 0;
        this._etnic = '';
        this.__colorEyes = 'red';
    }
}
// Les niveaux de portée des props dans une classe sont :
// public    → disponible partout
// private   → disponible uniquement dans la classe (seulement en TS !)
// protected → disponible uniquement dans la classe et ses sous-classes (seulement en TS !)
// #         → cfr. private - rend invisible en dehors de la classe (JS)
// Pour faire hériter une classe d'une autre => extends
// Attention, on ne peut pas accéder à une propriété enfant depuis un parent
// Attention, le constructeur du parent devra toujours être appelé dans l'enfant
// Initialisation des propriétés
// prop: type = valeur  → Initialisation par défaut des valeurs
// prop!: type          → Pas besoin d'initialiser lors de la déclaration mais doit être initialisé dans le constructeur (sauf abstract)
// prop?: type          → Peut prendre la valeur du type associé ou undefined
class Person extends Human {
    constructor(id, name, lastName, password) {
        super(); // Permet simplement de créer le parent
        _Person__password.set(this, void 0); // Private (JS)
        this._upperPassword = (password) => {
            return password.toUpperCase();
        };
        if (!password)
            password = 'coucou';
        __classPrivateFieldSet(this, _Person__password, this._upperPassword(password), "f");
        this.id = id;
        this.lastName = lastName;
        this.__colorEyes = 'blue';
    }
}
_Person__password = new WeakMap();
class Uuser extends Person {
    constructor() {
        super();
        this.login = '';
        this.__colorEyes = 'yellow';
    }
}
// Attention au Duck Typing (mauvaise pratique)
// Si je vois un oiseau qui vole comme un canard, cancane comme un canard, et nage comme un canard
// alors j'appelle cet oiseau un canard
class Point {
    constructor() {
        this.x = 5;
        this.y = 6;
    }
}
class Geometry {
    constructor() {
        this.x = 10;
        this.y = 100;
        this.other1 = 'ok';
        this.other2 = true;
    }
}
// Geometry contient les mêmes propriétés que Point
// Alors Geometry est un point
// Attention que l'ensemble des props doit être présent
function getX(p) {
    return p.x * p.y;
}
function getY(p) {
    if (p instanceof Geometry)
        return p.other1;
    else
        return p.x * p.y;
}
// Manière plus propre
// Introduction à l'abstract
class AGeometry {
    constructor() {
        this.x = 0;
        this.y = 0;
    }
}
// Une classe abstraite ne peut pas être instanciée car elle n'est pas terminée (not implemented)
// Obligation redéfinir les méthodes non implémentées au plus tard dans les classes 
// enfants qui héritent de la classe abstraite
// CTRL + ; sur la classe => Implement all inherited abstract classes
class Triangle extends AGeometry {
    perimetre() {
        throw new Error("Method not implemented.");
    }
    air() {
        throw new Error("Method not implemented.");
    }
}
class Points extends AGeometry {
    constructor() {
        super();
    }
    perimetre() {
        return (this.x + this.y);
    }
    air() {
        return (this.x * this.x);
    }
}
class Carre extends AGeometry {
    constructor() {
        super();
        this.cote = 0;
    }
    perimetre() {
        return (this.x * 4);
    }
    air() {
        return this.x * this.x;
    }
}
// Mot-clefs : static
class AGeometryS {
}
AGeometryS.origin = { x: 0, y: 0 };
class DateConverter {
    static convertTimeStampToDate(timestamp) {
        return new Date(parseInt(timestamp));
    }
}
class Allemande {
    constructor() {
        this.name = "Vive les allemandes";
        this.carburant = '';
        this.typeMoteur = '';
        this.giletJaune = 1;
        this.boiteVitesse = { auto: false, manual: true };
    }
    avance(vitesseActuel) {
        throw new Error("Method not implemented.");
    }
    recule(vitesseActuel) {
        throw new Error("Method not implemented.");
    }
}
// ✏️ Exercice 3


/***/ }),

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
const q = () => { throw new Error('Not implemented'); }; // lorsque la fonction ne renvoit JAMAIS rien
let r = 'a';
r = 1; // Pas sûr du contenu
r = true; // Pas sûr du contenu
let mesTypes = { a, b, c, d, e, f, g, h, i, j, k, l, m, n };
// Export grâce à module.exports, un objet lambda, qui contiendra toutes les variables
// Ce qui par la suite, dans notre app.ts, nous évitera des erreurs de nommage de variables déjà existantes
// Attention à l'indexation
const p = { 0: 'Quentin', 1: 42 }; // Tableau classique (clef: number)
// L'indexation transforme fictivement un objet en tableau associatif
const obj = { firstname: 'Quentin', age: 26 };
console.log('obj.age :>> ', obj.age); // output : 31
console.log('obj.firstname :>> ', obj.firstname); // output : Quentin
console.log('obj.["firstname"] :>> ', obj["firstname"]); // output : Quentin
// Attention que la dernière version est moins propre
// → dangeureux en cas de undefined ou unknow
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
/* harmony import */ var _docs_classes__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./docs/classes */ "./src/docs/classes.ts");
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
 * Partie 2 - Indexation
 */
/**
 * Partie 3 - Assertion de type
 */
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
console.warn("Classes");

let uuser = new _docs_classes__WEBPACK_IMPORTED_MODULE_4__.Uuser();
console.log('uuser :>> ', uuser);
// Duck Typing

console.log('getX(new Point) :>> ', (0,_docs_classes__WEBPACK_IMPORTED_MODULE_4__.getX)(new _docs_classes__WEBPACK_IMPORTED_MODULE_4__.Point));
console.log('getX(new Geometry) :>> ', (0,_docs_classes__WEBPACK_IMPORTED_MODULE_4__.getX)(new _docs_classes__WEBPACK_IMPORTED_MODULE_4__.Geometry));
console.log('getY(new Point) :>> ', (0,_docs_classes__WEBPACK_IMPORTED_MODULE_4__.getY)(new _docs_classes__WEBPACK_IMPORTED_MODULE_4__.Point));
console.log('getY(new Geometry) :>> ', (0,_docs_classes__WEBPACK_IMPORTED_MODULE_4__.getY)(new _docs_classes__WEBPACK_IMPORTED_MODULE_4__.Geometry));
console.log('new Carre :>> ', new _docs_classes__WEBPACK_IMPORTED_MODULE_4__.Carre);
// Mot-clef : static

const ags = _docs_classes__WEBPACK_IMPORTED_MODULE_4__.AGeometryS.origin; // On peut accéder à une propriété sans avoir à instancier la class (comme elle est abstrait, je ne peux déjà pas l'instancier 😉)
console.log('ags :>> ', ags);
console.log(_docs_classes__WEBPACK_IMPORTED_MODULE_4__.DateConverter.convertTimeStampToDate(new Date().getTime().toString()));
// Interfaces

let mercedes = new _docs_classes__WEBPACK_IMPORTED_MODULE_4__.Allemande();
let audi = new _docs_classes__WEBPACK_IMPORTED_MODULE_4__.Allemande();
audi.name = 'Vive les audis !';
console.log('mercedes :>> ', mercedes);
console.log('audi :>> ', audi);

})();

// This entry need to be wrapped in an IIFE because it need to be isolated against other entry modules.
(() => {
/*!**************************!*\
  !*** ./src/exercices.ts ***!
  \**************************/

/**
 * Partie 1 - ✏️ Exercice 01
 */
/**
 * Créer un code permettant de créer un compteur classique, avec + 1, -1 et =..., il faudra type le tout au maximum, préparer 2 fonctions pour ça
 */
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
 * Partie 4 - ✏️ Exercice 02
 */
/**
 * Reprendre le code de l'exos 1 et tranformer le tout avec des narrowing et des generics
 */
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
/**
 * Partie 5 - ✏️ Exercice 03
 */
/**
 * Préparer un micro jeu de type heroes vs monster, vous aurez 2 grandes classes, heroes et monster,
 * le but, étant de pouvoir instancier un nouveau hero et un monstre avec des caractèristiques différentes,
 * ils devront être stocker dans un objet tableau grace a une fonction,
 * il devront pouvoir s'affronter graçe a des points de vie, d'attaque et de défense,
 * si vous avez terminer dans les temps impartis, vous pouvez améliorer, utilisez votre imagination
 * requis: un generic, un narrowing, des classes, un static, une abstract, le tout entièrement typé !
 * n'hésitez par à utiliser l'html pour ça et le rendre encore plus chouette
 */ 

})();

/******/ })()
;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,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QUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSIsInNvdXJjZXMiOlsid2VicGFjazovL215LXdlYnBhY2stcHJvamVjdC8uL3NyYy9kb2NzL2NsYXNzZXMudHMiLCJ3ZWJwYWNrOi8vbXktd2VicGFjay1wcm9qZWN0Ly4vc3JjL2RvY3MvZ2VuZXJpY3MudHMiLCJ3ZWJwYWNrOi8vbXktd2VicGFjay1wcm9qZWN0Ly4vc3JjL2RvY3MvbmFycm93aW5nLnRzIiwid2VicGFjazovL215LXdlYnBhY2stcHJvamVjdC8uL3NyYy9kb2NzL3R5cGVzLnRzIiwid2VicGFjazovL215LXdlYnBhY2stcHJvamVjdC8uL3NyYy9tb2RlbHMvVXNlcnMubW9kZWwudHMiLCJ3ZWJwYWNrOi8vbXktd2VicGFjay1wcm9qZWN0L3dlYnBhY2svYm9vdHN0cmFwIiwid2VicGFjazovL215LXdlYnBhY2stcHJvamVjdC93ZWJwYWNrL3J1bnRpbWUvZGVmaW5lIHByb3BlcnR5IGdldHRlcnMiLCJ3ZWJwYWNrOi8vbXktd2VicGFjay1wcm9qZWN0L3dlYnBhY2svcnVudGltZS9oYXNPd25Qcm9wZXJ0eSBzaG9ydGhhbmQiLCJ3ZWJwYWNrOi8vbXktd2VicGFjay1wcm9qZWN0L3dlYnBhY2svcnVudGltZS9tYWtlIG5hbWVzcGFjZSBvYmplY3QiLCJ3ZWJwYWNrOi8vbXktd2VicGFjay1wcm9qZWN0Ly4vc3JjL2FwcC50cyIsIndlYnBhY2s6Ly9teS13ZWJwYWNrLXByb2plY3QvLi9zcmMvZXhlcmNpY2VzLnRzIl0sInNvdXJjZXNDb250ZW50IjpbIi8qKlxyXG4gKiBQYXJ0aWUgNSAtIENsYXNzZXNcclxuICovXHJcbnZhciBfX2NsYXNzUHJpdmF0ZUZpZWxkU2V0ID0gKHRoaXMgJiYgdGhpcy5fX2NsYXNzUHJpdmF0ZUZpZWxkU2V0KSB8fCBmdW5jdGlvbiAocmVjZWl2ZXIsIHN0YXRlLCB2YWx1ZSwga2luZCwgZikge1xyXG4gICAgaWYgKGtpbmQgPT09IFwibVwiKSB0aHJvdyBuZXcgVHlwZUVycm9yKFwiUHJpdmF0ZSBtZXRob2QgaXMgbm90IHdyaXRhYmxlXCIpO1xyXG4gICAgaWYgKGtpbmQgPT09IFwiYVwiICYmICFmKSB0aHJvdyBuZXcgVHlwZUVycm9yKFwiUHJpdmF0ZSBhY2Nlc3NvciB3YXMgZGVmaW5lZCB3aXRob3V0IGEgc2V0dGVyXCIpO1xyXG4gICAgaWYgKHR5cGVvZiBzdGF0ZSA9PT0gXCJmdW5jdGlvblwiID8gcmVjZWl2ZXIgIT09IHN0YXRlIHx8ICFmIDogIXN0YXRlLmhhcyhyZWNlaXZlcikpIHRocm93IG5ldyBUeXBlRXJyb3IoXCJDYW5ub3Qgd3JpdGUgcHJpdmF0ZSBtZW1iZXIgdG8gYW4gb2JqZWN0IHdob3NlIGNsYXNzIGRpZCBub3QgZGVjbGFyZSBpdFwiKTtcclxuICAgIHJldHVybiAoa2luZCA9PT0gXCJhXCIgPyBmLmNhbGwocmVjZWl2ZXIsIHZhbHVlKSA6IGYgPyBmLnZhbHVlID0gdmFsdWUgOiBzdGF0ZS5zZXQocmVjZWl2ZXIsIHZhbHVlKSksIHZhbHVlO1xyXG59O1xyXG52YXIgX1BlcnNvbl9fcGFzc3dvcmQ7XHJcbmNsYXNzIEh1bWFuIHtcclxuICAgIGNvbnN0cnVjdG9yKCkge1xyXG4gICAgICAgIHRoaXMuZ2VuZGVyID0gJyc7XHJcbiAgICAgICAgdGhpcy5oZWlnaHQgPSAwO1xyXG4gICAgICAgIHRoaXMud2VpZ2h0ID0gMDtcclxuICAgICAgICB0aGlzLl9ldG5pYyA9ICcnO1xyXG4gICAgICAgIHRoaXMuX19jb2xvckV5ZXMgPSAncmVkJztcclxuICAgIH1cclxufVxyXG4vLyBMZXMgbml2ZWF1eCBkZSBwb3J0w6llIGRlcyBwcm9wcyBkYW5zIHVuZSBjbGFzc2Ugc29udCA6XHJcbi8vIHB1YmxpYyAgICDihpIgZGlzcG9uaWJsZSBwYXJ0b3V0XHJcbi8vIHByaXZhdGUgICDihpIgZGlzcG9uaWJsZSB1bmlxdWVtZW50IGRhbnMgbGEgY2xhc3NlIChzZXVsZW1lbnQgZW4gVFMgISlcclxuLy8gcHJvdGVjdGVkIOKGkiBkaXNwb25pYmxlIHVuaXF1ZW1lbnQgZGFucyBsYSBjbGFzc2UgZXQgc2VzIHNvdXMtY2xhc3NlcyAoc2V1bGVtZW50IGVuIFRTICEpXHJcbi8vICMgICAgICAgICDihpIgY2ZyLiBwcml2YXRlIC0gcmVuZCBpbnZpc2libGUgZW4gZGVob3JzIGRlIGxhIGNsYXNzZSAoSlMpXHJcbi8vIFBvdXIgZmFpcmUgaMOpcml0ZXIgdW5lIGNsYXNzZSBkJ3VuZSBhdXRyZSA9PiBleHRlbmRzXHJcbi8vIEF0dGVudGlvbiwgb24gbmUgcGV1dCBwYXMgYWNjw6lkZXIgw6AgdW5lIHByb3ByacOpdMOpIGVuZmFudCBkZXB1aXMgdW4gcGFyZW50XHJcbi8vIEF0dGVudGlvbiwgbGUgY29uc3RydWN0ZXVyIGR1IHBhcmVudCBkZXZyYSB0b3Vqb3VycyDDqnRyZSBhcHBlbMOpIGRhbnMgbCdlbmZhbnRcclxuLy8gSW5pdGlhbGlzYXRpb24gZGVzIHByb3ByacOpdMOpc1xyXG4vLyBwcm9wOiB0eXBlID0gdmFsZXVyICDihpIgSW5pdGlhbGlzYXRpb24gcGFyIGTDqWZhdXQgZGVzIHZhbGV1cnNcclxuLy8gcHJvcCE6IHR5cGUgICAgICAgICAg4oaSIFBhcyBiZXNvaW4gZCdpbml0aWFsaXNlciBsb3JzIGRlIGxhIGTDqWNsYXJhdGlvbiBtYWlzIGRvaXQgw6p0cmUgaW5pdGlhbGlzw6kgZGFucyBsZSBjb25zdHJ1Y3RldXIgKHNhdWYgYWJzdHJhY3QpXHJcbi8vIHByb3A/OiB0eXBlICAgICAgICAgIOKGkiBQZXV0IHByZW5kcmUgbGEgdmFsZXVyIGR1IHR5cGUgYXNzb2Npw6kgb3UgdW5kZWZpbmVkXHJcbmNsYXNzIFBlcnNvbiBleHRlbmRzIEh1bWFuIHtcclxuICAgIGNvbnN0cnVjdG9yKGlkLCBuYW1lLCBsYXN0TmFtZSwgcGFzc3dvcmQpIHtcclxuICAgICAgICBzdXBlcigpOyAvLyBQZXJtZXQgc2ltcGxlbWVudCBkZSBjcsOpZXIgbGUgcGFyZW50XHJcbiAgICAgICAgX1BlcnNvbl9fcGFzc3dvcmQuc2V0KHRoaXMsIHZvaWQgMCk7IC8vIFByaXZhdGUgKEpTKVxyXG4gICAgICAgIHRoaXMuX3VwcGVyUGFzc3dvcmQgPSAocGFzc3dvcmQpID0+IHtcclxuICAgICAgICAgICAgcmV0dXJuIHBhc3N3b3JkLnRvVXBwZXJDYXNlKCk7XHJcbiAgICAgICAgfTtcclxuICAgICAgICBpZiAoIXBhc3N3b3JkKVxyXG4gICAgICAgICAgICBwYXNzd29yZCA9ICdjb3Vjb3UnO1xyXG4gICAgICAgIF9fY2xhc3NQcml2YXRlRmllbGRTZXQodGhpcywgX1BlcnNvbl9fcGFzc3dvcmQsIHRoaXMuX3VwcGVyUGFzc3dvcmQocGFzc3dvcmQpLCBcImZcIik7XHJcbiAgICAgICAgdGhpcy5pZCA9IGlkO1xyXG4gICAgICAgIHRoaXMubGFzdE5hbWUgPSBsYXN0TmFtZTtcclxuICAgICAgICB0aGlzLl9fY29sb3JFeWVzID0gJ2JsdWUnO1xyXG4gICAgfVxyXG59XHJcbl9QZXJzb25fX3Bhc3N3b3JkID0gbmV3IFdlYWtNYXAoKTtcclxuZXhwb3J0IGNsYXNzIFV1c2VyIGV4dGVuZHMgUGVyc29uIHtcclxuICAgIGNvbnN0cnVjdG9yKCkge1xyXG4gICAgICAgIHN1cGVyKCk7XHJcbiAgICAgICAgdGhpcy5sb2dpbiA9ICcnO1xyXG4gICAgICAgIHRoaXMuX19jb2xvckV5ZXMgPSAneWVsbG93JztcclxuICAgIH1cclxufVxyXG4vLyBBdHRlbnRpb24gYXUgRHVjayBUeXBpbmcgKG1hdXZhaXNlIHByYXRpcXVlKVxyXG4vLyBTaSBqZSB2b2lzIHVuIG9pc2VhdSBxdWkgdm9sZSBjb21tZSB1biBjYW5hcmQsIGNhbmNhbmUgY29tbWUgdW4gY2FuYXJkLCBldCBuYWdlIGNvbW1lIHVuIGNhbmFyZFxyXG4vLyBhbG9ycyBqJ2FwcGVsbGUgY2V0IG9pc2VhdSB1biBjYW5hcmRcclxuZXhwb3J0IGNsYXNzIFBvaW50IHtcclxuICAgIGNvbnN0cnVjdG9yKCkge1xyXG4gICAgICAgIHRoaXMueCA9IDU7XHJcbiAgICAgICAgdGhpcy55ID0gNjtcclxuICAgIH1cclxufVxyXG5leHBvcnQgY2xhc3MgR2VvbWV0cnkge1xyXG4gICAgY29uc3RydWN0b3IoKSB7XHJcbiAgICAgICAgdGhpcy54ID0gMTA7XHJcbiAgICAgICAgdGhpcy55ID0gMTAwO1xyXG4gICAgICAgIHRoaXMub3RoZXIxID0gJ29rJztcclxuICAgICAgICB0aGlzLm90aGVyMiA9IHRydWU7XHJcbiAgICB9XHJcbn1cclxuLy8gR2VvbWV0cnkgY29udGllbnQgbGVzIG3Dqm1lcyBwcm9wcmnDqXTDqXMgcXVlIFBvaW50XHJcbi8vIEFsb3JzIEdlb21ldHJ5IGVzdCB1biBwb2ludFxyXG4vLyBBdHRlbnRpb24gcXVlIGwnZW5zZW1ibGUgZGVzIHByb3BzIGRvaXQgw6p0cmUgcHLDqXNlbnRcclxuZXhwb3J0IGZ1bmN0aW9uIGdldFgocCkge1xyXG4gICAgcmV0dXJuIHAueCAqIHAueTtcclxufVxyXG5leHBvcnQgZnVuY3Rpb24gZ2V0WShwKSB7XHJcbiAgICBpZiAocCBpbnN0YW5jZW9mIEdlb21ldHJ5KVxyXG4gICAgICAgIHJldHVybiBwLm90aGVyMTtcclxuICAgIGVsc2VcclxuICAgICAgICByZXR1cm4gcC54ICogcC55O1xyXG59XHJcbi8vIE1hbmnDqHJlIHBsdXMgcHJvcHJlXHJcbi8vIEludHJvZHVjdGlvbiDDoCBsJ2Fic3RyYWN0XHJcbmNsYXNzIEFHZW9tZXRyeSB7XHJcbiAgICBjb25zdHJ1Y3RvcigpIHtcclxuICAgICAgICB0aGlzLnggPSAwO1xyXG4gICAgICAgIHRoaXMueSA9IDA7XHJcbiAgICB9XHJcbn1cclxuLy8gVW5lIGNsYXNzZSBhYnN0cmFpdGUgbmUgcGV1dCBwYXMgw6p0cmUgaW5zdGFuY2nDqWUgY2FyIGVsbGUgbidlc3QgcGFzIHRlcm1pbsOpZSAobm90IGltcGxlbWVudGVkKVxyXG4vLyBPYmxpZ2F0aW9uIHJlZMOpZmluaXIgbGVzIG3DqXRob2RlcyBub24gaW1wbMOpbWVudMOpZXMgYXUgcGx1cyB0YXJkIGRhbnMgbGVzIGNsYXNzZXMgXHJcbi8vIGVuZmFudHMgcXVpIGjDqXJpdGVudCBkZSBsYSBjbGFzc2UgYWJzdHJhaXRlXHJcbi8vIENUUkwgKyA7IHN1ciBsYSBjbGFzc2UgPT4gSW1wbGVtZW50IGFsbCBpbmhlcml0ZWQgYWJzdHJhY3QgY2xhc3Nlc1xyXG5jbGFzcyBUcmlhbmdsZSBleHRlbmRzIEFHZW9tZXRyeSB7XHJcbiAgICBwZXJpbWV0cmUoKSB7XHJcbiAgICAgICAgdGhyb3cgbmV3IEVycm9yKFwiTWV0aG9kIG5vdCBpbXBsZW1lbnRlZC5cIik7XHJcbiAgICB9XHJcbiAgICBhaXIoKSB7XHJcbiAgICAgICAgdGhyb3cgbmV3IEVycm9yKFwiTWV0aG9kIG5vdCBpbXBsZW1lbnRlZC5cIik7XHJcbiAgICB9XHJcbn1cclxuY2xhc3MgUG9pbnRzIGV4dGVuZHMgQUdlb21ldHJ5IHtcclxuICAgIGNvbnN0cnVjdG9yKCkge1xyXG4gICAgICAgIHN1cGVyKCk7XHJcbiAgICB9XHJcbiAgICBwZXJpbWV0cmUoKSB7XHJcbiAgICAgICAgcmV0dXJuICh0aGlzLnggKyB0aGlzLnkpO1xyXG4gICAgfVxyXG4gICAgYWlyKCkge1xyXG4gICAgICAgIHJldHVybiAodGhpcy54ICogdGhpcy54KTtcclxuICAgIH1cclxufVxyXG5leHBvcnQgY2xhc3MgQ2FycmUgZXh0ZW5kcyBBR2VvbWV0cnkge1xyXG4gICAgY29uc3RydWN0b3IoKSB7XHJcbiAgICAgICAgc3VwZXIoKTtcclxuICAgICAgICB0aGlzLmNvdGUgPSAwO1xyXG4gICAgfVxyXG4gICAgcGVyaW1ldHJlKCkge1xyXG4gICAgICAgIHJldHVybiAodGhpcy54ICogNCk7XHJcbiAgICB9XHJcbiAgICBhaXIoKSB7XHJcbiAgICAgICAgcmV0dXJuIHRoaXMueCAqIHRoaXMueDtcclxuICAgIH1cclxufVxyXG4vLyBNb3QtY2xlZnMgOiBzdGF0aWNcclxuZXhwb3J0IGNsYXNzIEFHZW9tZXRyeVMge1xyXG59XHJcbkFHZW9tZXRyeVMub3JpZ2luID0geyB4OiAwLCB5OiAwIH07XHJcbmV4cG9ydCBjbGFzcyBEYXRlQ29udmVydGVyIHtcclxuICAgIHN0YXRpYyBjb252ZXJ0VGltZVN0YW1wVG9EYXRlKHRpbWVzdGFtcCkge1xyXG4gICAgICAgIHJldHVybiBuZXcgRGF0ZShwYXJzZUludCh0aW1lc3RhbXApKTtcclxuICAgIH1cclxufVxyXG5leHBvcnQgY2xhc3MgQWxsZW1hbmRlIHtcclxuICAgIGNvbnN0cnVjdG9yKCkge1xyXG4gICAgICAgIHRoaXMubmFtZSA9IFwiVml2ZSBsZXMgYWxsZW1hbmRlc1wiO1xyXG4gICAgICAgIHRoaXMuY2FyYnVyYW50ID0gJyc7XHJcbiAgICAgICAgdGhpcy50eXBlTW90ZXVyID0gJyc7XHJcbiAgICAgICAgdGhpcy5naWxldEphdW5lID0gMTtcclxuICAgICAgICB0aGlzLmJvaXRlVml0ZXNzZSA9IHsgYXV0bzogZmFsc2UsIG1hbnVhbDogdHJ1ZSB9O1xyXG4gICAgfVxyXG4gICAgYXZhbmNlKHZpdGVzc2VBY3R1ZWwpIHtcclxuICAgICAgICB0aHJvdyBuZXcgRXJyb3IoXCJNZXRob2Qgbm90IGltcGxlbWVudGVkLlwiKTtcclxuICAgIH1cclxuICAgIHJlY3VsZSh2aXRlc3NlQWN0dWVsKSB7XHJcbiAgICAgICAgdGhyb3cgbmV3IEVycm9yKFwiTWV0aG9kIG5vdCBpbXBsZW1lbnRlZC5cIik7XHJcbiAgICB9XHJcbn1cclxuLy8g4pyP77iPIEV4ZXJjaWNlIDNcclxuIiwiLyoqXHJcbiAqIFBhcnRpZSA0IC0gR2VuZXJpY3NcclxuICovXHJcbmV4cG9ydCBmdW5jdGlvbiBpZGVudGl0eShhcmcpIHtcclxuICAgIHJldHVybiBhcmc7XHJcbn1cclxuZXhwb3J0IGZ1bmN0aW9uIGlkZW50aXR5MihhcmcpIHtcclxuICAgIHJldHVybiBhcmc7XHJcbn1cclxuZXhwb3J0IGZ1bmN0aW9uIGlkZW50aXR5MyhhcmcpIHtcclxuICAgIHJldHVybiBhcmc7XHJcbn1cclxuLy8gRXhlbXBsZSBhdmVjIHVuIHRhYmxlYXVcclxuZXhwb3J0IGZ1bmN0aW9uIGZuVGFiKGFyZykge1xyXG4gICAgcmV0dXJuIGFyZ1swXTtcclxufVxyXG4vLyBBdXRyZSBleGVtcGxlIGF2ZWMgdW4gdGFibGVhdSBkZSAyIHR5cGVzXHJcbmV4cG9ydCBmdW5jdGlvbiBmblRhYjIoYXJnKSB7XHJcbiAgICByZXR1cm4gYXJnWzBdO1xyXG59XHJcbi8vIETDqWZpbmlyIHF1ZSBsZSBnw6luw6lyaXF1ZSB2YSBjb250ZW5pciB1bmUgcHJvcHJpw6l0w6kgJ2xlbmd0aCdcclxuZXhwb3J0IGZ1bmN0aW9uIGdldExlbmd0aChhcmcpIHtcclxuICAgIGNvbnNvbGUubG9nKCdhcmcubGVuZ3RoIDo+PiAnLCBhcmcubGVuZ3RoKTtcclxuICAgIHJldHVybiBhcmc7XHJcbn1cclxuZXhwb3J0IGZ1bmN0aW9uIGdldFVzZXJzKGFyZykge1xyXG4gICAgY29uc29sZS5sb2coJ2FyZy5pZCA6Pj4gJywgYXJnLmlkKTtcclxuICAgIHJldHVybiBhcmcuaWQ7XHJcbn1cclxuLy8gRGFucyB1bmUgY2xhc3NlIGfDqW7DqXJpcXVlXHJcbmV4cG9ydCBjbGFzcyBHZW5lcmljTnVtYmVyIHtcclxufVxyXG4vLyBVdGlsaXNhdGlvbiBkJ3VuZSBjbGVmIHF1aSBmYWl0IHBhcnRpZSBkZSBsJ29iamV0XHJcbmV4cG9ydCBmdW5jdGlvbiBnZXRQcm9wZXJ0eShvYmosIGtleSkge1xyXG4gICAgcmV0dXJuIG9ialtrZXldO1xyXG59XHJcbi8vIOKcj++4jyBFeGVyY2ljZSAwMlxyXG4iLCIvKipcclxuICogUGFydGllIC0gTmFycm93aW5nXHJcbiAqIG91IGNvbW1lbnQgcsOpZHVpcmUgbGEgbGlzdGUgZGVzIHR5cGVzIGRpc3BvbmlibGVzXHJcbiAqL1xyXG5sZXQgYnRuX2luYyA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJyNpbmNyZW1lbnQnKTsgLy8gRWxlbWVudCB8IE51bGxcclxubGV0IGJ0bl9pbmMyID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignI2luY3JlbWVudCcpOyAvLyBFbGVtZW50XHJcbmxldCBidG5faW5jMyA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJyNpbmNyZW1lbnQnKTsgLy8gSFRNTEJ1dHRvbkVsZW1lbnRcclxuLy8g8J+qpyBBdHRlbnRpb24gcG91ciBidG5faW5jMiBldCBidG5faW5jMywgdm91cyBlbXDDqmNoZXogbGUgcXVlcnlTZWxlY3RvciBkZSBmb25jdGlvbm5lciBjb3JyZWN0ZW1lbnQgZW4gY2FzIGRlIG51bGxcclxuLy8gTGUgbWlldXggc2VyYSBkJ3V0aWxpc2VyIGRlcyBjb25kaXRpb25zIGF1IGxpZXUgZHUgbmFycm93aW5nICchJyBvdSAnYXMnXHJcbi8vIEF1dHJlIGV4ZW1wbGVcclxubGV0IGJ0bl9kZWMgPSAoZXZlbnQpID0+IHtcclxuICAgIGV2ZW50LnByZXZlbnREZWZhdWx0KCk7XHJcbiAgICBjb25zdCBpbnB1dCA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCIjcmVzXCIpOyAvLyBIVE1MSW5wdXRFbGVtZW50IG91IG51bGxcclxuICAgIGlmIChpbnB1dCkge1xyXG4gICAgICAgIC8vIEhUTUxJbnB1dEVsZW1lbnRcclxuICAgICAgICAvLyBQcmVtaWVyIMOpbMOpbWVudCBkdSBuYXJyb3dpbmcsIGonYWkgw6lsaW1pbmVyIGxlIGZhaXQgcXUnaWwgcHVpc3NlIMOqdHJlIG51bGxcclxuICAgIH1cclxuICAgIGVsc2Uge1xyXG4gICAgICAgIC8vIG51bGxcclxuICAgIH1cclxufTtcclxuLy8gQXV0cmUgZXhlbXBsZSAoYXZlYyB1biBpZClcclxuZXhwb3J0IGZ1bmN0aW9uIHByaW50SWQoaWQpIHtcclxuICAgIGlmIChpZCkge1xyXG4gICAgICAgIC8vIHN0cmluZyB8IG51bWJlclxyXG4gICAgICAgIGlmICh0eXBlb2YgaWQgPT09IFwibnVtYmVyXCIpIHtcclxuICAgICAgICAgICAgY29uc29sZS5sb2coJ2lkIDo+PicsIGlkKTsgLy8gU2ltdWzDqSwgdW4gYWxnbyBkZSB0cmF2YWlsIHN1ciBsJ2lkLCBldCBlbnJlZ2lzdHJlbWVudCBlbiBkYiBzcMOpY2lmaXF1ZSBkYW5zIGRlcyBmb25jdGlvbnNcclxuICAgICAgICB9XHJcbiAgICAgICAgZWxzZSB7XHJcbiAgICAgICAgICAgIGxldCB0bXBJZCA9IHBhcnNlSW50KGlkKTtcclxuICAgICAgICAgICAgY29uc29sZS5sb2coJ2lkIDo+PicsIHRtcElkKTtcclxuICAgICAgICAgICAgLy8gVHJhaXRlbWVudCBkdSBjYXMgbnVtYmVyIGRpcmVjdFxyXG4gICAgICAgIH1cclxuICAgIH1cclxuICAgIGVsc2Uge1xyXG4gICAgICAgIC8vIG51bGxcclxuICAgICAgICBpZCA9IDQyO1xyXG4gICAgICAgIGNvbnNvbGUubG9nKCdpZCA6Pj4nLCBpZCk7XHJcbiAgICB9XHJcbn1cclxuLy8g4pyP77iPIMOpY3JpcmUgbCdleGVtcGxlIGRhbnMgLi9hcHAudHNcclxuLy8gQXV0cmUgZXhlbXBsZSAoZG91YmxlIHZhcmlhYmxlIGxvY2FsZSlcclxuZnVuY3Rpb24gZXhlbXBsZU4oYSwgYikge1xyXG4gICAgaWYgKGEgPT09IGIpIHtcclxuICAgICAgICBjb25zb2xlLmxvZyhhKTsgLy8gaWNpIGlsIHNlcmEgZCdvZmZpY2UgZW4gc3RyaW5nXHJcbiAgICAgICAgLy8gTGUgc2V1bCBwb2ludCBjb21tdW4gZW50cmUgYSBldCBiIGVzdCBzdHJpbmdcclxuICAgIH1cclxufVxyXG5mdW5jdGlvbiBleGVtcGxlT3BlcmF0b3IoYSkge1xyXG4gICAgLy8gRXhlbXBsZSBzaSBhIMOpdGFpdCB1biBtb3VzZUV2ZW50XHJcbiAgICAvLyBNb3VzZUV2ZW50IMOpdGFudCB1biB0eXBlIFR5cGVTY3JpcHQsIGlsIG4nZXN0IHBhcyByZWNvbm51IHBhciBsZSB0eXBlb2YgbmF0aWYgYSBKUyEgXHJcbiAgICAvLyBpZiAodHlwZW9mIGEgPT09IFwiTW91c2VFdmVudFwiKSB7IH1cclxuICAgIGlmIChcInZhbHVlXCIgaW4gYSkge1xyXG4gICAgICAgIGNvbnNvbGUubG9nKGEpOyAvLyB2YWx1ZSBlc3QgdW5lIHByb3ByacOpdMOpIGRlIEhUTUxJbnB1dEVsZW1lbnRcclxuICAgIH1cclxuICAgIGVsc2UgaWYgKFwidG90b1wiIGluIGEpIHtcclxuICAgICAgICBjb25zb2xlLmxvZyhhKTsgLy8gTmUgcGFzc2VyYSBqYW1haXNcclxuICAgIH1cclxuICAgIGVsc2Uge1xyXG4gICAgICAgIGNvbnNvbGUubG9nKGEpOyAvLyBNb3VzZUV2ZW50XHJcbiAgICB9XHJcbn1cclxuLy8gQXV0cmUgY2FzXHJcbi8vIEplIHZldXggZMOpZmluaXIgb2JsaWdhdG9pcmVtZW50IHVuIHJldG91ciBEYXRlIHN1ciBhXHJcbmV4cG9ydCBmdW5jdGlvbiBpc0RhdGUoYSkge1xyXG4gICAgcmV0dXJuIGEgaW5zdGFuY2VvZiBEYXRlO1xyXG59XHJcbi8vIOKcj++4jyDDqWNyaXJlIGwnZXhlbXBsZSBkYW5zIC4vYXBwLnRzXHJcbi8vIENhcyBwbHVzIGNvbmNyZXRcclxuZXhwb3J0IGNsYXNzIFRVc2VyIHtcclxuICAgIGNvbnN0cnVjdG9yKG5hbWUpIHsgdGhpcy5uYW1lID0gbmFtZTsgfVxyXG59XHJcbmV4cG9ydCBmdW5jdGlvbiBpc1VzZXIoYSkge1xyXG4gICAgcmV0dXJuIGEgaW5zdGFuY2VvZiBUVXNlcjtcclxufVxyXG4vLyBPbiBhdXJhaXQgdHLDqHMgYmllbiBwdSBtZXR0cmUgOiBib29sZWFuIGVuIHJldG91ciBkZSBmb25jdGlvblxyXG4vLyBNYWlzLCBkYW5zIGxhIGxlY3R1cmUgZGUgbGEgZG9jIGF1IHN1cnZvbCBkZSBsYSBmb25jdGlvbixcclxuLy8gaWwgZXN0IHBsdXMgaW50w6lyZXNzYW50IGRlIHNhdm9pciBxdWUgbGUgcmV0b3VyIGQndW4gYm9vbMOpZW4gXHJcbi8vIHNlcmEgc3VyIHVuIFRVc2VyIGV0IG5vbiBkJ3VuIGJvb2zDqWVuXHJcbi8vIOKcj++4jyDDqWNyaXJlIGwnZXhlbXBsZSBkYW5zIC4vYXBwLnRzXHJcbiIsIi8qKlxyXG4gKiBQYXJ0aWUgLSBUeXBlc1xyXG4gKi9cclxuY29uc3QgYSA9IFwiQm9uam91ciDDoCB0b3VzXCI7XHJcbmNvbnN0IGIgPSA0MjtcclxuY29uc3QgYyA9IHRydWU7XHJcbmNvbnN0IGQgPSBudWxsO1xyXG5jb25zdCBlID0gW1wiQm9uam91clwiLCBcIsOgXCIsIFwidG91c1wiXTtcclxuY29uc3QgZiA9IFsxLCAyLCAzLCA0LCA1XTtcclxuY29uc3QgZyA9IFtcIkhlbGxvXCIsIHt9LCBbXSwgNDIsIGZhbHNlXTtcclxuY29uc3QgaCA9IHt9O1xyXG5jb25zdCBpID0geyBmaXJzdG5hbWU6ICdRdWVudGluJywgYWdlOiAyNiB9O1xyXG5jb25zdCBqID0geyBoZWxsbzogXCJDb3Vjb3VcIiB9O1xyXG5jb25zdCBrID0gbmV3IERhdGUoKTtcclxuY29uc3QgbCA9ICgpID0+IHsgfTtcclxuY29uc3QgbSA9ICgpID0+IHsgfTtcclxuY29uc3QgbiA9IChpLCBzLCBiKSA9PiBbJ2EnLCAnYiddO1xyXG4vLyBjb25zdCBvOiBIVE1MU3BhbkVsZW1lbnQgPSBuZXcgSFRNTFNwYW5FbGVtZW50KCk7XHJcbi8vIGNvbnN0IHA6IEVsZW1lbnQgPSBuZXcgRWxlbWVudCgpO1xyXG5jb25zdCBxID0gKCkgPT4geyB0aHJvdyBuZXcgRXJyb3IoJ05vdCBpbXBsZW1lbnRlZCcpOyB9OyAvLyBsb3JzcXVlIGxhIGZvbmN0aW9uIG5lIHJlbnZvaXQgSkFNQUlTIHJpZW5cclxubGV0IHIgPSAnYSc7XHJcbnIgPSAxOyAvLyBQYXMgc8O7ciBkdSBjb250ZW51XHJcbnIgPSB0cnVlOyAvLyBQYXMgc8O7ciBkdSBjb250ZW51XHJcbmV4cG9ydCBsZXQgbWVzVHlwZXMgPSB7IGEsIGIsIGMsIGQsIGUsIGYsIGcsIGgsIGksIGosIGssIGwsIG0sIG4gfTtcclxuLy8gRXhwb3J0IGdyw6JjZSDDoCBtb2R1bGUuZXhwb3J0cywgdW4gb2JqZXQgbGFtYmRhLCBxdWkgY29udGllbmRyYSB0b3V0ZXMgbGVzIHZhcmlhYmxlc1xyXG4vLyBDZSBxdWkgcGFyIGxhIHN1aXRlLCBkYW5zIG5vdHJlIGFwcC50cywgbm91cyDDqXZpdGVyYSBkZXMgZXJyZXVycyBkZSBub21tYWdlIGRlIHZhcmlhYmxlcyBkw6lqw6AgZXhpc3RhbnRlc1xyXG4vLyBBdHRlbnRpb24gw6AgbCdpbmRleGF0aW9uXHJcbmNvbnN0IHAgPSB7IDA6ICdRdWVudGluJywgMTogNDIgfTsgLy8gVGFibGVhdSBjbGFzc2lxdWUgKGNsZWY6IG51bWJlcilcclxuLy8gTCdpbmRleGF0aW9uIHRyYW5zZm9ybWUgZmljdGl2ZW1lbnQgdW4gb2JqZXQgZW4gdGFibGVhdSBhc3NvY2lhdGlmXHJcbmNvbnN0IG9iaiA9IHsgZmlyc3RuYW1lOiAnUXVlbnRpbicsIGFnZTogMjYgfTtcclxuY29uc29sZS5sb2coJ29iai5hZ2UgOj4+ICcsIG9iai5hZ2UpOyAvLyBvdXRwdXQgOiAzMVxyXG5jb25zb2xlLmxvZygnb2JqLmZpcnN0bmFtZSA6Pj4gJywgb2JqLmZpcnN0bmFtZSk7IC8vIG91dHB1dCA6IFF1ZW50aW5cclxuY29uc29sZS5sb2coJ29iai5bXCJmaXJzdG5hbWVcIl0gOj4+ICcsIG9ialtcImZpcnN0bmFtZVwiXSk7IC8vIG91dHB1dCA6IFF1ZW50aW5cclxuLy8gQXR0ZW50aW9uIHF1ZSBsYSBkZXJuacOocmUgdmVyc2lvbiBlc3QgbW9pbnMgcHJvcHJlXHJcbi8vIOKGkiBkYW5nZXVyZXV4IGVuIGNhcyBkZSB1bmRlZmluZWQgb3UgdW5rbm93XHJcbi8vIOKcj++4jyBFeGVyY2ljZSAwMVxyXG4iLCJleHBvcnQgZGVmYXVsdCBjbGFzcyBVc2VycyB7XHJcbn1cclxuIiwiLy8gVGhlIG1vZHVsZSBjYWNoZVxudmFyIF9fd2VicGFja19tb2R1bGVfY2FjaGVfXyA9IHt9O1xuXG4vLyBUaGUgcmVxdWlyZSBmdW5jdGlvblxuZnVuY3Rpb24gX193ZWJwYWNrX3JlcXVpcmVfXyhtb2R1bGVJZCkge1xuXHQvLyBDaGVjayBpZiBtb2R1bGUgaXMgaW4gY2FjaGVcblx0dmFyIGNhY2hlZE1vZHVsZSA9IF9fd2VicGFja19tb2R1bGVfY2FjaGVfX1ttb2R1bGVJZF07XG5cdGlmIChjYWNoZWRNb2R1bGUgIT09IHVuZGVmaW5lZCkge1xuXHRcdHJldHVybiBjYWNoZWRNb2R1bGUuZXhwb3J0cztcblx0fVxuXHQvLyBDcmVhdGUgYSBuZXcgbW9kdWxlIChhbmQgcHV0IGl0IGludG8gdGhlIGNhY2hlKVxuXHR2YXIgbW9kdWxlID0gX193ZWJwYWNrX21vZHVsZV9jYWNoZV9fW21vZHVsZUlkXSA9IHtcblx0XHQvLyBubyBtb2R1bGUuaWQgbmVlZGVkXG5cdFx0Ly8gbm8gbW9kdWxlLmxvYWRlZCBuZWVkZWRcblx0XHRleHBvcnRzOiB7fVxuXHR9O1xuXG5cdC8vIEV4ZWN1dGUgdGhlIG1vZHVsZSBmdW5jdGlvblxuXHRfX3dlYnBhY2tfbW9kdWxlc19fW21vZHVsZUlkXShtb2R1bGUsIG1vZHVsZS5leHBvcnRzLCBfX3dlYnBhY2tfcmVxdWlyZV9fKTtcblxuXHQvLyBSZXR1cm4gdGhlIGV4cG9ydHMgb2YgdGhlIG1vZHVsZVxuXHRyZXR1cm4gbW9kdWxlLmV4cG9ydHM7XG59XG5cbiIsIi8vIGRlZmluZSBnZXR0ZXIgZnVuY3Rpb25zIGZvciBoYXJtb255IGV4cG9ydHNcbl9fd2VicGFja19yZXF1aXJlX18uZCA9IChleHBvcnRzLCBkZWZpbml0aW9uKSA9PiB7XG5cdGZvcih2YXIga2V5IGluIGRlZmluaXRpb24pIHtcblx0XHRpZihfX3dlYnBhY2tfcmVxdWlyZV9fLm8oZGVmaW5pdGlvbiwga2V5KSAmJiAhX193ZWJwYWNrX3JlcXVpcmVfXy5vKGV4cG9ydHMsIGtleSkpIHtcblx0XHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBrZXksIHsgZW51bWVyYWJsZTogdHJ1ZSwgZ2V0OiBkZWZpbml0aW9uW2tleV0gfSk7XG5cdFx0fVxuXHR9XG59OyIsIl9fd2VicGFja19yZXF1aXJlX18ubyA9IChvYmosIHByb3ApID0+IChPYmplY3QucHJvdG90eXBlLmhhc093blByb3BlcnR5LmNhbGwob2JqLCBwcm9wKSkiLCIvLyBkZWZpbmUgX19lc01vZHVsZSBvbiBleHBvcnRzXG5fX3dlYnBhY2tfcmVxdWlyZV9fLnIgPSAoZXhwb3J0cykgPT4ge1xuXHRpZih0eXBlb2YgU3ltYm9sICE9PSAndW5kZWZpbmVkJyAmJiBTeW1ib2wudG9TdHJpbmdUYWcpIHtcblx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgU3ltYm9sLnRvU3RyaW5nVGFnLCB7IHZhbHVlOiAnTW9kdWxlJyB9KTtcblx0fVxuXHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgJ19fZXNNb2R1bGUnLCB7IHZhbHVlOiB0cnVlIH0pO1xufTsiLCIvKipcclxuICogUGFydGllIDEgLSBUeXBlc1xyXG4gKi9cclxuY29uc29sZS53YXJuKFwiVHlwZXNcIik7XHJcbmltcG9ydCB7IG1lc1R5cGVzIH0gZnJvbSBcIi4vZG9jcy90eXBlc1wiO1xyXG5jb25zb2xlLmxvZygnbWVzVHlwZXMuYSA6Pj4gJywgbWVzVHlwZXMuYSk7XHJcbmNvbnNvbGUubG9nKCdtZXNUeXBlcy5iIDo+PiAnLCBtZXNUeXBlcy5iKTtcclxuY29uc29sZS5sb2coJ21lc1R5cGVzLmMgOj4+ICcsIG1lc1R5cGVzLmMpO1xyXG5jb25zb2xlLmxvZygnbWVzVHlwZXMuZCA6Pj4gJywgbWVzVHlwZXMuZCk7XHJcbmNvbnNvbGUubG9nKCdtZXNUeXBlcy5lIDo+PiAnLCBtZXNUeXBlcy5lKTtcclxuY29uc29sZS5sb2coJ21lc1R5cGVzLmYgOj4+ICcsIG1lc1R5cGVzLmYpO1xyXG5jb25zb2xlLmxvZygnbWVzVHlwZXMuZyA6Pj4gJywgbWVzVHlwZXMuZyk7XHJcbmNvbnNvbGUubG9nKCdtZXNUeXBlcy5oIDo+PiAnLCBtZXNUeXBlcy5oKTtcclxuY29uc29sZS5sb2coJ21lc1R5cGVzLmkgOj4+ICcsIG1lc1R5cGVzLmkpO1xyXG5jb25zb2xlLmxvZygnbWVzVHlwZXMuaiA6Pj4gJywgbWVzVHlwZXMuaik7XHJcbmNvbnNvbGUubG9nKCdtZXNUeXBlcy5rIDo+PiAnLCBtZXNUeXBlcy5rKTtcclxuY29uc29sZS5sb2coJ21lc1R5cGVzLmwgOj4+ICcsIG1lc1R5cGVzLmwpO1xyXG5jb25zb2xlLmxvZygnbWVzVHlwZXMubSA6Pj4gJywgbWVzVHlwZXMubSk7XHJcbmNvbnNvbGUubG9nKCdtZXNUeXBlcy5uIDo+PiAnLCBtZXNUeXBlcy5uKTtcclxuLyoqXHJcbiAqIFBhcnRpZSAyIC0gSW5kZXhhdGlvblxyXG4gKi9cclxuLyoqXHJcbiAqIFBhcnRpZSAzIC0gQXNzZXJ0aW9uIGRlIHR5cGVcclxuICovXHJcbi8qKlxyXG4gKiBQYXJ0aWUgMiAtIE5hcnJvd2luZ1xyXG4gKiBvdSBjb21tZW50IHLDqWR1aXJlIGxhIGxpc3RlIGRlcyB0eXBlcyBkaXNwb25pYmxlc1xyXG4gKi9cclxuY29uc29sZS53YXJuKFwiTmFycm93aW5nXCIpO1xyXG5pbXBvcnQgeyBwcmludElkLCBpc0RhdGUsIGlzVXNlciwgVFVzZXIgfSBmcm9tIFwiLi9kb2NzL25hcnJvd2luZ1wiO1xyXG5wcmludElkKDEyKTtcclxucHJpbnRJZCgnYScpO1xyXG5wcmludElkKG51bGwpO1xyXG5sZXQgYmlydGhEYXRlID0gbmV3IERhdGUoJzAzLzA0LzE5OTYnKTtcclxuY29uc29sZS5sb2coJ0RhdGUgWzAzLzA0LzE5OTZdJywgaXNEYXRlKGJpcnRoRGF0ZSkpO1xyXG5jb25zb2xlLmxvZygnU3RyaW5nIFswMy8wNC8xOTk2XScsIGlzRGF0ZSgnMDMvMDQvMTk5NicpKTtcclxubGV0IHVzZXIgPSBuZXcgVFVzZXIoJ1F1ZW50aW4nKTtcclxuY29uc29sZS5sb2coJ2lzVXNlcih1c2VyKScsIGlzVXNlcih1c2VyKSk7XHJcbmxldCB5ID0gaXNVc2VyKCdUb3RvJyk7XHJcbmNvbnNvbGUubG9nKCd5IDo+PiAnLCB5KTtcclxuLyoqXHJcbiAqIFBhcnRpZSAzIC0gVHlwZXMgY3VzdG9tXHJcbiAqIE9uIHBldXQgY3LDqWVyIHNlcyBwcm9wcmVzIHR5cGVzXHJcbiAqL1xyXG5jb25zb2xlLndhcm4oXCJDdXN0b20gVHlwZXNcIik7XHJcbmxldCBhZG1pbiA9IHtcclxuICAgIGxhc3ROYW1lOiAnR2VlcnRzJyxcclxuICAgIGZpcnN0TmFtZTogJ1F1ZW50aW4nLFxyXG4gICAgcm9sZUlkOiA0MlxyXG59O1xyXG5jb25zb2xlLmxvZygnYWRtaW4gOj4+ICcsIGFkbWluKTtcclxubGV0IGlkVG1wSW50ID0gNDI7XHJcbmxldCBpZFRtcFN0cmluZyA9IFwiNDJcIjtcclxuLy8gbGV0IGlkVG1wQm9vbGVhbjogSWQgPSB0cnVlOyAvLyBOZSBmb25jdGlvbm5lIHBhc1xyXG5jb25zb2xlLmxvZygnaWRUbXBUeXBlIDo+PiAnLCBpZFRtcEludCk7XHJcbmNvbnNvbGUubG9nKCdpZFRtcFR5cGUgOj4+ICcsIGlkVG1wU3RyaW5nKTtcclxubGV0IGRhdGVUbXAgPSBcIjAzLzA0LzE5OTZcIjtcclxuY29uc29sZS5sb2coJ2RhdGVUbXAgOj4+ICcsIGRhdGVUbXApO1xyXG4vKipcclxuICogUGFydGllIDQgLSBHZW5lcmljc1xyXG4gKi9cclxuY29uc29sZS53YXJuKFwiR2VuZXJpY3NcIik7XHJcbmltcG9ydCB7IGZuVGFiLCBmblRhYjIsIGdldExlbmd0aCwgZ2V0UHJvcGVydHksIGdldFVzZXJzLCBpZGVudGl0eSwgaWRlbnRpdHkyLCBpZGVudGl0eTMgfSBmcm9tIFwiLi9kb2NzL2dlbmVyaWNzXCI7XHJcbmNvbnN0IGlkMSA9IGlkZW50aXR5KDMpOyAvLyBPbiBwZXJkIGxlIHR5cGFnZSBkeW5hbWlxdWUgcGFzc8OpIGVuIHBhcmFtw6h0cmUgw6AgY2F1c2UgZHUgYW55XHJcbmNvbnNvbGUubG9nKCdpZDEgOj4+ICcsIGlkMSk7XHJcbmNvbnNvbGUubG9nKCd0eXBlb2YgaWQxIDo+PiAnLCB0eXBlb2YgaWQxKTtcclxuY29uc3QgaWQyID0gaWRlbnRpdHkyKCdIZWxsbycpO1xyXG5jb25zb2xlLmxvZygnaWQyIDo+PiAnLCBpZDIpO1xyXG5jb25zb2xlLmxvZygndHlwZW9mIGlkMiA6Pj4gJywgdHlwZW9mIGlkMik7XHJcbmNvbnN0IGlkM2EgPSBpZGVudGl0eTMoJ0NvdWNvdScpOyAvLyBUeXBlIGxpdGVyYWwgZGUgXCJDb3Vjb3VcIlxyXG5jb25zdCBpZDNiID0gaWRlbnRpdHkzKCdIZXlvJyk7IC8vIFLDqWN1cGVyY3Vzc2lvbiBkdSB0eXBlIHN0cmluZyBzdXIgbGUgdHlwZSBkZSBhcmcgZXQgcmV0b3VyXHJcbmNvbnNvbGUubG9nKCdpZDNhIDo+PiAnLCBpZDNhKTtcclxuY29uc29sZS5sb2coJ3R5cGVvZiBpZDNhIDo+PiAnLCB0eXBlb2YgaWQzYSk7XHJcbmNvbnNvbGUubG9nKCdpZDNiIDo+PiAnLCBpZDNhKTtcclxuY29uc29sZS5sb2coJ3R5cGVvZiBpZDNiIDo+PiAnLCB0eXBlb2YgaWQzYSk7XHJcbmNvbnN0IGZ0ID0gZm5UYWIoWydhJywgJ2InLCAnYyddKTtcclxuY29uc29sZS5sb2coJ2Z0IDo+PiAnLCBmdCk7XHJcbmNvbnN0IGZ0MiA9IGZuVGFiMihbMjYsIDEsICdDJywgNDJdKTtcclxuY29uc29sZS5sb2coJ2Z0MiA6Pj4gJywgZnQyKTtcclxuY29uc3QgbXlMZW5ndGggPSBnZXRMZW5ndGgoJ0JvbmpvdXInKTtcclxuLy8gY29uc3QgbXlMZW5ndGgyID0gZ2V0TGVuZ3RoKDYpOyAvLyBOZSBmb25jdGlvbm5lIHBhcyBjYXIgdW4gbnVtYmVyIG5lIHBvc3PDqGRlIHBhcyBsYSBwcm9wcmnDqXTDqSBsZW5ndGhcclxuY29uc3QgbXlMZW5ndGgzID0gZ2V0TGVuZ3RoKFsnYScsIDEsIHRydWVdKTtcclxuY29uc29sZS5sb2coJ215TGVuZ3RoIDo+PiAnLCBteUxlbmd0aCk7XHJcbmNvbnNvbGUubG9nKCdteUxlbmd0aDMgOj4+ICcsIG15TGVuZ3RoMyk7XHJcbmltcG9ydCBVc2VycyBmcm9tIFwiLi9tb2RlbHMvVXNlcnMubW9kZWxcIjtcclxubGV0IG15VXNlciA9IG5ldyBVc2VycygpO1xyXG5teVVzZXIgPSB7IGxhc3ROYW1lOiBcIkdlZXJ0c1wiLCBmaXJzdE5hbWU6IFwiUXVlbnRpblwiLCBpZDogNCB9O1xyXG5jb25zdCBndTEgPSBnZXRVc2VycyhteVVzZXIpO1xyXG5jb25zdCBndTIgPSBnZXRVc2VycyhteVVzZXIpO1xyXG5jb25zb2xlLmxvZygnZ3UxIDo+PiAnLCBndTEpO1xyXG5jb25zb2xlLmxvZygnZ3UyIDo+PiAnLCBndTIpO1xyXG4vLyBBdmVjIGNsYXNzZSBnw6luw6lyaXF1ZVxyXG5pbXBvcnQgeyBHZW5lcmljTnVtYmVyIH0gZnJvbSBcIi4vZG9jcy9nZW5lcmljc1wiO1xyXG5sZXQgbmIgPSBuZXcgR2VuZXJpY051bWJlcigpO1xyXG5uYi56ZXJvVmFsdWUgPSAwO1xyXG5uYi5hZGQgPSAoeCwgeSkgPT4geCArIHk7XHJcbi8vIFV0aWxpc2F0aW9uIGQndW5lIGNsZWYgcXVpIGZhaXQgcGFydGllIGQndW4gb2JqZXRcclxubGV0IHggPSB7IGE6IDEsIGI6IDIsIGM6IDMsIGQ6IDQgfTtcclxuZ2V0UHJvcGVydHkoeCwgJ2EnKTtcclxuLy8gZ2V0UHJvcGVydHkoeCwgJ3onKTsgLy8gTmUgZm9uY3Rpb25uZSBwYXMgY2FyIHggbidhIHBhcyBkZSBwcm9wcmnDqXTDqSB6XHJcbi8qKlxyXG4gKiBQYXJ0aWUgNSAtIENsYXNzZXNcclxuICovXHJcbmNvbnNvbGUud2FybihcIkNsYXNzZXNcIik7XHJcbmltcG9ydCB7IFV1c2VyIH0gZnJvbSBcIi4vZG9jcy9jbGFzc2VzXCI7XHJcbmxldCB1dXNlciA9IG5ldyBVdXNlcigpO1xyXG5jb25zb2xlLmxvZygndXVzZXIgOj4+ICcsIHV1c2VyKTtcclxuLy8gRHVjayBUeXBpbmdcclxuaW1wb3J0IHsgUG9pbnQsIEdlb21ldHJ5LCBnZXRYLCBnZXRZLCBDYXJyZSB9IGZyb20gXCIuL2RvY3MvY2xhc3Nlc1wiO1xyXG5jb25zb2xlLmxvZygnZ2V0WChuZXcgUG9pbnQpIDo+PiAnLCBnZXRYKG5ldyBQb2ludCkpO1xyXG5jb25zb2xlLmxvZygnZ2V0WChuZXcgR2VvbWV0cnkpIDo+PiAnLCBnZXRYKG5ldyBHZW9tZXRyeSkpO1xyXG5jb25zb2xlLmxvZygnZ2V0WShuZXcgUG9pbnQpIDo+PiAnLCBnZXRZKG5ldyBQb2ludCkpO1xyXG5jb25zb2xlLmxvZygnZ2V0WShuZXcgR2VvbWV0cnkpIDo+PiAnLCBnZXRZKG5ldyBHZW9tZXRyeSkpO1xyXG5jb25zb2xlLmxvZygnbmV3IENhcnJlIDo+PiAnLCBuZXcgQ2FycmUpO1xyXG4vLyBNb3QtY2xlZiA6IHN0YXRpY1xyXG5pbXBvcnQgeyBBR2VvbWV0cnlTLCBEYXRlQ29udmVydGVyIH0gZnJvbSBcIi4vZG9jcy9jbGFzc2VzXCI7XHJcbmNvbnN0IGFncyA9IEFHZW9tZXRyeVMub3JpZ2luOyAvLyBPbiBwZXV0IGFjY8OpZGVyIMOgIHVuZSBwcm9wcmnDqXTDqSBzYW5zIGF2b2lyIMOgIGluc3RhbmNpZXIgbGEgY2xhc3MgKGNvbW1lIGVsbGUgZXN0IGFic3RyYWl0LCBqZSBuZSBwZXV4IGTDqWrDoCBwYXMgbCdpbnN0YW5jaWVyIPCfmIkpXHJcbmNvbnNvbGUubG9nKCdhZ3MgOj4+ICcsIGFncyk7XHJcbmNvbnNvbGUubG9nKERhdGVDb252ZXJ0ZXIuY29udmVydFRpbWVTdGFtcFRvRGF0ZShuZXcgRGF0ZSgpLmdldFRpbWUoKS50b1N0cmluZygpKSk7XHJcbi8vIEludGVyZmFjZXNcclxuaW1wb3J0IHsgQWxsZW1hbmRlIH0gZnJvbSBcIi4vZG9jcy9jbGFzc2VzXCI7XHJcbmxldCBtZXJjZWRlcyA9IG5ldyBBbGxlbWFuZGUoKTtcclxubGV0IGF1ZGkgPSBuZXcgQWxsZW1hbmRlKCk7XHJcbmF1ZGkubmFtZSA9ICdWaXZlIGxlcyBhdWRpcyAhJztcclxuY29uc29sZS5sb2coJ21lcmNlZGVzIDo+PiAnLCBtZXJjZWRlcyk7XHJcbmNvbnNvbGUubG9nKCdhdWRpIDo+PiAnLCBhdWRpKTtcclxuIiwiXCJ1c2Ugc3RyaWN0XCI7XHJcbi8qKlxyXG4gKiBQYXJ0aWUgMSAtIOKcj++4jyBFeGVyY2ljZSAwMVxyXG4gKi9cclxuLyoqXHJcbiAqIENyw6llciB1biBjb2RlIHBlcm1ldHRhbnQgZGUgY3LDqWVyIHVuIGNvbXB0ZXVyIGNsYXNzaXF1ZSwgYXZlYyArIDEsIC0xIGV0ID0uLi4sIGlsIGZhdWRyYSB0eXBlIGxlIHRvdXQgYXUgbWF4aW11bSwgcHLDqXBhcmVyIDIgZm9uY3Rpb25zIHBvdXIgw6dhXHJcbiAqL1xyXG4vLyBjb25zdCBidG5QbHVzOiBIVE1MQnV0dG9uRWxlbWVudCB8IG51bGwgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwiI2NvbXB0ZXVyUFwiKTtcclxuLy8gY29uc3QgYnRuTW9pbnM6IEhUTUxCdXR0b25FbGVtZW50IHwgbnVsbCA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCIjY29tcHRldXJNXCIpO1xyXG4vLyBjb25zdCB0b3RhbDogSFRNTFNwYW5FbGVtZW50IHwgbnVsbCA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCIjdG90YWxcIik7XHJcbi8vIGxldCBhY3R1YWw6IG51bWJlcjtcclxuLy8gaWYgKHRvdGFsKVxyXG4vLyAgICAgYWN0dWFsID0gcGFyc2VJbnQodG90YWwuaW5uZXJUZXh0KTtcclxuLy8gY29uc3QgaW5jcmVtZW50OiAoZTogTW91c2VFdmVudCkgPT4gdm9pZCA9IChldmVudDogTW91c2VFdmVudCk6IHZvaWQgPT4ge1xyXG4vLyAgICAgZXZlbnQucHJldmVudERlZmF1bHQoKTtcclxuLy8gICAgIGFjdHVhbCA9IGFjdHVhbCArIDE7XHJcbi8vICAgICBpZiAodG90YWwpIHtcclxuLy8gICAgICAgICAvL3RvdGFsIC8vZG8nZmZpY2UgdW4gZWxlbWVudFxyXG4vLyAgICAgICAgIHRvdGFsLmlubmVyVGV4dCA9IGFjdHVhbC50b1N0cmluZygpO1xyXG4vLyAgICAgfVxyXG4vLyB9O1xyXG4vLyBjb25zdCBkZWNyZW1lbnQ6IChlOiBNb3VzZUV2ZW50KSA9PiB2b2lkID0gKGV2ZW50OiBNb3VzZUV2ZW50KTogdm9pZCA9PiB7XHJcbi8vICAgICBldmVudC5wcmV2ZW50RGVmYXVsdCgpO1xyXG4vLyAgICAgYWN0dWFsID0gYWN0dWFsIC0gMTtcclxuLy8gICAgIGlmICh0b3RhbClcclxuLy8gICAgICAgICB0b3RhbC5pbm5lclRleHQgPSBhY3R1YWwudG9TdHJpbmcoKTtcclxuLy8gfTtcclxuLy8gaWYgKGJ0blBsdXMpXHJcbi8vICAgICBidG5QbHVzLmFkZEV2ZW50TGlzdGVuZXIoXCJjbGlja1wiLCBpbmNyZW1lbnQpO1xyXG4vLyBpZiAoYnRuTW9pbnMpXHJcbi8vICAgICBidG5Nb2lucy5hZGRFdmVudExpc3RlbmVyKFwiY2xpY2tcIiwgZGVjcmVtZW50KTtcclxuLyoqXHJcbiAqIFBhcnRpZSA0IC0g4pyP77iPIEV4ZXJjaWNlIDAyXHJcbiAqL1xyXG4vKipcclxuICogUmVwcmVuZHJlIGxlIGNvZGUgZGUgbCdleG9zIDEgZXQgdHJhbmZvcm1lciBsZSB0b3V0IGF2ZWMgZGVzIG5hcnJvd2luZyBldCBkZXMgZ2VuZXJpY3NcclxuICovXHJcbi8vIGNvbnN0IGJ0blBsdXMgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yPEhUTUxCdXR0b25FbGVtZW50PihcIiNjb21wdGV1clBcIik7XHJcbi8vIGNvbnN0IGJ0bk1vaW5zID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcjxIVE1MQnV0dG9uRWxlbWVudD4oXCIjY29tcHRldXJNXCIpO1xyXG4vLyBjb25zdCB0b3RhbCA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3I8SFRNTFNwYW5FbGVtZW50PihcIiN0b3RhbFwiKSE7XHJcbi8vIGxldCBhY3R1YWwgPSA8bnVtYmVyPnBhcnNlSW50KHRvdGFsLmlubmVyVGV4dCk7XHJcbi8vIGNvbnN0IGluY3JlbWVudDogKGU6IE1vdXNlRXZlbnQpID0+IHZvaWQgPSAoZXZlbnQ6IE1vdXNlRXZlbnQpOiB2b2lkID0+IHtcclxuLy8gICAgIGV2ZW50LnByZXZlbnREZWZhdWx0KCk7XHJcbi8vICAgICBhY3R1YWwgPSBhY3R1YWwgKyAxO1xyXG4vLyAgICAgdG90YWwuaW5uZXJUZXh0ID0gYWN0dWFsLnRvU3RyaW5nKCk7XHJcbi8vIH07XHJcbi8vIGZ1bmN0aW9uIHNldEFjdHVhbDxBcmdUeXBlPiAobmI6IEFyZ1R5cGUpOiBudW1iZXIge1xyXG4vLyAgICAgbGV0IGEgPSBuYiBhcyB1bmtub3duIGFzIG51bWJlcjtcclxuLy8gICAgIGEgPSBhIC0gMTtcclxuLy8gICAgIHJldHVybiBhO1xyXG4vLyB9XHJcbi8vIGZ1bmN0aW9uIGRlY3JlbWVudCAoZXZlbnQ6IEV2ZW50KTogdm9pZCB7XHJcbi8vICAgICBldmVudC5wcmV2ZW50RGVmYXVsdCgpO1xyXG4vLyAgICAgYWN0dWFsID0gc2V0QWN0dWFsPG51bWJlcj4oYWN0dWFsKTtcclxuLy8gICAgIHRvdGFsLmlubmVyVGV4dCA9IGFjdHVhbC50b1N0cmluZygpO1xyXG4vLyB9XHJcbi8vIGJ0blBsdXM/LmFkZEV2ZW50TGlzdGVuZXIoXCJjbGlja1wiLCBpbmNyZW1lbnQpO1xyXG4vLyBidG5Nb2lucz8uYWRkRXZlbnRMaXN0ZW5lcjxrZXlvZiBIVE1MRWxlbWVudEV2ZW50TWFwPihcImNsaWNrXCIsIGRlY3JlbWVudCk7XHJcbi8qKlxyXG4gKiBQYXJ0aWUgNSAtIOKcj++4jyBFeGVyY2ljZSAwM1xyXG4gKi9cclxuLyoqXHJcbiAqIFByw6lwYXJlciB1biBtaWNybyBqZXUgZGUgdHlwZSBoZXJvZXMgdnMgbW9uc3Rlciwgdm91cyBhdXJleiAyIGdyYW5kZXMgY2xhc3NlcywgaGVyb2VzIGV0IG1vbnN0ZXIsXHJcbiAqIGxlIGJ1dCwgw6l0YW50IGRlIHBvdXZvaXIgaW5zdGFuY2llciB1biBub3V2ZWF1IGhlcm8gZXQgdW4gbW9uc3RyZSBhdmVjIGRlcyBjYXJhY3TDqHJpc3RpcXVlcyBkaWZmw6lyZW50ZXMsXHJcbiAqIGlscyBkZXZyb250IMOqdHJlIHN0b2NrZXIgZGFucyB1biBvYmpldCB0YWJsZWF1IGdyYWNlIGEgdW5lIGZvbmN0aW9uLFxyXG4gKiBpbCBkZXZyb250IHBvdXZvaXIgcydhZmZyb250ZXIgZ3Jhw6dlIGEgZGVzIHBvaW50cyBkZSB2aWUsIGQnYXR0YXF1ZSBldCBkZSBkw6lmZW5zZSxcclxuICogc2kgdm91cyBhdmV6IHRlcm1pbmVyIGRhbnMgbGVzIHRlbXBzIGltcGFydGlzLCB2b3VzIHBvdXZleiBhbcOpbGlvcmVyLCB1dGlsaXNleiB2b3RyZSBpbWFnaW5hdGlvblxyXG4gKiByZXF1aXM6IHVuIGdlbmVyaWMsIHVuIG5hcnJvd2luZywgZGVzIGNsYXNzZXMsIHVuIHN0YXRpYywgdW5lIGFic3RyYWN0LCBsZSB0b3V0IGVudGnDqHJlbWVudCB0eXDDqSAhXHJcbiAqIG4naMOpc2l0ZXogcGFyIMOgIHV0aWxpc2VyIGwnaHRtbCBwb3VyIMOnYSBldCBsZSByZW5kcmUgZW5jb3JlIHBsdXMgY2hvdWV0dGVcclxuICovIFxyXG4iXSwibmFtZXMiOltdLCJzb3VyY2VSb290IjoiIn0=