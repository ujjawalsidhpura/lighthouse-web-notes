const num = parseInt(process.argv.slice(2));

const diceRoller = function (num) {

  let output = ''

  for (let i = 1; i <= num; i++) {
    output += rollADie() + ',';
  }

  return `Rolled ${num} dice: ${output}`;
}

const rollADie = function () {
  return Math.floor(Math.random() * 6) + 1;
}

console.log(diceRoller(num));