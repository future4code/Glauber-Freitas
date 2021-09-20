//Exercícios de Interpretação


// 1
// a. false
// b. false
// c. true
// d. bolean


// 2
// Tudo que vem do prompt é string, portanto a soma irá concatenar os dois numeros como se fossem duas strings.


// 3
//A solução seria usar o metodo number nas variáveis

//let primeiroNumero = Number(prompt("Digite um numero!"))
//let segundoNumero = Number(prompt("Digite outro numero!"))


//Exercícios de Escrita

// 1

// let idadeUsuario = Number(prompt("Digite a sua idade: "))
// let idadeAmigo = Number(prompt("Digite a idade do seu melhor amigo: "))
// let maiorIdade = idadeUsuario > idadeAmigo

// console.log("Sua idade é maior do q a do seu melhor amigo? ",maiorIdade)
// console.log("A diferença de idade entre vocês dois é de: ", Number(idadeUsuario - idadeAmigo))


// // 2

// let numeroPar = Number(prompt("Digite um numero par: "))
// console.log(numeroPar%2)


// // 3

// let idade = Number(prompt("Digite a sua idade: "))
// console.log("Sua idade em meses é: " ,idade * 12, "meses")
// console.log("Sua idade em dias é: ", idade * 365, "dias")
// console.log("Sua idade em horas é: ", idade * 8760, "horas")


// // 4

// let primeiroNumero = Number(prompt("Digite o primeiro número: "))
// let segundoNumero = Number(prompt("Digite o segundo número: "))

// console.log("O primeiro número é maior que o segundo?", primeiroNumero > segundoNumero)
// console.log("O primeiro número é igual ao segundo?", primeiroNumero === segundoNumero)
// console.log("O primeiro número é divisível pelo segundo?", primeiroNumero % segundoNumero === 0)
// console.log("O segundo número é divisível pelo primeiro?", segundoNumero % primeiroNumero === 0)




// //Desafios

// // 1

// console.log("77ºF equivalem a: ",(77-32)*(5/9)+273.15, "ºK")
// console.log("80ºC equivalem a: ", (80)*(9/5)+32, "ºF ")
// console.log("30ºC equivalem a: ", (30)*(9/5)+32, "ºF, e: ", ((30)*(9/5))*(5/9)+273.15, "ºK")

// let valorGraus = Number(prompt("Digite o valor em graus celsius a ser convertido: "))
// console.log("",valorGraus,"ºC equivalem a: ", (valorGraus)*(9/5)+32, "ºF, e: ", ((valorGraus)*(9/5))*(5/9)+273.15, "ºK")

// // 2

// let energiaConsumida = Number(prompt("Digite a quantidade de energia consumida em quilowatt/hora: "))

// console.log("O valor a ser pago pela residêmcia é : R$", energiaConsumida * 0.05)
// console.log("O valor a ser pago por uma residência que consumiuu 280 quilowatt/hora é:  R$", 280*0.05)
// console.log("O valor a ser pago por uma residência que consumiuu 280 quilowatt/hora com desconto de 15% é:  R$", (280*0.05)*(85/100))
const valorA = prompt("Digite o primeiro valor")
const valorB = prompt("Digite o segundo valor")
if(valorA<valorB)
alert(`${valorA}, ${valorB}`)
else if (valorA>valorB){
        alert(`${valorB}, ${valorA}`)
}else {
    alert(`Digite dois valores diferentes`)
}



