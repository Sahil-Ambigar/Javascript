// Array

const myyArr = [0,1,2,3,4,5]
const myHeros = ["batman", "ironman"]

const myArr2 = new Array(1,2,3,4)
console.log(myArr2[1]);

// Array methods

myArr2.push(6)
console.log(myArr2);


const newArr = myArr2.join()

console.log(newArr);
console.log(typeof newArr)

// slice, splice

console.log("A ", myArr2);

const myn1 = myArr2.slice(1,3)
console.log(myn1);

console.log("B ",myArr2);
const myn2 = myArr2.splice(1,3)
console.log(myn2);