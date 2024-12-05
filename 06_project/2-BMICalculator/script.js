const form = document.querySelector('form')
form.addEventListener('submit',function (e){
    console.log(e)
    e.preventDefault();
    const height = parseInt(document.querySelector('#height').value)
    const weight = parseInt(document.querySelector('#weight').value)
    const result = document.querySelector('#result')
    let bmi;

    if(height === '' || height < 0 || isNaN(height)){
        result.innerHtml ='Please give valid height';
    }else if(weight === '' || weight < 0 || isNaN(weight)){
        result.innerHtml ='Please give valid weight';
    }else{
        bmi = (weight/((height*height)/10000)).toFixed(2)
        result.innerHTML = `<span> ${bmi} </span>`
    }
    
    const abc =document.querySelector('#weight-guide')
    const p = document.createElement('p')
    p.style.color = "#fff";
    
    if(bmi < 18.6){
        p.appendChild(document.createTextNode('under Weight'))
    }else if(bmi >= 18.6 && bmi <= 24.9){
        p.appendChild(document.createTextNode('Normal Weight'))
    }else{
        p.appendChild(document.createTextNode('over Weight'))
    }
    abc.appendChild(p)
})

