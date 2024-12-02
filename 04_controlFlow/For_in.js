const myObject = {
    js: "javaScript",
    rb: "rubi",
    py: "ptyhon"
}

for (const key in myObject) {
    console.log(key ,":- ", myObject[key])        
}

// for arrays
const arr = [1, 2, 3, 4, 5]
for (const i in arr) {
    console.log(i);
}


//for strings

const greetings = "hello"
for(const greet in greetings){
   console.log(greet)
}

//in map --> not srpported as map is not itterable
const map = new Map()
map.set('IN', 'India')
map.set('US', 'United State of America')
map.set('Fr', 'France')

for(const key in map){
    console.log(key ,':- ',map[key]);
}
