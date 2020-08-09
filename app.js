window.onload = function() {
    show(0);
}

var questions = [
    {
        id: 1,  
        question: "Q1. Which from the following countries is not bordered by Pakistan?",
        answer: "Bangladesh",
        options: [
            "Bangladesh",
            "India",
            "China",
            "Afghanistan"
        ]
    },
    {
        id: 2, 
        question: "Q2. What is the full form of CPU?",
        answer: "Central Processing Unit",
        options: [
            "Central Program Unit",
            "Central Processing Unit",
            "Central Preload Unit",
            "None of these"
        ]
    },
    {
        id: 3,
        question: "Q3. What is the longest river in the world?",
        answer: "River Nile",
        options: [
            "River Nile",
            "Yellow River",
            "Congo River",
            "Lena River"
        ]

    },
    {
        id: 4,
        question: "Q4. Faisal Mosque was built by a/an _____ architect.",
        answer: "Turkish",
        options: [
            "Saudi",
            "Turkish",
            "American",
            "French"
        ]
    },
    {
        id: 5,
        question: "Q5. Pakistan located in the?",
        answer: "South Asia",
        options: [
            "East Asia",
            "West Asia",
            "Central Asia",
            "South Asia"
        ]
    },
    {
        id: 6,
        question: "Q6. Which animal is the national animal of Pakistan?",
        answer: "Markhor",
        options: [
            "Tiger",
            "Lion",
            "Arabian horse",
            "Markhor"
        ]
    }

];
   

function submitForm(e) {
    e.preventDefault();
    var name = document.forms["welcome_form"]["name"].value;                
    
    sessionStorage.setItem("name", name);

    location.href = "quiz.html";
}

var question_count = 0;
var point = 0

function next() {
    
    if(question_count == questions.length ) {
        location.href = "end.html";
        return;
    }
    var user_answer = document.querySelector("li.option.active").innerHTML;
    
    if (user_answer == questions[question_count].answer) {
        point +=10
        sessionStorage.setItem("points", point);
    }
    
    question_count++;
    show(question_count);
}

function show(count) {
    var question = document.getElementById("questions");

    question.innerHTML = `
    <h2>${questions[count].question}
    <ul class="option_group">
    <li class="option">${questions[count].options[0]}</li>
    <li class="option">${questions[count].options[1]}</li>
    <li class="option">${questions[count].options[2]}</li>
    <li class="option">${questions[count].options[3]}</li>

</ul>
    `;
    toggleActive();
}

function toggleActive() {
    var option = document.querySelectorAll("li.option");

    for(let i=0; i< option.length; i++) {
        option[i].onclick = function() {
            for (let j=0; j<option.length; j++) {
                if(option[j].classList.contains("active")) {
                    option[j].classList.remove("active");
                }
            }
            option[i].classList.add("active");
        }
    }
}