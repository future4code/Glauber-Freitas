import express, { Express, Request, Response} from "express";
import cors from "cors";
import { AddressInfo } from "net";
import {users} from './data'
import {user, UserType} from './types'

const app: Express = express();

app.use(express.json());
app.use(cors());



app.get("/users", (req: Request, res: Response) => {
    let errorCode = 400
    
    try{
        const allUsers: user[] = users
        if(!allUsers){
            errorCode = 404
            throw new Error('Nenhum usuário encontrado')
        }
        res.status(200).send(allUsers)
    }catch(err: any){
        res.status(errorCode).send({message: err.message})
    }
})

app.get("/users/search", (req:Request, res: Response) => {
    let errorCode = 400
    try{
        let userFind: user[] | undefined
        const userType: string = req.query.usertype as string
        const userName: string = req.query.userName as string
        if(userType !== "ADMIN" && userType !== "NORMAL" && userType !== undefined ){
            errorCode = 400
            throw new Error("Parâmetro inválido")
        }else if(userType && userName){
            userFind = users.filter(user => user.type === userType && user.name === userName)
        }else if(userType && !userName){
            userFind = users.filter(user => user.type === userType)
        }else if(!userType && userName){
            userFind = users.filter(user => user.name === userName)
        }else{
            throw new Error("Inclua algum parâmetro de busca")
        }
        if(userFind.length===0){
            errorCode = 404
            throw new Error('Nenhum usuário encontrado')
        }
        res.status(200).send(userFind)
    }catch(err: any){
        res.status(errorCode).send({message: err.message})
    }
}) 

app.put("/users", (req: Request, res: Response) => {
    let errorCode = 400
    try{
        const {id, name, email, type, age} = req.body
        console.log({id, name, email, type, age})
        if(!id || !name || !email || !type || !age){
            errorCode = 422
            throw new Error('Verifique os campos')
        }
        const newUser: user = {
            id,
            name,
            email,
            type,
            age
        }
        users.push(newUser)
        res.status(200).send({message: "Usuário criado"})
    }catch(err: any){
        res.status(errorCode).send({merssage: err.message})
    }
})

const server = app.listen(process.env.PORT || 3003, () => {
    if(server){
        const address = server.address() as AddressInfo
        console.log(`Server is running in http://localhost:${address.port}`)
    }else {
        console.error(`Failure upon starting server`)
    }
});
