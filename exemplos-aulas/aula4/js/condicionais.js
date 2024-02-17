// let idade = prompt('Quantos anos você tem?')

// if(idade >= 18){
//     alert('Você pode votar')
// } else {
//     alert('Você não pode votar, ainda não atingiu 18 anos')
// }

// let loginUsuario = false;

// if (loginUsuario = true){
//     console.log("Você já está logado!")
// } else {
//     console.log("Faça seu login!")
// }

let valorProduto = 20;
let valorComDesconto = valorProduto - (valorProduto * 0.10) //10% de desconto
let diasParaValidade = 10;

if (diasParaValidade <= 10){
    console.log(`O valor do produto é R$${valorComDesconto} pois está próximo de vencer`)
} else {
    console.log(`O valor do produto é R$${valorProduto} pois não está perto de vencer`)
}




