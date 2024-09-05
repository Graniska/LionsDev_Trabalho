# trabalho_Lions

## Introdução

Nosso Código foi criado com a proposta de criar uma `API` com as funções de `C.R.U.D` com o propósito criar uma biblioteca de estudos de uma escola onde tem os registros dos Livros, dos Alunos, e dos Alugueis.

Para começar nosso código, eu e minha equipe composta por Guilherme, Nataly e Igor(eu), instalamos o `Express` para conseguirmos efeutar as funções de esportação do codiogo para uma rede de sites. Em seguida declaramos as variasveis, sendo elas o proprio express, um app e a porta de entrada para o site.
```JavaScript
const express = require('express')
const app = express()
const port = 3000
```
Criamos variaveis de reconhecimento para as funções que criamos para cada campo da biblioteca onde cada uma possui um metódo de ultilização para essas funções sendo elas `post, get, put e delete`. 

### Campo Biblioteca (Aluno)
```JavaScript
const criarAluno = require('./aluno/criarAluno')
app.post('./aluno', criarAluno)

const listarAluno = require('./Aluno/listarAluno')
app.get('./aluno', listarAluno)

const editarAluno = require('./Aluno/editarAluno')
app.put('./aluno/:id', editarAluno)

const removerAluno = require('./Aluno/removerAluno')
app.delete('./aluno/:id', removerAluno)
```
### Campo Biblioteca (Livro)
```JavaScript

```

### Campo Biblioteca (Aluguel)
```JavaScript

```
Para enviarmos estes requirimentos para os site, usamos o comando `listen` que inicia o servidor express e faz com que ele escute solicitações feita na porta especificada.

```JavaScript
app.listen(port, () => {
    console.log(`Servidor rodando em http://localhost:${port}`)
});
```
## Desenvolvimentos 
Em nossa equipe separamos funções para cada um dos membros onde o Guilherme ficaria com a parte de crair um documento de `C.R.U.D dos Alugueis`, a Nataly ficaria com a parte de crair um documento de `C.R.U.D dos Livros` e eu com a parte de crair um documento de `C.R.U.D dos Alunos`.
## Função Criar
    1. Fazemos a importação do vetor que será utilizado neste modulo.
        1.1 Em seguida declaramos a função Criar Livro, dentrode seus parâmetros temos req e res.
        1.2 Req: Armazena informações referente a solicitação HTTP
        1.3 Res: é utilizado para construir e enviar a resposta ao cliente, incluindo o status HTTP, cabeçalhos e o corpo da resposta.
    2. Dentro do bloco de código temos um console.log, os dados enviados pelo cliente são armazenados em body, através do comando req.body
    3. Em seguida declaramos uma variavel que vai receber um objeto comtodas as informações preenchidas pelo usuário
    4. Fazemos um push para que o vetor alunos receba as novas informações 
    5. Usamos res.status para enviar uma mensagem em http com status 200 que indica sucesso, assim que o aluno foi adicionado com sucesso.
    6. Por fim, usamos o module.exports para que o modulo possa ser acessa em outros modulos.

### Campo Biblioteca (Livro)

```JavaScript
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
```
### Campo Biblioteca (Aluno)

```JavaScript

```
### Campo Biblioteca (Aluguel)

```JavaScript

```
## Função Listar
    1. Importamos o vetor Livros
    2. Declaramos uma variavel que vai receber os parametros req e res
    3. dentro do bloco de codigo da função, a linha res.status envia uma resposta em http com o status 200 e lista os alunos
### Campo Biblioteca (Livro)

```JavaScript

    const {livros} = require('../data')

    const listarLivros = (req, res) => {
        res.status(200).send(livros)
    }
    
    module.exports = listarLivros
```

### Campo Biblioteca (Aluguel)

```JavaScript

```
## Função Editar
### Campo Biblioteca (Livro)
1. Importamos a função Livros
2. Declaramos uma constante editarLivro que recebe req e res como parametro, dentro da função seta declaramos constantes que vão receber novos dados referentes ao titulo, nome, autor, ano e genero.
3. req.params Extrai o valor do parâmetro id do objeto req.params
4. Esta linha de codigo procura no vetor Livros um livro cujo ID corresponde ao valor de ID.
 O comando find irá retornar o primeiro livro que atende a essa condição e o armazena na variavel livro.
5. Declaramos uma condicional que vai verificar se o valor de aluno e null ou undefined, se o valor for igual a true, então a seguinte mensagem sera mostrada
6. Por fim substituimos os valor dos atributos ja existentes pelos novos valores que o cliente definiu

```JavaScript
const {alunos} = require('../data') 

const editarAluno = (req, res) => {
    const {id} = req.params
    const novoNome = req.body.nome
    const novaMatricula = req.body.matricula
    const novoCurso = req.body.curso
    const novoAno = req.body.ano

    const aluno = alunos.find((a) => a.id == id)
    // Esta linha de codigo procura no vetor Alunos um aluno cujo ID corresponde ao valor de ID.
    // O comando find irá retornar o primeiro aluno que atende a essa condição e o armazena na variavel aluno.

    if (!aluno) {
        return res.status(404).send({mensagem: 'Aluno Não Encontrado'})
    } // esta linha verifica se a variavel aluno é undefined ou null, se a resposta for 'true', então a seguinte mensagem
        // sera mostrada

    aluno.nome = novoNome
    aluno.matricula = novaMatricula
    aluno.curso = novoCurso
    aluno.ano = novoAno
    res.status(200).send({mensagem: 'Aluno Editado com Sucesso', aluno: aluno})
}

module.exports = {editarAluno}
```
### Campo Biblioteca (Aluno)

```JavaScript

```
### Campo Biblioteca (Aluguel)

```JavaScript

```
## Função Remover
### Campo Biblioteca (Livro)
1. Importamos o vetor Livro
2. declaramos uma constante que vai receber req e res como parametro
3. dentro do bloco de codigo temos uma constante que ira extrair o valor do parâmetro id do objeto req.params e armazena diretamente em ID.
4. Declaramos uma condicional que vai verificar se o valor retornado pelo find sera -1
5. Se o valor for igual a true usamos o res.status para enviar uma resposta em http com o metodo 400, que indica erro
```JavaScrip
const {alunos} = require('../data') 

const removerAluno = (req, res) => {
    const {id} = req.params
    const index = alunos.findIndex((a) => a.id == id)

    if (index === -1) {
        return res.status(404).send({mensagem: 'Aluno Não Encontrado'})
    }

    const alunoRemovido = alunos.splice(index, 1)
    res.status(200).send({mensagem: 'Aluno Removido com Sucesso', aluno: alunoRemovido})
    // esta 
}

module.exports = {removerAluno}
```
### Campo Biblioteca (Aluno)

```JavaScript

```
### Campo Biblioteca (Aluguel)

```JavaScript

```
