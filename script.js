let humanScore = 0;
let computerScore = 0;

function getComputerChoice() {
    const randomInt = Math.random();
    if (randomInt < 0.33) return "Rock";
    else if (randomInt < 0.66) return "Paper";
    else return "Scissors";
}

function getHumanChoice() {
    let choice = prompt("Rock, Paper, or Scissors?");
    return choice;
}

console.log(getHumanChoice());