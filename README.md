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

### Campo Biblioteca (Livro)

```JavaScript

```
### Campo Biblioteca (Aluno)

```JavaScript

```
### Campo Biblioteca (Aluguel)

```JavaScript

```
