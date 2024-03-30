//App.jsx é onde tudo vai funcionar, então é necessário associar todos os componentes utilizados lá!

export default function Card({titulo, subtitulo = "qualquer titulo ou até vazio"}){

    return(
        <>
        <h1>{titulo}</h1>
        <h3>{subtitulo}</h3>
        </>
    )
}

