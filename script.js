let playerSelection, computerSelection;
let counter = 0;

function randomComputerChoice() {
    random = Math.random()
    if (random <= 0.33) {
        return "ROCK";
    } else if (random <= 0.66) {
        return "PAPER";
    } else { 
        return "SCISSORS";
    };
};

const rockBtn = document.querySelector('.rock');
const paperBtn = document.querySelector('.paper');
const scissorsBtn = document.querySelector('.scissors');
const playerChoice = document.querySelector('.player-choice > i');
const computerChoice = document.querySelector('.computer-choice > i')

scissorsBtn.addEventListener('click', function() {
    playerSelection = 'SCISSORS';
    playerChoice.setAttribute('class', 'fas fa-hand-scissors');
    computerSelection = randomComputerChoice();
     if (computerSelection == "ROCK") {
         computerChoice.setAttribute('class', 'fas fa-hand-rock');
     } else if (computerSelection == "PAPER") {
         computerChoice.setAttribute('class', 'fas fa-hand-paper');
     } else {
         computerChoice.setAttribute('class', 'fas fa-hand-scissors');
     };
     playRound(playerSelection, computerSelection);
     console.log(counter);
});
rockBtn.addEventListener('click', function() {
    playerSelection = 'ROCK';
    playerChoice.setAttribute('class', 'fas fa-hand-rock');
    computerSelection = randomComputerChoice();
     if (computerSelection == "ROCK") {
         computerChoice.setAttribute('class', 'fas fa-hand-rock');
     } else if (computerSelection == "PAPER") {
         computerChoice.setAttribute('class', 'fas fa-hand-paper');
     } else {
         computerChoice.setAttribute('class', 'fas fa-hand-scissors');
     };
     playRound(playerSelection, computerSelection);
     console.log(counter);
});
paperBtn.addEventListener('click', function() {
    playerSelection = 'PAPER';
    playerChoice.setAttribute('class', 'fas fa-hand-paper');
    computerSelection = randomComputerChoice();
     if (computerSelection == "ROCK") {
         computerChoice.setAttribute('class', 'fas fa-hand-rock');
     } else if (computerSelection == "PAPER") {
         computerChoice.setAttribute('class', 'fas fa-hand-paper');
     } else {
         computerChoice.setAttribute('class', 'fas fa-hand-scissors');
     };
     playRound(playerSelection, computerSelection);
     console.log(counter);
});

const menuCounter = document.querySelector('.counter');
menuCounter.textContent = 0;
window.addEventListener('click', function() {menuCounter.textContent = counter});

function playRound(p, c) {
    switch(p) {
        case 'ROCK':
            console.log('p is rock');
            if (c == 'PAPER') {counter--; console.log('c is paper');}
            else if (c == 'SCISSORS') {counter++; console.log('c is scissors');}
            else {console.log('c is rock')}
            break;
        case 'PAPER':
            console.log('p is paper');
            if (c == 'SCISSORS') {counter--; console.log('c is scissors');}
            else if (c == 'ROCK') {counter++; console.log('c is rock');}
            else {console.log('c is paper')}
            break;
        case 'SCISSORS': 
            console.log('p is scissors');
            if (c == 'ROCK') {counter--; console.log('c is rock');}
            else if (c == 'PAPER') {counter++; console.log('c is paper');}
            else {console.log('c is scissors')}
            break;
    };
};






