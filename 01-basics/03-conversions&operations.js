// IMPORTANT conversion to NUMBERS      
const value1 = "33"        // "33" => 33              
const value2 = "a33bc"     // "ab23" => NaN
const value3 = undefined   // undefined => undefined
const value4 = null        // null => 0
const value5 = true        // true => 1 , false => 0

const value1InNumber = Number(value1)
const value2InNumber = Number(value2)
const value3InNumber = Number(value3)
const value4InNumber = Number(value4)   
const value5InNumber = Number(value5)

console.log([ // Number() will convert anything to number but real value will not be number
    "Conversion to NUMBERS:" , typeof value1InNumber , typeof value2InNumber , typeof value3InNumber, typeof value4InNumber, typeof value5InNumber 
])

console.log([
    value1InNumber , value2InNumber , value3InNumber, value4InNumber, value5InNumber 
])

// IMPORTANT conversion to BOOLEAN
const item1 = 0.5        // 0.1to1 => true , 0 => false
const item2 = ""         // "" => false
const item3 = "harshit"  // "anything" => true
const item4 = undefined  // undefined => false
const item5 = null       // null => false

const item1InBoolean = Boolean(item1)
const item2InBoolean = Boolean(item2)
const item3InBoolean = Boolean(item3)
const item4InBoolean = Boolean(item4)
const item5InBoolean = Boolean(item5)
console.log([ "Conversion to BOOLEAN:" , typeof item1InBoolean , typeof item2InBoolean , typeof item3InBoolean , typeof item4InBoolean , typeof item5InBoolean])
console.log([item1InBoolean , item2InBoolean , item3InBoolean , item4InBoolean , item5InBoolean])