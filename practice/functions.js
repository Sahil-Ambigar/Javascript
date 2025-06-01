function greet(){
   // console.log("Hello, sahil");
}
greet();

function add(a,b){
    return a+b;

}

let result= add(5,6);
//console.log(result);

const multiply = function(x,y){
    return x*y;
};

//console.log(multiply(4,5));

//modern JS ES6
const divide =(a,b) => {
    return a/b;
};

//console.log(divide(10,2));

//function reusability 

function greetuser(name){
    console.log(`Hello,` +name+ `!`);
}
greetuser("sahil");
greetuser("Arya");
greetuser("Shruti");

