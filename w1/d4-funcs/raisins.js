const raisinAlarmArray = function (cookies) {
  let output = [];
  for (let cookieArr of cookies) {
    output.push(raisinAlarm(cookieArr));
  }
  return output;
};



const raisinAlarm = function (cookie) {

  for (let item of cookie) {
    if (item === '🍇') {
      return 'Raisin Alert'
    }
  }
  return 'All good'

}

console.log(raisinAlarmArray(
  [
    ["🍫", "🍫", "🍇", "🍫"],
    ["🍫", "🍇", "🍫", "🍫", "🍇"],
    ["🍫", "🍫", "🍫"]
  ]
));

