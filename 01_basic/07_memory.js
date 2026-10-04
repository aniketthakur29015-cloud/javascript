//there are two type of memory 
//(i) stack:-primitive data type
//-->in stack it give copy of the variable. so we change anything it will not affects the original one 
let myYoutubeChannel = "Aniketyt"
let anotherYtName = myYoutubeChannel
anotherYtName="helloyt"
//-->the primitive data type are int,float,string,Boolean,null,undefined,etc
console.log(myYoutubeChannel)//Aniketyt
console.log(anotherYtName)//helloyt


//(ii)heap memory:-non primitive data type
//-->in heap it gives the refrence of the object and the veriable if we change 
// anything it will affects the original one.
//non primitive data types are-->array,object, functions
let obj={
    email:"aniketthakur@gmail.com",
    upi:"sbi@ybl"
}
let obj2 = obj
obj2.email="chotu@gmail.com"
console.log(obj.email)//chotu@gmail.com
console.log(obj2.email)//chotu@gmail.com