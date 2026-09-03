/// The updater

"use strict";

console.log("[INFO] Loading");

const LOADING_SCREEN = document.getElementById("loading-screen");
const MAIN_P = document.getElementById("main-p");
const BODY = document.body;
const SIZE = document.getElementById("size");
const FONT = document.getElementById("font");
const BG_COLOR = document.getElementById("bg-color");
const TEXT_COLOR = document.getElementById("text-color");
const TEXT = document.getElementById("text");

function update() {
    MAIN_P.innerHTML = TEXT.value.trim();
    MAIN_P.style.fontSize = SIZE.value.trim();
    MAIN_P.style.fontFamily = FONT.value.trim();
    BODY.style.backgroundColor = BG_COLOR.value.trim();
    MAIN_P.style.color = TEXT_COLOR.value.trim();
}

LOADING_SCREEN.style.display = "none";
console.log("[INFO] Loaded");
