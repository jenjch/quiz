// $(document).ready(function () {


document.querySelector(".start-quiz").addEventListener("click", function(){
    console.log("works");
    // document.querySelector(".clear").innerHTML="";
    document.querySelector(".clear").style.display="none";
    document.querySelector(".question0").style.display="block";
});

var score = 75;
var scoreEl = document.querySelector(".trackingScore");
scoreEl.innerHTML = "Score: " + score;

// if wrong answer, subtract from it. Right answers have no effect on score.

console.log(questions);
var updateScore = function() {
    console.log(this.parentElement)
    var correctAnswer = this.parentElement.getAttribute("data-answer");
    console.log(this);
    if (this.innerHTML===correctAnswer) {
        alert("Correct!");
        console.log(score);
    }
    // if it's correct
    else if (!(this.innerHTML === correctAnswer)) {
        score = score - 10;
        alert("Wrong!")
        console.log(score);
        //when value changes, update value of score
        scoreEl.innerHTML = "Score: " + score;
    };
};
    

for (i=0; i <questions.length; i++) {
    var title = questions[i].title;
    var choices = questions[i].choices;
    var answer = questions[i].answer;

    var outerDiv = document.createElement('div');
    var innerDiv = document.createElement('div');
    outerDiv.classList.add("justify-content-center", "question"+i);
    innerDiv.setAttribute("data-answer", answer);

    var h5 = document.createElement('h5');
    h5.innerHTML = title;
    innerDiv.appendChild(h5);
    outerDiv.appendChild(innerDiv);
    document.querySelector(".quiz-container").appendChild(outerDiv);

    for (j=0; j < questions[i].choices.length; j++) {
        var everyChoice = document.createElement('button');
        everyChoice.addEventListener('click', updateScore);
        // eachChoice.classList.add("btn")
        everyChoice.innerHTML = choices [j];
        if (choices [j] ==="") {
            continue;
        }
        innerDiv.appendChild(everyChoice);
        outerDiv.appendChild(innerDiv);
        document.querySelector(".quiz-container").appendChild(outerDiv);
        everyChoice.classList.add("optionButton");
    };
    
    if (i < questions.length-1) {
    var nextButton = document.createElement ('button');
    nextButton.innerHTML = "Next Question";
    innerDiv.appendChild(nextButton);
    outerDiv.appendChild(innerDiv);
    document.querySelector(".quiz-container").appendChild(outerDiv);
    nextButton.classList.add("nextBtn"+i, "btn");
    
        } else if (i === questions.length-1) {
        var submitButton = document.createElement ('button');
        submitButton.innerHTML = "Submit";
        innerDiv.appendChild(submitButton);
        outerDiv.appendChild(innerDiv);
        document.querySelector(".quiz-container").appendChild(outerDiv);
        submitButton.classList.add("submitBtn", "btn")
        document.querySelector(".submitBtn").addEventListener("click", function(){
            // add score to localstorage

            //redirect to highscores page
            //output on page (tables created on page?)
            window.location.href = "./highScores.html";
    })
};
}

//if we end up on highscores.html
if (window.location.pathname === "/highScores.html") {
    //we want to then grab the localstorage
    //make a table in js
    //append each element in localstorage to table as a row
    //append the table to the dom
}
    // Had trouble with the +i when trying to add for loop
document.querySelector(".nextBtn0").addEventListener("click", function(){
    document.querySelector(".question0").style.display="none";
    document.querySelector(".question1").style.display="block";
});

document.querySelector(".nextBtn1").addEventListener("click", function(){
    document.querySelector(".question1").style.display="none";
    document.querySelector(".question2").style.display="block";
});

document.querySelector(".nextBtn2").addEventListener("click", function(){
    document.querySelector(".question2").style.display="none";
    document.querySelector(".question3").style.display="block";
});

document.querySelector(".nextBtn3").addEventListener("click", function(){
    console.log("there");
    document.querySelector(".question3").style.display="none";
    document.querySelector(".question4").style.display="block";
});

// });
// Notes
// Need to add appropriate classes to each div and p tag
// Need to create buttons for each p answer option
// Need to create next button that will clear the current question
// Need to assess whether user choice is the correct answer and display message
// on click html if == statements?
// set timer to count down at "Start Quiz"
// Deduct score for wrong answers
// Keep score, local storage to High Scores page
// Option to input initials for High Score


