const user = {
    username:"hitesh",
    loginCount: 8,
    signedIn: true,
    getUserDetails : function(){
        //console.log("user details")
        console.log(`username: ${this.username}`);
        console.log(this)
    }
}

//console.log(user.username);
//console.log(user.getUserDetails());

function users(username,loginCount,signedIn) {
    this.username = username;
    this.loginCount = loginCount;
    this.signedIn = signedIn;

    this.greeting = function(){
        console.log(`Welcome ${this.username}`)
    }
    return this;
}

const userOne= new users("hitesh",12,true)
const usertwo= new users("sima",11,false)
/**
 * what does new do???
 * 1. create a new object
 * 2.constructor function call is make due to new keyboard
 * 3.value we pass through constructor function get injected into variable
 * 4.all data members get available 
 */

console.log(userOne);
console.log(userOne.constructor);

//instance of

