function getNumberThatRepeatsTheMost(numbers) {
    let numberThatRepeatsTheMost = 0;
    let numberOfTimesThatNumberRepeats = 0;
  
    for (let firstNumber of numbers) {
      let counter = 0;
  
      for (let nextNumber of numbers) {
        if (firstNumber === nextNumber) {
          counter += 1;
        }
      }
  
      if (counter > numberOfTimesThatNumberRepeats) {
        numberOfTimesThatNumberRepeats = counter;
        numberThatRepeatsTheMost = firstNumber;
      }
    }
  
    console.log(numberThatRepeatsTheMost);
  }
  
  getNumberThatRepeatsTheMost([2, 3, 2, 5, 8, 2, 3]);