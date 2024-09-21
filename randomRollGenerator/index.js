const startButton = document.getElementById("startBtn");
const playerDisplay = document.getElementById("playerDisplay");
const computerDisplay = document.getElementById("computerDisplay");
const resultDisplay = document.getElementById("resultDisplay");

function getRandomNumber() {
    return Math.floor(Math.random()* 100) + 1;
}

function startGame() {
    
    const playerRoll = getRandomNumber();
    const computerRoll = getRandomNumber();
    let result;

    if (playerRoll === computerRoll){
        result = "It's a tie!!!"
    } else if (playerRoll > computerRoll){
        result = "Player wins!"
    } else {
        result ="Computer wins!"
    }

    playerDisplay.textContent = `Player roll: ${playerRoll}`;
    computerDisplay.textContent = `Computer roll: ${computerRoll}`;
    resultDisplay.textContent = result;

}

startButton.addEventListener('click', startGame);

console.log(playerRoll);
console.log(computerRoll);