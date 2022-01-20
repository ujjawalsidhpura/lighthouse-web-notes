const args = process.argv;
let arr = args.slice(2);
let res = 0;

let sum = function (arr) {
  for (let i of arr) {
    res += parseInt(i);
  }
};

sum(arr);

console.log(res);