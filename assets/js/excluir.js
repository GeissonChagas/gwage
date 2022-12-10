<<<<<<< HEAD

const tabela = document.querySelector('#excluir');

tabela.addEventListener("click", function(evento){
    
    let alvo = evento.target;
    let alvoPai = alvo.parentNode;

    alvoPai.remove();
=======
const tabela = document.querySelector('#tbody');

tabela.addEventListener("click", function(evento){
>>>>>>> paulo

    if(evento.target.className == 'produto__excluir') {
        evento.target.parentNode.remove();
        somaTotal();
    }
})