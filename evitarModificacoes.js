let obj = {
    nome:"Marcos",
    idade: 30
}
Object.preventExtensions(obj) //Proibe adição de chaves. Permite exclusão e modificação de valores.
console.log(Object.isExtensible(obj))//verifica se podem ser adicionadas chaves ao objeto
obj.idade = 44
console.log(obj.idade)


Object.seal(obj) //proibe adição e exclusão de chaves. Permite modificação de valores.
console.log(Object.isSealed(obj))//verifica se o objeto esta selado
obj.idade = 20
console.log(obj.idade)


Object.freeze(obj)//Poribe adição e exclusão de chaves. Proibe modificação de valores
console.log(Object.isFrozen(obj)) //verifica se o objeto está congelado
obj.idade = 80 //nao funciona
console.log(obj.idade)





