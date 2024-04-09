import { useState } from "react";
import { useEffect } from "react";


function HookUseEffect(){
    const [observar, setObservar] = useState();


   


    //a ser executado na primeira renderização
    useEffect(() => {
        console.log("nova renderezação porque usa somente o array vazio como segundo parâmetro");
        
    })

    //a ser executado na primeira renderização e sempre que o valor do estado observar mudar.
    useEffect(() => {
        console.log("useEffect: o valor do estado observar mudou, usa um array com a dependência do estado ");
        document.title = "Efeitos colaterais";
        //desmontagem do componente
        return() => {}
    }, [observar])

    //a ser executado em todas renderizações
    
    useEffect(() => {
        console.log("useEffect: nova renderização");

        
    }, [])


    return(
        <>
        <h1>Hook Use Effect</h1>

        <h4>Parâmetros
            <ul>
                <li>CallBack: função a ser executada de acordo com os argumentos do segundo parâmetro</li>
                <li>Dependências: 
                    <ul>
                        <li>Se eu não passar, vai executar a callback em todas as renderizações do componente</li>
                        <li>Se eu passar um array vazio [], ele vai executar a callback assim que o componente for renderizado pela primeira vez</li>
                        <li>Se eu passar um array com argumentos [estadoX, estadoY], ele vai executar quando o componente renderizar e sempre que o valor de algum item da lista de argumentos mudar</li>
                    </ul>
                </li>
            </ul>
        </h4>
        <button onClick={() => setObservar((o) => o + 1)}>Alterar o valor do estado </button>


        <h4>Efeitos Colaterais</h4>
        <p>Sempre que vamos executar algo fora do escopo React, uma chamada HTTP, criação de timer ou intervalo, manipulação do DOM, consumo de API... <b>O IDEAL É ESTAR DENTRO DE UM USE EFFECT!</b></p>
        <p><b>Ciclo de vida do componente: </b> O componente nasce (didMount - representado pelo array vazio), o componente é atualizado (didUpdate - representado pela falta do segundo parâmetro no useEffect ou pelo segundo possuir valores no array), o componente morre (willUnmont - pela função retornada no useEffect)</p>
        <p>Precisamos tratar a desmontagem do componente quando usamos funcionalidades assincronas que precisam ser canceladas, ou com timer/intervalos, por exemplo - como um clearInterval ou clearTimeOut - quando não for mais aparecer na tela ou ficar em desuso</p>

        </>
    )
}


export default HookUseEffect;