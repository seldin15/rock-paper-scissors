const choice_rock = document.getElementById('rock');
const choice_paper = document.getElementById('paper');
const choice_scissors = document.getElementById('scissors');

let roundsPlayed = 1;
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
choice_rock.addEventListener('click', () => playRound('rock'));
choice_paper.addEventListener('click', () => playRound('paper'));
choice_scissors.addEventListener('click', () => playRound('scissors'));

//Accepts a parameter, gets the parameter ON CLICK --> playRound('rock') i.e 
function playRound(playerInput) {
    let computerInput = computerPlay();
    let playerChoice = playerInput;
    //Player or computer wins if any of the combination is true: player: rock ; computer: paper --> computer wins (paper beats rock etc.)!
    if(playerChoice === computerInput) {
        playerScore++;
        computerScore++;
        status.style.cssText = 'font-size:24px';
        status.textContent = "Tie!";
        return status;
    }
    else if(
        (
        playerChoice === 'rock'  && computerInput === "scissors" || 
        playerChoice === 'paper' && computerInput === "rock" ||
        playerChoice === 'scissors' && computerInput === "paper")) {
            playerScore++;
            status.style.cssText = 'font-size: 24px; color: yellow';
            status.textContent = `Player wins! ${playerChoice} beats ${computerInput}`;
            return status;
        }
    else if ((computerInput === "rock" && playerChoice === 'scissors' ||
              computerInput === "paper" && playerChoice === 'rock' ||
              computerInput === "scissors" && playerChoice === 'paper')) {
                computerScore++;
                status.style.cssText = 'font-size:24px';
                status.textContent = `Computer wins! ${computerInput} beats ${playerInput}`;
                return status;
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


