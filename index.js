const http = require('http');

const PORT = process.env.PORT || 8080;

const server = http.createServer ((req, res) => {
                             res.statusCode = 200;

                             res.setHeader('Content-Type', 'text/plain');
                             res.end('JELO BORD IM IN KUBERNETES :)!\n');

});

server.listen(PORT, () => {
console.log(`Servidor corriendo en http://localhost:${PORT}/`);
});