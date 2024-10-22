const inputField = document.querySelector("#password");
const outField = document.querySelector("#output");

// console.log(inputField);
// console.log(outField);

inputField.addEventListener('input', function() {
    console.log(inputField.value);
    let password = inputField.value;
    if (password.length < 8) {
        outField.innerText = 'Password is too short';
        outField.style.color = 'red';
    }else {
        // outField.innerText = 'Password is long enough';
        // outField.style.color = 'green';
        // a-z
        // A-Z
        // 0-9
        // special characters !@#$%^&*()_+{}:"<>?|[]\;',.
        console.log("is loercase",password.search(/[a-z]/));
        if( password.search(/[a-z]/) == -1 ) {
            outField.innerText = 'Password is missing a lowercase letter';
            outField.style.color = 'red';
        } else if( password.search(/[A-Z]/) == -1 ) {
            outField.innerText = 'Password is missing a Uppercase letter';
            outField.style.color = 'red';
        } else if( password.search(/[0-9]/) == -1 ) {
            outField.innerText = 'Password is missing a Numeric letter';
            outField.style.color = 'red';
        }else if (password.search(/[!\@\#\$\%\^\&\*\(\)\_\+\{\}\:\"\<\>\?\|\[\]\\\;\'\,\.]/) == -1){
            outField.innerText = 'Password is missing a Special Character letter';
            outField.style.color = 'red';
        }
        else{
            outField.innerText = 'Password is Strong';
            outField.style.color = 'green';
        }

    }
});