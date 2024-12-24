const obj = require("./greeting.json")
console.log(obj); //output:  { english: 'english wala', hindi: 'hindi wala' }
// // json file ko require kia , json is converted into object 


function greet() {
    console.log(obj.hindi);
}
module.exports = greet;// single chij paas kar raha

// module.exports={greet,abcdef, age:10};// multiple chij paas kar raha

