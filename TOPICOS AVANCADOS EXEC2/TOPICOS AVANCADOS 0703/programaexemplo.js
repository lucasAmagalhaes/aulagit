var http = require("http");

var info = require('./aula1403');

http.createServer(function (req, res) {
    res.writeHead(200, { 'Content-Type': 'text/html' });
    res.write("Primeiro nome: "+ info.primeiroNome + " ");
    res.write("Ultimo nome: "+ info.ultimoNome + " ");
    res.write("RGM: "+ info.rgm + " ");
    res.end();
}).listen(8999);




