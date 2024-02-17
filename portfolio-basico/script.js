//mudar a cor ao passar o mouse sobre o cabeçalho
const headerColor = document.getElementById("cabecalho");

headerColor.addEventListener("mouseover", function(){
    headerColor.style.backgroundColor = "#576CBC";
});

headerColor.addEventListener("mouseout", function() {
    headerColor.style.backgroundColor = "#19376D";
});


//Criando um alert para quando clicar nos botões, avisar que vai abrir uma nova guia!
function abrirNovaGuia(){
    alert("Você sairá dessa página. Tem certeza disso?")

}

document.querySelectorAll(".botao").forEach(function(botao){
    botao.addEventListener('click', abrirNovaGuia);
});


    


