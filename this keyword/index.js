// THIS KEYWORD

//  console.log(this);

// function  add(){
//     let sum = 2+2;
//     console.log(sum);
//     console.log(this);
// }
// add()


let data = {
    name:"sufyan",
    proff:"Software Engineer",
    country:"India",
    sum:function(){
        let add = 5+5;
        console.log(add);
        // console.log(this);
        console.log(this.country);

    }
}
data.sum();