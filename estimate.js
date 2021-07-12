// кнопка заявки

var estimate = document.querySelector('.estimate');
var estimateBtn = document.querySelector('.estimate_btn__js')
var overlay = document.querySelector('.popup_overlay')
var estimateCloseBtn = estimate.querySelector('.popup_request__btn')


estimateBtn.addEventListener('click', function(){
	estimate.classList.add('estimate_open');
	overlay.classList.add('join');

	estimateCloseBtn.addEventListener('click', function(){
		estimate.classList.remove('estimate_open');
		overlay.classList.remove('join');
	})
})