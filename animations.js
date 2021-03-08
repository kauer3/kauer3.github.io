// Particles

particlesJS.load('particles-js', 'particles.json', function () {
    console.log('particles.json loaded!');
});

// Testing TsParticles instead of ParticlesJS
// tsParticles.loadJSON('particles-js', 'particles.json');

// Cursor

gsap.registerPlugin(ScrollTrigger);
// gsap.to(sections, {
//     yPercent: -100 * (sections.length - 1),
ScrollTrigger.create({
    trigger: "body",
    // start: "top top",
    // end: "bottom bottom",
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
        // x: origin,
        css: {
            height: 0,
            width: "-=250",
            // backgroundColor: "transparent"
            opacity: 0,
        },
        // yPercent: -1 / (6 - 1),
        // pin: true,
        scrollTrigger: {
            start: "center bottom",
            end: "center center",
            trigger: container,
            scrub: 1.5,
            toggleActions: "play reverse play reverse",
            // duration: 0.5
            // markers: true,
            // pin: true
            // snap: {
            //     snapTo: sections//".container", // snap to the closest label in the timeline
            // duration: {min: 0.2, max: 3}, // the snap animation should be at least 0.2 seconds, but no more than 3 seconds (determined by velocity)
            // delay: 0.2, // wait 0.2 seconds from the last scroll event before doing the snapping
            // ease: "none" // the ease of the snap animation ("power3" by default)
            // }
            // duration: 2
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
            // yPercent: -1 / (6 - 1),
            // pin: true,
            scrollTrigger: {
                start: "top center",
                end: "top center",
                trigger: container,
                scrub: 3,
                toggleActions: "play reverse play reverse",
                // duration: 0.5
                // markers: true,
                // pin: true
                // snap: {
                //     snapTo: sections//".content", // snap to the closest label in the timeline
                // duration: {min: 0.2, max: 3}, // the snap animation should be at least 0.2 seconds, but no more than 3 seconds (determined by velocity)
                // delay: 0.2, // wait 0.2 seconds from the last scroll event before doing the snapping
                // ease: "none" // the ease of the snap animation ("power3" by default)
                // }
                duration: 2
            }
        })
    });
});

titles.forEach(title => {
    n += 1;
    if (n % 2 === 0) {
        origin = -500;
    } else {
        origin = 500;
    };
    gsap.from(title, {
        x: origin,
        opacity: 0,
        // yPercent: -1 / (6 - 1),
        // pin: true,
        scrollTrigger: {
            start: "50%-=800px",
            end: "top center",
            trigger: title,
            scrub: 0.4,
            toggleActions: "play reverse play reverse",
            // duration: 0.5
            // markers: true,
            // pin: true
            // snap: {
            //     snapTo: sections//".title", // snap to the closest label in the timeline
            // duration: {min: 0.2, max: 3}, // the snap animation should be at least 0.2 seconds, but no more than 3 seconds (determined by velocity)
            // delay: 0.2, // wait 0.2 seconds from the last scroll event before doing the snapping
            // ease: "none" // the ease of the snap animation ("power3" by default)
            // }
            duration: 2
        }
    })
});

// contents.forEach(content => {
//     n += 1;
//     if (n % 2 === 0) {
//         origin = -1000;
//     } else {
//         origin = 1000;
//     };
//     gsap.from(content, {
//         x: origin,
//         opacity: 0,
//         // yPercent: -1 / (6 - 1),
//         // pin: true,
//         scrollTrigger: {
//             start: "center center",
//             end: "top center",
//             trigger: content,
//             scrub: 2,
//             toggleActions: "play reverse play reverse",
//             // duration: 0.5
//             // markers: true,
//             // pin: true
//             // snap: {
//             //     snapTo: sections//".content", // snap to the closest label in the timeline
//             // duration: {min: 0.2, max: 3}, // the snap animation should be at least 0.2 seconds, but no more than 3 seconds (determined by velocity)
//             // delay: 0.2, // wait 0.2 seconds from the last scroll event before doing the snapping
//             // ease: "none" // the ease of the snap animation ("power3" by default)
//             // }
//             duration: 2
//         }
//     })
// });

ScrollTrigger.create({
    snap: {
        snapTo: 1 / 5,
        duration: 2,
        ease: "back"
    }
});

// gsap.to("#first-project", {
//     ScrollTrigger: {
//         trigger: "#first-project",
//         start: "center top",
//         end: "bottom top",
//         scrub: 1,
//         pin: true,
//         markers: true
//     },
//     x: -500,
//     rotation: 180,
//     ease: "none",
//     duration: 3,
//     toggleActions: "play none reverse none"
// });

// const cursor = document.querySelector('.cursor');
// document.addEventListener('mousemove', e => {
//     cursor.setAttribute('style', 'top: ' + (e.pageY - 5) + 'px; left:' + (e.pageX - 4.1) + 'px;')
// })

// document.addEventListener('click', () => {
//     cursor.classList.add("expand");

//     setTimeout(() => {
//         cursor.classList.remove("expand");
//     }, 500)
// })
