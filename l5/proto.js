/* koi object hai or hum chahte h ki us object me kuch properties aa jaye to 
hum uska proto create krke jo property hume use krni h hum kr skte hai */

//ek object create krte hai
let a = {
    name:"Shruti",
    lanuguage:"Hinglish"
}
console.log(a);

let p ={
    run: () =>{
        alert("run")
    }
}

// a.run(); //hum a.run nhi kar skte kuki run function object a ki property nhi h
//run method ko object ki property banne ke liye

a.__proto__= p //object a ka proto p hai
a.run()
/* jab hum koi object banayge or us object ka 

*/

p.__proto__ = {
  name2: "Ayush" 
}
console.log(a.name2); //output ayush aya 
/* yha pr ye ho rha h ki humare pas ek object h or us object ki kuch properties h pr jb hume kuch additional 
properties ko access krna h to vo object uske prototype me search krega yani object ki properties ko hum extend krenge 
"__proto__ "  keyword se let say hume name2 access krna h pr name2 object ki property nhi h to humne a ka proto p banay
or us p me humne object add kiya name2 to  */

/* Chatgpt 
function Person(name) {
  this.name = name;
}

Person.prototype.greet = function() {
  return `Hello, ${this.name}`;
};

const person1 = new Person("Alice");
console.log(person1.greet()); // Outputs: Hello, Alice


prototype
Definition:
The prototype is a property that exists on functions (constructor functions) and is used to define properties and methods that should be shared across all instances created by that function.

Purpose:
It is used to implement shared behaviors for objects created using constructors or classes.

Key Points:

Only functions (including classes) have the prototype property.
When an object is created using a constructor function, the object's internal __proto__ is set to point to the constructor's prototype.
*/
