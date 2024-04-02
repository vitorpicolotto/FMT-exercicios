const jogos = [
    {Jogo: "Super Mario Wonder", Plataforma: "Nintendo Switch", Valor: 300, Imagem: "imgs/supermariowonder.jpg"},
    {Jogo: "The Legend of Zelda: Breath of the Wild", Plataforma: "Nintendo Switch", Valor:259, Imagem: "imgs/tloz.jpg"},
    {Jogo: "The Legend of Zelda: Tears of the Kingdom", Plataforma: "Nintendo Switch", Valor: 350, Imagem: "imgs/totk.jpg"},
    {Jogo: "Donkey Kong Country", Plataforma: "Nintendo Switch", Valor: 200, Imagem: "imgs/dkc.jpg"},
    {Jogo: "Super Mario Kart 8", Plataforma: "Nintendo Switch", Valor: 179, Imagem: "imgs/smkd8.jpg"}
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


const carrinho = [];

function comprarJogo(jogoNome){
    let jogoEncontrado = jogos.find((element) => element.Jogo === jogoNome);
    if (jogoEncontrado) {
        alert(`${jogoEncontrado.Jogo} adicionado ao carrinho!`);
        carrinho.push({Jogo: jogoEncontrado.Jogo, Valor: jogoEncontrado.Valor});
        
    }//  else {
    //     alert("Esse jogo não existe! Tente outro nome.");
    // }
};

const botaoComprar = document.getElementById("principal__botao");
botaoComprar.addEventListener('click', (evento) => {
    evento.preventDefault();
    const jogoNome = document.getElementById("pesquisa").value;
    comprarJogo(jogoNome);
});


//Exercicio 4: adicionar um botão que ao clicar, chame uma função e ela retorne o valor total de itens no carrinho e retorne carriona vazio caso o valor seja 0.
let somaJogos = 0;

for (let i=0; i<carrinho.length; i++){
    somaJogos += carrinho[i].Valor;
}

//Exercicio 5: mostrar dinamicamente o valor total do carrinho para o usuário, posicione uma tag de texto para receber este valor sempre que apertar no botão comprar
let totalCarrinho = document.getElementById("valor-compra")
totalCarrinho.textContent = `Valor total: R$ ${somaJogos.toFixed(2)}`;

//Exercicio 6: mostrar dinamicamente o número de produtos no carrinho para o usuário
let totalItens = document.getElementById("total-carrinho")
totalItens.textContent = `Total de itens:  ${carrinho.length}`;

console.log(carrinho)

//Exercício 7: a cada adição no carrinho, atualizar uma chave no localStorage para registrar todos os produtos comprados pelo usuário

const botaoFinalizarCompra = document.getElementById("finalizar-compra")
botaoFinalizarCompra.addEventListener("click", ()=>{
    localStorage.setItem("Carrinho", JSON.stringify(carrinho));
})
let dadosDoCarrinho = JSON.parse(localStorage.getItem("Carrinho"));