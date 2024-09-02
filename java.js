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


//I need a human input for the game now. 
// I can do that using the prompt method. 

function getHumanChoice() {
    let answer = prompt("Rock, Paper or Scissors?"); {
        return answer;
    }
}