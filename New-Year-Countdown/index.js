let days = document.querySelector("#days");
let hours = document.querySelector("#hours");
let minutes = document.querySelector("#minutes");
let seconds = document.querySelector("#seconds");


let nextYear = new Date().getFullYear() + 1;
// console.log(nextYear);


setInterval(() => {

    
    const currentDate = new Date();
    const newYearDate = new Date(`January 01 ${nextYear} 00:00:00`);

    
    

    const totalSeconds = (newYearDate - currentDate) / 1000;

    const daysLeft = Math.floor(totalSeconds / 3600 / 24);
    const hoursLeft = Math.floor(totalSeconds / 3600) % 24;
    const minutesLeft = Math.floor(totalSeconds / 60) % 60;
    const secondsLeft = Math.floor(totalSeconds) % 60;

   
    days.innerHTML = daysLeft;
    hours.innerHTML = hoursLeft;
    minutes.innerHTML = minutesLeft;
    seconds.innerHTML = secondsLeft;

}, 1000);



    

