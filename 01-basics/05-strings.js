const name = new String ("harshit") 
// const name = "harshit" // behind the scenes both works same , invokes an OBJECT
const age = 12
console.log(`My name is ${name} and my age is ${age}.`)

console.log([
    name , name.length , name[3] ,
    name.__prototype__ ,
    name.toUpperCase() ,
    name.charAt(6) ,
    name.indexOf("t")
])
console.log([
    name.substring(0,4) ,
    name.slice(0,2) ,
    name.slice(-7,5) ,
    name.replace("s","x")
])
console.log(name.split("s"))