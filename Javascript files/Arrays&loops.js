// Arrays and for loop
const names=['Ana','susy','bobby'];
const lastname='shakeandbake';
let newArray=[];

// for loop
let i;
for (i=0;i<=names.length;i++){
    newArray.push(names[i]);
    console.log(i+"item-"+names[i]);  
    // interpolation
   
    const fullname=(`${names[i]} , ${lastname}`);
    newArray.push(fullname);
}

console.log(newArray);


// Functions,return,if ,arrays,for loop
let gas=[20,30,100];
const food=[10,40,50,90];
function calculate(arr){
    let total=0;
    for(let j=0;j<arr.length;j++){
        console.log(arr[j]);
        total +=arr[j];
    }
    if(total>100){
        console.log("you are spending too much");
        return total;
    }
    console.log("good to see u r spending less than 100");
    
    return total;
};
const gastotal=calculate(gas);
const foodtotal=calculate(food);
console.log("gastotal-"+gastotal+" foodtotal-"+foodtotal);

const randomtotal=calculate([200,500,2000]);

console.log({
    gas:gastotal,
    food:foodtotal,
    random:randomtotal,
});








        