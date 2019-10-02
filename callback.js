const marcas = ["Audi","Peogeot","BMW","Renault","Volkswagen","Fiat"]
marcas.forEach((a,b) => {
    console.log(`${b+1}. ${a}`)
})

const notas = [5.5,4.7,8.9,8.8,1.3,6.6]

notas.filter((a) => {
    if(a<6) console.log(a)
})