import { mesTypes } from "./docs/types";
import { printId, isDate, isUser, TUser } from "./docs/narrowing";

/**
 * Partie - Types
 */

console.warn("Types");

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
 * Partie - Narrowing
 * ou comment réduire la liste des types disponibles
 */

console.warn("Narrowing");

printId(12);
printId('a');
printId(null);

let birthDate = new Date('03/04/1996')

console.log('Date [03/04/1996]', isDate(birthDate))
console.log('String [03/04/1996]', isDate('03/04/1996'))

let user = new TUser('Quentin')
console.log('isUser(user)', isUser(user))

let y = isUser('Toto')
console.log('y :>> ', y);