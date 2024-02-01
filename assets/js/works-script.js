ScrollTrigger.matchMedia({
    "(min-width: 1000px)": () => {

        let tl = gsap.timeline()
        
        // First
        let div0 = document.querySelector('.initial-bar')

        tl.to(div0, {
            immediateRender: false,
            scrollTrigger: {
                trigger: '#a',
                start: 'top top',
                end: '+=30% top',
                scrub: true
            },
            x: -612,
            ease: 'none'
        })

        let div1 = document.querySelector('.future-bar1')

        tl.to(div0, {
            scrollTrigger: {
                trigger: '#a',
                start: '+=30% top',
                end: 'bottom top',
                scrub: true,
                onLeave: () => {
                    div0.style.display = 'none'
                    div1.classList.add('bar')
                },
                onEnterBack: () => {
                    div0.style.display = 'block'
                    div1.classList.remove('bar')
                }
            },
            y: 908,
            opacity: 1,
            ease: 'none'
        })

        // Second

        tl.to(div1, {
            immediateRender: false,
            scrollTrigger: {
                trigger: '#b',
                start: 'top top',
                end: '+=30% top',
                scrub: true,
            },
            x: 612,
            ease: 'none'
        })

        let div2 = document.querySelector('.future-bar2')

        tl.to(div1, {
            immediateRender: false,
            scrollTrigger: {
                trigger: '#b',
                start: '+=30% top',
                end: 'bottom top',
                scrub: true, 
                onLeave: () => {
                    div1.style.display = 'none'
                    div2.classList.add('bar')
                },
                onEnterBack: () => {
                    div1.style.display = 'block'
                    div2.classList.remove('bar')
                }
            },
            y: 908,
            opacity: 1,
            ease: 'none'
        })

        // Third
        tl.to(div2, {
            immediateRender: false,
            scrollTrigger: {
                trigger: '#c',
                start: 'top top',
                end: '+=30% top',
                scrub: true
            },
            x: -612,
            ease: 'none'
        })

        let div3 = document.querySelector('.future-bar3')

        tl.to(div2, {
            immediateRender: false,
            scrollTrigger: {
                trigger: '#c',
                start: '+=30% top',
                end: 'bottom top',
                scrub: true, 
                onLeave: () => {
                    div2.style.display = 'none'
                    div3.classList.add('bar')
                },
                onEnterBack: () => {
                    div2.style.display = 'block'
                    div3.classList.remove('bar')
                }
            },
            y: 908,
            opacity: 1,
            ease: 'none'
        })

        // Fourth
        tl.to(div3, {
            immediateRender: false,
            scrollTrigger: {
                trigger: '#d',
                start: 'top top',
                end: '+=30% top',
                scrub: true,
            },
            x: 612,
            ease: 'none'
        })

        let div4 = document.querySelector('.future-bar4')

        tl.to(div3, {
            immediateRender: false,
            scrollTrigger: {
                trigger: '#d',
                start: '+=30% top',
                end: 'bottom top',
                scrub: true, 
                onLeave: () => {
                    div3.style.display = 'none'
                    div4.classList.add('bar')
                },
                onEnterBack: () => {
                    div3.style.display = 'block'
                    div4.classList.remove('bar')
                }
            },
            y: 908,
            opacity: 1,
            ease: 'none'
        })

        // Fifth
        tl.to(div4, {
            immediateRender: false,
            scrollTrigger: {
                trigger: '#e',
                start: 'top top',
                end: '+=30% top',
                scrub: true
            },
            x: -612,
            ease: 'none'
        })

        let div5 = document.querySelector('.future-bar5')

        tl.to(div4, {
            immediateRender: false,
            scrollTrigger: {
                trigger: '#e',
                start: '+=30% top',
                end: 'bottom top',
                scrub: true, 
                onLeave: () => {
                    div4.style.display = 'none'
                    div5.classList.add('bar')
                },
                onEnterBack: () => {
                    div4.style.display = 'block'
                    div5.classList.remove('bar')
                }
            },
            y: 908,
            opacity: 1,
            ease: 'none'
        })

        // Sixth
        tl.to(div5, {
            immediateRender: false,
            scrollTrigger: {
                trigger: '#f',
                start: 'top top',
                end: '+=30% top',
                scrub: true,
            },
            x: 612,
            ease: 'none'
        })

        let div6 = document.querySelector('.future-bar6')

        tl.to(div5, {
            immediateRender: false,
            scrollTrigger: {
                trigger: '#f',
                start: '+=30% top',
                end: 'bottom top',
                scrub: true, 
                onLeave: () => {
                    div5.style.display = 'none'
                    div6.classList.add('bar')
                },
                onEnterBack: () => {
                    div5.style.display = 'block'
                    div6.classList.remove('bar')
                }
            },
            y: 908,
            opacity: 1,
            ease: 'none'
        })

        // Seventh
        tl.to(div6, {
            immediateRender: false,
            scrollTrigger: {
                trigger: '#g',
                start: 'top top',
                end: '+=30% top',
                scrub: true
            },
            x: -612,
            ease: 'none'
        })

        let div7 = document.querySelector('.future-bar7')

        tl.to(div6, {
            immediateRender: false,
            scrollTrigger: {
                trigger: '#g',
                start: '+=30% top',
                end: 'bottom top',
                scrub: true, 
                onLeave: () => {
                    div6.style.display = 'none'
                    div7.classList.add('bar')
                },
                onEnterBack: () => {
                    div6.style.display = 'block'
                    div7.classList.remove('bar')
                }
            },
            y: 908,
            opacity: 1,
            ease: 'none'
        })

        // Eight
        tl.to(div7, {
            immediateRender: false,
            scrollTrigger: {
                trigger: '#h',
                start: 'top top',
                end: '+=30% top',
                scrub: true,
            },
            x: 612,
            ease: 'none'
        })

        let div8 = document.querySelector('.future-bar8')

        tl.to(div7, {
            immediateRender: false,
            scrollTrigger: {
                trigger: '#h',
                start: '+=30% top',
                end: 'bottom top',
                scrub: true, 
                onLeave: () => {
                    div7.style.display = 'none'
                    div8.classList.add('bar')
                },
                onEnterBack: () => {
                    div7.style.display = 'block'
                    div8.classList.remove('bar')
                }
            },
            y: 908,
            opacity: 1,
            ease: 'none'
        })

        // Ninth
        tl.to(div8, {
            immediateRender: false,
            scrollTrigger: {
                trigger: '#i',
                start: 'top top',
                end: '+=30% top',
                scrub: true
            },
            x: -612,
            ease: 'none'
        })
    }
})

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