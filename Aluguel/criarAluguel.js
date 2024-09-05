let { alugueis } = require('../data');

const criarAluguel = (req, res) => {
    console.log(req.body);
    const novoAluguel = {
    idLivro: req.body.idLivro,
    idEstudante: req.body.idEstudante,
    dataAluguel: req.body.dataAluguel,
    dataDevolucao: req.body.dataDevolucao,
    };
    alugueis.push(novoAluguel);
    res.status(201).send({ message: 'Aluguel criado zé né coisa!', aluguel: novoAluguel});
}

module.exports = criarAluguel