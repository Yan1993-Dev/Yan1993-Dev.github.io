// подсказка для телефона, какой формат вводить
let selector = document.querySelectorAll('input[type="tel"]');
let im = new Inputmask('+7 (999) 999-99-99');
im.mask(selector);


// поиск формы на сайте и запрет обновления после отправки формы
(function() {
    const popupIn = document.forms.popupIn;

    popupIn.addEventListener('submit', function(e) {
        e.preventDefault();
        
        // const input = popupIn.querySelector('input');
        // let data = {
        //     [input.name]: input.value
        // };
        // console.log(input.name, input.value);
    })
})();







let validateForms = function(selector, rules, successModal, yaGoal) {
    new window.JustValidate(selector, {
        rules: rules,
        submitHandler: function(form) {
            let formData = new FormData(form);

            let xhr = new XMLHttpRequest();

            xhr.onreadystatechange = function() {
                if (xhr.readyState === 4) {
                    if(xhr.status === 200) {
                        console.log('Отправлено');
                    }
                }
            }

            xhr.open('POST', 'mail.php', true);
            xhr.send(formData);

            form.reset();
        }
    });
}
// валидация формы с кнопки записаться на тест драйв
validateForms('.popup', {tel:{required:true}, personal:{required:true}});


// валидация формы с поля рассчета трейд-ина
validateForms('.traid-in_calc', {tel__traid:{required:true}, man__traid:{required:true}, model__traid:{required:true}, name__traid:{required:true}, traid__personal:{required:true}});


// валидация формы с кнопки предложение после аккордеона
validateForms('.estimate', {telephone:{required:true}, name__est:{required:true}, estimate__personal:{required:true}});


// валидация формы с кнопки заявки на кредит
validateForms('.credit_calc_wp', {credit__name:{required:true}, tel__credit:{required:true}, credit__personal:{required:true}});


// валидация формы с кнопки заявки на кредита адаптива
validateForms('.credit_calc_adaptiv', {credit__name__adapt:{required:true}, credit__tel__adapt:{required:true}, creditAd__personal:{required:true}});
