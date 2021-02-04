//let tl = gsap.timeline({
//scrollTrigger: {
//trigger: '.dark',
//start: "center bottom"
//}
//});

//tl.from("img", {x: 200, opacity: 0, duration: 1.5})
//tl.from("content", {y: 500, opacity: 0, duration: 1.5}, "-=1")

//function swap() {
//gsap.to(hello2, {
//duration: 2,
//opacity: 0,
//scale: 0.8,
//ease: "back",
//delay: 2,
//})
//gsap.to(hello, {
//duration: 2,
//opacity: 0,
//scale: 0.8,
//ease: "back",
//delay: 2,
//})
//}

let tl = gsap.timeline()

tl.from("img", {duration: 30, opacity: 0, x: 200, y: -200, scale: 0.6, ease: "elastic", delay: 1})

tl.from(".hello1", {
    duration: 1,
    opacity: 0,
    scale: 0.7,
    y: -300,
    ease: "back",
    //delay: 2,
    //stagger: 2
}, "-=26")

tl.to(".hello1", {
    duration: 0.5,
    opacity: 0,
    scale: 0.7,
    y: 400,
    //ease: "expo",
    //delay: 2,
    //markers: true,
    //stagger: 2
    //onComplete: swap()
}, "-=23")

tl.to(".hello2", {
    duration: 3,
    opacity: 1,
    scale: 1,
    y: 250,
    ease: "elastic",
    //delay: 2,
    //markers: true,
    //stagger: 2
    //onComplete: swap()
}, "-=23")

tl.to(".hello2", {
    duration: 0.5,
    opacity: 0,
    scale: 0.7,
    y: 400,
    //ease: "expo",
    //delay: 2,
    //markers: true,
    //stagger: 2
    //onComplete: swap()
}, "-=20")

tl.to(".hello3", {
    duration: 3,
    opacity: 1,
    scale: 1,
    y: 250,
    ease: "elastic",
    //delay: 2,
    //markers: true,
    //stagger: 2
    //onComplete: swap()
}, "-=20")

tl.to(".hello3", {
    duration: 0.5,
    opacity: 0,
    scale: 0.7,
    y: 400,
    //ease: "expo",
    //delay: 2,
    //markers: true,
    //stagger: 2
    //onComplete: swap()
}, "-=20")

tl.to(".hello4", {
    duration: 3,
    opacity: 1,
    scale: 1,
    y: 250,
    ease: "elastic",
    //delay: 2,
    //markers: true,
    //stagger: 2
    //onComplete: swap()
}, "-=18")
