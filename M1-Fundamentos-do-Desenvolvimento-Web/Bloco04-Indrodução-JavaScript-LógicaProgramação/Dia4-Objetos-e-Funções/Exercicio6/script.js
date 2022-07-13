function checkPalindrome(word) {
    let invertedWord = "";
  
    for (let i = word.length - 1; i >= 0; i -= 1) {
      invertedWord += word[i];
    }
  
    word === invertedWord ? console.log(true) : console.log(false);
  }
  
  checkPalindrome("arara");
  checkPalindrome("vinicius");