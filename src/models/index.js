
'use strict';

const Sequelize = require('sequelize');
const sequelize = require('../config/database');
const Ativo = require('./ativo.model');
const Cliente = require('./cliente.model');
const Conta = require('./conta.model');
const Investimento = require('./investimento.model');

const db = {
    sequelize,
    Sequelize,
    Ativo,
    Cliente,
    Conta,
    Investimento
};

Object.keys(db).forEach(modelNome => {
    if(db[modelNome].associate) {
        db[modelNome].associate(db);
    }
});

module.exports = db;