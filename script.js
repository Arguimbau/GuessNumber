let secretNumber = Math.floor(Math.random() * 20) + 1;
let score = 20;
let highscore = 0;


const checkBtn = document.getElementById("btnCheck");
const againBtn = document.getElementById("btnAgain");
const message = document.getElementById("message");
const scoreDisplay = document.getElementById("score");
const highscoreDisplay = document.getElementById("highScore");
const inputNumber = document.getElementById("inputNumber");
const numberDisplay = document.querySelector(".number");

checkBtn.addEventListener("click", function () {
    const guess = Number(inputNumber.value);

    // Check if the guess is correct
    if (!guess) {
        message.textContent = "⛔️ Invalid input! Enter a number.";
    } else if (guess === secretNumber) {
        message.textContent = "🎉 Correct Number! You Win!";
        numberDisplay.textContent = secretNumber;
        document.body.style.backgroundColor = "#60b347"; // Skift farve til grøn hvis korrekt
        if (score > highscore) {
            highscore = score;
            highscoreDisplay.textContent = highscore;
        }
    } else {
        message.textContent =
            guess > secretNumber ? "📈 Too high! Try again." : "📉 Too low! Try again.";
        if (score > 1){
        score--;
        scoreDisplay.textContent = score;
    }
        else {
            message.textContent = "💥 You lost the game!";
            document.body.style.backgroundColor = "#ff0000";
        }
    }
});

// Reset spil
againBtn.addEventListener("click", function () {
    secretNumber = Math.floor(Math.random() * 20) + 1;
    score = 20;
    scoreDisplay.textContent = score;
    numberDisplay.textContent = "?";
    inputNumber.value = "";
    message.textContent = "Start guessing...";
    document.body.style.backgroundColor = "#222";
});
