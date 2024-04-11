import CButton from "../atoms/CButton/CButton";
import CInput from "../atoms/CInput/CInput";
import { useState } from "react";

function FormCadastroUsuario({submit}) {

    const [novoUsuario, setNovoUsuario] = useState({
        nome:"",
        email:""
    })

    function AdicionarUsuarios(){
        submit(novoUsuario)
        setNovoUsuario({
            nome:"",
            email:""
        })
    }


  return (
    <>
      <CInput
        label="Nome"
        onChange={(evento) =>
          setNovoUsuario({ ...novoUsuario, nome: evento.target.value })
        }
      />

      <CInput
        label="E-mail"
        onChange={(evento) =>
          setNovoUsuario({ ...novoUsuario, email: evento.target.value })
        }
      />

      <CButton onClick={() => AdicionarUsuarios()}>Cadastrar</CButton>
    </>
  );
}

export default FormCadastroUsuario