const clock = document.getElementById("clock")
//const clock = document.querySelector("clock")

setInterval(function() {
    const date = new Date();
    clock.innerHTML = date.toLocaleTimeString()
},100)
