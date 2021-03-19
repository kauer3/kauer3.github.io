// Particles

particlesJS.load('particles-js', 'particles.json', function () {
    console.log('particles.json loaded!');
});


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
// const sections = gsap.utils.toArray('.snap-section');
const section = document.querySelector('.section1');

document.querySelector("#smooth").addEventListener("click", function () {
    gsap.to(window, {duration: 1, scrollTo: ".section1"});
});

document.querySelector("#home").addEventListener("click", function () {
    gsap.to(window, {duration: 1.5, scrollTo: 0});
});

// document.querySelector("#up").addEventListener("click", function () {
//     gsap.to(window, {duration: 1.5, scrollTo: ".targetUp"});
// });

document.querySelector("#down").addEventListener("click", function () {
    // e.preventDefault();
    // gsap.to(window, {duration: 2, scrollTo: "#projects"});
    // const section = document.querySelector(link.getAttribute("href"));
    // return window.scrollTo("#projects"));
    // gsap.to(window, 1, {scrollTo: section});
    gsap.to(window, {duration: 1.5, scrollTo: ".targetDown"});
});

// function changeClass() {
//     j}

// sections.forEach(section => {
// n += 1;
// switch (n) {

// case 1:
//     targetUp = "";
//     targetDown = document.querySelector(".section2")
//     break;

// case 2:
//     targetUp = document.querySelector(".section1")
//     targetDown = document.querySelector(".section3")
//     break;

// case 3:
//     targetUp = document.querySelector(".section2")
//     targetDown = document.querySelector(".section4")
//     break;

// case 4:
//     targetUp = document.querySelector(".section3")
//     targetDown = document.querySelector(".section5")
//     break;

// case 5:
//     targetUp = document.querySelector(".section4")
//     targetDown = "";
//     break;
// }
// gsap.from(container, {
//     css: {
//         height: 0,
//         opacity: 0,
//     },

scrollTrigger.create({
    start: "top top",
    end: "bottom bottom",
    trigger: ".section1",
    markers: true,
    onEnter: () => {
        // document.querySelector(".section1").className += 'targetDown';
        window.alert("ok");
    }
});

ScrollTrigger.create({
    trigger: ".section1",
    start: "top top",
    // endTrigger: "#otherID",
    end: "bottom 50%+=100px",
    onToggle: self => console.log("toggled, isActive:", self.isActive),
    onUpdate: self => {
        console.log("progress:", self.progress.toFixed(3), "direction:", self.direction, "velocity", self.getVelocity());
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
                start: "top center",
                end: "top center",
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
