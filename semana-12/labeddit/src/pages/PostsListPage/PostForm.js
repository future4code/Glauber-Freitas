import { TextField, Button} from '@material-ui/core';
import React from 'react';
import useForm from "../../hooks/useForm"
import { InputsContainer } from './style';

const PostForm = () => {
    const[form, onChange, clear] = useForm({title:"", post:""})
    const onSubmitForm = (e) => {
        e.preventDefault()
        // login(form, clear, history, setLogButtonText)
    }
    return (
        <div>
            <InputsContainer>
                <form onSubmit={onSubmitForm}>
                    <TextField 
                        name={"title"}
                        placeholder={"Título do post"}
                        value={form.title}
                        onChange={onChange}
                        fullWidth
                        margin={'normal'}
                        type={'text'}
                    />
                    <TextField 
                        name={"post"}
                        placeholder={"Escreva seu Post"}
                        value={form.post}
                        onChange={onChange}
                        fullWidth
                        margin={'normal'}
                        type={'text'}
                    />
                    <Button
                        type={'submit'}
                        fullWidth
                        variant={'contained'}
                        color={'primary'}
                    >
                        Criar Post
                    </Button>
                </form>
            </InputsContainer>
        </div>
    );
}

export default PostForm;