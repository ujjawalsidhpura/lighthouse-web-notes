const nameInverter = function (name) {
  if (name === '') {
    return '';
  }

  const namesArr = name.trim().split(' ');
  const len = namesArr.length;
  const honorific = ['Dr.', 'Mrs.', 'Mr.', 'Ms.'];


  if (honorific.includes(name) && len < 2) {
    return '';
  }

  if (len >= 1) {
    if (len === 2) {
      if (honorific.includes(namesArr[0])) {
        return `${namesArr[0]} ${namesArr[1]}`
      } else {
        return `${namesArr[1]}, ${namesArr[0]}`
      }
    } else if (len === 3) {
      return `${namesArr[0]} ${namesArr[2]}, ${namesArr[1]}`
    }
    return name.trim();
  }
}

module.exports = nameInverter;


