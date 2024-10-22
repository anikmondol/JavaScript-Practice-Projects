let qrInput = document.querySelector("#qr-input");
let qrImg = document.querySelector("#qr-img");
let qrButton = document.querySelector("#qr-button");


qrButton.addEventListener("click", e =>{

    const inputValue = qrInput.value;
 
    if ( !inputValue) {
        alert("Please enter a valid url or text");
        return;
    }else{
        qrImg.src = `https://api.qrserver.com/v1/create-qr-code/?size=150x150&data=${inputValue}`;
        qrImg.alt = `QR code for ${inputValue}`;

    }
     

});
