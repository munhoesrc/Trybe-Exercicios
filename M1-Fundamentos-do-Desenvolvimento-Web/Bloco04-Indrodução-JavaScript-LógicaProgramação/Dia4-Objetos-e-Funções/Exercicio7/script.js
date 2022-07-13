function getHighestNumber(numbers) {
    let highestNumberIndex = 0;
    let highestNumber = 0;
  
    for (let i in numbers) {
      if (numbers[i] > highestNumber) {
        highestNumber = numbers[i];
        highestNumberIndex = i;
      }
    }
  
    console.log(highestNumberIndex);
  }
  
  getHighestNumber([2, 3, 6, 7, 10, 1]);