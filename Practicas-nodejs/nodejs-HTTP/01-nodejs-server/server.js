//Servidor HTTP en node
// const puerto = process.env.PORT || 3001;
const puerto = 8888;

var http = require('http');

const server = http.createServer(function (req, res) {
    res.writeHead(200, {
        'Content-Type': 'text/plain; charset=utf-8'
    });

    res.end(`Hola. Esta es mi página de prueba en el puerto ${puerto}`);
});
server.listen(puerto);
console.log(`Server running at http://localhost:${puerto}/`);
