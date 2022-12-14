const choices = [
    "rock",
    "paper",
    "scissors"
];

function getComputerChoice() {
    return choices[Math.floor(Math.random()*choices.length)]
}

let computerSelection;
let playerSelection;
let computerScore;
let playerScore;

game();

function game() {
    computerScore = 0;
    playerScore = 0;
    for (let i=0; i<5; i++) {
        onUserInput();
    }
    console.log(declareWinner());

    function declareWinner() {
        if (playerScore === computerScore) {
            alert (playerScore + '-' + computerScore + '\nTie game!');
            return playerScore + '-' + computerScore + '\nTie game!';
        } else if (playerScore>computerScore) {
            alert (playerScore + '-' + computerScore + '\nYou win!');
            return playerScore + '-' + computerScore + '\nYou win!';
        } else {
            alert (playerScore + '-' + computerScore + '\nYou lost sucka!');
            return playerScore + '-' + computerScore + '\nYou lost sucka!'
        }
    }
}

function onUserInput () {
    playerSelection = prompt('Rock, Paper, or Scissors?', '');
    if ((playerSelection.toLowerCase() == 'rock')
    || (playerSelection.toLowerCase() == 'paper')
    || (playerSelection.toLowerCase() == 'scissors')) {
        console.log(playRound(playerSelection, computerSelection));
    } else{
        alert ('The input you entered is not a valid choice.');
        onUserInput();
    }
}

function playRound(playerSelection, computerSelection) {
    computerSelection = getComputerChoice().toLowerCase();
    playerSelection = playerSelection.toLowerCase();
    if (computerSelection == playerSelection) {
        alert('Tie game!');
        return 'Tie game \nComputer Score: ' + computerScore + '\nYour Score: ' + playerScore;
    } else if (
        (computerSelection == 'rock' && playerSelection == 'scissors')
    || (computerSelection == 'scissors' && playerSelection == 'paper')
    || (computerSelection == 'paper' && playerSelection == 'rock')) {
        alert('You lose! ' + computerSelection + ' beats ' + playerSelection);
        return 'Computer Score: ' + ++computerScore +
                '\nYour Score: ' + playerScore;
    } else {
        alert('You win! ' + playerSelection + ' beats ' + computerSelection);
        return 'Your Score: ' + ++playerScore +
                '\nComputer Score: ' + computerScore;
    }
}