const container = document.querySelector(".container");

// hexcode 
// 0 - 9
// A - F
// #000000 - #FFFFFF
// 01ab56
const hexCode = '0123456789ABCDEF';

for (let i = 0; i < 30; i++) {

    const box = document.createElement("div");
    box.classList.add("color-card");
    box.setAttribute('id', `${i++}`);

    let color = "#";

    for (let j = 0; j < 6; j++) {
        color += hexCode[getRandom()];
    }


    box.style.backgroundColor = color;
    box.textContent = color;
    container.appendChild(box);
}


function getRandom() {
    return Math.floor(Math.random() * 16);
}

console.log(getRandom());

let box = document.querySelectorAll(".color-card");



box.forEach(element => {
    element.addEventListener("click", e => {
        if (element.getAttribute("id")) {
           
            navigator.clipboard.writeText(element.innerText)
                .then(() => {
                    alert("Text Copied to Clipboard: " + element.innerText);
                })
                .catch(err => {
                    console.error('Error in copying text: ', err);
                });
        }
    });
});

