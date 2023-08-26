// Script 

document.addEventListener('DOMContentLoaded', () => 
{
    new TypeIt('.text', {
    speed: 100,
    loop: false,
    })

    .type('Estudante!', {delay: 900}) .delete(10)
    .type('Designer', {delay: 900}) .delete(8)
    .type('Desenvolvedor web!', {delay: 900})
    .go()
});



