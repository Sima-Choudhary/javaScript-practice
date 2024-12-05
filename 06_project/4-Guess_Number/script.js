const randomNumber = parseInt(Math.random() * 100 + 1)

const submit = document.querySelector('#subt')
const userInput = document.querySelector('#guessField')
const guessslot = document.querySelector('.guesses')
const remaining = document.querySelector('.lastRessult')
const lowOrHi = document.querySelector('.lowOrHi')
const startOver = document.querySelector('.resultParas')

const p = document.createElement('p')

let prevguess = []
let numGuess = 1

let playGame = true;

if(playGame){
    submit.addEventListener("click",function (e){
        e.preventDefault()
        const guess = parseInt(userInput.value)
        valdidateGuess(guess)
    })
}

function valdidateGuess(guess){
    if(isNaN(guess)){
        alert('Please enter a valid number')
    }
    if(guess < 1){
        alert('Please enter number greater tha 1')
    }
    if(guess > 100){
        alert('Please enter number less than 100')
    }else{
        prevguess.push(guess)
        if(numGuess === 11){
            displayGuess(guess)
            displayMessage(`Game over!! Random No wa :${randomNumber} `)
            endGame()
        }else{
            displayGuess(guess)
            checkGuess(guess)
        }
    }
}

function checkGuess(guess){
    if(guess === randomNumber){
        displayMessage('You Guessed it !! Right')
    }else if(guess < randomNumber){
        displayMessage('The number is too low!!')
    }else if(guess > randomNumber){
        displayMessage('The number is too high!!')
    }
}

function displayGuess(guess){
    userInput.value = ''
    guessslot.innerHTML +=`${guess}, `;
    numGuess++;
    remaining.innerHTML=`${11 - numGuess}`;
}
function displayMessage(message){
    lowOrHi.innerHTML=`<h2>${message}</h2>`
    console.log(lowOrHi)
}

function endGame(){

}
function startGame(){

}

