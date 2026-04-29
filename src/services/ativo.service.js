const { Ativo, Cliente } = require('../models');

class AtivoService {
    async createAtivo(data) {
        return await Ativo.create(data);
    };

    async getAtivoPorId(id) {
        return await Ativo.findByPk(id);
    }

    async getAtivosPorCliente(id) {
        console.log(id);
        return await Ativo.findAll(id, {
            include: [{
                model: Cliente,
                as: 'clientes'
            }]
        })
    }

    async updateAtivoQuantidade(id, data) {
        return await Ativo.update(data,
            {
                where: { id: id }
            })
    }
}

module.exports = new AtivoService();
