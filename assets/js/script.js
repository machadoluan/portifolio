//-------------------------TEXTO DIGITANDO SOZINHO------------------------------------------------//

document.addEventListener('DOMContentLoaded', () => {

    new TypeIt('#descricao', {
        speed: 100,
        loop: true,
    })
        .type('Desenvolvedor Front-end!', { delay: 900 }).delete(24)
        .type('Front-end Developer!', { delay: 900 }).delete(21)
        .type('Design UX, Ui!', { delay: 900 })
        .go()


});


//-------------------------BOTÃO MOBILE------------------------------------------------//

const botao = document.querySelector(".mobile-menu")
const nav = document.querySelector("#nav-list")

function apertei() {
    nav.classList.toggle("active")

}
function removeMenu() {
    nav.classList.remove("active")
}
botao.addEventListener("click", apertei)
//-------------------------------CSS---------------------------------------------------//

var icones = document.querySelector(".css3")

icones.addEventListener("mouseover", function () {

    var legenda = document.querySelector("#text-css")

    var texto_padrao = document.querySelector("#text-padrao")

    legenda.classList.remove("hide")
    texto_padrao.classList.add("hide")

})

icones.addEventListener("mouseout", function () {

    var legenda = document.querySelector("#text-css")
    var texto_padrao = document.querySelector("#text-padrao")

    legenda.classList.add("hide")
    texto_padrao.classList.remove("hide")

})

//--------------------------------HTML-----------------------------------------------------//

var icones = document.querySelector(".html5")

icones.addEventListener("mouseover", function () {

    var legenda = document.querySelector("#text-html")

    var texto_padrao = document.querySelector("#text-padrao")

    legenda.classList.remove("hide")
    texto_padrao.classList.add("hide")

})

icones.addEventListener("mouseout", function () {

    var legenda = document.querySelector("#text-html")
    var texto_padrao = document.querySelector("#text-padrao")

    legenda.classList.add("hide")
    texto_padrao.classList.remove("hide")

})

//--------------------------------JS-----------------------------------------------------//

var icones = document.querySelector(".js")

icones.addEventListener("mouseover", function () {

    var legenda = document.querySelector("#text-js")

    var texto_padrao = document.querySelector("#text-padrao")

    legenda.classList.remove("hide")
    texto_padrao.classList.add("hide")

})

icones.addEventListener("mouseout", function () {

    var legenda = document.querySelector("#text-js")
    var texto_padrao = document.querySelector("#text-padrao")

    legenda.classList.add("hide")
    texto_padrao.classList.remove("hide")

})
//--------------------------------FIGMA-----------------------------------------------------//

var icones = document.querySelector(".figma")

icones.addEventListener("mouseover", function () {

    var legenda = document.querySelector("#text-figma")

    var texto_padrao = document.querySelector("#text-padrao")

    legenda.classList.remove("hide")
    texto_padrao.classList.add("hide")

})

icones.addEventListener("mouseout", function () {

    var legenda = document.querySelector("#text-figma")
    var texto_padrao = document.querySelector("#text-padrao")

    legenda.classList.add("hide")
    texto_padrao.classList.remove("hide")

})
// ------------------------------ ENVIO FORMULARIO ----------------------------------------------//
