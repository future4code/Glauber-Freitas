import react from "react";
import styled from "styled-components";
import PerguntaAberta from "./PerguntaAberta";
import PerguntaFechada from "./PerguntaFechada";

function App() {
    return (
        <div className="Etapa1">
            <h1>Etapa 1 - Dados Gerais</h1>
    
            <PerguntaAberta pergunta={"1. Qual seu nome?"}/>
            <PerguntaAberta pergunta={"2. Qual sua idade?"}/>
            <PerguntaAberta pergunta={"3. Qual seu e-mail?"}/>
            <PerguntaFechada 
                pergunta={"4. Qual sua escolaridade?"}
                opcoes={[
                    "Ensino Médio Incompleto",
                    "Ensino Médio Completo",
                    "Ensino Superior Incompleto",
                    "Ensino Superior Completo"
                ]}
            />
            
        </div>
    );
}

export default App;
