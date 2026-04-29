const { DataTypes } = require('sequelize')
const sequelize = require('../config/database')

const Investimento = sequelize.define('Investimento', {

    id: {
        type: DataTypes.INTEGER,
        primaryKey: true,
        autoIncrement: true
    },

    qtdeAtivo: {
        type: DataTypes.FLOAT,
        allowNull: false,
        defaultValue: 0,
    },

    codCliente: {
        type: DataTypes.INTEGER,
        allowNull: false,
        references: {
            model: 'clientes',
            key: 'id'
        }
    },

    codAtivo: {
        type: DataTypes.INTEGER,
        allowNull: false,
        references: {
            model: 'ativos',
            key: 'id'
        }
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
    tableName: 'investimentos',
    timestamps: true
});

Investimento.associate = (models) => {
    Investimento.belongsTo(models.Cliente, {
        foreignKey: 'codCliente',
        as: 'clientes'
    });

    Investimento.belongsTo(models.Ativo, {
        foreignKey: 'codAtivo',
        as: 'ativos'
    });
};

module.exports = Investimento;
