const name = "Aniket"
const repocount = 12
console.log(`Hello my name is ${name} and my repo count is ${repocount}`)

const mystr = new String("Aniket")
console.log(mystr[0])//accessing the value by using key.
console.log(mystr.__proto__)//accessing the prototype.String.prototype is an object that contains methods and properties available to all JavaScript strings.

//METHODS
//(i)LENGTH
console.log(mystr.length)//length is not a function in string.

//(ii)toUpperCase()
console.log(mystr.toUpperCase())//ANIKET,But this will not going to change in orignal string because it follows stack memory  

//(iii)charAt()
console.log(mystr.charAt(2))//i

//(iv)indexOf()
console.log(mystr.indexOf("t"))//5

//(v)substring()
const newstring= mystr.substring(0,4)//we only can give +ve value we give -ve value then it count -ve as a 0.
console.log(newstring)//Anik

//(vi)slice()
const anotherstring= mystr.slice(-6,4)//we can give +ve as well as -ve value in the slice.
console.log(anotherstring)//Anik

//(vii)trim()
const str2="       aniket.     "
console.log(str2.trim())//ths remove the un nessasary white spaces and new lines 
//output:-aniket.

//(viii)replace()
const url = "https//:Aniket.com/aniket%30thakur"
console.log(url.replace("%30","-"));//https//:Aniket.com/aniket-thakur

//(ix)includes()
console.log(url.includes("Aniket"))//true

//(x)split()
const str3="hello-guys-my-self"
console.log(str3.split("-"))//This prints array. Output:-[ 'hello', 'guys', 'my', 'self' ].

//There are so many method of string . 