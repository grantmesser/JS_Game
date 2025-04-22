

function game(userChoice){
    let wins = sessionStorage.getItem("wins");
    let losses = sessionStorage.getItem("losses");
    let ties = sessionStorage.getItem("ties");

    if (wins == null){
        wins = 0;
    }
    if (losses == null){
        losses = 0;
    }
    if(ties == null){
        ties = 0;
    }

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

    document.getElementById('userChoice').innerText = "You Chose: " + userChoice;
    document.getElementById('aiChoice').innerText = "The Computer Chose: " + aiChoice;

    //Determine Result
    if ((userChoice == aiChoice)){
        ties++;
        sessionStorage.setItem("ties", ties);
        document.getElementById('result').innerText = "Result: It's a draw!";
        document.getElementById('ties').innerText = "Ties: " + sessionStorage.getItem("ties");
    }
    else if ((userChoice == 'rock' & aiChoice == 'scissors') || (userChoice == 'paper' & aiChoice == 'rock') || (userChoice == 'scissors' & aiChoice == 'paper')){
        wins++;
        sessionStorage.setItem("wins", wins);
        document.getElementById('result').innerText = 'Result: You win!';
        document.getElementById('wins').innerText = "Wins: " + sessionStorage.getItem("wins");
    }
    else {
        losses++;
        sessionStorage.setItem("losses", losses);
        document.getElementById('result').innerText = 'Result: You lose!';
        document.getElementById('losses').innerText = "Losses: " + sessionStorage.getItem("losses");
    }
}

function resetRecord(){
    sessionStorage.setItem("wins", 0);
    sessionStorage.setItem("losses", 0);
    sessionStorage.setItem("ties", 0);
    document.getElementById('userChoice').innerText = "You Chose: -";
    document.getElementById('aiChoice').innerText = "The Computer Chose: -";
    document.getElementById('result').innerText = "Result: -";
    document.getElementById('ties').innerText = "Ties: " + sessionStorage.getItem("ties");
    document.getElementById('wins').innerText = "Wins: " + sessionStorage.getItem("wins");
    document.getElementById('losses').innerText = "Losses: " + sessionStorage.getItem("losses");
}

