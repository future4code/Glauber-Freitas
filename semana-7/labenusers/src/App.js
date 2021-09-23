import './App.css';
import CadastroUsuarios from './components/CadastroUsuarios';
import ListaUsuarios from './components/ListaUsuarios';
import React from 'react';
import DetalhesUsuario from './components/DetalhesUsuario';

export default class App extends React.Component {
  state={
    pagina: "cadastro",
    botao: "Lista de Usuários",
    idDetalhe:""
  }

  // trocarPagina=()=>{
  //   if (this.state.pagina)
  //     this.setState({pagina: !this.state.pagina, botao:"Cadastro"})
  //   else{
  //     this.setState({pagina: !this.state.pagina, botao: "Lista de Usuários"})
  //   }
  // }
  
  detalhar=(id)=>{
    this.setState({idDetalhe: id})
    this.setState({pagina: "detalhes"})
  }

  principal=()=>{
    this.setState({pagina:"cadastro"})
  }

  listarUsuarios=()=>{
    this.setState({pagina: "listaUsuarios"})
  }

  selecionaPagina = () => {
    switch(this.state.pagina){
      case "cadastro":
        return <CadastroUsuarios
                lista={this.listarUsuarios}
              />
      case "listaUsuarios":
        return <ListaUsuarios
                  detalhar={this.detalhar}
                  principal = {this.principal}
              />
      case "detalhes":
        return <DetalhesUsuario
                id={this.state.idDetalhe}
                lista={this.listarUsuarios}
                />
      default:
        return <div>PAGINA NÃO ENCONTRADA</div>
    }
  }

render(){
  return (
    <div className="App">
      {this.selecionaPagina()}
    </div>
  );
}
}
