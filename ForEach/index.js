let arr = ["Sam", "Anas", "Zain", "Sufyan"];

let data = [
    {name:"Anas", age:11, proff:"Engineer"},
    {name:"Sufyan", age:11, proff:"Developer"},
    {name:"Sam", age:11, proff:"Tester"},
    {name:"Zain", age:11, proff:"Manager"},
    {name:"Rohan", age:11, proff:"Engineer"},
    {name:"Aman", age:11, proff:"Engineer"},
];

data.forEach((curVal, index, array)=>{
    curVal.name = "Mr" + curVal.name
})
console.log(data);

  