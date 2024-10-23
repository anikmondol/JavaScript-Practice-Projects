const textarea = document.querySelector("#textarea");
const count = document.querySelector("#count");
const output = document.querySelector(".output");





count.addEventListener("click", e =>{

    if (textarea.value === "") {
        alert("Please enter some text")
    } else{
        
        const value = textarea.value.toLowerCase();
        let sum = 0;
        for (const element of value) {
           if (element === "a" || element === "e" || element === "i" || element === "o" || element === "y") {
            sum += 1;
           }
            
        }


        output.innerHTML = `The number of vowels are ${sum}`;
        
        
    }

})