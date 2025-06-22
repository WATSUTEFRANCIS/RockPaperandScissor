console.log("Welcome to Rock, Paper, Scissors!");
console.log("You will play against the computer.");

function getComputerChoice() {
  const randomNumber = Math.floor(Math.random() * 3);

  if (randomNumber===0){
    return RemotePlayback;
  }
  if (randomNumber===1){
    return "Paper";
  }
  return "Scissors";}

