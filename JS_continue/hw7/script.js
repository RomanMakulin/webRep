"use strict";

let playerEl = document.querySelector(".media-player");
let videoEl = document.createElement("video");

videoEl.src = "video.mp4";
videoEl.classList.add("video");
playerEl.appendChild(videoEl);

let videoMenuEl = document.createElement("div");
videoMenuEl.classList.add("video__menu");

// start video
let btnPlay = document.createElement("div");
btnPlay.addEventListener("click", () => {
    videoEl.play();
});
btnPlay.classList.add("video__play");

// stop video
let btnStop = document.createElement("div");
btnStop.addEventListener("click", () => {
    videoEl.pause();
});
btnStop.classList.add("video__stop");

// fullScreen video
let btnFull = document.createElement("div");
btnFull.addEventListener("click", () => {
    videoEl.requestFullscreen();
});
btnFull.classList.add("video__fullScreen");

// volume button
let volumeInput = document.createElement("input");
volumeInput.type = "range";
volumeInput.min = 0;
volumeInput.max = 10;
volumeInput.value = 5;

videoEl.volume = 0.5;
volumeInput.addEventListener("change", (e) => {
    videoEl.volume = e.target.value / 10;
});

// append

let menuLeft = document.createElement("div");
let menuRight = document.createElement("div");

menuLeft.classList.add("video__menu__left");

menuLeft.appendChild(btnPlay);
menuLeft.appendChild(btnStop);
menuRight.appendChild(btnFull);

videoMenuEl.appendChild(menuLeft);
videoMenuEl.appendChild(menuRight);

playerEl.appendChild(videoMenuEl);

const volumeEl = document.createElement("div");
volumeEl.classList.add("video__menu");
volumeEl.appendChild(volumeInput);
playerEl.appendChild(volumeEl);