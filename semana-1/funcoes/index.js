//Aula 06 - Funções
 //----------------->Exercícios de Interpretação<-----------------



// 1 -
//   a. 10
//      50
//   b. a função ainda sim seria executada e retornaria os mesmos resultados, porém o resultado não seria impresso no console.

// 2 -


 //-------------------->Exercícios de Escrita<--------------------



 // 1 -
//   const funcao = () =>{
//     return
// }
// a.
const informarDados = () => {
    console.log("Eu sou Glauber, tenho 36 anos, moro em Belo Horizonte e sou estudante")
}
 informarDados()

// b.
const informarDadosUsuario = (nome, idade, cidade, profissao) =>{
    const texto = (`Eu sou ${nome}, tenho ${idade} anos, moro em ${cidade} e sou ${profissao}`)
    return texto
}

const nome = prompt("Insira seu nome:")
const idade = Number(prompt("Insira sua idade:"))
const cidade = prompt("Insira sua cidade:")
const profissao = prompt("Insira sua profissão:")

console.log(informarDadosUsuario(nome, idade, cidade, profissao))

// 2 -
// a.
const somar = (primeiroNumero, segundoNumero)=>{
    const soma = primeiroNumero + segundoNumero
    return soma
}
const primeiroNumero = Number(prompt("Digite um número:"))
const segundoNumero = Number(prompt("Digite outro número"))

console.log(soma(primeiroNumero, segundoNumero))

// b.
const verificarMaior = (primeiroNumero, segundoNumero)=>{
    const resultado = primeiroNumero >= segundoNumero
    return resultado
}
const primeiroNumero = Number(prompt("Digite um número:"))
const segundoNumero = Number(prompt("Digite outro número"))

console.log(verificarMaior5(primeiroNumero, segundoNumero))

// c.
const verificarPar=(numero)=>{
    const resultado = (numero%2 === 0)
    return resultado
}
const numero = Number(prompt("Digite um numero:"))
console.log(verificarPar(numero))

// d.
const verificarTamanhoMensagem=(texto)=>{
    const tamanhoTexto = texto.length
    const textoMaiusculo = texto.toUpperCase()
    return (`O tamanho da mensagem é: ${tamanhoTexto} - ${textoMaiusculo}`)
}
const texto = prompt("Digite uma mensagem")
console.log(verificarTamanhoMensagem(texto))

// 3 -
const somar=(primeiroNumero, segundoNumero)=>{
    const soma = primeiroNumero + segundoNumero
    return soma
}

const subtrair=(primeiroNumero, segundoNumero)=>{
    const subtracao = primeiroNumero - segundoNumero
    return subtracao
}

const dividir=(primeiroNumero, segundoNumero)=>{
    const divisao = primeiroNumero * segundoNumero
    return divisao
}

const multiplicar=(primeiroNumero, segundoNumero)=>{
    const multiplicacao = primeiroNumero / segundoNumero
    return multiplicacao
}

const primeiroNumero = Number(prompt("Digite um número:"))
const segundoNumero = Number(prompt("Digite outro número:"))
console.log("A soma dos números é:", somar(primeiroNumero, segundoNumero))
console.log("A subtração dos números é:", subtrair(primeiroNumero, segundoNumero))
console.log("A divisão dos números é:", dividir(primeiroNumero, segundoNumero))
console.log("A multiplicação dos números é:", multiplicar(primeiroNumero, segundoNumero))



 //--------------------------->Desafio<---------------------------


// 1 -

const imprimir=(valor)=>{
    console.log(valor)
}

const somar=(primeiroValor,segundoValor)=>{
    const resultado = primeiroValor + segundoValor
    imprimir(resultado)
}

const valor1 = Number(prompt("Digite um valor:"))
const valor2 = Number(prompt("Digite outro valor"))

somar(valor1, valor2)


