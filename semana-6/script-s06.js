//Atividade 7 - Adicionando um alert
//alert("Bem-vindo(a) ao perfil do Cenoura no CatBook, a rede social para gatos!")

//Atividade 8 - Manipulando o DOM
//Coloquei um evento de mudar a cor do texto "COR: LARANJA" ao passar o mouse por cima e voltar a cor original depois de tirar o mouse

const mudarCorDoTexto = document.getElementById("cor");
const corAtual = mudarCorDoTexto.style.color;

mudarCorDoTexto.addEventListener('mouseover',  () => {
    mudarCorDoTexto.style.color='orange';
    console.log("A cor deve ficar laranja!")
})

mudarCorDoTexto.addEventListener( 'mouseout' , ()=>{
    mudarCorDoTexto.style.color=corAtual;
    console.log("A cor voltou a padrão!")
})
