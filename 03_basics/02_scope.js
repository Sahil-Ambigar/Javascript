


let a = 300 //Global Scope
if(true) {
    let a = 10
    const b = 20
    console.log("INNER: ",a); //Local scope
}

console.log(a);