import { TextField, Button} from '@material-ui/core';
import React from 'react';
import useForm from "../../hooks/useForm"
import { InputsContainer } from './styled';

const PostDetailForm = () => {
    const[form, onChange, clear] = useForm({comment:""})
    const onSubmitForm = (e) => {
        e.preventDefault()
        // login(form, clear, history, setLogButtonText)
    }
    return (
        <div>
            <InputsContainer>
                <form onSubmit={onSubmitForm}>
                    <TextField 
                        name={"comment"}
                        placeholder={"Escreva seu Comentario"}
                        value={form.comment}
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
                        Postar Comentario
                    </Button>
                </form>
            </InputsContainer>
        </div>
    );
}

export default PostDetailForm;