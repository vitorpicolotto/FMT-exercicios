import Card from "./components/Card";
import CardUsuario from "./components/CardUsuario";

//cada arquivo .jsx é um componente React

function App() {
  //bloco superior - é onde vão as variáveis e funções - JS
  // const titulo = "Curso React"
  // const subtitulo = "Aprender React com a gente!"

  // function mensagemBoasVindas(){
  //   alert("Bem vindo!")
  // }

  const listaUsuarios = [{
    nome: "Vitor",
    email: "meuemail@email.com",
    admin: false,
    senha: 1234
  },
  {
    nome: "Tha",
    email: "thaemail@email.com",
    admin: true,
    senha: 5678
  },
  {
    nome: "Andre",
    email: "andre@email.com",
    admin: false,
    senha: 9876
  },
]

  //html só funciona dentro do return - o qual é obrigatório
  return(
    //o elemento pai é obrigatório!!!!
    //a tag <> </> é um fragment, usa-se pra burlar o react
     <>
      <h1> Olá, Mundo!</h1>

      {/* {<Card titulo={titulo} subtitulo={subtitulo}/>} */}
      {/* {<button onClick={mensagemBoasVindas}>Clicar Aqui!</button>} */}
      {/* {<button onClick={() => alert("Segundo bem vindo!")}>Segundo boas vindas</button> */}
      {listaUsuarios.map((itemAtual, index) => (
        <div key={index}>
          <CardUsuario  nome={itemAtual.nome} email={itemAtual.email} />
          {/* renderização condicional com ternário */}
          {itemAtual.admin ? <span>Usuário admin</span> : ""}
           {/* renderização condicional com operador && */}
          {itemAtual.admin && <span>Usuário admin</span>}
        </div>
        ))}
    
    </>


  ) 

}

export default App
