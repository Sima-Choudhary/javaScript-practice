if(2==2) console.log("hello"),console.log("sima");

const month = 3;
switch(month){
    case 1:
        console.log('Jan')
        break
    case 2:
        console.log("Feb")
        break

    case 3:
        console.log("march")
            break
    default:
        console.log("invalid entry")

}

/**Falsy values
 *  0, -0, BigInt: 0n, null, undefined, NaN
 */

/**Truethy value
 * "0", 'false', " ", [], {}, function(){}
 */

//checking for array
const arr =[]
if(arr.length === 0){}

const user ={}
if(Object.keys(user).length === 0){}


/**Nullish Coalescing operator */
let val = 5 ?? 10
val = null ?? 15
val = undefined ?? 20 ??30      //takes the first valid value
// console.log(val)

//Trunary operatior
console.log(100 >= 80 ? "true" : "false")