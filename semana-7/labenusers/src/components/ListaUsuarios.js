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

    

    getAllUsers = ()=>{
        const url = "https://us-central1-labenu-apis.cloudfunctions.net/labenusers/users"
        axios
            .get(url, headers)
            .then((res)=>{
                this.setState({users: res.data})
                console.log(this.state.users)
            })
            .catch((err)=>{
                            console.log(err.response)
                        })
    }

    deleteUser = (id) =>{
        const url= `https://us-central1-labenu-apis.cloudfunctions.net/labenusers/users/${id}`
        axios
            .delete(url, headers)
            .then((res)=>{
                this.getAllUsers()
            })
            .catch((err)=>{
                console.log(err.response)
            })
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