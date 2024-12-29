//npm init -y
//npm i --save-dev krne se package dev dependency me install hoga
//express -->is a pacakge and used to build rest api

// package.json have two types of dependency
//1 devdependency-->development mode -- code bild kiye ja rhe hai ho deploy nhi kiye ho-->localhost pr chalta hai
//2 dependency -->production mode--deploy kr dete hai to domain name milta h to usko hum  production khte hai

//*****Create Server in express */
const express = require("express");

const app = express();

app.get("/home",(req,res)=>{
    // res.send("<h1>Hello I am coming from Katni</h1>");
    const user = {
        name: "Ayush",
        age:21,
        email:"shruti@gmail.com",
        address:"Katni"
    }
    res.send(user);
})

app.get("/api/v1/user/profile",(req,res)=>{
    res.status(200).json({
        success:true,
        user:{
            username:"shruti",
            email:"ayu@gmail.com"
        }
    });
})

app.listen(8000,()=>{
    console.log("Server listen at port 8000");
});



//app.get
//app.post
//app.put
//app.patch
//app.delete
