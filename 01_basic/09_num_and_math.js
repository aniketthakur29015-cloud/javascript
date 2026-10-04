const score = 400
console.log(score)

//if we want to define number explicitly then we will use this method
const balance = new Number(score)
console.log(balance)

//methods of Number
//(i)tostring
console.log(balance.toString())
//if we convert it into the string we can accesthe method of string.
console.log(balance.toString().length)

//(ii)toFixed
console.log(balance.toFixed(2))//400.00

//(iii)toprecision()
const otherNumber = 3.889
console.log(otherNumber.toPrecision(2))

//(iv)toLocalString()
const hundred = 100000
console.log(hundred.toLocaleString("en-IN"))//1,00,000

// +++++++++++++++++++++++++++++++++ Maths ++++++++++++++++++++++++++++++++++++++++++++++
console.log(Math);

//(i)abs()
console.log(Math.abs(-4))//4:-It converts a negative number into positive, while a positive number stays positive.

//(ii)round()
console.log(Math.round(4.6))
console.log(Math.round(4.4))

//(iii)ceil()
console.log(Math.ceil(4.2))//ceil():-Math.ceil() rounds a number UP to the nearest integer.

//(iv)floor()
console.log(Math.floor(4.9))//Math.floor() rounds a number DOWN to the nearest integer.

//(v)min()
console.log(Math.min(4,5,3,1))//Math.min() returns the smallest value among the given numbers.

//(vi)max()
console.log(Math.max(4,5,3,1))//Math.max() returns the largest value among the given numbers.

//(vii)random()
console.log(Math.random())//it gives value btw 0 to 1.