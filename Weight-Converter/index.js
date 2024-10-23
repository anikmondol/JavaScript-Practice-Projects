const input = document.querySelector("#input");
const output = document.querySelector("#output");

input.addEventListener("input", e => {
    output.innerHTML = input.value * 2.20462.toFixed(2);
})
