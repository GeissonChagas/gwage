// Adiciona produtos na tabela:

const adicionaItens = document.getElementById("formulario-produtos");    

adicionaItens.addEventListener("submit", function(evento){
    evento.preventDefault()

    let form = document.getElementById("formulario-produtos")

    let unidadesTd = document.createElement("td")
    unidadesTd.setAttribute('class', 'produto__td')

    let produtoTr = document.createElement("tr")
    produtoTr.setAttribute('class', 'produto__tr')


    let produtoTd = document.createElement("td")
    produtoTr.setAttribute('class', 'produto__td')


    let precoTd = document.createElement("td")
    precoTd.setAttribute('class', 'preco__td')


    let excluirTd = document.createElement("td")
    excluirTd.setAttribute('class', 'produto__excluir')


    let excluir = document.getElementById('excluir')


    unidadesTd.textContent = form.unidades.value;
    produtoTd.textContent = form.produto.value;
    precoTd.textContent = ((form.preco.value)*(form.unidades.value));
    excluirTd.textContent = excluir.textContent;


    produtoTr.appendChild(unidadesTd);
    produtoTr.appendChild(produtoTd);
    produtoTr.appendChild(precoTd);
    produtoTr.appendChild(excluirTd);

    let tabela = document.getElementById('tbody')
    tabela.appendChild(produtoTr)


  

})
