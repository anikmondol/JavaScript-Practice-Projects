const hours = document.querySelector("#hours");
const mins = document.querySelector("#mins");
const secondes = document.querySelector("#secondes");

function getTime(){

    const date = new Date();

    let h = date.getHours();
    let m = date.getMinutes();
    let s = date.getSeconds();

    h = h < 10 ? "0" + h : h;
    m = m < 10 ? "0" + m : m;
    s = s < 10 ? "0" + s : s;
    
    hours.textContent = h;
    mins.textContent = m
    secondes.textContent = s;


}

setInterval(getTime, 1000);