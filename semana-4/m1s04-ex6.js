//Crie 3 objetos com propriedades representando informações pessoais (nome, idade, nacionalidade e profissão) e exiba essas informações com um console.log para cada objeto.

var pessoa1 = {
    nome: "Vitor",
    idade: 28,
    nacionalidade:  "Brasileiro",
    profissao: "Oceanógrafo"
}

var pessoa2 = {
    nome: "Thaise",
    idade: 28,
    nacionalidade: "Brasileira",
    profissao: "Fisioterapeuta"
}

var pessoa3 = {
    nome: "Gelson",
    idade: 59,
    nacionalidade: "Brasileiro",
    profissao: "Vendedor"
}

console.log('Pessoa 1:', pessoa1);
console.log('Pessoa 2:', pessoa2);
console.log('Pessoa 3:', pessoa3);

//exemplo para exibir apenas uma das classes dos objetos
console.log('O nome das pessoas são: ', pessoa1.nome, ', ', pessoa2.nome, 'e ', pessoa3.nome);

