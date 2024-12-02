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

/********************************************scope of function with and without variable *************************/
console.log(addOne(3))

function addOne(num){
    return num+1;
}

//console.log(addTwo(4))    /**Cannot acces the variable before initialization ******/
const addTwo = function(num){
    return num+2
}


