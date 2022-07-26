const numbers = [50, 85, -30, 3, 15];

const getBigger = (bigger, number) => ((bigger > number) ? bigger : number);

const bigger = numbers.reduce(getBigger, 0);
console.log(bigger); 

/* const numeros = [52, 80, 30, 4, 16];
let maiorNumero = 0;
for (let index = 0; index < numeros.length; index += 1) {
    if (numeros[index] > maiorNumero){
      maiorNumero = numeros[index];
    }
}
console.log(maiorNumero); */

const numeros = [52, 80, 30, 4, 16];
let maiorNumero = Math.max(...numeros);
console.log(maiorNumero);