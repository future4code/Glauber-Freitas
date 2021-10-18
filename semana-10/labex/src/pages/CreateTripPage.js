import React from 'react';
import { TextField , Button} from '@material-ui/core';
import styled from 'styled-components';
import { KeyboardDatePicker, MuiPickersUtilsProvider, KeyboardTimePicker } from '@material-ui/pickers';
import MomentUtils from '@date-io/moment'


const CreateTripForm = styled.div`
    display: flex;
    flex-direction: column;
    justify-items: center;

`

const CreateTripPage = () => {
    return (
        <div>
            <h2>Criar Viagem</h2>
            <MuiPickersUtilsProvider utils={MomentUtils}>
            <CreateTripForm>
                <TextField label={"Nome-mail"} type={"email"}/>
                <TextField label={"Planeta"} type={"password"}/>
                <KeyboardDatePicker
                    label="Data"
                    variant="inline"
                    format="dd/MM/yyy"
                    disableToolbar
                
                />
                <TextField label={"Descrição"} type={"password"}/>
                <TextField label={"Duração em dias"} type={"number"}/>
                <Button type={"submit"}>Enviar</Button>
            </CreateTripForm>
            </MuiPickersUtilsProvider>
        </div>
    )}

export default CreateTripPage