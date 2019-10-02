const peso = 1.0 //interpretado como inteiro até que tenha valor decimal
const peso2 = Number("2.0") //transforma string em numero

//ambos os comandos dao valor true para Inteiro
console.log(Number.isInteger(peso))
console.log(Number.isInteger(peso2))

const valor = 7.395678987654 //tipo float
console.log(Number.isInteger(valor)) //retorna falso

console.log(valor) 
console.log(valor.toFixed(1)) //retorna um arredondamento
console.log(valor.toFixed(1).toString()) //concatenação dos métodos toFixed e toString
