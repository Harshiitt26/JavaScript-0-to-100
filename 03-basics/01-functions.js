function sumFunction(a,b){ // (a,b) are parameters
    return a+b
    console.log("harshit") // this line will never be executed coz after return the function stops
}

console.log(sumFunction(3,5)) // (3,5) are parameters

function yourName(name){
    if(!name){
        return "Enter your name."
    }
    return `Welcome ${name}!`
}
// console.log(yourName("harshit"))
console.log(yourName())

// in this this function can hold any number of parameters
function allStudents (...allNames){ // ...is called rest/spread operatotr according to their usecase
    return allNames
}
console.log(allStudents("a","b","c"))

// passing an obj in function
function handleObject(anyObject){
    return anyObject.age
}
console.log({age: 44})

function handleArray(anyArray){
    return anyArray[1]
}
console.log(handleArray([6,8,3]))
