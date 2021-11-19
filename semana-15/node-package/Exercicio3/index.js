//Exercício 3
const tarefas = [
    "Lavar Louça",
    "Comprar leite"
    ]

const adicionar = process.argv[2]
tarefas.push(process.argv[2])
console.table(tarefas)