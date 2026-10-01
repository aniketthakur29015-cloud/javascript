let score = "33"
console.log(typeof(score))//string
let numberToValue = Number(score)//typecasting.
console.log(typeof(numberToValue))//number

let xyz = "33abc"
let n2 = Number(xyz)//typecasting
console.log(typeof(xyz))//string
console.log(typeof(n2))//number
console.log(n2)//NaN:-not a number.

let x2 = null
let n3 = Number(x2)//typecasting
console.log(typeof(x2))//object
console.log(typeof(n3))//number
console.log(n3)//0

let x3 = undefined
let n4 = Number(x3)//typecasting
console.log(typeof(x3))//undefined
console.log(typeof(n4))//number
console.log(n4)//NaN:-Not a number.

let x4 = true
let n5 = Number(x4)//typecasting
console.log(typeof(x4))//boolean
console.log(typeof(n5))//number
console.log(n5)//1.

//Number conversion
//"33"=> 33
// "33abc" =. NaN
// true => 1; false => 0
 
let isLoggedIn = 1
let booleanLoggedIn = Boolean(isLoggedIn)//typecasting
console.log(booleanLoggedIn)//true

let isLoggedIn1 = ""
let booleanLoggedIn1 = Boolean(isLoggedIn1)//typecasting
console.log(booleanLoggedIn1)//false

let isLoggedIn2 = "hitesh"
let booleanLoggedIn2 = Boolean(isLoggedIn2)//typecasting
console.log(booleanLoggedIn2)//true

//boolean conversion
//1 =>true
//""=>false
//"hitesh"=>true

