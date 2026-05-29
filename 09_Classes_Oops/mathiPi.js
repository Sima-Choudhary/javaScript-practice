
const descriptor =Object.getOwnPropertyDescriptor(Math,"PI")
console.log(descriptor)

const chai = {
    name : "ginger chai",
    price :240,
    isAvailable :true
}

//console.log(Object.getOwnPropertyDescriptor(chai,"name"))

Object.defineProperty(chai,"name",{
    writable : false,
    enumerable : false
})



console.log(Object.getOwnPropertyDescriptor(chai,"name"))

for (let [key, value] of Object.entries(chai)) {
    console.log(`${key} : ${value}`)
}

