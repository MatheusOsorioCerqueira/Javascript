let obj = {
    nome: "Roberto",
    idade: 50
}

obj.CPF = 123456789
console.log(obj.CPF) //A variável CPF foi adicionado ao objeto obj
console.log(obj) //Perceba que o campo CPF aparece no objeto

Object.freeze(obj) //"Congela" o objeto

obj.endereco = "Rua A, 34" //Nova declaração de variável
console.log(obj.endereco) //mostrará undefined

delete obj.CPF //não funcionará

console.log(obj.CPF) //mostrará o valor anterior