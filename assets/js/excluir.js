const tabela = document.querySelector('#tbody');

tabela.addEventListener("click", function(evento){

    if(evento.target.className == 'produto__excluir') {
        evento.target.parentNode.remove();
        somaTotal();
    }
})