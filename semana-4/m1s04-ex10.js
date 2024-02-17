//Crie uma função que solicite para o usuário através do prompt de comando sua idade, e a partir da idade fornecida, exiba uma mensagem informando se ele é maior de idade ou não. Considere 18 anos como maior idade.

var idade = Number(window.prompt(("Digite a sua idade: ")))

function verificaIdade (idade){
    if(idade > 0 && idade < 18){
        alert("Você é menor de idade!")
    } else {
        alert("Você já é adulto!")
    }
}

verificaIdade(idade)