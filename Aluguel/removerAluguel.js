const { alugueis } = require('../data');

const removerAluguel = (req, res) => {
    const { id } = req.params;
    const index = alugueis.findIndex((b) => b.id == id);

    if (index === -1) {
        return res.status(404).send('Aluguel não encontrado!');
    }

    const aluguelDeletado = alugueis.splice(index, 1)[0];

    res.status(200).send({
        message: 'Alugel deletado com sucesso!',
        aluguel: aluguelDeletado
    });
}

module.exports = removerAluguel;