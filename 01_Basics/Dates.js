
let myDate = new Date();
console.log(myDate)
console.log(myDate.toString())
console.log(myDate.toDateString())
console.log(myDate.toISOString())
console.log(myDate.toLocaleDateString())
console.log(myDate.toLocaleString())

let mycreateDate = new Date(2023,1,14)
console.log(mycreateDate.toDateString())

let myTimeStamp = Date.now()

console.log(myTimeStamp)
console.log(mycreateDate.getTime())
console.log(Math.floor(Date.now()/1000))

console.log(mycreateDate.toLocaleString('default',{
    weekday:"long"
}))