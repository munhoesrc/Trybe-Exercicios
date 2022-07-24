const getScore = (correctAnswers, studentAnswers) => {
  let score = 0;

  correctAnswers.forEach((answer, index) => {
    if (studentAnswers[index] === 'N.A') return;
    if (answer === studentAnswers[index]) score += 1;
    if (answer !== studentAnswers[index]) score -= 0.5;
  });

  return score;
};

const checkAnswers = (correctAnswers, studentAnswers, callback) => {
  return callback(correctAnswers, studentAnswers);
};

const RIGHT_ANSWERS = ['A', 'C', 'B', 'D', 'A', 'A', 'D', 'A', 'D', 'C'];
const STUDENT_ANSWERS = ['A', 'N.A', 'B', 'D', 'A', 'C', 'N.A', 'A', 'D', 'B'];

console.log(checkAnswers(RIGHT_ANSWERS, STUDENT_ANSWERS, getScore));