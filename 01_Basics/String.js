const name = "sima"
const roll = 234

console.log(`hello my name is ${name} and my roll no is ${roll}`)

const gameName = new String("Fun_Monday")
console.log(gameName.charAt(4))
console.log(gameName.substring(2,8))
console.log(gameName.slice(-1,4))  //negative index is also allowd
console.log(gameName.split('_')) //converts into array
console.log(gameName.trim())

const url= "https://sima.com/sima%20choudhary"
console.log(url.replace("%20", "-"))
console.log(url.includes('sima'))
console.log(gameName.repeat(2))

const Balance = new Number(100)
console.log(Balance)

console.log(Balance.toFixed(2))
console.log(Balance.toString().length)

const otherNumber = 2657631.89212
console.log(otherNumber.toPrecision(5))
console.log(otherNumber.toLocaleString())
console.log(otherNumber.toLocaleString('en-IN'))


//********************  Math    ***********/
console.log(Math.abs(-4))
console.log(Math.PI)
console.log(Math.floor(4.8))

console.log(Math.random())
console.log(Math.random()*10 +1)
console.log(Math.floor(Math.random()*10 ) +1)

const min =10
const max = 20
console.log(Math.floor(Math.random()*(max - min +1)+ min))

