console.log('RPS')


function getComputerChoice() {
    let Num = Math.floor(Math.random()*3);
    if (Num === 0) {
        console.log('rock');
    } else if (Num === 1) {
        console.log('paper');
    } else if (Num === 2) {
        console.log('scissors');
    };
}

function getHumanChoice() {
    let answer = prompt("Rock, Paper or Scissors?"); {
        return answer;
    }
}

let humanScore = 0;

let computerScore = 0; 

function playRound(humanChoice, computerChoice) {
    if (humanChoice === 'rock' && computerChoice === 'paper') {
        return 'Computer chose paper, you lost.'
    } else if (humanChoice === 'paper' && computerChoice === 'scissors') {
        return 'Computer chose scissors, better luck next time.'
    } else if (humanChoice === 'scissors' && computerChoice === 'rock'){
        return 'Computer chose rock, way to lose again!'
    } else if (humanChoice === 'rock' && computerChoice === 'rock') {
        return 'It is a Draw! Play again!'
    } else {
        return 'You Win!'
    }
    // if the same element is chosen then it is a draw
    //declare a winner based on those results. 
}

const humanChoice = getHumanChoice().toLowerCase();
const computerChoice = getComputerChoice(); 