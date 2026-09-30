const accountId = 123344
let accountEmail= "hello@gmail.com"
var accountPassword = '23344'
accountCity = 'Jaipur'

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
