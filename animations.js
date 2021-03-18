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

const containers = gsap.utils.toArray('.container');
const titles = gsap.utils.toArray('.test');
const contents1 = gsap.utils.toArray('.content1');
const contents2 = gsap.utils.toArray('.content2');
const contents3 = gsap.utils.toArray('.content3');
const contents4 = gsap.utils.toArray('.content4');
const contents5 = gsap.utils.toArray('.content5');
var sections = gsap.utils.toArray('.snap-section');
// const project5 = document.querySelector("#project5");

// TODO Finished implementing this
document.querySelector("#smooth").addEventListener("click", function () {
    e.preventDefault();
    // gsap.to(window, {duration: 2, scrollTo: "#projects"});
    // const section = document.querySelector(link.getAttribute("href"));
    // return window.scrollTo("#projects"));
    gsap.to(sections, 2, {scrollTo: "#smooth"});
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
    if (n % 2 === 0) {
        origin = -500;
    } else {
        origin = 500;
    };
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
    })

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
                toggleActions: "play reverse play reverse",
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
            toggleActions: "play reverse play reverse",
            duration: 2
        }
    })
});

ScrollTrigger.create({
    snap: {
        snapTo: 1 / 5,
        duration: 1,
        ease: "sine"
    }
});
