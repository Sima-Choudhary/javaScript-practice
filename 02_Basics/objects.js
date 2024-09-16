//Object literals

const key = Symbol("123");

const jsUser = {
    name:"sima",
    age:332,
    "full name":"sima choudhary",
    [key]:"345",
    location:"kolkata",
    email: "sima@google.com",
    isLoggedIn:"false"
}

// console.log(jsUser[key])

// jsUser.email = "sima@chatGPT.com"
// Object.freeze(jsUser)
// jsUser.email = "sima@microsoft.com"

// console.log(jsUser)

jsUser.greeting = function(){
    console.log("hello js users")
}
jsUser.greetingTwo = function(){
    console.log(`Hello js users ,${this.name}`)
}

console.log(jsUser.greeting())
console.log(jsUser.greetingTwo())

