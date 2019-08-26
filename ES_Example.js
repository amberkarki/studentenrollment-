console.log("*****----Studnet Enrollment Concept----*****");
/*Data Type*/
/*primitive data Types and non-primitive data Types*/
Console.log("Primitive data Types");
/*String ,Number,Boolean,Undefined,Null etc */
console.log("Non-primitive data Types");
/*Object,Array and RegExp*/

Console.log("***Variables***");
/* In JS , few way to declear about variables*/
var /* old way to declear variable in JS*/
let /*  modern way  */
const /* modern way*/
let x = 4 // define normal variable
 const z = 5 // here  const not define a variable but fixed value  can't  be changed  
 //but we can changed const value as well   and it will be explain later on 

 console.log(x,z) //4,5 printed 
 x=1;// new value is assigned to the x and now x=1 no longer value 4
 console.log("x,z") // 1 and 5 will be printed 
 z=2;// it cant be changed value it will be error because of constant value for z

 
Console.log("***Function**");

Console.log("*** Function statement and  Funtion with expression  Example ****")
function sum (a,b){
let x=5; // function scope let variable 
if(a<x && b>a){
console.log(x+10);
}
else 
{
    console.log("COndition is not satisfy !!!");
}

}

console.log(x); // this will be printe 1 not 5 because  let x variable  one is  function scope variable  another is outside of function scope



let x=function sum (a,b){// Funtion expression here  assign a funtion   to the variable x
    let x=5; // function scope let variable 
    if(a<x && b>a){
    console.log(x+10);
    }
    else 
    {
        console.log("COndition is not satisfy !!!");
    }
    
    };

console.log(x);


 // Array 

 
 

 const x=[1,3,4,5];
console.log("X of Array " + x);
const t=x.concat(6);
console.log("T of an array " +t);
//map function ()

const z=t.map(index => index*4);// here each index is multiply by 4 
console.log(z);
//foreach ()

// filter()

 // object 
