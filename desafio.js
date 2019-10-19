let criaAluno = (nome, nota, bolsista) =>{
   return {nome,nota,bolsista}
}

let aluno = []
aluno.push(criaAluno("Joao",7.3,false),criaAluno("Maria",9.2,true),criaAluno("Pedro",9.8,false),criaAluno("Ana",8.7,true))
console.log(aluno)

resultado = aluno.map((obj) => obj.bolsista).reduce((acumulador, valor) => { return acumulador && valor })
console.log(resultado)