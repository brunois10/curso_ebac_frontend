const alunos = [
    { nome: 'Aluno1', nota: 10 },
    { nome: 'Aluno2', nota: 5 },
    { nome: 'Aluno3', nota: 9 },
    { nome: 'Aluno4', nota: 2 },
];

function alunosMedia6(arrayDeAlunos) {
    return arrayDeAlunos.filter(aluno => aluno.nota >= 6);
}

const alunosMedia6Array = alunosMedia6(alunos);
console.log(alunosMedia6Array);