function somaTotal() {
    let precoProdutos = document.querySelectorAll(".preco__td");
<<<<<<< HEAD
    
    function soma(){
        precoProdutos.innerHTML + precoProdutos
=======
    let resultado = 0
    for (i = 0; i < precoProdutos.length; i++) {
        resultado += parseInt(precoProdutos[i].innerHTML);
>>>>>>> 3d5fa04cb3d36c22d27f83cfba06c8a884195797
    }
    
    let areceber = document.getElementById('areceber');
    areceber.textContent = resultado;
}

somaTotal();

const valoraReceber = document.getElementById("formulario-produtos")
valoraReceber.addEventListener("submit", function(){
    somaTotal();
})