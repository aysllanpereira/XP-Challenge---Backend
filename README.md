# API de Investimentos

API backend para gerenciamento de clientes, contas e investimentos.

## Tecnologias

* Node.js
* Express
* Sequelize
* MySQL
* JWT (autenticação)
* Dotenv

## Funcionalidades

* Cadastro e login de cliente
* Depósito e saque em conta
* Consulta de saldo
* Compra e venda de ativos
* Listagem de investimentos

## Autenticação

A API utiliza JWT para proteger rotas.

## Como rodar o projeto

# instalar dependências
npm install ou npm i

# configurar variáveis de ambiente (.env)
JWT_SECRET=senha_secreta

# rodar o projeto
npm start

## Testes

As rotas podem ser testadas utilizando o Insomnia ou Postman.

## Estrutura

* controllers → controle das requisições
* services → regras de negócio
* models → banco de dados
* routes → rotas da aplicação
* middlewares → autenticação
* utils → funções auxiliares

