// object.create() //Singleton

// OBJECT LITERALS
const mySym = Symbol("key1") // Symbol declaration
const user = {
    name: "Harshit",
    age: 20,
    "full address": "Gurgaon",
    [mySym]: "key2"          // Symbol in Object
}
console.log([
    user.age,
    user["age"],    // Method 2
    user["full address"],
    typeof user[mySym]
])
user["age"] = 15    // OR user.age = 15
// Object.freeze(user) // Freezes the object 
// user["age"] = 12    // the change is not implemented and also no erroe is returned.

user.username = function(){
    console.log(`${this.name}26`)
}
console.log(user)
console.log(user.username)
console.log(user.username())
