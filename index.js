const express = require('express');
const app = express();
const port = 3000;

// Rotas para aluno
const criarAluno = require('./aluno/criarAluno');
app.post('/aluno', criarAluno);

const listarAluno = require('./aluno/listarAluno');
app.get('/aluno', listarAluno);

const editarAluno = require('./aluno/editarAluno');
app.put('/aluno/:id', editarAluno);

const removerAluno = require('./aluno/removerAluno');
app.delete('/aluno/:id', removerAluno);

const buscarNome = require('./aluno/buscar');
app.get('/aluno', buscarNome);

const buscarMatricula = require('./aluno/buscar');
app.get('/aluno', buscarMatricula);

const buscarCurso = require('./aluno/buscar');
app.get('/aluno', buscarCurso);

// Rotas para livro
const criar = require('./livro/criar');
app.post('/livro', criar);

const listar = require('./livro/listar');
app.get('/livro', listar);

const editar = require('./livro/editar');
app.put('/livro', editar);

const remover = require('./livro/remover');
app.delete('/livro/:id', remover);

app.use(express.json()); //



app.get('/', (req, res) => {
    res.send('Servidor Express está funcionando!');     // app esta definindo uma ROTA URL
                                                      // '/' É a raiz ou o caminho URL do seu aplicativo
                                                      // req armazena as solicitações feitas em URL
                                                      // res retorna as respostas para cada requisição
});

app.listen(port, () => {
    console.log(`Servidor rodando em http://localhost:${port}`);
});

// Resumidamente
//app.listen inicia o servidor express e faz com que ele escute solicitações feita na porta especificada
// o segundo argumento é uma função de callback que é executada qaundo o servidor começa a escutar na porta especificada
// esta função de callback exibe uma mensagem informando que o servidor esta rodando, incluindo a URL de acesso
