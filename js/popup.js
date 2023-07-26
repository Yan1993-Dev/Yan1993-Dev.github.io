const popup = document.querySelector('.popup');
const btn = document.querySelector('.banner__btn_js');
const closeBtn = document.querySelector('.contact__form-close');

btn.addEventListener('click', function() {
    popup.classList.add('open');
});

closeBtn.addEventListener('click', function() {
    popup.classList.remove('open');
});