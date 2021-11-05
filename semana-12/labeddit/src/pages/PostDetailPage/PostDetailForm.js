import { TextField, Button, CircularProgress} from '@material-ui/core';
import React, { useState } from 'react';
import useForm from "../../hooks/useForm"
import { InputsContainer } from './styled';
import {addComment} from '../../services/post'

const PostDetailForm = (props) => {
    const [isLoading, setIsLoading] = useState(false)
    const[form, onChange, clear] = useForm({body:""})
    const onSubmitForm = (e) => {
        e.preventDefault()
        addComment(props.post.id, form, clear, setIsLoading)
        props.getPostComents()
        
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
                        {isLoading ? <CircularProgress color={"inherit"} size={24} />: <>Postar comentario</>}
                    </Button>
                </form>
            </InputsContainer>
        </div>
    );
}

export default PostDetailForm;