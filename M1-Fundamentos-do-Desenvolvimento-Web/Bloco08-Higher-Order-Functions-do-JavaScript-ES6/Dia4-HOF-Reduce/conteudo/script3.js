const numbers = [18, 19, 23, 53, 4, 5, 76, 23, 54];
let verificaPar = (numero) => numero % 2 === 0;
let par = numbers.filter(verificaPar);

const somaDoPares = par.reduce((total, numero) => {
  return (total + numero);
}) 

console.log(par);
console.log('A soma dos pares é',somaDoPares);

