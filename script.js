'use strict';

let week = ['Понедельник', 'Вторник', 'Среда', 'Четверг', 'Пятница', 'Суббота', 'Воскресенье'];

for (let i = 0; i < week.length; i++) {
     const dayOff = document.createElement('p');
     if (((i + 1) % 7) === new Date().getDay()) {
          dayOff.innerHTML = week[i].bold();
    } else if (week[i] === 'Суббота' || week[i] === 'Воскресенье') {
          dayOff.innerHTML = week[i].italics();
    } else {
          dayOff.innerHTML = week[i];
    }
    document.body.appendChild(dayOff);
}