if (window.location.pathname === "/highScores.html") {

    //we want to then grab the localstorage
    //make a table in js
    //append each element in localstorage to table as a row
    //append the table to the dom
};

renderScore();
alert(displayScore);

function renderScore() {
    var displayScore = localStorage.getItem("score");
}