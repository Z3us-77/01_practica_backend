console.log ('hola mundo uwu ;D node');

const http = require('http');

const host = '0.0.0.0';

const port = '3000';

const server = http.createServer((req, res)=>{
    res.statusCode =200;
    res.setHeader =('Content-Type', 'text/plain');
    res.end("Hola mundo UWU OKAS ");

});

server.listen(port, host, () => {
    console.log("server encendido en " + host + "/" + port );
});
