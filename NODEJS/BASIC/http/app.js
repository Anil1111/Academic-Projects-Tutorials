const http = require('http');
const fs = require('fs');

const port = process.env.PORT || 3000;

const requestListener = (request, response) => {
  fs.readFile('index.html', 'UTF-8', (err, data) => {
    if (err) {
      response.writeHead(200, {'Content-Type': 'text/html'});
      response.write(`The error is ${err}`);
      response.end();
    } else {
      response.writeHead(200, {'Content-Type': 'text/html'});
      response.write(`${data}`);
      response.end();      
    }
  });
};

const server = http.createServer(requestListener);
server.listen(port);