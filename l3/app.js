const obj = require("./greet")  //// by default index.js le lia
////const obj=require("./greet/index.js")

const { maiHindi, maiAngrezi } = require("./greet")

obj.maiHindi();
obj.maiAngrezi();

maiHindi();
maiAngrezi();



/**
 Destructuring Assignment  {  }
is used to destructure objects, extracting specific properties into variables.

"In destructuring, we extract the keys of an object, and those keys give us the corresponding values from the object."


const person = { name: "Alice", age: 25, city: "New York" };

// Destructuring
const { name, age } = person;

// Explanation:
// 'name' retrieves the value of the key 'name' from the object (i.e., "Alice").
// 'age' retrieves the value of the key 'age' from the object (i.e., 25).

console.log(name); // Output: Alice
console.log(age);  // Output: 25


Key Point
If the name of the variable matches the name of the key in the object, destructuring automatically assigns the value of that key to the variable.

If you want to rename the variable, you can do so using the syntax
 key: newVariable 

const { name: firstName } = person;

// 'firstName' is now a variable holding the value of 'person.name' (i.e., "Alice").

console.log(firstName); // Output: Alice
 */

