// conditional Statements
//  >,<,>=,<=,==,===,!=,!===

/*syntax:
if(condition){
    statemants
}
else{
    statements
    }
*/

if(2>1){
    console.log('hello world');
}

const value=true;
if(value){
    console.log('hello world');
}
else{
    console.log('false value');
    
}

let num1=4;
let num2=6;
if(num1<num2){
    console.log('num2 is biger than first'+" "+num2);
}
else{
    console.log('first number is bigger than second'+" "+num1);
}

// elseif also can be added
num1=6;
num2=6;
const result=num1>=num2;
if(num1<num2){
    console.log('num2 is biger than first'+" "+num2);
}
else if(result){
    console.log('first number is equal to second number');

}
else{
    console.log('first number is bigger than second'+" "+num1);
}
// !
let value1=false;
if(!value1){
    console.log('value is not true');
}

// ==  to checks only values are equal or not 
//  ===  checks value and type both 

// ==
num1,num2=6;
value1= num1==num2;
console.log(value1);

// ====
num2='6';
let value2= num1===num2;
console.log(value2);//false

// !=  not equal value 
num1=10;
value1= num1!=num2;
console.log(value1);

// !==  both type and  value
num1='6';
value2= num1!==num2;
console.log(value2);//both are same and type also so the output is false


