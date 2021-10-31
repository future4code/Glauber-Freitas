import { Button, CircularProgress, TextField } from '@material-ui/core';
import React, { useState } from 'react';
import { InputsContainer } from './style';
import useForm from "../../hooks/useForm"
import {login} from "../../services/user"
import { useHistory } from 'react-router';


const LoginForm = ({setLogButtonText}) => {
    const history = useHistory()
    const [form, onChange, clear] = useForm({email:"", password:""})
    const [isLoading, setIsLoading] = useState(false)

    const onSubmitForm = (e) => {
        e.preventDefault()
        login(form, clear, history, setLogButtonText, setIsLoading)
    }

    return ( 
        <InputsContainer>
            <form onSubmit={onSubmitForm}>
                <TextField 
                    name={'email'}
                    value={form.email}
                    onChange={onChange}
                    label={'E-mail'}
                    fullWidth
                    margin={'normal'}
                    required
                    type={'email'}
                />
                <TextField 
                    name={'password'}
                    value={form.password}
                    onChange={onChange}
                    label={'Senha'}
                    fullWidth
                    margin={'normal'}
                    required
                    type={'password'}
                />
                <Button
                    type={'submit'}
                    fullWidth
                    variant={'contained'}
                    color={'primary'}
                >
                    {isLoading ? <CircularProgress color={"inherit"} size={24} />: <>Fazer Login</>}
                </Button>
            </form>
        </InputsContainer>

    );
}

export default LoginForm;