console.log('RPS')


function getComputerChoice() {
    let Num = Math.floor(Math.random()*3);
    if (Num === 0) {
        return 'rock';
    } else if (Num === 1) {
        return 'paper';
    } else if (Num === 2) {
        return 'scissors';
    };
}

function getHumanChoice() {
    let answer = prompt ("Rock, Paper or Scissors?"); {
        return answer;
    }
}

let humanScore = 0;
let computerScore = 0; 

const humanChoice = getHumanChoice().toLowerCase();
const computerChoice = getComputerChoice(); 

function playRound() {
    if (humanChoice === 'rock' && computerChoice === 'paper') {
        return 'Computer chose paper, you lost.';
    } else if (humanChoice === 'paper' && computerChoice === 'scissors') {
       return 'Computer chose scissors, better luck next time.';
    } else if (humanChoice === 'scissors' && computerChoice === 'rock'){
        return 'Computer chose rock, way to lose again!';
    } else if (humanChoice === 'rock' && computerChoice === 'scissors') {
        return 'You Crushed Scissors! Good Job!';
    } else if (humanChoice === 'paper' && computerChoice === 'rock') {
        return 'You Covered Rock! Get it Son!'; 
    } else if(humanChoice === 'scissors' && computerChoice === 'paper') {
        return 'You cut up paper... now clean it up.';
    } else if (humanChoice === computerChoice)
        return 'It is a Draw! Play again!';
}


function addPoint() {
    if (humanChoice === 'rock' && computerChoice === 'paper') {
        return computerScore++ ;
    } else if (humanChoice === 'paper' && computerChoice === 'scissors') {
       return  computerScore++ ;
    } else if (humanChoice === 'scissors' && computerChoice === 'rock'){
        return computerScore++ ;
    } else if (humanChoice === 'rock' && computerChoice === 'scissors') {
        return humanScore++ ;
    } else if (humanChoice === 'paper' && computerChoice === 'rock') {
        return humanScore++ ; 
    } else if(humanChoice === 'scissors' && computerChoice === 'paper') {
        return humanScore++ ;
    } else if (humanChoice === computerChoice)
        return 'It is a Draw! Play again!';
}

