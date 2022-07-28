/* const numbers = [2, 3, 4, 5];

const novoArray = [...numbers, 9];

console.log(novoArray);

// -------------------------------------
const numeros = [1, 2, 3];

const newArray = [...numeros, 4, 5, 6];
console.log(newArray);
console.log(numeros);
// -------------------------------------
const spring = ['OUT', 'NOV', 'DEZ'];
const summer = ['JAN', 'FEV', 'MAR'];
const fall = ['ABR', 'MAI', 'JUN'];
const winter = ['JUL', 'AGO', 'SET'];

const months = [...summer, ...fall, ...winter, ...spring];
console.log(months); 
// ------------------------------------
const imc = (peso, altura) => (peso / (altura * altura)).toFixed(2);
const patientInfo = [60, 1.7];

console.log(imc(...patientInfo));
// -----------------------------------
const randomNumbers = [57, 8, 5, 800, 152, 74, 630, 98, 40];

console.log(Math.max(...randomNumbers));
console.log(Math.min(...randomNumbers)); */
// ----------------------------------- 
const specialFruit = ['Banana', 'Manga', 'Maça', 'Laranja'];
const additionalItens = ['Aveia', 'Ovos', 'Soja', 'Whey'];

const sheikMonster = (fruit, additional) => {
  return [...fruit,...additional];
  // return (`Receita da minha vitamina: ${fruit} ${additional}`);
};
console.log(sheikMonster(specialFruit, additionalItens));

