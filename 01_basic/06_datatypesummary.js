// primitive datatype
//7 types:- string,number,boolean,null,undefine,BigInt,symbol
const f1=200//number
const f2=300.4//number
const temp=null;//null
const loggedIn=false//boolean
let userEmail;//undefined

//symbol
const Id= Symbol("213")
const anotherId= Symbol("213")
console.log(Id===anotherId)

const bignumber = 211314122342341n//big int
console.log(typeof(bignumber))//bigint

//Reference (non-primitive)
// Array,object,Functions
let arr=["rwrw","dwdew","edw","ddf"];

let Obj={
    name:"Aniket",
    age:20
}

const myfunction = function(){
    console.log("Hello World");
}

//NOW THE TYPE OF DATA TYPE
// ARRAY
console.log(typeof(arr))// data type:- object

//OBJECT
console.log(typeof(Obj))//data type:-object.

//function
console.log(typeof(myfunction))//data type:-function.

