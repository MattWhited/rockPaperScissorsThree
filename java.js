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

// I need a way to keep track of players scores. 

// declare two variables
// start this variables at 0
// when a team wins the game, add a point to its respective variable. 

let humanScore = 0;

let computerScore = 0; 
