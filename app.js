const datetime = require("./date.js");
const http= require("http");


http.createServer(function(req, res){
    res.writeHead(200,{'Content-Type':'text/html'});
    res.end(`La fecha actual es ${datetime.mydatetime()}`);
    res.write()

    
}).listen(8080);