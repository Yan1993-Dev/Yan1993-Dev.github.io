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
        submitHandler: function(popupIn) {
            let formData = new FormData(popupIn);

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

validateForms('.popup', {tel:{required:true}, personal:{required:true}});

// validateForms('.popup', {tel: {tel:true}}, '.thanks-popup', 'send goal');

// document.addEventListener('DOMContentLoaded', function () {
//     const form = document.getElementById('popup');
//     form.addEventListener('submit', formSend);

//     async function formSend(e) {
//         e.preventDefault();

//         let error = formValidate(popup);
//     }

//     function formValidate(popup) {
//         let error = 0;
//         let formReq = document.querySelectorAll('._req');

//         for (let index = 0; index < formReq.length; index++) {
//             const input = formReq[index];
//             formRemoveError(input);

//             if(input.classList.contains('_telephone'));
            
//         }
//     }
//     function formAddError(input) {
//         input.parentElement.classList.add('_error');
//         input.classList.add('._error');
//     }
//     function formRemoveError(input) {
//         input.parentElement.classList.remove('_error');
//         input.classList.remove('_error');
//     }
// });