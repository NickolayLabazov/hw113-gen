import Team from './function';

const team = new Team();
const gen = team.gener();
let pers = gen.next();
console.log(pers);

pers = gen.next();
console.log(pers);

pers = gen.next();
console.log(pers);

pers = gen.next();
console.log(pers);

pers = gen.next();
console.log(pers);
