const frase = "Olaa mundo!"

console.log(frase.charAt(4)) //mesma coisa que frase[4]
console.log(frase.charAt(20)) //Não existe, entao não retorna nada
console.log(frase[20]) //Não existe, retorna undefined

console.log(frase.indexOf("m")) //retorna a casa que possui o valor dado, se houver mais de um valor retorna o primeiro. Se nao houver valor retorna -1
console.log(frase.substring(frase.indexOf("m"))) //retorna a string a partir de um determinado ponto

console.log("Essa frase".concat(" foi ").concat("concateda")) //metodo de concatenação
console.log("essa tambem" + " foi " + "concatenada") //metodo de concatenação

console.log("01/01/1954".split("/")) // retorna arrays separados pelo caracter especificado

console.log(frase.replace("!","?")) //troca a o primeiro caracter especificado pelo outro, perceba que ele não registra essa mudança
console.log(frase)