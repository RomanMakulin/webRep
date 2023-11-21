// 1. Ко всем элементам, имеющим класс "dropdown-item" добавить еще один класс "super-dropdown", необходимо использовать методы forEach и querySelectorAll и свойство classList у элементов.

const searchClass = document.querySelectorAll('div.dropdown div.dropdown-menu a.dropdown-item');
searchClass.forEach(element => {
    element.classList.add('super-dropdown');
});

// 2. У элемента с классом btn необходимо убрать класс "btn-secondary", если он присутствует у этого элемента, либо добавить, если такого класса у элемента не было.

const btnEl = document.querySelector('div.dropdown button.btn');

if (btnEl.classList.contains('btn-secondary')) {
    btnEl.classList.remove('btn-secondary');
} else {
    btnEl.classList.add('btn-secondary');
};

console.log(btnEl);

// 3. Необходимо удалить класс "dropdown-menu" у элемента, у которого присутствует класс "menu".

const menu = document.querySelectorAll('.menu');

menu.forEach(element => {
    element.classList.remove('dropdown-menu');
});

console.log(menu[0]);

// 4. Используя метод insertAdjacentHTML добавьте после div'a с классом "dropdown" следующую разметку:
// `<a href="#">link</a>`

const dropdownEl = document.querySelector('div.dropdown');
dropdownEl.insertAdjacentHTML('afterend', '<a href="#">link</a>');

// 5. У элемента с id "dropdownMenuButton" замените id на "superDropdown".

const needId = document.getElementById('dropdownMenuButton');
needId.id = 'superDropdown';
console.log(needId);

// 6. Добавьте атрибут data-dd со значением 3 элементу у которого существует атрибут "aria-labelledby" равный "dropdownMenuButton" используя dataset.

document.querySelector('[aria-labelledby="dropdownMenuButton"]').dataset.dd = "3";

// 7. Удалите атрибут type у элемента с классом "dropdown-toggle".

document.querySelector('div.dropdown button.dropdown-toggle').removeAttribute('type');