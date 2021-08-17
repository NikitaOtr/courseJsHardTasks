'use strict';
const hiName = document.querySelector('#username');
const buttonRegister = document.querySelector('#registerUser');
const buttonLogin = document.querySelector('#loginUser');
const userList = document.querySelector('#listUser');

const users = JSON.parse(localStorage.getItem('users')) ?? [];

function getUserName(massage) {
    let data = prompt(massage);
    if (data === null) {return null;}
    if (data.trim().split(' ').length === 2) {return data.trim();}
    return getUserName(massage);
}

function getUserString(massage) {
    let str = prompt(massage);
    if (str === null) {return null;}
    if (str.trim() !== '') {return str.trim();}
    return getUserString(massage);
}

function getNowDate() {
    const options = {
        year: 'numeric',
        month: 'long',
        day: 'numeric',
        weekday: 'long',
        hour: 'numeric',
        minute: 'numeric',
        second: 'numeric'
        };
    const date = (new Date()).toLocaleString('ru', options);
    return date.split(' ').slice(1).join(' ');
}

function render () {
    userList.innerHTML = '';
    users.forEach(function(item, index) {
        const li = document.createElement('li');
        li.textContent = 'Имя: ' + item.firsName + ', ';
        li.textContent += 'Фамилия: ' + item.lastName + ', ';
        li.textContent += 'Дата: ' + item.date;

        const buttonDelete = document.createElement('button');
        buttonDelete.textContent = 'Удалить';
        buttonDelete.classList.add('buttonDelete');
        buttonDelete.addEventListener('click', function() {
            users.splice(index, 1);
            localStorage.setItem('users', JSON.stringify(users));
            li.remove();
        });

        li.append(buttonDelete);
        userList.append(li);
    });
}

buttonRegister.addEventListener('click', function() {
    let username = getUserName('Введите имя и фамилию');
    console.log(username);
    if (username === null) {return;}

    const userLogin = getUserString('Введите логин');
    console.log(userLogin);
    if (userLogin === null) {return;}

    const userPassword = getUserString('Введите пароль');
    console.log(userPassword);
    if (userPassword === null) {return;}

    username = username.split(' ');
    users.push({
        firsName: username[0][0].toUpperCase() + username[0].slice(1).toLowerCase(),
        lastName: username[1][0].toUpperCase() + username[1].slice(1).toLowerCase(),
        login: userLogin,
        password: userPassword,
        date: getNowDate(),
    });
    localStorage.setItem('users', JSON.stringify(users));
    render();
});

buttonLogin.addEventListener('click', function() {
    const userLogin = getUserString();
    if (userLogin === null) {return;}

    const userPassword = getUserString();
    if (userPassword === null) {return;}

    users.forEach(function(item) {
        if (item.login === userLogin && item.password === userPassword) {
            console.log(item.firsName);
            hiName.textContent = item.firsName;
        }
    });
});

render();