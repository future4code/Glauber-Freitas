// ATENÇÃO!!!
//    -> NÃO COMENTE NENHUMA DAS FUNÇÕES DECLARADAS!!! 
//    -> NÃO MODIFIQUE OS PARÂMETROS DAS FUNÇÕES!!! ()


// EXERCÍCIO 01
function retornaTamanhoArray(array) {
    const tamanhoArray = array.length
   return tamanhoArray
}

// EXERCÍCIO 02
function retornaArrayInvertido(array) {
  const arrayInvertido= []
  const aux = array.length
  for (let i=0; i<aux ; i++ ){
        arrayInvertido[i] = array[aux-i-1]
  }
  return arrayInvertido
}

// EXERCÍCIO 03
function retornaArrayOrdenado(array) {
    let ordenar = array.sort((num1, num2)=>{
        if(num1>num2)
            return 1
        else if(num1<num2)
            return -1
        else return 0
    })
    return ordenar
}

// EXERCÍCIO 04
function retornaNumerosPares(array) {
  let arrayPares = []
  for (let elemento of array){
      if (elemento % 2 ===0)
      arrayPares.push(elemento)
  }
  return arrayPares
}

// EXERCÍCIO 05
function retornaNumerosParesElevadosADois(array) {
    let arrayParesElevado2 = []
    for (let elemento of array){
        if (elemento % 2 ===0)
        arrayParesElevado2.push(Math.pow(elemento,2))
    }
    return arrayParesElevado2
}

// EXERCÍCIO 06
function retornaMaiorNumero(array) {
    let maiorValor = 0
    for(let i = 0; i< array.length; i++){
        if(array[i]> maiorValor)
            maiorValor = array[i]
        }
    return maiorValor
}

// EXERCÍCIO 07
function retornaObjetoEntreDoisNumeros(num1, num2) {
    let resultado={
        maiorNumero: 0,
        maiorDivisivelPorMenor: false,
        diferenca: 0
    }
    let menorNumero
    if (num1 > num2){
    resultado.maiorNumero = num1
    menorNumero = num2
    }else{ 
        resultado.maiorNumero = num2
        menorNumero = num1
    }
    if (resultado.maiorNumero%menorNumero===0)
        resultado.maiorDivisivelPorMenor = true
    resultado.diferenca = resultado.maiorNumero - menorNumero
    
    return resultado
}

// EXERCÍCIO 08
function retornaNPrimeirosPares(n) {
   let arrayPares =[]
   let aux = 0
    for(i=0; i<n; i++){
    arrayPares.push(aux)
    aux+=2}
    return arrayPares
}

// EXERCÍCIO 09
function classificaTriangulo(ladoA, ladoB, ladoC) {
    if (ladoA === ladoB && ladoA ===ladoC)
    return "Equilátero"
    else if (ladoA !== ladoB && ladoB !== ladoC && ladoA !== ladoC)
    return "Escaleno"
    else if((ladoA === ladoB && ladoA !== ladoC)||(ladoA === ladoC && ladoA !== ladoB)||(ladoA !==ladoB && ladoB === ladoC))
    return "Isósceles"
    
}

// EXERCÍCIO 10
function retornaSegundoMaiorESegundoMenor(array) {
    let maior1 = 0
    let maiorindice= 0
    let menor1= 0
    let menorindice= 0
    let resultado=[]
    if (array.length>2){
    for(let i = 0; i< array.length; i++){
        if(array[i]> maior1){
            maior1 = array[i]
            maiorindice = i
        }
    }
    menor1 = maior1
    for(let i = 0; i< array.length; i++){
        if(array[i]< menor1){
            menor1 = array[i]
            menorindice = i
        }
    }
    maior1 = 0
    array.splice(maiorindice,1)
    array.splice(menorindice,1)
    for(let i = 0; i< array.length; i++){
        if(array[i]> maior1){
            maior1 = array[i]
            maiorindice = i
        }
    }
    
    menor1 = maior1
    for(let i = 0; i< array.length; i++){
        if(array[i]< menor1){
            menor1 = array[i]
            menorindice = i
        }
    }
    
    resultado.push(maior1)
    resultado.push(menor1)
    return resultado
}
else return array
}

// EXERCÍCIO 11
function retornaChamadaDeFilme(filme) {
let textoAtores = ""
for(let i=0; i<filme.atores.length; i++){
    textoAtores = textoAtores+= filme.atores[i]
    if(i<filme.atores.length-1)
    textoAtores+=", "
}
    return `Venha assistir ao filme ${filme.nome}, de ${filme.ano}, dirigido por ${filme.diretor} e estrelado por ${textoAtores}.`
}

// EXERCÍCIO 12
function retornaPessoaAnonimizada(pessoa) {
   pessoa.nome = "ANÔNIMO"
   return pessoa
}

// EXERCÍCIO 13A
function retornaPessoasAutorizadas(pessoas) {
    const pessoasAutorizadas = pessoas.filter((pessoa)=>{
        return pessoa.altura >= 1.5 && pessoa.idade > 14 && pessoa.idade<60
    }
    )
    return pessoasAutorizadas
}

// EXERCÍCIO 13B
function retornaPessoasNaoAutorizadas(pessoas) {
    let pessoasNaoAutorizadas = pessoas.filter((pessoa)=>{
        return pessoa.altura < 1.5 || pessoa.idade <= 14 || pessoa.idade>=60
    }
    )
    return pessoasNaoAutorizadas
}

// EXERCÍCIO 14
function retornaContasComSaldoAtualizado(contas) {
   for(let conta of contas){
       let totalCompras=0
       for( totalCompras of conta.compras)
            totalCompras += totalCompras
        conta.saldoTotal-=totalCompras
        conta.compras = []
   }
   return contas

}

// EXERCÍCIO 15A
function retornaArrayOrdenadoAlfabeticamente(consultas) {
  let listaOrdenada = consultas.sort((nome1,nome2)=>{
  if (nome1.nome>nome2.nome)
    return 1
  else if (nome1.nome<nome2.nome)
  return -1
  else return 0
  })
  return listaOrdenada
}

// EXERCÍCIO 15B
function retornaArrayOrdenadoPorData(consultas) {
   let listaOrdenadaHorario = consultas.sort((data1, data2)=>{
        let dataCorreta1 = data1.dataDaConsulta.split("/")
        let dataCorreta2 = data2.dataDaConsulta.split("/")
        let novaData1 = new Date(dataCorreta1[2], dataCorreta1[1], dataCorreta1[0])
        let novaData2 = new Date(dataCorreta2[2], dataCorreta2[1], dataCorreta2[0])
        if (novaData1>novaData2)
            return 1
        else if (novaData1<novaData2)
            return -1
        else return 0
    })
   return listaOrdenadaHorario
}