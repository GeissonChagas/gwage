// Adiciona produtos na tabela:

const adicionaItens = document.getElementById("formulario-produtos");    

adicionaItens.addEventListener("submit", function(evento){
    evento.preventDefault()

    let form = document.getElementById("formulario-produtos")

    let produto = form.produto.value;
    let preco   = form.preco.value;


    let produtoTr = document.createElement("tr")
    produtoTr.setAttribute('class', 'produto__tr')

    let itemTd = document.createElement("td")
    itemTd.setAttribute('class', 'produto__td')

    let produtoTd = document.createElement("td")
    produtoTd.setAttribute('class', 'produto__td')

    let precoTd = document.createElement("td")
    precoTd.setAttribute('class', 'produto__td')

    let excluirTd = document.createElement("td")
    excluirTd.setAttribute('class', 'produto__td')

    itemTd.textContent = "01"
    produtoTd.textContent = produto;
    precoTd.textContent = preco;
    excluirTd.textContent = document.getElementById('excluir');

    produtoTr.appendChild(itemTd);
    produtoTr.appendChild(produtoTd);
 


    let tabela = document.getElementById('tbody')



  

})
