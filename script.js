
let playerSelection = 'rock';
let computerSelection; 
let playerScore = 0;
let computerScore = 0;
let rounds = 0;

const playButton = document.querySelector('.playButton');
const gameZone = document.querySelector('.gameZone');
const playerSelectionDisplay = document.querySelector('.playerSelectionDisplay');
const computerSelectionDisplay = document.querySelector('.computerSelectionDisplay');
const playerScoreDisplay = document.querySelector('.playerScoreDisplay');
const computerScoreDisplay = document.querySelector('.computerScoreDisplay');
const resultDisplay = document.querySelector('.resultDisplay');
const gameOutcome = document.querySelector('.gameOutcome')
const gameOutcomeDisplay = document.getElementById('gameOutcomeDisplay');

playButton.addEventListener('click', function() {
    gameOutcomeDisplay.classList.toggle('displaySwitch');
    gameOutcome.textContent = '';
    gameZone.classList.toggle('displaySwitch');
    playButton.classList.toggle('displaySwitch');    
});

const buttons = Array.from(document.querySelectorAll('button'));
  buttons.forEach(button => button.addEventListener('click', function(e) {
    playerSelection = e.explicitOriginalTarget.id;
    
    game(playerSelection);
  }));


function computerPlay() {
    let computerChoice;
    randomNum = Math.ceil(Math.random()*30);
    computerChoice = (randomNum <= 10) ? "rock"
                : (10 < randomNum && randomNum <= 20) ? "paper"
                : "scissors"
                     
    return computerChoice;
};

function playRound() {
    
    rounds++;
    console.log(rounds);
    computerSelection = computerPlay();
    playerSelectionDisplay.textContent =  playerSelection;
    computerSelectionDisplay.textContent = computerSelection;
    let result;
    
    if ((playerSelection !== "rock") && (playerSelection !== "paper") && (playerSelection !== "scissors")) {
        result = "Please choose either rock, paper or scissors.";

    } else if (playerSelection === computerSelection) {
        result = "Draw!";
    
    } else if (playerSelection === "rock") {
        if (computerSelection === "paper") {
            computerScore += 1;
            result = "You lose! Paper beats rock.";            
        } else if (computerSelection === "scissors") {
            playerScore += 1;
            result = "You win! Rock beats scissors."; 
        }               
        
    } else if (playerSelection === "paper") {
        if (computerSelection === "rock") {
            playerScore += 1;
            result = "You win! Paper beats rock.";            
        } else if (computerSelection === "scissors") {
            computerScore += 1;
            result = "You lose! Scissors beats paper.";
        }            

    } else if (playerSelection === "scissors") {
        if (computerSelection === "rock") {
            computerScore += 1;
            result = "You lose! Rock beats scissors.";            
        } else if (computerSelection === "paper") {
            playerScore += 1;
            result = "You win! Scissors beats paper.";
            
        } 
        };
    console.log(result);
    playerScoreDisplay.textContent = playerScore;
    computerScoreDisplay.textContent = computerScore;
    resultDisplay.textContent = result;
    
    
    return result;
};

function game() {
    if (rounds < 5) {
        playRound();
    } else {
        gameZone.classList.toggle('displaySwitch');
        gameOutcomeDisplay.classList.toggle('displaySwitch');
        playButton.classList.toggle('displaySwitch');
        
        if (playerScore > computerScore) { gameOutcome.textContent = playerScore + " to " + computerScore + "\n" + "Victory!"; 
        } else if (playerScore < computerScore) { gameOutcome.textContent = playerScore + " to " + computerScore + "\n" + "Better luck next time.";
        } else { gameOutcome.textContent = playerScore + " to " + computerScore + "\n" + "Tight game!";
        }
    resetGame();
    }
};

function resetGame() {
    rounds = 0;
    playerScore = '';
    computerScore = '';
    playerScoreDisplay.textContent = '';
    computerScoreDisplay.textContent = '';
    resultDisplay.textContent = '';
};

// function game() {
//     for (let i = 1; i <= 5; i++) {
//         playRound(playerSelection);              
//         // let roundOutcome = playRound(playerSelection, computerSelection);
//         // alert("Round " + i + ":\n" + roundOutcome);
//         console.log(playerScore, computerScore);
//         // mettre ici un conditionnel pour augmenter ou diminuer player score?        
        
//     };   
//     
// }

   

