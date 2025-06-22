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

    const humanSelection = getHumanChoice();
const computerSelection = getComputerChoice();
 const result=playRound(humanSelection, computerSelection);

console.log(result);
console.log(`Score: You ${humanScore} - ${computerScore} Computer`);

function playGame() {
  let humanScore = 0;
  let computerScore = 0;

  for (let i = 0; i < 5; i++) {
  console.log(`\n roud ${i}`);
    const humanSelection = getHumanChoice();
    const computerSelection = getComputerChoice();
    playRound(humanSelection, computerSelection);
    console.log(`Score: human ${humanScore} - ${computerScore} Computer`);

  }


console.log("\nFinal Score:");
if (humanScore > computerScore) {
    console.log("Congratulations! You win the game!");
  } else if (humanScore < computerScore) {
    console.log("Sorry, you lose the game.");
  } else {
    console.log("It's a tie!");
  }
}
playGame();
