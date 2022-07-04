// Score ----------------------------------------------------
const scorePercentage = -10;
let scoreLetter = "";
let message = "";

if (scorePercentage >= 90) {
  scoreLetter = "A";
} else if (scorePercentage >= 80) {
  scoreLetter = "B";
} else if (scorePercentage >= 70) {
  scoreLetter = "C";
} else if (scorePercentage >= 60) {
  scoreLetter = "D";
} else if (scorePercentage >= 50) {
  scoreLetter = "E";
} else if (scorePercentage < 50) {
  scoreLetter = "F";
}

if (scorePercentage < 0 || scorePercentage > 100) {
  message = "Invalid score.";
} else {
  message = `Your score is: ${scoreLetter}!`;
}

console.log(message);