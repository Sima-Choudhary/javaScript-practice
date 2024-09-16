"use strict";  // treat all js code as newer version

//alert(3+3) // we are using nodejs, not browser.
/**primitive */
//number => 2 to the power 53
//BigInt
//String = ""
//null 
//undefined => standalone value
//Sysmbol => Uniqueness
//boolean

const id = Symbol("123")
const anotherId = Symbol("123")
console.log(id == anotherId) //evenif we are passing same value symbol returns unique value

const BigNumber = 711658874753879647348659790739749n
console.log(typeof BigNumber)



/** Reference (Non primitive) */
//object ,Array, Functions
console.log(typeof undefined)
console.log(typeof null)


const heros =["Saktiman", "naagraj" , "doga"]
let myObj = {
    name : "Sima",
    age: 22
}

const myfriend = function(){
    console.log("hello")
}

console.log(typeof myfriend)
console.log(typeof heros)

    /** Memory mnagement */

    /**
     * Stack(primitive)
     * Heap(Non-primitive)
     */

    let myYoutubeName = "sima"
    let anotherName = myYoutubeName
    anotherName = "ChaiAurCode"

    console.log(myYoutubeName)
    console.log(anotherName)

    const userOne = {
        email : "sima@google.com",
        roll : 22
    }
    const  userTwo = userOne
    userTwo.email = "Isha@google.com"
    console.log(userOne.email)
    console.log(userTwo.email)