const { alugueis } = require('../data');

const atualizarAluguel = (req, res) => {
    const { id } = req.params;
    const novoDataAluguel = req.body.dataAluguel;
    const novaDataDevolucao = req.body.dataDevolucao;

    const aluguel = alugueis.find((b) => b.id == id);

    if (!alugueis) {
        return res.status(404).send({ message: 'aluguel não encontrado' });
    }

    aluguel.dataAluguel = novoDataAluguel;
    aluguel.dataDevolucao = novaDataDevolucao;
    res.status(200).send({
        message: 'Aluguel atualizado com secessio!',
        aluguel: aluguel
    });
}

module.exports = atualizarAluguel;

/*"dataAluguel": "2024-08-15"
“dataDevolucao": "2024-08-15"*/