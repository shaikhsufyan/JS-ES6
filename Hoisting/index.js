// Hoisting :
// Accessing Variable function before initializing or 
// before declare are called hoisting

myFun();
console.log(myFun);
console.log(a);

var a =10;

function myFun(){
    console.log("Hello JS");
}
 
 
 