# Processo Seletivo
Este é um projeto simples, criado para um processo seletivo.

### Pré-requisitos

Para executá-lo, será necessário ter instalado o [Node.js](https://nodejs.org/en/). 

### 🎲 Rodando o Back End

```bash
# Clone este repositório
$ git clone https://github.com/CSchio/avaliacao.git

# Acesse a pasta do projeto no terminal
$ cd avaliacao

# Vá para a pasta backend
$ cd backend

# Instale as dependências
$ npm install

# Execute a aplicação com um dos comandos a seguir
$ npm start
# ou
$ node index.js

# O servidor inciará na porta:8080>
```

### 🎲 Rodando o Front End

Após o servidor estar rodadndo o site pode ser aberto de duas maneiras:

#### Abrindo o projeto já compilado

Para executar o projeto diretamente basta abrir no navegador o arquivo localizado em:

```
avaliacao/frontend/dist/index.html
```

Caso queira compilar você mesmo o projeto:
```bash
# Acesse a pasta do projeto no terminal
$ cd avaliacao

# Vá para a pasta frontend
$ cd frontend

# Instale as dependências
$ npm install

# Suba a página em uma porta diferente do backend (caso o mesmo já esteja rodando ele irá selecionar a porta 8081 por padrão)
$ npm run serve

# ou, caso queira compilar
$ npm run build

# O servidor inciará na porta:8080>
```

### Funcionalidades

Preencha os campos abaixo de OrdenaLista e Interlace e clique em seus respectivos botões de envio. A resposta aparecerá abaixo do botão.

Exemplos de json aceitos pelo programa são:

OrdenaLista:
```json
{
  "listas": {
    "salaN": [1, 5, 7, 8, 9],
    "salaS": ["a", "x", "n"]
  }
}
```

Interlace:
```json
{
  "intervaloA": [20, 40],
  "intervaloB": [10, 20]
}
```