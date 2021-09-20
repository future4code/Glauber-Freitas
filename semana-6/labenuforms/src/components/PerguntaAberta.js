import react from 'react';

export default class PerguntaAberta extends react.Component{

    render(){
        return(
            <div>
                <h2>{this.props.pergunta}</h2>
                <input></input>
            </div>
        )
    }
}