let humanScore = 0;
let computerScore = 0;
let currentRoundNumber = 1;

// Write your code below:

const generateTarget = () => Math.round(Math.random() *9);

const compareGuesses = (human, computer, secret) => {
    if(human < 0 || human > 9){
        window.alert('You should choose a number between 0 and 9');
    }
    if (Math.abs(secret - human) <= Math.abs(secret - computer)){
        return true;
    } else {
        return false;
    }
}

const updateScore = (value) =>{
    switch (value){
        case 'human':
            humanScore += 1;
            break;
        default:
            computerScore += 1;
            break;

    }
}
const advanceRound = () =>{
    currentRoundNumber += 1;
}