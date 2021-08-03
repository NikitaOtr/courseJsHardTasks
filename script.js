'use strict';

const str = prompt('Введите строку');

const fixText = string => string.trim().slice(0, 30);

console.log(fixText(str));