//Implemente uma função que determine se um número é par ou ímpar.

var numero = Number(window.prompt("Digite um número entre 1 e 100:"));

//para ser par,  o resto da divisão por 2 tem que ser igual a zero. Se não for, o número é impar.
function  parOuImpar(numero){
    if (numero % 2 === 0){
        console.log(`${numero} é par!`)
    } else{
        console.log(`${numero} é impar!`)
    }
}

parOuImpar(numero);
