const http = require('http');

function sumar(a, b) {
  return a + b;
}

const server = http.createServer((req, res) => {
  res.writeHead(200, { 'Content-Type': 'text/plain' });
  res.end('Hola Arquitectos! 2 + 3 = ' + sumar(2, 3));
});

const PORT = process.env.PORT || 3000;
server.listen(PORT, () => console.log('Servidor en puerto ' + PORT));

module.exports = { sumar };
