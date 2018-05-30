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

var arrows = document.querySelectorAll('.panel-heading')

for (let i = 0; i < arrows.length; i++) {
    arrows[i].addEventListener('click', ev=>{
        if (!arrows[i].children[1].classList.contains('rotate')) {
            arrows[i].children[1].className += ' rotate';
        }else{
            arrows[i].children[1].className += 'fas fa-sort-down';
        }
    })
}