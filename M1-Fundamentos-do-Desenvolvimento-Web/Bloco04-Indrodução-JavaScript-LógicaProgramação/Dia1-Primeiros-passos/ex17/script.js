// Calculate salary -----------------------------------------------
const grossSalary = 10000;
let netSalary;
let result;

// Calc INSS
if (grossSalary <= 1556.94) {
  netSalary = grossSalary - grossSalary * 0.8;
} else if (grossSalary >= 1556.95 && grossSalary <= 2594.92) {
  netSalary = grossSalary - grossSalary * 0.9;
} else if (grossSalary >= 2594.93 && grossSalary <= 5189.82) {
  netSalary = grossSalary - grossSalary * 0.11;
} else {
  netSalary = grossSalary - 570.88;
}

// Calc IR and DEDUCTION
if (netSalary <= 1903.98) {
  result = netSalary;
} else if (netSalary >= 1903.99 && netSalary <= 2826.65) {
  result = netSalary - (netSalary * 0.075 - 142.8);
} else if (netSalary >= 2826.66 && netSalary <= 3751.05) {
  result = netSalary - (netSalary * 0.15 - 354.8);
} else if (netSalary >= 3751.06 && netSalary <= 4664.68) {
  result = netSalary - (netSalary * 0.225 - 636.13);
} else {
  result = netSalary - (netSalary * 0.275 - 869.36);
}

console.log(result);