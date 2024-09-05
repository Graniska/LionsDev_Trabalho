const {alunos} = require('../data') 

function criarAluno(req, res) {
    console.log(req.body) // o cliente envia dados e estas informações são armazenadas em body atravpes do comando 'req.body'
    const novoAluno = {  
        nome: req.body.nome,
        matricula: req.body.matricula,
        curso: req.body.curso,
        ano: req.body.ano
    }
    alunos.push(novoAluno)
    res.status(201).send({mensagem: 'Aluno Cadastrado com sucesso!', aluno: novoAluno})
}

module.exports = {criarAluno}