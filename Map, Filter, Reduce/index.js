// Map()
// Filter()
// Reduce()

let datas = [
    {name:"Rohan", age:33, country:"US"},
    {name:"Sufyan", age:21, country:"india"},
    {name:"Shaikh", age:20, country:"Dubai"},
    {name:"Yash", age:43, country:"india"},
    {name:"Sahil", age:23, country:"Canada"},

]

let numbers = [22, 2, 1, 9, 33, 42, 20, 16, 18, 33, 4];
 
  datas.forEach((curVal, index, arr)=>{
        curVal.name = "MR" + curVal.name
        
})
 console.log(datas);







// Reduce()
//  let add = 0;
// for(let i=0; i<numbers.length; i++){
//     add = add + numbers[i];
// }
// console.log(add);

// let total = numbers.reduce((accumalator, curVal, index, array)=>{
//     return accumalator + curVal;
// },0)
// console.log(total);








// Filter()
// let filterData = datas.filter((curValue, index, array)=>{
//     return  curValue.country === "india"
// })

// console.log(filterData);




// Map()
// for(let i=0; i<numbers.length; i++){
//     let double = numbers[i] * 2;
//     console.log(double);
// }

// let double = numbers.map((curValue, index, array)=>{
//      return curValue * 2
// })
// console.log(double);


