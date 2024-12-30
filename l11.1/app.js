//create server
import express from "express";
import dotenv from "dotenv";
import bodyParser from "body-parser";
dotenv.config();
//jb hum package.json me "type":"module " krte hai to import export hum use kr skte hai
const app = express();
const PORT = process.env.PORT || 3000;
//middleware
app.use(express.json());
//use keyword ke ander hum koi bhi middleware dal skte hai
//bosy-parser-->clint side se server side me data bhejne ke liye 
app.use(bodyParser.urlencoded({
    extended:true
}))

app.post("/api/v1/user/register",(req,res) =>{
    const obj = req.body;
    console.log(obj);
    res.status(200).json({
      success:true,
      message:"Account created successfully"  
    })
})
app.listen(PORT,()=>{
    console.log('server listen at port 8000');
})
