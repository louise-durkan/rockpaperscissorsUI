var computerSelection;
var playerMove;
var playerSelection;
var computerScore =0;
var playerScore= 0;




function computerPlay(min, max) {
  computerSelection = Math.floor(Math.random() * (max - min + 1)) + min;

  switch(computerSelection){
      case 1:
          computerSelection =  "Rock";
          return computerSelection;

          break;
      case 2:
          computerSelection =  "Paper";
          return computerSelection;
          break;
      case 3:
          computerSelection =  "Scissors";
          return computerSelection;
          break;
      default:
        console.log("ERROR 1");
    }

}


function playRound(playerSelection, computerSelection){
document.getElementById("myMove").innerHTML = "Your move: "+ playerSelection;
document.getElementById("computerMove").innerHTML = "Computer move: "+ computerSelection;
document.getElementById("results").innerHTML = "Your move: "+ playerSelection;

    if(playerSelection === "rock" && computerSelection === "Rock" || playerSelection === "paper" && computerSelection === "Paper" || playerSelection === "scissors" && computerSelection === "Scissors" ){
        document.getElementById("results").innerHTML = "It's a draw, go again!";

    }

    else if(playerSelection === "rock" && computerSelection ==="Paper"){
        document.getElementById("results").innerHTML = "You lose! Paper beats rock!";

        computerScore = computerScore + 1;
        return computerScore;

        }
    else if(playerSelection === "rock" && computerSelection ==="Scissors"){
        document.getElementById("results").innerHTML = "You win! Rock beats scissors!";
        playerScore = playerScore + 1;
        return playerScore;

        }
    else if(playerSelection === "paper" && computerSelection ==="Rock"){
        document.getElementById("results").innerHTML =  "You win! Paper beats rock!";
        playerScore = playerScore + 1;
        return playerScore;

        }
    else if(playerSelection === "paper" && computerSelection ==="Scissors"){
        document.getElementById("results").innerHTML = "You lose! Scissors beats paper!";
         computerScore = computerScore + 1;
        return computerScore;

        }
    else if(playerSelection === "scissors" && computerSelection ==="Paper"){
       document.getElementById("results").innerHTML = "You win! Scissors beats paper!";
        playerScore = playerScore + 1;
        return playerScore;

        }
    else if(playerSelection === "scissors" && computerSelection ==="Rock"){
        document.getElementById("results").innerHTML = "You lose! Rock beats scissors!";
        computerScore = computerScore + 1;
        return computerScore;

        }
    else{
        console.log("ERROR 2");
    }
}


function defineMove(playerMove){
computerPlay(1,3);
playRound(playerMove, computerSelection);
document.getElementById("score").innerHTML = "Your Score is " + playerScore  + " " +  "Computer score is " + computerScore;


    if(playerScore == 5 && computerScore < 5){
        document.getElementById("score").innerHTML = "You win!";
    }
    else if(computerScore == 5 && playerScore < 5){
        document.getElementById("score").innerHTML ="You lose!";
    }
    else if (computerScore == 5 && playerScore == 5){
        document.getElementById("score").innerHTML = "Draw!";
    }
}
