"use strict"

//alert("Hi Coder!") // alert statement does not work in node js
// its is the part of web browser and DOM

// ORIGINAL DOCUMENTATION of javascript is not from MDN Documentation instead is from ec39.es

// DATA TYPES

let name = "harshit" // String ""
let age = 20 // Number 
const isMale = true // Boolean true/false
let salary = null // null means an empty value.
let address; // now address is undefined which means the value to address is not defined yet.
const id = Symbol('id'); // Symbol is used for unique, hidden keys in objects.
const obj = {
    "name": "harshit",
    "class": "12"
}
// obj is an object.
console.table([typeof(5), typeof("Harshit"), typeof(undefined), typeof(null)])
console.log(null) // This is also called draweback in JS language.