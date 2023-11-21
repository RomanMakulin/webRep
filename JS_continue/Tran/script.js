// const divEl = document.createElement('div');
// document.body.appendChild(divEl);


// let count = prompt('Введите число приветствий: ');

// for (let i = 0; i < count; i++) {
//     const pEl = document.createElement('p');
//     pEl.innerHTML = 'Hello World';
//     pEl.setAttribute('class', 'test');
//     divEl.appendChild(pEl);
// }; // СОЗДАНИЕ ЭЛЕМЕНТОВ И ДОБАВЛЕНИЕ НА СТРАНИЦУ С ИЗМЕНЕНИЕМ СТИЛЕЙ

// const listLi = document.getElementsByClassName('list__item');
// [...listLi].forEach(element => {
//     console.log(element);
// });

const users = [{
        name: 'Roman',
        age: 25
    },
    {
        name: 'Olga',
        age: 40
    },
    {
        name: 'Ann',
        age: 23
    },
    {
        name: 'Milka',
        age: 2
    },
];

const ages = users.map(user => user.age);
console.log(ages);