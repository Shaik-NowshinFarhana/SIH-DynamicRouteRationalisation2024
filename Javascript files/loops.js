// Loops - repeatedly run a block of code while condition is true

// while loop  - runs until the condition is false
/* syntax
while(condition){
    variable increment/decrement
}
    */
let amount=10;

while(amount<11){
    console.log('I have '+ amount+' i am going to the mall');
    amount--;
} 

//do while
//code block first,condition second
//runs at least once
let money=0;
do{
    console.log('you have '+ money + "  dollars");
    money++;    
}while(money<10);

// for loop
//repeatedly run a block of code while condition is true
/* syntax
declare variable
for(start;end condition;increment){
//block of statements
}
*/

let i;
for(i=0;i<10;i++){
    console.log('the number is -'+ i);
}

for (let no_=11;no_>=0;no_--){
    console.log('the number is : '+no_);    
}
