// EXEMPLOS DE IMPLEMENTAÇÃO ---------------------------------------------------------------

// EXERCÍCIO 0A
function soma(num1, num2) {
  // implemente sua lógica aqui
  return num1 + num2
}

// EXERCÍCIO 0B
function imprimeMensagem() {
  // implemente sua lógica aqui
  const mensagem = prompt('Digite uma mensagem!')

  console.log(mensagem)
}

// EXERCÍCIOS PARA FAZER ------------------------------------------------------------------

// EXERCÍCIO 01
function calculaAreaRetangulo() {
 const alturaRetangulo = Number(prompt("Digite a altura do retângulo:"))
 const larguraRetangulo = Number(prompt("Digite a largura do retângulo:"))
 areaRetangulo = alturaRetangulo * larguraRetangulo
console.log(areaRetangulo)
return areaRetangulo
}

// EXERCÍCIO 02
function imprimeIdade() {
  // implemente sua lógica aqui
  const anoAtual = Number(prompt("Digite o ano atual"))
  const anoNascimento = Number(prompt("Digite o ano de seu nascimento"))
  idade = anoAtual - anoNascimento
  console.log(idade)
  return idade
}

// EXERCÍCIO 03
function calculaIMC(peso, altura) {
  // implemente sua lógica aqui
  return peso /(altura * altura)

}

// EXERCÍCIO 04
function imprimeInformacoesUsuario() {
  // implemente sua lógica aqui
  // "Meu nome é NOME, tenho IDADE anos, e o meu email é EMAIL."
  const nome = prompt("Digite seu nome")
  const idade = Number(prompt("Digite sua idade"))
  const email = prompt("Digite seu e-mail")
  console.log(`Meu nome é ${nome}, tenho ${idade} anos, e o meu email é ${email}.`)

}

// EXERCÍCIO 05
function imprimeTresCoresFavoritas() {
  // implemente sua lógica aqui
  const primeiraCor = prompt("Quais suas tres cores favoritas? Digite a primeira:") 
  const segundaCor = prompt("Agora a segunda:")
  const terceiraCor = prompt("Agora a terceira:")
  const listaCor = [primeiraCor, segundaCor, terceiraCor]
  console.log(listaCor)

}

// EXERCÍCIO 06
function retornaStringEmMaiuscula(string) {
  // implemente sua lógica aqui
  return string.toUpperCase()

}

// EXERCÍCIO 07
function calculaIngressosEspetaculo(custo, valorIngresso) {
  // implemente sua lógica aqui
  return custo / valorIngresso
}

// EXERCÍCIO 08
function checaStringsMesmoTamanho(string1, string2) {
  // implemente sua lógica aqui
  return string1.length === string2.length
}

// EXERCÍCIO 09
function retornaPrimeiroElemento(array) {
  // implemente sua lógica aqui
  return array[0] 
 }

// EXERCÍCIO 10
function retornaUltimoElemento(array) {
  // implemente sua lógica aqui
  return array[array.length -1]
}

// EXERCÍCIO 11
function trocaPrimeiroEUltimo(array) {
  // implemente sua lógica aqui
  const novoPrimeiro = array[array.length -1]
  array[array.length -1] = array[0]
  array[0] = novoPrimeiro
  return array

}

// EXERCÍCIO 12
function checaIgualdadeDesconsiderandoCase(string1, string2) {
  // implemente sua lógica aqui
  return string1.toUpperCase() === string2.toUpperCase()

}

//EXERCÍCIO 13
function checaRenovacaoRG() {
  // implemente sua lógica aqui
  const anoAtual = Number(prompt("Digite o ano atual"))
  const anoNascimento = Number(prompt("Digite o ano de nascimento"))
  const EmissaoRg = Number(prompt("Digite o ano de emissão do RG"))
  const idade = anoAtual - anoNascimento
  const ultimaRenovacao = anoAtual -EmissaoRg
  console.log(((idade <= 20 && ultimaRenovacao >= 5))||(((idade > 20 && idade <= 50 && ultimaRenovacao >= 10)))||((idade > 50 && ultimaRenovacao >= 15)))
//   if (idade <= 20 && ultimaRenovacao >= 5)
//      console.log(true)
//   else if (idade > 20 && idade <= 50 && ultimaRenovacao >= 10)
//           console.log(true)
//   else if(idade > 50 && ultimaRenovacao >= 15)
//           console.log(true)
//   else console.log(false)
}



// EXERCÍCIO 14
function checaAnoBissexto(ano) {
  // implemente sua lógica aqui
  const anoBissexto = (ano % 4 === 0) && ((ano % 100 !== 0) || (ano % 400 === 0))
  return anoBissexto

}

// EXERCÍCIO 15
function checaValidadeInscricaoLabenu() {
  // implemente sua lógica aqui
   const idade = prompt("Você tem mais de 18 anos?")
   const ensinoMedio = prompt("Você possui ensino médio completo?")
   const disponibilidade = prompt("Você possui disponibilidade exclusiva durante os horários do curso?")
   const resultado = (idade === "sim"  && ensinoMedio === "sim" && disponibilidade === "sim") 
   console.log(resultado)
   //return resultado
}