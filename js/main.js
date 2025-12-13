// swiper

var swiper = new Swiper(".mySwiper", {
    spaceBetween: 10,
    slidesPerView: 6,
    freeMode: true,
    watchSlidesProgress: true,
});
var swiper2 = new Swiper(".mySwiper2", {
    spaceBetween: 10,
    thumbs: {
        swiper: swiper,
    },
});

// burger-menu

const menuBtn = document.querySelector('.menu-button');
const menu = document.querySelector('.navbar-panel');

menuBtn.addEventListener('click', () => {
    menu.classList.toggle('is-open');
});

// close-menu

const menuCloseBtn = document.querySelector('.close-menu');
menuCloseBtn.addEventListener('click', () => {
    menu.classList.toggle('is-open');
});