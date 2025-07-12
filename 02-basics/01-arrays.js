const arr1 = [1,2,3,4,5]
const arr2 = new Array(1,2,3,4)
console.log(arr1,arr2[3])
// array object has 2 prototype objects

arr2.push(6,5,7)
arr2.pop()
arr2.unshift(20,30)
arr2.shift()
console.log(arr2)

console.log(arr1.includes("3"))
console.log(arr1.indexOf("3"))

let arr = arr1.join()
console.log(arr1,arr) //arr1 will remain array but arr will conver to string

console.log("1", arr1)
const arr1a = arr1.slice(1,3)  // SLICE - range is not included + Original array is not manipulated
console.log("2", arr1a , arr1)
const arr1b = arr1.splice(1,3) // SPLICE - range is included + Original array is manipulated
console.log("3", arr1b , arr1)