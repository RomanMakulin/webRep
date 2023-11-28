let checkboxEl = document.createElement('input');
checkboxEl.type = 'checkbox';

let spanEl = document.createElement('p');
spanEl.innerHTML = 'Согласен с условиями';

let btnEl = document.createElement('button');
btnEl.innerHTML = 'Отправить';

const container = document.querySelector('.container');
container.appendChild(checkboxEl);
container.appendChild(spanEl);
container.appendChild(btnEl);

btnEl.addEventListener('click', (e) => {
    if (!checkboxEl.checked) {
        let spanE2 = document.createElement('p');
        spanE2.innerHTML = 'Согласен с условиями';
        container.appendChild(spanE2);
    }
});