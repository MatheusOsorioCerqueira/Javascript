function VaiDarErro(frase)
{
    try
    {
        return frase.valor.toUpperCase() + "."
    }
    catch(SyntaxError)
    {
        return frase.value.toUpperCase() + "!!!"
    }
}

const obj =
{
    value: "Uma frase qualquer"
}
console.log(VaiDarErro(obj))