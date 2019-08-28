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
    console.log("Condition is not satisfy !!!");
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
        console.log("Condition is not satisfy !!!");
    }
    
    };

console.log(x);


 // Array 

 
 

const x=[1,3,4,5];
console.log("X of Array " + x);
const t=x.concat(6);
console.log("T of an array " +t);
//map function ()






const x=[1,2,3,4,5].map((val)=>{ // here  using  Arrow function in sinlge line  with map function  and it will  create and retrun new array  with its values
return val*val;
})
console.log(x);

const z=t.map(index => index*4);// here each index is multiply by 4 
console.log(z);

const a=[...x];// spread syntax or operator (...x  it will copy array  which reference key is x and copy  then crated new array )

//foreach ()




// filter()

 // object 


// IIFE function example 
let studentEnrollemtn={ //  this is  global  variable bcoz i want to access  this variable inside this project.
    name:"", // this object is created and value is null  later i want to assing the value
    lastname:"",
    gender:"",
    age:null,
    grade=null,

}
const student ={

    name:"Amber",
    lastname:"karki",
    gender:"male",
    age:20,
    
    
        }
    
    console.log(student);
    
    if(student.gender==='male')
    {
    (function(){ //IIFE concept
    student.age+=5;
    console.log("Your are ready to Join Programming Course: "+student.age);
    })();
    
    
    }
    else
    {
    (function(){
    console.log("Sorry !! Still you are too young :"+ student.age);
    })();
    }


     // calling  function inside (parameters) example

student.grade=4;// here  adding grade properties into the object student.
console.log(student.grade);




function enroll ()
{

    if(student.grade>=4)
             {
             (function (){
       studentEnrollemtn.name=student.name;
       studentEnrollemtn.lastname=student.lastname;
       studentEnrollemtn.gender=student.gender;
       studentEnrollemtn.age=student.age;
       studentEnrollemtn.grade=student.grade;
       let display;
       for(display in studentEnrollemtn)
       {
           console.log(studentEnrollemtn[display]);
       }
             })();
     

    }
    else 
    {
     console.log ("Only All the students grade information : ");
    let z;
            for(z in student)
    {
    console.log(student[z]);
    }
    }
    }

enroll();


function sum(x,y=5)
{

    return x+y;
}

console.log(sum(5));// this will print 10
console.log(sum(3,3))// this will print 6  due to the y's value changed .


//filter method in 
const coursegrade=[0,1,2,3,4,4,4,5,5,4,3,3,3,3,5,];//  grade array for example .

function checkGrade(grade)//creating funtion  to to check all >4  course grade
{
return grade>=3;
}

function toFilter()
{
console.log(coursegrade.filter(checkGrade(3)));

}

toFilter() // but cant figure out error 
