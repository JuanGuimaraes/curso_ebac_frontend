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

    // let aluno1 = new Aluno("Jose", 10)
    // let aluno2 = new Aluno("Maria", 9)
    // let aluno3 = new Aluno("Aline", 6)
    // let aluno4 = new Aluno("Marcos",3)


//     const media = (nome, nota) => {
//                 let notaMinima = 6;
//                 this.nome = nome
//                 this.nota = nota

//                 if (notaMinima <= nota) {
//                     return (`Olá ${nome}, sua nota ${nota} é otima, aprovado`);
//                 } else{
//                     return (`Olá ${nome}, sua ${nota} está baixa, reprovado`);
//                 }
//             };


// const exibeMedia = media;

// console.log(media(aluno1.nome, aluno1.nota));




