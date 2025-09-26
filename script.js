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

// Play a round = take both decisions into account and decide who wins  

// game will play 5 rounds

