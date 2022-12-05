const form = document.getElementById("formulario-produtos");    

form.addEventListener("submit", (evento) => {
    evento.preventDefault()
    console.log("funcionou!")
})
