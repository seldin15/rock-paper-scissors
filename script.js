const buttons = document.querySelectorAll('button');
const choice_rock = document.querySelector('#rock');
const choice_paper = document.querySelector('#paper');
const choice_scissors = document.querySelector('#scissors');

let roundsPlayed = 1;
let playerChoice;
let playerScore = 0;
let computerScore = 0;
let status = document.querySelector('.status');


//Function that returns random computer pick for RPS
function computerPlay() {
    let rockPaperScissors = ['rock', 'paper', 'scissors'];
    
    let result = rockPaperScissors[Math.floor(Math.random() * rockPaperScissors.length)]; //Tweak it a bit, returns duplicates multiple times --> not really random :P

    return result;
}
//Buttons!
buttons.forEach((button) => {
    button.addEventListener('click', () => {
        playRound(playerChoice); //Unsure what argument to put here --> this might be a problem?
    });
});

function playerInput() {
    if(choice_rock) {
        playerChoice = "rock"; 
    }
    if(choice_paper) {
        playerChoice = "paper";
    }
    if(choice_scissors) {
        playerChoice = "scissors";
    }
}

function playRound(playerInput) {
    //Player or computer wins if any of the combination is true: player: rock ; computer: paper --> computer wins (paper beats rock etc.)!
    if(playerInput === computerPlay()) {
        playerScore++;
        computerScore++;
        status.textContent = "Tie!";
        return status;
    }
    else if(
        (
        playerInput === "rock" && computerPlay() === "scissors" || 
        playerInput === "paper" && computerPlay() === "rock" ||
        playerInput === "scissors" && computerPlay() === "paper")) {
            playerScore++;
            status.setContent = `Player wins! ${playerInput} beats ${computerPlay}`;
            return status;
        }
    else if ((computerPlay() === "rock" && playerInput === "scissors" ||
              computerPlay() === "paper" && playerInput === "rock" ||
              computerPlay() === "scissors" && playerInput === "paper")) {
                computerScore++;
                status.setContent = `Computer wins! ${computerPlay} beats ${playerInput}`;
                return status;
              }            
}
/* To be continued
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
*/


