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

// const findActorByName = async (name: string): Promise<any> => {
//   const result = await connection.raw(`
//     SELECT * FROM Actor WHERE name = "${name}"
//   `)
//   return result[0]
// }

// app.get("/atores/:name", async (req: Request, res: Response) => {
//   try{
//     const name = req.params.name
//     console.log(name)
//     const result = findActorByName(name)
//     res.status(200).send({resultado: result})
//   }catch(err: any){
//     res.status(500).send({message: err.message})
//   }
// })

// const countGender = async (gender: string): Promise<any> => {
//   const result = await connection.raw(`
//       SELECT COUNT(*) FROM Actor WHERE gender = "${gender}"
//   `)
//   return result[0]
// }

// app.get("/atores", async (req: Request, res: Response) => {
//   try{
//       const count = await countGender(req.query.gender as string)
//       console.log(count)
//       res.status(200).send( {quantity: count})
//   }catch (err: any){
//       res.status(400).send({message: err.message})
//   }
// })

// const updateSalary = async (id: string, salary:number): Promise<any> => {
//   await connection("Actor")
//   .update({
//     salary: salary
//   })
//   .where("id",id)
// } 

// app.put("/atores/:id", async (req: Request, res: Response) => {
//   try{
//     await connection("Actor")
//     updateSalary(req.params.id, req.body.salary)
//     res.status(200).send("Dados atualizados com sucesso!")
//   }catch (err: any){
//     res.status(400).send({message: err.message})
//   }
// })

// const deleteActor = async (id: string): Promise<any> => {
//   await connection("Actor")
//   .delete()
//   .where("id", id)
// }

// app.delete("/atores/:id", async (req: Request, res:Response) => {
//   try{
//     await connection("Actor")
//     deleteActor(req.params.id)
//     res.status(200).send("Ator deletado")
//   }catch (err: any){
//     res.status(400).send({message: err.message})
//   }
// })



// const avgSalaryByGender = async (gender: string): Promise<any> => {
//   const result = await connection("Actor")
//   .avg("salary")
//   .where("gender", gender)
//   return result[0]
// }

// app.get("/atores/:gender", async (req: Request, res: Response) => {
//   try{
//     const avg = avgSalaryByGender(req.params.gender)
//     res.status(200).send({avg})
//   }catch (err: any){
//     res.status(400).send({message: err.message})
//   }
// })

// app.get("/atores/:id", async (req:Request, res: Response) => {
//   try{
//     const id = req.params.id
//     const actor = await connection("Actor")
//     .select("*")
//     .where("id", id)
//     console.log(actor)
//     res.status(200).send({actor})
//   }catch (err: any){
//     res.status(400).send({message: err.message})
//   }
// })

// app.get("/atores", async (req: Request, res: Response) => {
//   try{
//     const gender = req.query.gender as string
//       const count = await connection("Actor") 
//       // .select()
//       .count("*")
//       .where("gender", gender)
//       // .groupBy("gender")
//       console.log(count)
//       res.status(200).send( {quantity: count})
//   }catch (err: any){
//       res.status(400).send({message: err.message})
//   }
// })

// app.put('/atores', async (req:Request, res: Response) => {
//   try{
//       await connection("Actor")
//       .update({
//           salary: req.body.salary
//       })
//       .where({id: req.body.id})
//       res.status(200).send({message: "Salário Atualizado"})
//   }catch(err: any){
//       res.status(400).send({message: err.message})
//   }
// })

// app.delete("/atores/:id", async (req: Request, res: Response) => {
//   try{
//     await connection("Actor")
//     .delete()
//     .where("id", req.params.id)
//     res.status(200).send("Ator deletado com sucesso!")
//   }catch (err: any){
//     res.status(400).send({message: err.message})
//   }
// })

// const createMovie = async (
//   id: string,
//   title: string,
//   synopsis: string,
//   release_date: Date,
//   rating: number,
//   playing_limit_date: Date
// ) => {
//   await connection("Movies")
//   .insert({
//     id:id,
//     title:title,
//     synopsis: synopsis,
//     release_date: release_date,
//     rating: rating,
//     playing_limit_date: playing_limit_date
//   })
  
// }

// app.post("/movie", async (req: Request, res: Response) => {
//   try{
//     await createMovie(
//       req.body.id,
//       req.body.title,
//       req.body.synopsis,
//       new Date(req.body.release_date),
//       req.body.rating,
//       new Date(req.body.playing_limit_date)
//     )
//     res.status(200).send("Filme criado com sucesso!")
//   }catch (err: any){
//     res.status(400).send({message: err.message})
//   }
// })

// const getMovies = async(): Promise<any> => {
//   const result = await connection("Movies")
//   .select("*")
//   .limit(15)
//   return result
// }

// app.get("/movies/all", async(req: Request, res: Response) => {
//   try{
//     const result = await getMovies()
//     console.log(result)
//     res.status(200).send({movies: result})
//   }catch (err: any){
//     res.status(400).send({message: err.message})
//   }
// })

const findMovie = async (search: string): Promise<any> =>{
  const result = await connection("Movies")
  .select("*")
  .where("title", 'like', `%${search}%`) 
  .orWhere ("synopsis", 'like', `%${search}%`)
  return result
}

app.get("/movies/search", async (req: Request, res: Response) => {
  try{
    const search = req.query.search as string
    const result = await findMovie(search)
    res.status(200).send({movies: result})
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