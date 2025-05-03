// for in
// for of


const greetings = "Hello World!"
for (const greet of greetings) {
    // console.log(`Each char is ${greet}`);
    
    
}

// Maps

const map = new Map();
map.set('IN', "India");
map.set('Fr', "France");
map.set('USA', "uNITED");
map.set('IN', "India");

for(const[key, value] of  map) {
   console.log(key,":-", value);
}