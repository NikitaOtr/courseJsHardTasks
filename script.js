'use strict';

const time = new Date();

setInterval(function () {
      time.setSeconds(time.getSeconds() + 1);
      createClockA(time);
      createClockB(time);
}, 1000);


const clockA = document.createElement('div');
createClockA(time);
document.body.appendChild(clockA);

function createClockA(time2) {
      const options = {
            year: 'numeric',
            month: 'long',
            day: 'numeric',
            weekday: 'long',
            hour: 'numeric',
            minute: 'numeric',
            second: 'numeric'
            };
      clockA.innerHTML = 'Cегодня ' + time2.toLocaleString('ru', options);
}


const clockB = document.createElement('div');
createClockB(time);
document.body.appendChild(clockB);

function createClockB(time2) {
      clockB.innerHTML = time2.toLocaleString().split(', ').join(' - ');
}