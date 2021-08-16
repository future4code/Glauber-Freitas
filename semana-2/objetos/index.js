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
const maisApelidos = {
    ...pessoa,
    maisApelidos: ["apelido4", "apelido5", "apelido6"]
}

const pessoa2 = maisApelidos
exibirNome(pessoa2)
//------------------------------->Desafios<------------------------------65