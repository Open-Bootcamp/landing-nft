const menuHambur = document.querySelector('.icon-menu');
const mobileMenu = document.querySelector('.mobile-menu');



menuHambur.addEventListener('click', toggleMobileMenu);

function toggleMobileMenu(){    
    mobileMenu.classList.toggle('inactive');

}


/*Carrusel*/

const tarjeta = document.querySelector('.showcase_carousel');
const punto = document.querySelectorAll('.punto');

punto.forEach( (cadaPunto, i)=>{
    punto[i].addEventListener('click',()=>{
        let posicion = i;
        let operacion = posicion * -25;

        tarjeta.style.transform = `translateX(${operacion}%)`

        punto.forEach( (cadaPunto, i)=>{
            punto[i].classList.remove('activo')
        })
        punto[i].classList.add('activo')
    })
})


/*modo oscuro*/

const botonDark = document.querySelector('#btn_dark');
const body = document.querySelector('body');

botonDark.addEventListener('click', e =>{
    body.classList.toggle('darkmode')
});