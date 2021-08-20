const criarJogador = (nome)=>{
   let jogador = {
       nome:nome,
       cartas:  [comprarCarta(), comprarCarta()]}
       jogadorCompleto = {
           ...jogador,
        valor: jogador.cartas[0].valor+jogador.cartas[1].valor,
       texto: `${jogador.cartas[0].texto} ${jogador.cartas[1].texto}`
   }
   return jogadorCompleto
   }
const rodada = (jogador)=>{
   jogador.cartas.push(comprarCarta())
   let index = jogador.cartas.length
   let cartaAux = jogador.cartas[index-1]
   jogador.valor = jogador.valor+ cartaAux.valor
   jogador.texto = `${jogador.texto} ${cartaAux.texto}`
}
if(confirm("Bem vindo ao Black Jack"+"\n" +"Quer iniciar uma nova partida?")){
  let jogador1 = criarJogador("jogador1")
  if(jogador1.cartas[0].texto.includes("A")&& jogador1.cartas[1].texto.includes("A"))
  jogador1 = criarJogador("jogador1")
  const jogadorPc = criarJogador("JogadorPc")
  while (confirm(`
       Suas cartas são ${jogador1.texto}. A carta revelada do computador é ${jogadorPc.cartas[0].texto}.
       Deseja comprar mais uma carta?`)){
       rodada(jogador1)
       if (jogador1.valor > 21)
           break 
  }
  if (jogadorPc.valor<jogador1.valor&& jogador1.valor<=21){
     while(jogadorPc.valor<jogador1.valor){
    rodada(jogadorPc)
     if (jogadorPc.valor>21)
     break
       }
  }
  if((jogador1.valor > jogadorPc.valor && jogador1.valor < 21 || jogador1.valor===21)|| (jogador1.valor<21 && jogadorPc.valor>21)){
   alert(`
   Usuário - Cartas: ${jogador1.texto} - Pontuação: ${jogador1.valor}
   Computador Cartas: ${jogadorPc.texto} - Pontuação: ${jogadorPc.valor}
   Você ganhou!!!`)
   }else if (jogador1.valor<jogadorPc.valor|| jogador1.valor > 21){ 
     alert(`
     Usuário - Cartas: ${jogador1.texto} - Pontuação: ${jogador1.valor}
     Computador Cartas: ${jogadorPc.texto} - Pontuação: ${jogadorPc.valor}
     O computador ganhou`)
   }else{
       alert(`
       Usuário - Cartas: ${jogador1.texto} - Pontuação: ${jogador1.valor}
       Computador Cartas: ${jogadorPc.texto} - Pontuação: ${jogadorPc.valor}
       Deu empate`)
  }  }
