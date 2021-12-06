import express, {Express} from 'express'
import cors from 'cors'
import { AddressInfo } from "net";

const app: Express = express();

app.use(express.json());
app.use(cors());

//Respostas do exercícios
//1 a-
//O construtor serve para criar uma instância de uma classe, para chamá-lo usamos o new"nome da classe"
//b - 
//A mensagem aparece apenas uma vez
//c -
//Para acessarmos as propriedades privadas de uma classe usamos os metodos get e set.

class UserAccount {
    private cpf: string;
    private name: string;
    private age: number;
    private balance: number = 0;
    //private transactions: Transaction[] = [];

    constructor(
        cpf: string,
        name: string,
        age: number,
    ) {
        console.log("Chamando o construtor da classe UserAccount")
        this.cpf = cpf;
        this.name = name;
        this.age = age;
    }

    getcpf(): string{
        return this.cpf;
    }
    getname(): string {
        return this.name;
    }
    getage(): number{
        return this.age;
    }
}

const user = new UserAccount("cpf teste", "nome teste", 25)
console.log(user)
const userName = user.getname()
console.log(userName)

const server = app.listen(process.env.PORT || 3006, () => {
    if (server) {
        const address = server.address() as AddressInfo;
        console.log(`Server is running in http://localhost: ${address.port}`);
    } else {
        console.error(`Failure upon starting server.`);
    }
});