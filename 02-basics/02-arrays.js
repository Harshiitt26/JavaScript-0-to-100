const name1 = ["harshit" , "komal" , "kushal" , "ashu"]
const name2 = ["a" , "b" , "c" , "d"]

// name1.push(name2) // output : ["","","",["","",""]]
// console.log(name1)
// console.log(name1[4][3])

const newArr = name1.concat(name2)
// console.log(newArr) 

// Another and commonly used method (SPREAD Method)
const allNames = [...name1 , ...name2]
// console.log(allNames)

const badArray = [1,2,3,[4,5,[6,7]],8]
// console.log(badArray.flat(Infinity))

console.log(Array.isArray([1]), Array.isArray("harshit"))
console.log(Array.from("harshit"))
console.log(Array.from({name:"harshit"}))

const obj = { name: "harshit" };
const entriesArray = Object.entries(obj);
console.log(entriesArray); // ['name']

const name = "harshit" , age = 20 , smart = true;
const info = Array.of(name,age,smart)
console.log(info)