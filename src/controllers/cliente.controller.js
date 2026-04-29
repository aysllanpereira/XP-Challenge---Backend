const ClienteServices = require('../services/cliente.service')

class ClienteController {
    async getTodosClientes(req, res) {
        try {
            const clientes =  await ClienteServices.getClientes();
            return res.status(200).json(clientes);
        } catch (error) {
            return res.send(error)
        }
    }

    async getClientePorId(req, res) {
        try {
            const cliente = await ClienteServices.getClientePorId(req.params.id);

            if (!cliente) res.json({ message: 'Cliente não encontrado' });

            return res.status(200).json(cliente);
        } catch (error) {
            
        }
    }
}

module.exports = new ClienteController();
