//*****Create Server in express */
//const express = require("express");

/*agar chahte ho upar wala tarika na use karke import wala use kare toh
        add  ==>> "type":"module",    this line in package.json  */


/** 
 abhi run karne ke lie ham likh rahe "node app.js" ya "nodemon app.js"
 agar mai chahta hu ki khud ka command banau ex- "npm run dev" toh
 aap package.json mai  add karo
  "scripts": {
   "1627": "nodemon app.js"
 }
 */

import express from "express";
import dotenv from "dotenv";  // .env file ke liye
import bodyParser from "body-parser"
import userRoute from "./routes/user.js";

dotenv.config(); // iss line ko upar rakho
const app = express();

const PORT = process.env.PORT || 3000;

//client side se server side jab data bhej rahe hai toh ek middleware use karna padega i.e bodyParser  . Middleware client-server ke beech mai hota hai
// middleware use karne ke lie use() function use hota hai

//middleware
app.use(bodyParser.urlencoded({ extended: true }));
app.use(express.json());
app.use("/api/v1/user", userRoute); // /api/v1/user/register ; /api/v1/user/login

app.listen(PORT, () => {
    console.log(`Server listen at port ${PORT}`);
});