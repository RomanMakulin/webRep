const containerEl = document.querySelector(".container");
console.log(JSON.parse(itemsData));

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

    elementDiv.appendChild(imgEl);
    elementDiv.appendChild(titleEl);
    elementDiv.appendChild(textEl);
    elementDiv.appendChild(priceEl);

    containerEl.appendChild(elementDiv);

});