//a-
let minhaString: string = "string"
// minhaString = 2
//O VsCode informa que um número não pode ser atribuído ao tipo string

//b-
//let meuNumero: number = 1
let meuNumero: number | string = 2
meuNumero = "string"
//è possível atribuir mais de um tipo à variável usando o "|" (ou) na sua declaração

//c-
// type Person = {
//     name: string,
//     age: number,
//     favoriteColor: string
// }
// const person: {name:string, age:number, favoriteColor:string}=
// {name: "", age:0, favoriteColor:""}

// const person1: Person = {
//     name:"Pessoa1",
//     age:10,
//     favoriteColor:"vermelho"
// }

// const person2: Person = {
//     name:"Pessoa2",
//     age:20,
//     favoriteColor:"verde"
// }

// const person3: Person = {
//     name:"Pessoa3",
//     age:30,
//     favoriteColor:"amarelo"
// }

//d-

enum FavoriteColor {
    VERMELHO = "Vermelho",
    LARANJA = "Laranja",
    AMARELO = "Amarelo",
    VERDE = "Verde",
    AZUL = "Azul",
    ANIL = "Anil",
    VIOLETA = "Violeta"
}
type Person = {
    name: string,
    age: number,
    favoriteColor: FavoriteColor
}

const person1: Person = {
    name:"Pessoa1",
    age:10,
    favoriteColor:FavoriteColor.VERMELHO
}

const person2: Person = {
    name:"Pessoa2",
    age:20,
    favoriteColor:FavoriteColor.VERDE
}

const person3: Person = {
    name:"Pessoa3",
    age:30,
    favoriteColor:FavoriteColor.AMARELO
}