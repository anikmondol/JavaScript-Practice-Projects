const celsius = document.querySelector("#celsius");
const kelvin = document.querySelector("#kelvin");
const fahrenheit = document.querySelector("#fahrenheit");

// celsius to fahrenheit => (0°C × 9/5) + 32 = 32°F
// celsius to kelvin => 0°C + 273.15 = 273.15K

celsius.addEventListener("input", e =>{

    let c = parseFloat(celsius.value);
    let f = (c * 9 / 5) + 32;
    let k = c + 273.15;
    fahrenheit.value = f.toFixed(2);
    kelvin.value = k.toFixed(2);
    isUpdating = false;
});



// fahrenheit to celsius => (32°F − 32) × 5/9 = 0°C
// fahrenheit to kelvin => (32°F − 32) × 5/9 + 273.15 = 273.15K

fahrenheit.addEventListener("input", e =>{

    let f = parseFloat(fahrenheit.value);
    let c = (f - 32) * 5 / 9;
    let k = (f - 32) * 5 / 9 + 273.15;
    celsius.value = c.toFixed(2);
    kelvin.value = k.toFixed(2);
    isUpdating = false;
});



// kelvin to celsius => 0K − 273.15 = -273.1°C
// kelvin to fahrenheit => (0K − 273.15) × 9/5 + 32 = -459.7°F
kelvin.addEventListener("input", e =>{

    let k = parseFloat(kelvin.value);
    let c = k - 273.15;
    let f = (k - 273.15) * 9 / 5 + 32;
    celsius.value = c.toFixed(2);
    fahrenheit.value = f.toFixed(2);
    isUpdating = false;
});


