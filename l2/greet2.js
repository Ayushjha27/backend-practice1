/*
module ek piece of code hota hai ; aur aap uss piece of code (i.e module) ko
kisi doosri file mai use kar skte ho
*/


function greet2() {
    console.log("hello");
}

//module.exports = greet2; // directly function bhej rahe

/*
agar humne isme kuch assign nhi kia toh;module.exports empty object return krega

module.exports = greet2 isme ham directly function bhej rahe
module.exports = { greet2 } isme ham object(key-value pairs) bhej rahe


*/

function sub(a, b) {

    const res = a > b ? a - b : b - a;
    return res;
}

module.exports = { greet2, sub } //isme ham object(key-value pairs) bhej rahe
