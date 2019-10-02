for (let i=0;i<10;i++)
{
    console.log("i=",i)
}
//console.log(i) //não pode porque i foi declarado com let, então só está definido dentro do bloco

for(var i=0;i<10;i++)
{
    console.log("i=",i)
}

console.log("i=",i) //com i declerado usando var o escopo é global
