//*****Create Server in express */
const express = require("express");

const app = express();

//pehle yeh run hoga yaani middleware fir koi route run honge
app.use(function (req, res, next) {

    console.log("middleware is called");
    next();//next ek function hai; it's mandatory to call it to use routes
})

app.get("/", (req, res) => {
    console.log("i am in get");
    res.send("Hello");
})

app.listen(8000, () => {
    console.log("Server listen at port 8000");
});
