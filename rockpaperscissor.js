console.log("Welcome to Rock, Paper, Scissors!");
console.log("You will play against the computer.");

function getComputerChoice() {
  const randomNumber = Math.floor(Math.random() * 3);

  if (randomNumber===0){
    return "rock";
  }
  if (randomNumber===1){
    return "paper";
  }
  return "scissors";}

  function getHumanChoice(){

  return  prompt("Enter your choice: Rock, Paper, or Scissors").toLowerCase();

  }

  let humanScore=0;
  let computerScore=0;

  function playRound(humanChoice, computerChoice) {
    humanChoice=humanChoice.toLowerCase();
    if (humanChoice === computerChoice) {
      return " You draw";
    } else if (
      (humanChoice === "rock" && computerChoice === "scissors") ||
      (humanChoice === "paper" && computerChoice === "rock") ||
      (humanChoice === "scissors" && computerChoice === "paper")
    ) {
      humanScore++;
      return `You win! ${humanChoice} beats ${computerChoice}.`;
    } else {
      computerScore++;
      return `You lose! ${computerChoice} beats ${humanChoice}.`;
    }
    }

    /*const humanSelection = getHumanChoice();
const computerSelection = getComputerChoice();
 const result=playRound(humanSelection, computerSelection);

console.log(result);
console.log(`Score: You ${humanScore} - ${computerScore} Computer`);*/

function playGame() {


  for (let i = 1; i <=5; i++) {
  console.log(`\n roud ${i}`);
    const humanSelection = getHumanChoice();
    const computerSelection = getComputerChoice();
    playRound(humanSelection, computerSelection);
    console.log(`Score: human ${humanScore} - ${computerScore} Computer`);

  }


console.log("Final Score:");
if (humanScore > computerScore) {
    console.log("Game won");
  } else if (humanScore < computerScore) {
    console.log("Game lost.");
  } else {
    console.log("It's a draw!");
  }
}
playGame();
