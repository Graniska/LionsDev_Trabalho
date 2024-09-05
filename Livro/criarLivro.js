
const {livros} = require('../data')

function criarLivro(req, res) {
   
    console.log(req.body)
   
    const novolivro = {
        id: livros.length + 1,
        nome: req.body.titulo,
        autor: req.body.autor,
        ano: req.body.ano,
        genero: req.body.genero
    }

    livros.push(novolivro)
    res.status(201).send({mensagem: 'Livro Criado com Sucesso!', livro: novolivro})
}

module.exports = criarLivro