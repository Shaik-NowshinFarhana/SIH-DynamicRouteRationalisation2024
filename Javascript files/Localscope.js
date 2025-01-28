// LocalScope 
// can  not be access from outside coded blocks
// if -Not var


let name='bobo';
name='farru';

function calculate(){
    const name='Nowshin';
    const age=18;
    // code goes here
    becomesGlobal='gloabal variable ';
}
calculate();
//console.log(age);// inside the function variable   not accessable
console.log(becomesGlobal);//global declared so accessable

if(true){
    const name='nowshin';
}
{const hello='hi';
    const spl='local';
}
console.log(hello);//local variable
console.log(spl);//local variable 








