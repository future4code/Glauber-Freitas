import react from 'react';

export default class PerguntaFechada extends react.Component{
    
    render(){
        const listaOpcoes = this.props.opcoes
        return(
            <div>
                <h2>{this.props.pergunta }</h2>
                <select>
                    {listaOpcoes.map(item => (
                        <option>{item}</option>
                    ))
                    }
                </select>
            </div>
        )

        
    }
}