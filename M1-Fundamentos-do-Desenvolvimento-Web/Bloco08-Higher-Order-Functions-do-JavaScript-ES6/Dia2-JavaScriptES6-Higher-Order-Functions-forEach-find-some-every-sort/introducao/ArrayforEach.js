const emailListInData = [
  'roberta@email.com',
  'paulo@email.com',
  'anaroberta@email.com',
  'fabiano@email.com',
];

const showEmailList = (email) => {
  console.log(`Email para ${email} foi enviado com sucesso!`);
};

// Adicione seu código aqui
emailListInData.forEach((item, posicao, array) => {
  showEmailList(item);
  console.log(`Sua posição é a de: ${posicao}`);
  console.log(`A quantidade de pessoas no processo seletivo é de: ${array.length}`);
})