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
