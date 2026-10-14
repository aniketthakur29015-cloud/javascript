const marvel_heros = ["thor","ironman","spiderman"]
const dc_heros = ["superman","flash","batman"]

//push
marvel_heros.push(dc_heros)//output:-["thor","ironman","spiderman",["superman","flash","batman"]]

//concat()
const all_heros = marvel_heros.concat(dc_heros)
console.log(all_heros)//output:-["thor","ironman","spiderman","superman","flash","batman"]

//spread:-...
const all_new_heros = [...dc_heros,...marvel_heros]
console.log(all_new_heros)//output:-["thor","ironman","spiderman","superman","flash","batman"]

