"use strict";

const url = "https://jsonplaceholder.typicode.com/users"

async function getData(url) {
    const res = await fetch(url);
    return await res.json();
}

try {
    const data = await getData(url);
    const bodyEl = document.querySelector(".container");

    data.forEach(item => {
        bodyEl.insertAdjacentHTML(`beforeend`,
            `<div class="container-item">
        <p class="container-item__name">${item.name}</p>
        <p class="container-item__userName">${item.username}</p>
        <p class="container-item__email">${item.email}</p>
        <p class="container-item__address">${item.address.street}, ${item.address.suite}</p>
        <p class="container-item__phone">${item.phone}</p>
        <p class="container-item__delete">удалить</p>
    </div>`);

    });

    const containerEl = document.querySelectorAll(".container-item");
    containerEl.forEach(item => {
        const delItem = item.querySelector(".container-item__delete");
        delItem.addEventListener("click", () => {
            item.remove();
            console.log(item.textContent + " deleted.");
        });
    });

} catch (error) {
    console.log("Error");
}