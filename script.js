// Create function that returns "rock", "paper" or "scissors" at random

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


// Prompt human rock, paper, scissors decision
function getHumanChoice () {
    let humanChoice = prompt("rock, paper or scissors?");
    return humanChoice;
}

// Keep track of players score
let humanScore = 0;
let computerScore = 0;

// Play a round = take both decisions into account and decide who wins
function playRound (computerChoice, humanChoice) {
    humanChoice = humanChoice.toLowerCase();

    if (humanChoice == computerChoice) {
        console.log(`Draw! Both chose ${computerChoice}.`);
    }
    if (
        (humanChoice === "rock" && computerChoice === "scissors") ||
        (humanChoice === "scissors" && computerChoice === "paper") ||
        (humanChoice === "paper" && computerChoice === "rock")
    ) {
        humanScore++;
        console.log(`You win! ${humanChoice} beats ${computerChoice}.`);
    }
    else {
    computerScore++;
    console.log(`Computer wins! ${computerChoice} beats ${humanChoice}.`);
    }
}

let computerSelection = getComputerChoice();
let humanSelection = getHumanChoice();

playRound(computerSelection, humanSelection);

// game will play 5 rounds

