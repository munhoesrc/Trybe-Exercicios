let state = "lista de espera";

switch (state) {
  case "aprovada":
    console.log("Você foi aprovada!");
    break;

  case "lista de espera":
    console.log("Você está na lista de espera.");
    break;

  case "reprovada":
    console.log("Você foi reprovada!");
    break;

  default:
    console.log("Não se aplica.");
}