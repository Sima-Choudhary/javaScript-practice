//Functions

function myFun(name ="no one" ){
    if(!name){
        console.log("Please enter user name ")
        return 
    }
    return `${name} has logged in!`

}
console.log(myFun())

//Rest operators

function combineAllOrders(vale1,v1l2,...num){
    return num
}

console.log(combineAllOrders(200,300,400))

function handleObject(anyobject){
    return `Username is ${anyobject.username} and price is${anyobject.price}`
}

console.log(handleObject({username:"sima", price:2983}))