//const tinderUser = new Object() -----Singleton Object
const tinderUser = {}  //non-singleton object


tinderUser.id = "4567vgy"
tinderUser.name = "Sam"
tinderUser.isLoggedIn = false

 // console.log(tinderUser);

 const dailyUser = {
    email: "sahil.ambigar@in",
    fullname:  {
        userfullname: {
            firstname: "Sahil",
            lastname: "Ambigar"
        }
    }
 }

 //console.log(dailyUser);
 

 const obj1 ={1: "a", 2:"b"}
 const obj2 ={3: "a", 4:"b"}

 //const obj3 = {obj1, obj2}
// console.log(obj3);

const obj3 = Object.assign({}, obj1,obj2)
console.log(obj3);
 
 