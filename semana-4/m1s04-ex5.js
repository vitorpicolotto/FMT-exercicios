//Utilize uma estrutura condicional (if,else) para verificar se um número é positivo, negativo ou zero. Exiba os valores no console.log().

let numero = Number(window.prompt("Digite qualquer número, seja ele positivo ou negativo:"))

function verificaNumero() {
    if(numero > 0){
        console.log(`O número ${numero} é positivo`)
    } else if (numero < 0){
        console.log(`O número ${numero} é negativo`)
    } else if (numero === 0) {
        console.log('O número é zero')
    } else {
        console.log('Não é um número válido')
    }
}

verificaNumero(numero);
