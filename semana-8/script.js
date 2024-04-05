//Exercicio 1
function mudarCor(){
    const corAtual = document.getElementById("muda-cor");
    corAtual.style.backgroundColor = "darkgreen"
}

//Exercicio 2 
const textoAtual = document.querySelector(".mudar-texto");
textoAtual.addEventListener('mouseover', function(){
    this.textContent = 'Palmeiras não tem mundial';
})
textoAtual.addEventListener('mouseout', function(){
    this.textContent = 'Passe o mouse por cima deste texto para revelar uma verdade!';
});


//Exercicio 3
const paragrafo = document.getElementById("add-item")
const novoParagrafo = document.createElement("p")

function adicionarItem(){
    
    paragrafo.appendChild(novoParagrafo);
    novoParagrafo.textContent = "É bolacha e não biscoito!"
}

//Exercicio 4
function removerItem(){
    paragrafo.removeChild(novoParagrafo)
}

//Exercicio 5
function mudarTudo(){
    const mudarGeral = document.querySelectorAll(".mudar-todos")
    mudarGeral.forEach((e) =>{
        e.textContent = "Finalmente consegui mudar tudo!"
        e.style.backgroundColor = "red"
        e.style.borderRadius = "10px"
        e.style.color = "white"
    })
}

//Exercicio 6 e 7 - verificar no Inspecionar! 
const novaClasse = document.getElementById("addRemoveClass");

function addClass(){
    novaClasse.classList.add("classeAdicional");
}

function removeClass(){
    novaClasse.classList.remove("classeAdicional");
}

//Exercícios 8, 9 e 10 - fiz a adição e remoção de atributos no exercício 10, onde devíamos criar uma lista de tarefas de forma funcional

function adicionarTarefa(){
    let tarefaInput = document.getElementById("tarefaInput");
    let textoTarefa = tarefaInput.value;
    let listaTarefa = document.getElementById("listaTarefa");

    //criando elemento de lista 
    let itemTarefa = document.createElement('li');
    itemTarefa.textContent = textoTarefa;

    //Evento de clique para marcar como concluída
    itemTarefa.addEventListener('click', function() {
        if(this.getAttribute("item-marcado") === "true"){
            this.removeAttribute("item-marcado");
            this.classList.remove("concluida");
        } else {
            this.setAttribute( "item-marcado", "true");
            this.classList.add("concluida");
        }
    })

    //botão para remover
    let botaoRemover  = document.createElement('button');
    botaoRemover.textContent = "Remover item"
    botaoRemover.addEventListener('click', function (evento) {
        evento.stopPropagation( ); //impede que o evento se propague pela lista
        listaTarefa.removeChild(itemTarefa);
    })

    //adicionando botão de remover o  item da lista
    itemTarefa.appendChild(botaoRemover);

    //adicionando item a lista de tarefa
    listaTarefa.appendChild(itemTarefa);

    //limpar o input
    tarefaInput.value="";

}

