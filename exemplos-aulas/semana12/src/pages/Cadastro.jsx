
import styles from "./Cadastro.module.css"
import {useContext} from "react"
import {UsuariosContext} from "../context/UsuariosContext"
import FormCadastroUsuario from "../components/molecules/FormCadastroUsuario"




function Cadastro(){
   
    const {usuarios, setUsuarios} = useContext(UsuariosContext)  //com chaves porque é uma lista?

 

    function AdicionarUsuarios(){
        setUsuarios([...usuarios, novoUsuario])
    }
        //... é para manter os usuários já cadastrados
  
    return (
        <div className={styles.card}>
            <h1 className={styles.titulo}>Cadastro</h1>
            <FormCadastroUsuario submit={AdicionarUsuarios} />
            
        </div>

    );
}

export default Cadastro;