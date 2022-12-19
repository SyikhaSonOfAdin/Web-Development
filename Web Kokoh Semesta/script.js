const menuToggle = document.querySelector('.menu-toggle input');
const nav = document.querySelector('.blue-header ul');

menuToggle.addEventListener('click', function() {
    nav.classList.toggle('slide') ;
})