function getComputerChoice() {
    let choices = ["Rock", "Paper", "Scissor"];
    let randomChoice = Math.floor(Math.random() * choices.length);
    return choices[randomChoice];

}

function playerSelection() {
 let input = prompt("Rock, Paper or Scissors?");
 input = input.toLowerCase();
 formattedChoice = input.charAt(0).toUpperCase() + input.slice(1);

 if (formattedChoice == getComputerChoice()) {
    console.log(`Damn son. You got that bitch with your badass ${formattedChoice}!!`);
 }
 else {
    console.log(`Computer picked: ${getComputerChoice()}...You lose`);
 }

 return formattedChoice 
}

playerSelection();