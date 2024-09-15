console.log('RPS')

let humanScore = 0;
let computerScore = 0; 

let humanChoice = getHumanChoice().toLowerCase();
let computerChoice = getComputerChoice(); 

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


function playGame() {
    getComputerChoice()
    getHumanChoice()
    playRound()
    addPoint()
    if (computerScore > humanScore) {
        return 'computer is ahead!';
    } else if (computerScore < humanScore){
        return 'You are ahead!'
    }
}


// play 5 rounds
// i need to.
// get new choices from both players
// play a round using those choices
// keep score of the winning points

// the issue I am running into is updating 
// humanScore. I can update it once, but nothing after
// that. 

// I don't know what to do about that, so i will be
// moving on. its close enough for now. 