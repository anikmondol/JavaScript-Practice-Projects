let result = document.querySelector(".result");
let buttons = document.querySelectorAll("button");

let str = "";

buttons.forEach(button => {
    button.addEventListener("click", e => {
        const btnText = e.target.innerText.trim();

        if (btnText === "AC") {
            str = ""; 
            result.value = str;
        } else if (btnText === "=") {
            try {
                str = eval(str).toString(); 
                result.value = str;
            } catch (error) {
                result.value = "Error"; 
                str = ""; 
            }
        } else if (btnText === "DEL") {
            str = str.substring(0, str.length - 1); 
            result.value = str;
        } else {
            
            str += btnText;
            result.value = str;
        }
    });
});
