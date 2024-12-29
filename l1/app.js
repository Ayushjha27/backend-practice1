// function statement

function greet() {
    console.log("greet.");
}
greet();

// function are first class (matlab ek function ke andar as a argument dusra function)

function namaste(fn) {
    fn();
}
namaste(greet);


// function expression = (function ko ek variable mai assign karna)
const fn = function () {
    console.log("hey i am function expression assigned in a variable");
}
fn();

// use function expression directly without assigning in a variable
namaste(function () {
    console.log("hey i am function expression not assigned in a variable");
})

// Arrow function
const fun = () => {
    console.log("Hey, I am an arrow function assigned to a variable!");
};
fun();


