import React from 'react';
import './App.css';
import axios from 'axios'
import styled from 'styled-components'


const Titulo = styled.h1`
font-size: 80px;
font-family: 'Metal Mania', cursive;
`

const Iframe = styled.iframe`
  
  height: 80px;
  width: 500px;
  border-top-left-radius: 20px;
  border-bottom-left-radius: 20px;
`
const Detalhes = styled.div`
  display: flex;
  justify-content: center
`

const Playlists = styled.div`
  font-size: 20px;
  font-weight: bolder;
  width: 250px;
  display: flex;
  justify-content: space-between;
`

const Main = styled.div`
  text-align: center;
  background-color: #444;
`
const Musicas = styled.div`
  display: flex;
  justify-content: center;
  align-itens: center
`
const Button = styled.button`
border-top-right-radius: 20px;
border-bottom-right-radius: 20px;
color: white;
background-color: black;
border: none;
`

const headers = {
  headers:{
      Authorization: "glauber-freitas-maryam"
  }
}

export default class App extends React.Component {
  state={
    playlists:[],
    tracks:[],
    trackName:"",
    trackAutor:"",
    trackUrl:"",
    trackId:"",
    playlistName:"",
    playlistNameDetails:"",
    playlistId:"",
  }

  getAllPlaylists = async() =>{
    const url = "https://us-central1-labenu-apis.cloudfunctions.net/labefy/playlists"
    try{
        const res = await axios.get(url, headers)
        console.log('playlists',this.state.playlists)
        console.log(res.data.result.list)
        this.setState({playlists: res.data.result.list})
        console.log('playlist montada',this.state.playlists)
        console.log(res.data.result)
    } catch(err){
        alert(err.response)
    }
  }

  getPlaylistTracks = async(id, name) => {
    const url = `https://us-central1-labenu-apis.cloudfunctions.net/labefy/playlists/${id}/tracks`
    
    try{
      const res = await axios.get(url, headers)
      console.log("res", res.data.result.tracks)
      this.setState({tracks: res.data.result.tracks})
      this.setState({playlistNameDetails:name})
      this.setState({playlistId: id})
    }catch(err){
      alert(err.response)
    }
  }

  handlePlaylistName = (e) => {
    this.setState({playlistName: e.target.value})
  }

  handleTrackName = (e) => {
    this.setState({trackName: e.target.value})
  }
  handleTrackUrl = (e) => {
    this.setState({trackUrl: e.target.value})
  }
  handleTrackId = (e) => {
    this.setState({trackId: e.target.value})
  }
  handleTrackAutor = (e) => {
    this.setState({trackAutor: e.target.value})
  }

  createPlaylist = async() => {
    const url ="https://us-central1-labenu-apis.cloudfunctions.net/labefy/playlists"
    const body = {
      "name": this.state.playlistName
    }
    try{
      const res =await axios.post(url, body, headers)
      this.setState({playlistName:""})
      alert("Playlist criada")
      this.getAllPlaylists()
    }catch(err){
      alert(err.response)
    }
  }

  deletePlaylist = async (id) =>{
    const url= `https://us-central1-labenu-apis.cloudfunctions.net/labefy/playlists/${id}`
    const confirmaDelete = window.confirm("Deseja deletar a playlist?")
    if(confirmaDelete){
        try{
            const res = await axios.delete(url, headers)
            this.getAllPlaylists()
            this.setState({playlistNameDetails:""})
            alert("Playlist deletada")
        } catch(err){
            console.log(err.response)
        }
    } else
        alert("Playlist não deletada")
  }

  addTrackToPlayList = async (id) =>{
    const url =`https://us-central1-labenu-apis.cloudfunctions.net/labefy/playlists/${id}/tracks`
    const body= {
      "name": this.state.trackName, 
      "artist": this.state.trackAutor,
      "url": this.state.trackUrl
    }
    console.log(id, "id")
    try{
      
      const res = await axios.post(url, body, headers)
      alert("Música inserida")
      console.log(this.state.playlistNameDetails, "playlist name")
      this.getPlaylistTracks(id, this.state.playlistNameDetails)
      

    }catch(err){
      console.log(err.response)
      alert(err.response)
    }
  }

  removeTrackFromPlaylits = async(trackId, playlistId) => {
    const url = `https://us-central1-labenu-apis.cloudfunctions.net/labefy/playlists/${playlistId}/tracks/${trackId}`
    const confirmaDelete = window.confirm("Deseja deletar a música?")
    if(confirmaDelete)
      try{
        const res = await axios.delete(url, headers)
        alert("Música deletada")
        this.getPlaylistTracks(playlistId, this.state.playlistNameDetails)

      }catch(err){
        console.log(err.response)

      }
  }

  componentDidMount(){
    this.getAllPlaylists()
  }

  render(){
    const todasPlaylists = this.state.playlists.map((playlist)=>{
      return( 
        <Detalhes>
              <Playlists key={playlist.id}>
                {playlist.name}
                <section>
                  <button onClick ={()=> this.getPlaylistTracks(playlist.id, playlist.name)}>Detalhes</button>
                  <button onClick ={()=> this.deletePlaylist(playlist.id)}>Excluir</button>
                </section>
              </Playlists>
        </Detalhes>
      )

    })
    const tracks = this.state.tracks.map((track)=>{
      return(
          <Musicas key={track.id}>
            {/* {track.name} */}
            <Iframe title={track.name} src={track.url} width="100%" height="380" frameBorder="0" allowtransparency="true" allow="encrypted-media"></Iframe>
            <Button onClick={()=> this.removeTrackFromPlaylits(track.id, this.state.playlistId)}>Deletar</Button>
          </Musicas>
      )
    })
    return (
      <Main>
        <Titulo>Labefy</Titulo>
        <div>
          
          <input
              placeholder="Playlist"
              value={this.state.playlistName}
              onChange={this.handlePlaylistName}
          />
          <button onClick ={()=> this.createPlaylist()}>Salvar</button>
          <hr></hr>
          {todasPlaylists}
          {this.state.playlistNameDetails===""?"":<div>
            <h1>{this.state.playlistNameDetails}</h1>
            <h2>Adicionar Músicas</h2>
            <input
                placeholder="Nome da Música"
                value={this.state.trackName}
                onChange={this.handleTrackName}
                
            />
            <input
                placeholder="Autor"
                value={this.state.trackAutor}
                onChange={this.handleTrackAutor}
                
            />
            <input
                placeholder="Url"
                value={this.state.trackUrl}
                onChange={this.handleTrackUrl}
                
            />
            <button onClick={()=>this.addTrackToPlayList(this.state.playlistId)}>Salvar</button>
          </div>}
        </div><br></br>
        {tracks}
      </Main>
    );
  }
  
}