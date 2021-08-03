'use strict';

const str = prompt('Введите строку');

const fixText = function(string) {
     string = string.trim();
     return string.length > 30 ? string.slice(0, 30) + '...' : string; 
};

console.log(fixText(str));