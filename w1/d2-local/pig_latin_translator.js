var originalWords = process.argv.slice(2);
var pigLatinWords = [];

for (var i = 0; i < originalWords.length; i++) {
  pigLatinWords.push(translateToPigLatin(originalWords[i]));
}
// Index of an array starts from 0 and not 1

console.log(pigLatinWords.join(' '));

function translateToPigLatin(word) {
  return word.slice(2, word.length) + word[0] + "ay";
}