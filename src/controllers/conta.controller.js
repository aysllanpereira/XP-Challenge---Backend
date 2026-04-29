
const contaService = require('../services/conta.service');

class ContaController {

    async deposito(req, res) {

        try {

            const { codCliente, valor } = req.body;

            const result = await contaService.depositar(codCliente, valor);

            return res.status(200).json(result);

        } catch (error) {

            return res.status(400).json({
                error: error.message
            });

        };

    }

    async sacar(req, res) {

        try {

            const { codCliente, valor } = req.body;

            const result = await contaService.sacar(codCliente, valor);

            return res.status(200).json(result);

        } catch (error) {

            return res.status(400).json({
                error: error.message
            });

        };

    }

    async saldo(req, res) {

        try {
            
            const { codCliente } = req.params;

            const result = await contaService.buscarSaldo(codCliente);

            return res.json(result);

        } catch (error) {

            return res.status(400).json({
                error: error.message
            });
            
        }

    }

}

module.exports = new ContaController();