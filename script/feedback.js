const slider__feedback = document.querySelector('.swiper-container_feedback');

let mySwiper_one = new Swiper('.swiper-container_feedback', {
    loop: true,
    slidesPerView:3,
    spaceBetween:10,
    lazy: true,
    autoplay: {
        delay: 3500,
    },
    breakpoints: {
        1024: {
            slidesPerView: 3,
        },
        319: {
            slidesPerView: 1,
        }
},
    slideClass: 'swiper-slide_feedback',
    wrapperClass: 'swiper-wrapper_feedback',
});
