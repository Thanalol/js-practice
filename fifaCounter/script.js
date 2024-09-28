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

// Live update declaration
const announceScore = document.getElementById("announceScore");

// Variables to keep track of the score
let playerOneScore = 0;
let playerTwoScore = 0;

// Store the players' Usernames
let playerOneUsername = "";
let playerTwoUsername = "";

// Function to ask for the players' usernames and hide the prompt buttons
function askUsername(player) {
    if (player === 1) {
        const userName = prompt("Please enter Player One's name:");
        if (userName) {
            playerOneName.textContent = `${userName}'s score:`;
            playerOneUsername = userName;
            playerOnePrompt.style.display = "none";

            //Show Player One's score and button. 
            playerOneDisplay.classList.remove('hidden');
            playerOneButton.classList.remove('hidden');
        }
    } else if (player === 2) {
        const userName = prompt("Please enter Player Two's name:");
        if (userName) {
            playerTwoName.textContent = `${userName}'s score:`;
            playerTwoUsername = userName;
            playerTwoPrompt.style.display = "none";

             //Show Player Two's score and button. 
             playerTwoDisplay.classList.remove('hidden');
             playerTwoButton.classList.remove('hidden');
        }
    }
}

// Adds points to Player One's score
function addPointOne() {
    playerOneScore++;
    playerOneDisplay.textContent = playerOneScore;
    updateColors();
    liveUpdate();
}

// Adds points to Player Two's score
function addPointTwo() {
    playerTwoScore++;
    playerTwoDisplay.textContent = playerTwoScore;
    updateColors();
    liveUpdate();
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

// Function for a score live update
function liveUpdate() {
    // Use default names if usernames are not set
    const playerOneNameToDisplay = playerOneUsername || "Player One";
    const playerTwoNameToDisplay = playerTwoUsername || "Player Two";

    if (playerOneScore === playerTwoScore) {
        announceScore.textContent = "The score is tied!";
    } else if (playerOneScore > playerTwoScore) {
        announceScore.textContent = `${playerOneNameToDisplay} is in the lead!`;
    } else {
        announceScore.textContent = `${playerTwoNameToDisplay} is in the lead!`;
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

    playerOnePrompt.style.display = "inline-block";
    playerTwoPrompt.style.display = "inline-block";

    playerOneUsername = "";
    playerTwoUsername = "";

    announceScore.textContent = "";

    playerOneDisplay.classList.add('hidden');
    playerOneButton.classList.add('hidden');
    playerTwoDisplay.classList.add('hidden');
    playerTwoButton.classList.add('hidden');

    updateColors();
}

// Event listeners
playerOneButton.addEventListener("click", addPointOne);
playerTwoButton.addEventListener("click", addPointTwo);
resetButton.addEventListener("click", resetScore);
