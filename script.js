const text = document.querySelectorAll('p');
console.log(text);

const week = {
    0: 'Понедельник',
    1: 'Вторник',
    2: 'Среда',
    3: 'Четверг',
    4: 'Пятница',
    5: 'Суббота',
    6: 'Воскресенье',
};

const date = new Date();
const newYear = new Date(date.getFullYear() + 1, 0, 1, 0, 0, 0);

const hours = date.getHours();
if (hours < 6) {
    text[0].textContent = 'Доброй ночи.';
} else if (hours < 12) {
    text[0].textContent = 'Доброе утро.';
} else if (hours < 18) {
    text[0].textContent = 'Добрый день.';
} else if (hours <= 23) {
    text[0].textContent = 'Добрый вечер.';
}

text[1].textContent += 'Сегодня: ' + week[date.getDay()];
text[2].textContent += 'Текущее время: ' + date.toLocaleString('en').slice(11);
text[3].textContent += 'До нового года осталось ' + Math.ceil((newYear - date) / 1000 / 60 / 60 / 24) + ' дней';
