const startButton = document.getElementById("startBtn");
const playerDisplay = document.getElementById("playerDisplay");
const computerDisplay = document.getElementById("computerDisplay");
const resultDisplay = document.getElementById("resultDisplay");

const playerScoreDisplay = document.getElementById("playerScore");
const computerScoreDisplay = document.getElementById("computerScore");
const tieScoreDisplay = document.getElementById("tieScore");


let playerWin = 0;
let computerWin = 0;
let tieWin = 0;

function getRandomNumber() {
    return Math.floor(Math.random() * 100) + 1;
}

function startGame() {
    const playerRoll = getRandomNumber();
    const computerRoll = getRandomNumber();
    let result;

    if (playerRoll === computerRoll) {
        result = "It's a tie!!!";
        resultDisplay.style.color = "black";
    } else if (playerRoll > computerRoll) {
        result = "Player wins!";
        resultDisplay.style.color = "green";
    } else {
        result = "Computer wins!";
        resultDisplay.style.color = "red";
    }

    
    updateScore(result);

    playerDisplay.textContent = `Player roll: ${playerRoll}`;
    computerDisplay.textContent = `Computer roll: ${computerRoll}`;
    resultDisplay.textContent = result;
}


function updateScore(result) {
    if (result === "Player wins!") {
        playerWin++;
    } else if (result === "Computer wins!") {
        computerWin++;
    } else if (result === "It's a tie!!!") {
        tieWin++;
    }

    
    playerScoreDisplay.textContent = `You have ${playerWin} Points!`;
    computerScoreDisplay.textContent = `Computer has ${computerWin} Points!`;
    tieScoreDisplay.textContent = `Ties: ${tieWin}`;
}

startButton.addEventListener('click', startGame);
