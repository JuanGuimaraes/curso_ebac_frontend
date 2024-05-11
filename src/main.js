class Aluno {
    constructor(nome, nota) {
        this.nome = nome
        this.nota = nota
    }
}

const alunos = [
    {nome: 'Jose', nota: 10},
    {nome: 'Maria', nota: 3},
    {nome: 'Aline', nota: 6},
    {nome: 'Marcos', nota: 9},
    {nome: 'Julia', nota: 5},
    {nome: 'Pedro', nota: 1},
    {nome: 'João', nota: 10},
]

const alunosAprovados = alunos.filter(aluno => aluno.nota >= 6);

console.log(alunosAprovados);