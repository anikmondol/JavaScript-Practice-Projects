const button1 = document.querySelector("#applause");
const button2 = document.querySelector("#boo");
const button3 = document.querySelector("#gasp");
const button4 = document.querySelector("#tada");
const button5 = document.querySelector("#victory");
const button6 = document.querySelector("#wrong");

const audio1 = document.querySelector("#audio-applause");
const audio2 = document.querySelector("#audio-boo");
const audio3 = document.querySelector("#audio-gasp");
const audio4 = document.querySelector("#audio-tada");
const audio5 = document.querySelector("#audio-victory");
const audio6 = document.querySelector("#audio-wrong");

// console.log(button1, button2, button3, button4, button5, button6);
// console.log(audio1, audio2, audio3, audio4, audio5, audio6);


button1.addEventListener("click", e => {
    audio1.play();
});

button2.addEventListener("click", e => {
    audio2.play();
});

button3.addEventListener("click", e => {
    audio3.play();
});

button4.addEventListener("click", e => {
    audio4.play();
});

button5.addEventListener("click", e => {
    audio5.play();
});

button6.addEventListener("click", e => {
    audio6.play();
});