import React from 'react'
import styled from 'styled-components'

import {IconeComContador} from '../IconeComContador/IconeComContador'

import iconeCoracaoBranco from '../../img/favorite-white.svg'
import iconeCoracaoPreto from '../../img/favorite.svg'
import iconeComentario from '../../img/comment_icon.svg'
import {SecaoComentario} from '../SecaoComentario/SecaoComentario'
import compartilharBranco from '../../img/bookmark_border_black_24dp.svg'
import compartilharPreto from '../../img/bookmark_black_24dp.svg'

// Styled Components
const PostContainer = styled.div`
  border: 1px solid gray;
  width: 300px;
  margin-bottom: 10px;
`

const PostHeader = styled.div`
  height: 40px;
  display: flex;
  align-items: center;
  padding-left: 10px;
`

const PostFooter = styled.div`
  height: 40px;
  display: flex;
  align-items: center;
  padding: 0 10px;
  justify-content: space-between;
`

const UserPhoto = styled.img`
  height: 30px;
  width: 30px;
  margin-right: 10px;
  border-radius: 50%;
`

const PostPhoto = styled.img`
  width: 100%;
`

class Post extends React.Component {
  state = {
    curtido: false,
    numeroCurtidas: 5,
    comentando: false,
    numeroComentarios: 0,
    curtidoInicial: false,
    compartilhado: false,
  }
// Como a propriedade "curtido" se altera quando clica no ícone
// criei uma outra propriedade para armazenar esse valor inicial 
// e não ser alterada podendo ser feita a comparação com o valor original
  onClickCurtida = () => {
    // console.log('Curtiu!')
    this.setState({
      curtido: !this.state.curtido
      
    })
  }

  onClickComentario = () => {
    this.setState({
      comentando: !this.state.comentando
    })
  }

  onClickCompartilhar = () => {
    this.setState({
      compartilhado: !this.state.compartilhado
})

  }

  aoEnviarComentario = () => {
    this.setState({
      comentando: false,
      numeroComentarios: this.state.numeroComentarios + 1
    })
  }

  render() {
    let iconeCurtida
    let numeroCurtida = this.state.numeroCurtidas
    // let curtidoInicial = this.state.curtido

    if(this.state.curtido) {
      iconeCurtida = iconeCoracaoPreto 
      if(this.state.curtidoInicial === false)
      numeroCurtida += 1
    } else {
      iconeCurtida = iconeCoracaoBranco
      if (this.state.curtidoInicial === true)
      numeroCurtida -=1
    }

    let componenteComentario

    if(this.state.comentando) {
      componenteComentario = <SecaoComentario aoEnviar={this.aoEnviarComentario}/>
    }

let compartilhar

    if(this.state.compartilhado){
      compartilhar = compartilharPreto
    }else{
      compartilhar = compartilharBranco
    }
  

    return <PostContainer>
      <PostHeader>
        <UserPhoto src={this.props.fotoUsuario} alt={'Imagem do usuario'}/>
        <p>{this.props.nomeUsuario}</p>
      </PostHeader>

      <PostPhoto src={this.props.fotoPost} alt={'Imagem do post'}/>

      <PostFooter>
        <IconeComContador
          icone={iconeCurtida}
          onClickIcone={this.onClickCurtida}
          valorContador={numeroCurtida}
          iconeCompartilhar = {""}
        />

        <IconeComContador
          icone={iconeComentario}
          onClickIcone={this.onClickComentario}
          valorContador={this.state.numeroComentarios}
          iconeCompartilhar={compartilhar}
          onClickCompartilhar={this.onClickCompartilhar}
        />
      </PostFooter>
      {componenteComentario}
    </PostContainer>
  }
}

export default Post