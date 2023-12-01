const containerEl = document.querySelector('.container');

humanData.forEach(element => {
    const name = document.createElement('h3');
    const desc = document.createElement('p');

    name.innerHTML = element.name + ', ' + element.age;
    desc.innerHTML = element.description;

    const itemEl = document.createElement('div');

    itemEl.appendChild(name);
    itemEl.appendChild(desc);

    name.classList.add('name');
    desc.classList.add('desc');
    itemEl.classList.add('item');

    containerEl.appendChild(itemEl);
});