import { useState } from "react";
import styles from "./Cadastro.module.css"
import {TextField, Button} from  "@mui/material";


function Cadastro(){
   
    
    const [novoUsuario, setNovoUsuario] = useState({
        nome:"",
        email:""
    })

  
    return (
        <div className={styles.card}>
            <h1 className={styles.titulo}>Cadastro</h1>

            <h4>{novoUsuario.nome}</h4>
            <h4>{novoUsuario.email}</h4>

            <TextField 
            label="Nome" 
            variant="outlined" 
            margin="dense"
            onChange={(evento) => setNovoUsuario({...novoUsuario,nome: evento.target.value})} 
            />

            <TextField 
            label="Email" 
            variant="outlined" 
            margin="dense"
            onChange={(evento) => setNovoUsuario({...novoUsuario,email: evento.target.value})}
            />

            <Button variant="contained" size="small">Cadastrar</Button>
        </div>

    );
}

export default Cadastro;