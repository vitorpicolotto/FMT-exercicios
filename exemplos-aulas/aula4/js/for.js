//Realizar um código para que seja perguntado ao usuário, via prompt, o nome ou código de um alimento. Após o código informado, identificar o preço deste alimento via switch e mostrá-lo ao usuário. Exemplo: morango como input e a saída mostrar R$ 5,99.

//A execução do algoritmo deve ser contínua e o número 0 ou ‘sair’ é a flag para parar a execução.

//https://gist.github.com/yanestevesufjf/bc3e3de5f3980545dc12375d48a5da2a

let nomeAlimento = prompt("Qual o nome do alimento?");

while (nomeAlimento !== 0){
    switch(nomeAlimento){
        case 'Arroz':
            alert("O preço do arroz é R$5,00/Kg")
            break;
        case 'Feijão':
            alert("O valor do feijão é R$9,00/Kg")
            break;
        case 'Macarrão':
            alert("O valor do macarrão é R$4,99")
            break;
        case 'Sair':
            alert("Programa encerrado")

        default:
            alert("O alimento não está disponível")
            break;
    }
    nomeAlimento = prompt("Qual o nome do alimento?")
}
