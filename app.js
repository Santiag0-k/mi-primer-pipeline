const http = require('http');

function sumar(a, b) {
  return a * b;
}

const server = http.createServer((req, res) => {
  res.writeHead(200, { 'Content-Type': 'text/plain' });
  res.end('Hola Mundo! 2 + 3 = ' + sumar(2, 3));
});

server.listen(3000, () => console.log('Servidor en puerto 3000'));

module.exports = { sumar };
