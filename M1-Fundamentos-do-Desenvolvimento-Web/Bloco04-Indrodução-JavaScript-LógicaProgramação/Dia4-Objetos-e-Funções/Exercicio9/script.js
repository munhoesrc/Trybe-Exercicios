function getLongestName(names) {
    let longestName = names[0];
  
    for (let name of names) {
      if (name.length > longestName.length) {
        longestName = name;
      }
    }
  
    console.log(longestName);
  }
  
  getLongestName(["José", "Lucas", "Nádia", "Fernanda", "Cairo", "Joana"]);