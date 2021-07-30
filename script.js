'use strict';

let num = 266219;
num = num.toString().split('');

let mult = 1;
num.map(n => mult *= n);

console.log((mult**3).toString().slice(0, 2));
