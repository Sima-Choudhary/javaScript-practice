//Arrays

const arr = new Array(1,2,3,4)
console.log(arr)
arr.push(45)

// Shift and unshift
arr.unshift(23)
arr.shift()
console.log(arr)

//join()

//const newArr = arr.join()
//console.log(newArr)
//console.log(typeof newArr)

//slice and splice

console.log(`return value of splice ${arr.slice(1,2)} and original array is ${arr}`)
console.log(`return value of splice ${arr.splice(1,2)} and original array is ${arr}`)


