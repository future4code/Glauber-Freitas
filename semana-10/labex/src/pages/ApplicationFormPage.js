import React from 'react';
import { TextField , Button} from '@material-ui/core';
import styled from 'styled-components';
import { KeyboardDatePicker, MuiPickersUtilsProvider, KeyboardTimePicker } from '@material-ui/pickers';
import MomentUtils from '@date-io/moment';
import InputLabel from '@mui/material/InputLabel';
import MenuItem from '@mui/material/MenuItem';
import FormControl from '@mui/material/FormControl';
import Select from '@mui/material/Select';

const ApplicationForm = styled.div`
    display: flex;
    flex-direction: column;
    justify-items: center;

`

const ApplicationFormPage = () => {
    return (
        // <div>ApplicationFormPage
        //     <ApplicationForm>
        //         <TextField label={"E-mail"} type={"email"}/>
        //         <TextField label={"Senha"} type={"password"}/>
        //         <Button type={"submit"}>Entrar</Button>
        //     </ApplicationForm>
        // </div>
        <div>
            <h2>Se Inscrever</h2>
            <MuiPickersUtilsProvider utils={MomentUtils}>
            <ApplicationForm>
                <TextField label={"Nome do Candidato"} type={"email"}/>
                <TextField label={"Idade"} type={"Number"}/>
                <TextField label={"Texto"} helperText={"Motivo do por que você seria um bom candidato"}/>
                <TextField label={"Profissão"}/>
                <FormControl variant="standard" >
                    <InputLabel id="dd-paises">País</InputLabel>
                    <Select
                        labelId="dd-paises"
                    >
                        <MenuItem value={'brasil'}>Brasil</MenuItem>
                        <MenuItem value={'eua'}>EUA</MenuItem>
                        <MenuItem value={'canada'}>Canada</MenuItem>
                    </Select>
                </FormControl>
                <FormControl variant="standard" >
                    <InputLabel id="dd-viagens">Viagens</InputLabel>
                    <Select
                        labelId="dd-viagens"
                    >
                        <MenuItem value={1}>Mercurio</MenuItem>
                        <MenuItem value={2}>Venus</MenuItem>
                        <MenuItem value={3}>Marte</MenuItem>
                    </Select>
                </FormControl>
                <Button type={"submit"}>Enviar</Button>
            </ApplicationForm>
            </MuiPickersUtilsProvider>
        </div>
    )}

export default ApplicationFormPage