const jogos = [
    {Jogo: "Super Mario Wonder", Plataforma: "Nintendo Switch", Valor:"R$ 300,00", Imagem: "imgs/supermariowonder.jpg"},
    {Jogo: "The Legend of Zelda: Breath of the Wild", Plataforma: "Nintendo Switch", Valor:"R$ 259,90", Imagem: "imgs/tloz.jpg"},
    {Jogo: "The Legend of Zelda: Tears of the Kingdom", Plataforma: "Nintendo Switch", Valor:"R$ 350,00", Imagem: "imgs/totk.jpg"},
    {Jogo: "Donkey Kong Country", Plataforma: "Nintendo Switch", Valor: "R$200,00", Imagem: "imgs/dkc.jpg"},
    {Jogo: "Super Mario Kart 8", Plataforma: "Nintendo Switch", Valor: "R$179,90", Imagem: "imgs/smkd8.jpg"}
];


//Exercício 2: adicionar um evento de clique para consultar o valor do produto digitado pelo consumidor

const botaoBuscar = document.getElementById("formulario__botao");
botaoBuscar.addEventListener( 'click', function(evento){
    evento.preventDefault(); //impede que a página seja atualizada após clicar no botão
});

function  buscaValor() {
    let jogoBuscado = document.getElementById("principal__jogos-valor");
    let jogo = document.getElementById("pesquisa").value;
    let resultadoBusca = jogos.find((element) => element.Jogo === jogo);
    if (resultadoBusca) {
        jogoBuscado.textContent = `O jogo ${resultadoBusca.Jogo} para ${resultadoBusca.Plataforma} tem o valor de R$ ${resultadoBusca.Valor}.`;
    } else{
        jogoBuscado.textContent = "Esse jogo não existe! Tente outro nome.";
    }
}

//Exercicio 3: adicionar um evento de clique no botão comprar. O objetivo é que as informações do jogo apareçam na área do carrinho.
//precisa criar um array vazio para o carrinho e dar push para inserir os dados nele


