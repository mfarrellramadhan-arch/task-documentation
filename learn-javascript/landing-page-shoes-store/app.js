const btnOpt1 = document.getElementById('opt1')
const btnOpt2 = document.getElementById('opt2')
const btnOpt3 = document.getElementById('opt3')
const cardBg = document.getElementById('card1')

btnOpt1.addEventListener('click', () => {
    cardBg.style.backgroundColor = 'black'
})

btnOpt2.addEventListener('click', () => {
    cardBg.style.backgroundColor = 'aqua'
})

btnOpt3.addEventListener('click', () => {
    cardBg.style.backgroundColor = 'burlywood'
})