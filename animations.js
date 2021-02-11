// Particles

particlesJS.load('particles-js', 'particles.json', function () {
    console.log('particles.json loaded!');
});

// Cursor

const cursor = document.querySelector('.cursor');
document.addEventListener('mousemove', e => {
    cursor.setAttribute('style', 'top: ' + (e.pageY - 5) + 'px; left:' + (e.pageX - 4.1) + 'px;')
})

document.addEventListener('click', () => {
    cursor.classList.add("expand");

    setTimeout(() => {
        cursor.classList.remove("expand");
    }, 500)
})
