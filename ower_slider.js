const slider_app = document.querySelectorAll('.slider-container_app');


slider_app.forEach((el) => {

	let slider_app = new Swiper(el, {
		slidesPerView: 3,
		spaceBetween: 10,
		slideClass: 'swiper-slide_app',
		wrapperClass: 'swiper-wrapper_app',
		loop: true,
		centerMode: true,
        breakpoints: {
            1024: {
                slidesPerView: 3,
            },
            375: {
                slidesPerView: 1,
            }
        },
		navigation: {
			nextEl: '.swiper-button-next_four',
			prevEl: '.swiper-button-prev_four',
		},
	})
}

)