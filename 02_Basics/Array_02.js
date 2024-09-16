//Array

const marbalHeros =["thor","Ironman","Superman"]
const dcHeros =["superman", "flash", "batman"]

// marbalHeros.push(dcHeros);
// console.log(marbalHeros)

// const res =marbalHeros.concat(dcHeros)
// console.log(res)

const res2 =[...marbalHeros,...dcHeros]   /********spread******/
console.log(res2)

const newArr = [1,4,3,[6,8,3],[2,5,8,[4,6,7]]]
const res3 = newArr.flat(Infinity)
console.log(res3)

// Helpful in scrabbing
console.log(Array.isArray("sima"))
console.log(Array.from("Hitesh"))
console.log(Array.from({name:"sima", roll:233}))

let score1 = 100,score2 = 200,score3 = 300;
console.log(Array.of(score1,score2,score3))