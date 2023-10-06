/*
import { doMath } from "./modules";


const result = doMath(5, 5);

console.log(result);
console.log('hello world');

*/
// year

let year = document.getElementById('year');

let date = new Date();
const thisYear = date.getFullYear();
year.textContent = thisYear;
console.log(thisYear);
console.log(date);
