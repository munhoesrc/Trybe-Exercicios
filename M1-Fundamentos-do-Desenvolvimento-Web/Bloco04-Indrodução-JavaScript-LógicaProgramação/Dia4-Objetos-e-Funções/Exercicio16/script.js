let moradores = {
  blocoUm: [
    {
      nome: "Luiza",
      sobrenome: "Guimarães",
      andar: 10,
      apartamento: 1005,
    },
    {
      nome: "William",
      sobrenome: "Albuquerque",
      andar: 5,
      apartamento: 502,
    },
  ],
  blocoDois: [
    {
      nome: "Murilo",
      sobrenome: "Ferraz",
      andar: 8,
      apartamento: 804,
    },
    {
      nome: "Zoey",
      sobrenome: "Brooks",
      andar: 1,
      apartamento: 101,
    },
  ],
};

const morador = moradores.blocoDois[1];

console.log(
  `O morador do bloco 2 de nome ${morador.nome} ${morador.sobrenome} mora no ${morador.andar}° andar, apartamento ${morador.apartamento}.`
);

console.log("---");

for (let bloco in moradores) {
  for (let morador of moradores[bloco]) {
    console.log(`${bloco}: ${morador.nome} ${morador.sobrenome}`);
  }
}
