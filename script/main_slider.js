const slider_one = document.querySelectorAll('.swiper-container_one');

slider_one.forEach((el) => {
	let mySwiper_one = new Swiper(el, {
		slidesPerView: 1,
		spaceBetween: 10,
		slideClass: 'swiper-slide_one',
		wrapperClass: 'swiper-wrapper_one',
		loop: true,
		centerMode: true,
		pagination: {
			el: '.swiper-pagination_one',
			clickable: true,
		},
		navigation: {
			nextEl: '.swiper-button-next_one',
			prevEl: '.swiper-button-prev_one',
		},
	})
})

