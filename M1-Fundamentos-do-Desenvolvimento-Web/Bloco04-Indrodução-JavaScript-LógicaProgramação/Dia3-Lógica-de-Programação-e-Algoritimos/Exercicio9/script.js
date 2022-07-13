const number = 5;
const midOfRow = (number + 1) / 2;
let controlLeft = midOfRow;
let controlRight = midOfRow;

for (let rowIndex = 0; rowIndex <= midOfRow; rowIndex += 1) {
  let rowContent = "";

  for (let columnIndex = 0; columnIndex <= number; columnIndex += 1) {
    if (columnIndex > controlLeft && columnIndex < controlRight) {
      rowContent += "*";
    } else {
      rowContent += " ";
    }
  }

  console.log(rowContent);
  controlLeft -= 1;
  controlRight += 1;
}