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
    trigger: "#particles-js",
    start: "top top",
    endTrigger: "footer",
    end: "bottom bottom",
    pin: true,
    pinSpacing: true
    // scrub: 1,
    // snap: 1 / (section.leght - 1),
    // }
})



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
