
const Conta = require('../models/conta.model');

class ContaService {

    async depositar(codCliente, valor) {

        if(valor <= 0) throw new Error('Valor inválido!');

        const conta = await Conta.findOne({ where: { codCliente } });

        if(!conta) throw new Error('Conta não encontrada!');

        conta.saldo = Number(conta.saldo) + Number(valor);
        await conta.save();

        return {
            message: 'Depósito realizado com sucesso!',
            saldo: conta.saldo
        };

    }

    async sacar(codCliente, valor) {
        
        if(valor <= 0) throw new Error('Valor inválido!');

        const conta = await Conta.findOne({ where: { codCliente } });

        if(!conta) throw new Error('Conta não encontrada!');

        if(Number(conta.saldo) < valor) throw new Error('Saldo insuficiente!');

        conta.saldo = Number(conta.saldo) - Number(valor);
        await conta.save();

        return {
            message: 'Saque realizado com sucesso!',
            saldo: conta.saldo
        };
        
    }

    async buscarSaldo(codCliente) {

        const conta = await Conta.findOne({ where: { codCliente } });

        if(!conta) throw new Error('Conta não encontrada!');

        return {
            saldo: conta.saldo
        };
    }

}

module.exports = new ContaService();