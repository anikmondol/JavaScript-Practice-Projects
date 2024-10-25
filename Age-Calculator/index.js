const date = document.querySelector("#date");
const calculatorBtn = document.querySelector("#calculator-btn");
const output = document.querySelector("#output");

calculatorBtn.addEventListener("click", e => {

    if (date.value === "") {
        alert("Please enter your date of birth");
    } else {


        // date of birth
        const dob = new Date(date.value);
        const dobYear = dob.getFullYear();


        // current year
        const now = new Date();
        const nowYear = now.getFullYear();
        const age = nowYear - dobYear;

       output.textContent = age;





    }

});