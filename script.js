'use strict';

let num = 266219;
num = num.toString().split('');

const mult = num.reduce((acc, item) => acc *= item, 1);

console.log(mult);
console.log(mult ** 3);
console.log((mult**3).toString().slice(0, 2));
