// callback functions ,higher order functions ,functions as first class objects/citizens

/* funtions are first class objects -stored in a variable
(expression),passed as an  argument to another funciton,return from the function(closure)*/

// higher order functions-accepts another function as an argument or returns another function as a result

// callback function- passed to a another function as as argument and executed inside that function

function morning(){
    return `good Morning ${name.toUpperCase()}`;
}

function afternoon(){
    //console.log('goodafternoon ${name.repeat(3)}');
    return `goodAfternoon ${name.repeat(2)}`;
}

function greet(name,cd){
    
    const myname='nowshin';
    console.log(`good morning ${myname},my name is ${cd(name)}`);
    
}

greet('farru',morning);
greet('peter',afternoon);










