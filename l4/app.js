const greet1 = require("./greet1");
const greet2 =require("./greet2");
greet1();
// greet2(); // greet 2 ko direct call krne pr error aygi

console.log(greet2);
//greet2 ek object hoga jiske ander key hogi EatTogether and value hogi function

greet2.EatTogether();