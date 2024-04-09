import { useState } from "react";
import "./index.css"


function HookUseState(){
    const [valorAleatorio, setValorAleatorio] = useState();
    const [count, setCount] = useState(0);
    const [countIncorreto, setCountIncorreto] = useState(0);


    return (
    <>
        <h1>Hook Use State</h1>

        <ul>
            <li>useState: cria variáveis que causam novas visualizações da tela assim que houver uma alteração no seu valor</li>
        </ul>
        <button onClick={() => setValorAleatorio(Math.random())}>Gerar valor aleatório</button>
        <h4>{valorAleatorio}</h4>

        <h3>Atualizando um estado com base no valor anterior</h3>
        <h4>Contador incorreto</h4>
            {/*setCount(count + 1) pode dar problema, porque precisamos pegar o valor atualizado*/}
            <button 
            onClick={() => {
                setCountIncorreto(countIncorreto + 1); //somar 1
                setCountIncorreto(countIncorreto + 1);  //somar outro 1
            }}>
                O valor do contador é: {countIncorreto}
            </button>

        <h4>Contador Correto </h4> {/*soma junto com o valor anterior*/}
            <button 
            onClick={() => {
                setCount(c => c + 1);
                setCount(c => c + 1);
                }}>
                O valor do contador é: {count}
            </button>

            
    </>
    )
}

export default HookUseState;
