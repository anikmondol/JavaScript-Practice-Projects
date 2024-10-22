const container = document.querySelectorAll("span");


container.forEach(item => {
    item.addEventListener("click", e =>{
        item.classList.toggle("active");
    })
});