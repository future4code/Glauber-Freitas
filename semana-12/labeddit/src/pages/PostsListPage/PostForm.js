import { TextField, Button} from '@material-ui/core';
import React from 'react';
import useForm from "../../hooks/useForm"
import { InputsContainer } from './style';
import {addPost} from "../../services/post"

const PostForm = (props) => {
    const[form, onChange, clear] = useForm({title:"", body:""})
    const onSubmitForm = (e) => {
        e.preventDefault()
        console.log("Post", form)
        // login(form, clear, history, setLogButtonText)
        addPost(form, clear)
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
                        Criar Post
                    </Button>
                </form>
            </InputsContainer>
        </div>
    );
}

export default PostForm;