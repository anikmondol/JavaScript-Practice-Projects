"use strict";

const passwordLength = document.querySelector("#length");
const uppercase = document.querySelector("#uppercase");
const lowercase = document.querySelector("#lowercase");
const number = document.querySelector("#number");
const symbols = document.querySelector("#symbols");
const passwordInput = document.querySelector("#pass-input");
const generator = document.querySelector("#generator");
const copy = document.querySelector("#copy");

// console.log(passwordLength.value);
// console.log(uppercase.checked);
// console.log(lowercase.checked);
// console.log(number.checked);
// console.log(symbols.checked);

const uppercaseStr = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ';
const lowercaseStr = 'abcdefghijklmnopqrstuvwxyz';
const numberStr = '0123456789';
const symbolStr = '!@#$%^&*()_+';
let password = '';

generator.addEventListener("click", e => {

    if (!uppercase.checked || !lowercase.checked || !number.checked || !symbols.checked) {
        alert("Pleas Selected At list One condition");
    } else {
        let str = "";

        if (uppercase.checked) {
            str += uppercaseStr;
        }

        if (lowercase.checked) {
            str += lowercaseStr;
        }


        if (number.checked) {
            str += numberStr;
        }


        if (symbols.checked) {
            str += symbolStr;
        }

        // console.log(str);

        for (let i = 0; i < passwordLength.value; i++) {
            // console.log(str.length,"str.length")
            let index = Math.floor(Math.random() * str.length);
            // console.log(Math.random() * str.length)
            // console.log(str[index]);

            password += str[index];

        }

        passwordInput.value = password;
        password = "";
    }

    //    passwordInput.value = "";

});



copy.addEventListener("click", e => {

    if (passwordInput.value === "") {
        alert("Please Generate a Password First");
    } else {
        const newPassword = document.createElement("textarea");
        newPassword.value = passwordInput.value;
        document.body.appendChild(newPassword);
        newPassword.select();
        document.execCommand("copy");
        alert("Password Copied to Clipboard");
        newPassword.remove();
        passwordInput.value = "";
    }

});
