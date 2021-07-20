//Function that returns random computer pick for RPS
function computerPlay() {
    let rockPaperScissors = ['Rock', 'Paper', 'Scissors'];
    
    let result = rockPaperScissors[Math.floor(Math.random() * rockPaperScissors.length)]; //Tweak it a bit, returns duplicates multiple times --> not really random :P

    return result;
}

function playerSelection() {
    const playerInput = prompt("Choose your weapon! (Either Rock, Paper or Scissors)", "");
    const sanitizedInput = playerInput.toLowerCase();

    return sanitizedInput;
}
console.log(playerSelection());
