let timer = document.querySelector("#timer");
let reset = document.querySelector("#reset");
let stop = document.querySelector("#stop");
let start = document.querySelector("#start");

let minutes = 25;
let seconds = 0;
let timerId;

start.addEventListener('click', () => {
    timerId = setInterval(() => {

        if( seconds === 0 ) {
            seconds = 59;
            if( minutes !== 0 ){
                minutes--;
            }

        }else{
            seconds--;
        }
        // console.log(seconds);
        // console.log(minutes);
        timer.innerHTML = `${minutes}:${seconds}`;
    }, 1000);
});



stop.addEventListener("click", e => {


        clearInterval(timerId);
    
});


reset.addEventListener('click', () => {
    minutes = 25;
    seconds = 0;
    timer.textContent = `${minutes}:0${seconds}`;
});