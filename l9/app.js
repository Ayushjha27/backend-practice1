const http = require("http");

const fs = require("fs");
const path = require("path"); //path module of nodejs

const server = http.createServer((req,res)=>{
    res.writeHead(200,{'Content-Type':"text/html"});
   
    // const filePath = __dirname+"/index.html" //__dirname means current working directory
//     console.log(filePath);
//     res.end(filePath);//res index.html ko bhejna h
 const dirPath = path.join(__dirname,"index.html");
//  const htmlContent = fs.readFileSync(filePath);
 const htmlContent = fs.readFileSync(dirPath);

 res.end(htmlContent);
});


server.listen(3000);