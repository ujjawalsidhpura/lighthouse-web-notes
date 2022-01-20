const http = require("http");
const PORT = 8080;

// a function which handles requests and sends response
// const requestHandler = function (request, response) {
//   response.end(`Requested Path: ${request.url}\nRequest Method: ${request.method}`);
// };

const server = http.createServer((request, response) => {
  if (request.url === '/') {
    response.end('Welcome');
  } else if (request.url === '/urls') {
    response.end('www.lighthouselabs.ca\nwww.google.com')
  } else {
    // response.end(`Requested Path: ${request.url}\nRequest Method: ${request.method}`)
    response.statusCode = 404;
    response.end('404 Error. Page not found')
  }
});

server.listen(PORT, () => {
  console.log(`Server listening on: http://localhost:${PORT}`);
});
