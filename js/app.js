
console.log(screen.width)
// buttons active classe

const btns = document.querySelectorAll('a');

const callEvent = (elements) => {
    elements.forEach((element) => {
        element.addEventListener('click', (e) => {
            btns.forEach(b => b.classList.remove('active'));
            element.classList.add('active');
        })
    })
}

callEvent(btns);

// on click button scroll to section
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        e.preventDefault();
        document.querySelector(this.getAttribute('href')).scrollIntoView({
            behavior: 'smooth'
        })
    })
})

// ---------------------------------------->

const sections = document.querySelectorAll('section')
const links = document.querySelectorAll('a')
const prevBtn = document.querySelector('#prev')
const nextBtn = document.querySelector('#next')



// //logic scroll
var index = 0;
const animationDurantion = 1000;

nextBtn.addEventListener('click', () => {
    index++;
    sections.forEach((section, i) => {
        if (i === index) {
            section.scrollIntoView({ behavior: 'smooth' });
        }
    })
})

prevBtn.addEventListener('click', () => {
    index--;
    sections.forEach((section, i) => {
        if (i === index) {
            section.scrollIntoView({ behavior: 'smooth' });
        }
    })
})

const timeframe = 1000;


function mouseSpeed() {
    const lastTime = 0;
    var now = new Date();
    if (now - lastTime >= timeframe) {
        lastTime = now;
        console.log(lastTime)
        return
    }
}


window.addEventListener('wheel', (e) => {
    mouseSpeed();
    const delta = e.wheelDelta;
    console.log(delta)
    let currentTime = new Date().getTime();

    if (currentTime - lastTime < animationDurantion) {
        e.preventDefault();
        return;
    }

    if (delta <= 0) {
        const nextSection = new Event('click');
        nextBtn.dispatchEvent(nextSection);

    } else if (delta >= 0) {
        const prevSection = new Event('click');
        prevBtn.dispatchEvent(prevSection);
    }
    lastTime = currentTime;
});


