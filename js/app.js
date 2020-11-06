const choice = document.querySelectorAll('.clickable');
const scoreDisplay = document.querySelector('.score-number');
const resultSpan = document.querySelector('.result');
const isPlaying = document.querySelector('.is-playing');
const resultsContainer = document.querySelector('.results');
let resultsGeneralData = document.querySelector('.result-general-data');
const btnPlayAgain = document.querySelector('#btn-play-again');
const btnRules = document.querySelector('#btn-rules');
const rulesWindow = document.querySelector('.rules-back');
const rulesWindowClose = document.querySelector('#rules-window-close');
let value;
const options = ["rock", "paper", "scissors"];
let aux;
let score = 0;

const updateScore = x => {
    if (x > 0) {
        if (x == 1) {
            score++;
        } else {
            score = score;
        }
    } else {
        score--;
    }
    scoreDisplay.innerHTML = score;
}

const randomChoice = () => {
    return options[Math.floor(Math.random() * options.length)];
}

const whoWins = (value1, value2) => {
    if (value1 == "rock") {
        if (value2 == value1) {
            resultSpan.innerHTML = "DRAW";
            resultSpan.style.color = "yellow";
            updateScore(2);
            console.log("EMPATE");
        } else if (value2 == "paper") {
            resultSpan.innerHTML = "YOU LOSE";
            resultSpan.style.color = "red";
            updateScore(0);
        } else {
            resultSpan.innerHTML = "YOU WIN";
            resultSpan.style.color = "green";
            updateScore(1);
        }
    }
    if (value1 == "paper") {
        if (value2 == value1) {
            resultSpan.innerHTML = "DRAW";
            resultSpan.style.color = "yellow";
            updateScore(2);
        } else if (value2 == "scissors") {
            resultSpan.innerHTML = "YOU LOSE";
            resultSpan.style.color = "red";
            updateScore(0);
        } else {
            resultSpan.innerHTML = "YOU WIN";
            resultSpan.style.color = "green";
            updateScore(1);
        }
    }
    if (value1 == "scissors") {
        if (value2 == value1) {
            resultSpan.innerHTML = "DRAW";
            resultSpan.style.color = "yellow";
            updateScore(2);
        } else if (value2 == "rock") {
            resultSpan.innerHTML = "YOU LOSE";
            resultSpan.style.color = "red";
            updateScore(0);
        } else {
            resultSpan.innerHTML = "YOU WIN";
            resultSpan.style.color = "green";
            updateScore(1);
        }
    }
    resultsGeneralData.innerHTML = (`<div class="result-info result-left">
            <div class="out-frame frame-${value1}">
                <div class="frame" id="${value1}">
                    <img class="${value1}" src="./images/icon-${value1}.svg" alt="${value1}">
                </div>
            </div>
            <small>YOU PIcKED</small>
        </div>
        <div class="result-info result-right">
            <div class="out-frame frame-${value2}">
                <div class="frame" id="${value2}">
                    <img class="${value2}" src="./images/icon-${value2}.svg" alt="${value2}">
                </div>
            </div>
            <small>The House Picked</small>
        </div>`);
}

for (let i = 0; i < choice.length; i++) {
    choice[i].addEventListener('click', () => {
        value = choice[i].firstElementChild.id;
        aux = randomChoice();
        isPlaying.style.display = "none";
        resultsContainer.style.display = "flex";
        console.log("La PC eligió:", aux);
        whoWins(value, aux);
    });
}

btnPlayAgain.addEventListener('click', () => {
    resultsGeneralData.innerHTML = "";
    resultsContainer.style.display = "none";
    isPlaying.style.display = "inherit";
});

btnRules.addEventListener('click', () => {
    rulesWindow.style.display = "flex";
});

rulesWindowClose.addEventListener('click', () => {
    rulesWindow.style.display = "none";
});