computerPlay = () => {
    let computerChoice;
    randomNum = Math.ceil(Math.random()*30);   
    if (randomNum <= 10) {
        computerChoice = "Rock!";
    } if (10 < randomNum <= 20) {
        computerChoice = "Paper!"
    } else {
        computerChoice = "Cissors!"
    }
    
    console.log(computerChoice);
    return randomNum;
};

// un commentaire histoire de modifier eu la c'est mieux


computerPlay();