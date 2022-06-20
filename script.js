let computerScore = 0;
let playerScore = 0;  

// Create a function that returns a random number between one and three 
function computerPlay() {
    //Calculates a random number in the range 2
    randomNum = Math.floor(Math.random() * 3)

    // Assign rock, paper and scissors to the three numbers (0 -2)
    switch (randomNum) {
        case 0:
            // Return a string rock, paper or scissors to the user
            return "rock"
            break;
        case 1: 
            return "paper"
            break
        case 2:
            return "scissors"
            break
    }

}

//Create function that takes in two parameters, one is computer's choice, other is player's choice
function playRound(playerSelection, computerSelection) {

    userMsg = document.querySelector(".user-msg");
    playerScoreMsg = document.querySelector("#player-score");
    computerScoreMsg = document.querySelector("#computer-score");
    message = document.querySelector(".message");
    buttons = document.querySelector(".buttons");

    userMsg = document.querySelector(".user-msg");

    //Use new function to compare choices
    result = compare(playerSelection, computerSelection);

    //Capitalize first alphabets for better readability
    playerSelection = capitalize(playerSelection);
    computerSelection = capitalize(computerSelection);

    //Return winner 
    if (result === "winner") {

        //Use new function capitalize() to make first letter capital
        userMsg.textContent = `You Win! ${playerSelection} beats ${computerSelection}`;
        playerScore++
        playerScoreMsg.textContent = `Player Score: ${playerScore}`;
    }
    else {

        //Check for a draw
        if (playerSelection === computerSelection) {
            userMsg.textContent = `Draw! ${playerSelection} nullifies ${computerSelection}`
        }

        else {
            userMsg.textContent = `You Lose! ${computerSelection} beats ${playerSelection}`
            computerScore++
            computerScoreMsg.textContent = `Computer Score: ${computerScore}`;
        }
    }

    //Check who won 
    if (computerScore >= 5) {
        message.innerHTML = '';
        buttons.innerHTML = '';
        message.textContent = "DEFEAT! You Lost! Better luck next time.";
    }

    //Check for win
    else if (playerScore >= 5) {
        message.innerHTML = '';
        buttons.innerHTML = '';
        message.textContent = "VICTORY! Congratulations! You managed to defeat the computer.";
    }
}

//Create helper function compare
function compare(player, computer) {

    //set flag as zero, changes if player wins
    let flag = 0

    //Every possible victory
    if ((player === "rock" && computer === "scissors") 
        || (player === "paper" && computer === "rock")
        || (player === "scissors" && computer === "paper"))
    {
        flag = 1
    }
    
    //Return winner only if player won
    if (flag === 1) {
        return "winner"
    }

    return "loser or draw"
}

//Create helper function capitalize 
function capitalize(string) {
    return string.charAt(0).toUpperCase() + string.slice(1, string.length).toLowerCase()
}


const selectionBtns = document.querySelectorAll(".selectionBtn");

selectionBtns.forEach(btn => {
    btn.addEventListener("click", e =>{
        playRound(e.target.id, computerPlay())
    });
});

