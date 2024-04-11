/* 
Passo a passo:
 * 1 - [] - IMPORTE O createContext DO REACT
 * 2 - [] - CRIAR A VARIÁVEL DO CONTEXTO
 * 3 - [] - EXPORTAR A VARIÁVEL DO CONTEXTO
* 
 * 4 - [] - CRIE A VARIÁVEL DO PROVIDER
 * 5 - [] - RECEBA A PROP CHILDREN
 * 6 - [] - DEFINA OS DADOS GLOBAIS
 * 7 - [] - CRIE O JSX DO PROVIDER E PASSE OS DADOS GLOBAIS NA PROP value
 * 8 - [] - IMPORTE O PROVIDER NO ARQUIVO APP.JSX
* 
 * 9 - [] - IMPORTE O CONTEXTO NO ARQUIVO QUE FOR UTILIZAR
 * 10 - [] - IMPORTE O useContext DO REACT
 * 11 - [] - RECEBA OS DADOS GLOBAIS USANDO O useContext
*/

import { createContext, useState } from "react";

export const UsuariosContext = createContext()

export const UsuariosContextProvider = ({children}) => {
    //dados globais
    const [usuarios, setUsuarios] = useState([
    {
        nome: "Vitor",
        email: "vitor@email.com"
    },
    {
        nome: "Gelson",
        email: "gp@email.com"
    },
    {
        nome: "André",
        email: "ap@email.com"
    }

    ])


        return(
            <UsuariosContext.Provider value={{usuarios, setUsuarios}}>
                {}
                {children}
            </UsuariosContext.Provider>

        )
}



