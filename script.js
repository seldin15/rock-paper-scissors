function computerPlay() {
    let rockPaperScissors = ['Rock', 'Paper', 'Scissors'];
    
    let result = rockPaperScissors[Math.floor(Math.random() * rockPaperScissors.length)]; //Tweak it a bit, returns duplicates multiple times --> not really random :P

    return result;
}
