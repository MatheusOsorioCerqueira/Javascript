function soma()
{
    let soma = 0
    for(i in arguments)
    {
        soma += arguments[i];
    }
    console.log(soma);
}

soma(2,3,4,5)
soma(8,4,22,92)
