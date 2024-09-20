const alunos = [
    { nome: "Pedro", nota: 4 },
    { nome: "João", nota: 7 },
    { nome: "Maria", nota: 6 },
    { nome: "Márcio", nota: 9 },
    { nome: "Antonio", nota: 8 }
];

function alunosAprovados(alunos) {
    return alunos.filter(aluno => aluno.nota > 6);
}

// Obtendo a lista de alunos aprovados
const aprovados = alunosAprovados(alunos);
console.log(aprovados);
