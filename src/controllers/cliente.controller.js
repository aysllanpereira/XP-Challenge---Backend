const ClienteServices = require('../services/cliente.service');
const { generateToken } = require('../utils/generateToken.utils');

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

    async login(req, res) {
        try {

            const { email, senha } = req.body;

            const cliente = await ClienteServices.getClientePorEmail(email);

            if(!cliente || cliente.senha !== senha) {
                return res.status(400).json({ message: 'Credenciais inválidas!' });
            }

            const token = generateToken({
                id: cliente.id,
                email: cliente.email
            });

            return res.json({ token });

        } catch (error) {
            return res.status(400).json({ error: error.message });
        }
    }
}

module.exports = new ClienteController();
