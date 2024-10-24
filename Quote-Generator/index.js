let author = document.querySelector("#author");
let quote = document.querySelector("#quote");
let newQuote = document.querySelector("#new-quote");

async function getQuote() {
    const response = await fetch("http://api.quotable.io/quotes/random");  // changed https to http
    const data = await response.json();
    // console.log(response);
    // console.log(data);
    quote.textContent = data[0].content;
    author.textContent = "-"+ " "+data[0].author;
}


// Add an event listener to the button for fetching a new quote
newQuote.addEventListener('click', getQuote);
