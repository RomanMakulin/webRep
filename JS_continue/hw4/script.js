"use strict";

// 1. При изменении значения в input с id="from", значение содержащееся в нем должно моментально отображаться в span. То есть при печати в input'е тег span также должен меняться.

const inputList = document.querySelectorAll('input');
let spanEl = document.querySelector('span');
let inputEl;

for (let i = 0; i < inputList.length; i++) {
    if (inputList[i].id === 'from') {
        inputEl = inputList[i];
    };
};

inputEl.addEventListener('input', (e) => {
    spanEl.innerHTML = e.target.value;
});


// 2. При клике на кнопку с классом messageBtn необходимо элементу с классом message:
// - добавить два класса: animate_animated и animate_fadeInLeftBig
// - поставить данному элементу стиль visibility в значение 'visible'.

const btnEl = document.querySelector('.message');
const messageBtn = document.querySelector('.messageBtn');

messageBtn.addEventListener('click', () => {
    btnEl.classList.add('animate_animated', 'animate_fadeInLeftBig');
    btnEl.style.visibility = 'visible';
});


// 3. Необходимо при отправке формы проверить, заполнены ли все поля в этой форме. Если какое-либо поле не заполнено, форма не должна отправляться, также должны быть подсвечены незаполненные поля (необходимо поставить класс error незаполненным полям). Как только пользователь начинает заполнять какое-либо поле, необходимо, при вводе в данное поле, произвести проверку:
// - Если поле пустое, необходимо данное поле подсветить (поставить класс error данному полю).
// - Если поле было чем-либо заполнено, подсветку (класс error) необходимо убрать.

const formEl = document.querySelector('form');
const formInputs = formEl.querySelectorAll('input, select');

formEl.addEventListener('submit', e => {

    formInputs.forEach(item => {
        if (item.value === '') {
            item.classList.add('error');
            e.preventDefault();
        } else item.classList.remove('error');
    });

});