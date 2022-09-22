// Global Variables
const playerSelections = playerSelection();
const computerSelection = getComputerChoice();

// Random Hand Function

function getComputerChoice() {
    let choices = ["Rock", "Paper", "Scissor"];
    let randomChoice = Math.floor(Math.random() * choices.length);
    return choices[randomChoice];
}

// Player Input and formatting

function playerSelection() {
 let input = prompt("Rock, Paper or Scissors?");
 input = input.toLowerCase();
 return input.charAt(0).toUpperCase() + input.slice(1);
}


//Calls a new round + prints out win/loose message.

function playRound(playerSelection, computerSelection) {
   
   if (playerSelection == computerSelection) {
   console.log(`Damn son. You got that bitch with your badass ${playerSelection}!!`);
}
else {
   console.log(`Computer picked: ${computerSelection}...You lose`);
}
}


// Play

playRound(playerSelections, computerSelection)