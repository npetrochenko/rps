let playerSelection;
let computerSelection;
let a = 0;
let b = 0;

playerSelection = prompt("Make your choice");
playerSelection = playerSelection.toUpperCase();
console.log(playerSelection);

computerSelection = computerPlay();
console.log(computerSelection);

function computerPlay() {
    a = Math.random()
    if (a <= 0.33) {
        return "ROCK";
    } else if (a > 0.33 && a < 0.66) {
        return "PAPER";
    } else {
        return "SCISSORS";
    }
}

function playRound(playerSelection, computerSelection) {
    switch(playerSelection) {
        
        case "ROCK":
            if (computerSelection == "SCISSORS") {
                alert("You won")
            } else if (computerSelection == "PAPER") {
                alert("You lose")
            } else {
                alert("Draw")
            }
            break;

        case "PAPER":
            if (computerSelection == "ROCK") {
                alert("You won")
            } else if (computerSelection == "SCISSORS") {
                alert("You lose")
            } else {
                alert("Draw")
            }
            break;

        case "SCISSORS": 
            if (computerSelection == "PAPER") {
                alert("You won")
            } else if (computerSelection == "ROCK") {
                alert("You lose")
            } else {
                alert("Draw")
            }
            break;
        
        default:
            alert("Make a right choice")
    }
}    


playRound(playerSelection, computerSelection);