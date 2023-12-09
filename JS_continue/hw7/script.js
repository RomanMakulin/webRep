"use strict";

let playerEl = document.querySelector(".media-player");

let videoEl = document.createElement("video");
videoEl.src = "video.mp4";
videoEl.classList.add("video");

playerEl.appendChild(videoEl);

let btnPlay = document.createElement("div");
btnPlay.addEventListener("click", () => {
    videoEl.play();
});
btnPlay.classList.add("video__play");

const videoMenuEl = document.createElement("div");
videoMenuEl.classList.add("video__menu");
videoMenuEl.appendChild(btnPlay);

let btnStop = document.createElement("div");
// 
let btnFull = document.createElement("div");
// 

playerEl.appendChild(videoMenuEl);