const obj = {a: 1, b:2, c:3, soma(){return this.a + this.b + this.c}}
console.log(obj.soma())

console.log(JSON.stringify(obj)) //transforma um objeto num JSON, a função não é incluida




//transforma um JSOn em um objeto, a sequencia de dados deve sempre obedecer a regra de aspas duplas no nome das chaves
console.log(JSON.parse('{"a":1,"b":2,"c":3}'))