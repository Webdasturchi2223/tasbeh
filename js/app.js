let btn = document.querySelector('.main-btn')
let resetBtn = document.querySelector('.reset-btn')
let timeBtn = document.querySelector('.time-btn')
let count = document.querySelector('.count')

btn.addEventListener('click', function(){
    count.innerText = Number(count.innerText) + 1
})

resetBtn.addEventListener('click', function(){
    count.innerText = 0
})

timeBtn.addEventListener('click', function(){
    document.querySelector('body').classList.toggle('night')
})