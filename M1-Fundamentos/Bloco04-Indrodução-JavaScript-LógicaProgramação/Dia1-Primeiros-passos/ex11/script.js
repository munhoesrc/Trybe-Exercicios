// Checks triagle sides -------------------------------------
const sideA = 1;
const sideB = 2;
const sideC = 3;
const sumOfAllSides = sideA + sideB + sideC;
const isAllSidesPositve = sideA > 0 && sideB > 0 && sideC > 0;

if (isAllSidesPositve) {
  if (sumOfAllSides === 180) {
    console.log(true);
  } else {
    console.log(false);
  }
} else {
  console.log("invalid angle");
}