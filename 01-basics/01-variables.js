// "use strict"
const id = 10
// const keyword can not be changed

let name = "harshit" //  Block Scope
var place = "India"  //  Global Scope
//Never use "var" variable

username = "harshiitt26"
number = 2

let address;
console.table([id, name, place, username , number , address])
console.log(username, number , address)
// why username and number are working and not giving error?
// In prev. versions of JS this was allowed but not today.
// use "use strict" on the top of code ,
// this tells the engine to compile this according to latest standards.