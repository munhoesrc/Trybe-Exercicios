let info = {
    personagem: "Margarida",
    origem: "Pato Donald",
    nota: "Namorada do personagem principal nos quadrinhos do Pato Donald",
  };
  
  function printHello(info) {
    console.log(`Bem-vinda, ${info.personagem}`);
  }
  
  printHello(info);
  
  console.log("---");
  
  info["recorrente"] = "Sim";
  console.log(info);
  
  console.log("---");
  
  for (let key in info) {
    console.log(key);
  }
  
  console.log("---");
  
  for (let key in info) {
    console.log(info[key]);
  }
  
  console.log("---");
  
  let newCharacter = {
    personagem: "Tio Patinhas",
    origem: "Christmas on Bear Mountain, Dell's Four Color Comics #178",
    nota: "O último MacPatinhas",
    recorrente: "Sim",
  };
  
  function printCharacterInfo(info, newCharacter) {
    console.log(`${info.personagem} e ${newCharacter.personagem}`);
    console.log(`${info.origem} e ${newCharacter.origem}`);
    console.log(`${info.nota} e ${newCharacter.nota}`);
  
    if (info.recorrente === newCharacter.recorrente) {
      console.log("Ambos recorrentes");
    }
  }
  
  printCharacterInfo(info, newCharacter);