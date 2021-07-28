const choice_rock = document.getElementById('rock');
const choice_paper = document.getElementById('paper');
const choice_scissors = document.getElementById('scissors');

let roundsPlayed = 1;
let playerScore = 0;
let computerScore = 0;
let status = document.querySelector('.status');
let playerScoreText = document.getElementById('player');
let computerScoreText = document.getElementById('computer');

//Function that returns random computer pick for RPS
function computerPlay() {
    let rockPaperScissors = ['rock', 'paper', 'scissors'];
    
    let result = rockPaperScissors[Math.floor(Math.random() * rockPaperScissors.length)]; //Tweak it a bit, returns duplicates multiple times --> not really random :P

    return result.toUpperCase();
}
//Buttons!
choice_rock.addEventListener('click', () => playRound('ROCK'));
choice_paper.addEventListener('click', () => playRound('PAPER'));
choice_scissors.addEventListener('click', () => playRound('SCISSORS'));

//Accepts a parameter, gets the parameter ON CLICK --> playRound('rock') i.e 
function playRound(playerInput) {
    let computerInput = computerPlay();
    let playerChoice = playerInput;
    //Player or computer wins if any of the combination is true: player: rock ; computer: paper --> computer wins (paper beats rock etc.)!
    if(playerChoice === computerInput) {
        status.style.cssText = 'font-size:24px; color: #C38D9E';
        status.textContent = "Tie!";
        playerScoreText.textContent = `Player: ${playerScore}`;
        computerScoreText.textContent = `Computer: ${computerScore}`;
        roundsPlayed++; 
        return status;
    }
    else if(
        (
        playerChoice === 'ROCK'  && computerInput === "SCISSORS" || 
        playerChoice === 'PAPER' && computerInput === "ROCK" ||
        playerChoice === 'SCISSORS' && computerInput === "PAPER")) {
            playerScore++;
            roundsPlayed++;
            status.style.cssText = 'font-size: 24px; color: #41B3A3';
            status.textContent = `Player wins! ${playerChoice} beats ${computerInput}!`;
            playerScoreText.textContent = `Player: ${playerScore}`;
            computerScoreText.textContent = `Computer: ${computerScore}`; 
            return status;
        }
    else if ((computerInput === "ROCK" && playerChoice === 'SCISSORS' ||
              computerInput === "PAPER" && playerChoice === 'ROCK' ||
              computerInput === "SCISSORS" && playerChoice === 'PAPER')) {
                computerScore++;
                roundsPlayed++;
                status.style.cssText = 'font-size:24px; color: #E27D60';
                status.textContent = `Computer wins! ${computerInput} beats ${playerInput}!`;
                playerScoreText.textContent = `Player: ${playerScore}`;
                computerScoreText.textContent = `Computer: ${computerScore}`; 
                return status;
              } 
}
/*
function roundsCounter() {
    if(roundsPlayed === 5) {
        if(playerScore > computerScore) {
            status.textContent = "You win! Play again?";
        }
        else {
            status.textContent = "Computer wins! Play again?";
        }
    }
}
*/



