const box = document.querySelector('.box')

//box.computedStyleMap.backgroundColor = 'green'

box.classList.add('green_circle')

const button = document.querySelector('button')
const title = document.querySelector('h1')

button.addEventListener('click' , () => {
    button.classList.toggle('active')
    if (button.classList.contains('active')) {
        title.style.color = 'white'
    } else {
        title.style.color = 'transparent'
    }
    
})