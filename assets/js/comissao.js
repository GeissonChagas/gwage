const form = document.querySelector("form");
const gostariaReceberInput = document.getElementById("gostaria-receber");
const comissaoValor = document.getElementById("comissao__valor");

const calculateCommission = function () {

// Obter o valor digitado pelo usuário
let gostariaDeReceber = document.getElementById("gostaria-receber").value;


  //  Considerando que a comissão é de 5% do valor vendido:
  const valorVendido = gostariaDeReceber / 0.05;
  const resultadoDoCalculo = valorVendido.toFixed(2);

 // Formatar o resultado como R$: 10.000,00
    const valorFormatado = new Intl.NumberFormat("pt-BR", {
    style: "currency",
    currency: "BRL"
    }).format(resultadoDoCalculo);
  // Exibir o resultado da comissão na tela
  comissaoValor.textContent = valorFormatado;   
};

const botaoCalcularComissao = document.getElementById("calcular-comissao");
botaoCalcularComissao.addEventListener("click", calculateCommission);
