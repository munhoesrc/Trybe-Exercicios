// Calculate product profit ---------------------------------------
const productCost = 10;
const tax = 0.2;
const productTotalCost = productCost * 0.2 + productCost;
const productSellPrice = 20;
const areNumbersValid = productCost > 0 && productSellPrice > 0;

const profit = productSellPrice - productTotalCost;

console.log(profit);