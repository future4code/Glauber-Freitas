import react from "react";
import styled from "styled-components";
import PerguntaAberta from "./PerguntaAberta";
import PerguntaFechada from "./PerguntaFechada";

function App() {
    return (
        <div className="Etapa3">
            <h1>Etapa 3 - INFORMAÇÕES GERAIS DE ENSINO</h1>
    
            <PerguntaAberta pergunta={"5. Por que você não terminou um curso de graduação?"}/>
            <PerguntaFechada 
                pergunta={"6. Você fez algum curso complementar?"}
                opcoes={[
                    "Curso Técnico",
                    "Cursos de Inglês",
                    "Não Fiz Curso Complementar",
                ]}
                />
        </div>
    );
}

export default App;