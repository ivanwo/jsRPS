function gameOn(choice = 1) {
  let feedback = ``;
  let computerChoice = Math.floor(Math.random() * 3 + 1);
  if (computerChoice === choice) {
    feedback = `It's a ${choice} Tie!`;
  } else if (computerChoice == choice + 1) {
    feedback = `${choice} vs ${computerChoice} </br></br>DEFEAT`;
  } else if (choice == computerChoice + 1) {
    feedback = `${choice} vs ${computerChoice} </br></br>VICTORY`;
  } else if (choice == 1 && computerChoice == 3) {
    feedback = `${choice} vs ${computerChoice} </br></br>VICTORY`;
  } else if (choice == 3 && computerChoice == 1) {
    feedback = `${choice} vs ${computerChoice} </br></br>DEFEAT!`;
  } else {
    feedback = `${choice} vs ${computerChoice}`;
  }
  feedback = feedback.replace(1, "ROCK");
  feedback = feedback.replace(2, "PAPER");
  feedback = feedback.replace(3, "SCISSORS");

  document.getElementById("result").innerHTML = feedback;
}
