const userEmail = "sahil.ambigar@vit"

if(userEmail){
    console.log("Got user Email");
    
}
else{
    console.log("Dont have user email");
}


// falsy values 

// false, 0, -0, BigInt 0n, "", null, undefined, NaN

// truthy values
// "0", 'False', " ", {}, [], function{}()


//Nullish Coalesing Operator (??): null undefined

let val1;
// val1 = 5?? 10
// val1 = null ?? 10
// val1 = undefined ?? 10
val1 = null ?? 10 ?? 20

console.log(val1)