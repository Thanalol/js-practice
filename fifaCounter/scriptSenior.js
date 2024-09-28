// Cached DOM elements
const announceScore = document.getElementById("announceScore");
const resetButton = document.getElementById("resetButton");
const playerButtons = document.querySelectorAll(".addPoint");
const namePrompts = document.querySelectorAll(".namePrompt");

// State variables
let players = [
    { id: 1, name: "", score: 0, nameDisplay: null, scoreDisplay: null },
    { id: 2, name: "", score: 0, nameDisplay: null, scoreDisplay: null }
];

// Initialize game
function init() {
    players.forEach(player => {
        player.nameDisplay = document.querySelector(`#playerOne h2, #playerTwo h2`)[player.id - 1];
        player.scoreDisplay = document.querySelector(`#playerOne .playerDisplay, #playerTwo .playerDisplay`)[player.id - 1];
        player.nameDisplay.textContent = `${player.name}`;
        player.scoreDisplay.textContent = "0";  
    });
    announceScore.textContent = "Game is on!"; // Initial announcement
}

// Function to update UI
function updateDisplay() {
    players.forEach(player => {
        // Update the UI for each player
        player.nameDisplay.textContent = `${player.name}'s score:`;
        player.scoreDisplay.textContent = player.score;
    });
    announceScore.textContent = determineLeader(); // Call function to display current leader
}

// Function to determine the leader
function determineLeader() {
    if (players[0].score === players[1].score) {
        return "It's a tie!";
    } else if (players[0].score > players[1].score) {
        return `${players[0].name} is in the lead!`;
    } else {
        return `${players[1].name} is in the lead!`;
    }
}

// Add event listeners for buttons
namePrompts.forEach(prompt => {
    prompt.addEventListener("click", function() {
        const playerId = this.dataset.player;
        const player = players[playerId - 1];
        const userName = prompt(`Please enter Player ${playerId}'s name:`);

        if (userName) {
            player.name = userName; // Update player name
            updateDisplay(); // Refresh display with the new name
        }
    });
});

playerButtons.forEach(button => {
    button.addEventListener("click", function() {
        const playerId = this.dataset.player;
        players[playerId - 1].score++; // Increment score
        updateDisplay(); // Refresh display with the updated score
    });
});

// Reset button functionality
resetButton.addEventListener("click", init); // Reinitialize game on reset

// Initialize the game on page load
init();
