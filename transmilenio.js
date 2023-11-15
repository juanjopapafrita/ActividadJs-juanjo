var ciudad = document.querySelector('.ciudad');
var carroseria = document.querySelector( '.carroseria');
var rueda1 = document.querySelector('.rueda1');
var rueda2 = document.querySelector('.rueda2');
var rueda3 = document.querySelector('.rueda3')


ciudad.addEventListener('click', moverciudad)

function moverciudad (){
    ciudad.style.animationPlayState = 'running'
    carroseria.style.animationPlayState = 'running'
    rueda1.style.animationPlayState = 'running'
    rueda2.style.animationPlayState = 'running'
    rueda3.style.animationPlayState = 'running'
}