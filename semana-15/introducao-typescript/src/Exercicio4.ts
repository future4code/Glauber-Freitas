//a- 
// usando o comando tsc e o nome do arquivo a ser transpilado
//b- 
//usando o comando tsc seguido do caminho do arquivo, src/nome do arquivo
//c-
//Usando apenas o comando tsc
//Não sei se foi algum erro meu, mas percebi q ao utilizar as duas primeiras formas, os arquivos .js gerados
// ficaram na mesma pasta dos arquivos .ts originais, já utilizando apenas o comando tsc eles foram gerados na pasta build,
//sei que este caminho está específicado no arquivo tsconfig mas imaginei que qualquer saida do tsc iria para este caminho determinado
//d-
//foram adicionados caminhos específicos para a raiz e saída, geração do arquivo map da origem e alterado o ecmascript usado