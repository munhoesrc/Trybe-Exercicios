

const checkLotteryResult = (randomNumber, number) => randomNumber === number;

const getLotteryResult = (number, callback) => {
  const randomNumber = Math.floor(Math.random() * 100);

  if (callback(randomNumber, number)) return 'Parabéns, você ganhou!';
  return 'Tente novamente!';
};

console.log(getLotteryResult(1, checkLotteryResult));