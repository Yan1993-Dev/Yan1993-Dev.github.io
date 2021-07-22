// попап об отправке заявки


// ищем попап
var thanks = document.querySelector('.thanks__popup');
// ищем кнопку открывающую отправляющую заявку
var openThanks = document.querySelector('.open_thanks_js')
// после открытия вкючаем оверлей
var overlay = document.querySelector('.popup_overlay')
// кнопка закрывает попап
var thanksCloseBtn = thanks.querySelector('.thanks_request__btn')


// навешиваем слушатель на клик
openThanks.addEventListener('click', function() {
    thanks.classList.add('thanks_open');
    overlay.classList.add('join')

    thanksCloseBtn.addEventListener('click', function() {
        thanks.classList.remove('thanks_open');
        overlay.classList.remove('join');
    })
})