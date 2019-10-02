function rand([min=0,max=1000])
{
    if(min>max)
    {
        [min,max] = [max,min]
    }
    return Math.random()*(max-min) + min
}

const pessoa =
{
    nome: "Joao",
    sobrenome: "Da Silva",
    idade: 20,
    sexo: "Masculino",
    endereco:
    {
        rua: "Rua A",
        numero: 123
    }
}


const {nome,idade} = pessoa //recupera valor de dentro do objeto pessoa
console.log(nome,idade)

const {endereco: {numero: n}} = pessoa //recuperando em mais de um nivel e dando nomes novos para as variaveis
console.log(n)
const {cpf = 0} = pessoa //valor pré-definido
console.log(cpf)

 const arr = [10,30]

 console.log(rand(arr))



