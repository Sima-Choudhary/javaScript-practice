//Immediately Invoke  Function Expressions(IIFE)

(function Chai() {
console.log(`connected to db`)
})();

((name) => {
    console.log(`connected to db ,${name}`)
    })("sima");
    
console.log()    
//javaScript is single threaded 

/**JavaScript  execution context 
 * {} -->global Execution Context (this) is created .for windows :window
 * ---> Function Ececution Context
 * ---> Eval Execution Context
 * 
 * * How the program gets executed 
 * -->Memory creation Phase/ Creation Phase
 * -->Execution Phase
 * 
 * 
 * 1. Global execution --> this
 * 2. Memory creation phase(First cycle)
 *      -> All variables are assigned with undefined value
 *      -> function name stored the function definition(body)
 * 3. Execution Phase (Second cycle)
 *      ->Given values are assigned tothe variables
 *      ->funcation call creates new excecutional context / sandbox(new variable environment + Execution thread) and return value to global objeact
 *              
*/
