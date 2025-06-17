let humanScore = 0;
let computerScore = 0;

function getComputerChoice() {
    const randomInt = Math.random();
    if (randomInt < 0.33) return "rock";
    else if (randomInt < 0.66) return "paper";
    else return "scissors";
}

function getHumanChoice() {
    return choice = prompt("Rock, Paper, or Scissors?");
}

function playRound(human, computer) {
    let hChoice = human.toLowerCase();
    if (hChoice === computer) return `Draw: You both chose ${computer}.`;

    console.log(hChoice);

    if (hChoice === "rock") {
        switch(computer){
            case "paper":
                computerScore++;
                return "You lose! Paper beats rock!";
            case "scissors":
                humanScore++;
                return "You win! Rock beats scissors!";
            default:
                return "Draw! You both chose rock.";
        }
    }

    else if (hChoice === "paper") {
        switch(computer){
            case "rock":
                humanScore++;
                return "You win! Paper beats rock!";
            case "scissors":
                computerScore++;
                return "You lose! Scissors beats paper!";
            default:
                return "Draw! You both chose paper.";
        }
    }

    else {
        switch(computer){
            case "rock":
                computerScore++;
                return "You lose! Rock beats scissors!";
            case "paper":
                humanScore++;
                return "You win! Scissors beats paper!";
            default:
                return "Draw! You both chose scissors";
        }
    }

}

console.log(playRound(getHumanChoice(), getComputerChoice()));
console.log("human score is " + humanScore);
console.log("computer score is " +computerScore);