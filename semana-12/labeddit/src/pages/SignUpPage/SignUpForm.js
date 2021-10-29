import { Button, TextField } from '@material-ui/core';
import React from 'react';
import { useHistory } from 'react-router';
import useForm from '../../hooks/useForm';
import { signUp } from '../../services/user';
import { InputsContainer } from '../LoginPage/style';


const SignUpForm = ({setLogButtonText}) => {
    const history = useHistory()
    const [form, onChange, clear] = useForm({name:"", email:"", password:""})

    const onSubmitForm = (e) => {
        e.preventDefault()
        signUp(form, clear, history, setLogButtonText)
        console.log(form)
    }
    return (
        <InputsContainer>
            <form onSubmit={onSubmitForm}>
                <TextField 
                    name={'name'}
                    value={form.name}
                    onChange={onChange}
                    label={'Nome'}
                    fullWidth
                    margin={'normal'}
                    required
                    type={'text'}
                />
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
                    Cadastrar
                </Button>
            </form>
        </InputsContainer>
    );
}

export default SignUpForm;