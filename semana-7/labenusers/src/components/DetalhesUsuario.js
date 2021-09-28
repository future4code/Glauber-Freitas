import React from 'react';
import axios from 'axios'

const headers = {
    headers:{
        Authorization: "glauber-freitas-maryam"
    }
}

export default class DetalhesUsuario extends React.Component{
    state = {
    user:{},
    }

    getUserById = async (id) =>{
        const url =`https://us-central1-labenu-apis.cloudfunctions.net/labenusers/users/${id}`
        try{
            console.log(this.props.id, "teste")
            const res = await axios.get(url, headers)
            this.setState({user: res.data})
            console.log(this.state.user)
        } catch(err){
            console.log(err.response)
        }
    }
    componentDidMount=()=>{
        this.getUserById(this.props.id)
    }
    

    render(){
        return(
            <div>
                {this.state.user.name}<br></br>
                {this.state.user.email}<br></br>
                <button onClick ={()=> this.props.lista()}>Voltar</button>
            </div>
        )
    }
}

