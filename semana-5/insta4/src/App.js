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
      }
  
    ]
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


        // <MainContainer>
        //   <Post
        //     nomeUsuario={'paulinha'}
        //     fotoUsuario={'https://picsum.photos/50/50'}
        //     fotoPost={'https://picsum.photos/200/150'}
        //   />
        //   <Post
        //     nomeUsuario={'joãozinho'}
        //     fotoUsuario={'https://picsum.photos/50/50/'}
        //     fotoPost={'https://picsum.photos/200/150/'}
        //   />
        //   <Post
        //     nomeUsuario={'mariazinha'}
        //     fotoUsuario={'https://picsum.photos/50/50//'}
        //     fotoPost={'https://picsum.photos/200/150//'}
        //   />
        // </MainContainer>
      // );

      
    })
    return(
      <div>{posts}</div>
    )
  }
}

export default App;
