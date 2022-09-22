function getComputerChoice() {
    let choices = ["Rock", "Paper", "Scissor"];
    let randomChoice = Math.floor(Math.random() * choices.length);
    console.log(choices[randomChoice])
    return choices[randomChoice];

}
getComputerChoice();