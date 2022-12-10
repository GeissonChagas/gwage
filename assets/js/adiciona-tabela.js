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
    produtoTd.setAttribute('class', 'produto__td')


    let precoTd = document.createElement("td")
    precoTd.setAttribute('class', 'preco__td')


    let excluirTd = document.createElement("td")
    excluirTd.setAttribute('class', 'produto__excluir')
    excluirTd.setAttribute('id', 'excluir');



    let excluir = document.getElementById('excluir')


    unidadesTd.textContent = form.unidades.value;
    produtoTd.textContent = form.produto.value;
    precoTd.textContent = ((form.preco.value)*(form.unidades.value));
    excluirTd.textContent = excluir.innerText;


    produtoTr.appendChild(unidadesTd);
    produtoTr.appendChild(produtoTd);
    produtoTr.appendChild(precoTd);
    produtoTr.appendChild(excluirTd);

    let tabela = document.getElementById('tbody')
    tabela.appendChild(produtoTr);

    // Apaga oque foi escrito no input:
    let inputUnidades = document.querySelector('#unidades');
    inputUnidades.value = "";

    let inputProduto = document.querySelector('#produto');
    inputProduto.value = "";

    let inputPreco = document.querySelector('#preco');
    inputPreco.value = "";

})

    //adiciona itens no local storage

    const itemAtual = {
        "unidades": unidades,
        "produto": produto,
        "preco": preco
    }

    tds.push(itemAtual)

    localStorage.setItem('tds', JSON.stringify(tds))


    
