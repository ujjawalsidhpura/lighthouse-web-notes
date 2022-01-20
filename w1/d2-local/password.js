const input = process.argv.slice(2);

let passwordArr = input[0].split('');

const obfuscate = function (arr) {
  let encoded = [];
  arr.map((e) => {
    if (e === 'a') {
      encoded.push(4);
    } else if (e === 'e') {
      encoded.push(3);
    } else if (e === 'o') {
      encoded.push(0);
    } else if (e === 'l') {
      encoded.push(1);
    } else {
      encoded.push(e);
    }
  })
  return encoded.join('');
}

console.log(obfuscate(passwordArr));