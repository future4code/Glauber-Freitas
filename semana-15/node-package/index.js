//Exercício 1
// a- usando a propriedade process.argv[] 
// const nome = process.argv[2]
// const idade = Number(process.argv[3])
// const idadeFutura = idade +7 

// console.log(`Olá ${nome}! você tem ${idade} anos, Em sete anos você terá ${idadeFutura}.`)

// Exercício 2
// const operacao = process.argv[2]
// const valor1 = Number(process.argv[3])
// const valor2 = Number(process.argv[4])
// let result = 0

// switch(operacao){
//     case "add":
//         result = valor1+valor2
//         break
//     case "mult":
//         result = valor1*valor2
//         break
//     case "sub":
//         result = valor1-valor2
//         break
//     case "div":
//         result = valor1/valor2
//         break
// }

// console.log(`O resultado é: ${result}`)

//Exercício 3

const tarefas = [
        "Lavar Louça",
        "Comprar leite"
        ]

const adicionar = process.argv[2]
tarefas.push(process.argv[2])
console.table(tarefas)
