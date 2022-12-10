<<<<<<< HEAD

const tabela = document.querySelector('#excluir');

tabela.addEventListener("click", function(evento){
    
    let alvo = evento.target;
    let alvoPai = alvo.parentNode;

    alvoPai.remove();
=======
const tabela = document.querySelector('#tbody');

tabela.addEventListener("click", function(evento){
>>>>>>> 3d5fa04cb3d36c22d27f83cfba06c8a884195797

    if(evento.target.className == 'produto__excluir') {
        evento.target.parentNode.remove();
        somaTotal();
    }
})