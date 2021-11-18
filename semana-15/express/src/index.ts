import express, {Express, Request, Response} from 'express'
import cors from 'cors'
import { AddressInfo } from 'net'
import {countries} from "./data"

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
            if(res.statusCode === 200){
                res.status(500).end()
            }else {
                res.end()
            }
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