console.log('RPS')


function getComputerChoice() {
    let Num = Math.floor(Math.random()*3);
    if (Num === 0) {
        console.log('Rock');
    } else if (Num === 1) {
        console.log('Paper');
    } else if (Num === 2) {
        console.log('Scissors');
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
    // my code here...
}

const humanSelection = getHumanChoice();
const computerSelection = getComputerChoice();

playRound(humanSelection, computerSelection)
