const encrypt = function (str, num) {
  let string = str.split(' ').join(' ').split('');

  let alphabets = 'abcdefghijklmnopqrstuvwxyz';
  let capitalAlphabets = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ';

  let alphabetsArr = alphabets.split('')
  let capitalAlphabetsArr = capitalAlphabets.split('');

  let x;
  let index;
  let newIndex;
  let final = [];

  for (let i = 0; i < string.length; i++) {
    x = string[i];
    if (alphabetsArr.includes(x)) {
      index = alphabetsArr.indexOf(x);
      newIndex = index + num;
      if (newIndex < 0) {
        newIndex += 26;
        final.push(alphabetsArr[newIndex])
      } else if (newIndex < 26) {
        final.push(alphabetsArr[newIndex])
      } else if (newIndex >= 26) {
        newIndex -= 26;
        final.push(alphabetsArr[newIndex])
      }
    } else if (capitalAlphabetsArr.includes(x)) {
      index = capitalAlphabetsArr.indexOf(x);
      newIndex = index + num;
      if (newIndex < 0) {
        newIndex += 26;
        final.push(capitalAlphabetsArr[newIndex])
      } else if (newIndex < 26) {
        final.push(capitalAlphabetsArr[newIndex])
      } else if (newIndex >= 26) {
        newIndex -= 26;
        final.push(capitalAlphabetsArr[newIndex])
      }
    } else {
      final.push(x);
    }
  }

  return final.join('').split(' ').join(' ');
}

module.exports = encrypt;
