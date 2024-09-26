//Button declarations.
const playerOneButton = document.getElementById("playerOneButton");
const playerTwoButton = document.getElementById("playerTwoButton");
const resetButton = document.getElementById("resetButton");
//Result display declarations.
const playerOneDisplay = document.getElementById("playerOneDisplay");
const playerTwoDisplay = document.getElementById("playerTwoDisplay");


//Variables to keep track of the score. 
let playerOneScore = 0;
let playerTwoScore = 0;

//Adds points to the first player's score. 
function addPointOne(){
    playerOneScore++;
    playerOneDisplay.textContent = playerOneScore;
    updateColors();
}

//Adds points to the second player's score. 
function addPointTwo(){
    playerTwoScore++;
    playerTwoDisplay.textContent = playerTwoScore;
    updateColors();
}

//If function to change color depending on who is in the lead.
function updateColors(){
    if (playerOneScore === playerTwoScore){
        playerOneDisplay.style.color = "black";
        playerTwoDisplay.style.color = "black";
    } else if (playerOneScore > playerTwoScore){
        playerOneDisplay.style.color = "green";
        playerTwoDisplay.style.color = "red";
    } else {
        playerOneDisplay.style.color = "red";
        playerTwoDisplay.style.color = "green";
        }
}

//Reset button function.
function resetScore(){
    playerOneScore = 0;
    playerTwoScore = 0;
    playerOneDisplay.textContent = playerOneScore;
    playerTwoDisplay.textContent = playerTwoScore;
    updateColors();
}

//Even listener for player one. 
playerOneButton.addEventListener("click", addPointOne);
//Event listener for player two.
playerTwoButton.addEventListener("click", addPointTwo);
//Event listener reset button.
resetButton.addEventListener("click", resetScore);