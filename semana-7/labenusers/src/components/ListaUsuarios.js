import React from 'react';
import axios from "axios"

const headers = {
    headers:{
        Authorization: "glauber-freitas-maryam"
    }
}

export default class ListaUsuarios extends React.Component{
    state = {
        users:[]
    }

    getAllUsers = async() =>{
        const url = "https://us-central1-labenu-apis.cloudfunctions.net/labenusers/users"
        try{
            const res = await axios.get(url, headers)
            this.setState({users: res.data})
            console.log(this.state.users)

        } catch(err){
            alert(err.response)
        }
    }

    deleteUser = async (id) =>{
        const url= `https://us-central1-labenu-apis.cloudfunctions.net/labenusers/users/${id}`
        try{
            const res = await axios.delete(url, headers)
            this.getAllUsers()
        } catch(err){
            console.log(err.response)
        }
    }

    componentDidMount(){
        this.getAllUsers()
    }
    render(){
        const listaUsers = this.state.users.map((user)=>{
            return( 
                <div>
                    <li key={user.id}>{user.name}
                    <button onClick ={()=> this.deleteUser(user.id)}>X</button></li>
                </div>)
        })
        return(
            <div>
                <h1>Lista de Usuários</h1>
                {listaUsers}
            </div>
        )
    }
}