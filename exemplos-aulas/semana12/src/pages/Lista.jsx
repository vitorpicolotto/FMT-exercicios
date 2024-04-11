import {useContext} from "react"
import {UsuariosContext} from "../context/UsuariosContext"


function Lista(){
    const {usuarios, setUsuarios} = useContext(UsuariosContext)

    return (
        <div>
            <h1>Página Lista</h1>
            {usuarios.map((usuario, index) => {
        return (
            <h3 key={index}>{usuario.nome}</h3>
        )
      })}

        </div>

    );
}

export default Lista;