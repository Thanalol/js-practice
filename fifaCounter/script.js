// Button declarations
const playerOneButton = document.getElementById("playerOneButton");
const playerTwoButton = document.getElementById("playerTwoButton");
const resetButton = document.getElementById("resetButton");

// Result display declarations
const playerOneDisplay = document.getElementById("playerOneDisplay");
const playerTwoDisplay = document.getElementById("playerTwoDisplay");

// Name display declarations
const playerOneName = document.getElementById("playerOneName");
const playerTwoName = document.getElementById("playerTwoName");

// Prompt button declarations
const playerOnePrompt = document.getElementById("playerOnePrompt");
const playerTwoPrompt = document.getElementById("playerTwoPrompt");

// Variables to keep track of the score
let playerOneScore = 0;
let playerTwoScore = 0;

// Function to ask for the players' usernames and hide the prompt buttons
function askUsername(player) {
    if (player === 1) {
        const userName = prompt("Please enter Player One's name:");
        if (userName) {
            playerOneName.textContent = `${userName}'s score:`;
            playerOnePrompt.style.display = "none";
        }
    } else if (player === 2) {
        const userName = prompt("Please enter Player Two's name:");
        if (userName) {
            playerTwoName.textContent = `${userName}'s score:`;
            playerTwoPrompt.style.display = "none";
        }
    }
}

// Adds points to Player One's score
function addPointOne() {
    playerOneScore++;
    playerOneDisplay.textContent = playerOneScore;
    updateColors();
}

// Adds points to Player Two's score
function addPointTwo() {
    playerTwoScore++;
    playerTwoDisplay.textContent = playerTwoScore;
    updateColors();
}

// Function to change color depending on who is in the lead
function updateColors() {
    if (playerOneScore === playerTwoScore) {
        playerOneDisplay.style.color = "black";
        playerTwoDisplay.style.color = "black";
    } else if (playerOneScore > playerTwoScore) {
        playerOneDisplay.style.color = "green";
        playerTwoDisplay.style.color = "red";
    } else {
        playerOneDisplay.style.color = "red";
        playerTwoDisplay.style.color = "green";
    }
}

// Reset button function
function resetScore() {

    playerOneScore = 0;
    playerTwoScore = 0;

    playerOneDisplay.textContent = playerOneScore;
    playerTwoDisplay.textContent = playerTwoScore;

    playerOneName.textContent = "";
    playerTwoName.textContent = "";

    playerOnePrompt.style.display = 'inline-block';
    playerTwoPrompt.style.display = 'inline-block';

    updateColors();
}

// Event listeners
playerOneButton.addEventListener("click", addPointOne);
playerTwoButton.addEventListener("click", addPointTwo);
resetButton.addEventListener("click", resetScore);
