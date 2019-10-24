function gameOn(choice = 1) {
  let feedback = ``;
  let computerChoice = Math.floor(Math.random() * 3 + 1);
  if (computerChoice === choice) {
    feedback = `it's a tie! you both chose ${choice}`;
  } else if (computerChoice == choice + 1) {
    feedback = `${choice} vs ${computerChoice} computer wins`;
  } else if (choice == computerChoice + 1) {
    feedback = `${choice} vs ${computerChoice} player wins`;
  } else if (choice == 1 && computerChoice == 3) {
    feedback = `${choice} vs ${computerChoice} player wins`;
  } else if (choice == 3 && computerChoice == 1) {
    feedback = `${choice} vs ${computerChoice} computer wins`;
  } else {
    feedback = `${choice} vs ${computerChoice}`;
  }
  feedback = feedback.replace(1, "rock");
  feedback = feedback.replace(2, "paper");
  feedback = feedback.replace(3, "scissors");
  document.getElementById("result").innerHTML = feedback;
}
