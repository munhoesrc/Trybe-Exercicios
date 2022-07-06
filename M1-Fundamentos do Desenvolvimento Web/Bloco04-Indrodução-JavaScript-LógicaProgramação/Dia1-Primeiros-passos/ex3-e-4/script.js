//exercicio 3
const score = 59;

if (score >= 80) {
  console.log("Parabéns, você foi aprovada(o)");
} else if (score < 80 && score >= 60) {
  console.log("Você está na nossa lista de espera.");
} else {
  console.log("Você foi reprovado!");
}

//exercicio 4
const currentHour = 19;
let message = "";

if (currentHour >= 22) {
  message = "Não deveríamos comer nada, é hora de dormir";
} else if (currentHour >= 18 && currentHour < 22) {
  message = "Rango da noite, vamos jantar :D";
} else if (currentHour >= 14 && currentHour < 18) {
  message = "Vamos fazer um bolo pro café da tarde?";
} else if (currentHour >= 11 && currentHour <= 14) {
  message = "Hora do almoço!!!";
} else if (currentHour >= 4 && currentHour <= 11) {
  message = "Hmmm, cheiro de café recém passado";
}

console.log(message);