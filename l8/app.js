const http = require("http");

const server = http.createServer((req,res)=>{
    // console.log(req.url);
    // if(req.url === '/'){

    //     res.writeHead(200,{'Content-Type':'text/plain'})
    //     res.end("Home");
    // }
    // else if(req.url === "/api/user"){
    //     const user = {
    //         name:"Ayush",
    //         age:25,
    //         email:"ayush1627@gmail.com"
    //     }
    //     const data = JSON.stringify(user);
    //     console.log(JSON.parse(data));
    //     res.writeHead(200,{'Content-Type':'application/json'})
    //     res.end(data); //user ek object hai to ise json banane ke liye json.parse(user)
    // }
    // else if(req.url === "/login"){
    //     res.writeHead(200,{'Content-Type':'text/plain'})
    //     res.end("Login successfully");
    // }else if(req.url === "/signup"){
    //     res.writeHead(200,{'Content-Type':'text/plain'})
    //     res.end("Signup successfully");
  
    // }
    // else{
    //     res.writeHead(404,{'Content-Type':'text/html'})
    //     res.end("<h1>Page not found!!</h1>");

    // }

    //****************Http Methods******
    //Get,post,delete,put,patch

    if(req.method === "POST" && req.url === "/submit"){
        let body = "";
        req.on('data',(chunk)=>{
            body = body + chunk.toString(); //convert Buffer to string asscii value data buffer me ata hai to usko hum string me convert kr rhe h
        })

        //End event triggered when all data recieved
        req.on('end',()=>{
            console.log(JSON.parse(body));
            res.writeHead(200,{'Content-Type':'application/json'});
            res.end(JSON.stringify({success:true,message:"Account created successfully"}))
        })
        
    }else{
        res.writeHead(404,{'Content-Type':'application/json'});
        res.end(JSON.stringify({success:false,message:"Please try again"}))

    }

})

server.listen(8000,()=>{
    console.log("Server listen at port 8000");
})