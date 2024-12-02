/**this operator in funtions************/

const user ={
    username: "sima",
    price: 123,
    greetings: function(){
        console.log(`${this.username}, welcome to our website`)
    }
}

// user.greetings(user)
// console.log(user)
// user.username = "sima choudhary" // changing the context
// console.log(user)

// function chai(){
//     console.log(this)
// }
// chai()


// const coffee = function (){
//     console.log(this)
// }
// coffee()

const drink =  () =>{
    console.log(this)
}
drink()

// const addThree = (num1,num2, num3) =>{
//     return num1+num2+num3 /**explicit return */
// }

// const addThree = (num1,num2, num3) => num1+num2+num3  /**implicit return */
const displayUser = () => ({username :"sima"})

//console.log(addThree(1,2,3))
console.log(displayUser())




