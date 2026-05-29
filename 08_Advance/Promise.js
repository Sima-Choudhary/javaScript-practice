/**
 * A Promise is in one of these states:

pending: initial state, neither fulfilled nor rejected.
fulfilled: meaning that the operation was completed successfully.
rejected: meaning that the operation failed.

fetch("url").then().catch().finally()


The fetch() method takes one mandatory argument, the path to the resource you want to fetch. 
It returns a Promise that resolves to the Response to that request — as soon as the server responds with headers 
— even if the server response is an HTTP error status.
 */

const promiseOne = new Promise(function(resolve, reject){
    //Do an Async task 
    // DB calls , cryptography, network
    setTimeout(function(){
        console.log("Async task is complete");
        resolve()
    },1000)
})


promiseOne.then(function(){
    console.log("promise complete");
})

new Promise(function(resolve, reject){
    setTimeout(function(){
        console.log("Aync task 2")
        resolve()
    },1000)
    
}).then(function(){
    console.log("promise 2 complete")
})

const promiseThree =  new Promise(function(resolve,reject){
    setTimeout(function(){
        console.log("Async task 3")
        resolve({userName :"Sima", email: "sima@example.com" })
    },1000)
}).then(function (user){
    console.log("User: ", user)
})

const promiseFour = new Promise(function(resolve, reject){
    setTimeout(function(){
        const error = false;
        if(!error){
            resolve({userName:"sima", password : "123"})
        }else{
            reject("ERROR: Something went wrong")
        }
    },1000)
})

promiseFour.then(function(user){
    //console.log("User: ", user)
    return user.userName
}).then( (data) => {
    console.log(data)
}).catch(function(error){
    console.log(error)
}).finally(() =>{
    console.log("Promise is either resolved or rejected")
})



const promiseFive = new Promise(function(resolve, reject){
    setTimeout(function(){
        const error = false;
        if(!error){
            resolve({userName:"javaScript", password : "123"})
        }else{
            reject('ERROR: JS went wrong')
        }
    },1000)
})

async function consumePromise(){
    try{
        const repsonse = await promiseFive
        console.log( repsonse)
    }catch(error){
        console.log(error)
    }
}

consumePromise()

async function getAllUsers(){
    try{
        const response = await fetch('https://jsonplaceholder.typicode.com/users')
        const data = await response.json();
        console.log(data)
    }
    catch(error) {
        console.log(error)
    }
}
//getAllUsers()


fetch('https://jsonplaceholder.typicode.com/users')
.then( (response) => {
 return response.json()
}).then((data) => {
    console.log(data)
}).catch ((error) => console.log(error))
