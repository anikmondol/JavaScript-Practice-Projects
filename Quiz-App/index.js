const quiz = [
    {
        question: "What is the most used programming language in 2021?",
        ans1text: "Java",
        ans2text: "C",
        ans3text: "Python",
        ans4text: "JavaScript",
        answer: "JavaScript",
    },
    {
        question: "Who is the President of US?",
        ans1text: "Joe Biden",
        ans2text: "Donald Trump",
        ans3text: "Barack Obama",
        ans4text: "George Bush",
        answer: "Joe Biden",
    }, {
        question: "What does HTML stand for?",
        ans1text: "Hypertext Markup Language",
        ans2text: "Cascading Style Sheet",
        ans3text: "Jason Object Notation",
        ans4text: "Helicopters Terminals Motorboats Lamborginis",
        answer: "Hypertext Markup Language",
    },
    {
        question: "What year was JavaScript launched?",
        ans1text: "1996",
        ans2text: "1995",
        ans3text: "1994",
        ans4text: "none of the above",
        answer: "1995",

    }
];

const quizQuestion = document.querySelector("#quiz-question");
const optionA = document.querySelector("#text-option-a");
const optionB = document.querySelector("#text-option-b");
const optionC = document.querySelector("#text-option-c");
const optionD = document.querySelector("#text-option-d");
const submit = document.querySelector("#submit");
const answers = document.querySelectorAll(".answer");

let currentQuestion = 0;
let score = 0;

// console.log(quiz[currentQuestion].question);
// console.log(answers);





quizQuestion.innerText = quiz[currentQuestion].question;
optionA.innerText = quiz[currentQuestion].ans1text;
optionB.innerText = quiz[currentQuestion].ans2text;
optionC.innerText = quiz[currentQuestion].ans3text;
optionD.innerText = quiz[currentQuestion].ans4text;



submit.addEventListener("click", e => {

    const checkAns = document.querySelector("input[type='radio']:checked");

    // console.log(checkAns);
    //   console.log(checkAns.nextElementSibling.innerText);

    if (checkAns === null) {
        alert("Please select an answer")
    } else {
        if (checkAns.nextElementSibling.innerText === quiz[currentQuestion].answer) {
            score++;
        }
        
        currentQuestion++;


        if (currentQuestion < quiz.length) {
            quizQuestion.innerText = quiz[currentQuestion].question;
            optionA.innerText = quiz[currentQuestion].ans1text;
            optionB.innerText = quiz[currentQuestion].ans2text;
            optionC.innerText = quiz[currentQuestion].ans3text;
            optionD.innerText = quiz[currentQuestion].ans4text;
            checkAns.checked = false;
        }else{
            alert(`Your score is ${score} of ${quiz.length} current`)
            location.reload();
        }

    }


});