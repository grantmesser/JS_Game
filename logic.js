let wins = 0;
let losses = 0;
let ties = 0;
let games = 0;

function game(userChoice){
    let randNum = Math.floor(Math.random() * 3);
    let aiChoice = null;

    //Determine Ai Choice
    if (randNum == 1) {
        aiChoice = 'rock';
    }
    else if (randNum == 2) {
        aiChoice = 'paper';
    }
    else {
        aiChoice = 'scissors';
    }

    document.getElementById('userChoice').innerText = userChoice;
    document.getElementById('aiChoice').innerText = aiChoice;

    //Determine Result
    if ((userChoice == aiChoice)){
        ties++;
        document.getElementById('result').innerText = "It's a draw!";
        document.getElementById('ties').innerText = ties;
    }
    else if ((userChoice == 'rock' & aiChoice == 'scissors') || (userChoice == 'paper' & aiChoice == 'rock') || (userChoice == 'scissors' & aiChoice == 'paper')){
        wins++;
        document.getElementById('result').innerText = 'You win!';
        document.getElementById('wins').innerText = wins;
    }
    else {
        losses++;
        document.getElementById('result').innerText = 'You lose!';
        document.getElementById('losses').innerText = losses;
    }
    games++;
    document.getElementById('games').innerText = games;
}

function resetRecord(){
    wins = 0;
    losses = 0;
    ties = 0;
    games = 0;
    document.getElementById('userChoice').innerText = null;
    document.getElementById('aiChoice').innerText = null;
    document.getElementById('result').innerText = null;
    document.getElementById('ties').innerText = ties;
    document.getElementById('wins').innerText = wins;
    document.getElementById('losses').innerText = losses;
    document.getElementById('games').innerText = games;

}