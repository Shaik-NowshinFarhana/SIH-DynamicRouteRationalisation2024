// Powerful Array methods
// foreach map filter find reduce
// iterate over array no for loopm required
/* accept callback function as am argument ,calls callback against
each item in a rray.Reference Item in the callback parameter.*/

const numbers=[0,1,2,3];


// show all numbers
for (let i=0;i<numbers.length;i++){
    console.log((numbers[i]));
    
}

// for each -  does not return new array
const people=[
    {name:'bobby',age:18,position:'developer'},
    {name:'peter',age:28,position:'designer'},
    {name:'susy',age:38,position:'the boss'},
]

function showperson(arr){
    console.log(arr.position.toUpperCase());
}

// people.forEach(showperson);


// anonymous function
people.forEach(function (item){
 console.log(item.position.toUpperCase());
});



// Map -doesnot return a new array
// does not change size of original array
// use values from original array when making new one



// functions return undefined by default if we didn't defined it
const ages=people.map(function (){});
console.log(ages);


// 
const ages1=people.map(function (person){
// console.log(person);
// return `hello world`;
return person.age+20;
});

//  set up new array
const newpeople=people.map(function(person){
    return {
        firstName:person.name.toUpperCase(),
        oldage:person.age+20,
    };
});
console.log(newpeople);

const names=people.map(function(person){
    return `<h1> ${person.name}</h1>`
})


document.body.innerHTML =names.join('');
console.log(names);



// filter - does return a new array
// can manipulate the size of new array
// returns based on condition

const people1=[ {name:'bobby',age:18,position:'developer'},
    {name:'peter',age:28,position:'designer'},
    {name:'susy',age:38,position:'the boss'},];

const youngpeople=people.filter(function (person){
    return person.age <=25;
})

console.log(youngpeople);//bobby

const developers=people.filter(function(person){
    return person.poistion==='developer';
    //return person.position==='senior developer'; - an  empty array  as output
});//only peter


// find- retutns object
// returns single instance - first match,if no match undefined
// great for getting unique value

const people2=[ {name:'bobby',age:18,position:'developer',id:1},
    {name:'peter',age:28,position:'designer',id:2},
    {name:'susy',age:38,position:'the boss',id:3},];



const  names1=['bob','peter','susy']
const person2=people2.find(function(person2){
    return person2.id===2;
});
console.log(person2);



// finnd if susy present or not
console.log(names1.find(function(name){
    // return name==='susy';
        return name==='nowshin'; //undefined

}));//susy

console.log(person2.name);//peter


// reduce- iterate ,callbsck function
// reduce to a single value- number,array,object
// 1 parameter ('acc')-total of all calculations
// 2 parameter ('curr')-current iteration/value

const people3=[ {name:'bobby',age:18,position:'developer',id:1,salary:2000},
    {name:'peter',age:28,position:'designer',id:2,salary:2500},
    {name:'susy',age:38,position:'the boss',id:3,salary:3000},
];

const total=people3.reduce(function(acc,currItem){
     console.log(acc);
     console.log(currItem);
    return acc;
},100);


const total1=people3.reduce(function(acc,currItem){
     console.log(`total ${acc}`);
     console.log(`current money ${currItem.salary}`);
     acc += currItem.salary;
    return acc;
},300);
console.log(total1);









