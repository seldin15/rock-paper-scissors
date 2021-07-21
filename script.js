let roundsPlayed = 1;
let playerScore = 0;
let computerScore = 0;

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
    playerInput = playerInput();
    computerPlay = computerPlay();
     if(playerInput === computerPlay) {
        playerScore++;
        computerScore++;
        return "Tie!";
    }
    else if(
        (
        playerInput === "rock" && computerPlay === "scissors" || 
        playerInput === "paper" && computerPlay === "rock" ||
        playerInput === "scissors" && computerPlay === "paper")) {
            playerScore++;
            return `Player wins! ${playerInput} beats ${computerPlay}`;
        }
    else if ((computerPlay === "rock" && playerInput === "scissors" ||
              computerPlay === "paper" && playerInput === "rock" ||
              computerPlay === "scissors" && playerInput === "paper")) {
                computerScore++;
                return `Computer wins! ${computerPlay} beats ${playerInput}`;
              }            
}
function getWinner() {
    if(playerScore === computerScore) {
        console.log("Tie!");
    }
   else if(playerScore > computerScore) {
        console.log("Player wins the round!");
    }
    else {
        console.log("Computer wins the round!");
    }
}
//Problematic function
function game() {
    while(roundsPlayed <= 5) { //roundsplayed = 0, 0 < 5 --> TRUE 
        console.log("Player score: " + playerScore + " : " + "computer score: " + computerScore);
        console.log("Round number "+roundsPlayed + ": " +playRound(playerInput, computerPlay));
        roundsPlayed++;
    }
    return getWinner();
}

game();

