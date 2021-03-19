// Particles

particlesJS.load('particles-js', 'particles.json');


// GSAP

gsap.registerPlugin(ScrollTrigger, ScrollToPlugin);

// CustomEase.create("custom", "M0,0 C0.47,0.622 0.579,1.065 0.676,1.066 0.714,1.066 0.84,0.966 0.888,0.966 0.962,0.966 0.971,1 1,1 ");
// CustomEase.create("hop", "M0,0.005 C0,0.005 0.056,0.445 0.175,0.445 0.294,0.445 0.332,0 0.332,0 0.332,0 0.414,1 0.671,1 0.991,1 1,0 1,0");

// gsap.set("#controller", {scale: 1, x: 50});
// gsap.timeline()


// gsap.to("#controller li", {opacity: 0});
// let tweenUp = gsap.fromTo("#up", {opacity: 0}, {opacity: 1, duration: 0.5});
// let tweenDown = gsap.fromTo("#down", {opacity: 0}, {opacity: 1, duration: 0.5});

ScrollTrigger.create({
    trigger: "body",
    pin: "#particles-js",
    pinSpacing: false
});

ScrollTrigger.create({
    trigger: "body",
    pin: "#controller",
    pinSpacing: false
});

const containers = gsap.utils.toArray('.container');
const titles = gsap.utils.toArray('.project-title');
const contents1 = gsap.utils.toArray('.content1');
const contents2 = gsap.utils.toArray('.content2');
const contents3 = gsap.utils.toArray('.content3');
const contents4 = gsap.utils.toArray('.content4');
const contents5 = gsap.utils.toArray('.content5');
const sections = gsap.utils.toArray('.snap-section');
// const section = document.querySelector('.section1');

document.querySelector("#work").addEventListener("click", function () {
    gsap.to(window, {duration: 2, ease: "power4.inOut", scrollTo: ".section1"});
});

document.querySelector("#home").addEventListener("click", function () {
    gsap.to(window, {duration: 2, ease: "power1.inOut", scrollTo: 0});
});

document.querySelector("#up").addEventListener("click", function () {
    // const up = document.querySelectorAll('.targetUp');
    gsap.to(window, {duration: 1, ease: "power1.inOut", scrollTo: ".targetUp"});
});

document.querySelector("#down").addEventListener("click", function () {
    const down = document.querySelectorAll('.targetDown');
    if (down.length > 0) {
        gsap.to(window, {duration: 2, ease: "back", scrollTo: ".targetDown"});
    }
});

ScrollTrigger.create({
    start: "top center",
    end: "bottom center",
    trigger: ".section1",
    onEnter: () => {
        // sections[-1].classList.add('targetUp');
        sections[1].classList.add('targetDown');
        // tweenDown.reverse();
        // tweenControllers.play();
    },
    onLeave: () => {
        // sections[-1].classList.remove('targetUp');
        sections[1].classList.remove('targetDown');
    },
    onEnterBack: () => {
        // sections[-1].classList.add('targetUp');
        sections[1].classList.add('targetDown');
    },
    onLeaveBack: () => {
        // sections[-1].classList.remove('targetUp');
        sections[1].classList.remove('targetDown');
        // tweenControllers.reverse();
    }
});


ScrollTrigger.create({
    start: "top center",
    end: "bottom center",
    trigger: ".section2",
    onEnter: () => {
        sections[0].classList.add('targetUp');
        sections[2].classList.add('targetDown');
    },
    onLeave: () => {
        sections[0].classList.remove('targetUp');
        sections[2].classList.remove('targetDown');
    },
    onEnterBack: () => {
        sections[0].classList.add('targetUp');
        sections[2].classList.add('targetDown');
    },
    onLeaveBack: () => {
        sections[0].classList.remove('targetUp');
        sections[2].classList.remove('targetDown');
    }
});


ScrollTrigger.create({
    start: "top center",
    end: "bottom center",
    trigger: ".section3",
    onEnter: () => {
        sections[1].classList.add('targetUp');
        sections[3].classList.add('targetDown');
    },
    onLeave: () => {
        sections[1].classList.remove('targetUp');
        sections[3].classList.remove('targetDown');
    },
    onEnterBack: () => {
        sections[1].classList.add('targetUp');
        sections[3].classList.add('targetDown');
    },
    onLeaveBack: () => {
        sections[1].classList.remove('targetUp');
        sections[3].classList.remove('targetDown');
    }
});

ScrollTrigger.create({
    start: "top center",
    end: "bottom center",
    trigger: ".section4",
    onEnter: () => {
        sections[2].classList.add('targetUp');
        sections[4].classList.add('targetDown');
    },
    onLeave: () => {
        sections[2].classList.remove('targetUp');
        sections[4].classList.remove('targetDown');
    },
    onEnterBack: () => {
        sections[2].classList.add('targetUp');
        sections[4].classList.add('targetDown');
    },
    onLeaveBack: () => {
        sections[2].classList.remove('targetUp');
        sections[4].classList.remove('targetDown');
    }
});

ScrollTrigger.create({
    start: "top center",
    end: "bottom center",
    trigger: ".section5",
    markers: true,
    onEnter: () => {
        sections[3].classList.add('targetUp');
        // tweenDown.play();
    },
    onLeaveBack: () => {
        sections[3].classList.remove('targetUp');
        // tweenDown.reverse();
    }
});

// let tweenDown = gsap.to("#down", {opacity: 0});
// let tweenControllers = gsap.fromTo("#controller li", {scale: 0, x: 50}, {opacity: 1, scale: 1, x: 0, duration: 0.4, stagger: 0.2, ease: "back"});

gsap.from("#controller li", {
    x: 50,
    opacity: 0,
    scale: 0,
    stagger: 0.1,
    ease: "back",
    scrollTrigger: {
        start: "top center",
        end: "top center",
        trigger: ".section1",
        // scrub: 1,
        toggleActions: "play none reverse none",
        duration: 1,
        // toggleClass: {targets: targetUp, className: "targetUp"},
        // toggleClass: {targets: targetDown, className: "targetDown"}
    }
})

gsap.to("#down", {
    x: 50,
    opacity: 0,
    scale: 0,
    ease: "back",
    scrollTrigger: {
        start: "top center",
        end: "top center",
        trigger: ".section5",
        // scrub: 1,
        toggleActions: "play none reverse none",
        duration: 0.4,
        // toggleClass: {targets: targetUp, className: "targetUp"},
        // toggleClass: {targets: targetDown, className: "targetDown"}
    }
})


let n = 0;
let i = 0;
let contents = []
let origin;
containers.forEach(container => {
    n += 1;
    switch (n) {

        case 1:
            contents = gsap.utils.toArray('.content1');
            break;

        case 2:
            contents = gsap.utils.toArray('.content2');
            break;

        case 3:
            contents = gsap.utils.toArray('.content3');
            break;

        case 4:
            contents = gsap.utils.toArray('.content4');
            break;

        case 5:
            contents = gsap.utils.toArray('.content5');
            break;
    }
    // if (n % 2 === 0) {
    //     origin = -500;
    // } else {
    //     origin = 500;
    // };
    gsap.from(container, {
        css: {
            height: 0,
            opacity: 0,
        },
        scrollTrigger: {
            start: "bottom bottom",
            end: "center center",
            trigger: container,
            scrub: 0.5,
            toggleActions: "play reverse play reverse",
        }
    });

    contents.forEach(content => {
        i += 1;
        if (i % 2 === 0) {
            origin = -1000;
        } else {
            origin = 1000;
        };
        gsap.from(content, {
            x: origin,
            opacity: 0,
            scrollTrigger: {
                start: "top center+=100px",
                end: "+=100px",
                trigger: container,
                scrub: 2,
                toggleActions: "restart pause reverse pause",
                duration: 2
            }
        })
    });
});

titles.forEach(title => {
    n += 1;
    if (n % 2 === 0) {
        origin = -700;
    } else {
        origin = 700;
    };
    gsap.from(title, {
        x: origin,
        opacity: 0,
        scrollTrigger: {
            start: "50%-=800px",
            end: "top center",
            trigger: title,
            scrub: 0.1,
            toggleActions: "restart pause reverse pause",
            duration: 2,
            // toggleClass: {targets: targetUp, className: "targetUp"},
            // toggleClass: {targets: targetDown, className: "targetDown"}
        }
    })
});

// titles.forEach(title => {
//     n += 1;
//     if (n % 2 === 0) {
//         origin = -700;
//     } else {
//         origin = 700;
//     };
//     gsap.from(title, {
//         x: origin,
//         opacity: 0,
//         scrollTrigger: {
//             start: "50%-=800px",
//             end: "top center",
//             trigger: title,
//             scrub: 0.1,
//             toggleActions: "play reverse play reverse",
//             duration: 2
//         }
//     })
// });

ScrollTrigger.create({
    snap: {
        snapTo: 1 / 5,
        duration: 1,
        ease: "sine"
    }
});
