const accountId = 18723887
let accountEmail = "hitesh@google.com"
var accountPassword = "12345"
accountCity = "Jaipur" //it is treated as global object.if this is done while using "use strick" thows "RefferenceError"
let accountState;

// accountId = 2983947 // changes not allowed

accountEmail="sima@google.com"
accountPassword = "12kjn2332"
accountCity = " kolkata"


/**
 * Preper not to use var
 * because of the issue in block scope and functional scope
 */
console.table([accountId , accountEmail , accountPassword , accountCity , accountState])
