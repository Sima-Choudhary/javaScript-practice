// for of loop
const arr = [1, 2, 3, 4, 5]
for (const i of arr) {
    console.log(i);
}

const greetings = "hello"
for(const greet of greetings){
    console.log(greet)
}

//map --> stores in order we enter value, no duplicate is stored

const map = new Map()
map.set('IN', 'India')
map.set('US', 'United State of America')
map.set('Fr', 'France')

console.log(map)

for(const [key,value] of map){
    console.log(key ,':- ',value);
}

const myObject = {
    game1: "cricket",
    game2: "football"
}

// does not support for other objects
// for(const [key, value] of myObject){ // myObject is not iterable
//     console.log(key ,':- ',value);
// }



