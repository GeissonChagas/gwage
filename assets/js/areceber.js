function somaTotal() {
    let precoProdutos = document.querySelectorAll(".preco__td");
    let resultado = 0
    for (i = 0; i < precoProdutos.length; i++) {
        resultado += parseInt(precoProdutos[i].innerHTML);
    }
    
    let areceber = document.getElementById('areceber');
    areceber.textContent = resultado;
}

somaTotal();

const valoraReceber = document.getElementById("formulario-produtos")
valoraReceber.addEventListener("submit", function(){
    somaTotal();
})