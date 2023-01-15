/**
 * Partie 1 - Types
 */

console.warn("Types");

import { mesTypes } from "./docs/types";

console.log('mesTypes.a :>> ', mesTypes.a);
console.log('mesTypes.b :>> ', mesTypes.b);
console.log('mesTypes.c :>> ', mesTypes.c);
console.log('mesTypes.d :>> ', mesTypes.d);
console.log('mesTypes.e :>> ', mesTypes.e);
console.log('mesTypes.f :>> ', mesTypes.f);
console.log('mesTypes.g :>> ', mesTypes.g);
console.log('mesTypes.h :>> ', mesTypes.h);
console.log('mesTypes.i :>> ', mesTypes.i);
console.log('mesTypes.j :>> ', mesTypes.j);
console.log('mesTypes.k :>> ', mesTypes.k);
console.log('mesTypes.l :>> ', mesTypes.l);
console.log('mesTypes.m :>> ', mesTypes.m);
console.log('mesTypes.n :>> ', mesTypes.n);

/**
 * Partie 2 - Narrowing
 * ou comment réduire la liste des types disponibles
 */

console.warn("Narrowing");

import { printId, isDate, isUser, TUser } from "./docs/narrowing";

printId(12);
printId('a');
printId(null);

let birthDate = new Date('03/04/1996');

console.log('Date [03/04/1996]', isDate(birthDate));
console.log('String [03/04/1996]', isDate('03/04/1996'));

let user = new TUser('Quentin');
console.log('isUser(user)', isUser(user));

let y = isUser('Toto');
console.log('y :>> ', y);

/**
 * Partie 3 - Types custom
 * On peut créer ses propres types
 */

console.warn("Custom Types");

import { Admin, Id, DateString } from "./docs/customTypes";

let admin: Admin = {
    lastName: 'Geerts',
    firstName: 'Quentin',
    roleId: 42
};

console.log('admin :>> ', admin);

let idTmpInt: Id = 42;
let idTmpString: Id = "42";
// let idTmpBoolean: Id = true; // Ne fonctionne pas
console.log('idTmpType :>> ', idTmpInt);
console.log('idTmpType :>> ', idTmpString);

let dateTmp: DateString = "03/04/1996";
console.log('dateTmp :>> ', dateTmp);

/**
 * Partie 4 - Generics
 */

console.warn("Generics");

import { fnTab, fnTab2, getLength, getProperty, getUsers, identity, identity2, identity3 } from "./docs/generics";

const id1 = identity(3); // On perd le typage dynamique passé en paramètre à cause du any
console.log('id1 :>> ', id1);
console.log('typeof id1 :>> ', typeof id1);

const id2 = identity2<string>('Hello');
console.log('id2 :>> ', id2);
console.log('typeof id2 :>> ', typeof id2);

const id3a = identity3('Coucou'); // Type literal de "Coucou"
const id3b = identity3<string, number>('Heyo'); // Récupercussion du type string sur le type de arg et retour

console.log('id3a :>> ', id3a);
console.log('typeof id3a :>> ', typeof id3a);
console.log('id3b :>> ', id3a);
console.log('typeof id3b :>> ', typeof id3a);

const ft = fnTab<string>(['a', 'b', 'c']);
console.log('ft :>> ', ft);

const ft2 = fnTab2<string, number>([26, 1, 'C', 42]);
console.log('ft2 :>> ', ft2);

const myLength = getLength('Bonjour');
// const myLength2 = getLength(6); // Ne fonctionne pas car un number ne possède pas la propriété length
const myLength3 = getLength(['a', 1, true]);
console.log('myLength :>> ', myLength);
console.log('myLength3 :>> ', myLength3);

import Users from "./models/Users.model";

let myUser = new Users();
myUser = { lastName: "Geerts", firstName: "Quentin", id: 4 };

const gu1 = getUsers(myUser);
const gu2 = getUsers<Users>(myUser);

console.log('gu1 :>> ', gu1);
console.log('gu2 :>> ', gu2);

// Avec classe générique

import { GenericNumber } from "./docs/generics";

let nb = new GenericNumber<number>();
nb.zeroValue = 0;
nb.add = (x, y) => x + y;

// Utilisation d'une clef qui fait partie d'un objet
let x = { a: 1, b: 2, c: 3, d: 4 };
getProperty(x, 'a');
// getProperty(x, 'z'); // Ne fonctionne pas car x n'a pas de propriété z

/**
 * Partie 5 - Classes
 */

