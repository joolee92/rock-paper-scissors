console.log("Hello World");

function getComputerChoice() {
    const randomInt = Math.random();
    if (randomInt < 0.33) return "Rock";
    else if (randomInt < 0.66) return "Paper";
    else return "Scissors";
}

console.log(getComputerChoice());