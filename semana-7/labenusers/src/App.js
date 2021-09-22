import './App.css';
import CadastroUsuarios from './components/CadastroUsuarios';
import ListaUsuarios from './components/ListaUsuarios';
import React from 'react';

export default class App extends React.Component {
  state={
    pagina: true,
    botao: "Lista de Usuários"
  }

  trocarPagina=()=>{
    if (this.state.pagina)
      this.setState({pagina: !this.state.pagina, botao:"Cadastro"})
    else{
      this.setState({pagina: !this.state.pagina, botao: "Lista de Usuários"})
    }
  }
  

render(){
  return (
    <div className="App">
      {this.state.pagina?<CadastroUsuarios/>:<ListaUsuarios/>}
      <button onClick={this.trocarPagina}>{this.state.botao}</button>
    </div>
  );
}
}
