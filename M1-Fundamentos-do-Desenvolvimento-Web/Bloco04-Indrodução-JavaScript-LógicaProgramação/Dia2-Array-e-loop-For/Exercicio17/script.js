const numbers = [5, 9, 3, 19, 70, 8, 100, 2, 35, 27];

// Descending numbers
let descendingNumbers = numbers;

for (
  let firstIndex = 0;
  firstIndex < descendingNumbers.length;
  firstIndex += 1
) {
  for (let secondIndex = 0; secondIndex < firstIndex; secondIndex += 1) {
    if (descendingNumbers[firstIndex] > descendingNumbers[secondIndex]) {
      const smallestNumber = descendingNumbers[secondIndex];
      const higherNumber = descendingNumbers[firstIndex];

      descendingNumbers[firstIndex] = smallestNumber;
      descendingNumbers[secondIndex] = higherNumber;
    }
  }
}

console.log(descendingNumbers);