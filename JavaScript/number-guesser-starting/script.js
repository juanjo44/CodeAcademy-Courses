let humanScore = 0;
let computerScore = 0;
let currentRoundNumber = 1;

// Write your code below:

const generateTarget = () => Math.round(Math.random() *9);

const compareGuesses = (human, computer, secret) => {
    if (Math.abs(secret - human) <= Math.abs(secret - computer)){
        return true;
    } else {
        return false;
    }
}