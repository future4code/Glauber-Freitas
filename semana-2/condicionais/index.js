//------------------------>Exercícios de Interpretação<------------------------
// 1 -
// a. O código começa peddindo para o usuário entrar com um número, depois armazena esse número em uma variável 
//usando a função Number() para ter certeza da que a entrada de dados seja do tipo correto, apó ele faz uma verificação
//pegando o resto da divisão do número inserido por 2 e se o resto for igual a zero ele mostra uma mensagem dizendo que 
//ele passou no teste, se não, a mensagem diz que ele não passou no teste

// b. A mensagem: "Passou no teste" será mostrada par números pares

// c. A mensagem: "Não passou no teste" é mostrada para números ímpares

// 2 -
// a. O código serve para mostrar o preço de uma fruta de acordo com o fruta inserida

// b. "O preço da fruta, maçã, é R$ 2.25"

// c .5, pois ele não iria parar o código onde deveria e iria té o próximo break

// 3 -
// a.Está pedindo para o usuário entrar com um valor e salvando o mesmo em uma variável, tomando cuidado 
//para converter o valor para número

// b."Esse númro passou no teste", se o usuário inserisse um valor negativo qualquer não seria apresentdo nada no terminal
//já q a única verificação feita é se ele é maior q zero.

// c. Sim, o console irá apresentar erro pois a variável mensagem esta sendo declarada dentro da função e sendo usada fora dela, 
//portanto está fora do escopo para ser utilizada 


//--------------------------->Exercícios de Escrita<---------------------------

// 1 -
// const idade = Number(prompt("Digite sua idade"))
// if (idade>=18)
//     console.log("Você pode dirigir")
//     else console.log("Você não pode dirigir")

// 2 -
// const periodo = prompt("Digiteo período em que vc estuda. M para Matutino, V para Vespertino ou N para Noturno").toUpperCase()
// if (periodo === "M")
//     console.log("Bom dia!")
//     else if (periodo === "V")
//     console.log("Boa tarde!")
//     else if(periodo === "N")
//     console.log("Boa noite!")
//     else
//     console.log("Entre com um período válido!")

// 3 -
// const periodo = prompt("Digiteo período em que vc estuda. M para Matutino, V para Vespertino ou N para Noturno").toUpperCase()
// switch (periodo){
//     case "M":
//         console.log("Bom dia!")
//     break
//     case "V":
//         console.log("Boa tarde!")
//     break
//     case "N":
//         console.log("Boa noite!")
//     break
//     default:
//         console.log("Entre com um período válido!")
// }

// 4 -

// const generoFilme = prompt("Digite o genero do filme a ser assistido?").toLowerCase() === 'fantasia'
// const precoIngresso = Number(prompt("Digite o valor a ser pago no ingresso")) < 15

// if (generoFilme && precoIngresso)
//     console.log("Bom filme!!!")
//     else console.log("Escolha outro filme :(")

//---------------------------------->Desafios<---------------------------------

// const generoFilme = prompt("Digite o genero do filme a ser assistido?").toLowerCase() === 'fantasia'
// const precoIngresso = Number(prompt("Digite o valor a ser pago no ingresso")) < 15

// if (generoFilme && precoIngresso){
//     console.log("Bom filme!!!")
//     const lanchinho = prompt("Qual lanche você vai comprar?").toLowerCase()
//     switch (lanchinho){
//         case "pipoca":
//             console.log(`Aproveite sua ${lanchinho}`)
//         break
//         case "chocolate":
//             console.log(`Aproveite seu ${lanchinho}`)
//         break
//         case "doces":
//             console.log(`Aproveite seus ${lanchinho}`)
//         break
//         default:
//             case "pipoca":
//             console.log(`Você não escolheu um lanche válido para comprar`)
//         break


//     } 
// }
    
//     else console.log("Escolha outro filme :(")

// 2 -

// const nome = prompt("Digite seu nome:")
// let tipoJogo = prompt("Digite o tipo de jogo IN para internacional ou DO para domestico").toUpperCase() 
// let etapaJogo = prompt("Digite a etapa do joogo. SF para semi-final, DT para decisão de terceiro lugar e FI final").toUpperCase()
// const categoriaJogo = prompt("Digite a categoria. De 1 a 4")
// const quantidadeIngresso = Number(prompt("Digite a quantidade de ingressos"))
// let valorIngresso = 0
// let = valorIngressoInter = 0

// switch (categoriaJogo){
//     case "1":
//     switch (etapaJogo){
//         case "SF":
//             valorIngresso = 1320
//         break
//         case "DT":
//             valorIngresso = 660
//         break
//         case "FI":
//             valorIngresso =1980
//         break
//     }
//     break
//     case "2":
//     switch (etapaJogo){
//         case "SF":
//             valorIngresso = 880
//         break
//         case "DT":
//             valorIngresso = 440
//         break
//         case "FI":
//             valorIngresso = 1320
//         break   
//         }
//     case "3":
//     switch (etapaJogo){
//         case "SF":
//             valorIngresso = 550
//         break
//         case "DT":
//             valorIngresso = 330
//         break
//         case "FI":
//             valorIngresso = 880
//         break
//     case "4":
//     }
//     switch (etapaJogo){
//         case "SF":
//             valorIngresso = 220
//         break
//         case "DT":
//             valorIngresso = 170
//         break
//         case "FI":
//             valorIngresso = 330
//         break
//     }
// }

// if (tipoJogo === "IN"){
//     valorIngressoInter = Number(valorIngresso * 4.1)
//     tipoJogo = "Internacional"
//     valorIngresso = valorIngressoInter
// } else tipoJogo = "Doméstico"

// if (etapaJogo === "FI")
//     etapaJogo = "Final"
//     else if (etapaJogo === "SF")
//     etapaJogo = "SemiFinal"
//     else etapaJogo = "Decisão do 3º Lugar"

// const valorTotal = Number(valorIngresso * quantidadeIngresso)
// console.log(`
// ------Dados da compra------
// Nome do Cliente: ${nome}
// Tipo de jogo: ${tipoJogo}
// Etapa do jogo: ${etapaJogo}
// Categoria: ${categoriaJogo}
// Quantidade de Ingressos: ${quantidadeIngresso} ingressos
// ----Valores----
// Valor do Ingresso: R$ ${valorIngresso}
// Valor toal: R$ ${valorTotal}`)


const anoAtual = Number(prompt("Digite o ano atual"))
const anoNascimento = Number(prompt("Digite o ano de seu nascimento"))
const podeVotar = anoAtual-anoNascimento
if(podeVotar>=18)
    alert("Você pode votar esse ano!")
    else alert("Você não pode votar esse ano")