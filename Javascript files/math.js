// math
// standard built-in objects - always available

const number=4.56789
let result=Math.floor(number);

console.log(result);//4

result=Math.ceil(8906.37422);
console.log(result);//8907

result=Math.sqrt(49);
console.log(result);

result=Math.PI;
console.log(result);//3.1415926

result=Math.min(4,5,6,7);
console.log(result);

result=Math.max(4,5,6,7);
console.log(result);


result=Math.random();
console.log(result); //values only 0-0.9999 but never be 1

result=Math.ceil(Math.random()*10+1);
console.log(result);


// Date
/*const date=new Date();
console.log(date);*/
const date=new Date(`1/1/2006`);

const month=date.getMonth();
console.log(month);

const months=['january:','february','march','april','may','june','july','august','september','october','november','december'];

console.log(months[month]);//8907
const days=['sunday','monday','tuesday','wednesday','thursday','friday','saturday']

const day=date.getDay();
console.log(days[day]);
console.log(date.getFullYear());

const sentence=`${days[day]} ${months[month]}${date.getDate()}, ${date.getFullYear()}`;
console.log(sentence);

document.body.innerHTML=sentence;



