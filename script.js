const choiceRock = document.getElementById('rock');
const choicePaper = document.getElementById('paper');
const choiceScissors = document.getElementById('scissors');
const playAgainButton = document.getElementById('reset');

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
choiceRock.addEventListener('click', () => playRound('ROCK'));
choicePaper.addEventListener('click', () => playRound('PAPER'));
choiceScissors.addEventListener('click', () => playRound('SCISSORS'));
playAgainButton.addEventListener('click', () => playAgain());

//Accepts a parameter, gets the parameter ON CLICK --> playRound('rock') i.e 
function playRound(playerInput) {
    let computerInput = computerPlay();
    let playerChoice = playerInput;
    checkWinner();
    //Player or computer wins if any of the combination is true: player: rock ; computer: paper --> computer wins (paper beats rock etc.)!
        if(playerChoice === computerInput) {
        status.style.cssText = 'font-size:24px; color: #C38D9E';
        status.textContent = "Tie!";
        playerScoreText.textContent = `Player: ${playerScore}`;
        computerScoreText.textContent = `Computer: ${computerScore}`;
        checkWinner();
        return status;
        }
        else if(
            (
            playerChoice === 'ROCK'  && computerInput === "SCISSORS" || 
            playerChoice === 'PAPER' && computerInput === "ROCK" ||
            playerChoice === 'SCISSORS' && computerInput === "PAPER")) {
            playerScore++;
            status.style.cssText = 'font-size: 24px; color: #41B3A3';
            status.textContent = `Player wins! ${playerChoice} beats ${computerInput}!`;
            playerScoreText.textContent = `Player: ${playerScore}`;
            computerScoreText.textContent = `Computer: ${computerScore}`; 
            checkWinner();
            return status;
            }
        else if ((computerInput === "ROCK" && playerChoice === 'SCISSORS' ||
                computerInput === "PAPER" && playerChoice === 'ROCK' ||
                computerInput === "SCISSORS" && playerChoice === 'PAPER')) {
                computerScore++;
                status.style.cssText = 'font-size:24px; color: #E27D60';
                status.textContent = `Computer wins! ${computerInput} beats ${playerInput}!`;
                playerScoreText.textContent = `Player: ${playerScore}`;
                computerScoreText.textContent = `Computer: ${computerScore}`;
                checkWinner(); 
                return status;
                } 
}
function checkWinner() {
        if(playerScore >= 5) {
            choiceRock.disabled = true;
            choicePaper.disabled = true;
            choiceScissors.disabled = true;
            status.textContent = "You win the game! Play again?";
        }
        else if(computerScore >= 5) {
            choiceRock.disabled = true;
            choicePaper.disabled = true;
            choiceScissors.disabled = true;
            status.textContent = "You lose! Want to try again?";
        }
}

function playAgain() {
    location.reload();
}




