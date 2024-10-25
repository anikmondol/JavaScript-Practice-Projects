let calculate3 = document.querySelector("#calculate3");
let calculate2 = document.querySelector("#calculate2");
let calculate1 = document.querySelector("#calculate1");
let result = document.querySelector("#result");




let counter = 0;

calculate3.addEventListener("click", e => {
    counter--;
    result.textContent = counter;
});

calculate1.addEventListener("click", e => {
    counter++;
    result.textContent = counter;
});


calculate2.addEventListener("click", e => {
    counter = 0;
    result.textContent = 0;
});


