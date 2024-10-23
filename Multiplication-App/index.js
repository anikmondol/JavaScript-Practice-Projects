const score = document.querySelector("#score");
const num1 = document.querySelector("#num1");
const num2 = document.querySelector("#num2");
const input = document.querySelector("#input")
const submit = document.querySelector("#submit");

let count = 0;

submit.addEventListener("click", e => {

    let ans = Number(input.value.trim());
    let multiply = Number( document.querySelector("#num1").textContent *  document.querySelector("#num2").textContent);
    
    if (input.value === "") {
        alert("Please enter a number")
    } else if (ans === multiply) {
        count++;
        score.textContent = count;
        num1.textContent = Math.floor(Math.random() * 20);
        num2.textContent = Math.floor(Math.random() * 20);
        input.value = "";
    }else{
        num1.textContent = Math.floor(Math.random() * 20);
        num2.textContent = Math.floor(Math.random() * 20);
        input.value = "";
    }


});