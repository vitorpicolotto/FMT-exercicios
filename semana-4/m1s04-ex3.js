//Combine duas strings usando o operador de concatenação e exiba o resultado no console. Utilize o template string ou a concatenação

//concatenação simples

const string1 = "O meu nome é Vitor Picolotto, "
const string2 = "e o seu?"

console.log(string1 + string2)

//ou segunda opção

const apresentacao = "O meu nome é Vitor, "
const seuNome = window.prompt("Qual o seu nome?")

console.log(`${apresentacao} e o seu nome é ${seuNome}.`)
