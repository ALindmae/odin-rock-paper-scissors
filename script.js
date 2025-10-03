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

    if (humanChoice === computerChoice) {
        console.log(`Draw! Both chose ${computerChoice}.`);
    }
    else if (
        (humanChoice === "rock" && computerChoice === "scissors") ||
        (humanChoice === "scissors" && computerChoice === "paper") ||
        (humanChoice === "paper" && computerChoice === "rock")
    ){
        humanScore++;
        console.log(`You win! ${humanChoice} beats ${computerChoice}.`);
    }
    else {
        computerScore++;
        console.log(`Computer wins! ${computerChoice} beats ${humanChoice}.`);
    }


    if (humanScore == 5 || computerScore == 5) {
        if (humanScore > computerScore) {
            console.log("You won the game!");
        }
        else if (computerScore > humanScore) {
            console.log("Computer won the game!");
        }
        else {
        console.log("The game ended in a draw.");
        }
    }
});
