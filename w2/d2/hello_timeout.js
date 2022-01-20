const message = 'Hello'

const greeting = function () {
  console.log('Helleo')
}

setTimeout(() => {
  console.log('Hello')
  setTimeout(() => {
    console.log('Second Hello')
    setTimeout(() => {
      console.log('Third Hello')
    }, 1000)
  }, 1000)
}, 1000);