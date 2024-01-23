// Call()
// call is a predefined javascript method. call() invoke function
// for owner object.

// Apply()
// Apply is similar to call method, The only difference is that
// apply pass argument as an array

// Bind()
// Bind method invoke a function and bind into a variable or store
// into a variable. We can use later

 let data ={
    name:"Sufyan",
    proff:"SE",
 }
 let data2 ={
    name:"Shaikh",
    proff:"FullStack Developer",
     
 }

 function myFun(country, age){
    console.log(this.name, country, age);
 }
 
//  myFun.apply(data2, ["India", 20])

let store = myFun.bind(data2, "US", 19);
store()