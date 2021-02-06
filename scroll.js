// First section animations
let tl = gsap.timeline()

tl.from("#dev", {duration: 30, opacity: 0, x: 200, y: -200, scale: 0.6, ease: "elastic", delay: 1})

tl.from(".hello1", {
    duration: 1,
    opacity: 0,
    scale: 0.7,
    y: -300,
    ease: "back"
}, "-=26")

gsap.to("#hello .hide", {
    duration: 3,
    opacity: 1,
    scale: 1,
    y: 250,
    ease: "elastic",
    delay: 10,
    stagger: 4.4
})

gsap.to("#hello .fade", {
    duration: 0.5,
    opacity: 0,
    scale: 0.7,
    y: 245,
    ease: "expo",
    delay: 10,
    stagger: 4.4
})

// Second section animations
gsap.registerPlugin(ScrollTrigger);

// let sections = gsap.utils.toArray("section");

// gsap.to(sections, {
//     yPercent: -100 * (sections.length - 1),
ScrollTrigger.create({
    trigger: "#hello",
    start: "top top",
    end: () => "+=490",
    pinSpacing: false,
    // scrub: 1,
    // snap: 1 / (section.leght - 1),
    pin: true
    // }
})

let sidePages = gsap.utils.toArray(".panel");

gsap.to(sidePages, {
    // xPercent: -100 * (sidePages.length - 1),
    ease: "none",
    ScrollTrigger: {
        trigger: ".blue",
        pin: true,
        scrub: 1,
        snap: 1 / (sidePages.length - 1),
        end: () => "+=" +
            document.querySelector(".blue").offsetWidth
    }
})
