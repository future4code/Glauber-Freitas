import { TextField, Button} from '@material-ui/core';
import React from 'react';
import useForm from "../../hooks/useForm"
import { InputsContainer } from './styled';
import {addComment} from '../../services/post'
import useRequestData from '../../hooks/useRequestData';
import {BASE_URL} from "../../constants/urls"

const PostDetailForm = (props) => {
    const[form, onChange, clear] = useForm({body:""})
    const onSubmitForm = (e) => {
        e.preventDefault()
        console.log("Form", form)
        console.log("props", props.post)
        // login(form, clear, history, setLogButtonText)
        addComment(props.post.id, form, clear)
        
    }
    return (
        <div>
            <InputsContainer>
                <form onSubmit={onSubmitForm}>
                    <TextField 
                        name={"body"}
                        placeholder={"Escreva seu Comentario"}
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
                        Postar Comentario
                    </Button>
                </form>
            </InputsContainer>
        </div>
    );
}

export default PostDetailForm;