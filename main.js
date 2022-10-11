const menuHambur = document.querySelector('.icon-menu');
const mobileMenu = document.querySelector('.mobile-menu');



menuHambur.addEventListener('click', toggleMobileMenu);

function toggleMobileMenu(){    
    mobileMenu.classList.toggle('inactive');
}
