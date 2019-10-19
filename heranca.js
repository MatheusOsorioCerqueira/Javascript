const carro =
{
    velMax: 200,
    velAtual: 00,

    acelerar(aceleracao)
    {
        if(this.velAtual + aceleracao <= this.velMax)
        {
            this.velAtual = this.velAtual + aceleracao
        }
        else
        {
            this.velAtual = this.velMax
        }
    },
    display()
    {
        return `A velocidade máxima é: ${this.velMax}`
    }
}

const volvo = {
    modelo: "Volvo",
    display(){
        return `Modelo: ${this.modelo} ${super.display()}`
    }
}

Object.setPrototypeOf(volvo,carro) //cria herança

console.log(volvo.display())

const ferrari = Object.create(carro,{
   modelo: {value:"Ferrari"}
})


console.log(ferrari.display())