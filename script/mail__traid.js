// // поиск формы на сайте и запрет обновления после отправки формы
// (function() {
//     const popupIn = document.forms.popupIn;

//     popupIn.addEventListener('submit', function(e) {
//         e.preventDefault();
        
//         // const input = popupIn.querySelector('input');
//         // let data = {
//         //     [input.name]: input.value
//         // };
//         // console.log(input.name, input.value);
//     })
// })();

// let validateForms = function(selector, rules, successModal, yaGoal) {
//     new window.JustValidate(selector, {
//         rules: rules,
//         submitHandler: function(form) {
//             let formData = new FormData(form);

//             let xhr = new XMLHttpRequest();

//             xhr.onreadystatechange = function() {
//                 if (xhr.readyState === 4) {
//                     if(xhr.status === 200) {
//                         console.log('Отправлено');
//                     }
//                 }
//             }

//             xhr.open('POST', 'mail.php', true);
//             xhr.send(formData);

//             form.reset();
//         }
//     });
// }

// validateForms('.traid-in_calc', {tel__traid:{required:true}, man__traid:{required:true}, model__traid:{required:true}, name__traid:{required:true}});