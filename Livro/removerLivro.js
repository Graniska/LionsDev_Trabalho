const {livros} = require('../data')

const removerLivro = (req, res) => {
    const {id} = req.params
    const index = livros.findIndex((b) => b.id == id)

    if (index === -1) {
        return res.status(404).send('Livro Não Encontrado')
    }

    const livroRemovido = livros.splice(index, 1)[0]

 
    res.status(200).send({mensagem: 'Livro Removido com Sucesso', livro: livroRemovido})
}

module.exports = removerLivro