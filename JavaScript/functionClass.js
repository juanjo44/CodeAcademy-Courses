const getUserChoice = userInput =>{
    userInput = userInput.toLowerCase();
    if (userInput === 'rock' || userInput === 'paper' || userInput === 'scissors' || userInput === 'bomb'){
      return userInput
    } else {
      console.log('It is not a valid option')
    }
  };
  
  
  const getComputerChoice = () =>{
    const machine = Math.floor(Math.random() * 3);
    switch (machine){
      case 0:
        return 'rock';
      case 1:
        return 'paper';
      default:
        return 'scissors';
    }
  };
  
  const determineWinner = (userChoice, computerChoice) =>{
    if(userChoice === computerChoice){
      return 'The game was a tie';
    } else if(userChoice === 'rock' && computerChoice === 'paper'){
      return 'Computer won';
    } else if (userChoice === 'paper' && computerChoice === 'scissors'){
      return 'computer won';
    } else if(userChoice === 'scissors' && computerChoice === 'rock'){
      return 'computer won';
    } else{
      return 'You won';
    }
  };
  
  const playGame = () => {
    const userChoice = getUserChoice('bomb');
    const computerChoice = getComputerChoice();
  
    console.log(`The user's choice was: ${userChoice} and the computer choice was: ${computerChoice}`);
    console.log(`${determineWinner(userChoice, computerChoice)}`);
  }
  
  playGame();