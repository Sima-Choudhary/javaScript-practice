let myName = "hitesh     "
let myChannel = "chai    "

//console.log(myName.truelength)

let myHero =["thor", "spiderMan"]

let heroPower = {
    thor : "Hammer",
    spiderMan: "sticky"
}

Object.prototype.hitesh = function(){
    console.log("Hitesh added to all objects property")
}

//heroPower.hitesh()
//myHero.hitesh()

Array.prototype.heyHitesh = function(){
    console.log(`Hitesh say hello too only array objects`);
}

myHero.heyHitesh()

const user = {
    name:"Chai",
    email:"chai@gmail.com"
}


//Prototype Inheretance
const Teacher = {
    makeVideo: true
}

const TeacherSupport = {
    isAvailable :false
}

const TASupport ={
    makeAssignment :`js assignment`,
    fullTime : true,
    __proto__ : TeacherSupport
}

Teacher.__proto__ = user 


 // modern syntax
 Object.setPrototypeOf(TeacherSupport, Teacher)

 let anotherUsername = "ChaiAurCode     "
 String.prototype.trueLength = function(){
    console.log(`${this}`)
    console.log(`${this.name}`)
    console.log(`Ture length is: ${this.trim().length}`)

 }

 anotherUsername.trueLength()