
/*

const abc= require("./greet.js")

abc.practice();
*/

/*
⬆⬆⬆⬆⬆⬆ upar 'abc' mai object aya
 fir 'abc' object se hamne practice key ko call kia joki mujhe pract() value dega
*/

//// ⬆⬆⬆⬆⬆⬆⬆⬆⬆  upar wala code   ⬇⬇⬇⬇⬇⬇  aur niche wala same hi hai


/*
const abc= require("./greet.js").practice;

abc();
*/




////-----------------------------------------------------------------
//// Objects in javascript

/*
const obj = {
    name: "AYuSH",
    number: 74,
    // Method shorthand
    greet() {
        return "Hello, World!";
    },
    // Using a function expression
    farewell: function() {
        return "Goodbye!";
    }
};

console.log(obj.name+" "+obj.number+" "+obj.greet() + " " + obj.farewell());
 // AYuSH 74 Hello World! Goodbye!
*/



/*
In JavaScript, when the key and the variable name are the same, you can use shorthand property names to define the object. This is common in ES6+.

Example with Shorthand Property Names

const name = "AYuSH";
const number = 74;

const obj = { name, number }; // Shorthand property names

console.log(obj);
// Output: { name: 'AYuSH', number: 74 }

Here: name and number are variables.

Using { name, number } automatically creates an object where the keys are the same as the variable names, and their values are the corresponding variable values.
Equivalent Longhand Syntax
Without shorthand, you would explicitly define the keys and values like this:


const name = "AYuSH";
const number = 74;

const obj = { name: name, number: number };

console.log(obj);
// Output: { name: 'AYuSH', number: 74 }

Another Example with Methods
You can also use shorthand syntax for methods.

const obj = {
    greet() {
        console.log("Hello, World!");
    }
};

obj.greet(); // Output: Hello, World!
This is equivalent to:


const obj = {
    greet: function () {
        console.log("Hello, World!");
    }
};

obj.greet(); // Output: Hello, World!
Shorthand syntax is a cleaner and more modern way to define objects when the keys and variable names are the same.

*/













const names = "AYuSH";
const number = 74;

const obj = { names, number }; // Shorthand property names

console.log(names);