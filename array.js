let novo = [1,2,3,4]

console.log(typeof(novo)) // o tipo array é um objeto

console.log(novo[4]) //retorna undefined
novo[4] = 5 //pode ser declarado dinamicamente
console.log(novo[4])
novo.push(6) //tambem aceita método push
console.log(novo) //e tambem pode imprimir o array todo
let pop = novo.pop() //o método pop exclui o ultimo valor adicionado ao array (pilha) e retorna esse valor
console.log(pop)

novo[6] = 7 //pode fazer um array com espaços em branco
console.log(novo)
console.log(novo[5]) //uma busca por um valor em branco retorna undefined

novo.pop() //excluindo o valor 7
console.log(novo) //o valor vazio NÃO DEIXA de existir
novo.push(6) //se for feito uma adição esse valor virá depois do undefined
console.log(novo)

novo.push("texto", 49.65) //pode adicionar outros tipos de valores em um mesmo array, e multiplos valores em push
console.log(novo) //não é recomendado porque desorganiza o código