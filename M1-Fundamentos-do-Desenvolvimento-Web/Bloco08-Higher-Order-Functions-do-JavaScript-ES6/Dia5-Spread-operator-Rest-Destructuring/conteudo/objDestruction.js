/* // definindo o objeto
const character = {
  name: "Luke SkyWalker",
  age: "53",
  description: {
    specieName: "Human",
    jedi: true,
  },
  homeWorld: {
    name: "Tatooine",
    population: "200000",
  },
};

// desestruturando o objeto:
const {
  name,
  age,
  homeWorld: { name: planetName },
  description: { jedi },
} = character;

// imprimindo os valores:
console.log(
  `Esse é o ${name}, ele tem ${age} anos, mora no planeta ${planetName} e, por incrível que possa parecer, ele ${
    jedi ? "é um Jedi" : "não é um Jedi"
  }.`
); */
// --------------------------------------------

const user = {
  nome: "Maria",
  age: 21,
  nationality: "Brazilian",
};

const jobInfos = {
  profession: "Software engineer",
  squad: "Rocket Landing Logic",
  squadInitials: "RLL",
};

const dadosUser = {
  ...user,
  ...jobInfos,
};

console.log(dadosUser);
// const dadosUser = (funcionario, dadosFuncionario) => {
//   return {...funcionario, ...dadosFuncionario};
// }
// console.log(dadosUser(user, jobInfos));

const { nome, age, nationality, profession, squad, squadInitials } = dadosUser;

console.log(`Hi, my name is ${nome}, I'm ${age} years old and I'm ${nationality}. I work as a ${profession} and my squad is ${squadInitials}-${squad}`);
