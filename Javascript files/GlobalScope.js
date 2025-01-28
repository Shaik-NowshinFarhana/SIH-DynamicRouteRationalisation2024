// GlobalScope Vs LocalScope
// any variable outside code block{} is said to be in Global Scope
// can be accessed anywhere i program
// gotchas:name collisions,modify by mistake


let name='bobo';
name='peter';

const name1='farhana';

function calculate(){
    // some other cide..
    console.log(name);
    name='orange';
    
}
calculate();



if(true){
    // some other code..
    console.log(name);
    name='grapes ';
    
}

// modifying
console.log(`my name is ${name} and i'm awesome`);










































