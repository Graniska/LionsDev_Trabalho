const {alunos} = require('../data')

function buscarNome(req, res) {
    const {idAluno} = req.params
    const nomes = alunos.filter(aluno => aluno.idAluno === parseInt(idAluno))

    if (nomes.lenght > 0) {
        res.status(200).send(nomes)
    } else {
        res.status(404).send({mensagem: 'Nenhum Aluno Encontrado'})
    }
}

function buscarMatricula(req, res) {
    const {idAluno} = req.params
    const matriculas = alunos.filter(aluno => aluno.idAluno === parseInt(idAluno))

    if (matriculas.lenght > 0) {
        res.status(200).send(matriculas)
    } else {
        res.status(404).send({mensagem: 'Nenhuma Matricula Encontrada'})
    }
}

function buscarCurso(req, res) {
    const {idAluno} = req.params
    const cursos = alunos.filter(aluno => aluno.idAluno === parseInt(idAluno))

    if (cursos.lenght > 0) {
        res.status(200).send(cursos)
    } else {
        res.status(404).send({mensagem: 'Nenhum Curso Encontrado'})
    }
}

module.exports = {buscarNome, buscarMatricula, buscarCurso}