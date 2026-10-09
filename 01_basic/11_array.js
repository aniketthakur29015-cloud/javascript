const myArr = [0,1,2,3,4]
const myHeros = ["Aniket","Saktiman"]
const myArr2 = new Array(1,2,3,4)
console.log(myArr[0])//0

// Array Methods
//(1)push()
myArr.push(5)//add element at the end of the array
console.log(myArr)//[0,1,2,3,4,5]

//(2)pop()
myArr.pop()//remove element from the end of the array
console.log(myArr)//[0,1,2,3,4]

//(3)unshift
myArr.unshift(4)//add element in the front of the array
console.log(myArr)//[4,0,1,2,3,4]

//(4)shift
myArr.shift()//remove element from the front of the array
console.log(myArr)//[0,1,2,3,4]

