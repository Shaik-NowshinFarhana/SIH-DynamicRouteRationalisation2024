// Array Properties and Methods

let names=['Nowshin','Farhana','Arshi','Asifa','Sofi','Ashfaq']

// length
console.log(names.length);
//slicing
console.log(names[0,2]);
//access one element
console.log(names[2]);
// last element accessing
console.log(names[names.length-1]);

// concatenation

const lastnames=['Nowshin','farhana','arshi'];
const allnames=names.concat(lastnames);
console.log(allnames);

// reverse array
console.log(allnames.reverse());

// unshift-adds elements
allnames.unshift('susy');
console.log(allnames);
// shift-removes elements
allnames.unshift('susy');
console.log(allnames);
// push -adds elements
allnames.push('vivel');
console.log(allnames);
// pop -removes elements
allnames.pop(); 
console.log(allnames);

// splice- mutates original array  similar to slicing(start,no.of elements)
const specificnames=allnames.splices(2,1);
console.log(specificnames);




