const accountId = 144553
let accountEmail = "abhijeet@123.com"
var accountPassword = "12345"
accountCity = "Jaipur"
let accountState;

// accountId = 2 // not allowed
const accountid=231// aik baar value assing ho gyi to phir change nahi ho sakti
let accountemail="abhitesr12@34"//variable cannot be re-decleared but can be update .a block scope variable
var countpass="2345"//cannot be redeclared and update

//accountid=342
console.log(accountid)
console.log(accountemail)
console.log(countpass,accountemail)
console.table([accountemail,accountid])

accountEmail = "hc@hc.com"
accountPassword = "21212121"
accountCity = "Bengaluru"

console.log(accountId);

/*
Prefer not to use var
because of issue in block scope and functional scope
*/


console.table([accountId, accountEmail, accountPassword, accountCity, accountState])