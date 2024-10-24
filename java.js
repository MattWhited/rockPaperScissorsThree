console.log('RPS')

let humanScore = 0;
let computerScore = 0; 

const rockButton = document.getElementById("rock");
const paperButton = document.getElementById('paper'); 
const scissorsButton = document.getElementById('scissors'); 

rockButton.addEventListener("click" , function() {
    computerChoice = getComputerChoice(); 
    humanChoice = 'rock';
    document.getElementById("result").innerHTML = playRound();
});

paperButton.addEventListener("click", function() {
    computerChoice = getComputerChoice(); 
    humanChoice = 'paper'
    document.getElementById("result").innerHTML = playRound()
});

scissorsButton.addEventListener("click", function() {
    computerChoice = getComputerChoice(); 
    humanChoice = 'scissors'
    document.getElementById("result").innerHTML = playRound()
});

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


function playRound() {
    if (humanChoice === 'rock' && computerChoice === 'paper') {
        return 'Computer chose paper, you lost.';
    } else if (humanChoice === 'paper' && computerChoice === 'scissors') {
       return 'Computer chose scissors, better luck next time.';
    } else if (humanChoice === 'scissors' && computerChoice === 'rock'){
        return 'Computer chose rock, way to lose again!';
    } else if (humanChoice === 'rock' && computerChoice === 'scissors') {
        return 'Computer chose Scissors! Good Job!';
    } else if (humanChoice === 'paper' && computerChoice === 'rock') {
        return 'Computer chose Rock! Get it Son!'; 
    } else if(humanChoice === 'scissors' && computerChoice === 'paper') {
        return 'Computer chose paper! Way to go!';
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