const { Ativo, Cliente, Investimento } = require('../models');

class AtivoService {
    async criarAtivo(data) {
        return await Ativo.create(data);
    };

    async listarAtivoPorId(id) {
        return await Ativo.findByPk(id);
    }

    async listarAtivosPorCliente(id) {
        const investimento = await Investimento.findAll({
            where: { codCliente: id },
            include: [
                { model: Cliente, as: 'clientes' },
                { model: Ativo, as: 'ativos' }
            ]
        });

        return investimento;
    }

    async atualizarAtivoQuantidade(id, data) {
        return await Ativo.update(data,
            {
                where: { id: id }
            })
    }
}

module.exports = new AtivoService();