//Exercício 1
// a- usando a propriedade process.argv[] 
const nome = process.argv[2]
const idade = Number(process.argv[3])
const idadeFutura = idade +7 

console.log(`Olá ${nome}! você tem ${idade} anos, Em sete anos você terá ${idadeFutura}.`)

