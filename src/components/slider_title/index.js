// const sliders = document.querySelectorAll('.swiper-container');


// sliders.forEach((el) => {
// 	let mySwiper = new Swiper (el, {
// 		slidesPerView: 1,
// 		spaceBetween: 10,
// 		loop: true,
// 		centerMode: true,
// 		observer: true,
// 		observeParents: true,
// 		lazy: true,
// 		keyboard: {
// 			enabled: true
// 		},
// 		pagination: {
// 			el: '.swiper_pagination',
// 			clickable: true,
// 			type : 'custom',
// 			bulletClass:'slider_img_title',
// 		  },
// 		navigation: {
// 			nextEl: '.swiper-button-next',
// 			prevEl: '.swiper-button-prev',
// 		},
// 	})
// })

const swiper = new Swiper('.swiper-container');

	let mySwiper = new Swiper(slider,{
		slidesPerView: 1,
		spaceBetween: 10,
		loop: true,
		centerMode: true,
		observer: true,
		observeParents: true,
		lazy: true,
		keyboard: {
			enabled: true
		},
		pagination: {
			el: '.swiper_pagination',
			clickable: true,
			type : 'custom',
			bulletClass:'slider_img_title',
		  },
		navigation: {
			nextEl: '.swiper-button-next',
			prevEl: '.swiper-button-prev',
  },
});