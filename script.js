// script.js for NYC Mobile Care
// Swiper for Before & After Gallery
var swiper = new Swiper(".mySwiper", {
    loop: true,
    autoplay: {
        delay: 4000,
        disableOnInteraction: false,
    },
    pagination: {
        el: ".swiper-pagination",
        clickable: true,
    },
    effect: "fade",
    fadeEffect: {
        crossFade: true
    },
});
// Swiper for Customer Review Slider
var reviewSwiper = new Swiper(".reviewSwiper", {
    loop: true,
    autoplay: {
        delay: 5000,
        disableOnInteraction: false,
    },
    pagination: {
        el: ".reviewSwiper .swiper-pagination",
        clickable: true,
    },
    effect: "slide"
});
// Fade-in animation on scroll
function fadeInOnScroll() {
    var fadeEls = document.querySelectorAll('.fade-in');
    var windowHeight = window.innerHeight;
    fadeEls.forEach(function(el) {
        var rect = el.getBoundingClientRect();
        if (rect.top < windowHeight - 60) {
            el.classList.add('visible');
        }
    });
}
window.addEventListener('scroll', fadeInOnScroll);
window.addEventListener('DOMContentLoaded', fadeInOnScroll);
