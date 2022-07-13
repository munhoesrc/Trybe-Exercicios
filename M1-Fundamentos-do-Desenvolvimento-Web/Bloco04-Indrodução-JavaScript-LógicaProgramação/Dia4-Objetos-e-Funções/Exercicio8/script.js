function getSmallestNumberIndex(numbers) {
    let smallestNumber = numbers[0];
    let smallestNumberIndex = 0;
  
    for (let key in numbers) {
      if (numbers[key] < smallestNumber) {
        smallestNumberIndex = key;
      }
    }
  
    console.log(smallestNumberIndex);
  }
  
  getSmallestNumberIndex([2, 4, 6, 7, 10, 0, -3]);