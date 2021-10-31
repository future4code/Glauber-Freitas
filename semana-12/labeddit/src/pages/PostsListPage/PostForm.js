import { TextField, Button} from '@material-ui/core';
import React from 'react';
import useForm from "../../hooks/useForm"
import { InputsContainer } from './style';

const PostForm = () => {
    const[form, onChange, clear] = useForm()
    const onSubmitForm = (e) => {
        e.preventDefault()
        // login(form, clear, history, setLogButtonText)
    }
    return (
        <div>
            <InputsContainer>
                <form onSubmit={onSubmitForm}>
                    <TextField />
                    <TextField />
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