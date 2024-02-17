//Use um switch para exibir mensagens diferentes com base em uma condição.

let saldoDeGols = Number(prompt("Quantos gols o Coritiba marcou no último jogo?"));

switch (saldoDeGols){
    case 0:
        console.log("O Coxa não fez gol, fiquei chateado!");
        break;
    case 1:
        console.log("O Coxa fez só um gol? Estranho, mas fico feliz.");
        break;
    case 2:
        console.log("Você é doido! O Coritiba só fez dois gols?");
        break;
    case 3:
    case 4:
    case 5:
        console.log("Ai o resultado é normal! Menos de três gols nem comemoro!");
        break;
    default:
        if(saldoDeGols < 0) {
            console.log("Perdemos! :(");
        } 
}