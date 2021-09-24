import React from 'react';
import './App.css';
import axios from 'axios'

const headers = {
  headers:{
      Authorization: "glauber-freitas-maryam"
  }
}

export default class App extends React.Component {
  state={
    playlists:[],
    tracks:[],
    playlistName:"",
    playlistNameDetails:""
  }

  getAllPlaylists = async() =>{
    const url = "https://us-central1-labenu-apis.cloudfunctions.net/labefy/playlists"
    try{
        const res = await axios.get(url, headers)
        console.log('playlists',this.state.playlists)
        console.log(res.data.result.list)
        this.setState({playlists: res.data.result.list})
        console.log('playlist montada',this.state.playlists)

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
      console.log(this.state.tracks)
    }catch(err){
      alert(err.response)
    }
  }

  handlePlaylistName = (event) => {
    this.setState({playlistName: event.target.value})
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

  componentDidMount(){
    this.getAllPlaylists()
  }

  render(){
    const todasPlaylists = this.state.playlists.map((playlist)=>{
      return( 
          <div>
              <li key={playlist.id}>{playlist.name}
              <button onClick ={()=> this.getPlaylistTracks(playlist.id, playlist.name)}>Detalhes</button>
              <button onClick ={()=> this.deletePlaylist(playlist.id)}>Excluir</button></li>
          </div>)
    })
    const tracks = this.state.tracks.map((track)=>{
      return(
        <div>
          
          <li key={track.id}>
            {track.name}
            <iframe title={track.name} src={track.url} width="100%" height="380" frameBorder="0" allowtransparency="true" allow="encrypted-media"></iframe>
          </li>
        </div>
      )
    })
    return (
      <div className="App">
        <h1>Labefy</h1>
        <input
            placeholder="Playlist"
            value={this.state.playlistName}
            onChange={this.handlePlaylistName}
        />
        <button onClick ={()=> this.createPlaylist()}>Salvar</button>
        <hr></hr>
        {todasPlaylists}
        <h2>{this.state.playlistNameDetails}</h2>
        {tracks}
      </div>
    );
  }
  
}

// "https://open.spotify.com/track/56fiFTRrSiHHH3gBeaTg2P?si=817b77ae0a3e4b23",


{/* <iframe src="https://open.spotify.com/embed/track/56fiFTRrSiHHH3gBeaTg2P" width="100%" height="380" frameBorder="0" allowtransparency="true" allow="encrypted-media"></iframe> */}