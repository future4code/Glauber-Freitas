import express, { Express, Request, Response } from 'express'
import cors from 'cors'
import { AddressInfo } from 'net'
import connection from "./connections";

const app: Express = express()

app.use(express.json())
app.use(cors())


app.get("/", (req, res) => {
    res.send("Hello from Express!");
});

const findActorByName = async (name: string): Promise<any> => {
  const result = await connection.raw(`
    SELECT * FROM Actor WHERE name = "${name}"
  `)
  return result[0]
}

app.get("/atores/:name", async (req: Request, res: Response) => {
  try{
    const name = req.params.name
    console.log(name)
    const result = findActorByName(name)
    res.status(200).send({resultado: result})
  }catch(err: any){
    res.status(500).send({message: err.message})
  }
})

const countGender = async (gender: string): Promise<any> => {
  const result = await connection.raw(`
      SELECT COUNT(*) FROM Actor WHERE gender = "${gender}"
  `)
  return result[0]
}

app.get("/atores", async (req: Request, res: Response) => {
  try{
      const count = await countGender(req.query.gender as string)
      console.log(count)
      res.status(200).send( {quantity: count})
  }catch (err: any){
      res.status(400).send({message: err.message})
  }
})

const server = app.listen(process.env.PORT || 3003, () => {
    if(server){
        const address = server.address() as AddressInfo
        console.log(`Server is running in http://localhost:${address.port}`)
    }else {
        console.error(`Failure upon starting server`)
    }
})