//Função Factory
function criarPessoa(nome,idade,sexo,CPF)
{
    return{
        nome,
        idade,
        sexo,
        CPF,
        falarIdade: () => console.log(`Eu tenho ${idade} anos`) //nao funciona com this.idade
    }
}

let p1 = criarPessoa("Marcos",54,"M",12345678)
console.log(`Tipo: ${typeof(p1)}\nDados:`, p1)
p1.falarIdade()

//função-classe
function myPessoa(nome,idade,sexo,CPF)
{
    this.nome = nome;
    this.idade = idade;
    this.sexo = sexo;
    this.CPF = CPF;
    
    this.falarIdade = () => console.log(`Eu tenho ${this.idade} anos`)
}

p2 = new myPessoa("Julia",43,"F",8754321)
console.log(`Tipo: ${typeof(p2)}\nDados:`, p2)
p2.falarIdade()

//Classe
class Pessoa
{
    constructor(nome,idade,sexo,CPF)
    {
        this.nome = nome;
        this.idade = idade;
        this.sexo = sexo;
        this.CPF = CPF;
    }
    
    falarIdade()
    {
        console.log(`Eu tenho ${this.idade} anos`)
    }
}

p3 = new Pessoa("Carlos",20,"M",2143578)
console.log(`Tipo: ${typeof(p3)}\nDados:`, p3)
p3.falarIdade()






