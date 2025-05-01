// Singleton

// object literals

const mySym = Symbol("key1")

const JsUser = {
    name: "Sahil",
    age: 18,
    [mySym]: "mykey1",
    location: "maharashtra",
    email: "sahil.ambigar@vit.in",
    isLoggedIn: false,
    lastLoginDays: ["Mon", "Tue"]

}

console.log(JsUser.email)
console.log(JsUser["email"])
console.log(JsUser[mySym])
console.log(typeof JsUser[mySym])

// Change the value
JsUser.email= "ambigar.sahil"
Object.freeze(JsUser)
console.log(JsUser)
