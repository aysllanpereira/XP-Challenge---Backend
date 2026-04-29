const { DataTypes } = require('sequelize')
const sequelize = require('../config/database')

const Ativo = sequelize.define('Ativo', {
    
    id: {
        type: DataTypes.INTEGER,
        primaryKey: true,
        autoIncrement: true
    },

    nome: {
        type: DataTypes.STRING,
        allowNull: false
    },

    valor: {
        type: DataTypes.DECIMAL(15, 2),
        allowNull: false
    },

    quantidade: {
        type: DataTypes.INTEGER,
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
    tableName: 'ativos',
    timestamps: true
});

Ativo.associate = (models) => {
    Ativo.hasMany(models.Investimento, {
        foreignKey: "codAtivo",
        as: "investimentos"
    })
}

module.exports = Ativo;
