// Inicialmente, declararei variavel por variavel tanto de aúdio quanto de tecla, é a primeira versão, depois usarei melhor a ideia de função, peço desculpas por não estar otimizado
// audios
const noteC = new Audio("SOURCE/piano-mp3/C4.mp3");
const noteDb = new Audio("SOURCE/piano-mp3/Db4.mp3");
const noteD = new Audio("SOURCE/piano-mp3/D4.mp3");
const noteEb = new Audio("SOURCE/piano-mp3/Eb4.mp3");
const noteE = new Audio("SOURCE/piano-mp3/E4.mp3");
const noteF = new Audio("SOURCE/piano-mp3/F4.mp3");
const noteGb = new Audio("SOURCE/piano-mp3/Gb4.mp3");
const noteG = new Audio("SOURCE/piano-mp3/G4.mp3");
const noteAb = new Audio("SOURCE/piano-mp3/Ab4.mp3");
const noteA = new Audio("SOURCE/piano-mp3/A4.mp3");
const noteBb = new Audio("SOURCE/piano-mp3/Bb4.mp3");
const noteB = new Audio("SOURCE/piano-mp3/B4.mp3");
const noteC5 = new Audio("SOURCE/piano-mp3/C5.mp3");

// teclas

let keyC = document.getElementById("do-C");
keyC.addEventListener("click", function () {
  noteC.play();
});
let keyDb = document.getElementById("reBemol-Db");

keyDb.addEventListener("click", function () {
  noteDb.play();
});
let keyD = document.getElementById("re-D");

keyD.addEventListener("click", function () {
  noteD.play();
});

let keyEb = document.getElementById("miBemol-Eb");

keyEb.addEventListener("click", function () {
  noteEb.play();
});

let keyE = document.getElementById("mi-E");

keyE.addEventListener("click", function () {
  noteE.play();
});

let keyF = document.getElementById("fa-F");
keyF.addEventListener("click", function () {
  noteF.play();
});
let keyGb = document.getElementById("solBemol-Gb");

keyGb.addEventListener("click", function () {
  noteGb.play();
});

let keyG = document.getElementById("sol-G");

keyG.addEventListener("click", function () {
  noteG.play();
});

let keyAb = document.getElementById(`laBemol-Ab`);

keyAb.addEventListener("click", function () {
  noteAb.play();
});

let keyA = document.getElementById(`la-A`);

keyA.addEventListener("click", function () {
  noteA.play();
});

let keyBb = document.getElementById(`siBemol-Bb`);

keyBb.addEventListener("click", function () {
  noteBb.play();
});

let keyB = document.getElementById(`si-B`);

keyB.addEventListener("click", function () {
  noteB.play();
});

let keyC5 = document.getElementById(`proximo_do-C`);

keyC5.addEventListener("click", function () {
  noteC5.play();
});
