const buttons = document.querySelectorAll('button');
let playerScore = 0;
let computerScore = 0;

const score = document.querySelector('.score');
score.textContent = "You: " + playerScore + " -- Computer: " + computerScore;

buttons.forEach(button => {
  button.addEventListener('click', () => {
    const playerSelection = button.id;
    const computerSelection = getComputerChoice();

    const result = document.createElement("p");
    const round = playRound(playerSelection, computerSelection)
    result.innerText = round;

    const results = document.querySelector(".results");
    results.appendChild(result);

    if(round.includes("win")) playerScore++;
    if(round.includes("lose")) computerScore++;

    if(playerScore === 5) {
        alert("You win!");
        playerScore = 0;
        computerScore = 0;
        results.innerHTML = '';
    }

    if(computerScore === 5) {
        alert("You lose!");
        playerScore = 0;
        computerScore = 0;
        results.innerHTML = '';
    }

    score.textContent = "You: " + playerScore + " -- Computer: " + computerScore;
  });
});



function getComputerChoice() {
    const randomInt = Math.random();
    if (randomInt < 0.33) return "rock";
    else if (randomInt < 0.66) return "paper";
    else return "scissors";
}

function playRound(human, computer) {
    let hChoice = human.toLowerCase();
    if (hChoice === computer) {
        return `Draw: You both chose ${computer}.`
    } 


    if (hChoice === "rock") {
        switch(computer){
            case "paper":
                return "You lose! Paper beats rock!";
            case "scissors":
                return "You win! Rock beats scissors!";
            default:
                return "Draw! You both chose rock.";
        }
    }

    else if (hChoice === "paper") {
        switch(computer){
            case "rock":
                return "You win! Paper beats rock!";
            case "scissors":
                return "You lose! Scissors beats paper!";
            default:
                return "Draw! You both chose paper.";
        }
    }

    else {
        switch(computer){
            case "rock":
                return "You lose! Rock beats scissors!";
            case "paper":
                return "You win! Scissors beats paper!";
            default:
                return "Draw! You both chose scissors";
        }
    }

}