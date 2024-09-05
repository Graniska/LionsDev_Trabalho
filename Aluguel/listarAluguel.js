const { alugueis } = require('../data');

const listarAlugeis = (req, res) => {
    res.status(200).send(alugueis);
};

module.exports = listarAlugeis;

