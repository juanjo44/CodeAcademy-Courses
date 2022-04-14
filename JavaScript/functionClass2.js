const getSleepHours = day => {
    day = day.toLowerCase();
    switch(day){
      case 'monday':
        return 8;
      case 'tuesday':
        return 7;
      case 'wednesday':
        return 6;
      case 'thursday':
        return 7;
      case 'friday':
        return 8;
      case 'saturday':
        return 5;
      case 'sunday':
        return 8;
    }
  }
  const getActualSleepHours = () => 8 + 7+ 6 + 7+8+5+8;
  
  const getIdealSleepHours = (idealHours) => idealHours*7;
  
  const calculateSleepDebt = () => {
    const actualSleepHours = getActualSleepHours();
    const idealSleepHours = getIdealSleepHours(8);
  
    if (actualSleepHours === idealSleepHours){
      console.log('You got the perfect amount of sleep');
    } else if(actualSleepHours > idealSleepHours){
      console.log(`You got ${actualSleepHours - idealSleepHours} hours more of sleep. It is more sleep than needed`);
    } else{
      console.log(`You got ${idealSleepHours - actualSleepHours} hours less of sleep. You should sleep more`);
    }
  }
  
  calculateSleepDebt();