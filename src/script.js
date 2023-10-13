var modal = document.getElementById('formulario')

// buscando o elemento do produto 1 reservar
var btnProd1 = document.getElementById("reservar-prod-1")
btnProd1.onclick = function () {
    modal.style.display = 'block'
}

// buscando o elemento do produto 2 reservar
var btnProd2 = document.getElementById("reservar-prod-2")
btnProd2.onclick = function () {
    modal.style.display = 'block'
}

// buscando o elemento do produto 3 reservar
var btnProd3 = document.getElementById("reservar-prod-3")
btnProd3.onclick = function () {
    modal.style.display = 'block'
}

var span = document.getElementsByClassName('fechar')[0]

span.onclick = function () {
    modal.style.display = 'none'
}

var btnEnviar = document.getElementById("enviar")

btnEnviar.onclick = function () {
    modal.style.display = 'none'
}

window.onclick = function(event) {
    if (event.target == modal) {
        modal.style.display = 'none'
    }
}
