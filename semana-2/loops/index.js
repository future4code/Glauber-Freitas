//--------------------->Exercícios de Interpretação<---------------------
// 1 - o codigo está fazendo uma soma dos numeros de 0 a 4, a saída será 10

// 2 - 19,21,23,25,27,30
// b. sim, seria suficiete, é só alterar a forma como ele é impresso para: console.log(lista.indexOf(numero))

// 3 - *
//     **
//     ***
//     ****
// O programa começa com uma string vazia e pede para o usuario digitar quantas linhas ele quer,
// quando entra no loop ele adiciona um * na string e imprime a mesma e faza verificação se a quantidade se linhas foi atendida,
//se não, ele pega a mesma string e adiciona um * a mais e a imprime na tela, fazendo isso ate que a quantidade de linhas chegue ao 
//digitado pelo usuário


//------------------------>Exercícios de Escrita<------------------------

// 1-

const quantidadePets = prompt("Digite a quantidade de animais de estimação que vc tem:")
let nomePet = ""
let arrayPet = []
if(quantidadePets>0){
    for(let i= 1; i<= quantidadePets; i++){
        nomePet = prompt("Digite o nome no animal de estimação:")
        arrayPet.push(nomePet)
    }
    console.log(arrayPet)
}else console.log("Que pena, você pode adotar um!!!")

//2-

const arrayOriginal = [10, 11, 12, 15, 18, 19, 21, 23, 25, 27, 30]

const imprimeArray=(array)=>{
    for (let elemento of array){
        console.log(elemento)
    }
}
const arrayDivididoPor10=(array)=>{
    for(let elemento of array){
        console.log(elemento/10)
    }
}
const arrayPares=(array)=>{
    let novoarray = []
    for(let elemento of array){
        if(elemento%2 ===0)
        novoarray.push(elemento)
    }
    console.log(novoarray)
}
const arrayStrings=(array)=>{
    let novoarray = []
    let elementoCompleto = ""
    for(let elemento of array){
        elementoCompleto = "O elemento do index "+array.indexOf(elemento)+" é: "+elemento
        novoarray.push(elementoCompleto)
    }
    console.log(novoarray)
}
const maiorMenor=(array)=>{
    let maior = 0
    let menor = 0
    for(let elemento of array){
        if (elemento > maior)
        maior = elemento
        menor = maior
    }
    for(let elemento2 of array){
    if (elemento2 < menor)
    menor = elemento2
    }
    console.log(`O maior elemento do array é: ${maior}, e o menor é: ${menor}.`)
}
imprimeArray(arrayOriginal)
arrayDivididoPor10(arrayOriginal)
arrayPares(arrayOriginal)
arrayStrings(arrayOriginal)
maiorMenor(arrayOriginal)

//------------------------------->Desafios<------------------------------

//1 - 
const numeroUsuario = Number(prompt("digite um numero"))
console.log("Vamos jogar")
let numeroChute = Number(prompt("Chute um numero:"))
let contador = 0
while(numeroChute !== numeroUsuario){
    if (numeroChute > numeroUsuario){
        console.log(`O numero digitado foi: ${numeroChute}`)
        console.log(`Errou, é menor`)
        contador ++
    }else if (numeroChute < numeroUsuario){
        console.log(`O numero digitado foi: ${numeroChute}`)
        console.log(`Errou, é maior`)
        contador ++
    }
    numeroChute = Number(prompt("Chute outro numero:"))
}
if (numeroChute === numeroUsuario){
console.log(`O numero digitado foi: ${numeroChute}`)
console.log(`Acertou!!`)
console.log(`O numero de tentativas foi: ${contador +1}`)
}


// 2-
const getRandom=(max)=>{
    return Math.floor((Math.random() * max)+1)
}

const numeroGerado = getRandom(100) 
console.log("Vamos jogar")
let numeroChute = Number(prompt("Chute um numero:"))
let contador = 0
while(numeroChute !== numeroGerado){
    if (numeroChute > numeroGerado){
        console.log(`O numero digitado foi: ${numeroChute}`)
        console.log(`Errou, é menor`)
        contador ++
    }else if (numeroChute < numeroGerado){
        console.log(`O numero digitado foi: ${numeroChute}`)
        console.log(`Errou, é maior`)
        contador ++
    }
    numeroChute = Number(prompt("Chute outro numero:"))
}
if (numeroChute === numeroGerado){
console.log(`O numero digitado foi: ${numeroChute}`)
console.log(`Acertou!!`)
console.log(`O numero de tentativas foi: ${contador +1}`)
}

// A única alteração foi procurar a respeito de uma função pra gerar o número aleatoriamente q achei com facilidade 