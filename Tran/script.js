"use strict";

navigator.geolocation.getCurrentPosition((position) => {
    const { latitude, longitude } = position.coords;
    console.log(`Широта: ${latitude}, долгота: ${longitude}`);
});


const contentEl = document.querySelector(".content");

document.addEventListener("scroll", () => {
    const height = document.documentElement.offsetHeight;
});