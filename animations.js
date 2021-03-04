// Particles

// particlesJS.load('particles-js', 'particles.json', function () {
//     console.log('particles.json loaded!');
// });

// Testing TsParticles instead of ParticlesJS
tsParticles.loadJSON('particles-js', 'particles.json');

// Cursor

gsap.registerPlugin(ScrollTrigger);
// gsap.to(sections, {
//     yPercent: -100 * (sections.length - 1),
ScrollTrigger.create({
    trigger: "body",
    start: "top top",
    end: "bottom bottom",
    pin: "#particles-js",
    pinSpacing: true
})

const projects = gsap.utils.toArray('.project');
const sections = gsap.utils.toArray('.snap-section');

let n = 0;
projects.forEach(project => {
    n += 1;
    if (n % 2 === 0) {
        origin = -800;
    } else {
        origin = 800;
    };
    gsap.from(project, {
        x: origin,
        opacity: 0,
        // yPercent: -1 / (6 - 1),
        scrollTrigger: {
            start: "center bottom ",
            end: "center center",
            trigger: project,
            scrub: true,
            toggleActions: "play reverse play reverse",
            snap: 1.5,
            // pin: true
            // snapTo: ".project", // snap to the closest label in the timeline
            // duration: {min: 0.2, max: 3}, // the snap animation should be at least 0.2 seconds, but no more than 3 seconds (determined by velocity)
            // delay: 0.2, // wait 0.2 seconds from the last scroll event before doing the snapping
            // ease: "none" // the ease of the snap animation ("power3" by default)
            // }
        }
    })
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
