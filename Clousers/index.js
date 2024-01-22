//  Closure()
// Function along with lexical scope bundle together it
// form a closure
 
 function a(){
    let x = 100;
    function b(){
       let y = 200;
        function c(){
            console.log(x,y);
        }
        c()
    }
    b()
    
 }
 a();
 