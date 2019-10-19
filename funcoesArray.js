let arr = ["Abacaxi", "Tomate", "Melão", "Laranja","Tangerina", "Goiaba", "Melancia", "Kiwi", "Banana", "Morango"] //array com 10 elementos
let arr2 = [0,2,4,6,8,10,12,14,16,18,20]

//===================================================================

console.log(arr[9]) //os valores individuais podem ser acessados de maneira normal
console.log(arr[15]) //se um valor que não existe for chamado retornará undefined

//===================================================================

arr[10] = "Acerola" //valores podem ser adicionados pelo seu valor no array
arr.push("Uva") //ou usando o método push
console.log(arr[10],arr[11])

//===================================================================

console.log(arr.sort()) //para ordenar os valores existe o método sort

//===================================================================

console.log(arr[5])
delete arr[4] //isso deleta o valor mas não reorganiza o vetor
console.log(arr[4]) //retornará undefined
console.log(arr[5]) //mesmo valor anterior
arr.splice(4,1) //esse método retira do array o valor de acordo com (inicio, numero de casas pra excluir)
console.log(arr[4]) //Laranja agr é o índice 4
arr.splice(4,0,"Goiaba") //Ele também pode adicionar ou trocar os elementos
console.log(arr[4]) //elemento 4 é Goiaba

//===================================================================

console.log(arr.pop()) //exclui o ultimo elemento e retorna o seu valor (como TAD Pilha)
arr.push("Uva") //adiciona elemento na ultima casa do array
console.log(arr.shift()) //exlcui o primeiro elemento e retorna seu valor (como TAD fila)
arr.unshift("Abacaxi") //adiciona elemento na primeira casa do array

//===================================================================

console.log(arr.slice(2,8)) //retorna um novo array com os valores entre os valores do splice

//===================================================================

arr.forEach((valor, indice) => console.log(`${indice}: ${valor}`)) //chama a função para cada valor no array

//===================================================================

console.log(arr2.map((n) => n*10)) //chama a função para todos os parametros E retorna um valor

//===================================================================

piMult = (n) => n*3.14
toValor = (n) => `${parseFloat(n).toFixed(2).replace(".",",")}` //metodo replace troca um valor pelo outro
resultado = arr2.map(piMult).map(toValor)
console.log(resultado)

//===================================================================

console.log(arr2.filter((n) =>  n%3==0 //filtra os resultados de acordo com o valor
))

//===================================================================

resultado = arr.reduce((acumulador,valor) => { //semelhante a função map porem o primeiro parametro é o resultado da chamada anterior
    return acumulador + "," + valor
})//no reduce é possível passar um valor para ser o valor inicial, ele é o segundo parametro da função
console.log(resultado)

//===================================================================

let arr3 = ["Ameixa"]

console.log(arr.concat(arr3)) //junta arrays, pode receber varios arrays para concatenar


