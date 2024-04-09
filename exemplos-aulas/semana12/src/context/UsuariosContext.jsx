/* 
Passo a passo:
1. [x] - CRIE O ARQUIVO DO CONTEXTO NA PASTA CONTEXT (SRC)
2. [x] - IMPORTAR O createContext DO REACT - SERVE PARA CRIAR O CONTEXTO
3. [x] - CRIAR O CONTEXTO USANDO A FUNCÇÃO createContext() - const com o mesmo nome do arquivo
4. [X] - EXPORTAR A VARIÁVEL DO CONTEXTO - não usa o default porque vai ter mais de uma coisa pra exportar no contexto
5. [] - CRIE O PROVIDER
6. [] - DEFINA OS DADOS GLOBAIS
7. [] - CRIE O RETURN DO PROVIDER PASSANDO OS DADOS GLOBAIS DENTRO DA PROPS 'VALUE'
8. [] - EXPORTE O PROVIDER
*/

import { createContext, useState } from "react";

export const UsuariosContext = createContext()

export const UsuariosContextProvider = ({children}) => {
    //dados globais
    const [usuarios, setUsuarios] = useState([
    {
        nome: "Vitor",
        email: "vitor@email.com"
    }

    ])


        return(
            <UsuariosContext.Provider value={{usuarios, setUsuarios}}>
                {}
                {children}
            </UsuariosContext.Provider>

        )
}



