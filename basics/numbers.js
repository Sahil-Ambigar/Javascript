const score = 400
console.log(score);

const balance = new Number(100)
console.log(balance);

console.log(balance.toString().lenght);
console.log(balance.toFixed(1));

const otherNumber = 23.8966

console.log(otherNumber.toPrecision(3));

const secNumber = 123.8966

console.log(secNumber.toPrecision(3));

const hundreds = 1000000
console.log(hundreds.toLocaleString());
console.log(hundreds.toLocaleString('en-IN'));


const min = 10
const max = 20

console.log((Math.round(Math.random() * (max - min + 1))+ min))