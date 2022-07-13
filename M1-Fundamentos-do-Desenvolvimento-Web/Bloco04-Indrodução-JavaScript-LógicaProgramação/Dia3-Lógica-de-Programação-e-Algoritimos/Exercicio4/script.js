const array = ["java", "javascript", "python", "html", "css"];
let shortestWord = array[0];
let longestWord = array[0];

for (word of array) {
  word.length > longestWord.length && (longestWord = word);
  word.length < shortestWord.length && (shortestWord = word);
}

console.log("A palavra mais curta é:", shortestWord);
console.log("A palavra mais longa é:", longestWord);