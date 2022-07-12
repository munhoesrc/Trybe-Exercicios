const numbers = [5, 9, 3, 19, 70, 8, 100, 2, 35, 27];

// Multiplying numbers
let multipliedNumbers = [];

for (let firstIndex = 0; firstIndex < numbers.length - 1; firstIndex += 1) {
  multipliedNumbers.push(numbers[firstIndex] * numbers[firstIndex + 1]);
}

console.log(multipliedNumbers);