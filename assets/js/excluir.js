
const tabela = document.querySelector('#excluir');

tabela.addEventListener("click", function(evento){
    
    let alvo = evento.target;
    let alvoPai = alvo.parentNode;

    alvoPai.remove();

})