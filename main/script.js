const slider = document.querySelector('.swiper-container');
const slider_one = document.querySelector('.swiper-container_one');
const slider_two = document.querySelector('.swiper-container_two');
const slider_three = document.querySelector('.swiper-container_three');
const slider_four = document.querySelector('.slider-container_four');


let mySwiper = new Swiper(slider, {
	slidesPerView: 1,
	spaceBetween: 10,
	loop: true,
	centerMode: true,
	observer: true,
	observeParents: true,
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
})

let mySwiper_one = new Swiper(slider_one, {
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

let mySwiper_two = new Swiper(slider_two, {
	slidesPerView: 1,
	spaceBetween: 10,
	slideClass: 'swiper-slide_two',
	wrapperClass: 'swiper-wrapper_two',
	loop: true,
	pagination: {
		el: '.swiper-pagination_two',
		clickable: true,
	},
	navigation: {
		nextEl: '.swiper-button-next_two',
		prevEl: '.swiper-button-prev_two',
	},
})

let mySwiper_three = new Swiper(slider_three, {
	slidesPerView: 1,
	spaceBetween: 10,
	slideClass: 'swiper-slide_three',
	wrapperClass: 'swiper-wrapper_three',
	loop: true,
	pagination: {
		el: '.swiper-pagination_three',
		clickable: true,
	},
	navigation: {
		nextEl: '.swiper-button-next_three',
		prevEl: '.swiper-button-prev_three',
	},
})

let mySwiper_four = new Swiper(slider_four, {
	slidesPerView: 1,
	spaceBetween: 10,
	slideClass: 'slider-container_four',
	wrapperClass: 'swiper-container_four',
	loop: true,
	centerMode: true,
	pagination: {
		el: '.swiper-pagination_four',
		clickable: true,
	},
	navigation: {
		nextEl: '.swiper-button-next_four',
		prevEl: '.swiper-button-prev_four',
	},
})

// аккордеон
document.addEventListener('DOMContentLoaded', () => {
	const accordions = document.querySelectorAll('.accordion');

	accordions.forEach(el => {
		el.addEventListener('click', (e) => {
			const self = e.currentTarget;
			const control = self.querySelector('.accordion__control');
			const content = self.querySelector('.accordion__content');

			self.classList.toggle('open');

			// если открыт аккордеон
			if (self.classList.contains('open')) {
				control.setAttribute('aria-expanded', true);
				content.setAttribute('aria-hidden', false);
				content.style.maxHeight = content.scrollHeight + 'px';
			} else {
				control.setAttribute('aria-expanded', false);
				content.setAttribute('aria-hidden', true);
				content.style.maxHeight = null;
			}
		});
	});
});


// popup

var popup = document.querySelector('.popup');
var openPopup = document.querySelector('.open_popup_js')
var overlay = document.querySelector('.popup_overlay')
var popupCloseBtn = popup.querySelector('.popup_drive__btn')

openPopup.addEventListener('click', function(){
	popup.classList.add('popup_open');
	overlay.classList.add('join');

	popupCloseBtn.addEventListener('click', function(){
		popup.classList.remove('popup_open');
		overlay.classList.remove('join')
	})

})

// календарь

// бургер меню 
