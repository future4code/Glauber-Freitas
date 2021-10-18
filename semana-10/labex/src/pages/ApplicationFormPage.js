import React, { useEffect, useState } from 'react';
import { TextField , Button} from '@material-ui/core';
import styled from 'styled-components';
import InputLabel from '@mui/material/InputLabel';
import MenuItem from '@mui/material/MenuItem';
import FormControl from '@mui/material/FormControl';
import Select from '@mui/material/Select';
import axios from 'axios';

const ApplicationForm = styled.form`
    display: flex;
    flex-direction: column;
    justify-items: center;

`

const ApplicationFormPage = () => {
    const [trips, setTrips] = useState([])
    const [form, setForm] = useState({
        name:'',
        age:0,
        text:'',
        prof:'',
        country:'',
        trip:''
    })
    const onChangeInput =(e) =>{
        const value = e.target.value
        const fieldName = e.target.name

        setForm({...form, [fieldName]: value})
    }
        
    useEffect(() =>{
        axios
            .get('https://us-central1-labenu-apis.cloudfunctions.net/labeX/glauber-freitas-maryam/trips')
            .then ((res)=>{
            setTrips(res.data.trips)
        })
    }, [])

    const onSubmitApp = (e) =>{
        e.preventDefault()
        const body = {
            name: form.name,
            age: form.age,
            applicationText: form.text,
            profession: form.prof,
            country: form.country,
        }
        console.log("entrei", form.trip.id)
        axios.post(`https://us-central1-labenu-apis.cloudfunctions.net/labeX/glauber-freitas-maryam/trips/${form.trip.id}/apply`, body)
    }
    return (
        <div>
            <h2>Se Inscrever</h2>
            
            <ApplicationForm onSubmit={onSubmitApp}>
                <TextField 
                    label={"Nome do Candidato"} 
                    onChange={onChangeInput} 
                    name={'name'}
                    value={form['name']} 
                />
                <TextField 
                    label={"Idade"} 
                    type={"Number"}
                    onChange={onChangeInput} 
                    name={'age'}
                    value={form['age']} 
                />
                <TextField 
                    label={"Texto"} 
                    helperText={"Motivo do por que você seria um bom candidato"}
                    onChange={onChangeInput} 
                    name={'text'}
                    value={form['text']} 
                    />
                <TextField 
                    label={"Profissão"}
                    onChange={onChangeInput} 
                    name={'prof'}
                    value={form['prof']} 
                />
                <FormControl variant="standard" >
                    <InputLabel id="dd-paises">País</InputLabel>
                    <Select
                        labelId="dd-paises"
                        onChange={onChangeInput} 
                        name={'country'}
                        value={form['country']} 
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
                        onChange={onChangeInput} 
                        name={'trip'}
                        value={form['trip']} 
                    >
                        {trips.map((trip)=>{
                            return <MenuItem value={trip}>{trip.name}</MenuItem>
                        })}
                    </Select>
                </FormControl>
                <Button type={'submit'}>Enviar</Button>
            </ApplicationForm>
            
        </div>
    )}

export default ApplicationFormPage