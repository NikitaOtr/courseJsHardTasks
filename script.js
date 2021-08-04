'use strict';

const arr = ['4223234', '232434', '34324324', '932445434', '23646564533', '46254234535', '752345325'];
for (let item of arr) {
     if (item[0] === '2' || item[0] === '4'){
          console.log(item);
     }
}

const checkPrime = function(n) {
     if (!Number.isInteger(n)) {
          return false;
     }
     if (n < 2) {
          return false;
     }
     for (let i = 2; i <= Math.sqrt(n); i++){
          if (n % i === 0){
               return false;
          }
     }
     return true;
};

let dev;
for (let num = 0; num < 101; num++) {
     if (checkPrime(num)){
          console.log(num);
     }
}
