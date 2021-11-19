import express, {Express, Request, Response} from 'express'
import cors from 'cors'
import { AddressInfo } from 'net'
import {countries} from "./data"
import { country, CONTINENTS } from './types'

const app: Express = express()

app.use(express.json())
app.use(cors())

//ENDPOINT para retornar todos os países
app.get(
    "/countries",
    (req: Request, res: Response)=>{
        try{
            const result = countries.map((country)=>({
                id: country.id,
                name: country.name
            }))
            res.status(200).send(result)
        }catch (err: any){
            res.status(400).send({message: err.message})
        }
        
    })

//ENDPOINT para retornar os países a partir de um filtro
app.get(
    "/countries/search", 
    (req: Request, res: Response) => {
        try{
            if(!req.query.name && !req.query.capital && !req.query.continent){
                res.statusCode = 400
                throw new Error("Adicione pelo menos um parametro")
            }

            let result: country[] = countries

            if(req.query.name){
                result = result.filter((country)=>{
                    return country.name.toLowerCase().includes(req.query.name as string)
                })
            }

            if(req.query.capital){
                result = result.filter((country)=>{
                    return country.capital.toLowerCase().includes(req.query.capital as string)
                })
            }

            if(req.query.continent){
                result = result.filter((country)=>{
                    return country.continent.toLowerCase().includes(req.query.continent as string)
                })
            }
            if (result){
                res.status(200).send(result)
            }else {
                res.status(404).send("País não encontrado")
            }
        }catch (err: any){
            res.status(400).send({message: err.message})
        }
})

//ENDPOINT  para retornar o país pelo id
app.get(
    "/countries/:id", 
    (req: Request, res: Response) => {
        try{
            const id = req.params.id
            // console.log(id)
            const result: country | undefined = countries.find((country)=>{
                return country.id === Number(id)
            })
            if (result){
                res.status(200).send(result)
            }else {
                res.status(404).send("País não encontrado")
            }
        }catch(err: any) {
            res.status(400).send({message: err.message})
    }
})

//ENDPOINT  para alterar o nome de um país ou de sua capital
app.put(
    "/countries/:id", 
    (req: Request, res: Response) => {
        try{
            const id = req.params.id
            let result = countries.find((country)=>{
                return country.id === Number(id)
            })

            const newResult = {
                id: result?.id,
                name: req.body.name,
                capital: req.body.capital,
                continent: result?.continent
            }
            if (result === undefined){
                throw new Error("Nenhum resultado foi encontrado")
            }
            result.name = newResult.name
            result.capital = newResult.capital
            res.status(200).send(newResult)
        }catch (err: any){
            res.status(400).send({message: err.message})
        }
})


const server = app.listen(process.env.PORT || 3003, ()=>{
    if(server){
        const address = server.address() as AddressInfo
        console.log(`Servidor rodando em http://localhost:${address.port}`)
    }else{
        console.error(`Falha ao iniciar o servidor`)
    }
})