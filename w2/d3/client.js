// const net = require('net');

// const conn = net.createConnection({
//   host: 'localhost',
//   port: 3000
// });

// conn.setEncoding('utf8');
// conn.on('data', (data) => {
//   console.log('Server says: ', data);
// });

// conn.on('connect', () => {
//   conn.write('Hello from client!');
// });


//Lecture to connect with teacher

// localhost <--- my address
// port <----- 3001
// localhost <--- my address
// port <----- 3001
// localhost <--- my address
// port <----- 3001
// localhost <--- my address
// port <----- 3001
const net = require('net');
const stdin = process.stdin;
const client = net.createConnection({
  port: 3001,
  host: '135.23.223.133'
}, () => {
  console.log("General Kanobi!")
})
const name = 'uj';

client.setEncoding('utf8');
stdin.setEncoding('utf8');

client.write(`${name} has connected!!!`);

stdin.on('data', (input) => {
  client.write(`${name}: ${input}`)
})

client.on('data', (data) => {
  console.log("DATA CAME IN!!!!!");
  console.log(data);
})