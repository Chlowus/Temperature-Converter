let but1 = document.querySelector('#c-input')
let span1 = document.querySelector('#f-input')
let Button1 = document.querySelector('#button')
Button1.addEventListener('click', ()=>{
    span1.innerHTML = [(but1.value * 9/5)+ 32]
})