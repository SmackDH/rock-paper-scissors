let playerPoints = 0;
let computerPoints = 0;


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

function playRound() {
   let playerSelections = playerSelection();
   let computerSelection = getComputerChoice();


if (playerSelections == computerSelection) {
   playerPoints++
   return console.log(`Damn son. You got that bitch with your badass ${playerSelections}!!`);
}
else {
   computerPoints++
  return console.log(`Computer picked: ${computerSelection}...You lose`);
}
}



// Global Variables

// Write a new Function for game that counts how many rounds you've done and prints it out between the playRounds.

// Tracker for points player
// Tracker for points computer
// Tracker for number of games
// if number of games(i) goes above 5. End.

function game() {
   

   for (let i = 0; i < 5; i++) {
      console.log("Game Round: " + i + "/5");
      console.log("Player Points: " + playerPoints);
      console.log("Computer Points: " + computerPoints);
      playRound();
   }

   if (playerPoints > computerPoints) {
      console.log(`You did it! Congratulations. You got: ${playerPoints} and the computer: ${computerPoints}`);
   }
   else {
      console.log(`Game Over...! Computer wins with: ${computerPoints} vs your measly: ${playerPoints}`);
   }

}

game();