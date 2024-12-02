//filter return a value

const myNums = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10]

let  newNum = myNums.filter( (num) =>{
    return (num > 4)
})
//console.log(newNum)

const arr = []
myNums.forEach( (num) => {
    if(num > 4)
        arr.push(num);
})

console.log(arr)

newNum = myNums.map( (num) => {return num+10})
console.log(newNum);

newNum = myNums
            .map( (num) => (num*10))
            .map( (num) => ( num+1))
            .filter( (num) => (num > 40))

console.log(newNum)


newNum  = myNums.reduce(function (accumulator, currentValue){
    console.log(`acculator ${accumulator} and current value is ${currentValue}`)
    return accumulator + currentValue
}) //here first wale is take as initailiser

newNum  = myNums.reduce(function (accumulator, currentValue){
    console.log(`acculator ${accumulator} and current value is ${currentValue}`)
    return accumulator + currentValue
},0) // initialiser


newNum  = myNums.reduce( (accumulator, currentValue) => accumulator + currentValue,0)
console.log(newNum)