"use strict";

const containerEl = document.querySelector(".container");
const containerTitleEl = document.createElement('h2');
const containerSubTitleEl = document.createElement('p');
const itemsArr = JSON.parse(itemsData);

containerTitleEl.innerHTML = "Fetured Items";
containerSubTitleEl.innerHTML = "Shop for items based on what we featured in this week";

containerTitleEl.classList.add('container_title');
containerSubTitleEl.classList.add('container_subTitle');

containerEl.appendChild(containerTitleEl);
containerEl.appendChild(containerSubTitleEl);

itemsArr.forEach(element => {
    const imgEl = document.createElement("img");
    const titleEl = document.createElement("h4");
    const textEl = document.createElement("p");
    const priceEl = document.createElement("p");

    const elementDiv = document.createElement("div");

    imgEl.src = element.img;
    titleEl.innerHTML = element.title;
    textEl.innerHTML = element.text;
    priceEl.innerHTML = element.price;

    elementDiv.classList.add('container__item');
    imgEl.classList.add('container__item_img');
    titleEl.classList.add('container__item_title');
    textEl.classList.add('container__item_text');
    priceEl.classList.add('container__item_price');

    elementDiv.appendChild(imgEl);
    elementDiv.appendChild(titleEl);
    elementDiv.appendChild(textEl);
    elementDiv.appendChild(priceEl);

    containerEl.appendChild(elementDiv);
});