//--------------------->Exercícios de Interpretação<---------------------
/*
1 - Serão exibidos os cada ítem do array separados, seu ídice e também o array inteiro junto com cada objeto, como o console.log está
   dentro da função os objetos serão exibidos um a um assim que forem criados e não um array.
2 - Será criado um novo array com o nome de cada objeto e depois será exibido na tela
3 - Será criado um array novo contendo todos os objetos que não tenho a propriedade apelido igual "Chijo", portanto,
   [{nome: "Amanda Rangel", apelido: "Mandi"}, {nome: "Lais Petra", apelido: "Laura"}]
*/

//------------------------>Exercícios de Escrita<------------------------
// 1 -
const pets = [
   { nome: "Lupin", raca: "Salsicha"},
   { nome: "Polly", raca: "Lhasa Apso"},
   { nome: "Madame", raca: "Poodle"},
   { nome: "Quentinho", raca: "Salsicha"},
   { nome: "Fluffy", raca: "Poodle"},
   { nome: "Caramelo", raca: "Vira-lata"},
]

const nomePets = pets.map((pet)=>{
   return pet.nome
})
console.log(nomePets)

const petSalsicha = pets.filter((pet)=>{
   return pet.raca === "Salsicha"
})
console.log(petSalsicha)

const descontoPoodle = pets
.filter((pet)=>{
   return pet.raca === "Poodle"
})
.map((pet)=>{
   return `Você ganhou um cupom de desconto de 10% para tosar o/a ${pet.nome}`
})
console.log(descontoPoodle)

// 2 -

const produtos = [
   { nome: "Alface Lavada", categoria: "Hortifruti", preco: 2.5 },
   { nome: "Guaraná 2l", categoria: "Bebidas", preco: 7.8 },
   { nome: "Veja Multiuso", categoria: "Limpeza", preco: 12.6 },
   { nome: "Dúzia de Banana", categoria: "Hortifruti", preco: 5.7 },
   { nome: "Leite", categoria: "Bebidas", preco: 2.99 },
   { nome: "Cândida", categoria: "Limpeza", preco: 3.30 },
   { nome: "Detergente Ypê", categoria: "Limpeza", preco: 2.2 },
   { nome: "Vinho Tinto", categoria: "Bebidas", preco: 55 },
   { nome: "Berinjela kg", categoria: "Hortifruti", preco: 8.99 },
   { nome: "Sabão em Pó Ypê", categoria: "Limpeza", preco: 10.80 }
]


const nomeProdutos = produtos.map((produto)=>{
      return produto.nome
   })
   console.log(nomeProdutos)


const produtoComDesconto = produtos.map((produto)=>{
   let produtoDescontoDe5 = {nome: produto.nome, preco: (produto.preco*0.95).toFixed(2)}
   return produtoDescontoDe5
})
console.log(produtoComDesconto)


const bebidas = produtos.filter((produto)=>{
   return produto.categoria === "Bebidas"
})
console.log(bebidas)


const encontraProdutosYpe = produtos.filter((produto)=>{
   return produto.nome.includes("Ypê")
})
console.log(encontraProdutosYpe)

const fraseProdutosYpe = produtos
   .filter((produto)=>{
      const aux = produto.nome
      if(aux.includes("Ypê"))
      return produto.nome
   })
   .map((produto)=>{
      return `Compre ${produto.nome} por ${produto.preco}`
   })
   console.log(fraseProdutosYpe)


//------------------------------->Desafios<------------------------------

const pokemons = [
   { nome: "Bulbasaur", tipo: "grama" },
   { nome: "Bellsprout", tipo: "grama" },
   { nome: "Charmander", tipo: "fogo" },
   { nome: "Vulpix", tipo: "fogo" },
   { nome: "Squirtle", tipo: "água" },
   { nome: "Psyduck", tipo: "água" },
]
const nomePokemon = pokemons.map((pokemon)=>{
      return pokemon.nome
   })
   console.log(nomePokemon.sort())

const tipoPokemon = pokemons
   .map((pokemon)=>{
      // console.log(pokemon.tipo)
   return pokemon.tipo
   })
   .filter((pokemon, index, pokemons)=> {
      return index === pokemons.indexOf(pokemon)
   })
console.log(tipoPokemon)
