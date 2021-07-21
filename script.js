//Function that returns random computer pick for RPS
function computerPlay() {
    let rockPaperScissors = ['rock', 'paper', 'scissors'];
    
    let result = rockPaperScissors[Math.floor(Math.random() * rockPaperScissors.length)]; //Tweak it a bit, returns duplicates multiple times --> not really random :P

    return result;
}

function playerInput() {
    let input = prompt("Choose your weapon! (Either Rock, Paper or Scissors)", "");
    return input.toLowerCase();
}


function playRound(playerInput, computerPlay) {
    //Player or computer wins if any of the combination is true: player: rock ; computer: paper --> computer wins (paper beats rock etc.)!

     if(playerInput === computerPlay) {
        return "Tie!";
    }
    else if(
        (
        playerInput === "rock" && computerPlay === "scissors" || 
        playerInput === "paper" && computerPlay === "rock" ||
        playerInput === "scissors" && computerPlay === "paper")) {
            return "Player wins!";
        }
    else if ((computerPlay === "rock" && playerInput === "scissors" ||
              computerPlay === "paper" && playerInput === "rock" ||
              computerPlay === "scissors" && playerInput === "paper")) {
                return "Computer wins!";
              }            
}
const playerSelection = playerInput();
console.log(playerSelection);
const computerSelection = computerPlay();
console.log(computerSelection);
console.log(playRound(playerSelection, computerSelection));

