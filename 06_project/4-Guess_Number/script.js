let randomNumber = parseInt(Math.random() * 100 + 1)
console.log(randomNumber)
const submit = document.querySelector('#subt')
const userInput = document.querySelector('#guessField')
const guessslot = document.querySelector('.guesses')
const remaining = document.querySelector('.lastResult')
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
        if(numGuess === 10){
            displayGuess(guess)
            displayMessage(`Game over!! Random No was :${randomNumber} `)
            endGame()
        }else{
            checkGuess(guess)
            displayGuess(guess)
        }
    }
}

function checkGuess(guess){
    if(guess === randomNumber){
        displayMessage('You Guessed it !! Right')
        endGame()
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
    remaining.innerHTML= `${11 - numGuess}`;
}

function displayMessage(message){
    lowOrHi.innerHTML=`<h2>${message}</h2>`;
}

function endGame(){
    userInput.value = ''
    userInput.setAttribute('disabled','')
    p.classList.add('button')
    p.innerHTML = `<h2 id="newGame">Start new game </h2>`
    startOver.appendChild(p)
    playGame = false
    startGame()
}
function startGame(){
    const newGameButton = document.querySelector('#newGame')
    newGameButton.addEventListener('click',function (e) {
        randomNumber = parseInt(Math.random() * 100 + 1)
        prevguess = []
        numGuess = 1
        guessslot.innerHTML = ''
        remaining.innerHTML= `${11 - numGuess}`;
        userInput.removeAttribute('disabled')
        startOver.removeChild(p)
        displayMessage("")
        playGame = true
    })
}

