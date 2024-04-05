//Exercicio 1
function mudarCor(){
    const corAtual = document.getElementById("muda-cor");
    corAtual.style.backgroundColor = "darkgreen"
}

//Exercicio 2 
function alterarTexto(){
    const textoAtual = document.querySelector(".mudar-texto");
    textoAtual.textContent = "Palmeiras não tem mundial!"
}

//Exercicio 3
const paragrafo = document.getElementById("add-item")
const novoParagrafo = document.createElement("p")

function adicionarItem(){
    
    paragrafo.appendChild(novoParagrafo);
    novoParagrafo.textContent = "É bolocha e não biscoito!"
}

//Exercicio 4
function removerItem(){
    paragrafo.removeChild(novoParagrafo)
}

//Exercicio 5
