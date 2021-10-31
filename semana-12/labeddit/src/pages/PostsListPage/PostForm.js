import { TextField, Button, CircularProgress} from '@material-ui/core';
import React, { useState } from 'react';
import useForm from "../../hooks/useForm"
import { InputsContainer } from './style';
import {addPost} from "../../services/post"

const PostForm = (props) => {
    const [isLoading, setIsLoading] = useState(false)
    const[form, onChange, clear] = useForm({title:"", body:""})
    const onSubmitForm = (e) => {
        e.preventDefault()
        addPost(form, clear, setIsLoading)
        props.getPosts()
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
                        name={"body"}
                        placeholder={"Escreva seu Post"}
                        value={form.body}
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
                        onClick={onSubmitForm}
                    >
                        {isLoading ? <CircularProgress color={"inherit"} size={24} />: <>Criar Post</>}
                    </Button>
                </form>
            </InputsContainer>
        </div>
    );
}

export default PostForm;