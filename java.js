console.log('RPS')

// get computer choice is going to be a function
// that function needs to...

//get random number (between 0-1)
// multiply that number by 3
// if output = 1 answer = rock
// if output = 2 answer = paper
// if output = 3 answer = scissors



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
