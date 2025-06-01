let user = {
  name: "Sahil",
  age: 21,
  isStudent: true,
};

// name,age and isstudent are keys '(also called properties)
//"sahil", 21 and true are the values

console.log(user.name); // "Sahil"
console.log(user["age"]); // 21
user.age = 22;             // Update
user.city = "Mumbai";      // Add
//delete user.isStudent;
console.log(user["age"]);