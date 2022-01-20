function makeLoadedDie() {
  const list = [5, 4, 6, 1, 6, 4, 2, 3, 3, 5];
  let len = list.length;
  let i = Math.floor(Math.random() * len);
  console.log(list)


  let callBack = function (arr) {
    return arr[i];
  }
  return callBack(list);

}

const rollLoadedDie = makeLoadedDie();

console.log(rollLoadedDie());  // 5
console.log(rollLoadedDie());  // 4
console.log(rollLoadedDie());  // 6
