const calculate = document.querySelector("#calculate");
const result = document.querySelector("#result");
let tipPercentage = document.querySelector("#tip-percentage"); 
let bileAmount = document.querySelector("#bile-amount"); 

// console.log(bileAmount, tipPercentage);


calculate.addEventListener("click", e => {

    let tip = tipPercentage.value;
    let amount = bileAmount.value;

    if (tip === "" || amount === "") {
        alert("Please enter all the values");
        result;
    } else if(tip < 0 || amount < 0) {
        alert("Please enter positive values");
        return;
    }else{
        const billAmountValue = parseFloat(amount);
        const tipPercentageValue = parseFloat(tip);


        const tipAmount = billAmountValue * (tipPercentageValue / 100);
        const totalBill = billAmountValue + tipAmount;
        

        result.textContent = totalBill.toFixed(2); 
    }
    

});
