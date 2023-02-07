// soma valores da coluna "preço"
function somaTotal() {
    let precoProdutos = document.querySelectorAll(".preco__td");
    let resultado = 0
    for (i = 0; i < precoProdutos.length; i++) {
      resultado += parseInt(precoProdutos[i].innerHTML);
    }
    
    let somavalor = document.getElementById('somavalor');
    somavalor.textContent = resultado;
    
    let areceber = document.getElementById("areceber");
    areceber.textContent = resultado * 0.05;
  }
  
  somaTotal();
  
  const valorSoma = document.getElementById("formulario-produtos");
  valorSoma.addEventListener("submit", function(){
    somaTotal();
  });
  

  