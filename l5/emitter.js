function Emitter(){
    this.events = {} //object create krenge
}
//prototype se object me new property add kr skte h
Emitter.prototype.on = function(type,cb){  //nodejs module on use krta hai
   this.events[type] = this.events [type] || [];
   this.events[type].push(cb);
}
// [cb1,cb2,cb3]-->ise trigger krenge or for each loop lga ke har ek function ko call krenge

/*function Emitter(){
    this.events = {
     greet: "namste"
     } //object create krenge
}
//prototype se object me new property add kr skte h
Emitter.prototype.on = function(type,cb){  //nodejs module on use krta hai
   this.events["greet"] = this.events[type] //
}*/ //greet mila to usi greet ko rakhenge nhi to empty array assign kr dneg
//kuki agr same event honge to usi me add hote jaynge agr same nhi hoga to alg se array me add honge


//***** Emit -- event listener ko call krna

Emitter.prototype.emit = function(type){
    if(this.events[type]){
        this.events[type].forEach(listner =>{
         listner();
        });
    }
}
 
//ab emitter ko export krenge
module.exports = Emitter;
