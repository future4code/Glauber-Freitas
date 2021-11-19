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
        const userType: string = req.query.usertype as string
        const userFind: user[] | undefined = users.filter(user => user.type === userType)
        if(!userFind){
            errorCode = 404
            throw new Error('Nenhum usuário encontrado')
        }
        res.status(200).send(userFind)
    }catch(err: any){
        res.status(errorCode).send({message: err.message})
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
