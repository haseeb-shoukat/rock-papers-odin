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

    //Convert player's choice to lowercase to make it case insensitive
    playerSelection = playerSelection.toLowerCase()

    //Use new function to compare choices
    result = compare(playerSelection, computerSelection)

    //Capitalize first alphabets for better readability
    playerSelection = capitalize(playerSelection)
    computerSelection = capitalize(computerSelection)

    //Return winner 
    if (result === "winner") {

        //Use new function capitalize() to make first letter capital
        return `You Win! ${playerSelection} beats ${computerSelection}`
    }
    else {

        //Check for a draw
        if (playerSelection === computerSelection) {
            return `Draw! ${playerSelection} nullifies ${computerSelection}`
        }

        //If player loses 
        return `You Lose! ${computerSelection} beats ${playerSelection}`
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

//Function game goes on for five games and keeps track of victories and defeats
function game() {

    //Declare starting variables
    let computerScore = 0;
    let playerScore = 0;
    let player = "";
    let computer = "";

    //Give introduction to user
    alert("Welcome to Rock, Paper, Scissors! Play five rounds against computer and see if you can get a victory.")
    
    //Start matches, use loop, 
    for (let i = 1; i < 6; i++) {

        //Get values from both sides
        player = prompt("Enter Rock, Paper or Scissors. Choose your weapon wisely.")
        computer = computerPlay()

        
        //Call playRound() and save result
        roundResult = playRound(player, computer)

        //Display result 
        alert(roundResult)

        //If string has the word win, increment player score by one
        if (roundResult.includes("Win")) {
            playerScore++
        }

        //If string has the word  lose, increment computer score by one
        else if (roundResult.includes("Lose")) {
            computerScore++
        }
    }

            //Check who won or whether it was a draw
            if (playerScore === computerScore) {
                alert("DRAW! A draw is not a bad result. Give it another go.")
            }

            //Check for win
            else if (playerScore > computerScore) {
                alert("VICTORY! Congratulations! You managed to defeat the computer.")
            }
    
            else {
                alert("DEFEAT! You Lost! Better luck next time.")
            }
    
}

