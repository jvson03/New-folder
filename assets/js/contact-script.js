let getMenuBtn = document.querySelector('#menuBtn')
let menuEl = document.querySelectorAll('#menu-elements')
let navLinks = document.querySelectorAll('.nav-links')
let grey = document.querySelector('.grey-area')

getMenuBtn.addEventListener('click', () => {
    menuEl.forEach(el => {
        el.classList.add('hide-btn')
    })
    navLinks.forEach(link => {
        link.classList.add('open-menu')
    })
    grey.addEventListener('click', () => {
        navLinks.forEach(link => {
            link.classList.remove('open-menu')
        })
        menuEl.forEach(el => {
            el.classList.remove('hide-btn')
        })
    })
})