const { DataTypes } = require('sequelize')
const sequelize = require('../config/database')

const Conta = sequelize.define('Conta', {
    id: {
        type: DataTypes.INTEGER,
        primaryKey: true,
        autoIncrement: true
    },

    codCliente: {
        type: DataTypes.INTEGER,
        allowNull: false
    },

    saldo: {
        type: DataTypes.DECIMAL(15, 2),
        defaultValue: 0,
    }

}, {
    tableName: 'contas',
    timestamps: true
});

module.exports = Conta;
