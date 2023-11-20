var carro = document.querySelector('.carro')
var fondo = document.querySelector('.fondo')
var llanta1 = document.querySelector('.llanta1')
var llanta2 = document.querySelector('.llanta2')
var luz = document.querySelector('.luz')
var sprite = document.querySelector('.sprite')

carro.addEventListener('click',IniciarMovimento)

function IniciarMovimento(){

    fondo.classList.add('fondo-oculto')
    llanta1.classList.add('llanta1-oculto')
    llanta2.classList.add('llanta2-oculto')
    sprite.classList.add('sprite_oculto')
}