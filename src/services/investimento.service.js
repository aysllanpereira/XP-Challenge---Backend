
const { NUMBER } = require('sequelize');
const Ativo = require('../models/ativo.model');
const Conta = require('../models/conta.model');
const Investimento = require('../models/investimento.model');
const Cliente = require('../models/cliente.model');

class InvestimentoService {

    async comprar(codCliente, codAtivo, quantidade) {

        // console.log(codCliente);

        const conta = await Conta.findOne({ where: { codCliente } });

        if(!conta) throw new Error('Conta não encontrada!');

        const ativo = await Ativo.findByPk(codAtivo);

        if(!ativo) throw new Error('Ativo não encontrado!');

        if(quantidade <= 0) throw new Error('Quantidade inválida!');

        const custo = Number(ativo.valor) * quantidade;

        if(Number(conta.saldo) < custo) throw new Error('Saldo insuficiente!')

        let investimento = await Investimento.findOne({
            where: { codCliente, codAtivo }
        });

        conta.saldo -= custo;
        await conta.save();

        ativo.quantidade -= quantidade;
        await ativo.save();

        if(investimento) {
            investimento.qtdeAtivo += quantidade;
            await investimento.save();
        } else {
            await Investimento.create({
                codCliente,
                codAtivo,
                qtdeAtivo: quantidade
            });
        };

        return {
            message: 'Compra realizada com sucesso!'
        };

    }

    async vender(codCliente, codAtivo, quantidade) {

        const conta = await Conta.findOne({ where: { codCliente }});

        if(!conta) throw new Error('Conta não encontrada!');

        const ativo = await Ativo.findByPk(codAtivo);

        if(!ativo) throw new Error('Ativo não encontrado!');

        const investimento = await Investimento.findOne({
            where: { codCliente, codAtivo }
        });

        if(!investimento) throw new Error('Cliente sem ativo!');

        if(quantidade <= 0) throw new Error('Quantidade inválida!');

        if(investimento.qtdeAtivo < quantidade) throw new Error('Quantidade insuficiente!');

        const valorVenda = ativo.valor * quantidade;

        let saldoAtual = Number(conta.saldo);
        
        saldoAtual += valorVenda;
        // console.log(typeof valorVenda);
        // console.log(typeof saldoAtual);
        await conta.save();

        ativo.quantidade += quantidade;
        await ativo.save();

        investimento.qtdeAtivo -= quantidade;
        await investimento.save();

        return {
            message: 'Venda realizada com sucesso!'
        };

    }

    async listarAtivos(codCliente) {

        const listarInvestimentos = await Investimento.findAll({
            where: { codCliente },
            include: [
                { model: Ativo,
                    as: "ativos"
                },
                { model: Cliente,
                    as: "clientes"
                }
            ]
        });

        return listarInvestimentos;

    }

}

module.exports = new InvestimentoService();