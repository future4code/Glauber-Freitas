import React from 'react';
import axios from "axios"

const headers = {
    headers:{
        Authorization: "glauber-freitas-maryam"
    }
}

export default class CadastroUsuarios extends React.Component{
    state = {
        users:[],
        userName: "",
        userEmail:""
    }

    handleUserName = (event) => {
        this.setState({userName: event.target.value})
    }
    
    handleUserEmail = (event) => {
        this.setState({userEmail: event.target.value})
    }

    createUser = async () =>{
        const url = "https://us-central1-labenu-apis.cloudfunctions.net/labenusers/users"
        const body = {
                "name": this.state.userName,
                "email": this.state.userEmail
        }
        try{
            const res = await axios.post(url, body, headers)
            this.setState({userName: "",userEmail:""})
            alert("Usuário Criado")
        }catch(err){
            alert(err.response.data.message)
        }
    }

    render(){
        return(
            <div>
                <h1>Digite seu nome e e-mail</h1>
                <input
                    placeholder="Nome"
                    value={this.state.userName}
                    onChange={this.handleUserName}
                /><br/>
                <input
                placeholder="E-mail"
                    value={this.state.userEmail}
                    onChange={this.handleUserEmail}
                /><br></br>
                <button onClick={this.createUser}>Salvar</button>
            </div>
        )
    }
}