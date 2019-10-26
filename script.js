function gameOn(choice = 1) {
  let feedback = ["", ""];
  let computerChoice = Math.floor(Math.random() * 3 + 1);
  if (computerChoice === choice) {
    feedback[0] = `It's a ${choice} Tie!`;
  } else if (computerChoice == choice + 1) {
    feedback[0] = `${choice} vs ${computerChoice}`;
    feedback[1] = `DEFEAT`;
  } else if (choice == computerChoice + 1) {
    feedback[0] = `${choice} vs ${computerChoice}`;
    feedback[1] = `VICTORY`;
  } else if (choice == 1 && computerChoice == 3) {
    feedback[0] = `${choice} vs ${computerChoice}`;
    feedback[1] = `VICTORY`;
  } else if (choice == 3 && computerChoice == 1) {
    feedback[0] = `${choice} vs ${computerChoice}`;
    feedback[1] = `DEFEAT`;
  } else {
    feedback[0] = `${choice} vs ${computerChoice}`;
  }
  feedback[0] = feedback[0].replace(1, "ROCK");
  feedback[0] = feedback[0].replace(2, "PAPER");
  feedback[0] = feedback[0].replace(3, "SCISSORS");

  document.getElementById("res").innerHTML = feedback[0];
  document.getElementById("res2").innerHTML = feedback[1];
  document.getElementById("res").focus();
}
