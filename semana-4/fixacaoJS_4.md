```javascript
function contaOcorrencias(arrayDeNumeros, numeroEscolhido) {
  let aux = 0
  for (let i of arrayDeNumeros){
    if (i === numeroEscolhido)
    aux +=1
    console.log(aux)
  }
  if (aux === 0)
  return "Número não encontrado"
  else return `O número ${numeroEscolhido} aparece ${aux}x`
}
```