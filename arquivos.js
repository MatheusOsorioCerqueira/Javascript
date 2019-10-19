const fs = require("fs")

let caminho = __dirname + "/textoLeitura.txt" //__dirname é um comando de fs
let conteudo = fs.readFileSync(caminho, "utf-8") //lê o arquivo de forma sincrona
console.log(conteudo)

//==================================================================================================================

caminho = __dirname + "/exemploBD.json"
conteudo = fs.readFileSync(caminho,"utf-8") //existe um terceiro parametro que recebe um erro e um parametro que é o parametro lido
console.log(conteudo)
const obj = JSON.parse(conteudo)

//==================================================================================================================

conteudo = fs.readFile(caminho,"utf-8",(err,texto) => { //cria uma nova thread para o comando
    const conteudo = JSON.parse(texto)
    console.log(`${conteudo.db.host}:${conteudo.db.port}`)
})
console.log("Isso provavelmente será impresso antes!")

//==================================================================================================================

const produto = {
    nome: "Trakinas",
    peso: 100,
    sabor: "chocolate"
}

fs.writeFile(__dirname + "/novoArquivo.txt", JSON.stringify(produto),(err) => err || "Sucesso")
