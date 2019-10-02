
console.log(soma(2,3))
//function declaration
//nesse metodo o compilador permite o acesso a função antes dela ser declarada (ou seja, você pode usar ela antes da declaração)
function soma(x,y)
{
    return x + y
}
//console.log(sub(3,2)) //isso não funciona
//function expression
let sub = function (x,y)
{
    return x - y
}
//
console.log(sub(5,2))

//console.log(multi(3,3)) //isso nao funciona
//named function expression
let multi = function multi(x,y)
{
    return x*y 
}
console.log(multi(4,3))