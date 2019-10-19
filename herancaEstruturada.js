class motor 
{
    constructor(potencia, valvulas, combustivel)
    {
        this.potencia = potencia
        this.valvulas = valvulas
        this.combustivel = combustivel
    }

    informacao(){
        return {
            potencia: this.potencia,
            valvulas: this.valvulas,
            combustivel: this.combustivel
        }
    }
}

class carro extends motor
{
    constructor(portas, cor, potencia, valvulas, combustivel)
    {
        super(potencia,valvulas,combustivel)
        this.portas = portas
        this.cor = cor
    }

    informacao(){
        return Object.entries(this)
    }
}


volvo = new carro(2,"Vermelho",200,8,"gasolina")
console.log(volvo.informacao())