/*require => string pass karte hai aur wo string ek module ka naam hota hai
*/


//require("./greet.js")  //output: hello 74

const abc = require("./greet2.js");

//abc();    // //module.exports = greet2; //directly function aya

abc.greet2(); //isme object(key-value pairs) aya


/*
const abc = require("./greet2.js");
abc.greet2(); //isme abc object aya aur greet2() uska value

ya toh yeh karlo ⬇⬇⬇⬇⬇⬇   same hi hai
 
const abc = require("./greet2.js").greet2;
abc(7,4);


*/

console.log("Subtraction is "+abc.sub(10, 5));
