ScrollTrigger.matchMedia({
    "(min-width: 1000px)": () => {
        gsap.to('#bar', {
            immediateRender: false,
            scrollTrigger: {
                trigger: '#header',
                start: "top top",
                endTrigger: "#footer",
                end: "bottom bottom",
                scrub: true
            },
            rotation: 360 * 3,
            ease: "none"
        })
    }
})

let tl1 = gsap.timeline({
    scrollTrigger: {
        trigger: '#header',
        start: 'top top',
        scrub: true
    }
})

tl1.fromTo('#header-go', { opacity: 1 }, { rotation: 360 * 2, y: 850, opacity: 0, ease: "none" })

let tl2 = gsap.timeline({
    scrollTrigger: {
        trigger: '#last-service',
        start: "240px 50%",
        endTrigger: "#footer",
        end: 'bottom bottom',
        scrub: true
    }
})

tl2.fromTo('#footer-go', { y: -850, opacity: 0 }, { rotation: 360 * 2, y: 0, opacity: 1, ease: "none" })

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
