/*
module ek piece of code hota hai ; aur aap uss piece of code (i.e module) ko
kisi doosri file mai use kar skte ho
*/

function sum(a, b) {
    return a + b;
}


function greetWithSum(text, a, b, add) {
   const res= add(a, b);
   console.log(text,res);
   
}

greetWithSum("hello ji",7,4,sum);

