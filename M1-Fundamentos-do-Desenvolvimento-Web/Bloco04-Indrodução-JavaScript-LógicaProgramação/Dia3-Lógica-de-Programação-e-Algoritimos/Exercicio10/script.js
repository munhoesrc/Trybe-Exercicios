function createPyramid(number) {
    if (number % 2 === 0) {
      console.log("Número deve ser ímpar");
    } else {
      const midOfRow = (number + 1) / 2;
      let controlLeft = midOfRow;
      let controlRight = midOfRow;
  
      for (let rowIndex = 1; rowIndex <= midOfRow; rowIndex += 1) {
        let rowContent = "";
  
        for (let columnIndex = 1; columnIndex <= number; columnIndex += 1) {
          if (
            columnIndex === controlLeft ||
            columnIndex === controlRight ||
            rowIndex === midOfRow
          ) {
            rowContent += "*";
          } else {
            rowContent += " ";
          }
        }
  
        controlLeft -= 1;
        controlRight += 1;
        console.log(rowContent);
      }
    }
  }
  
  createPyramid(7);