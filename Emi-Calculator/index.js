let loadAmountInput = document.querySelector("#load-amount-input"); 
let loadInterestInput = document.querySelector("#load-interest-input"); 
let loadPayRateInput = document.querySelector("#load-pay-rate-input"); 
const calculate = document.querySelector("#calculate");
const result = document.querySelector("#result");


function calculateEMI(){
    if (loadAmountInput.value === "" || loadInterestInput.value === "" || loadPayRateInput.value === "") {
        alert("Please enter all the values");
        result;
    } else {
        const p = loadAmountInput.value;
    const r = loadInterestInput.value / 1200;
    const n = loadPayRateInput.value;

    const emiValue = (p * r * (1 + r) ** n) / ((1 + r) ** n - 1);
    result.textContent = emiValue.toFixed(2);
    }
}

calculate.addEventListener("click", calculateEMI);