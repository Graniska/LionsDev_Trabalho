const {alunos} = require('../data') 

const removerAluno = (req, res) => {
    const {id} = req.params
    const index = alunos.findIndex((a) => a.id == id)

    if (index === -1) {
        return res.status(404).send({mensagem: 'Aluno Não Encontrado'})
    }

    const alunoRemovido = alunos.splice(index, 1)
    res.status(200).send({mensagem: 'Aluno Removido com Sucesso', aluno: alunoRemovido})
    // esta 
}

module.exports = {removerAluno}