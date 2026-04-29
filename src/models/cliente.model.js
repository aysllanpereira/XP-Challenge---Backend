const { DataTypes } = require('sequelize')
const sequelize = require('../config/database')

const Cliente = sequelize.define('Cliente', {

    id: {
        type: DataTypes.INTEGER,
        primaryKey: true,
        autoIncrement: true
    },

    nome: {
        type: DataTypes.STRING,
        allowNull: false
    },

    email: {
        type: DataTypes.STRING,
        unique: true,
        allowNull: false
    },

    senha: {
        type: DataTypes.STRING,
        allowNull: false
    },

    createdAt: {
        type: DataTypes.DATE,
        allowNull: false
    },

    updatedAt: {
        type: DataTypes.DATE,
        allowNull: false
    }
}, {
    tableName: 'clientes',
    timestamps: true
});

Cliente.associate = (models) => {
    Cliente.hasOne(models.Conta, {
        foreignKey: "codCliente",
        as: "contas"
    });

    Cliente.hasMany(models.Investimento, {
        foreignKey: "codCliente",
        as: "investimentos"
    });
};

module.exports = Cliente;
