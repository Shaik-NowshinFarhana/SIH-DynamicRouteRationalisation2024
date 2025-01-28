// logical operators
//  (|| or) ,(&& - AND), !-Not

let n='nowshin';
let age=18;

if(n=='nowshin'){
    console.log('hello there user');

}
else{
    console.log('wrong values');

}


// both name  & age should match then we can use logical operators

if(n=='nowshin' && age==18){
console.log('both name and age are correct');

}
else{
    console.lo('doesn\'t matched');
    
}


// switch statements

/* syntax:
switch(condition){
    case1:
        statement
        break;
    case2:
        statement
        break;
}*/



// dice values : 1-6 
// we can go with if ,else if,else statements or logical operators

let dice=2;
switch(dice){
    case 1:
        console.log('you got one');
        break;
    case 2:
        console.log('you got Two');
        break;
    case 3:
        console.log('you got Three'); 
        break;
    case 4:
        console.log('you got Four');
        break;
    case 5:
        console.log('you got Five');
        break;
    case 6:
        console.log('you got Six');   
        break;
}









