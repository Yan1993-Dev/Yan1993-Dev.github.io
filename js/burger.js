const burgerButton = document.querySelector('.qwe');
const burgerMenu = document.querySelector('.header__mobile');

console.log(burgerButton);
console.log(burgerMenu);

burgerButton.addEventListener('click', function() {
    burgerMenu.classList.toggle('open');
})