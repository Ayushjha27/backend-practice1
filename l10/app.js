//npm init -y
//npm i --save-dev krne se package dev dependency me install hoga
//express -->is a pacakge and used to build rest api

// package.json have two types of dependency
//1 devdependency-->development mode -- code build kiye ja rhe hai ho deploy nhi kiye ho-->localhost pr chalta hai
//2 dependency -->production mode--deploy kr dete hai to domain name milta h to usko hum  production khte hai

//*****Create Server in express */
const express = require("express");

const app = express();


/* app.get ek route string leta hai aur ek callback function leta hai*/

app.get("/api/v1/user/home", (req, res) => {
    // res.send("<h1>Hello I am coming from Katni</h1>");
    const user = {
        name: "Ayush",
        age: 21,
        email: "shruti@gmail.com",
        address: "Katni"
    }
    res.send(user);
})

app.get("/api/v1/user/about", (req, res) => {
    // res.send("<h1>Hello I am about</h1>");
    const user = {
        name: "shruti",
        age: 23,
        email: "shruti@gmail.com",
        address: "Katni"
    }
    res.send(user);
})

app.get("/api/v1/user/profile", (req, res) => {
    res.status(200).json({
        success: true,
        user: {
            username: "shruti",
            email: "ayu@gmail.com"
        }
    });
})

app.get("/api/v1/product/:kuchBhi", (req, res) => {

    const kuchBhi = req.params.kuchBhi;
    //url se extract kar lia id ko params ke through

    // ⏫⏫⏫⏫ upar wala aur niche wala same ⏬⏬⏬⏬
    //const {kuchBhi} = req.params; // destructuring

    console.log(kuchBhi);

    const product = {
        id: 1,
        name: "Macbook1"
    }

    res.status(200).json({
        success: true,
        product
    });
})


app.get("/api/v1/product/:productId/comments/:commentId", (req, res) => {

    const productId = req.params.productId;
    const commentId = req.params.commentId;
    //url se extract kar lia id ko params ke through

    // ⏫⏫⏫⏫ upar wala aur niche wala same ⏬⏬⏬⏬
    //const {productId,commentId} = req.params; // destructuring

    console.log(productId, commentId);

    const product = {
        id: 1,
        name: "Macbook1"
    }

    res.status(200).json({
        success: true,
        product
    });
})


app.listen(8000, () => {
    console.log("Server listen at port 8000");
});



//app.get
//app.post
//app.put
//app.patch
//app.delete
