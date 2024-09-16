let score = null

console.log(typeof score)
console.log(typeof(score))

let value = Number(score)


/**Any Data to Number */
// "33" => 33
//"33sdf" => NaN
//true  =>1
//undefined => NaN
//null => 0

console.log(value)
console.log(typeof(value))


let isLoggedIn = undefined;

let booleanIsLogged = Boolean(isLoggedIn)
/**Any DataType  to Boolean */
// 33,-11 => true , 0 =>false
//"33sdf" => ture ,"" => false
//undefined => false
//null => false

console.log(booleanIsLogged)
console.log(typeof(booleanIsLogged))

console.log(+true)
console.log(+"")


/** comparison */
console.log("2" > 3)
console.log("2" == 3)
console.log(null >= 0)
console.log(null == 0)
console.log(undefined  >= 0)
