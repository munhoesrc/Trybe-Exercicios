function getNumber(romanNumberString) {
    const romanNumbers = {
      i: 1,
      v: 5,
      x: 10,
      l: 50,
      c: 100,
      d: 500,
      m: 1000,
    };
  
    romanNumberString = romanNumberString.toLowerCase();
    let decimalNumber = 0;
  
    for (let i = 0; i < romanNumberString.length; i += 2) {
      let currentNumber = romanNumbers[romanNumberString[i]];
      let nextNumber =
        i + 1 < romanNumberString.length
          ? romanNumbers[romanNumberString[i + 1]]
          : 0;
  
      if (currentNumber < nextNumber) {
        decimalNumber += nextNumber - currentNumber;
      } else {
        decimalNumber += nextNumber + currentNumber;
      }
    }
  
    console.log(decimalNumber);
  }
  
  getNumber("MMXVIII");