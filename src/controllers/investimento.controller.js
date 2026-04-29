
const investimentoService = require('../services/investimento.service');

class InvestimentoController {

    async comprar(req, res) {

        try {

            const { codCliente, codAtivo, quantidade } = req.body;

            const result = await investimentoService.comprar(
                codCliente,
                codAtivo,
                quantidade
            );

            return res.status(200).json(result);

        } catch (error) {

            return res.status(400).json({ error: error.message });

        }

    }

    async vender(req, res) {

        try {
            
            const { codCliente, codAtivo, quantidade } = req.body;

            const result = await investimentoService.vender(
                codCliente,
                codAtivo,
                quantidade
            );

            return res.status(200).json(result);

        } catch (error) {

            return res.status(400).json({ error: error.message });
            
        }

    }

    async listar(req, res) {

        try {
            
            const { codCliente, codAtivo, quantidade } = req.params;

            const result = await investimentoService.listarAtivos(
                codCliente,
                codAtivo,
                quantidade
            );

            return res.json(result);

        } catch (error) {

            return res.status(400).json({ error: error.message });
            
        }

    }

}

module.exports = new InvestimentoController();