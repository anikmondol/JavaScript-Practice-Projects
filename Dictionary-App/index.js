const input = document.querySelector("#input");
const output = document.querySelector("#meaning");
const search = document.querySelector("#search");




search.addEventListener("click", async(e) => {

    const value = input.value;

    if (value === "") {
        alert("Please enter a word");
    }else{
        const url = `https://api.dictionaryapi.dev/api/v2/entries/en/${value}`;
       let meaning = await fetch(url);
       meaning = await meaning.json(meaning)
    //    console.log("meaning",meaning[0]['meanings'][0]["definitions"][0]["definition"]);  
       output.textContent = meaning[0]['meanings'][0]["definitions"][0]["definition"];

       input.value = "";
    }

});


