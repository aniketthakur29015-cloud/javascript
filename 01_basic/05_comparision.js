//  Normal comparision
// console.log(2 > 4)
// console.log(2 >= 4)
// console.log(2 < 4)
// console.log(2 <= 4)
// console.log(2 == 4)
// console.log(2 != 4)

// complex comparision :- in predictable output.

// console.log("2">1)//convert string into a number:-true
// console.log(2>"1")//convert string into a number:-true




console.log(null>0)//false
console.log(null==0)//false and == convert null into a NaN so that's why it shows false
console.log(null>=0)//true

// reason:-The reason is that an equality check == and comparisons > < >= <= work differently.
// Comparisons convert null to a number, treating it as 0.
// That's why (3) null >= 0 is true and (1) null > 0 is false.

console.log(undefined>0)//false
console.log(undefined==0)//false
console.log(undefined<0)//false
//in all case undefined will give u false

// strict camparision:- "==="
console.log("4"===4)//in strict comparision this will check number as well it's data type 
                    //and it will not convert any data type.


