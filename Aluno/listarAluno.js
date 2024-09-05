const {alunos} = require('../data') 

const listarAluno = (req, res) => {
    res.status(200).send(alunos)
    // esta linha de envia uma resposta http com o status 200  que indica sucesso 
}

module.exports = {listarAluno}