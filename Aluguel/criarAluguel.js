const { aluguel } = require('/..data');

function criarAluguel(req, res) {
    console.log(req.body);
    const novoAluguel = {
    idLivro: alugueis.length + 1,
    idEstudante: req.body.estudante,
    dataAluguel: req.body.dataAluguel
    };
    alugueis.push(novoAluguel)
    res
        .status(201)
        .send({
            message: 'Aluguel criado zé né coisa!', aluguel: novoAluguel, dataAluguel: novoDataAluguel
        });
}

modulo.exports = criarAluguel