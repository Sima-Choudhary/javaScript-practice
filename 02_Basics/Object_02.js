//singleton
//const tinderUser = new Object()

//Non singleton object
//const tinderUser ={}

const tinderUser = {
    id : "123abc",
    name:"sima",
    isLoggedIn :false
}

//console.log(tinderUser)

const regularuser ={
    email:"some@gmail.com",
    fullname:{
        userfullname:{
            firstname: "hitesh",
            lastname:"choudhary"
        }
    }
}

//console.log(regularuser)
//console.log(regularuser.fullname.userfullname.firstname)

//const obj = {tinderUser,regularuser}
//const obj = Object.assign({},tinderUser,regularuser)
const obj = {...regularuser,...tinderUser}  /// using spread operator
console.log(obj)

const users =[
    {
        id : "123abc",
        name:"sima",
        isLoggedIn :false  
    },
    {
        id : "123abc",
        name:"sima",
        isLoggedIn :false  
    },
    {
        id : "123abc",
        name:"sima",
        isLoggedIn :false  
    },
    {
        id : "123abc",
        name:"sima",
        isLoggedIn :false  
    }
]
console.log(Object.keys(tinderUser))
console.log(Object.values(tinderUser))
console.log(Object.entries(tinderUser))
console.log(tinderUser.hasOwnProperty('isLoggedIn'))

// de- Sturctring of objects
const course = {
    courceName:"Java Script Tutorials",
    price: "999",
    courseInsturctor:"hitesh"
}

//general
course.courceName;

//de-structuring
const {courseInsturctor} = course
console.log(courseInsturctor)

//refering it with othername
const {courseInsturctor: Insturctor} = course
console.log(Insturctor)
console.log(courseInsturctor)