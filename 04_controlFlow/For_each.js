//For each does not return any value**
const arr = ["py", "ruby", "js", "java"]

// arr.forEach(function (value){
//     console.log(value)
// })


// arr.forEach( (value) => {
//     console.log(value)
// })

function printMe(value){
    console.log(value)
}


//arr.forEach(printMe)



arr.forEach( (value , index, arr) => {
    console.log(value, index, arr)
})

const mycoding = [
    {
        languageName:"javaScript" ,
        languageFilename:"js" 
    },
    {
        languageName: "Java",
        languageFilename:"java" 
    },
    {
        languageName:"Python",
        languageFilename:"py"
    },
    {
        languageName:"ruby" ,
        languageFilename: "rb"
    }
]

mycoding.forEach( (item) => {
    console.log(item.languageName)
})