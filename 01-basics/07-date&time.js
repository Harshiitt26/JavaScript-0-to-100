let myDate = new Date() // Date is an object.
console.log([
    myDate,
    myDate.toString(),
    myDate.toLocaleString()
])

let particularDate = new Date(2025,8,26)     // month starts from 0
let particularDate2 = new Date("01-14-2025") // month starts from 1
console.log([
    particularDate,
    particularDate.toString(),
    particularDate.toLocaleString(),
    particularDate2.toLocaleDateString()
])

// ********* TIMESTAMPS ****************




const newDate = new Date()
console.log(newDate.getDay())