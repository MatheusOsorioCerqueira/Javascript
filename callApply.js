//a função call e apply sao semelhantes, porém a função apply espera que os valores sejam enviados em um array

const p1 = {
    nome: "Joao",
    idade: 32
}

function dizInformacao(cpf = 00000000)
{
    console.log(`Minha idade é: ${this.idade}, meu CPF é: ${cpf}`)
}
dizInformacao.call(p1,1234578)
dizInformacao.apply(p1,[12345678])

