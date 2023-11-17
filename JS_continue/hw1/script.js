"use strict";

// 1. Найти по id, используя getElementById, элемент с id равным "super_link" и вывести этот элемент в консоль.
console.log(document.getElementById('super_link'));

// 2. Внутри всех элементов на странице, которые имеют класс "card-link", поменяйте текст внутри элемента на "ссылка".
const cardLinkEl = document.getElementsByClassName('card-link');
for (let i = 0; i < cardLinkEl.length; i++) {
    cardLinkEl[i].innerHTML = 'ссылка';
    console.log(cardLinkEl[i]);
}

// 3. Найти все элементы на странице с классом "card-link", которые лежат в элементе с классом "card-body" и вывести полученную коллекцию в консоль.
const cardBodyEl = document.getElementsByClassName('card-body')[0];
console.log(cardBodyEl.getElementsByClassName('card-link'));

// 4. Найти первый попавшийся элемент на странице у которого есть атрибут data-number со значением 50 и вывести его в консоль.
console.log(document.querySelector('[data-number = "50"]'));

// 5. Выведите содержимое тега title в консоль.
console.log(document.getElementsByTagName('title')[0].innerHTML);

// 6. Получите элемент с классом "card-title" и выведите его родительский узел в консоль.
console.log(document.getElementsByClassName('card-title')[0].parentElement);

// 7. Создайте тег `p`, запишите внутри него текст "Привет" и добавьте созданный тег в начало элемента, который имеет класс "card".
const cardEl = document.getElementsByClassName('card')[0];
const newTag = document.createElement('p');

newTag.innerHTML = 'hello';
cardEl.prepend(newTag);

// 8. Удалите тег h6 на странице.
document.getElementsByTagName('h6')[0].remove();