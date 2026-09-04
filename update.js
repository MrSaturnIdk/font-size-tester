/// The updater

"use strict";

console.log("[INFO] Loading");

const LOADING_SCREEN = document.getElementById("loading-screen");
const MAIN_P = document.getElementById("main-p");
const SIZE = document.getElementById("size");
const FONT = document.getElementById("font");
const BG_COLOR = document.getElementById("bg-color");
const TEXT_COLOR = document.getElementById("text-color");
const TEXT = document.getElementById("text");
const UPDATER = document.getElementById("update");

function update() {
    MAIN_P.innerHTML = TEXT.value.trim();
    MAIN_P.style.fontSize = SIZE.value.trim();
    MAIN_P.style.fontFamily = FONT.value.trim();
    document.body.style.backgroundColor = BG_COLOR.value.trim();
    TEXT_COLOR.style.backgroundColor = BG_COLOR.value.trim();
    BG_COLOR.style.backgroundColor = BG_COLOR.value.trim();
    TEXT.style.backgroundColor = BG_COLOR.value.trim();
    SIZE.style.backgroundColor = BG_COLOR.value.trim();
    FONT.style.backgroundColor = BG_COLOR.value.trim();
    UPDATER.style.backgroundColor = BG_COLOR.value.trim();
    MAIN_P.style.color = TEXT_COLOR.value.trim();
}

LOADING_SCREEN.style.display = "none";
console.log("[INFO] Loaded");
