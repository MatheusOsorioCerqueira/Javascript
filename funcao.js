function somar(a, b) //parametros da li
{
    return a+b
}

function imprimir(a)
{
    console.log(a)
}

function somar2(a=0, b=1) //possui valores pré-definidos, no caso de uma passagem de parametros parcial esse valor será utilizado
{
    return a+b;
}

imprimir(somar(2,3)) // imprime 5
imprimir(somar(4)) //soma 4 + undefined. Retorna NaN
imprimir(somar(5,4,3,2,1)) //soma 5 + 4, ignora todos os outros parametros

imprimir(somar2()) //testando somar2

guardarfuncao = somar2 //voce pode passar funções por parametro
console.log(guardarfuncao(3,3)) //guardarfuncao se comporta como soma2

//const subtr = (a,b) => a-b versão reduzida de uma função
const subtr = (a,b) => //dessa forma é possivel criar função mais complicadas
{
    return a-b
}
