
    // Aqui usaremos o metodo GET

    const {livros} = require('../data')

    const listarLivros = (req, res) => {
        res.status(200).send(livros)
    }
    
    module.exports = listarLivros