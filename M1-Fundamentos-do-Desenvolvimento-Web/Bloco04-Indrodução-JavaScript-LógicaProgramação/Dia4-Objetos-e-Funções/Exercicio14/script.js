const vector = [
    [1, 2],
    [3, 4, 5, 6],
    [7, 8, 9, 10],
  ];
  
  function arrayOfNumbers(vector) {
    let evenNumbers = [];
  
    for (let arrays of vector) {
      for (let number of arrays) {
        if (number % 2 === 0) evenNumbers.push(number);
      }
    }
  
    console.log(evenNumbers);
  }
  
  arrayOfNumbers(vector);