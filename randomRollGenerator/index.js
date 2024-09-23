const startButton = document.getElementById("startBtn");
const playerDisplay = document.getElementById("playerDisplay");
const computerDisplay = document.getElementById("computerDisplay");
const resultDisplay = document.getElementById("resultDisplay");

const playerScore = document.getElementById("playerScore");
const computerScore = docuument.getElementById("computerScore");
const tieScore = document.getElementById("tieScore");

function getRandomNumber() {
    return Math.floor(Math.random()* 100) + 1;
}

function startGame() {
    
    const playerRoll = getRandomNumber();
    const computerRoll = getRandomNumber();
    let result;

    if (playerRoll === computerRoll){
        result = "It's a tie!!!"
        resultDisplay.style.color = "black";
    } else if (playerRoll > computerRoll){
        result = "Player wins!"
        resultDisplay.style.color = "green";
    } else {
        result ="Computer wins!"
        resultDisplay.style.color = "red";
    }

    if ( result === "Player wins!"){
        
    }

    playerDisplay.textContent = `Player roll: ${playerRoll}`;
    computerDisplay.textContent = `Computer roll: ${computerRoll}`;
    resultDisplay.textContent = result;

}

startButton.addEventListener('click', startGame);

