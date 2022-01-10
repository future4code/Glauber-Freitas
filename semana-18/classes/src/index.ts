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

class Transaction {
    private date: string;
    private value: number;
    private description: string;
    
    constructor(date: string, value: number, description: string) {
        this.date = date;
        this.value = value;
        this.description = description
    }

    getDate(): string{
        return this.date
    }
    getValue(): number{
        return this.value
    }
    getDescription(): string{
        return this.description
    }
}

class UserAccount {
    private cpf: string;
    private name: string;
    private age: number;
    private balance: number = 0;
    private transactions: Transaction[] = [];

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

    getCpf(): string{
        return this.cpf;
    }
    getName(): string {
        return this.name;
    }
    getAge(): number{
        return this.age;
    }
}

const user = new UserAccount("cpf teste", "nome teste", 25)
console.log(user)
const userName = user.getName()
console.log(userName)

const server = app.listen(process.env.PORT || 3006, () => {
    if (server) {
        const address = server.address() as AddressInfo;
        console.log(`Server is running in http://localhost: ${address.port}`);
    } else {
        console.error(`Failure upon starting server.`);
    }
});