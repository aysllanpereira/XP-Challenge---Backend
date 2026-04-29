const AtivoServices = require('../services/ativo.service');

class AtivoController {
    async getTodosAtivosCliente(req, res) {
        try {
            const ativos = await AtivoServices.getAtivosPorCliente();
            return res.status(200).json(ativos);
        } catch (error) {
            return res.send(error);
        }
    }

    async getAtivoPorCodigo(req, res) {
        try {
            const ativo = await AtivoServices.getAtivoPorId(req.params.id);
            return res.status(200).json(ativo);
        } catch (error) {
            return res.send(error);
        }
    }

    async updateQuantidadeAtivo(req, res) {
        try {
            const ativo = await AtivoServices.updateAtivoQuantidade(req.params.id, req.body);
            
            if(!ativo) res.json({ error: 'Ativo não encontrado' });

            return res.send(ativo);
        } catch (error) {
            return res.send(error);
        }
    }
}

module.exports = new AtivoController();
