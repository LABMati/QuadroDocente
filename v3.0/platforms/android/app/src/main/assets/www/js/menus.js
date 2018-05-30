var menuToggle = document.querySelector('div.menu-toggle')
var menu = document.querySelector('div.menu')
var allContainer = document.querySelector('div.all-container')

menuToggle.addEventListener('click', ev => {
    menu.style.display = 'block';
    allContainer.style.left = '0%'
})

allContainer.addEventListener('click', ev => {
    menu.style.display = 'none'
    allContainer.style.left = '-100%'
})
