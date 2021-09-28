import React from 'react';
import './App.css';
import axios from 'axios'
import md5 from 'md5';

export default class App extends React.Component {
  state = {
    personagens:[],
    picture:"",
    about:""
  }
  getPersonagens = async () =>{
    const publicKey = "a0e2657d6ce82d1eca21c13ada2530d4"
    const privateKey ="f9322250107e2f545c397c41349b45122a625bc7"
    const timeStamp = Number(new Date())
    const hash = md5(timeStamp+privateKey+publicKey)
    const response = await axios.get(`http://gateway.marvel.com/v1/public/characters?limit=10&ts=${timeStamp}&apikey=${publicKey}&hash=${hash}`)
    console.log(response.data.data.results)
    this.setState({personagens: response.data.data.results})
    // console.log(response.data.data.resuts.description)
    // this.setState({about: response.data.data.resuts.description})
  }
  componentDidMount(){
    this.getPersonagens()
  }
  getPicture = (e) => {
  
    this.setState({picture: e.target.value+'.jpg'})
    console.log(this.state.picture)
  }
  


  render (){
    const personagensList = this.state.personagens.map((personagem)=>{
      return(
        <option key={personagem.id} value={personagem.thumbnail.path}>
        
          {personagem.name}
         
        </option>
      )
    })

    
    return (
      <div className="App">
        <h1>Personagens Marvel</h1>
        <select onChange = {this.getPicture}>
          <option>Selecione um personagem</option>
          
          {personagensList}
        </select><br></br>
        {this.state.picture &&
        <img src={this.state.picture} alt={'Foto personagem'}/>
        }
      </div>
    );
  }
  
}


