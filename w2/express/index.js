const express = require('express');
const app = express();

app.listen(3000, () => {
  console.log('Server Running....');
});

app.get('/', (req, res) => {
  res.send('Hello Ujjawal');
});

app.get('/parks', (req, res) => {
  res.send('The parks you have been')
})

