import react from "react";
import styled from "styled-components";
import PerguntaAberta from "./PerguntaAberta";

export default class App extends react.Component {
    render(){
        return (
            <div className="Etapa2">
                <h1>Etapa 2 - Informações do Ensino Superior</h1>
                <PerguntaAberta pergunta={"5. Qual o curso?"}/>
                <PerguntaAberta pergunta={"6. Qual a unidade de ensino?"}/>
            </div>
        );
    }
}
