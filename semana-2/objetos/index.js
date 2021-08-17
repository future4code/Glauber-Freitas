//--------------------->Exercícios de Interpretação<---------------------
//1
//"Matheus Nachtergaele"
//"Virginia Cavendish"
//{canal: "Globo", horario: "14h"}

// 2
//{nome: "Juca", idade: 3, raca: "SRD"}
//{nome: "Juba", idade: 3, raca: "SRD"}
//{nome: "Jubo", idade: 3, raca: "SRD"}
// b - os trêspontos fazem o espalhamento de um objeto, que nada mais é do que uma copia exata dele.

//3 
//false
//undefined

//b-
//false pois o valor da propriedade "backender" é false
//undefined pq o objedo não possui a propriedade "altura" pasada como parâmetro.
//------------------------>Exercícios de Escrita<------------------------

//1
const pessoa = {
    nome: "Nome",
    apelidos: ["apelido1", "apelido2", "apelido3"]
}
const exibirNome=(pessoa)=>{
console.log(`Eu sou ${pessoa.nome} mas pode me chamar de: ${pessoa.apelidos[0]}, ${pessoa.apelidos[1]} ou ${pessoa.apelidos[2]} }`)
}
const pessoa1 = pessoa
exibirNome(pessoa1)

//b
const pessoa2 = {
    ...pessoa,
    apelidos: ["apelido4", "apelido5", "apelido6"]
}
exibirNome(pessoa2)

//2

const pessoa1 = {
    nome: "Glauber",
    idade: "36",
    profissao: "Estudante"
}
const pessoa2 = {
    nome: "Aline",
    idade: "36",
    profissao: "Veterinaria"
}
const exibirDados=(pessoa)=>{
console.log(`
    ${pessoa.nome} - ${pessoa.nome.length}
    ${pessoa.idade} - ${pessoa.idade.length}
    ${pessoa.profissao} - ${pessoa.profissao.length}`)
}
let pessoa = pessoa1
exibirDados(pessoa)
pessoa = pessoa2
exibirDados(pessoa)

//3

const carrinho = []

const fruta1 = {
nome: "Morango",
disponibilidade: true
}
const fruta2 = {
nome: "Laranja",
disponibilidade: true
}
const fruta3 = {
nome: "Abacaxi",
disponibilidade: true
}
const inserirCarrinho=(fruta)=>{
    carrinho.push(fruta)
}
inserirCarrinho(fruta1)
inserirCarrinho(fruta2)
inserirCarrinho(fruta3)
console.log(carrinho)
//------------------------------->Desafios<------------------------------

//1
const inserirDados = ()=>{
    const nome = prompt("Digite seu nome:")
    const idade = prompt("Digite sua idade:")
    const profissao = prompt("Digite sua profissão")
const pessoa = {
    nome: nome,
    idade: idade,
    profissao: profissao
}
console.log(`Nome: ${pessoa.nome}, profissão ${pessoa.profissao}, idade ${pessoa.idade} anos `)
console.log(typeof {pessoa})
}
inserirDados()

//2

const filme1 = {
    nome: "Matrix",
    anoLancamento: 1999
}
const filme2 = {
    nome: "A Espera de um Milagre",
    anoLancamento: 1999
}
// const filme3 = {
//     nome: "Jurassic Park",
//     anoLancamento: 1994
// }
// const filme4 ={
//     nome: "Vingadores",
//     anoLancamento: 2012  
// }
const verificarLancamento=(filmeTeste1,filmeTeste2)=>{
    console.log(`O primeiro filme foi lançado antes do segundo? ${filmeTeste1.anoLancamento < filmeTeste2.anoLancamento}`)
    console.log(`O primeiro filme foi lançado no mesmo ano do segundo? ${filmeTeste1.anoLancamento === filmeTeste2.anoLancamento}`)
}
verificarLancamento(filme1,filme2)
//verificarLancamento(filme3, filme2)
//verificarLancamento(filme4, filme1)

//3

const carrinho = []

const fruta1 = {
nome: "Morango",
disponibilidade: true
}
const fruta2 = {
nome: "Laranja",
disponibilidade: true
}
const fruta3 = {
nome: "Abacaxi",
disponibilidade: true
}
const inserirCarrinho=(fruta)=>{
    carrinho.push(fruta)
}
inserirCarrinho(fruta1)
inserirCarrinho(fruta2)
inserirCarrinho(fruta3)
console.log(carrinho)

const alterarDisponibilidade=(fruta)=>{
const frutaDisp ={
    ...fruta,
    disponibilidade: !fruta.disponibilidade
}
return frutaDisp
}

const dispAlterada = alterarDisponibilidade(fruta1)
inserirCarrinho(dispAlterada)
console.log(carrinho)
