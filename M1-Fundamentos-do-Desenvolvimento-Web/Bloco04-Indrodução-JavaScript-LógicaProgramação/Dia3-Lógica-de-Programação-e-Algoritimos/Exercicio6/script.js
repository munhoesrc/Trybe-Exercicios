const number = 10;

for (let i = 0; i < number; i += 1) {
  let line = "";

  for (let j = 0; j < number; j += 1) {
    line += "*";
  }

  console.log(line);
}