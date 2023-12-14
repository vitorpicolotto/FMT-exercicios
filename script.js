let numero1 = prompt("Qul é o primeiro número?");
let numero2 = prompt("Qual é o segundo número?");

function compararNumero (numero1, numero2){
    if (numero1 > numero2){
        alert ("O primeiro número é maior")
} 
    else if (numero1 == numero2){
        alert ("Os números são iguais")
} 
    else if (numero2 > numero1) {
        alert ("O segundo número é maior")
}
}

compararNumero(numero1, numero2);

// outra opção é deixar o código mais limpo

function compararNumeroNovo (x, y){
    if (x > y){
        console.log (`${x} é maior que ${y}`)
        return;
    }

    if (y > x){
        console.log (`${y} é maior que ${x}`)
        return;
    }

    console.log (`${y} é igual a ${x}`)

}

compararNumeroNovo(3,5);
compararNumeroNovo(62, 10);
compararNumeroNovo(9,9);