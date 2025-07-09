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
const bigNumber = 987654321n
console.log([typeof(5), typeof("Harshit"), typeof(undefined), typeof(null)])
console.log(typeof null) // This is also called draweback in JS language.

const myFruits = ["Apple", "mango", "banana"] // fruits is an array
const myObj = {  
    "name": "harshit",
    "class": 12
} // obj is an object.
let myFunction = function(){
    console.log("Hi")
}
myFunction()
console.log([myFruits[2] , myFruits[3] , myObj.class])
console.log([typeof myFruits , typeof myObj , typeof myFunction])

// JavaScript is DYNAMICALLY TYPED coz let x = 5 , engine knows 5 is an number
// 2 Types of Data Types
// PRIMITIVE DATA TYPES - 7 - Number , String , Null , Undefined , Boolean , Symbol , BigInt

// REFERENCE (Non-Primitive) - 3 - Array , Objects , Functions