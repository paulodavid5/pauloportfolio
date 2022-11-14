

var swiper = new Swiper(".swiper", {
    breakpoints: {

        320: {
            direction: "vertical",
            autoHeight: true,
            height: window.innerHeight,
            slidesPerView: 1,
            spaceBetween: 0,
            // mousewheel: true,
            pagination: {
                el: ".swiper-pagination",
                clickable: true,
            }
        },
        480: {
            direction: "vertical",
            autoHeight: true,
            height: window.innerHeight,
            slidesPerView: 1,
            spaceBetween: 0,
            // mousewheel: true,
            pagination: {
                el: ".swiper-pagination",
                clickable: true,
            }
        },
        768: {
            direction: "horizontal",
            // cssMode: true,
            width: window.innerWidth,
            slidesPerView: 1,
            spaceBetween: 0,
            navigation: {
                nextEl: ".swiper-button-next",
                prevEl: ".swiper-button-prev",
            },

            pagination: {
                el: ".swiper-pagination",
                clickable: true,
            },

        },
        1250: {
            direction: "horizontal",
            // cssMode: true,
            width: window.innerWidth,
            slidesPerView: 1,
            spaceBetween: 0,
            navigation: {
                nextEl: ".swiper-button-next",
                prevEl: ".swiper-button-prev",
            },

            pagination: {
                el: ".swiper-pagination",
                clickable: true,
            },
        }

    }

});

var swiper2 = new Swiper(".mySwiper", {
    effect: "coverflow",
    // grabcursor: true,
    centeredSlides: true,
    // direction: "horizontal",
    slidesPerView: "auto",
    coverflowEffect: {
        rotate: 40,
        stretch: 0,
        depth: 50,
        spaceBetween: 50,
        modifier: 1,
        slideShadows: true,
    },
    // loop: true,
    mousewheel: true,


    breakpoints: {

        320: {
            slidesPerView: "auto",
            pagination: {
                el: ".swiper-pagination",
                type: "progressbar",
                // clickable: true,
            },
        },
        480: {
            slidesPerView: "auto",
            pagination: {
                el: ".swiper-pagination",
                type: "progressbar",
                // clickable: true,
            },
        },
        768: {
            // width: window.innerWidth,
            slidesPerView: "auto",
            // loop: true,
            // coverflowEffect: {
            //     rotate: 10,
            //     stretch: 50,
            //     depth: 100,
            //     spaceBetween: 100,
            //     modifier: 1,
            //     slideShadows: true,
            // },
            pagination: {
                el: ".swiper-pagination",
            },
            scrollbar: {
                el: '.swiper-scrollbar',
                draggable: true,
            },
        },
        1250: {

            // width: window.innerWidth,
            slidesPerView: "auto",
            // loop: true,
            coverflowEffect: {
                rotate: 0,
                stretch: 50,
                depth: 0,
                spaceBetween: 100,
                modifier: 1,
                slideShadows: true,
            },
            pagination: {
                el: ".swiper-pagination",
            },
            scrollbar: {
                el: '.swiper-scrollbar',
                draggable: true,
            },
        }


    }
});

// click events

function openInNewTab(url) {
    window.open(url, '_blank').focus();
}



// navbar_link

// const navbar_link = document.querySelectorAll('a');
// console.log(navbar_link);

// const sections = document.querySelectorAll('section');





// document.querySelectorAll('a[href^="#"]').forEach(anchor => {
//     anchor.addEventListener('click', function (e) {
//         e.preventDefault();
//         const active = document.querySelector(this.getAttribute('id')).slideTo(swiper.slides[active]);

//         slideTo(swiper.slides[active]);
//         // .scrollIntoView({
//         //     behavior: 'smooth'
//         // })
//         console.log(anchor.getAttribute('id'));
//     })
// })

// swiper.slides[1]


// direction: "horizontal",
// slidesPerView: 1,
// spaceBetween: 0,
// mousewheel: true,
// pagination: {
//     el: ".swiper-pagination",
//     clickable: true,
// }


// console.log(screen.width)
// // buttons active classe
// // -------------------------------------------->
// // ---------------------------------------->
// const btns = document.querySelectorAll('a');

// const callEvent = (elements) => {
//     elements.forEach((element) => {
//         element.addEventListener('click', (e) => {
//             btns.forEach(b => b.classList.remove('active'));
//             element.classList.add('active');
//         })
//     })
// }

// callEvent(btns);
// // -------------------------------------------->
// // ---------------------------------------->
// // on click button scroll to section
// document.querySelectorAll('a[href^="#"]').forEach(anchor => {
//     anchor.addEventListener('click', function (e) {
//         e.preventDefault();
//         document.querySelector(this.getAttribute('href')).scrollIntoView({
//             behavior: 'smooth'
//         })
//     })
// })
// // -------------------------------------------->
// // ---------------------------------------->
// window.location.reload("sections[1]")

// const sections = document.querySelectorAll('section')
// const links = document.querySelectorAll('a')
// const prevBtn = document.querySelector('#prev')
// const nextBtn = document.querySelector('#next')
// const progressCircles = document.querySelectorAll('.circle')
// const progressCircle = document.querySelector('.circle')

// // ----------------------------
// // ----------------------------
// // ----------------------------
// // ----------------------------
// // PROGRESS CIRCLES LOGIC

// const callEvent = (elements) => {
//     elements.forEach((element) => {
//         element.addEventListener('click', (e) => {
//             progressCircles.forEach(c => c.classList.remove('active-circle'));
//             element.classList.add('active-circle');
//         })
//     })
// }

// callEvent(progressCircles);

// document.querySelectorAll('.circle[href^="#"]').forEach(anchor => {
//     anchor.addEventListener('click', function (e) {
//         e.preventDefault();
//         document.querySelector(this.getAttribute('href')).scrollIntoView({
//             behavior: 'smooth'
//         })
//     })
// })

// ----------------------------
// ----------------------------
// ----------------------------
// ----------------------------
// END PROGRESS CIRCLES LOGIC

// // //logic scroll
// let index = 0;
// // document.querySelector(`.circle-5`).style.backgroundColor = "#333333";
// // const animationDurantion = 1000;

// nextBtn.addEventListener('click', () => {
//     index++;
//     sections.forEach((section, i) => {
//         if (i === index) {
//             section.scrollIntoView({ behavior: 'smooth' });
//             // document.querySelector(`.navbar_link-${index}`).classList.add('active');
//             // document.querySelector(`.navbar_link-${index - 1}`).classList.remove('active');
//             document.querySelector(`.circle-${i + 1}`).classList.add('active-circle');
//             document.querySelector(`.circle-${i}`).classList.remove('active-circle');
//         } else if (index > 5) {
//             index = 0;
//             document.querySelector(`.circle-${i + 6}`).classList.remove('active-circle');
//             section.scrollIntoView({ left: '0', behavior: 'smooth' });
//             document.querySelector(`.circle-${i + 1}`).classList.add('active-circle');
//         }
//     })
// })

// prevBtn.addEventListener('click', () => {
//     index--;
//     sections.forEach((section, i) => {
//         if (i === index) {
//             section.scrollIntoView({ behavior: 'smooth' });
//             document.querySelector(`.circle-${i + 2}`).classList.remove('active-circle');
//             document.querySelector(`.circle-${i + 1}`).classList.add('active-circle');
//         } else if (index < 0) {
//             index = 5;
//             i = 5;
//             document.querySelector(`.circle-1`).classList.remove('active-circle');
//             document.querySelector(`.circle-${i + 1}`).classList.add('active-circle');
//             // document.querySelector(`.circle-${i + 2}`).classList.remove('active-circle');
//         }
//     })
// })

// // const timeframe = 1000;




// window.addEventListener('wheel', (e) => {

//     if (e.deltaY > 0) {
//         const nextSection = new Event('click');
//         nextBtn.dispatchEvent(nextSection);

//     } else if (e.deltaY < 0) {
//         const prevSection = new Event('click');
//         prevBtn.dispatchEvent(prevSection);
//     }



//     console.log(index);
// });

// var startY;
// var swipeY = false;
// var swiped = false;

// document.addEventListener('touchmove', (e) => {
//     e.preventDefault();
//     startY = e.targetTouches[0].pageY;
// }, false);

// document.addEventListener('touchstart', (e) => {
//     e.preventDefault();
//     if (!swiped) {
//         var diffY = e.changedTouches[0].pageY - startY;
//         console.log(diffY);
//         // check for final swipe condition
//         if (diffY < 0) {
//             const nextSection = new Event('click');
//             nextBtn.dispatchEvent(nextSection);
//         } else {
//             const prevSection = new Event('click');
//             prevBtn.dispatchEvent(prevSection);
//         };
//     };
// }, false);


