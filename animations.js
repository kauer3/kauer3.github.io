// Particles

particlesJS.load('particles-js', 'particles.json');


// GSAP

gsap.registerPlugin(ScrollTrigger, ScrollToPlugin);

ScrollTrigger.create({
    trigger: "body",
    pin: "#particles-js",
    pinSpacing: false
})

ScrollTrigger.create({
    trigger: "body",
    pin: "#controller",
    pinSpacing: false
})

const containers = gsap.utils.toArray('.container');
const titles = gsap.utils.toArray('.project-title');
const contents1 = gsap.utils.toArray('.content1');
const contents2 = gsap.utils.toArray('.content2');
const contents3 = gsap.utils.toArray('.content3');
const contents4 = gsap.utils.toArray('.content4');
const contents5 = gsap.utils.toArray('.content5');
const sections = gsap.utils.toArray('.snap-section');
// const section = document.querySelector('.section1');

document.querySelector("#smooth").addEventListener("click", function () {
    gsap.to(window, {duration: 2.5, ease: "elastic", scrollTo: ".section1"});
});

document.querySelector("#home").addEventListener("click", function () {
    gsap.to(window, {duration: 1.5, scrollTo: 0});
});

document.querySelector("#up").addEventListener("click", function () {
    const up = document.querySelectorAll('.targetUp');
    if (up.length > 0) {
        gsap.to(window, {duration: 1.5, ease: "back", scrollTo: ".targetUp"});
    }
});

document.querySelector("#down").addEventListener("click", function () {
    const down = document.querySelectorAll('.targetDown');
    if (down.length > 0) {
        gsap.to(window, {duration: 2, ease: "sine", scrollTo: ".targetDown"});
    }
});

// function changeClass() {
//     j}

// let n = 0;
// sections.forEach(section => {
//     n += 1;
//     switch (n) {

//         case 1:
//             // targetUp = document.querySelector("#wrapper")
//             targetDown = document.querySelector(".section1")
//             break;

//         case 2:
//             // targetUp = document.querySelector(".section1")
//             targetDown = document.querySelector(".section2")
//             break;

//         case 3:
//             // targetUp = document.querySelector(".section2")
//             targetDown = document.querySelector(".section3")
//             break;

//         case 4:
//             // targetUp = document.querySelector(".section3")
//             targetDown = document.querySelector(".section4")
//             break;

//         case 5:
//             // targetUp = document.querySelector(".section4")
//             targetDown = document.querySelector(".section1")
//             break;
//     }

ScrollTrigger.create({
    start: "top center",
    end: "bottom center",
    trigger: ".section1",
    onEnter: () => {
        // sections[-1].classList.add('targetUp');
        sections[1].classList.add('targetDown');
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
    onEnter: () => {
        sections[3].classList.add('targetUp');
        gsap.to("#down", {duration: 1, opacity: 0, scrollTo: {x: "-=200"}});
    },
    onLeaveBack: () => {
        sections[3].classList.remove('targetUp');
    }
});


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
                markers: true,
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
