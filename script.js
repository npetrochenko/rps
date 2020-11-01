let playerSelection, computerSelection;
let pcounter = 0, ccounter = 0;

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
     scissorsBtn.classList.add('active');
     scissorsBtn.addEventListener('transitionend', function() {
         scissorsBtn.classList.remove('active');
     })
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
     rockBtn.classList.add('active');
     rockBtn.addEventListener('transitionend', function() {
         rockBtn.classList.remove('active');
     })
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
     paperBtn.classList.add('active');
     paperBtn.addEventListener('transitionend', function() {
         paperBtn.classList.remove('active');
     })
});

const playerCounter = document.querySelector('.player-counter');
const computerCounter = document.querySelector('.computer-counter');

playerCounter.textContent = 0;
computerCounter.textContent = 0;
window.addEventListener('click', function() {playerCounter.textContent = pcounter});
window.addEventListener('click', function() {computerCounter.textContent = ccounter});

// const menuCounter = document.querySelector('.counter');
// menuCounter.textContent = 0;
// window.addEventListener('click', function() {menuCounter.textContent = counter});

function playRound(p, c) {
    switch(p) {
        case 'ROCK':
            console.log('p is rock');
            if (c == 'PAPER') {ccounter++; console.log('c is paper');}
            else if (c == 'SCISSORS') {pcounter++; console.log('c is scissors');}
            else {console.log('c is rock')}
            break;
        case 'PAPER':
            console.log('p is paper');
            if (c == 'SCISSORS') {ccounter++; console.log('c is scissors');}
            else if (c == 'ROCK') {pcounter++; console.log('c is rock');}
            else {console.log('c is paper')}
            break;
        case 'SCISSORS': 
            console.log('p is scissors');
            if (c == 'ROCK') {ccounter++; console.log('c is rock');}
            else if (c == 'PAPER') {pcounter++; console.log('c is paper');}
            else {console.log('c is scissors')}
            break;
    };
};






