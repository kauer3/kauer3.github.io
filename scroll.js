// First section animations

let tl = gsap.timeline()

tl.from("#dev", {duration: 30, opacity: 0, x: 200, y: -200, scale: 0.6, ease: "elastic", delay: 1})

tl.from(".hello1", {
    duration: 1,
    opacity: 0,
    scale: 0.7,
    y: -300,
    ease: "back"
    // delay: 4,
    // stagger: 3
}, "-=26")

gsap.to("#hello .hide", {
    duration: 3,
    opacity: 1,
    scale: 1,
    y: 250,
    ease: "elastic",
    delay: 10,
    //markers: true,
    stagger: 4.4
    //onComplete: swap()
})

gsap.to("#hello .fade", {
    duration: 0.5,
    opacity: 0,
    scale: 0.7,
    y: 245,
    ease: "expo",
    delay: 10,
    //markers: true,
    stagger: 4.4
    //onComplete: swap()
})

// Second section animations
gsap.registerPlugin(ScrollTrigger);

ScrollTrigger.create({
    trigger: "#hello",
    start: "top top",
    end: "+=490px",
    pinSpacing: false,
    pin: true
})
