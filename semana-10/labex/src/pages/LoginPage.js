import React, { useEffect, useState } from 'react';
import styled from 'styled-components';
import { TextField , Button} from '@material-ui/core';
import axios from 'axios';
import {useHistory} from "react-router-dom"

const LoginForm = styled.form`
    display: flex;
    flex-direction: column;
    justify-items: center;

`

const LoginPage = () => {
    const history = useHistory()
    const [form, setForm] = useState({
        email:'',
        password:''
    })
    const onChangeInput =(e) =>{
        const value = e.target.value
        const fieldName = e.target.name

        setForm({...form, [fieldName]: value})
    }
    const onSubmitLogin = (e) =>{
        e.preventDefault()
        console.log(form)
        const body = {
            email: form.email,
            password: form.password
        }
        axios
            .post(`https://us-central1-labenu-apis.cloudfunctions.net/labeX/glauber-freitas-maryam/login`, body)
            .then((res)=>{
                console.log(res.data.token)
                localStorage.setItem('token', res.data.token)
                history.push('/viagens')
            })
            .catch((err)=>{
                console.log(err.message)
            })
    }
    return <div>
        <h2>Login</h2> 
        <LoginForm onSubmit={onSubmitLogin}>
            <TextField 
                label={"email"} 
                type={"email"}
                onChange={onChangeInput}
                value={form['email']}
                name={'email'}
            />
            <TextField 
                label={"Senha"} 
                type={"password"}
                onChange={onChangeInput}
                value={form['password']}
                name={'password'}
            />
            <Button type={"submit"}>Entrar</Button>
        </LoginForm>
    </div>
}

export default LoginPage