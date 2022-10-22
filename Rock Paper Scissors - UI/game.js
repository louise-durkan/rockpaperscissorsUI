var computerSelection;
var playerMove;
var playerSelection;
var computerScore = 0;
var playerScore = 0;
var computerVar;
var results = document.getElementById("results");
var winLose = document.getElementById("winLose");
var score = document.getElementById("score");
var myGo = document.getElementById("myMove");
var computerGo = document.getElementById("computerMove");

function computerPlay() {
  var selections = ["rock", "paper", "scissors"];
  computerSelection = selections[Math.floor(Math.random() * selections.length)];
}

function playRound(playerSelection, computerSelection) {
  myGo.innerHTML = "Your move: " + playerSelection;
  computerGo.innerHTML = "Computer move: " + computerSelection;

  if (playerSelection === "rock" && computerSelection === "rock" || playerSelection === "paper" && computerSelection === "paper"
  || playerSelection === "scissors" && computerSelection === "scissors") {
    results.innerHTML = "It's a draw, go again!";
  } else if (playerSelection === "rock" && computerSelection === "paper") {
    results.innerHTML = "You lose! Paper beats rock!";
    computerScore = computerScore + 1;
    return computerScore;
  } else if (playerSelection === "rock" && computerSelection === "scissors") {
    results.innerHTML = "You win! Rock beats scissors!";
    playerScore = playerScore + 1;
    return playerScore;
  } else if (playerSelection === "paper" && computerSelection === "rock") {
    results.innerHTML = "You win! Paper beats rock!";
    playerScore = playerScore + 1;
    return playerScore;

  } else if (playerSelection === "paper" && computerSelection === "scissors") {
    results.innerHTML = "You lose! Scissors beats paper!";
    computerScore = computerScore + 1;
    return computerScore;
  } else if (playerSelection === "scissors" && computerSelection === "paper") {
    results.innerHTML = "You win! Scissors beats paper!";
    playerScore = playerScore + 1;
    return playerScore;

  } else if (playerSelection === "scissors" && computerSelection === "rock") {
    results.innerHTML = "You lose! Rock beats scissors!";
    computerScore = computerScore + 1;
    return computerScore;

  } else {
    console.log("ERROR 2");
  }

}

function defineMove(playerMove) {
  computerPlay();
  playRound(playerMove, computerSelection);
  score.innerHTML = "Your score is: " + playerScore + ". Computer score is: " + computerScore;
  if (playerScore === 5 && computerScore < 5) {
    winLose.innerHTML = "You win!";
  } else if (computerScore === 5 && playerScore < 5) {
    winLose.innerHTML = "You lose!";
  } else if (computerScore === 5 && playerScore == 5) {
    winLose.innerHTML = "Draw!";
  }
}
