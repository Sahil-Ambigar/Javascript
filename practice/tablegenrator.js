let num = 7; // you can change this to any number

console.log(`Multiplication Table for ${num}`);

for(let i =1; i<=10; i++){
    console.log(`${num} x ${num *i }`);

}

console.log(`Multiplication Table for ${num} using while loop: `)

let j =1;
while (j<=10){
    console.log(`${num} x ${j} = ${num * j}`);
    j++;
}
