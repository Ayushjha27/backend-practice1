const http = require("http");

//create server
const server = http.createServer((req,res)=>{
    //now we set header of http
    res.writeHead(200,{'Content-Type':'text/plain'});
    res.end("Hello, I am coming from web server.");
})

//server ko listen karenge
server.listen(8000,()=>{
    console.log('Server listen at port 8000');
})