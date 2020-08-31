/* computerPlay = () => {
    let computerChoice;
    randomNum = Math.ceil(Math.random()*30);   
    if (randomNum <= 10) {
        computerChoice = "Rock!";
    } else if (10 < randomNum && randomNum <= 20) {
        computerChoice = "Paper!"
    } else {
        computerChoice = "Cissors!"
    }
    
    console.log(computerChoice);
    return randomNum;
}; */

let computerChoice;
let userChoice;

function computerPlay() {
    let computerChoice;
    randomNum = Math.ceil(Math.random()*30);
    computerChoice = (randomNum <= 10) ? "Rock!"
                : (10 < randomNum && randomNum <= 20) ? "Paper!"
                : "Cissors!"
                    
    
    return computerChoice;
};

function shiFuMi(userChoice, computerChoice) {
    let outcome;
    
    if (userChoice = "rock") {
        outcome = (computerChoice == "Rock!") ? "Draw!"
                : (computerChoice == "Paper!") ? "You win!"
                : "You loose!"
                return outcome;
    } else if (userChoice = "paper") {
        outcome = (computerChoice == "Rock!") ? "You win!"
                : (computerChoice == "Paper!") ? "Draw!"
                : "You loose!"
                return outcome;
    } else {
        outcome = (computerChoice == "Rock!") ? "You loose!"
                : (computerChoice == "Paper!") ? "You win!"
                : "Draw!"
                return outcome;
    };           
    }

computerPlay();
