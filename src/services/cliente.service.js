const { Cliente } = require('../models');

class ClienteService {
    async createCliente(data) {
        return await Cliente.create(data);
    };

    async getClientes() {
        return await Cliente.findAll();
    };

    async getClientePorId(id) {
        return await Cliente.findByPk(id)
    };

    async getClientePorEmail(email) {
        return await Cliente.findOne({
            where: { email }
        });
    };

}

module.exports = new ClienteService();
