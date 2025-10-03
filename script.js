function getComputerChoice () {
    let choices = 3;
    let randomPick = Math.floor(Math.random() * choices);
    switch (randomPick) {
        case 0:
            return "rock";
        case 1:
            return "paper";
        case 2:
            return "scissors";
    } 
}

let humanScore = 0;
let computerScore = 0;

let buttonContainer = document.querySelector('.button-container');
buttonContainer.addEventListener('click', function playRound(e) {
    let computerChoice = getComputerChoice();
    let humanChoice = e.target.textContent;
    humanChoice = humanChoice.toLowerCase();

    let resultDiv = document.querySelector("#div-result");

    if (humanChoice === computerChoice) {
        resultDiv.textContent = `Draw! Both chose ${computerChoice}. Score: ${humanScore} | ${computerScore}.`;
    }
    else if (
        (humanChoice === "rock" && computerChoice === "scissors") ||
        (humanChoice === "scissors" && computerChoice === "paper") ||
        (humanChoice === "paper" && computerChoice === "rock")
    ){
        humanScore++;
        resultDiv.textContent = `You win! ${humanChoice} beats ${computerChoice}. Score: ${humanScore} | ${computerScore}.`;
    }
    else {
        computerScore++;
        resultDiv.textContent = `Computer wins! ${computerChoice} beats ${humanChoice}. Score: ${humanScore} | ${computerScore}.`;
    }


    if (humanScore == 5 || computerScore == 5) {
        if (humanScore > computerScore) {
            resultDiv.textContent = `You won the game! Score: ${humanScore} | ${computerScore}. `;
        }
        else if (computerScore > humanScore) {
            resultDiv.textContent = `Computer won the game! Score: ${humanScore} | ${computerScore}. `;
        }
        else {
            resultDiv.textContent = `The game ended in a draw. Score: ${humanScore} | ${computerScore}.`;
        }
        humanScore = 0;
        computerScore = 0;
    }
});
