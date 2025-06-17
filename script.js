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
    if (hChoice === computer) {
        console.log(`Draw: You both chose ${computer}.`)
        return "draw";
    } 


    if (hChoice === "rock") {
        switch(computer){
            case "paper":
                console.log("You lose! Paper beats rock!");
                return "lose";
            case "scissors":
                console.log("You win! Rock beats scissors!");
                return "win";
            default:
                console.log("Draw! You both chose rock.");
                return "draw";
        }
    }

    else if (hChoice === "paper") {
        switch(computer){
            case "rock":
                console.log("You win! Paper beats rock!");
                return "win";
            case "scissors":
                console.log("You lose! Scissors beats paper!");
                return "lose";
            default:
                console.log("Draw! You both chose paper.");
                return "draw";
        }
    }

    else {
        switch(computer){
            case "rock":
                console.log("You lose! Rock beats scissors!");
                return "lose";
            case "paper":
                console.log("You win! Scissors beats paper!");
                return "win";
            default:
                console.log("Draw! You both chose scissors");
                return "draw";
        }
    }

}

function playGame() {
    let humanScore = 0;
    let computerScore = 0;
    let roundCount = 0;
    while (roundCount < 5) {
        ++roundCount;
        let c = getComputerChoice();
        let h = getHumanChoice();

        let currentRound = playRound(h, c);

        if (currentRound != "draw") {
            if (currentRound === "win") {
                humanScore++;
            }
            else if (currentRound === "lose") {
                computerScore++;
            }
        }
    }

    if (humanScore > computerScore) alert(`You win! \n Your score: ${humanScore} \n Computer's score: ${computerScore}`);
    else if (humanScore < computerScore) alert(`You lose! \n Your score: ${humanScore} \n Computer's score: ${computerScore}`);
    else if (humanScore === computerScore) alert(`It's a draw! \n Your score: ${humanScore} \n Computer's score: ${computerScore}`);
}

playGame();