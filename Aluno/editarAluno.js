const {alunos} = require('../data') 

const editarAluno = (req, res) => {
    const {id} = req.params
    const novoNome = req.body.nome
    const novaMatricula = req.body.matricula
    const novoCurso = req.body.curso
    const novoAno = req.body.ano

    const aluno = alunos.find((a) => a.id == id)
    // Esta linha de codigo procura no vetor Alunos um aluno cujo ID corresponde ao valor de ID.
    // O comando find irá retornar o primeiro aluno que atende a essa condição e o armazena na variavel aluno.

    if (!aluno) {
        return res.status(404).send({mensagem: 'Aluno Não Encontrado'})
    } // esta linha verifica se a variavel aluno é undefined ou null, se a resposta for 'true', então a seguinte mensagem
        // sera mostrada

    aluno.nome = novoNome
    aluno.matricula = novaMatricula
    aluno.curso = novoCurso
    aluno.ano = novoAno
    res.status(200).send({mensagem: 'Aluno Editado com Sucesso', aluno: aluno})
}

module.exports = {editarAluno}