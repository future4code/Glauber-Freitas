import React from 'react';
import styled from 'styled-components'
import Post from './components/Post/Post';

const MainContainer = styled.div`
  display: flex;
  justify-content: center;
  flex-direction: column;
  align-items: center;
`


class App extends React.Component {

  state = {
    posts:[
      {
        nomeUsuario: "paulinha",
        fotoUsuario: "https://picsum.photos/50/50",
        fotoPost: "https://picsum.photos/200/150"
      },
      {
        nomeUsuario: "joãozinho",
        fotoUsuario: "https://picsum.photos/50/50/",
        fotoPost: "https://picsum.photos/200/150/"
      },
      {
        nomeUsuario: "mariazinha",
        fotoUsuario: "https://picsum.photos/50/50//",
        fotoPost: "https://picsum.photos/200/150//"
      },
      {
        nomeUsuario: "zezinho",
        fotoUsuario: "https://picsum.photos/50/50///",
        fotoPost: "https://picsum.photos/200/150///"
      }
  
    ],
    valorInputNome:"",
    valorInputFotoUsuario:"",
    valorInputFotoPost:""
  }
  
  adicionarPost = () =>{
    const novoPost ={
      nomeUsuario: this.state.valorInputNome,
      fotoUsuario: this.state.valorInputFotoUsuario,
      fotoPost: this.state.valorInputFotoPost
    }
    const novoPosts=[novoPost, ...this.state.posts]
    this.setState({
      posts: novoPosts,
      valorInputNome:"",
      valorInputFotoUsuario:"",
      valorInputFotoPost:""
    })
  }

  onChangeInputNome = (event) =>{
    this.setState({valorInputNome: event.target.value})
  }

onChangeInputFotoUsuario = (event) => {
  this.setState({valorInputFotoUsuario: event.target.value})
}

onChangeInputFotoPost = (event) => {
  this.setState({valorInputFotoPost: event.target.value})
}

  render() {
    const posts = this.state.posts.map((cadaPost)=>{
      return (
        <MainContainer key={cadaPost.nomeUsuario}>
            <Post
            nomeUsuario={cadaPost.nomeUsuario}
            fotoUsuario={cadaPost.fotoUsuario}
            fotoPost={cadaPost.fotoPost} />
        </MainContainer>
      )
    })
    return(
      <MainContainer>
        <input
          placeholder={"Nome de Usuário"}
          onChange={this.onChangeInputNome}
          value={this.state.valorInputNome}
        />
        <input
          placeholder={"Foto de Usuário"}
          onChange={this.onChangeInputFotoUsuario}
          value={this.state.valorInputFotoUsuario}
        />
        <input
          placeholder={"Foto do Post"}
          onChange={this.onChangeInputFotoPost}
          value={this.state.valorInputFotoPost}
        />
        <button onClick={this.adicionarPost} >Adicionar Post</button>
        <div>{posts}</div>
      </MainContainer>
    )
  }
}

export default App;
