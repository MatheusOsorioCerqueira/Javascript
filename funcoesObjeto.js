const obj = {
    val1: 123,
    val2: "Texto",
    val3: [1,2,3,4,5]
}

console.log(typeof(obj)) //obj é um tipo objeto
console.log(Object.keys(obj)) //retorna os nomes das chaves
console.log(Object.values(obj)) //retorna os valores das variáveis
console.log(Object.entries(obj)) //retorna uma matriz com [chave,valor]

const matriz = Object.entries(obj)

matriz.forEach(([chave,valor]) => { console.log(`Chave: ${chave} Valor: ${valor}`)}); //retirando valores da matriz

Object.defineProperty(obj,"val4",{
    enumerable: true, //ela aparece quando se faz uma busca
    writable: false, //ela não pode ser reescrita
    value: 222 //valor
})

console.log(Object.entries(obj))

const obj2 = {
    val5 : "Novo texto"
}

const obj3 = {
    val3 : [0,9,8,7,6]
}

Object.assign(obj,obj2,obj3) //"funde" os objetos, caso a chave de um objeto seja igual a uma chave já existente ela é sobreescrita

console.log(obj)
