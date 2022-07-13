const number = 5;
let position = number - 1; // 3

for (let indexLine = 0; indexLine < number; indexLine += 1) {
  let line = "";

  for (let indexColumn = 0; indexColumn < number; indexColumn += 1) {
    if (indexColumn >= position) {
      line += "*";
    } else {
      line += " ";
    }
  }

  position -= 1;
  console.log(line);
}