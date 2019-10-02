class Pessoa
{
    constructor()
        { 
            this._valor  = 0//o underline é uma conveção que mostra que o valor só deve ser acessado internamente
        } 
    get valor(){return this._valor++} //método get
    set valor(valor)
    {
        if(valor>=0)
        {
            this._valor = valor
        }
    }
}

let p1 = new Pessoa
for(let i=0;i<10;i++)
{
    console.log(p1.valor)//retorna o valor da função
}

p1.valor = -1 //não funciona

console.log(p1.valor)

p1._valor = -1 //funciona

console.log(p1.valor)