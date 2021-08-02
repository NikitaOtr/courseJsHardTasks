'use strict';

const week = {
    ru: ['Понелельник', 'Вторник', 'Среда', 'Четверг', 'Пятница', 'Суббота', 'Воскресенье'],
    en: ['Monday', 'Tuesday', 'Wednesday', 'thursday', 'Friday', 'Saturday', 'Sunday'],
};

const lang = prompt('Введите язык (ru/en)', 'ru').toLowerCase();

if (lang === 'ru') {
    week.ru.forEach(item => console.log(item));
} else if (lang === 'en') {
    week.en.forEach(itme => console.log(itme));
}
console.log('');

switch (lang) {
    case 'ru':
        week.ru.forEach(item => console.log(item));
        break;
    case 'en':
        week.en.forEach(itme => console.log(itme));
        break;
}
console.log('');

week[lang].forEach(item => console.log(item));
console.log('');


const value = prompt('Введите имя');
const rez = value === 'Артем' ? 'Директор' :
            value === 'Максим' ? 'Преподаватель' :
            'Студент';
console.log(rez);
