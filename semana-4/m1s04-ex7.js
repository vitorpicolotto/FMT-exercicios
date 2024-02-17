//Crie uma função que receba o valor de uma hora qualquer, e exibe no console uma mensagem de “bom dia”, “boa tarde” ou “boa noite”, de acordo com a hora passada.

var data = new Date();
var horas = data.getHours();

function saudacao(horas) {
    if (horas >= 6 && horas <=13){
        console.log('Bom dia!');
    } else if (horas > 13 && horas < 18){
        console.log('Boa tarde!');
    } else{
        console.log('Boa noite!')
    }
}

saudacao(horas);

