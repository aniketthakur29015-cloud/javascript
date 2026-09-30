const accountId = 123344//const – declares a variable whose value cannot be reassigned.
let accountEmail= "hello@gmail.com"//let – declares a variable whose value can be changed.
var accountPassword = '23344'//const – declares a variable whose value cannot be reassigned.
accountCity = 'Jaipur'//we can also assign value without define the data type but that not a goood practice.

// accountId = 55566-> not allow.
accountEmail="aniket@gmail.com"
accountPassword='44532'
accountCity='kolkata'
/*
prefer not to use var
because in the issue block scope and functional scope.  
*/
console.log(accountId);
console.table([accountId,accountEmail,accountPassword,accountCity]);
