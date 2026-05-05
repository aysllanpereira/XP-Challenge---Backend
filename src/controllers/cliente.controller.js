const ClienteServices = require('../services/cliente.service')

class ClienteController {
    async listarTodosClientes(req, res) {
        try {
            const clientes =  await ClienteServices.listarClientes();
            return res.status(200).json(clientes);
        } catch (error) {
            return res.send(error);
        }
    }

    async listarClientePorId(req, res) {
        try {
            const cliente = await ClienteServices.listarClientePorId(req.params.id);

            if (!cliente) return res.json({ message: 'Cliente não encontrado' });

            return res.status(200).json(cliente);
        } catch (error) {
            return res.send(error);
        }
    }
}

module.exports = new ClienteController();
