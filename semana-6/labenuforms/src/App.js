import React from 'react';
import './App.css';
import Etapa1 from './components/Etapa1.js'
import Etapa2 from './components/Etapa2.js'
import Etapa3 from './components/Etapa3.js'
import Final from './components/Final'

export default class App extends React.Component{
  state ={
    etapa:1
  }

  renderizarEtapa = () =>{
    switch (this.state.etapa){
      case 1:
        return <Etapa1/>
        console.log("Etapa1")
      case 2:
        return <Etapa2/>
      case 3:
        return <Etapa3/>
      case 4:
        return <Final/>
      default:
        return <h1>Etapa Invalida</h1>
    }
  }

  proximaEtapa = () =>{
    this.setState({etapa:this.state.etapa +1})
    
  }

  render() {
    return (
      <div className="App">
        {this.renderizarEtapa()}
        {this.state.etapa<=3?<button onClick={this.proximaEtapa}>Proxima etapa</button>:<button hidden></button>}
        
      </div>
    );
  }
}
