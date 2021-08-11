//----------------Exercícios de Interpretação--------------

// 1
// a. undefined   //pois o array ainda não teve um valor atribuido
// b. null   //pois seu valor atribuido foi null
// c. 11
// d. 3 
// e. [3, 19, 5, 6, 7, 8, 9, 10, 11, 12, 13]
// f. 9 


// 2.

//"SUBI NUM ÔNIBUS EM MIRROCOS 27"

//------------------Exercícios de Escrita-------------------

// 1. 
const nomeUsuario = prompt("Digite seu nome de Usuário:")
const emailUsuario = prompt("Digite seu e-mail: ")

console.log(`O e-mail ${emailUsuario} foi cadastrado com sucesso. Seja bem vindo(a), ${nomeUsuario}!`)  


// 2. 

let arrayComidas =["Pizza", "Macarrão", "Churrasco", "Risoto", "Lasanha"]
console.log(arrayComidas)
console.log(`Essas são minhas comidas preferidas: 
${arrayComidas[0]}
${arrayComidas[1]}
${arrayComidas[2]}
${arrayComidas[3]}
${arrayComidas[4]}`)
arrayComidas[1] = prompt("Digite sua comida preferida: ")
console.log(arrayComidas)


// 3.

let listaDeTarefas = []

listaDeTarefas[0] = prompt("Insira três tarefas que devem ser realizadas durante o dia, insira a primeira:")
listaDeTarefas[1] = prompt("Insira a segunda:")
listaDeTarefas[2] = prompt("Insira a terceiraa:")
console.log(listaDeTarefas)
const tarefaRealizada = Number(prompt("Qual tarefa já foi realizada? 1, 2 ou 3?"))
listaDeTarefas.splice(tarefaRealizada-1,1)
console.log(listaDeTarefas)

//------------------Desafios-------------------



// 1.

let frase = prompt("Digite uma frase: ")
frase = frase.trim()
const palavras = frase.split(" ")
console.log(palavras)


// 2.

const frutas = ["Banana" , "Morango" , "Abacaxi" , "Laranja" , "Ameixa"]
//const indice = frutas.indexOf("Abacaxi")
console.log(frutas)
console.log(`O índice do Abacaxi é "${frutas.indexOf("Abacaxi")}", e o tamanho do array é ${frutas.length}`)
//console.log(indice)


