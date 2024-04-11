import {useContext} from "react"
import {UsuariosContext} from "../context/UsuariosContext"

function Home(){

  const {usuarios, setUsuarios} = useContext(UsuariosContext)

  const usuarioTha = {
    nome: "thaise",
    email: "thc@email.com"
  }

  return (
    <>
      <h1>Página home</h1>
      {usuarios.map((usuario, index) => {
        return (
            <h3 key={index}>{usuario.nome}</h3>
        )
      })}
      <button onClick={() => setUsuarios([...usuarios, usuarioTha])}>Adicionar Tha</button>
    </>
  )
}

export default Home