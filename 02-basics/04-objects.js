// const user = new Object() // is a Singleton Object.
// const user = {}           // is a non Singleton Object.

const newUser = {
    familyName: {
        user: {
            fullName: {
                firstName: "Harshit",
                lastName: "Kumar"
            }
        }
    }
}
console.log(newUser.familyName.user.fullName)

const obj1 = {"a":1,"b":2}
const obj2 = {"c":3,"d":4}
const obj3 = {"e":5,"f":6}
// const obj4 = {obj1 , obj2 , obj3}
// const obj4 = Object.assign({} , obj1 , obj2 , obj3)
const obj4 = {...obj1 , ...obj2 , ...obj3}
console.log(obj4)
console.log(Object.keys(obj4))
// console.log(Object.values(obj4))
// console.log(Object.entries(obj4))
console.log(obj4.hasOwnProperty("c"))

const users = [
    {id:1},
    {id:2},
    {id:3}
]
console.log(users[2].id)