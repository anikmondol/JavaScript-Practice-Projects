const testimonials = ["“The Lorem Ipsum Company has been an integral part of our content marketing success. We have seen a notable increase in organic leads since we began using their services in 2012.”", "“My busy schedule leaves little, if any, time for blogging and social media. The Lorem Ipsum Company has been a huge part of helping me grow my business through organic search and content marketing.”", "Jeramy and his team at the Lorem Ipsum Company whipped my website into shape just in time for tax season. Jeramy and his team at the Lorem Ipsum Company ", "Professional, responsive, and able to keep up with ever-changing demand and tight deadlines: That's how I would describe Jeramy and his team at The Lorem Ipsum Company. When it comes to content marketing!"];
const authors = ["Roland Weedon", "Kelsi Gordon", "Seth Gewirtz", "Tasha Zuzalek"];
const testimonial = document.querySelector("#testimonial");
const author = document.querySelector("#author");
const image = document.querySelector(".image-container");

const imgUrl = [
    "https://plus.unsplash.com/premium_photo-1725873534652-b5b500b0a951?q=80&w=2069&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    "https://images.unsplash.com/photo-1726141123118-8d5ab8c387e3?q=80&w=1887&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    "https://images.unsplash.com/photo-1726629597543-8d5a86b7c998?q=80&w=1780&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    "https://images.unsplash.com/photo-1728229395358-f1182a1e6d10?q=80&w=1965&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
]

let count = 0;

function changeTest() {
    author.textContent = authors[count]
    testimonial.textContent = testimonials[count]
    image.innerHTML = `<img src='${imgUrl[count]}' alt="Person Image">`
    count++;
    if (count > authors.length - 1) {
        count = 0;
    }
}
setInterval(changeTest, 2000)