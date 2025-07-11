const score = 10.6589

console.log([
    score,
    score.toString().length,
    score.toFixed(2),
    score.toPrecision(2),
    score.toPrecision(3)
])
let hundreds = 10000000000
console.log([hundreds , hundreds.toLocaleString("en-IN")])

// *********************** MATHS *********************
console.log( Math)
console.log([
    Math.abs(-5),
    Math.min(2,3,4,5),
    Math.max(2,3,4,5),
    Math.ceil(4.5),
    Math.floor(4.5),
    Math.round(4.8)
])
console.log([
    Math.random(),
    Math.random()*10,
    Math.floor((Math.random()*10) + 1) // +1 to avoid 0.
])

// generate a value btw 15 to 20
let min =15 , max = 20
let value = Math.floor((Math.random()*(max-min+1)) + min)
console.log(value)