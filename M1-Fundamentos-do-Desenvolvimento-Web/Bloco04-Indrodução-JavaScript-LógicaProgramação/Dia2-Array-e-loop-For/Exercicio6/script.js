function dice() {
    return Math.ceil(Math.random() * 6);
  }
  
  let d1 = dice();
  let d2 = dice();
  
  console.log(d1, d2);
  
  while (d1 === d2) {
    d2 = dice();
  }