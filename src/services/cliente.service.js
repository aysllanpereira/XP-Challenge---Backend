const { Cliente } = require('../models');

class ClienteService {
    async createCliente(data) {
        return await Cliente.create(data);
    };

    async getClientes() {
        return await Cliente.findAll();
    }

    async getClientePorId(id) {
        return await Cliente.findByPk(id)
    }


}

module.exports = new ClienteService();
