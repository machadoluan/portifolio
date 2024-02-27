//-------------------------TEXTO DIGITANDO SOZINHO------------------------------------------------//

document.addEventListener('DOMContentLoaded', () => {

    new TypeIt('#descricao', {
        speed: 100,
        loop: false,
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

//--------------------------------HTML-----------------------------------------------------//

var icones = document.querySelector(".html")

icones.addEventListener("mouseover", function () {

    var legenda = document.querySelector("#text-html")

    var texto_padrao = document.querySelector("#text-padrao")

    legenda.classList.remove("hidden")
    texto_padrao.classList.add("hidden")

})

icones.addEventListener("mouseout", function () {

    var legenda = document.querySelector("#text-html")
    var texto_padrao = document.querySelector("#text-padrao")

    legenda.classList.add("hidden")
    texto_padrao.classList.remove("hidden")

})
//-------------------------------CSS---------------------------------------------------//

var icones = document.querySelector(".css")

icones.addEventListener("mouseover", function () {

    var legenda = document.querySelector("#text-css")

    var texto_padrao = document.querySelector("#text-padrao")

    legenda.classList.remove("hidden")
    texto_padrao.classList.add("hidden")

})

icones.addEventListener("mouseout", function () {

    var legenda = document.querySelector("#text-css")
    var texto_padrao = document.querySelector("#text-padrao")

    legenda.classList.add("hidden")
    texto_padrao.classList.remove("hidden")

})
//--------------------------------figma-----------------------------------------------------//

var icones = document.querySelector(".figma")

icones.addEventListener("mouseover", function () {

    var legenda = document.querySelector("#text-figma")

    var texto_padrao = document.querySelector("#text-padrao")

    legenda.classList.remove("hidden")
    texto_padrao.classList.add("hidden")

})

icones.addEventListener("mouseout", function () {

    var legenda = document.querySelector("#text-figma")
    var texto_padrao = document.querySelector("#text-padrao")

    legenda.classList.add("hidden")
    texto_padrao.classList.remove("hidden")

})
//--------------------------------js-----------------------------------------------------//

var icones = document.querySelector(".js")

icones.addEventListener("mouseover", function () {

    var legenda = document.querySelector("#text-js")

    var texto_padrao = document.querySelector("#text-padrao")

    legenda.classList.remove("hidden")
    texto_padrao.classList.add("hidden")

})

icones.addEventListener("mouseout", function () {

    var legenda = document.querySelector("#text-js")
    var texto_padrao = document.querySelector("#text-padrao")

    legenda.classList.add("hidden")
    texto_padrao.classList.remove("hidden")

})
// ------------------------------ ENTRAR EM CONTATO ----------------------------------------------//


const btnContato = document.getElementById("btnContato")
const closeContato = document.getElementById("closeContato")
const inputEmail = document.getElementById("email");
const mensagem = document.getElementById("mensagem");
const inputName = document.getElementById("input-name");

// Open Tela de contato
function contato(){
    $(".entrarEmContato").css("display", "block")
    $(".blur-overlay").css("display", "block")
    $("body").css("overflow", "hidden")

}
function closeCntt(){
    $(".entrarEmContato").css("display", "none")
    $(".blur-overlay").css("display", "none")
    $("body").css("overflow", "auto")
    inputName.value = ""
    inputEmail.value = ""
    mensagem.value = ""

}
btnContato.addEventListener("click", contato)
closeContato.addEventListener("click", closeCntt)
