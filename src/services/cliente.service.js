const { Cliente } = require('../models');

class ClienteService {
    async criarCliente(data) {
        return await Cliente.create(data);
    };

    async listarClientes() {
        return await Cliente.findAll();
    }

    async listarClientePorId(id) {
        return await Cliente.findByPk(id)
    }


}

module.exports = new ClienteService();
