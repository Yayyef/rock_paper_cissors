let playerSelection = "rock";
let computerSelection; 
let userScore = 0;
let computerScore = 0;

function computerPlay() {
    let computerChoice;
    randomNum = Math.ceil(Math.random()*30);
    computerChoice = (randomNum <= 10) ? "Rock!"
                : (10 < randomNum && randomNum <= 20) ? "Paper!"
                : "Scissors!"
                     
    return computerChoice;
};

function playRound(playerSelection, computerSelection) {
    playerSelection  = prompt("Rock, paper, scissors!");
    computerSelection = computerPlay();
    let result;
    if (playerSelection.toLowerCase() === "rock") {
        if (computerSelection === "Rock!") {
            result = "Draw!";
        } else if (computerSelection === "Paper!") {
            computerScore += 1;
            result = "You lose! Paper beats rock.";
            
        } else if (computerSelection === "Scissors!") {
            userScore += 1;
            result = "You win! Rock beats scissors.";
            
        } else {
            result = "Wooops";
        }
        
    } else if (playerSelection.toLowerCase() === "paper") {
        if (computerSelection === "Rock!") {
            userScore += 1;
            result = "You win! Paper beats rock.";
            
        } else if (computerSelection === "Paper!") {
            result = "Draw!";
        } else if (computerSelection === "Scissors!") {
            computerScore += 1;
            result = "You lose! Scissors beats paper.";
            
        } else {
            result = "Wooops";
        }

    } else if (playerSelection.toLowerCase() === "scissors") {
        if (computerSelection === "Rock!") {
            computerScore += 1;
            result = "You lose! Rock beats scissors.";
            
        } else if (computerSelection === "Paper!") {
            userScore += 1;
            result = "You win! Scissors beats paper.";
            
        } else if (computerSelection === "Scissors!") {
            result = "Draw!";
        } else {
            result = "Wooops";
        }
    } else {
        result = "You have to choose either rock, paper or scissors."
    }
    
    return result;
}

function game() {
    for (let i = 1; i <= 5; i++) {
                      
        let roundOutcome = playRound(playerSelection, computerSelection);
        alert("Round " + i + ":\n" + roundOutcome);
        console.log(userScore, computerScore);
        // mettre ici un conditionnel pour augmenter ou diminuer user score?        
        
    };   
    if (userScore > computerScore) { alert(userScore + " to " + computerScore + "\n" + "Victory!") }
    else if (userScore < computerScore) { alert(userScore + " to " + computerScore + "\n" + "Better luck next time.")}
    else { alert(userScore + " to " + computerScore + "\n" + "Tight game!") }
}

game();

