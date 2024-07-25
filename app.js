const http = require("http");
const puerto = 5000;


const server = http.createServer((req, res) => {
    res.end('/index.html');
   // res.redirect('your/404/path.html');

});

server.listen(puerto, () => {
    console.log('Servidor APP escuchando en puerto: '  + puerto);
});

