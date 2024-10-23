let month = document.querySelector("#month");
let day = document.querySelector("#day");
let weekday = document.querySelector("#number-day");
let year = document.querySelector("#year");




window.addEventListener("DOMContentLoaded", e => {

    let date = new Date();

    // console.log("month", date.getMonth());
    
    day.textContent = date.getDate();
    year.textContent = date.getFullYear();
    month.textContent = date.toLocaleDateString("en-US",{month:"long"})
    weekday.textContent = date.toLocaleDateString("en-US",{weekday:"long"})

} )