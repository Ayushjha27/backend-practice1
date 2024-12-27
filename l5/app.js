//event -> Something happened is called event 
//Event Listener -> event ko listen krke response ko return krne ka kaam event listener la hota h yani event ne kya kaam kiya h uska response event listner return krta hai


// const Emitter = require("./emitter");-->custom event
const Emitter = require("events"); //event core nodejs module by default present in nodejs
const events = require("./config").events;
// console.log(events); //Output events: { GREET: 'greet', FILESAVED: 'filesaved', FILEOPEN: 'fileopen' }

//bad practice--kuki greet bar bar likha h agr hume change krna hoga to hume har jhga change krna hoga jha jha greet h to isse bachne ke liye hum ek naya module create krenge jisse apne app changes reflect ho jaye sab jhga ek jhga change krne par
const emitr = new Emitter();//object created
// console.log(emitr); // Output:--Emitter { events: {} }
//on is used to add a callback function
// emitr.on("greet",function(){
//     console.log("Hello");
// });

// emitr.on("greet",function(){
//     console.log("greet occured!");
// });//added 2 event listner

// emitr.on("my-age",function(){
//     console.log("I am 23 year old");
// })
// emitr.emit("greet"); //Output Hello greet occured
// emitr.emit("my-age");


emitr.on(events.GREET,function(){
    console.log("74 love");
});

emitr.on(events.GREET,function(){
    console.log("1627 love");
});
emitr.on(events.FILEOPEN,function(){
    console.log("file open of our story!");
});//added

emitr.emit(events.GREET)
emitr.emit(events.FILEOPEN)

