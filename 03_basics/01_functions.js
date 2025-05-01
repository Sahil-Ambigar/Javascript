// function sayMyName(){
//     console.log("S");
//     console.log("a");
//     console.log("h");
//     console.log("i");
//     console.log("l");
// }

// sayMyName() /////sayMyName is a reference and () this is a execution

// function addTwoNumbers(number1, number2)//number1 and number2 are parameters
// {
//     console.log(number1 + number2);

// }

// addTwoNumbers(3,5) // 3 and 5 are arguments

function addTwoNumbers(number1, number2){
    
    // let result = number1 + number2
    //  return result

    return number1 + number2
 }
const result = addTwoNumbers(3,4)
// console.log("Result: ",result);

function loginUserMessage(username){
    return (`${username} just logged in`)
}
// console.log(loginUserMessage("Sahil"))


function calculateCartPrice(val1, val2, ...num1){
    return num1
}

console.log(calculateCartPrice(200,300,400));
