/*
Exercícios de Interpretação

1 - console.log(b) = 10
   console.lpg(a,b) = 10, 5

2 - console.log(a,b,c) = 10, 10, 10

3 - O programa calcula o valor da hora trabalhada recebendo como parâmetros o total de horas trabalhadas e o valor recebido por dia

    horasTrabalhadas
    valorDia
*/

//Exercícios de Escrita

//1 -

let nome
let idade
console.log(typeof nome)
console.log(typeof idade)

//O tipo impresso das duas variáveis foi "undefined" pois como elas não tiveram nenhum valor atribuido elas ainda não possuem um tipo defiido.

nome = prompt("Qual o seu nome?")
idade = prompt ("Qual a sua idade?")

console.log(typeof nome)
console.log(typeof idade)

//O tipo retornado dessa vez foi "string" nos dois casos, pois tudo que retorna do prompt será uma string

console.log("Olá",nome,", você tem", idade, "anos de idade." )


//2 - 

const roupa = prompt("Você está usando roupa azul hoje?")
const hora = prompt("Você acordou cedo hoje?")
const trabalho = prompt("Você vai trabalhar hoje?") 

console.log("Você está usando roupa azul hoje?", roupa)
console.log("Você acordou cedo hoje?", hora)
console.log("Você vai trabalhar hoje?", trabalho)


//3 -

let a = prompt("Digite um valor inicial para A")
let b = prompt("Digite um valor inicial para B")
let aux
aux = a
a = b
b = aux


console.log("O novo valor de A é: " ,a)
console.log("O novo valor de B é: ", b)


//Desafio

let primeiroNumero = Number(prompt("Digite o primeiro valor:"))
let segundoNumero = Number(prompt("Digite o segundo valor"))

console.log("A soma dos dois números é:", primeiroNumero + segundoNumero )
console.log("A multiplicação do primeiro número pelo segundo é:", primeiroNumero * segundoNumero)
