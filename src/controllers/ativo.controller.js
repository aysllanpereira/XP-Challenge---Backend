const AtivoServices = require('../services/ativo.service');

class AtivoController {
    async listarTodosAtivosPorCliente(req, res) {
        try {
            const ativos = await AtivoServices.listarAtivosPorCliente(req.params.id);

            if(ativos == '') return res.json({ message: 'Cliente não encontrado' });

            return res.status(200).json(ativos);
        } catch (error) {
            return res.send(error);
        }
    }

    async listarAtivoPorId(req, res) {
        try {
            const ativo = await AtivoServices.listarAtivoPorId(req.params.id);

            if(!ativo) return res.json({ message: 'Ativo não encontrado' });

            return res.status(200).json(ativo);
        } catch (error) {
            return res.send(error);
        }
    }

    async updateQuantidadeAtivo(req, res) {
        try {
            const ativo = await AtivoServices.updateAtivoQuantidade(req.params.id, req.body);
            
            if(!ativo) return res.json({ error: 'Ativo não encontrado' });

            return res.send(ativo);
        } catch (error) {
            return res.send(error);
        }
    }
}

module.exports = new AtivoController();
