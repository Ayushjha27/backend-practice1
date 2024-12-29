//fs module is a core module of nodejs
const fs = require("fs");

//*********readFile --->> Async function hota hai , yaani non-blocking


//console.log("Before Reading...");
// //utf-8 -- Unicode Transformation Format - 8-bit -->UTF-8 (Unicode Transformation Format - 8 bit) is a character encoding widely used to represent text in computers, especially for languages and symbols outside the English alphabet

// fs.readFile("input.txt", 'utf-8',(err,data)=>{
//     if(err) throw err;

//isme phle jb input file read ho jyeegi tb callback function call hota hai agr file puri read nhi hui to callback function call nahi hoga

//     console.log(data);
//     // console.log(__dirname);

// });

//input.txt se jo data read krenge vo data ke ander milega
// console.log("After reading");



//!*****ReadFileSync**********


// console.log("Before Reading...");
// const data = fs.readFileSync("input.txt","utf-8");
// console.log(data); //readFileSync ek result return karta hai
// console.log("After reading");

//ReadFileSync-->>Synchronous/blocking hota hai


//***writeFile********-->purana data remove krke first line se data add krti hai
// fs.writeFile("input.txt","Hello Ladoo ke bhaiya!!",(err)=>{
//     if(err) throw err;
// });

// //****appendFile is used to append or add data from same line in a file */

// fs.appendFile("input.txt","Aap humari baat ku nahi sunte h ladoo ke bhaiya",(err)=>{
//     if(err) throw err;
// })

//******To remove a file use=> unlink

// fs.unlink("input.txt",(err)=>{
//     if(err) throw err;
// })


//Jab file bhut large hoti h to hume readFile nahi use krna chahiye
//We use readStream************* 

// const readStream = fs.createReadStream("input.txt","utf-8");
// console.log(readStream);

//*******To get data from file
/* jab hum data get krte h to hume data chunk me milta hai*/

// readStream.on('data',(chunk)=>{ //on ek event hai
//     console.log(chunk);
// })
// /*data,end ye event hote hai*/
// readStream.on('end',()=>{
//     console.log("reading completed!!");
// })

// const writeStream = fs.createWriteStream("input.txt","utf-8");

// writeStream.write("Welcome to Nodejs Full Course.");

//******Pipe  --->ek file se dusri file me data transfer krna */

/*
const readStream = fs.createReadStream("input.txt");
const writeStream = fs.createWriteStream("output.txt");

//pipe readStream pr kaam krta hai
readStream.pipe(writeStream); //it will create a output a file with same data as input.txt
//readstream se data writestream me jata hai

*/